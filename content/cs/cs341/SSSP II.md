---
tags:
  - cs341/chapter3
  - cs/algorithms
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/greedy_scheduling
next: /labyrinth/notes/cs/cs341/MST_II
pred: "[SSSP](/labyrinth/notes/cs/cs2040s/SSSP)"
succ: "[graph DP](/labyrinth/notes/cs/cs341/graph_DP)"
---
### Concept
#### BFS for SSSP
- add imaginary verticies


#### [Dijkstra's algorithm](/labyrinth/notes/cs/cs2040s/dijkstra's_algorithm)

```
Dijkstra(G, w, s):
    for each vertex v in G:
        d[v] = +∞
        parent[v] = ⊥
        count[v] = 0
    d[s] = 0
    count[s] = 1
    Q = priority queue containing each v with key d[v]
    while Q is not empty:
        u = ExtractMin(Q) 
        if d[u] = +∞:
            break
        for each v in Adj[u]:
            if v in Q and d[u] + w(u, v) < d[v]:
                d[v] = d[u] + w(u, v)
                parent[v] = u 
                DecreaseKey(Q, v, d[v])
    return (d, parent) 
```

min heap dijkstra vs array dijkstra

hidden heap version

Correctness
 show that for all v in V, dist[v] = min distance of a path from s to v

base case: dist[s] = 0, positive weights, so no negative cycles

induction step: fix v, dist[v] >= delta(v)
	for some u added to R before v, by IH
	dist[v] = dist[u] + l_{uv}
					= delta(u) + l_{uv}
					>= delta(v)


	dist[v] <= delta(v)
	contradiction
	for any other path from s-v there must be x in R and y not in R
	such that s~>x->y~>v

	means that l_{uv} <= l_{xy}
	dist[y] >= dist[v]