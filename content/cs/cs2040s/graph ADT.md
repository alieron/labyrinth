---
tags:
  - cs2040s/chapter3
  - cs/abstract_data_types
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/balanced_BST
next: /labyrinth/notes/cs/cs2040s/graph_traversal

---
Succeeds: [graphs](/labyrinth/notes/math/cs1231s/graphs)
### Summary
Adjacency matrix - [compact array](/labyrinth/notes/cs/cs2040s/compact_array) ^ad263b
- $O(V^2)$ space

| Operation       | Method                          | Performance                             |
| --------------- | ------------------------------- | --------------------------------------- |
| `vertices()`    | number of rows                  | - $O(V)$, traverse<br>- $O(1)$, counter |
| `egdes()`       | count through every cell        | - $O(V^2)$                              |
| `neighbours(u)` | traverse through the row `u`    | - $O(V)$                                |
| `find(u,v)`     | direct indexing of cell `(u,v)` | - $O(1)$                                |
$$
\begin{gather*}
\begin{bmatrix}
w_{0,0} & w_{0,1} & \dots & w_{0,V-1} \\
w_{1,0} & w_{1,1} & \dots & w_{1,V-1} \\
\vdots & \vdots & \ddots & \vdots \\
w_{V-1,0} & w_{V-1,1} & \dots & w_{V-1,V-1}
\end{bmatrix} \\
\\
w_{u,v}\text{ is the weight of the edge }(u,v)
\end{gather*}
$$
> the adjacency matrix of an undirected graph is [symmetric](/labyrinth/notes/math/ma1522/matrix_transpose#^e47d16)

Adjacency list - [compact array](/labyrinth/notes/cs/cs2040s/compact_array) or [hash table](/labyrinth/notes/cs/cs2040s/hash_table)
- $O(V+E)$ space

| Operation       | Method                       | Performance                                   |
| --------------- | ---------------------------- | --------------------------------------------- |
| `vertices()`    | size of array                | - $O(V)$, traverse<br>- $O(1)$, counter       |
| `egdes()`       | sum of sizes of the subarray | - $O(V+E)$, traverse<br>- $O(V)$, counter     |
| `neighbours(u)` | check the subarray of `u`    | - $O(E)$<br>- $\Theta(k)$, for $k$ neighbours |
| `find(u,v)`     | search the subarray of `u`   | - $O(E)$<br>- $\Theta(k)$, for $k$ neighbours |
> `neighbours(u)` and `find(u,v)` are **output-sensitive**, if there are only $k$ neighbours of `u`, then $\Theta(k)$ is a tighter bound
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
  \node[label=left:{$V-1$},draw,cell,below=of 4] (m) {};
   
	\pnull{1}
	\pnull{2}
	
  \node[draw,cell,right=1cm of 0] (v0) {$a$};
  \node[draw,cell,right=of v0] (v0') {$w_{0,a}$};
  \node[draw,cell,right=1cm of v0'] (v01) {$b$};
  \node[draw,cell,right=of v01] (v01') {$w_{0,b}$};
  \draw[->] (v0') to[bend left=15] (v01);   
  \draw[->] (v01) to[bend left=15] (v0');
  
  \node[draw,cell,right=1cm of 3] (v3) {$c$};
  \node[draw,cell,right=of v3] (v3') {$w_{3,c}$};
  
	\node[draw,cell,right=1cm of m] (vm) {$d$};
  \node[draw,cell,right=of vm] (vm') {$w_{V-1,d}$};
	
	\draw[->] (0.center) -> (v0);
	\draw[->] (3.center) -> (v3);
	\draw[->] (m.center) -> (vm);
\end{tikzpicture}
\end{document}
```

Edge list - [compact array](/labyrinth/notes/cs/cs2040s/compact_array)
- $\Theta(E)$ space

| Operation       | Method             | Performance                             |
| --------------- | ------------------ | --------------------------------------- |
| `vertices()`    | traverse the edges | - $O(E)$                                |
| `egdes()`       | size of list       | - $O(E)$, count<br>- $O(1)$, keep track |
| `neighbours(u)` | check all edges    | - $O(E)$                                |
| `find(u,v)`     | linear search      | - $O(E)$                                |
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta,decorations.pathreplacing}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[draw,cell] (0) {$a$};
  \node[draw,cell,right=of 0] (1) {$b$};
  \node[draw,cell,right=of 1] (2) {$w_{a,b}$};
  \node[draw,cell,right=of 2] (3) {$c$};
  \node[draw,cell,right=of 3] (4) {$d$};
  \node[draw,cell,right=of 4] (5) {$w_{c,d}$};
  \node[right=0cm of 5] {...};
    
	\draw[decorate,decoration={brace,amplitude=5pt}] 
    (0.north west) -- (2.north east) node[midway,above=6pt] {$(a,b)$};
  \draw[decorate,decoration={brace,amplitude=5pt}] 
    (3.north west) -- (5.north east) node[midway,above=6pt] {$(c,d)$};
\end{tikzpicture}
\end{document}
```
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
- when the number of edges is closer to $V$ than to $V^2$

Directed acyclic graph(DAG)
- directed
- no cycles

Planar graph
- can be drawn on a 2D plane without edges crossing

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
> directed trees are DAGs

Complete graph
- has an edge between every pair

```tikz
\usepackage{tikz}
\usetikzlibrary{graphs,graphs.standard}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\graph[nodes={vertex}] { subgraph K_n [V={0,1,2,3,4,5},clockwise,radius=2cm] };
\end{tikzpicture}
\end{document}
```
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
- no odd length cycles

```tikz
\usepackage{tikz}
\usetikzlibrary{graphs,graphs.standard}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\graph[nodes={vertex},grow right=2cm,branch down=2cm] {
  {0,1,2} -- [complete bipartite] {3,4,5}
};
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\text{Adjacency matrix:}\quad\begin{bmatrix}
\mathbf{0} & \mathbf{W} \\
\mathbf{W}^T & \mathbf{0}
\end{bmatrix} \\
\\
E = V_{1}\cdot V_{2}
\end{gather*}
$$
### Application
Leetcode: [Maximal Network Rank](https://leetcode.com/problems/maximal-network-rank/)
- edge list -> adjacency list

```java
// roads is an edge list
Map<Integer, List<Integer>> al = new HashMap<>();

for (int i = 0; i < n; i++) // initialise empty  adjacency list
	al.put(i, new ArrayList<>());

for (int[] road : roads) { // fill adjacency list from edge list
	al.computeIfPresent(road[0], (k,v) -> {v.add(road[1]); return v;});
	al.computeIfPresent(road[1], (k,v) -> {v.add(road[0]); return v;});
}

int max = 0;
for (int i = 0; i < n - 1; i++) // O(n^2) for checking every pair
	for (int j = i + 1; j < n; j++)
		max = Math.max(max, al.get(i).size() + al.get(j).size() - (al.get(i).contains(j) ? 1 : 0)); // -1 if they have a mutual edge

return max;
```
- count ranks and connections
- less concerned with finding the connection, but counting the connections

```java
// roads is an edge list
int[] ranks = new int[n];
for(int[] road : roads) {
	++ranks[road[0]];
	++ranks[road[1]];
}

// identify first and second highest ranks
int first = 0;
int second = 0;
for(int rank : ranks) {
	if (rank > first) {
		second = first;
		first = rank;
	} else if (rank == first) {
		continue;
	} else if (rank > second) {
		second = rank;
	}
}

// count occurances
int firstCount = 0;
int secondCount = 0;
for(int rank : ranks) {
	if (rank == first) {
		++firstCount;
	} else if (rank == second) {
		++secondCount;
	}
}

// if only one first
if (firstCount == 1) {
	int count = 0;
	for(int[] road : roads) {
		if (ranks[road[0]] == first && ranks[road[1]] == second) {
			++count;
		} else if (ranks[road[1]] == first && ranks[road[0]] == second) {
			++count;
		}
	}
	// see if there is a second that is not connected to the first
	return first + second - (secondCount > count ? 0 : 1);
} else { // multiple firsts
	int count = 0;
	for(int[] road : roads) {
		if (ranks[road[0]] == first && ranks[road[1]] == first) {
			++count;
		}
	}
	// see if there are 2 firsts that are not connected
	return first + first - (firstCount * (firstCount - 1) / 2 > count ? 0 : 1);
	// nC2 = n*(n-1) / 2, max number of pairs among n nodes
}
```
$$
\binom{n}{2} = \frac{n(n-1)}{2}
$$