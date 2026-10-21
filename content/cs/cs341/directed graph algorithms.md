---
tags:
  - cs341/chapter3
  - cs/algorithms
  - cs/graphs
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/DFS_II
next: /labyrinth/notes/cs/cs341/greedy_scheduling

---
### Concept


#### Reachability
```
REACHABLE(G,s)
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

Base: viited[s]<- true
Step: 
by IH, visited[v_{i-1}] if true

so we explore v_{i-1}
v_i is a neighbour of v_{i-1}, when v_i is processed we set visited[v_i] to true if it has not yet been set to true earlier


#### Strong Connectivity
$$
G\text{ is strongly connected if }\forall u,v \in G,\quad u\rightsquigarrow v\text{ and }v\rightsquigarrow u
$$

for any vertex s in G, G is strongly connected iff forall v inn G, s~>v and v~>g

==>
by definition

<== for any u,v inn G 
u~>s~>v and v~>s~>u

so u~>v and v~>u


Reverse graph

for u,v in G, u~>_G v iff v~>_{G'} u

proof
u = v_0 v_1 ... v_k be a path in G iff v=v_k ... v_1 v_0 = u is a path in G'

so looking for u~>_G v and u~>_{G'} v is effectively u~>_G v and v~>_G u

[kosaraju's algorithm](#)


#### [Topological sort](/labyrinth/notes/cs/cs2040s/topological_sort) on DAGs

Homework: DAG must have at least one source and one sink

Kahn's algorithm

using [finish times](/labyrinth/notes/cs/cs341/DFS_II#^1d70f3), decreasing order of finish times


parentheses property lemma