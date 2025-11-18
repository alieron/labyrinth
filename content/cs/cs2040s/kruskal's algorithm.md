---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/MST
next: /labyrinth/notes/cs/cs2040s/prim's_algorithm

---
### Summary
Kruskal's algorithm
- [greedy](/labyrinth/notes/cs/cs2040s/greedy_algorithms)
- constructive, join smaller trees

Time complexity
- sort edges: $O(E\log E)$
- check all edges: $O(E)$

- average case: $\Theta(E \log V)$

$$
\begin{align*}
\text{sort edges:} &&& O(E \log E) \\
\\
\text{complete graph:} &&& O(E) = O(V^2) \\
\text{tree:} &&& O(E) = O(V) \\
\\
\text{worse case:} &&& O(E \log V^2) = O(2E \log V) = O(E \log V) \\
\text{best case:} &&& O(E \log V)
\end{align*}
$$

Invariant ^aa9376
- at the `kth` iteration, there will be a minimum spanning forest of `k` edges
### Concept
Algorithm
- sort edges by weight
- choose edges starting with lowest weight
- use [UFDS](/labyrinth/notes/cs/cs2040s/union-find_disjoint_sets) to track subtrees
- avoid choosing edges that result in cycles

```java
List<int[]> EL; // e = [ u, v, w ]

int kruskal() {
	Collections.sort(EL, Comparator.comparingInt(x -> x[2])); // sort edges -> O(E log E) = O(E log V)
	
	int mst_cost = 0, num_taken = 0;
	UnionFind UF = new UnionFind(V); // V disjoint verticies
	for (int i = 0; i < E; ++i) { // E times -> O(E)
		int[] min = EL.get(i);
		
		if (UF.isSameSet(min[0], min[1])) continue; // check, O(1)
		UF.unionSet(min[0], min[1]); // link them in the UFDS, O(1)
		
		mst_cost += min[2]; // add w of this edge
		++num_taken;
		
		if (num_taken == V-1) break; // early termination, once we have a spanning tree, break
	}
	
	return mst_cost;
}
```
> keep in mind that the UFDS operations are only $O(1)$ for $V < 1,000,000$
- [6 vertex graph](https://visualgo.net/en/mst?create={"vl":{"0":{"x":560,"y":260},"1":{"x":660,"y":160},"2":{"x":660,"y":360},"3":{"x":860,"y":160},"4":{"x":860,"y":360},"5":{"x":960,"y":260}},"el":{"0":{"u":0,"v":1,"w":2},"1":{"u":3,"v":4,"w":2},"2":{"u":4,"v":5,"w":2},"3":{"u":1,"v":2,"w":3},"4":{"u":1,"v":3,"w":3},"5":{"u":2,"v":4,"w":3},"6":{"u":3,"v":5,"w":3},"7":{"u":0,"v":2,"w":4},"8":{"u":1,"v":4,"w":4}}}&action=kruskal): `kruskal()`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[5][]{
  \draw[#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2}{1};
\uwedge[gray]{0}{2}{4}{9};
\uwedge[green]{1}{2}{3}{4};
\uwedge[green]{1}{3}{3}{5};
\uwedge[gray]{1}{4}{4}{10};
\uwedge[gray]{2}{4}{3}{7};
\uwedge[gray]{3}{5}{3}{8};
\uwedge[green]{3}{4}{2}{2};
\uwedge[green]{4}{5}{2}{3};
\end{tikzpicture}
\end{document}
```
### Application
