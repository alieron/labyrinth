---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/DFS

---
### Summary
Breadth first search(BFS)
- iterative
- requires a [queue](/labyrinth/notes/cs/cs2040s/queue_ADT)

Time complexity
- using an adjacency list
- same as [DFS](/labyrinth/notes/cs/cs2040s/DFS#^7735dc)
- average case: $O(V+E)$ - every time a vertex is dequeued, check all neighbours

$$
O(V+E)
$$
### Concept
Algorithm
1. enqueue every neighbour into a queue
2. while the queue is not empty, dequeue the first vertex and enqueue its neighbours

```java
List<List<Integer>> al; // O(V+E) only using adjacency list
List<Boolean> visited;  // keep track of visited vertices

void bfs(int u) {
	visited.set(u, true);
	Queue<Integer> q = new LinkedList<>();
	q.add(u); // enqueue the source

	while (!q.isEmpty()) {
		int curr = q.poll();       // dequeue vertex
		// do something

		for (int v : al.get(curr)) // for all neighbouring vertices
			if (!visited.get(v)) {
				visited.set(v, true);
				q.add(x);              // enqueue neighbours if not yet visited
			}
	}
}
```
> all the neighbours are enqueued before moving on to the sibling, the queue can grow exponentially

BFS spanning tree
- [4-pan](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":100},"1":{"x":500,"y":0},"2":{"x":500,"y":200},"3":{"x":600,"y":100},"4":{"x":700,"y":100}},"el":{"0":{"u":0,"v":1},"1":{"u":0,"v":2},"2":{"u":1,"v":3},"3":{"u":2,"v":3},"4":{"u":3,"v":4},"5":{"u":1,"v":0},"6":{"u":2,"v":0},"7":{"u":3,"v":1},"8":{"u":3,"v":2},"9":{"u":4,"v":3}}}&directed=0): `BFS(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\sedge[4]{
  \draw[->,#1,transform canvas={shift={($(#3)!4pt!90:(#2)-(#3)$)}}] (#2) to node[auto,swap,red] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick]
\node[vertex,label={[text=red]1}] (0) {0};
\node[vertex,label={[text=red]4},above right=of 0] (1) {1};
\node[vertex,label={[text=red]7},below right=of 0] (2) {2};
\node[vertex,label={[text=red]10},below right=of 1] (3) {3};
\node[vertex,label={[text=red]14},right=of 3] (4) {4};

\sedge{green}{0}{1}{2};
\sedge{gray}{1}{0}{5};
\sedge{green}{0}{2}{3};
\sedge{gray}{2}{0}{8};
\sedge{green}{1}{3}{6};
\sedge{gray}{3}{1}{11};
\sedge{gray}{2}{3}{9};
\sedge{gray}{3}{2}{12};
\sedge{green}{3}{4}{13};
\sedge{gray}{4}{3}{15};
\end{tikzpicture}
\end{document}
```
```
curr | queue
_    | [ 0 ]
0    | [ 1, 2 ]
1    | [ 2, 3 ]      // 0 was already visited
2    | [ 3, 4 ]      // 0 was already visited
3    | [ 4 ]         // 1, 2 were already visited
4    | [ ]
```

BFS on disconnected graphs
- still $O(V+E)$
- same as [DFS](/labyrinth/notes/cs/cs2040s/DFS#^aff293)

```java
List<List<Integer>> al; // O(V+E) only using adjacency list
List<Boolean> visited;  // keep track of visited vertices

void bfs(int u) {
	visited.set(u, true);
	Queue<Integer> q = new LinkedList<>();
	q.add(u); // enqueue the source

	while (!q.isEmpty()) {
		int curr = q.poll();       // dequeue vertex
		// do something

		for (int v : al.get(curr)) // for all neighbouring vertices
			if (!visited.get(v)) {
				visited.set(v, true);
				q.add(x);              // enqueue neighbours if not yet visited
			}
	}
}

for (int i = 0; i < visited.length(); i++)
	if (!visited.get(i))
		bfs(i); // if there are any vertices not connected to the first vertex, this will find and call BFS on them
```

Kahn's algorithm
- topological sort
1. compute in-degrees of all vertices
2. modified BFS such that only verticies with no incoming edges(in-degree = 0) are enqueued
3. the vertex is also "deleted" after being dequeued

```java
int[] indegree = new int[V];

for (int u = 0; u < V; u++) {
	for (int v : al.get(v)) {
		indegree[v]++; // increment for every incoming edge
	}
}

Queue<Integer> q = new LinkedList<>();
for (int u = 0; u < V; u++) {
	if (indegree[u] == 0) {
		q.offer(u);
	}
}

List<Integer> order;

while (!q.isEmpty()) {
	int u = q.poll();
	order.add(u);

	for (int v : al.get(u)) {
		indegree[v]--; // delete the edge
		if (indegree[v] == 0) { // if
			q.offer(v);
		}
	}
}

```
- [6 vertex DAG](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":0},"1":{"x":500,"y":100},"2":{"x":500,"y":300},"3":{"x":400,"y":200},"4":{"x":300,"y":300},"5":{"x":300,"y":100}},"el":{"0":{"u":0,"v":1},"1":{"u":5,"v":0},"2":{"u":3,"v":1},"3":{"u":3,"v":2},"4":{"u":3,"v":4},"5":{"u":4,"v":2}}}&directed=1)

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
\begin{scope}
	\node[vertex,label={[text=red]4}] (0) {0};
	\node[vertex,label={[text=red]6},below right=of 0] (1) {1};
	\node[vertex,label={[text=red]2},below left=of 0] (5) {5};
	\node[vertex,label={[text=red]1},below left=of 1] (3) {3};
	\node[vertex,label={[text=red]3},below left=of 3] (4) {4};
	\node[vertex,label={[text=red]5},below right=of 3] (2) {2};
	
	\draw[->] (0) -- (1);
	\draw[->] (3) -- (1);
	\draw[->] (3) -- (2);
	\draw[->] (3) -- (4);
	\draw[->] (5) -- (0);
	\draw[->] (4) -- (2);
\end{scope}

\begin{scope}[shift={(-4,-7)}] % shift this block below
  \node[vertex,label={[text=red]1}] (a3) {3};
  \node[vertex,label={[text=red]2},right=of a3] (a5) {5};
  \node[vertex,label={[text=red]3},right=of a5] (a4) {4};
  \node[vertex,label={[text=red]4},right=of a4] (a0) {0};
  \node[vertex,label={[text=red]5},right=of a0] (a2) {2};
  \node[vertex,label={[text=red]6},right=of a2] (a1) {1};
  
	\draw[->] (a0) to[bend right] (a1);
	\draw[->] (a3) to[bend right] (a1);
	\draw[->] (a3) to[bend left] (a2);
	\draw[->] (a3) to[bend left] (a4);
	\draw[->] (a5) to[bend right] (a0);
	\draw[->] (a4) to[bend left] (a2);
\end{scope}
\end{tikzpicture}
\end{document}
```
```
curr | queue
_    | [ 3, 5 ]
3    | [ 5, 4 ]      // delete 3 frees 4
5    | [ 4, 0 ]      // delete 5 frees 0
4    | [ 0, 2 ]
0    | [ 2, 1 ]
2    | [ 1 ]
1    | [ ]
```
### Application
