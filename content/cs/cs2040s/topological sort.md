---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/BFS
next: /labyrinth/notes/cs/cs2040s/SSSP

---
### Summary
Special cases
- short trees have the topological orderings for a connected graph
- [1,5-complete bipartite or 5-star](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":50},"1":{"x":200,"y":200},"2":{"x":300,"y":200},"3":{"x":400,"y":200},"4":{"x":500,"y":200},"5":{"x":600,"y":200}},"el":{"0":{"u":0,"v":1},"1":{"u":0,"v":2},"2":{"u":0,"v":3},"3":{"u":0,"v":4},"4":{"u":0,"v":5}}}&directed=1)

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\begin{scope}[edge from parent/.style={->,draw}] % no shift
\node[vertex] {0}
	child { node[vertex] {1} }
	child { node[vertex] {2} }
	child { node[vertex] {3} }
	child { node[vertex] {4} }
	child { node[vertex] {5} };
\end{scope}

\begin{scope}[shift={(-4,-4)}] % shift this block below
  \node[vertex] (a0) {0};
  \node[vertex,right=of a0] (a1) {1};
  \node[vertex,right=of a1] (a2) {2};
  \node[vertex,right=of a2] (a3) {3};
  \node[vertex,right=of a3] (a4) {4};
  \node[vertex,right=of a4] (a5) {5};
  \draw[->] (a0) -- (a1);
  \draw[->] (a0) to[bend left] (a2);
  \draw[->] (a0) to[bend right] (a3);
  \draw[->] (a0) to[bend left] (a4);
  \draw[->] (a0) to[bend right] (a5);
\end{scope}
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
& E = V-1 & \text{(Tree)}\\
\text{No. of topological orders:} & E! =(V-1)!
\end{gather*}
$$
> how may ways to arrange the leaf nodes

- an [SLL](/labyrinth/notes/cs/cs2040s/SLL) has only one topological order
- [6-path](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":50},"1":{"x":500,"y":50},"2":{"x":600,"y":50},"3":{"x":700,"y":50},"4":{"x":800,"y":50},"5":{"x":900,"y":50}},"el":{"0":{"u":0,"v":1},"1":{"u":1,"v":2},"2":{"u":2,"v":3},"3":{"u":3,"v":4},"4":{"u":4,"v":5}}}&directed=1)

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,graphs,graphs.standard}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\graph[nodes={vertex},grow right=2cm,branch down=2cm] {
  0 -> 1 -> 2 -> 3 -> 4 -> 5
};
\end{tikzpicture}
\end{document}
```
### Concept
Topological ordering
- only applicable to DAG
- rearranging the graph such that the edges are only pointing in one direction
- topological order is **not unique**

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
\begin{scope}
	\node[vertex] (0) {0};
	\node[vertex,below right=of 0] (1) {1};
	\node[vertex,below left=of 0] (5) {5};
	\node[vertex,below left=of 1] (3) {3};
	\node[vertex,below left=of 3] (4) {4};
	\node[vertex,below right=of 3] (2) {2};
	
	\draw[->] (0) -- (1);
	\draw[->] (3) -- (1);
	\draw[->] (3) -- (2);
	\draw[->] (3) -- (4);
	\draw[->] (5) -- (0);
	\draw[->] (4) -- (2);
\end{scope}

\begin{scope}[shift={(0,-7)}] % shift this block below
  \node[vertex] (a0) {0};
  \node[vertex,left=of a0] (a5) {5};
  \node[vertex,below=of a5] (a3) {3};
  \node[vertex,right=of a3] (a4) {4};
  \coordinate[right=of a4] (x);
  \node[vertex,below=of x] (a2) {2};
  \node[vertex,right=of a0] (a1) {1};
  
	\draw[->] (a0) -- (a1);
	\draw[->] (a3) -- (a1);
	\draw[->] (a3) -- (a2);
	\draw[->] (a3) -- (a4);
	\draw[->] (a5) -- (a0);
	\draw[->] (a4) -- (a2);
\end{scope}
\end{tikzpicture}
\end{document}
```
$$
\text{Valid positions:} \qquad \begin{array} {cccccc}
 & 0 & 0 & 0 & 0 \\
 &  &  & 1 & 1 & 1 \\
 &  & 2 & 2 & 2 & 2 \\
3 & 3 & 3 \\
 & 4 & 4 & 4 & 4 \\
5 & 5 & 5 & 5
\end{array}
$$
> there is no general formula for the number of topological orderings

Postorder [DFS](/labyrinth/notes/cs/cs2040s/DFS)
- modified DFS with postorder append to an array
- reverse the array once all have been visited

```java
List<Integer> order;

void dfs_post(int u) {
	visited.set(u, true);
			
	for (int v : al.get(u))
		if (!visited.get(v)) // provided that the graph is a DAG, this is not needed
			dfs_post(v);
			
	order.add(u); // postorder
}

void dfs_sort() {
	for (int i = 0; i < visited.length(); i++)
		if (!visited.get(i))
			dfs_post(i);
			
	Collections.reverse(order);
}
```
> works only if the graph is already verified to be a DAG
- [6 vertex DAG](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":0},"1":{"x":500,"y":100},"2":{"x":500,"y":300},"3":{"x":400,"y":200},"4":{"x":300,"y":300},"5":{"x":300,"y":100}},"el":{"0":{"u":0,"v":1},"1":{"u":5,"v":0},"2":{"u":3,"v":1},"3":{"u":3,"v":2},"4":{"u":3,"v":4},"5":{"u":4,"v":2}}}&directed=1&action=topodfs): `dfs_sort()`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
\begin{scope}
	\node[vertex,label={[text=red]2}] (0) {0};
	\node[vertex,label={[text=red]1},below right=of 0] (1) {1};
	\node[vertex,label={[text=red]6},below left=of 0] (5) {5};
	\node[vertex,label={[text=red]5},below left=of 1] (3) {3};
	\node[vertex,label={[text=red]4},below left=of 3] (4) {4};
	\node[vertex,label={[text=red]3},below right=of 3] (2) {2};
	
	\draw[->] (0) -- (1);
	\draw[->] (3) -- (1);
	\draw[->] (3) -- (2);
	\draw[->] (3) -- (4);
	\draw[->] (5) -- (0);
	\draw[->] (4) -- (2);
\end{scope}

\begin{scope}[shift={(-4,-7)}] % shift this block below
  \node[vertex,label={[text=red]6}] (a5) {5};
  \node[vertex,label={[text=red]5},right=of a5] (a3) {3};
  \node[vertex,label={[text=red]4},right=of a3] (a4) {4};
  \node[vertex,label={[text=red]3},right=of a4] (a2) {2};
  \node[vertex,label={[text=red]2},right=of a2] (a0) {0};
  \node[vertex,label={[text=red]1},right=of a0] (a1) {1};
  
	\draw[->] (a0) -- (a1);
	\draw[->] (a3) to[bend right] (a1);
	\draw[->] (a3) to[bend left] (a2);
	\draw[->] (a3) -- (a4);
	\draw[->] (a5) to[bend left] (a0);
	\draw[->] (a4) -- (a2);
\end{scope}
\end{tikzpicture}
\end{document}
```

Kahn's algorithm
1. compute in-degrees of all vertices
2. modified [BFS](/labyrinth/notes/cs/cs2040s/BFS) such that only verticies with no incoming edges(in-degree = 0) are enqueued
3. the vertex is also "deleted" after being dequeued
- if there is a cycle -> one of the iterations will reach a case where there are no nodes with in-degree = 0, quiet failure

```java
int[] indegree = new int[V];
List<Integer> order = new ArrayList<>();

void kahn() {
	// calculate in-degrees
	for (int u = 0; u < V; u++) 
		for (int v : al.get(v)) 
			indegree[v]++; // increment for every incoming edge
	
	Queue<Integer> q = new LinkedList<>(); // can be stack O(1) or priority queue O(log n) also, order is not important
	
	
	// enqueue all verticies with in-degree = 0
	for (int u = 0; u < V; u++) 
		if (indegree[u] == 0) // invariant condition, only indegree = 0 in the queue
			q.offer(u);
		
	while (!q.isEmpty()) {
		int u = q.poll();
		order.add(u);
	
		for (int v : al.get(u)) {
			indegree[v]--; // "delete" the edge
			if (indegree[v] == 0) // maintain the invariant
				q.offer(v);
		}
	}
}
```
- [6 vertex DAG](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":0},"1":{"x":500,"y":100},"2":{"x":500,"y":300},"3":{"x":400,"y":200},"4":{"x":300,"y":300},"5":{"x":300,"y":100}},"el":{"0":{"u":0,"v":1},"1":{"u":5,"v":0},"2":{"u":3,"v":1},"3":{"u":3,"v":2},"4":{"u":3,"v":4},"5":{"u":4,"v":2}}}&directed=1&action=topobfs): `kahn()`

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
> Kahn's algorithm is easier to modify, ie. applying additional constrains on vertices with in-degree = 0

Valid topological orderings
- naive solution

$$
\begin{align*}
\text{Generate all permuations:} &&& V! \\
\\
\text{Check permuation:} &&& O(E) \\
\\
\text{Overall:} &&& O(E \cdot V!)
\end{align*}
$$

- recursive traversal with elements from Kahn's algorithm
- if there are multiple nodes with in-degree = 0, each represent a possible ordering
- reset visited state postorder, allowing recursion to revisit that vertex through another path

```java
int[] indegree = new int[V];
List<List<Integer>> orders = new ArrayList<>();

void topoRecur(List<Integer> order) {
	boolean end = true;
	
	for (int u = 0; u < V; u++) 
		if (!visited.get(u) && indegree[u] == 0) { // at most V times
			visited.set(u, true);
			end = false; // means that there are other verticies left to visit
			List<Integer> curr = new ArrayList<>(order);
			curr.add(u); // add this to current ordering
			
			// "remove" current vertex
			for (int v : al.get(u)) // O(k) < O(V)
				indegree[v]--;
			
			// proceed with recursion
			topoRecur(curr); // V - 1
			
			// "add" the vertex back
			visited.set(u, false);
			for (int v : al.get(u)) 
				indegree[v]++;
		}
	
	if (end) // cycle or no more verticies, assuming DAG we extract a valid order
		orders.add(order);
}

void topoAll() {
	for (int u = 0; u < V; u++) 
		for (int v : al.get(v)) 
			indegree[v]++; // increment for every incoming edge
			
	topoRecur(new ArrayList<>());
}
```
$$
T(V) = V\cdot T(V-1) + O(V) \implies O(V!)
$$
### Application
Kattis: [Build Dependencies](https://open.kattis.com/problems/builddeps)
- dependency tree

```java
static HashMap<String, List<String>> al;
static HashMap<String, Boolean> visited;
static List<String> order;

static void dfs_post(String u) {
	visited.put(u, true);

	for (String v : al.getOrDefault(u, new ArrayList<>())) // might not be in the al if it has no dependents
		if (!visited.get(v))
			dfs_post(v);

	order.add(u); // postorder
}

public static void main(String[] args) throws IOException {
	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	PrintWriter pw = new PrintWriter(System.out);

	int n = Integer.parseInt(br.readLine());

	al = new HashMap<>();
	visited = new HashMap<>();
	order = new ArrayList<>();

	StringTokenizer st;
	while (n-- > 0) {
		st = new StringTokenizer(br.readLine());
		String curr = st.nextToken();
		curr = curr.substring(0, curr.length() - 1);

		// al.put(curr, new ArrayList<>()); // we don't need to include files with no dependencies
		visited.put(curr, false);

		while (st.hasMoreTokens()) {
			String dep = st.nextToken();
			List<String> ns = al.getOrDefault(dep, new ArrayList<>());
			ns.add(curr);
			al.put(dep, ns);
		}
	}

	// input is non-cyclic so we can use postorder dfs
	dfs_post(br.readLine()); // nodes downstream need to be recompiled

	Collections.reverse(order);
	
	for (String s : order)
		pw.println(s);
	
	pw.close();
}
```