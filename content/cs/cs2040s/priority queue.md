---
tags:
  - cs2040s/chapter3
  - cs/data_structures
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/deque
next: /labyrinth/notes/cs/cs2040s/binary_heap

---
### Summary
Priority queue
- each element has a priority

Circular array implementation - [compact array](/labyrinth/notes/cs/cs2040s/compact_array)
- keep the array sorted by priority 

| Operation   | Method                                                                                                    | Performance          |
| ----------- | --------------------------------------------------------------------------------------------------------- | -------------------- |
| `insert(v)` | Expensive insert: insert into sorted array, one round of [insertion sort](/labyrinth/notes/cs/cs2040s/insertion_sort)<br>Append: add at back        | - $O(n)$<br>- $O(1)$ |
| `extract()` | Pop: remove from front<br>Expensive extract: search for highest priority, one round of [selection sort](/labyrinth/notes/cs/cs2040s/selection_sort) | - $O(1)$<br>- $O(n)$ |
> $O(n \log n)$ to sort the array first for expensive enqueue approach, linear DS is not good
### Concept
Priority queue operations
- `insert(v)`
	- add `v` to the queue
- `extract()`
	- get the item in the queue with the highest priority and remove it
> similar to [queue operations](/labyrinth/notes/cs/cs2040s/queue#^abf27d), just that dequeuing is done by order of priority instead of order of entry