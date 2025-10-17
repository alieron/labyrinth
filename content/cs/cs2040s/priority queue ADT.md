---
tags:
  - cs2040s/chapter3
  - cs/data_structures
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/deque_ADT
next: /labyrinth/notes/cs/cs2040s/binary_heap

---
### Summary
Priority queue ADT
- each element has a priority

Circular array implementation - [compact array](/labyrinth/notes/cs/cs2040s/compact_array)
- keep the array sorted by priority 

| Operation    | Method                                                                                                    | Performance          |
| ------------ | --------------------------------------------------------------------------------------------------------- | -------------------- |
| `enqueue(v)` | Expensive enqueue: insert into sorted array, one round of [insertion sort](/labyrinth/notes/cs/cs2040s/insertion_sort)<br>Append: add at back       | - $O(n)$<br>- $O(1)$ |
| `dequeue()`  | Pop: remove from front<br>Expensive dequeue: search for highest priority, one round of [selection sort](/labyrinth/notes/cs/cs2040s/selection_sort) | - $O(1)$<br>- $O(n)$ |
> $O(n \log n)$ to sort the array first for expensive enqueue approach, linear DS is not good

Priority queue class
- [java.util.PriorityQueue](https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html) - binary min heap

Library implementation
```java
PriorityQueue<Integer> pq = new PriorityQueue<>(); // min heap by default
// or
PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); // to make a max heap

// enqueue(v)
pq.offer(1);
pq.offer(0);
```
### Concept
Priority queue operations
- `enqueue(v)`
	- add `v` to the queue
- `dequeue()`
	- get the item in the queue with the highest priority and remove it
> similar to [queue operations](/labyrinth/notes/cs/cs2040s/queue_ADT#^abf27d), just that dequeuing is done by order of priority instead of order of entry