---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
  - lang/pgf-tikz
complete: true
next: /labyrinth/notes/cs/cs2040s/BFS
prev: /labyrinth/notes/cs/cs2040s/graph_traversal

---
### Summary
Depth first search(DFS)
- recursive, implicit stack
- iterative, stack

Time complexity ^7735dc
- using an adjacency list
- average case: $O(V+E)$ - at every vertex, visit self and check all neighbours

$$
\begin{align*}
T(V,E)&=O(1)+O(k_{0})+T(V-1,E-k_{0})\quad\text{where }k_{i}\text{ is the number of neighbours at vertex }i\\
\\
&=O(1)+O(1)+O(k_{0})+O(k_{1})+T(V-2,E-k_{0}-k_{1}) \\
\\
&= \underbrace{ O(1)+O(1)+\dots+O(1) }_{ V\cdot O(1) }+\underbrace{ O(k_{0})+O(k_{1})+\dots O(k_{V-1}) }_{ \sum_{i=0}^{V-1}O(k_{i}) = O(E)  } \\
\\
&=V\cdot O(1)+O(E) \implies O(V+E)
\end{align*}
$$
- [worse case](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":50},"1":{"x":529,"y":125},"2":{"x":529,"y":275},"3":{"x":400,"y":350},"4":{"x":270,"y":275},"5":{"x":270,"y":124}},"el":{"0":{"u":0,"v":1},"1":{"u":1,"v":2},"2":{"u":2,"v":3},"3":{"u":3,"v":4},"4":{"u":4,"v":5},"5":{"u":0,"v":2},"6":{"u":0,"v":3},"7":{"u":0,"v":4},"8":{"u":0,"v":5},"9":{"u":1,"v":3},"10":{"u":1,"v":4},"11":{"u":1,"v":5},"12":{"u":2,"v":4},"13":{"u":2,"v":5},"14":{"u":3,"v":5}}}&directed=0&action=dfs+0): $O(V+E) = O(V+V^2) = O(V^2)$ - complete graph
- [best case](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":50},"1":{"x":500,"y":50},"2":{"x":600,"y":50},"3":{"x":700,"y":50},"4":{"x":800,"y":50},"5":{"x":900,"y":50}},"el":{"0":{"u":0,"v":1},"1":{"u":1,"v":2},"2":{"u":2,"v":3},"3":{"u":3,"v":4},"4":{"u":4,"v":5}}}&directed=0&action=dfs+0): $O(V+E) = O(V+(V-1)) = O(V)$ - single path/tree

- using adjacency matrix/edge list

$$
\begin{gather*}
O(k_{i}) = O(E) \\
\\
\begin{aligned}
T(V,E) &= V\cdot O(1) + \sum_{i=0}^{V-1} O(E) \\
&= V\cdot(O(1) + O(E)) \implies O(V+VE)
\end{aligned}
\end{gather*}
$$
> be careful when choosing between [graph DSes](/labyrinth/notes/cs/cs2040s/graph_ADT)
### Concept
Algorithm
- recursively call DFS on every neighbour of the current node
- avoid cycles by tracking visited nodes

```java
List<List<Integer>> al; // O(V+E) only using adjacency list
List<Boolean> visited;  // keep track of visited vertices

void dfs(int u) {
	visited.set(u, true);   // visit self, currently like preorder traversal
	// do something
			
	for (int v : al.get(u)) // for all neighbouring vertices
		if (!visited.get(v))
			dfs(v);             // call DFS recursively if not yet visited
}
```
> only one neighbour is pushed onto the implicit stack at any time, it has to be popped before the next neighbour is pushed, the stack grows linearly

DFS spanning tree
- [4-pan](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":100},"1":{"x":500,"y":0},"2":{"x":500,"y":200},"3":{"x":600,"y":100},"4":{"x":700,"y":100}},"el":{"0":{"u":0,"v":1},"1":{"u":0,"v":2},"2":{"u":1,"v":3},"3":{"u":2,"v":3},"4":{"u":3,"v":4},"5":{"u":1,"v":0},"6":{"u":2,"v":0},"7":{"u":3,"v":1},"8":{"u":3,"v":2},"9":{"u":4,"v":3}}}&directed=1&action=dfs+0): `dfs(0)`

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
\node[vertex,label={[text=red]3},above right=of 0] (1) {1};
\node[vertex,label={[text=red]9},below right=of 0] (2) {2};
\node[vertex,label={[text=red]6},below right=of 1] (3) {3};
\node[vertex,label={[text=red]13},right=of 3] (4) {4};

\sedge[green]{0}{1}{2};
\sedge[gray]{1}{0}{4};
\sedge[gray]{0}{2}{15};
\sedge[gray]{2}{0}{10};
\sedge[green]{1}{3}{5};
\sedge[gray]{3}{1}{7};
\sedge[gray]{2}{3}{11};
\sedge[green]{3}{2}{8};
\sedge[green]{3}{4}{12};
\sedge[gray]{4}{3}{14};
\end{tikzpicture}
\end{document}
```
```
curr | stack
_    | [ 0 ]
0    | [ 0, 1 ]
1    | [ 0, 1, 3 ]
3    | [ 0, 1, 3, 2 ]
2    | [ 0, 1, 3 ]
3    | [ 0, 1, 3, 4 ]
4    | [ 0, 1, 3 ]
3    | [ 0, 1 ]
1    | [ 0 ]
0    | [ ]
```

DFS on disconnected graphs ^aff293
- still $O(V+E)$
- use to count connected components

$$
\begin{gather*}
\forall S_{i}\in G, \ S_{i}\neq S_{j} \implies S_{i}\cap S_{j}=\varnothing & \text{(Disjoint subgraphs)} \\
\\
\text{in }S_{i}\text{, there are }V_{i}\text{ vertices and }E_{i}\text{ edges}\\
\sum V_{i} = V, \ \sum E_{i} = E \\
\\
\therefore O(V_{1}+E_{1}) +O(V_{2}+E_{2}) + \dots = O(V+E)
\end{gather*}
$$
```java
List<List<Integer>> al; // O(V+E) only using adjacency list
List<Boolean> visited;  // keep track of visited vertices

void dfs(int u) {
	visited.set(u, true);   // visit self, currently like preorder traversal
	// do something
			
	for (int v : al.get(u)) // for all neighbouring vertices
		if (!visited.get(v))
			dfs(v);             // call DFS recursively if not yet visited
}

for (int i = 0; i < visited.length(); i++)
	if (!visited.get(i))
		dfs(i); // if there are any vertices not connected to the first vertex, this will find and call DFS on them
```

Cycle detection
- **tree edge** - essential edge in the DFS spanning tree
- **back edge** - an edge to a node that has been visited, forming a cycle
- **forward edge** - an extra edge to an node that has been fully visited, therefore no cycle

```java
List<Integer> visited = new ArrayList<>(Collections.nCopies(V, 0)); // 0 not visited

boolean dfs_cycle(int u) {
	visited.set(u, 1); // 1 (partially) visited, done preorder

	boolean hasCycle = false;
	for (int v: al.get(u)) {
		if (visited.get(v) == 0)
			hasCycle |= dfs_cycle(v);
		else if (visited.get(v) == 1)
			hasCycle = true;
			
		if (hasCycle)
			break;
	}
	visited.set(u, 2); // 2 (fully) visited, done postorder
	return hasCycle;
}
```
- [3 vertex DAG](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":50},"1":{"x":500,"y":150},"2":{"x":400,"y":250}},"el":{"0":{"u":0,"v":1},"1":{"u":1,"v":2},"2":{"u":0,"v":2}}}&directed=1): `dfs_cycle(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
\node[vertex] (0) {0};
\node[vertex,below right=of 0] (1) {1};
\node[vertex,below left=of 1] (2) {2};

\draw[->,green] (0) -- (1);
\draw[->,green] (1) -- (2);
\draw[->,cyan] (0) -- (2);
\end{tikzpicture}
\end{document}
```
- [3-cycle](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":50},"1":{"x":500,"y":150},"2":{"x":400,"y":250}},"el":{"0":{"u":0,"v":1},"1":{"u":1,"v":2},"2":{"u":2,"v":0}}}&directed=1): `dfs_cycle(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
\node[vertex] (0) {0};
\node[vertex,below right=of 0] (1) {1};
\node[vertex,below left=of 1] (2) {2};

\draw[->,green] (0) -- (1);
\draw[->,green] (1) -- (2);
\draw[->,red] (2) -- (0);
\end{tikzpicture}
\end{document}
```
- [5 vertex directed](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":200},"1":{"x":450,"y":100},"2":{"x":550,"y":100},"3":{"x":500,"y":200},"4":{"x":600,"y":200}},"el":{"0":{"u":0,"v":1},"1":{"u":0,"v":3},"2":{"u":1,"v":2},"3":{"u":2,"v":3},"4":{"u":3,"v":4},"5":{"u":4,"v":2}}}&directed=1): `dfs_cycle(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
\begin{scope}
	\node[vertex] (0) at (-2,0) {0};
	\node[vertex] (1) at (-1,2) {1};
	\node[vertex] (3) at (0,0) {3};
	\node[vertex] (2) at (1,2) {2};
	\node[vertex] (4) at (2,0) {4};
	
	\draw[->] (0) -- (1);
	\draw[->] (0) -- (3);
	\draw[->] (1) -- (2);
	\draw[->] (2) -- (3);
	\draw[->] (3) -- (4);
	\draw[->] (4) -- (2);
\end{scope}

\begin{scope}[shift={(-1,-2)}] % shift this block below
	\node[vertex] (0) {0};
	\node[vertex,below right=of 0] (1) {1};
	\node[vertex,below=of 1] (2) {2};
	\node[vertex,below left=of 2] (3) {3};
	\node[vertex,below right=of 3] (4) {4};
	
	\draw[->,green] (0) -- (1);
	\draw[->,cyan] (0) -- (3);
	\draw[->,green] (1) -- (2);
	\draw[->,green] (2) -- (3);
	\draw[->,green] (3) -- (4);
	\draw[->,red] (4) -- (2);
\end{scope}
\end{tikzpicture}
\end{document}
```
### Application
Leetcode: [Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/)
- adjacency list

```java
List<List<Integer>> al;
List<Boolean> visited;

void dfs(int u) {
	visited.set(u, true); // track visitation
	for (int v : al.get(u)) // for all neighbours
		if (!visited.get(v))
			dfs(v); // run dfs if not already visited
}

public boolean canVisitAllRooms(List<List<Integer>> rooms) {
	am = rooms;
	int n = am.size();
	visited = new ArrayList<>(Collections.nCopies(n, false));

	dfs(0);
	return !visited.contains(false);
}
```

Leetcode: [Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)
- graph: tree
- edge list, with adjacency list that indexes the edge list

```java
List<List<Integer>> idx;
List<Boolean> visited;
int[][] conn;

int countReverse(int u) {
	int out = 0;
	for (int i : idx.get(u)) {
		if (visited.get(i))
			continue; // if already visited this edge, skip
		visited.set(i, true); // mark edge as visited

		int[] edge = conn[i];
		if (edge[0] == u)
			out += countReverse(edge[1]) + 1; // u -> v, we must reverse this
		else
			out += countReverse(edge[0]); // v -> u, dont need to reverse
	}
	return out;
}

public int minReorder(int n, int[][] connections) {
	conn = connections; // el
	visited = new ArrayList<>(Collections.nCopies(connections.length, false)); // keep track of visited edges
	idx = new ArrayList<>(); // al that maps to an element in the el
	for (int i = 0; i < n; i++)
		idx.add(new ArrayList<>()); // cannot use nCopies for Objects

	for (int i = 0; i < connections.length; i++) {
		idx.get(connections[i][0]).add(i);
		idx.get(connections[i][1]).add(i);
	}
	// System.out.println(idx);

	return countReverse(0);
}
```

Leetcode: [Course Schedule](https://leetcode.com/problems/course-schedule/)
- cycle detection

```java
List<List<Integer>> al;
List<Integer> visited;

boolean dfs_cycle(int u) {
	visited.set(u, 1); // 1 (partially) visited

	boolean hasCycle = false;
	for (int v: al.get(u)) 
		if (visited.get(v) == 0)
			hasCycle |= dfs_cycle(v);
		else if (visited.get(v) == 1) {
			hasCycle = true;
			break;
		}
	visited.set(u, 2); // 2 (fully) visited
	return hasCycle;
}

public boolean canFinish(int numCourses, int[][] prerequisites) {
	// [a, b] represents b -> a

	// set up al
	al = new ArrayList<>();
	for (int i = 0; i < numCourses; i++) 
		al.add(new ArrayList<>());
	
	// set up visited
	visited = new ArrayList<>(Collections.nCopies(numCourses, 0)); // 0 not visited

	// convert edge list to adjacency list
	for (int[] prereq : prerequisites) 
		al.get(prereq[1]).add(prereq[0]);
	
	// in case graph is disconnected
	for (int i = 0; i < numCourses; i++) 
		if (visited.get(i) == 0)
			if (dfs_cycle(i))
				return false;
	
	return true;
}
```
### Extra
Tikz template for drawing undirected edges as two parallel directed edges
```latex
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\sedge[4]{
  \draw[->,#1,transform canvas={shift={($(#3)!4pt!90:(#2)-(#3)$)}}] (#2) to node[auto,swap] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick]
\node[vertex] (A) at (0,0) {A};
\node[vertex] (B) at (3,0) {B};

\sedge{red}{A}{B}{test};
\sedge{blue}{B}{A}{test2};
\end{tikzpicture}
\end{document}
```