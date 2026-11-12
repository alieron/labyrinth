---
tags:
  - cs341/chapter2
  - cs/algorithms
  - cs/graph_algorithms
complete: false
pred: "[topological sort](/labyrinth/notes/cs/cs2040s/topological_sort)"
prev: /labyrinth/notes/cs/cs341/directed_reachability
next: /labyrinth/notes/cs/cs341/SCC

---
### Concept


#### [Topological sort](/labyrinth/notes/cs/cs341/topological_sort_II) on DAGs
$$
u\to v\implies \operatorname{pos}(u)<\operatorname{pos}(v)
$$

Topological ordering rules out cycles

$$
G\text{ is a DAG}\iff G\text{ has a topological ordering}

$$

cycle
$$
v_{1} \to v_{2} \to \dots v_{1} \implies \operatorname{pos}(v_1) < \operatorname{pos}(v_2) < \cdots < \operatorname{pos}(v_1)
$$

contradiction


Homework: DAG must have at least one source and one sink

Kahn's algorithm

using [DFS finish times](/labyrinth/notes/cs/cs341/DFS_II#^1d70f3), decreasing order of finish times

```
IsDAG(G):
	run a full DFS forest to compute finish times

	for each edge u -> v:
		if finish[u] <= finish[v]:
			return false

	return true
```

$$
u\to v \implies \text{finish}[u] > \text{finish}[v]
$$


parentheses property lemma