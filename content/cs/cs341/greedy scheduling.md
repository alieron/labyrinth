---
tags:
  - cs341/chapter3
  - cs/algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/SCC
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
ScheduleIntervals([s_1,f_1] ... [s_n,f_n])
	sort intervals by finish time (f_i <= f_{i+1})
	S <- empty set
	for i=1...n do
		if [s_i,f_i] does not intersect any other interval in S
			insert interval i into S
	
	return S
```

O(n log n)

#### Interval coloring
- give "colors" to each interval
- minimize the number of colors with overlapping intervals having different colors

```
ColorIntervals([s1,f1] ... [sn,fn])
	sort intervals by start time (si <= si+1)
		
	Busy = empty min-heap
	Free = empty min-heap
	q = 0
	
	for each interval i:
		while Busy is not empty and minimumFinish(Busy) < start[i]:
				move that room from Busy to Free

		if Free is empty:
				q = q + 1
				room = q
		else:
				room = ExtractMin(Free)

		color[i] = room
		insert (finish[i], room) into Busy
		
	return (color, q)
```

O(n log n)

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

```
ShortestFirst(j_1 ... j_2):
	jobs = sort jobs by nondecreasing duration (j_i <= j_{i+1})
	return jobs
```


Adjacent exchange
$$
\begin{gather*}
\text{Adjacent jobs: }a>b \text{ at time }t\\
\\
\begin{array}{c|c}
a\text{ then }b & b\text{ then }a \\
\begin{aligned}[t]
C_{a}+C_{b} &= (t+a) + (t+a+b)\\
&= 2t+2a + b
\end{aligned} & \begin{aligned}[t]
C_{b}'+C_{a}' &= (t+b) + (t+b+a) \\
&= 2t + a + 2b
\end{aligned}
\end{array} \\
\\
a>b \implies t+2a + b > 2t + a + 2b \implies b\text{ then }a\text{ is an improvement} \\
\\
\text{earlier jobs do not change, pair starts at }t \\
\text{later jobs do not change, pair finishes at }t+a+b
\end{gather*}
$$