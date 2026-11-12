---
tags:
  - cs341/chapter2
  - cs/algorithms
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/topological_sort_II
next: /labyrinth/notes/cs/cs341/greedy_scheduling

---
### Summary
SCC algorithms

|                          | Time Complexity | Constraint | Type of Graph ADT |
| ------------------------ | --------------- | ---------- | ----------------- |
| [kosaraju's algorithm](#) | $O(V+E)$        |            | AL                |
| [tarjan's algorithm](#)   | $O(V+E)$        |            | AL                |

SCC related problems
- [~2-SAT](#)

### Concept
#### Strong connectivity
$$
G\text{ is strongly connected if }\forall u,v \in G,\quad u\rightsquigarrow v\text{ and }v\rightsquigarrow u
$$

```
StronglyConnected(G):
    choose any vertex s
    F = Reachable(G, s)
    B = Reachable(reverse(G), s)
	
    return every vertex is marked in both F and B
```

==>
by definition

<== for any u,v inn G 
u~>s~>v and v~>s~>u

so u~>v and v~>u




Strongly connected components
- subgraphs in which every vertex is reachable from every other vertex 
- 6 vertex graph

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,fit}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dedge[3][]{
  \draw[->,#1] (#2) to (#3);
}
\newcommand\sdedge[3][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to (#3);
}
\begin{document}
\begin{tikzpicture}[thick]

\node[vertex] (0) {0};
\node[vertex,above right=of 0] (1) {1};
\node[vertex,below right=of 0] (2) {2};
\node[vertex,right=2 of 1] (3) {3};
\node[vertex,right=2 of 2] (4) {4};
\node[vertex,below right=of 3] (5) {5};

\dedge{0}{1};
\dedge{0}{2};
\sdedge{1}{2};
\sdedge{2}{1};
\dedge{3}{1};
\dedge{3}{2};
\dedge{3}{4};
\dedge{4}{5};
\dedge{5}{3};

\pgfdeclarelayer{foreground}
\pgfsetlayers{main,foreground}
\begin{pgfonlayer}{foreground}
	\node[
  draw=red,
  very thick,
  rounded corners=15pt,
  fit=(0),
  inner sep=10pt
	] {};
	\node[
  draw=yellow,
  very thick,
  rounded corners=15pt,
  fit=(1)(2),
  inner sep=10pt
	] {};
	\node[
  draw=blue,
  very thick,
  rounded corners=15pt,
  fit=(3)(4)(5),
  inner sep=10pt
	] {};
\end{pgfonlayer}

\end{tikzpicture}
\end{document}
```


#### Definition
- Research mutual reachability as an [equivalence relation](/labyrinth/notes/math/cs1231s/equivalence_relations)
- Distinguish strongly connected sets from maximal SCCs
- Check treatment of isolated vertices and self-loops



can two SCCs share a vertex?
- no
- lemma - any two SCCs must be disjoint
- by contradiction
- if there is path from u to v, v to u and v to w and w to v, then there is u to w and w to u, so $C\cup C'$ is an SCC

can DAGs have SCCs?
- no

#### Component graph
- is a DAG
- proof? by contradiction
- for every directe graph G, the component graph of G is a DAG
- having a directed cycle among components contradicts maximality


- Contract each SCC to one meta-vertex
- Verify why a directed cycle among components would contradict maximality
- Research how topological order supports downstream DAG algorithms

largest finish time by DFS always gives a vertex in a source component
take the reversal of G?

#### SCC partition by [DFS finish times](/labyrinth/notes/cs/cs341/DFS_II#Start_and_Finish_times_1d70f3)
- run DFS on G^r to get finish times
- while G != 0
	- v <- vertex with largest finish time
	- C <- DFS(v)
	- G <- G / C

component finish time
$$
\begin{gather*}
F(C)=\max_{v\in C}\ \text{finish}[v] \\
\\
C \to D \implies F(C) > F(D)
\end{gather*}
$$

Kosaraju
```
SCC(G):
	run full DFS on G
	order = vertices in decreasing finish time

	R = reverse(G)
	comp[v] = UNASSIGNED for every v
	label = 0

	for s in order:
		if comp[s] == UNASSIGNED:
			label = label + 1
			DFS from s in R:
				visit only UNASSIGNED vertices
				assign label to every visited vertex

	return comp
```
> the DFS finish time is what gives us the post-order behaviour
#### Algorithms
- Compare two-pass [kosaraju's algorithm](#) with one-pass [tarjan's algorithm](#)
- Both run in $O(V+E)$ with adjacency lists
- Track required state, recursion risks, and component output order

#### Research directions
- Derive the [2-SAT](#) satisfiability criterion from implication-graph SCCs
- Explore dependency cycles and wait-for graphs
- Study source and sink SCCs in graph augmentation problems
- Check conventions for the condensation graph edge set

### Sources
- [CP-Algorithms SCC](https://cp-algorithms.com/graph/strongly-connected-components.html)
- [Tarjan SCC original paper](https://doi.org/10.1137/0201010)
- [Kosaraju algorithm](https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm)