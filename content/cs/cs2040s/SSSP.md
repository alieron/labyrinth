---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
complete: false
next: /labyrinth/notes/cs/cs2040s/bellman-ford_algorithm
prev: /labyrinth/notes/cs/cs2040s/topological_sort

---
### Summary
SSSP algorithms

|                          | BFS                                  | DFS            | [bellman-ford](/labyrinth/notes/cs/cs2040s/bellman-ford_algorithm) | [dijkstra](/labyrinth/notes/cs/cs2040s/dijkstra's_algorithm)                                            | dynamic programming |
| ------------------------ | ------------------------------------ | -------------- | ---------------------------------------- | ----------------------------------------------------------------------------- | ------------------- |
| Time complexity          | $O(V+E)$ - general<br>$O(V)$ - trees | $O(V)$         | $O(VE)$                                  | $O((V+E)\log V)$                                                              | $O(V+E)$            |
| Type of graph            | unweighted/uniformed weight/tree     | tree           | no negative weight cycle                 | non -ve weight - original<br><br>no negative weight cycle - modified dijkstra | DAG                 |
| [Graph ADT](/labyrinth/notes/cs/cs2040s/graph_ADT) | adjacency list                       | adjacency list | adjacency list/edge list                 | adjacency list                                                                | edge list           |

SSSP related problems
- kth shortest paths
- single-destination shortest path
### Concept
Single-source shortest path(SSSP)
- shortest path(smallest weight) from any source node to the other node visitable from the source
- SSSP is not unique, is the graph is not a tree, there may be multiple paths to same node
- [6 vertex cyclic graph](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":540,"y":280},"1":{"x":660,"y":200},"2":{"x":660,"y":360},"3":{"x":820,"y":200},"4":{"x":820,"y":360},"5":{"x":940,"y":280}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":0,"v":2,"w":5},"2":{"u":1,"v":2,"w":2},"3":{"u":1,"v":3,"w":2},"4":{"u":1,"v":4,"w":1},"5":{"u":2,"v":4,"w":2},"6":{"u":3,"v":4,"w":1},"7":{"u":3,"v":5,"w":3},"8":{"u":4,"v":5,"w":2},"9":{"v":1,"u":4,"w":2}}}): SSSP from `0` to `5`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[4][]{
  \draw[->,#1] (#2) to node[auto] {#4} (#3);
}
\newcommand\sdwedge[4][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick]
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=2 of 1] (3) {3};
\node[vertex,label={[text=orange]below:2},right=2 of 2] (4) {4};
\node[vertex,label={[text=orange]4},below right=of 3] (5) {5};

\dwedge[green]{0}{1}{1};
\dwedge{0}{2}{5};
\dwedge{1}{2}{2};
\dwedge{1}{3}{2};
\sdwedge[green]{1}{4}{1};
\dwedge{2}{4}{2};
\dwedge{3}{5}{3};
\dwedge{3}{4}{1};
\sdwedge{4}{1}{2};
\dwedge[green]{4}{5}{2};

\end{tikzpicture}
\end{document}
```

SSSP spanning tree
- has the source-node as the root
- may not span all nodes, since not all nodes are necessarily visitable by all other nodes
- [6 vertex cyclic graph](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":540,"y":280},"1":{"x":660,"y":200},"2":{"x":660,"y":360},"3":{"x":820,"y":200},"4":{"x":820,"y":360},"5":{"x":940,"y":280}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":0,"v":2,"w":5},"2":{"u":1,"v":2,"w":2},"3":{"u":1,"v":3,"w":2},"4":{"u":1,"v":4,"w":1},"5":{"u":2,"v":4,"w":2},"6":{"u":3,"v":4,"w":1},"7":{"u":3,"v":5,"w":3},"8":{"u":4,"v":5,"w":2},"9":{"v":1,"u":4,"w":2}}}): SSSP spanning tree from `0`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[4][]{
  \draw[->,#1] (#2) to node[auto] {#4} (#3);
}
\newcommand\sdwedge[4][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick]
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:3},below right=of 0] (2) {2};
\node[vertex,label={[text=orange]3},right=2 of 1] (3) {3};
\node[vertex,label={[text=orange]below:2},right=2 of 2] (4) {4};
\node[vertex,label={[text=orange]4},below right=of 3] (5) {5};

\dwedge[green]{0}{1}{1};
\dwedge[gray]{0}{2}{5};
\dwedge[green]{1}{2}{2};
\dwedge[green]{1}{3}{2};
\sdwedge[green]{1}{4}{1};
\dwedge[gray]{2}{4}{2};
\dwedge[gray]{3}{5}{3};
\dwedge[gray]{3}{4}{1};
\sdwedge[gray]{4}{1}{2};
\dwedge[green]{4}{5}{2};

\end{tikzpicture}
\end{document}
```

Negative weight cycles
- poor definition on how to handle them
- can lead to infinite looping
- [3 vertex -ve cycle](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":360,"y":160},"1":{"x":480,"y":160},"2":{"x":600,"y":160}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":1,"v":2,"w":1},"2":{"v":1,"u":2,"w":-2}}})

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[4][]{
  \draw[->,#1] (#2) to node[auto] {#4} (#3);
}
\newcommand\sdwedge[4][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=1.5]
\begin{scope}
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},right=of 0] (1) {1};
\node[vertex,label={[text=orange]2},right=of 1] (2) {2};

\dwedge[green]{0}{1}{1};
\sdwedge[green]{1}{2}{1};
\sdwedge{2}{1}{-2};
\end{scope}

\begin{scope}[shift={(6,0)}] % shift this block right
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]$-\infty$},right=of 0] (1) {1};
\node[vertex,label={[text=orange]$-\infty$},right=of 1] (2) {2};

\dwedge[green]{0}{1}{1};
\sdwedge[green]{1}{2}{1};
\sdwedge[green]{2}{1}{-2};
\end{scope}
\end{tikzpicture}
\end{document}
```
> negative weights are not in the `cs2040s` syllabus

Edge relaxation
- check if an incoming edge results in a shorter path

```java
if (dist[v] > dist[u] + w) { // if using this edge can give v a shorter distance
	dist[v] = dist[u] + w; // "relax" the edge
	p[v] = u; // update parent array	
} 
```
- [3 vertex DAG](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":400,"y":180},"1":{"x":499.9999999607866,"y":50.00000000000003},"2":{"x":620,"y":180}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":0,"v":2,"w":3},"2":{"u":1,"v":2,"w":1}}}): relax `1 -> 2`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[4][]{
  \draw[->,#1] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick]
\begin{scope}
\node[vertex,label={[text=orange]below:0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:3},below right=of 1] (2) {2};

\dwedge[green]{0}{1}{1};
\dwedge[green]{0}{2}{3};
\dwedge[orange]{1}{2}{1};
\end{scope}

\begin{scope}[shift={(6,0)}] % shift this block right
\node[vertex,label={[text=orange]below:0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:2},below right=of 1] (2) {2};

\dwedge[green]{0}{1}{1};
\dwedge[gray]{0}{2}{3};
\dwedge[green]{1}{2}{1};
\end{scope}
\end{tikzpicture}
\end{document}
```

Infinity
- to employ relaxation, all the distances must be initialised to infinity(a very big number)
- can use `Integer.MAX_VALUE`, but we risk overflowing if we add

```java
int INF = 1e9;

List<Integer> dist = new ArrayList<>(Collections.nCopies(V, INF));
dist.set(s, 0); // distance to source from source = 0
```

Simple path
- a shortest path(with no negative edges) is a simple path
- there are no cycles in a shortest path

$$

$$

[BFS](/labyrinth/notes/cs/cs2040s/BFS) method
- only on uniform +ve weights/unweighted graph
- counting the least number of jumps

[DFS](/labyrinth/notes/cs/cs2040s/DFS) method
- DFS finds the first path to any visitable node
- correctness is only garunteed when there is only 1 path to any node