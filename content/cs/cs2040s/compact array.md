---
tags:
  - cs2040s/chapter1
  - cs/data_structures
  - lang/java
complete: true
next: /labyrinth/notes/cs/cs2040s/unsorted_arrays

---
Succeeds: [arrays](/labyrinth/notes/cs/cs1101s/arrays)
### Summary
Compact array
- optimized for direct indexing $O(1)$
- basic operations are at most $O(N)$
- supports **basic List ADT operations** (`get`, `search`, `insert`, `remove`)
- Limitations: **fixed size issue** (if $M$ too small → overflow, too large → wasted space)
- Applications: searching, min/max, uniqueness checks, range queries, set operations
### Concept
Compact array
- contiguous storage with no gaps: if $N$ items exist, they occupy indices $[0,N-1]$, while $[N,M−1]$ are empty
- Operations must maintain **compactness** (no empty slots in between)

Basic operations(List ADT)
1. `get(i)`
	- $O(1)$, direct access
2. `search(v)` 
	- scan sequentially
	- $O(1)$, first element
	- $O(N)$, last element
3. `insert(i, v)`
	- shift elements $[i,N−1]$ right, place `v` at `i`
	- $O(1)$, append to last
	- $O(N)$, insert at index `0`
4. `remove(i)`
	- shift elements $[i+1,N−1]$ left
	- $O(1)$, remove last element
	- $O(N)$, remove first element

Variable-sized arrays
- overcomes issues with fixed-sized arrays
- once full, allocate a new array(2× larger), copy elements
- eg. `std::vector` (C++), `list` (Python), `ArrayList` (Java).
### Application
Basic operations using [java.util.ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)
```java
import java.util.ArrayList;

ArrayList<Integer> A = new ArrayList<>();
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
A.remove(1); // A =[5, 20, 15, 25]
```

