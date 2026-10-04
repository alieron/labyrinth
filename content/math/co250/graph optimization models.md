---
tags:
  - co250/chapter1
  - math/optimization
complete: false
prev: /labyrinth/notes/math/co250/integer_programs
next: /labyrinth/notes/math/co250/nonlinear_programs

---
### Concept
A graph $G=(V,E)$ has vertices and edges; $\delta(v)$ denotes edges incident to $v$. A path has distinct vertices, while a walk may repeat them. With edge costs $c_e$, path or matching cost is $\sum_{e}c_e$ over selected edges.

A matching has no shared endpoints and is perfect if every vertex is covered. With $x_e=1$ iff $e$ is selected, minimum-cost perfect matching is
$$\min\sum_{e\in E}c_ex_e\quad\text{s.t.}\quad\sum_{e\in\delta(v)}x_e=1\ (v\in V),\quad x_e\in\{0,1\}.$$

#### Shortest path cuts
Endpoint edges
- set of edges with **exactly one** vertex in $S$

$$
\begin{gather*}
S \subseteq V \\
\\
\delta(S)=\{\begin{array}{c|c} uv\in E & u\in S,v\notin S \end{array}\}
\end{gather*}
$$
It is an $s,t$-cut when $s\in S$ and $t\notin S$. Every $s,t$-path crosses every such cut. Conversely, an edge set intersecting every $s,t$-cut contains an $s,t$-path: otherwise vertices reachable from $s$ define an unhit cut.

$s,t$-cuts
- when removing a subset of edges removes all paths between $s$ and $t$

$$
s\in S \land t\not \in S \implies \delta(S)\text{ is an }s,t\text{-cut}
$$


$$
S = \{ s \} \to\delta(S) = \{ sa, sb \}\text{ is an }s,t
\text{-cut}$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,below left=of a] (s) {s};
\node[vertex,below right=of s] (b) {b};
\draw[-,red] (s) -- (a);
\draw[-,red] (s) -- (b);
\draw[-] (a) -- (b);
\draw[-] (a) -- (t);
\draw[-] (b) -- (t);

\end{tikzpicture}
\end{document}
```


$$
S = \{ s,a \} \to\delta(S) = \{ sb, at, ab \}\text{ is an }s,t
\text{-cut}$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,below left=of a] (s) {s};
\node[vertex,below right=of s] (b) {b};
\draw[-] (s) -- (a);
\draw[-,red] (s) -- (b);
\draw[-,red] (a) -- (b);
\draw[-,red] (a) -- (t);
\draw[-] (b) -- (t);

\end{tikzpicture}
\end{document}
```


$$
S = \{ a,b \} \to\delta(S) = \{ as, at, bs, bt \}\text{ is not an }s,t\text{-cut}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,below left=of a] (s) {s};
\node[vertex,below right=of s] (b) {b};
\draw[-,red] (s) -- (a);
\draw[-,red] (s) -- (b);
\draw[-] (a) -- (b);
\draw[-,red] (a) -- (t);
\draw[-,red] (b) -- (t);

\end{tikzpicture}
\end{document}
```
> even though there is no path from $s$ to $t$, there could still be an edge $st$ in the greater $E$

Path and cut
- an $s,t$-path overlaps with an $s,t$-cut, by 1 edge

$$
P\text{ is an }s,t\text{-path}\land \delta(S)\text{ is an }s,t\text{-cut} \implies \exists uv \in \delta(S), \ uv \in P
$$

Constructing a path from $s,t$-cuts
$$
\begin{gather*}
F\subseteq E,\quad
\begin{aligned}[t]
F\text{ contains at least one edge from every }s,t\text{-cut}&\implies F\text{ contains an }s,t\text{-path}\\
\\
\bigl(\forall S\subseteq V,\ s\in S,\ t\notin S, \quad
F\cap\delta(S)\ne\varnothing\bigr)&\implies
\text{\((V,F)\) has an \(s,t\)-path}
\end{aligned}
\end{gather*}
$$

$$
\begin{align*}
& \text{Claim: } \bigl(\forall S\subseteq V,\ s\in S,\ t\notin S, \quad
F\cap\delta(S)\ne\varnothing\bigr)\implies
\text{\((V,F)\) has an \(s,t\)-path} \\
\\
& \text{Suppose not, that } F\text{ contains at least one edge from every }s,t\text{-cut but no }s,t\text{-path}\\
\\
&\text{Let }R\text{ be the set of verticies reachable from }s\text{ in }F \\
&R = \{\begin{array}{c|c} u \in V & F\text{ has an }s,u\text{-path} \end{array}\} \\
\\
&\text{so }\\
&\quad\begin{aligned}[t]
&\text{no }s,t\text{-path}\implies t\not\in R \implies \delta(R)\text{ is an }s,t\text{-cut since }s\in R \\
\\
&\text{there cannot be an edge }uv\in E\text{ where }u\in R, \ v\not\in R\text{, otherwise }v \text{ should already be in }R \\
\\
&\therefore F\cap\delta(R)=\varnothing
\end{aligned}\\
\\
&\text{Contradiction}
\end{align*}
$$

#### Shortest-path [IP](/labyrinth/notes/math/co250/integer_programs)
- binary variable for each edge

$$
\begin{gather*}
\text{where }P\text{ is the shortest }s,t\text{-path} \\
\\
x_{e} = \begin{cases}
1 & e\in P \\
0 & \text{otherwise}
\end{cases}
\end{gather*}
$$

- full IP

$$
\begin{align*}
\text{min}&\sum_{e\in E} c_{e}x_{e} \\
\\
\text{such that}& \sum_{e\in\delta(S)}x_e\ge1
\end{align*}
$$
$$\min\sum_{e\in E}c_ex_e$$
$$\text{s.t. }\sum_{e\in\delta(S)}x_e\ge1\quad(s\in S,t\notin S),\qquad x\in\mathbb Z_+^E.$$
For positive costs, an optimum contains a shortest path and no costly surplus is needed. This cut formulation later yields the dual in [shortest path duality](/labyrinth/notes/math/co250/shortest_path_duality).


### Application

