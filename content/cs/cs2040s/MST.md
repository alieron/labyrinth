---
tags:
  - cs2040s/chapter4
  - cs/algorithms
complete: true
next: /labyrinth/notes/cs/cs2040s/kruskal's_algorithm
prev: /labyrinth/notes/cs/cs2040s/dijkstra's_algorithm

---
### Summary
MST algorithms

|                          | [Kruskal's](/labyrinth/notes/cs/cs2040s/kruskal's_algorithm) | [Prim's](/labyrinth/notes/cs/cs2040s/prim's_algorithm) |
| ------------------------ | ---------------------------------- | ---------------------------- |
| Time complexity          | $O(E\log V)$                       | $O(E\log V)$                 |
| Constraint               | $V < 1,000,000$                    | undirected                   |
| [Graph ADT](/labyrinth/notes/cs/cs2040s/graph_ADT) | EL                                 | AL                           |

MST related problems
- maximum spanning tree - negate all weights
- minimum spanning forest - early termination, [Kruskal's invariant](/labyrinth/notes/cs/cs2040s/kruskal's_algorithm#^aa9376)
- minimum tree with k verticies - early termination, [Prim's invariant](/labyrinth/notes/cs/cs2040s/prim's_algorithm#^57918b)

Cayley's formula
- number of spanning trees in a complete graph/among `n` verticies

$$
n^{n-2}
$$
### Concept
Minimum spanning tree(MST)
- usually on U/W graphs
- subtree that spans all verticies with the smallest total weight
- not necessarily unique
- [6 vertex graph](https://visualgo.net/en/mst?create={"vl":{"0":{"x":560,"y":260},"1":{"x":660,"y":160},"2":{"x":660,"y":360},"3":{"x":860,"y":160},"4":{"x":860,"y":360},"5":{"x":960,"y":260}},"el":{"0":{"u":0,"v":1,"w":2},"1":{"u":3,"v":4,"w":2},"2":{"u":4,"v":5,"w":2},"3":{"u":1,"v":2,"w":3},"4":{"u":1,"v":3,"w":3},"5":{"u":2,"v":4,"w":3},"6":{"u":3,"v":5,"w":3},"7":{"u":0,"v":2,"w":4},"8":{"u":1,"v":4,"w":4}}})

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\begin{scope}
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge[green]{1}{2}{3};
\uwedge[green]{1}{3}{3};
\uwedge[gray]{1}{4}{4};
\uwedge[gray]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[green]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}

\begin{scope}[shift={(0,-6)}] % shift this block below
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge[green]{1}{2}{3};
\uwedge[gray]{1}{3}{3};
\uwedge[gray]{1}{4}{4};
\uwedge[green]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[green]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}

\begin{scope}[shift={(0,-12)}] % shift this block below
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge[gray]{1}{2}{3};
\uwedge[green]{1}{3}{3};
\uwedge[gray]{1}{4}{4};
\uwedge[green]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[green]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}
\end{tikzpicture}
\end{document}
```

Cycle reduction
- eliminate the largest weight in each cycle
- destructive method

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\begin{scope}
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[cyan]{0}{1}{2};
\uwedge[cyan]{0}{2}{4};
\uwedge[cyan]{1}{2}{3};
\uwedge{1}{3}{3};
\uwedge{1}{4}{4};
\uwedge{2}{4}{3};
\uwedge[cyan]{3}{5}{3};
\uwedge[cyan]{3}{4}{2};
\uwedge[cyan]{4}{5}{2};
\end{scope}

\begin{scope}[shift={(0,-6)}] % shift this block below
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge[cyan]{1}{2}{3};
\uwedge{1}{3}{3};
\uwedge[cyan]{1}{4}{4};
\uwedge[cyan]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[green]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}

\begin{scope}[shift={(0,-12)}] % shift this block below
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge[cyan]{1}{2}{3};
\uwedge[cyan]{1}{3}{3};
\uwedge[gray]{1}{4}{4};
\uwedge[cyan]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[cyan]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}

\begin{scope}[shift={(0,-18)}] % shift this block below
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge[orange]{1}{2}{3};
\uwedge[orange]{1}{3}{3};
\uwedge[gray]{1}{4}{4};
\uwedge[orange]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[green]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}
\end{tikzpicture}
\end{document}
```

Cut vertex construction
- choose the bridge edge with the lowest weight
- constructive method

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\begin{scope}
\node[vertex,cyan] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3,cyan] (5) {5};

\uwedge[cyan]{0}{1}{2};
\uwedge[cyan]{0}{2}{4};
\uwedge{1}{2}{3};
\uwedge{1}{3}{3};
\uwedge{1}{4}{4};
\uwedge{2}{4}{3};
\uwedge[cyan]{3}{5}{3};
\uwedge{3}{4}{2};
\uwedge[cyan]{4}{5}{2};
\end{scope}

\begin{scope}[shift={(0,-6)}] % shift this block below
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2,cyan] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge{1}{2}{3};
\uwedge{1}{3}{3};
\uwedge[cyan]{1}{4}{4};
\uwedge[cyan]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[cyan]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}

\begin{scope}[shift={(0,-12)}] % shift this block below
\node[vertex] (0) {0};
\node[vertex,above right=of 0,cyan] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge[cyan]{1}{2}{3};
\uwedge[cyan]{1}{3}{3};
\uwedge[cyan]{1}{4}{4};
\uwedge[green]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[green]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}

\begin{scope}[shift={(0,-18)}] % shift this block below
\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=3 of 1] (3) {3};
\node[vertex,right=3 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\uwedge[green]{0}{1}{2};
\uwedge[gray]{0}{2}{4};
\uwedge[orange]{1}{2}{3};
\uwedge[orange]{1}{3}{3};
\uwedge[gray]{1}{4}{4};
\uwedge[orange]{2}{4}{3};
\uwedge[gray]{3}{5}{3};
\uwedge[green]{3}{4}{2};
\uwedge[green]{4}{5}{2};
\end{scope}
\end{tikzpicture}
\end{document}
```