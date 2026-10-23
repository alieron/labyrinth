---
tags:
  - cs341/chapter3
  - cs/algorithms
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/SSSP_II
pred: "[MST](/labyrinth/notes/cs/cs2040s/MST)"
---
### Concept

#### MST

Removing edges
if `e` is part of a cycle in a connected graph G, the graph G-e is also connected

Any MST includes the minimum cost edge
claim: for every G, there is a MST T' of G that includes its edge e with minimum cost c_e

fix any MST T of G
	if e inn T => good
	if e not inn T
		by exchange argument, consider T+e
		it would have a cycle with e and some other edge f

		then, take T' = T+e-f

		T' is connected => T' is a spanning tree of G
		its cost is
		cost(T') = cost(T) + c_e - c_f, and c_e <= c_f
		         <= cost(T)
		so T ' is an MST if it includes e

The smallest weight edge at every vertex is in the MST
claim: for every edge e=uv with minimum cost among all edges incident to u, there is a MST of G that includes e

same exchange argument as previous
  f
.---.u
|   :
|   :e
|   :
.---.v

Cut
a partition of V into two nonempty sets $S\subseteq V$ and $V-S$

cut is the set of edges
$$
\delta(S)= \{\begin{array}{c|c} e=uv \in E & u\in S\land v\not\in S \end{array}\}
$$


MST is built on the smallest edge in a cut
for every G and every non-trivial partition (S, V-S) of V, if e has minimum cost c_e among the edges in $\delta(S)$ then there is an MST of G that includes e

same exchange argument


Cut property
fix G a set $S\subseteq V$
if $F\subseteq E$ is a set of edges in some MST of G and $F\cap\delta(S)\neq \varnothing$, then the edge $e \in \delta(S)$ with minimal cost is in a MST of G that includes $F+e$

let T be MST of G that includes F
- if e = uv in T => good
- if e = uv not inn T
	- consider T+e, there is a cycle with e
	- take T' = T+e-f
	- T' is a spanning tree and cost(T') <= cost(T)
	- $f \in \delta(S) \implies f\not\in F \implies T' \supseteq F+e$

#### [Prim's algorithm](/labyrinth/notes/cs/cs2040s/prim's_algorithm)


#### [Kruskal's algorithm](/labyrinth/notes/cs/cs2040s/kruskal's_algorithm)

