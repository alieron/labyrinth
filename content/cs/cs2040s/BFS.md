---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/DFS
next: /labyrinth/notes/cs/cs2040s/topological_sort

---
### Summary
Breadth first search(BFS)
- iterative, [queue](/labyrinth/notes/cs/cs2040s/queue_ADT)

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
List<Boolean> visited = new ArrayList<>(Collections.nCopies(V, false)); // keep track of visited vertices

visited.set(start, true);
Queue<Integer> q = new LinkedList<>();
q.add(start); // enqueue the source

while (!q.isEmpty()) {
	int u = q.poll(); // dequeue vertex
	// do something

	for (int v : al.get(u)) // for all neighbouring vertices
		if (!visited.get(v)) {
			visited.set(v, true);
			q.add(v); // enqueue neighbours if not yet visited
		}
}

```
> all the neighbours are enqueued before moving on to the sibling, the queue can grow exponentially on graphs with large branching factor

BFS spanning tree
- [4-pan](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":100},"1":{"x":500,"y":0},"2":{"x":500,"y":200},"3":{"x":600,"y":100},"4":{"x":700,"y":100}},"el":{"0":{"u":0,"v":1},"1":{"u":0,"v":2},"2":{"u":1,"v":3},"3":{"u":2,"v":3},"4":{"u":3,"v":4},"5":{"u":1,"v":0},"6":{"u":2,"v":0},"7":{"u":3,"v":1},"8":{"u":3,"v":2},"9":{"u":4,"v":3}}}&directed=1&action=bfs+0): `bfs(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\sedge[4][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to node[auto,pos=0.25,red] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\node[vertex,label={[text=red]1}] (0) {0};
\node[vertex,label={[text=red]4},above right=of 0] (1) {1};
\node[vertex,label={[text=red]7},below right=of 0] (2) {2};
\node[vertex,label={[text=red]10},below right=of 1] (3) {3};
\node[vertex,label={[text=red]14},right=of 3] (4) {4};

\sedge[green]{0}{1}{2};
\sedge[gray]{1}{0}{5};
\sedge[green]{0}{2}{3};
\sedge[gray]{2}{0}{8};
\sedge[green]{1}{3}{6};
\sedge[gray]{3}{1}{11};
\sedge[gray]{2}{3}{9};
\sedge[gray]{3}{2}{12};
\sedge[green]{3}{4}{13};
\sedge[gray]{4}{3}{15};
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
		int curr = q.poll(); // dequeue vertex
		// do something

		for (int v : al.get(curr)) // for all neighbouring vertices
			if (!visited.get(v)) {
				visited.set(v, true);
				q.add(v); // enqueue neighbours if not yet visited
			}
	}
}

for (int i = 0; i < visited.length(); i++)
	if (!visited.get(i))
		bfs(i); // if there are any vertices not connected to the first vertex, this will find and call BFS on them
```
### Application
Leetcode: [Binary Tree Right Side View]()
- get rightmost node at each level
- BFS such that rightmost is last to be visited

```java
public List<Integer> rightSideView(TreeNode root) {
	LinkedList<Integer> out = new LinkedList<>();

	Queue<TreeNode> q = new LinkedList<>();
	Queue<Integer> h = new LinkedList<>();
	if (root != null) {
		q.add(root);
		h.add(0);
	}

	while (!q.isEmpty()) {
		TreeNode curr = q.poll();
		int height = h.poll();
		
		// add left first then right, so that right most will be visited last
		if (curr.left != null) {
			q.add(curr.left);
			h.add(height + 1);
		}
		if (curr.right != null) {
			q.add(curr.right);
			h.add(height + 1);
		}

		if (out.size() <= height)
			out.add(curr.val);
		else
			out.set(height, curr.val);
	}

	return out;
}
```