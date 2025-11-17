---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/SSSP
next: /labyrinth/notes/cs/cs2040s/dijkstra's_algorithm

---
### Summary
Bellman-Ford algorithm
- depends on how the edges are ordered

Time complexity
- average case: $O(VE)$ - relax all edges `V-1` times

- early termination
- best case: $O(E)$ - one pass to relax every edge, one pass to check
- [single path in order](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":240,"y":260},"1":{"x":320,"y":260},"2":{"x":400,"y":260},"3":{"x":480,"y":260}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":1,"v":2,"w":1},"2":{"u":2,"v":3,"w":1}}}): `bellmanford(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[5][]{
  \draw[->,#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=1.5]
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},right=of 0] (1) {1};
\node[vertex,label={[text=orange]2},right=of 1] (2) {2};
\node[vertex,label={[text=orange]3},right=of 2] (3) {3};

\dwedge[green]{0}{1}{1}{1};
\dwedge[green]{1}{2}{1}{2};
\dwedge[green]{2}{3}{1}{3};
\end{tikzpicture}
\end{document}
```
- [first is shortest](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":240,"y":260},"1":{"x":320,"y":260},"2":{"x":400,"y":180},"3":{"x":480,"y":260}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":1,"v":2,"w":1},"2":{"u":2,"v":3,"w":1},"3":{"u":1,"v":3,"w":4}}}): `bellmanford(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[5][]{
  \draw[->,#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=1.5]
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]below:1},right=of 0] (1) {1};
\node[vertex,label={[text=orange]2},above right=of 1] (2) {2};
\node[vertex,label={[text=orange]below:3},below right=of 2] (3) {3};

\dwedge[green]{0}{1}{1}{1};
\dwedge[green]{1}{2}{1}{2};
\dwedge[gray]{1}{3}{4}{3};
\dwedge[green]{2}{3}{1}{4};
\end{tikzpicture}
\end{document}
```
> the best case is when the outgoing edges are relaxed following a topological ordering

- worse case: $O(VE)$ - only edge that can be relaxed is the last of every pass
- [reversed](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":680,"y":220},"1":{"x":560,"y":220},"2":{"x":440,"y":220},"3":{"x":320,"y":220}},"el":{"0":{"v":2,"u":3,"w":1},"1":{"v":1,"u":2,"w":1},"2":{"v":0,"u":1,"w":1}}}): `bellmanford(3)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[5][]{
  \draw[->,#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=1.5]
\node[vertex,label={[text=orange]0}] (3) {3};
\node[vertex,label={[text=orange]1},right=of 3] (2) {2};
\node[vertex,label={[text=orange]$\infty$},right=of 2] (1) {1};
\node[vertex,label={[text=orange]$\infty$},right=of 1] (0) {0};

\dwedge[gray]{1}{0}{1}{1};
\dwedge[gray]{2}{1}{1}{2};
\dwedge[green]{3}{2}{1}{3};
\end{tikzpicture}
\end{document}
```

Invariant
- at the `kth` pass, all the nodes `k` jumps from the source will have the correct shortest path
### Concept
Algorithm
1. try to relax all the edges in the graph
2. repeat `V-1` times

```java
void bellmanford(int s) {
	dist.set(s, 0);
	
	for (int i = 0; i < V-1; ++i) { // total O(VE)
		for (int u = 0; u < V; ++u) // these two loops = O(E)
			if (dist.get(u) != INF) // important check, if not we risk INF + INF
				for (int[] v_w : AL.get(u)) {
					int v = v_w[0];
					int w = v_w[1];
					if (dist.get(u) + w >= dist.get(v)) 
						continue; // not improving, skip
					dist.set(v, dist.get(u)+w); // relax operation
				}
	}
}
```
> any node visitable from the source is at most `V-1` jumps from the source

Early termination
- keep track of whether any relaxations are done in each pass
- no relaxation implies that no other nodes can be reached form the source and all distances are the shortest

```java
for (int i = 0; i < V-1; ++i) {
	boolean modified = false; // check for relaxation
	
	for (int u = 0; u < V; ++u)
		if (dist.get(u) != INF)
			for (int[] v_w : AL.get(u)) {
				int v = v_w[0];
				int w = v_w[1];
				if (dist.get(u) + w >= dist.get(v)) 
					continue;
				dist.set(v, dist.get(u)+w);
				modified = true; // ack that relaxation has occurred
			}
	if (!modified) break; // early termination
}
```

Dynamic programming
- DAG only
- apply [topological sort](/labyrinth/notes/cs/cs2040s/topological_sort) to get an optimal order for the edges
- run one pass of Bellman-Ford using that order
### Application
