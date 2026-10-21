---
tags:
  - cs341/chapter2
  - cs/algorithms
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/BFS_II
pred: "[DFS](/labyrinth/notes/cs/cs2040s/DFS)"
next: /labyrinth/notes/cs/cs341/directed_graph_algorithms

---
### Concept


#### DFS tree

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
      child {
        node [vertex] (s4) {4}
      }
      child {
        node [vertex] (s5) {5}
        child {
          node [vertex] (s6) {6}
          child {
	          node [vertex] (s7) {7}
            child {
              node [vertex] (s8) {8}
            }
          }
        }
      }
    }
  };
\draw[-,dashed,gray] (s4) to[bend left=45] (s1);
\draw[-,dashed,gray] (s4) to[bend left=45] (s2);
\draw[-,dashed,gray] (s5) to[bend right=30] (s1);
\draw[-,dashed,gray] (s8) to[bend right=45] (s5);

\end{tikzpicture}
\end{document}
```


#### Cut verticies
- vertex with at least 2 DFS tree children, 2 children mean no path between the two subtrees


```
FindCutVertices(G):
    for each vertex u:
        discover[u] = UNVISITED
        parent[u] = NIL
        isCut[u] = false

    time = 0

    for each vertex u:
        if discover[u] == UNVISITED:
            CutDFS(u)

    return vertices u with isCut[u] == true

CutDFS(u):
    time = time + 1
    discover[u] = time
    low[u] = discover[u]
    children = 0

    for each v in Adj[u]:
        if discover[v] == UNVISITED:
            parent[v] = u
            children = children + 1

            CutDFS(v)

            low[u] = min(low[u], low[v])

            if parent[u] != NIL and low[v] >= discover[u]:
                isCut[u] = true

        else if v != parent[u]:
            low[u] = min(low[u], discover[v])

    if parent[u] == NIL and children >= 2:
        isCut[u] = true
```

$$
\operatorname{low}[u]
=
\min\left(
d[u],
\min_{\text{children }v}\operatorname{low}[v],
\min_{\substack{\text{non-tree edges}\\\{u,w\}}}d[w]
\right).
$$



every edge in a graph G is a back edge in its DFS tree

#### Start and Finish times ^1d70f3

for every  pair of verticies (u,v) in  G, (start[u], finish[u]) and (start[v], finish[v]) are either disjoint or one is contained in the other

[postorder traversal](/labyrinth/notes/cs/cs2040s/BST#^9c866c)


### Application
Cycle with $k$ edges
1. Run DFS in any connected component, recording `parent` and `depth`.
2. Choose a leaf \(v\) of the resulting DFS tree.
3. Among all neighbors of \(v\), choose \(u\) with minimum depth.
4. Follow parent pointers from \(v\) up to \(u\).
5. Close this path using the edge \(uv\).

```
FindLongCycle(G):
    run DFS from any vertex
    record parent, depth, and number of DFS children

    choose a visited vertex v with no DFS children
    u = a neighbor of v having minimum depth

    path = [v]
    x = v

    while x != u:
        x = parent[x] // traverse up the tree
        append x to path

    return path with the closing edge from u to v
```

- neighbour of a leaf in DFS tree is ancestor