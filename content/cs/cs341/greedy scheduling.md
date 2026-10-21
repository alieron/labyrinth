---
tags:
  - cs341/chapter3
  - cs/algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/directed_graph_algorithms
next: /labyrinth/notes/cs/cs341/SSSP_II

---
### Concept


#### Interval scheduling
- given a set of intervals
- return the maximum set of disjoint(non-intersecting) intervals
- we want the largest number of non-clashing intervals

bad
- min start - counter ex. one long one
- min (finish - start) - counter ex.
	- ---- ----
	-    ---
- min no. of overlaps with other intervals

good
- min finish

```
InterSchedule([s1,f1] ... [sn,fn])
	sort intervals by finish time (fi <= fi+1
	S <- empty set
	for i=1...n do
		if [si,fi] does not intersect any other interval in S
			insert interval i into S
	
	return S
```

#### Interval coloring
- give "colors" to each interval
- minimize the number of colors with overlapping intervals having different colors

```
IntervalColor([s1,f1] ... [sn,fn])
	sort intervals by start time (si <= si+1)
	for i=1...n do
		assign interval i the min color that has not already been assigned to an interval that overlaps i 
```

#### Minimum total completion time
- order to complete a set of jobs to reduce the total completion time
- related to [SJF](/labyrinth/notes/cs/cs2106/shortest_first_scheduling#Shortest_Job_First(SJF))

- exchange argument
- suppose b > a
- ... |  b  | a | ...
-     r    r+b  r+b+a
- total completion time = T' + r + b
- 
- vs
- ... | a |  b  | ...
-     r  r+a    r+a+b
- total completion time = T' + r + a


