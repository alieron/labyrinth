---
tags:
  - cs341/chapter4
  - cs/dynamic_programming
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/tree_DP
pred: "[SSSP II](/labyrinth/notes/cs/cs341/SSSP_II)"
next: /labyrinth/notes/cs/cs341/APSP

---
### Concept
#### Dijkstra fails on -ve weight
- -ve weight cycle




D(i) = min distance from s to every vertex using at most i edges, infinity if unreachable

base case
D(0) = dist[s] = 0, dist[v] = infinity

D(1) = dist[s] = 0, dist[v] = w_{sv}, dist[v] = infinity for the rest

combine
D(i)[v] = $\min_{u, uv \in E} \{ D(i-1)[u] + w_{uv} \} \lor D(i-1)[v]$

#### [bellman-ford algorithm](/labyrinth/notes/cs/cs2040s/bellman-ford_algorithm)
```
BellmanFord(G,s):
	for each vertex v in G:
		d[v] <- infinity
	
	d[s] <- 0
	
	for k = 1...n: // jumps from s
		for every edge uv in G:
			d[v] = min(d[v], d[u] + w_uv)
	
	return d
```

Correctness

induction on k
at the kth iteration of the outer loop, d[v] <= D(v,k)

base case
d[v] = 0 if v = s or infinity otherwise
matching D(v,0)

induction step
in kth iteration, an edge uv satisfies
d[v] <= D(v,k-1)
d[u] <= D(u,k-1)

Time complexity
$O(nm)$

#### Negative cycles

Claim 1: When G contains a negative cycle, there is a vertex v were lim k-> infinity D(v,k) = -infinity

as k -> infinity we can go around the negative cycle as many times as we want


Claim 2: When G has no negative cycles then D(v,k) = D(v,n-1) for every vertex v

any path that uses n edges must contain a cycle, by pigeonhole principle

s -> v_i -> v_j -> v_k
so i != j but v_i = v_j

eliminating
v_{i+1} ... v_{j-1} in the path removes a non negative weight cycle


Claim 3: If D(v,n) = D(v,n-1) for every vertex v then G has no negative cycle

by the recurrance
D(v,n+1) = min{D(v,n), min(D(u,n) + w_uv)} = min{D(v,n-1), min(D(u,n-1) + w_uv)} = D(v,n)

for every n' >= n
D(v,n') = D(v,n) => lim_{k->\infty} D(v,k) = D(v,n-1) > -\infty