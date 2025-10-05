---
tags:
  - cs2040s/chapter3
  - cs/fundamentals
  - cs/abstract_data_types
  - lang/java
complete: false
next: /labyrinth/notes/cs/cs2040s/SLL
prev: /labyrinth/notes/cs/cs2040s/radix_sort

---
### Summary
List ADT
- simple linear data structure
- sequence where order matters

[java.util.List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html) interface
- [java.util.ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html) -> compact array
- [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) -> DLL

Library implemetations
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
### Concept
List operations
- `get(i)`
	- return the value at index `i`
- `search(v)` 
	- return the index of `v` if found within the list
	- return -1 if not found
- `insert(i, v)`
	- insert `v` into the list at index `i`
- `remove(i)`
	- remove the value at index `i` from the list
### Application
