---
tags:
  - cs2040s/chapter3
  - cs/abstract_data_types
  - lang/java
complete: true
next: /labyrinth/notes/cs/cs2040s/hash_table
prev: /labyrinth/notes/cs/cs2040s/binary_heap

---
### Summary
Table ADT
- binds a key to a value
- allows lookup for stored values

Direct addressing table(DAT) - [array](/labyrinth/notes/cs/cs2040s/compact_array) ^c3b281
- the values are used as the key/indexes of the array

| Operation   | Method                           | Performance |
| ----------- | -------------------------------- | ----------- |
| `search(v)` | check if the index `v` is filled | - $O(1)$    |
| `insert(v)` | fill index `v`                   | - $O(1)$    |
| `remove(v)` | empty index `v`                  | - $O(1)$    |
> the couting array in [counting sort](/labyrinth/notes/cs/cs2040s/counting_sort) works similarly, range of keys must be small(and non-negative), $O(k)$ space

[java.util.Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html) interface
- [java.util.HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) - hash table
- [java.util.TreeMap](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html) - BST

Library implementations
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
- [java.util.HashSet](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html) - hash table
- [java.util.TreeSet](https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html) - BST

Library implementations
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
### Concept
Table operations
- `search(v)`
	- determine if `v` exists in the table
- `insert(v)`
	- insert `v` into the table
- `remove(v)`
	- remove `v` from the table

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[label=left:{0},draw,cell] (0) {};
  \node[label=left:{1},draw,cell,below=of 0] (1) {};
  \node[label=left:{2},draw,cell,below=of 1] (2) {};
  \node[label=left:{3},draw,cell,below=of 2] (3) {};
  \node[draw,cell,below=of 3] (4) {$\vdots$};
  \node[label=left:{k},draw,cell,below=of 4] (k) {};
  
	\pnull{1}
	\pnull{2}
	
	\node[right=of 0] (v0) {$v_0$};
	\node[right=of 3] (v3) {$v_3$};
	\node[right=of k] (vk) {$v_k$};
	
	\draw[->] (0.center) -> (v0);
	\draw[->] (3.center) -> (v3);
	\draw[->] (k.center) -> (vk);
\end{tikzpicture}
\end{document}
```