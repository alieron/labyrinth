---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/kruskal's_algorithm

---
### Summary
Prim's algorithm
- [greedy](/labyrinth/notes/cs/cs2040s/greedy_algorithms)
- constructive, add to the main tree

Time complexity
- add outgoing from source to PQ: $O(E\log E)$
- next best edge: $O(E\log V)$

- average case: $\Theta(E \log V)$

$$
\begin{align*}
\text{outgoing from source:} &&& O(E \log E) \\
\text{next best:} &&& O(E \log V) \\
\\
\text{average case:} &&& \Theta(E \log V)
\end{align*}
$$

Invariant ^57918b
- at the `kth` iteration, we have a minimum tree spanning `k` nodes
### Concept
Algorithm
- from a source node, enqueue all outgoing edges into a [priority queue](/labyrinth/notes/cs/cs2040s/priority_queue_ADT)
- dequeue edge with lowest weight
- check against a "taken" array to avoid a cycle

```java
List<Boolean> taken = new ArrayList<>(Collections.nCopies(false, V)); // similar to visited array

int prim(int s) {
	int mst_cost = 0, num_taken = 0;
	
	PriorityQueue<IntegerPair> pq = new PriorityQueue<>(Comparator.comparingInt(x -> x[1])); // e = [ v, w ]
	
	// take the source node and enqueue outgoing edges
	taken.set(s, true);
	for (int[] v_w : AL.get(s))
		if (!taken.get(v_w[0]))
			pq.offer(v_w);
	
	while (!pq.isEmpty()) { // every vertex, k neighbours are relaxed -> O(E log V)
		int[] min = pq.poll();
		int u = min[0];
		
		if (taken.get(u)) continue; // already taken, skip to avoid cycle
		
		mst_cost += min[1]; // add w of this edge
		++num_taken;
		
		// take the current node and enqueue outgoing edges
		taken.set(u, true);
		for (int[] v_w : AL.get(u))
			if (!taken.get(v_w[0]))
				pq.offer(v_w);
		
		if (num_taken == V-1) break; // early termination, once we have a spanning tree, break
	}
    
  return mst_cost;
}
```
> in Prim's algorithm the PQ stores `[v, w]` whereas in [Dijkstra's](/labyrinth/notes/cs/cs2040s/dijkstra's_algorithm) the PQ stores `[v, d]`
- [6 vertex graph](https://visualgo.net/en/mst?create={"vl":{"0":{"x":560,"y":260},"1":{"x":660,"y":160},"2":{"x":660,"y":360},"3":{"x":860,"y":160},"4":{"x":860,"y":360},"5":{"x":960,"y":260}},"el":{"0":{"u":0,"v":1,"w":2},"1":{"u":3,"v":4,"w":2},"2":{"u":4,"v":5,"w":2},"3":{"u":1,"v":2,"w":3},"4":{"u":1,"v":3,"w":3},"5":{"u":2,"v":4,"w":3},"6":{"u":3,"v":5,"w":3},"7":{"u":0,"v":2,"w":4},"8":{"u":1,"v":4,"w":4}}}&action=prim+0): `prim(0)`

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
\uwedge[gray]{0}{2}{4}{};
\uwedge[green]{1}{2}{3}{2};
\uwedge[green]{1}{3}{3}{3};
\uwedge[gray]{1}{4}{4}{};
\uwedge[gray]{2}{4}{3}{};
\uwedge[gray]{3}{5}{3}{};
\uwedge[green]{3}{4}{2}{4};
\uwedge[green]{4}{5}{2}{5};
\end{tikzpicture}
\end{document}
```
```
curr | pq
0    | [1, 2], [2, 4]
1    | [0, 2], [2, 3], [3, 3], [2, 4], [4, 4]
0    | [2, 3], [3, 3], [2, 4], [4, 4]                                                    <- already "taken"
2    | [1, 3], [3, 3], [4, 3], [0, 4], [2, 4], [4, 4]
1    | [3, 3], [4, 3], [0, 4], [2, 4], [4, 4]                                            <- already "taken"
3    | [4, 2], [1, 3], [4, 3], [5, 3], [0, 4], [2, 4], [4, 4]
4    | [3, 2], [5, 2], [1, 3], [2, 3], [4, 3], [5, 3], [0, 4], [1, 4], [2, 4], [4, 4]
3    | [5, 2], [1, 3], [2, 3], [4, 3], [5, 3], [0, 4], [1, 4], [2, 4], [4, 4]            <- already "taken"
5    | [1, 3], [2, 3], [4, 3], [5, 3], [0, 4], [1, 4], [2, 4], [4, 4]                    <- V-1 taken, break
```
### Application