---
tags:
- cs/paradigm
- cs2030s/chapter12
- lang/java
complete: false
prev: /labyrinth/notes/cs/cs2030s/async
---



### Summary
RecursiveTask
- [fibonacci](/labyrinth/notes/cs/cs1101s/recursion#^ede420) sequence
```java
class Fibonacci extends RecursiveTask<Integer> {
	final int n;
   
	Fibonacci(int n) {
	    this.n = n;
	}
   
	Integer compute() {
	    if (n <= 1) { // base case
	      return n;
	    }
	    Fibonacci f1 = new Fibonacci(n - 1); // left branch
	    f1.fork(); // allow another thread to run it
	    Fibonacci f2 = new Fibonacci(n - 2); // right branch
	    return f2.compute() + f1.join(); // join(sequentially) the results of the smaller subtasks 
	}
}

Fibonacci fib = new Fibonacci(5);
int res = fib.compute()
```
> not limited to 2 branches, tribonacci is possible too
- binary array sum
```java
class Summer extends RecursiveTask<Integer> {
	private static final int FORK_THRESHOLD = 2;
	private int low;
	private int high;
	private int[] array;
	
	public Summer(int low, int high, int[] array) {
		this.low = low;
		this.high = high;
	    this.array = array;
	}
	
	@Override
	protected Integer compute() {
	    // stop splitting into subtask if array is already small.
	    if (high - low < FORK_THRESHOLD) { // base case
		    int sum = 0;
		    for (int i = low; i < high; i++) {
			    sum += array[i];
		    }
		    return sum;
	    }
	
	    int middle = (low + high) / 2;
	    Summer left = new Summer(low, middle, array);
	    Summer right = new Summer(middle, high, array);
	    left.fork();
	    return right.compute() + left.join();
	}
}
```

ForkJoinPool
- each thread has a deque of tasks
- when a thread is idle, it checks its deque
	- there are tasks in its deque -> pick up from the head
	- deque is empty -> pick up from tail of another thread's deque (work stealing)
- `fork` is called on a subtask, the subtask is added to the head of the current thread
- `join` is called on a subtask, it checks if the subtask has been executed
	- not executed -> call `compute` on that subtask
	- subtask has been completed by other thread -> read the result
	- subtask has been stolen, but still being executed -> current thread becomes idle

Ordering fork and join
- avoid having to search through the deque for the specific task to call `complete` on
- call `join`/`compute` on the latest task, ie. the one not forked, or the one forked last
- `compute` is the same as doing `fork` then `join`, but without the overhead of listing it on the deque
```java
// good ordering
left.fork();  // >-----------+
right.fork(); // >--------+  | should have
return right.join() // <--+  | no crossing
	 + left.join(); // <-----+

left.fork();  // >-----------+
return right.compute() //    | compute in middle
	 + left.join(); // <-----+

// bad ordering
left.fork();  // >-------------+
right.fork(); // >----------+  | there is crossing
return left.join()   // <---|--+
	 + right.join(); // <---+

return left.compute()   // not even concurrent
	 + right.compute();
```

### Concept
Thread pool
- collection of threads and collection(deque) of tasks
- reduces the need to create new threads, just reuse existing ones
- ForkJoinPool -> allows for recursive parallel execution

RecursiveTask
- fork the problem into smaller sub-problems, solve recursively, with threads running in parallel, join the results at the base case
- similar to traversing a [tree](/labyrinth/notes/cs/cs1101s/trees(cs)), forking at every branch, then joining once reaching the leaves
```java
r.fork() // submits subtask r to the thread pool for execution
r.join() // wait for the subtask to complete, invokes r.compute()

abstract T compute() { ... // the method that defines 
```

### Application
```java
class Task extends RecursiveTask<Integer> {
  private int x;
  
  Task(int x) {
    this.x = x;
  }
  
  @Override
  protected Integer compute() {
    if (x >= 4) {
      return x;
    }
    Task t1 = new Task(2 * x);
    Task t2 = new Task(2 * x + 1);
    t1.fork();
    t2.fork();
    return t2.join() + t1.join(); // no crossing
  }
}

new Task(1).compute();

// order for a single thread
thread1 {t(1)}             []
thread1 {t(1)}             [t(3)|t(2)]        // t(1) forks, if there were other threads t(2) might get stolen
thread1 {t(1),t(3)}        [t(2)]             // join on t(3)
thread1 {t(1),t(3)}        [t(7)|t(6)|t(2)]   // t(3) forks
thread1 {t(1),t(3),t(7)}   [t(6)|t(2)]        // join on t(7)
thread1 {t(1),t(3)}        [t(6)|t(2)]        // t(7) completes
thread1 {t(1),t(3),t(6)}   [t(2)]             // join on t(6)
thread1 {t(1),t(3)}        [t(2)]             // t(6) completes
thread1 {t(1)}             [t(2)]             // t(3) completes
thread1 {t(1),t(2)}        []                 // join on t(2)
thread1 {t(1),t(2)}        [t(5)|t(4)]        // t(2) forks
thread1 {t(1),t(2),t(5)}   [t(4)]             // join on t(5)
thread1 {t(1),t(2)}        [t(4)]             // t(5) completes
thread1 {t(1),t(2),t(4)}   []                 // join on t(4)
thread1 {t(1),t(2)}        []                 // t(4) completes
thread1 {t(1)}             []                 // t(2) completes
thread1 {}                 []                 // t(1) completes
```

Ordering
```java
(a) // is parallel and most efficient, offer f1 to other threads, compute f2 locally
f1.fork(); 
int a = f2.compute(); 
int b = f1.join(); 
return a + b; 

(b) // not parallel, offer f1, wait for f1, then compute f2 locally
f1.fork(); 
int a = f1.join(); 
int b = f2.compute(); 
return a + b; 

(c) // not parallel
int a = f1.compute(); 
int b = f2.compute(); 
return a + b; 

(d) // is parallel
f1.fork(); 
f2.fork(); // extra overhaed of offering f2
int a = f2.join(); 
int b = f1.join(); 
return a + b; 

(e) // is parallel
f1.fork(); 
f2.fork(); 
int a = f1.join(); // needs to traverse the deque to reach f1
int b = f2.join(); 
return a + b; 
```

