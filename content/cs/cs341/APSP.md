---
tags:
  - cs341/chapter4
  - cs/dynamic_programming
  - cs/graph_algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/graph_DP
next: /labyrinth/notes/cs/cs341/TSP

---
### Concept
#### All-pairs shortest paths(APSP)


#### Repeated [bellman-ford](/labyrinth/notes/cs/cs2040s/bellman-ford_algorithm)
```
RepeatedBellmanFord(G):
	for each vertex v in G:
		
```

Time complexity
$O(n^2 m)$ which might be $O(n^4)$


#### Floyd-Warshall
recurrence
D(i,j,k) = min dist from i to j in G where only the verticies 1,...,k can be used in the middle of the path

base case
$$
D(i,j,0) = \begin{cases}
0 & \text{if }i = j \\
w_{ij} &  \text{if }ij \in E \\
\infty & \text{otherwise}
\end{cases}
$$

Combination
$$
D(i,j,k)=\min\{D(i,j,k-1), D(i,k,k-1) + D(k,j,k-1)\}
$$

Algorithm
```
FloydWarshall(G):
	for i=1...n:
		for j=1...n:
			d[i,j,0] = infinity
			
	for i = 1...n:
		d[i,i] = 0
		for each j in Adj[i]:
			d[i,j] = w_ij
	
	for k=1...n:
		for i=i...n:
			for j=1...n:
				d[i,j,k] <- min{d[i,j,k-1], d[i,k,k-1] + d[k,j,k-1]}
	
	return d[,,n] 
```

Time complexity
$O(n^3)$