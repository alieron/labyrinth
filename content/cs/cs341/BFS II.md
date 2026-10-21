---
tags:
  - cs341/chapter2
  - cs/algorithms
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/divide_&_conquer
next: /labyrinth/notes/cs/cs341/DFS_II

---
### Summary
BFS lemmas


| Property                                                                  | When to use it                                |
| ------------------------------------------------------------------------- | --------------------------------------------- |
| `distance[v] = distance[parent[v]] + 1`                                   | Proving parent paths have the recorded length |
| For an undirected edge \(\{u,v\}\), (                                     | d[u]-d[v]                                     |
| For a directed edge \(u -> v\) with reachable \(u\), \(d[v] <= d[u]+1\)   | Shortest-path inequalities                    |
| BFS reaches exactly the vertices reachable from \(s\)                     | Reachability and connected components         |
| In an undirected graph, an edge within one BFS layer implies an odd cycle | Bipartiteness proofs                          |

### Concept

At the end visited[v]=true iff there is a path from s to v in G

$$
\text{At the end }{visited[v]=true} \iff \text{there is a path }s\to v
$$


BFS for shortest path
- in an unwighted/uniform weight graph

- no other shorter path
- the distance to elements added to the queue is non decreasing as more vertices are added


Bipartite graph
- odd length cycles?
- redraw the BFS tree in a BST form

$$
\text{bipartite}\iff \text{no odd cycle}
$$

#### BFS tree
- cannot have non-tree edges cross multiple levels

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,graphs,graphs.standard}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] (a1) {1};
\node[vertex,below left=of a1] (a2) {2};
\node[vertex,below right=of a1] (a5) {5};
\node[vertex,below right=of a2] (a3) {3};
\node[vertex,below=of a1] (a4) {4};
\node[vertex,above right=of a5] (a6) {6};
\node[vertex,below right=of a6] (a7) {7};
\node[vertex,below right=of a5] (a8) {8};
\draw[-] (a1) -- (a2);
\draw[-] (a1) -- (a4);
\draw[-] (a1) -- (a5);
\draw[-] (a2) -- (a3);
\draw[-] (a2) -- (a4);
\draw[-] (a3) -- (a4);
\draw[-] (a3) -- (a5);
\draw[-] (a5) -- (a6);
\draw[-] (a5) -- (a8);
\draw[-] (a6) -- (a7);
\draw[-] (a7) -- (a8);
\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=12mm},edge from parent/.style={-,draw}]
\node [vertex] (s1) {1}
  child {
    node [vertex] (s2) {2}
    child {
			node [vertex] (s3) {3}
		}
  }
  child {
		node [vertex] (s4) {4}
	}
	child {
		node [vertex] (s5) {5}
		child {
			node [vertex] (s6) {6}
			child {
				node [vertex] (s7) {7}
			}
		}
		child {
			node [vertex] (s8) {8}
		}
	};
\draw[-,dashed,gray] (s2) to[bend right=45] (s4);
\draw[-,dashed,gray] (s3) to[bend right=45] (s4);
\draw[-,dashed,gray] (s3) to[bend right=25] (s5);
\draw[-,dashed,gray] (s7) to[bend right=45] (s8);

\end{tikzpicture}
\end{document}
```

