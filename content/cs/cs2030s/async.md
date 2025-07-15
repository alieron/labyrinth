---
tags:
- cs/paradigm
- cs2030s/chapter12
- lang/java
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs2030s/parallelism)   [Next](/labyrinth/notes/cs/cs2030s/fork_and_join)
### Summary
Limitations of Thread
- cannot return a value -> unable to pass results between tasks running on different threads, except by using shared variables
- no execution order -> no way to specify that one task is reliant on another
- creates a new thread instance for every task -> overhead, cannot reuse the same thread
```java
// in a method
class A {
  int x = 1; // the only way to share info between threads
  
  void bo() {
	// int x = 1; // error, local variable would not be effectively final
    new Thread(() -> {x = 2;}).start();
    new Thread(() -> {x = 3;}).start(); // no guarentee which task will finish first
    System.out.println(x); // x is non deterministic, no guarantee that the tasks will finish by the time this is called
  }
}

A a = new A();
a.bo();

// in jshell
jshell> int x = 1; // because non-enclised variables behave like both fields and local variables in jshell
x ==> 1

jshell> new Thread(() -> { x = 2;}).start()

jshell> x
x ==> 2
```

CompletableFuture
- overcomes the limitations of Thread
```java
int findIthPrime(int i) { // time expensive function
  return Stream
          .iterate(2, x -> x + 1)
          .filter(x -> isPrime(x))
          .limit(i)
          .reduce((x, y) -> y)
          .orElse(0);
}

CompletableFuture<Integer> ith = CompletableFuture.supplyAsync(() -> findIthPrime(i));
CompletableFuture<Integer> jth = CompletableFuture.supplyAsync(() -> findIthPrime(j));

CompletableFuture<Integer> diff = ith.thenCombine(jth, (x, y) -> x - y); // blocks main until ith and jth complete, not very concurrent

diff.join(); // final step, only when we finally need the value
```

Async and non-async stagers
- non-async -> next stage is run on the same thread as it's <span style="color:red">called</span> in
- async -> may allow the next stage to be run on a different thread, more concurrency
- in both cases, they still have to wait for the current instance/stage to complete
```java
CompletableFuture<Integer> a = CompletableFuture.supplyAsync(() -> {
		System.out.println(Thread.currentThread().getName() + " ");
		return 1;
	})
	// non-async
	.thenApply(x -> { // called from the main thread
		System.out.print(Thread.currentThread().getName() + " ");
		return x + 1;
	});
	// ForkJoinPool.commonPool-worker-82 main ********************
	// main will be blocked until the pipeline is complete

	// async
	.thenApplyAsync(x -> {
		System.out.println(Thread.currentThread().getName());
		return x + 1;
	});
	// *ForkJoinPool.commonPool-worker-82 ******ForkJoinPool.commonPool-worker-82 *************
	// main thread is free to run other tasks

for (int i = 0; i < 20; i++) {
	System.out.print("*");
}
a.join();
```

Exception handling in CompletableFuture
- handling in a different thread
```java
CompletableFuture.<Integer>supplyAsync(() -> null)
            .thenApply(x -> x + 1) // NullPointerException in the thread that runs this lambda
            // deferred handling
            .join(); // CompletionException that has to be handle externally
			
			// handling in the thread
			.handle((t, e) -> (e == null) ? t : 0) // returns 0 if exception is encountered
			.join();
```
### Concept
Thread
- [java.lang.Thread](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Thread.html)
- encapsulates a function to run in a separate thread
- parallel streams uses threads from the `ForkJoinPool`
- program only exits once all created threads have terminated
```java
Thread::new(Runnable)

Thread t = new Thread(() -> { // anonymous class of runnable, overrides the run method
  for (int i = 2; i < 100; i += 1) {
    System.out.print("*");
  }
}).start(); // starts the execution of runnable, and returns immediately

Thread.currentThread().getName(); // returns the name of the current thread, the main thread is called "main"

Thread.sleep(1000); // make the currrent sleep/block for 1000 miliseconds

t.isAlive(); // check if a thread is still running
```

CompletableFuture
- [java.util.concurrent.CompletableFuture](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/CompletableFuture.html)
- a [monad](/labyrinth/notes/cs/cs2030s/monads_and_functors)
- gives us the behaviour of chaining, lazy evaluation and null handling(exceptions)
```java
// factory methds, same functionalitu as of
CompletableFuture.completedFuture(T value) // like the factory method in Lazy, accepts the precomputed value
CompletableFuture.runAsync(Runnable runnable) // completes once the lambda finishes
CompletableFuture.supplyAsync(Supplier<T> supplier) // like the factory method for Lazy

// blockers
c.get() // waits for all tasks in the pipeline to complete and return the value
// throws InterruptedException if the task is interrupted and ExecutionException if there are exceptions during execution
c.join() // same as get, but doesn't throw checked exceptions
CompletableFuture.allOf(CompletableFuture<?>... cfs) // completes when all complete
CompletableFuture.anyOf(CompletableFuture<?>... cfs) // completes when any one completes

// stagers, have async counterparts
c.thenApply(Function<T, U> fn) // map
c.thenCompose(Function<T, CompletableFuture<U>> fn) // flatMap
c.thenCombine(CompletableFuture<U> other, BiFunction<T, U, V> fn) // combine
c.thenRun(Runnable action) // runs after completion
c.runAfterBoth(CompletableFuture<?> other, Runnable action) // runs after both complete
c.runAfterEither(CompletableFuture<?> other, Runnable action) // runs afther either completes

// exception handlers, handle and whenComplete have async counterparts
c.handle(BiFunction<T,​ Throwable,​ U> fn) // process the return value or the exception value and choose what to return in place
c.exceptionally(Function<Throwable, T> action) // if task finishes exceptionally, return a value based on the exception
c.whenComplete(BiConsumer<T, Throwable> action) // run something based on the result or exception if any
```
> maximize concurrency by calling `get` or `join` as late as possible
### Application
Checking threads
```java
Thread findPrime = new Thread(() -> {
  System.out.println(
      Stream.iterate(2, i -> i + 1)
          .filter(i -> isPrime(i))
          .limit(1_000_000L)
          .reduce((x, y) -> y)
          .orElse(null));
});

findPrime.start();

while (findPrime.isAlive()) {
  try {
    Thread.sleep(1000);
    System.out.print("."); // prints every second that findPrime is running, loading bar
  } catch (InterruptedException e) {
    System.out.print("interrupted");
  }
}
```
> now our main thread is stuck checking other threads...