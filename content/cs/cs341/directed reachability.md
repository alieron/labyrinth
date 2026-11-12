---
tags:
  - cs341/chapter2
  - cs/algorithms
  - cs/graphs
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/DFS_II
next: /labyrinth/notes/cs/cs341/topological_sort_II

---
### Concept
#### Directed reachability
- whether there is a path fron one vertex to another
- using [DFS](/labyrinth/notes/cs/cs341/DFS_II)

```
Reachable(G,s):
	DFS(G,s)
	return visited
```


At the end of DFS(G,s), visited[v] is true iff s~v(path from s to v)

==>
Base: s~s

Step: let u be the vertex we are exploring when we set visited[v] = true

By IH, s~> u and u~>v thus s~>v

<==
let s = v_0v_1...v_k = v be a path in G

prove that visited[v_i]=true

Base: visited[s]<- true
Step: 
by IH, visited[v_{i-1}] if true

so we explore v_{i-1}
v_i is a neighbour of v_{i-1}, when v_i is processed we set visited[v_i] to true if it has not yet been set to true earlier


#### Reversed graph
$$
\begin{gather*}
G = (V,E) \\
\\
G^R = (V, E^R) \\
E^R = \{\begin{array}{c|c} (v,u) & (u,v)\in E \end{array}\}
\end{gather*}
$$

graph reversal is O(m)

Reversal lemma
- path in the graph implies the opposite path in the reversed graph

$$
u\rightsquigarrow_{G} v \iff v\rightsquigarrow_{G^R} u
$$


proof
u = v_0 v_1 ... v_k be a path in G iff v=v_k ... v_1 v_0 = u is a path in G'

so looking for u~>_G v and u~>_{G^R} v is effectively u~>_G v and v~>_G u



