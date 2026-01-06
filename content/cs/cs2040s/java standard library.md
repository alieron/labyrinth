---
tags:
  - cs2040s
  - lang/java
complete: false
---
### Data Structures
[java.util.List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)
- [java.util.ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html) -> compact array
- [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) -> DLL

```java
import java.util.ArrayList;
import java.util.LinkedList;

List<Integer> A = new ArrayList<>();
// or
List<Integer> A = new LinkedList<>();
A.add(5);
A.add(10);
A.add(15);
A.add(25); // A = [5, 10, 15, 25]

// get(i)
int val = A.get(2); // 15

// search(v)
int idx = A.indexOf(10); // 1
// indexOf returns the index of first match or -1

// insert(i, v)
A.add(2, 20); // A = [5, 10, 20, 15, 25]

// remove(i)
A.remove(1); // A = [5, 20, 15, 25]
```
Stack
- [java.util.Stack](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html) -> compact array
- [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) -> DLL

```java
import java.util.Stack;
import java.util.LinkedList;

Stack<Integer> st = new Stack<>();
// or
LinkedList<Integer> st = new LinkedList<>();

// push(v)
st.push(2); // [2]
st.push(3); // [3, 2]

// pop()
st.pop(); // 3, [2]

// peek()
st.peek(); // 2, [2]

// check if stack is empty
st.empty(); // false

// number of elements in the stack
st.size(); // 1
```

[java.util.Queue](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html)
	- [java.util.ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html) -> circular array 
	- [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) -> DLL

[java.util.Dequeue](https://docs.oracle.com/javase/8/docs/api/java/util/Deque.html) interface
	- [java.util.ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html) -> circular array 
	- [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) -> DLL

```java
import java.util.ArrayDeque;
import java.util.LinkedList;

Deque<Integer> A = new ArrayDeque<>();
// or
Deque<Integer> A = new LinkedList<>();
// insert at tail, following java.util.Queue
A.add(5);
A.add(10);
A.add(15);
A.add(25); // A = 5 -> 10 -> 15 -> 25

// insertHead
A.addFirst(4); // 4 -> 5 -> 10 -> 15 -> 25
// think of it as first element to be popped

// insertTail
A.addLast(8); // 4 -> 5 -> 10 -> 15 -> 25 -> 8

// remove at head, following java.util.Queue
int a = A.remove(); // 5 -> 10 -> 15 -> 25 -> 8

// removeHead
int b = A.removeFirst(); // 10 -> 15 -> 25 -> 8

// removeTail
int c = A.removeLast(); // 10 -> 15 -> 25

// peek at head, following java.util.Queue
int d = A.peek(); // 10

// peekHead
int e = A.peekFirst(); // 10

// peekTail
int f = A.peekLast(); // 25
```

[java.util.PriorityQueue](https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html)
- binary min heap

```java
PriorityQueue<Integer> pq = new PriorityQueue<>(); // min heap by default
// or
PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); // to make a max heap

// enqueue(v)
pq.offer(1);
pq.offer(0);
```

[java.util.Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)
	- [java.util.HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) - hash table, separate chaining
	- [java.util.TreeMap](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html) - BST
```java
Map<Integer> mp = new HashMap<>();
// or
Map<Integer> mp = new TreeMap<>();

// insert(v)
mp.put(0, 123);
mp.put(0, 100); // replaces the old mapping
mp.put(1, 120);
// 0 -> 100, 1 -> 120

// search(v)
mp.containsKey(0); // true, checks if this key has a value
mp.containsValue(120); // true, checks if this value is present

// remove(v)
mp.remove(0); // removes key-value pair
// 0 -> 120

mp.size(); // number of key-value pairs
mp.isEmpty(); // check if the Map is empty
mp.values(); // collection of the values
```
> there are other useful functions that allow Map to be a [monad](/labyrinth/notes/cs/cs2030s/monads_&_functors)

[java.util.Set](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html) interface
	- [java.util.HashSet](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html) - hash table, separate chaining
	- [java.util.TreeSet](https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html) - BST
```java
Set<Integer> set = new HashSet<>();
// or
Set<Integer> set = new TreeSet<>();

// insert(v)
set.add(1);
set.add(1); // duplicates are not added
set.add(12);
// 1, 12

// search(v)
set.contains(1); // true, checks if the value is present

// remove(v)
set.remove(1);
// 12

set.size(); // number of values in the set
set.isEmpty(); // check if the Set is empty
```
> duplicates are ignored since there is no repetiton in [sets](/labyrinth/notes/math/cs1231s/sets#^95939c)
### IO
BufferedReader ^fecb85
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // initialization

br.readLine(); // read the whole line
```

PrintWriter ^6d9f10
```java
PrintWriter pw = new PrintWriter(System.out); // initialization

pw.println(); // stage some content to be printed

pw.close(); // print all staged content at once
```

StringTokenizer

StringBuilder

StringJoiner ^35facb
