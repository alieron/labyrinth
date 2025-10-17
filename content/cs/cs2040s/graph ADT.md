---
tags:
  - cs2040s/chapter3
  - cs/abstract_data_types
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/balanced_BST
next: /labyrinth/notes/cs/cs2040s/DFS

---
Succeeds: [graphs](/labyrinth/notes/math/cs1231s/graphs)
### Summary
Adjacency matrix - [compact array](/labyrinth/notes/cs/cs2040s/compact_array)
- $O(V^2)$ space

| Operation       | Method                          | Performance                             |
| --------------- | ------------------------------- | --------------------------------------- |
| `vertices()`    | number of rows                  | - $O(V)$, traverse<br>- $O(1)$, counter |
| `egdes()`       | count through every cell        | - $O(V^2)$                              |
| `neighbours(u)` | traverse through the row `u`    | - $O(V)$                                |
| `find(u,v)`     | direct indexing of cell `(u,v)` | - $O(1)$                                |
> might need to half the number of edges if the graph is undirected

Adjacency list - [compact array](/labyrinth/notes/cs/cs2040s/compact_array) or [hash table](/labyrinth/notes/cs/cs2040s/hash_table)
- $O(V+E)$ space

| Operation       | Method                       | Performance                               |
| --------------- | ---------------------------- | ----------------------------------------- |
| `vertices()`    | size of array                | - $O(V)$, traverse<br>- $O(1)$, counter   |
| `egdes()`       | sum of sizes of the subarray | - $O(V+E)$, traverse<br>- $O(V)$, counter |
| `neighbours(u)` | check the subarray of `u`    | - $O(E)$                                  |
| `find(u,v)`     | search the subarray of `u`   | - $O(E)$                                  |
> `neighbours(u)` and `find(u,v)` are **output-sensitive**, if there are only $k$ neighbours of `u`, then $O(k)$ is a tighter bound

Edge list - [compact array](/labyrinth/notes/cs/cs2040s/compact_array)
- $O(E)$ space

| Operation       | Method        | Performance                             |
| --------------- | ------------- | --------------------------------------- |
| `vertices()`    |               |                                         |
| `egdes()`       | size of list  | - $O(E)$, count<br>- $O(1)$, keep track |
| `neighbours(u)` |               |                                         |
| `find(u,v)`     | linear search |                                         |

### Concept
Graph operations
- `vertices()`
	- count the number of vertices in the graph
- `egdes()`
	- count the number of edges in the graph
- `neighbours(u)`
	- return all the neighbours of vertex `u`
- `find(u,v)`
	- check if there exist an edge between `u` and `v`

Types of graphs
- U/U -> undirected/unweighted
- U/W -> undirected/weighted
- D/U -> directed/unweighted
- D/W -> directed/weighted

Simple graphs
- do not include self-loops

$$
0 \leq E \leq V^2
$$

Sparse

Trees
- acyclic graph
- one unique path between any pair of vertices
- **sparse**

$$
\begin{gather*}
E = V - 1 \\
\\
O(E)= O(V)
\end{gather*}
$$
> undirected trees may have trivial cycles between 2 vertices, they are ignored

Complete graph
- has an edge between every pair

$$
\begin{gather*}
E = \frac{V\cdot(V-1)}{2} \\
\\
O(E) = O(V^2)
\end{gather*}
$$

Bipartite graph
- vertices can be partitioned into two disjoint sets
- no edge between members of the same set

Directed acyclic graph(DAG)
- directed
- no cycles
### Application
