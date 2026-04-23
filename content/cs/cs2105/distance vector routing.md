---
tags:
  - cs2105/lect7
  - cs/networking
  - cs/algorithms
complete: false
next: /labyrinth/notes/cs/cs2105/RIP
prev: /labyrinth/notes/cs/cs2105/DHCP

---
### Concept
#### [Bellman-ford](/labyrinth/notes/cs/cs2040s/bellman-ford_algorithm)
- router can only know information about the local network
- rely on partial knowledge from neighbouring routers to see the big picture
- distributed computing, each router $O(N)$ where $N$ is the number of neighbours

$$
\begin{gather*}
\begin{aligned}
\text{Source:}&&&u \\
\text{Destination:}&&& v\\
\text{Neighbours of }u:&&& N \\
\end{aligned} \\
\\
D_{u}(v)=\text{min}_{n\in N} \{ c(u, n) +D_{n}(v)\}
\end{gather*}
$$

Network diameter
- longest distance between two points in the network

### Application
Stable network
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\begin{document}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw (#2) to node[auto,#1] {#4} (#3);
}

\begin{tikzpicture}[thick,node distance=2]
\node[vertex] (w) {w};
\node[vertex, right=of w] (z) {z};
\node[vertex,below=of w] (x) {x};
\node[vertex,below=of z] (y) {y};

\uwedge{w}{z}{20};
\uwedge{w}{x}{3};
\uwedge[pos=0.2]{w}{y}{7};
\uwedge[pos=0.2]{z}{x}{6};
\uwedge{x}{y}{3};
\uwedge{z}{y}{2};

\end{tikzpicture}
\end{document}
```
$$
\begin{array}{c|c}
 & \text{cost to }w & \text{cost to }x & \text{cost to }y & \text{cost to }z \\
\hline
\text{from }w & 0 & 3 & 6 & 8 \\
\hline
\text{from }x & 3 & 0 & 3 & 5 \\
\hline
\text{from }y & 6 & 3 & 0 & 2 \\
\hline
\text{from }z & 8 & 5 & 2 & 0
\end{array}
$$
> do the smallest direct connections first

Re-stablization
TODO
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\begin{document}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw (#2) to node[auto,#1] {#4} (#3);
}

\begin{tikzpicture}[thick,node distance=2]
\node[vertex] (w) {w};
\node[vertex, right=of w] (z) {z};
\node[vertex,below=of w] (x) {x};
\node[vertex,below=of z] (y) {y};

\uwedge{w}{z}{20};
\uwedge{w}{x}{3};
\uwedge[pos=0.2]{w}{y}{7};
\uwedge[pos=0.2]{z}{x}{6};
\uwedge{x}{y}{3};

\end{tikzpicture}
\end{document}
```

- `t=1`, y and z detect error
$$
\begin{array}{c|c}
 & \text{cost to }w & \text{cost to }x & \text{cost to }y & \text{cost to }z \\
\hline
\text{from }w & 0 & 3 & 6 & 8 \\
\hline
\text{from }x & 3 & 0 & 3 & 5 \\
\hline
\text{from }y & 6 & 3 & 0 & \infty \\
\hline
\text{from }z & 8 & 5 & \infty & 0
\end{array}
$$