---
tags:
  - co250/chapter1
  - math/graph_theory
complete: true
---
### Summary
Simple check for cut edges

| Endpoint $u$ | Endpoint $v$ | Is $uv\in\delta(S)$?      |
| ------------ | ------------ | ------------------------- |
| in $S$       | in $S$       | no: internal edge         |
| in $S$       | outside $S$  | yes                       |
| outside $S$  | in $S$       | yes: same undirected edge |
| outside $S$  | outside $S$  | no: external edge         |

Useful properties
$$
\begin{gather*}
\delta(S)=\delta(V\setminus S) \\
\\
\delta(\varnothing) = \delta(V) = \varnothing
\end{gather*}
$$
### Concept
#### Graph Cut
- for a chosen subset of vertices $S\subseteq V$, in undirected graphs
- set of all edges with exactly one endpoint in $S$

$$
\delta(S)=\{\begin{array}{c|c} uv\in E & u\in S,\ v\notin S \end{array}\}\
$$
> cuts refer to edges leaving the subset not the vertices

Standard cut
- $S=\{a,b,c\}$ 

```tikz
\usepackage{tikz}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick]
\draw[cyan,dashed,rounded corners] (-0.6,-1.8) rectangle (2,1.8);
\node[cyan,above] at (0.7,1.8) {$S=\{a,b,c\}$};
\node[vertex] (a) at (0,1.2) {$a$};
\node[vertex] (b) at (0,-1.2) {$b$};
\node[vertex] (c) at (1.4,0) {$c$};
\node[vertex] (d) at (3.6,1.2) {$d$};
\node[vertex] (e) at (3.6,-1.2) {$e$};
\node[vertex] (f) at (5,0) {$f$};
\draw[gray] (a)--(b) (b)--(c) (c)--(a);
\draw[gray] (d)--(e) (e)--(f) (f)--(d);
\draw[red,very thick] (a)--(d) (c)--(d) (b)--(e);
\end{tikzpicture}
\end{document}
```
$$
\delta(S)=\{ad,cd,be\}
$$

Disjoint set
- $S=\{a,c\}$

```tikz
\usepackage{tikz}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick]
\draw[cyan,dashed,rounded corners] (-0.5,1) rectangle (0.5,2);
\draw[cyan,dashed,rounded corners] (2.5,-2) rectangle (3.5,-1);
\node[cyan,above] at (0,2) {$a\in S$};
\node[cyan,below] at (3,-2) {$c\in S$};
\node[vertex] (a) at (0,1.5) {$a$};
\node[vertex] (b) at (3,1.5) {$b$};
\node[vertex] (c) at (3,-1.5) {$c$};
\node[vertex] (d) at (0,-1.5) {$d$};
\draw[red,very thick] (a)--(b) (b)--(c) (c)--(d) (d)--(a);
\end{tikzpicture}
\end{document}
```
$$
\delta(S)=\{ab,bc,cd,da\}
$$

Component in a forest
- $S=\{a,b\}$

```tikz
\usepackage{tikz}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick]
\draw[cyan,dashed,rounded corners] (-0.6,-0.6) rectangle (2.1,0.6);
\node[cyan,above] at (0.75,0.6) {$S=\{a,b\}$};
\node[vertex] (a) at (0,0) {$a$};
\node[vertex] (b) at (1.5,0) {$b$};
\node[vertex] (c) at (3.5,0) {$c$};
\node[vertex] (d) at (5,0) {$d$};
\draw[gray] (a)--(b) (c)--(d);
\end{tikzpicture}
\end{document}
```
$$
\delta(S)=\varnothing
$$

