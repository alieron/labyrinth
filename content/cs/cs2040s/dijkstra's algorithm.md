---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/bellman-ford_algorithm
next: /labyrinth/notes/cs/cs2040s/MST

---
### Summary
Dijkstra's algorithm
- [greedy](/labyrinth/notes/cs/cs2040s/greedy_algorithms)

Time complexity
- average case: $O((V+E)\log V)$
- best case: $O((V+V-1)\log V)=O(V\log V)$ 
- [any directed tree](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":240,"y":260},"1":{"x":320,"y":260},"2":{"x":400,"y":260},"3":{"x":480,"y":260}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":1,"v":2,"w":1},"2":{"u":2,"v":3,"w":1}}}&action=dijkstramod+0): `dijkstra(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[5][]{
  \draw[->,#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=1.5]
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},right=of 0] (1) {1};
\node[vertex,label={[text=orange]2},right=of 1] (2) {2};
\node[vertex,label={[text=orange]3},right=of 2] (3) {3};

\dwedge[green]{0}{1}{1}{1};
\dwedge[green]{1}{2}{1}{2};
\dwedge[green]{2}{3}{1}{3};
\end{tikzpicture}
\end{document}
```

Modified dijkstra
- worse case: $O(VE\log V)$ - each propagation is $O(E)$, upto $V$ propagations
- [repeated repropagation](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":220,"y":260},"1":{"x":300,"y":140},"2":{"x":380,"y":260},"3":{"x":460,"y":140},"4":{"x":540,"y":260}},"el":{"0":{"u":1,"v":2,"w":-32},"1":{"u":3,"v":4,"w":-16},"2":{"u":0,"v":2,"w":0},"3":{"u":2,"v":4,"w":0},"4":{"u":2,"v":3,"w":8},"5":{"u":0,"v":1,"w":16}}}): `dijkstra(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[5][]{
  \draw[->,#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\newcommand\sdwedge[5][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\begin{scope}
\node[vertex,label={[text=orange]below:0}] (0) {0};
\node[vertex,label={[text=orange]16},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:0},below right=of 1] (2) {2};
\node[vertex,label={[text=orange]8},above right=of 2] (3) {3};
\node[vertex,label={[text=orange]below:0},below right=of 3] (4) {4};

\dwedge[green]{0}{1}{16}{1};
\dwedge[green]{0}{2}{0}{2};
\dwedge{1}{2}{-32}{6};
\dwedge[green]{2}{3}{8}{3};
\dwedge[green]{2}{4}{0}{4};
\dwedge{3}{4}{-16}{5};
\end{scope}

\begin{scope}[shift={(0,-4)}] % shift this block below
\node[vertex,label={[text=orange]below:0}] (0) {0};
\node[vertex,label={[text=orange]16},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:0},below right=of 1] (2) {2};
\node[vertex,label={[text=orange]8},above right=of 2] (3) {3};
\node[vertex,label={[text=orange]below:-8},below right=of 3] (4) {4};

\dwedge[green]{0}{1}{16}{};
\dwedge[green]{0}{2}{0}{};
\dwedge{1}{2}{-32}{};
\dwedge[green]{2}{3}{8}{};
\dwedge[cyan]{2}{4}{0}{};
\dwedge[green]{3}{4}{-16}{};
\end{scope}

\begin{scope}[shift={(0,-8)}] % shift this block below
\node[vertex,label={[text=orange]below:0}] (0) {0};
\node[vertex,label={[text=orange]16},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:-16},below right=of 1] (2) {2};
\node[vertex,label={[text=orange]-8},above right=of 2] (3) {3};
\node[vertex,label={[text=orange]below:-16},below right=of 3] (4) {4};

\dwedge[green]{0}{1}{16}{};
\dwedge[cyan]{0}{2}{0}{};
\dwedge[green]{1}{2}{-32}{};
\dwedge[green]{2}{3}{8}{};
\dwedge[green]{2}{4}{0}{};
\dwedge{3}{4}{-16}{};
\end{scope}

\begin{scope}[shift={(0,-12)}] % shift this block below
\node[vertex,label={[text=orange]below:0}] (0) {0};
\node[vertex,label={[text=orange]16},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:-16},below right=of 1] (2) {2};
\node[vertex,label={[text=orange]-8},above right=of 2] (3) {3};
\node[vertex,label={[text=orange]below:-24},below right=of 3] (4) {4};

\dwedge[green]{0}{1}{16}{};
\dwedge[cyan]{0}{2}{0}{};
\dwedge[green]{1}{2}{-32}{};
\dwedge[green]{2}{3}{8}{};
\dwedge[cyan]{2}{4}{0}{};
\dwedge[green]{3}{4}{-16}{};
\end{scope}
\end{tikzpicture}
\end{document}
```

Invariant ^884205
- **with +ve weights only**
- at each iteration, the nodes that have been "settled" by the algorithm will have the correct shortest path
- can support -ve weights at the cost of the invariant
> for SSSDSP with +ve weight, we can terminate once the destination has been vsited
### Concept
Algorithm
- sort the verticies according to distance from the source
- greedily relax outgoing edges from the vertex with the lowest distance
- once a vertex has been "settled" assume it has the shortest path, do not relax it again

```java
void dijkstra(int s) { // O(V log V + E log V) = O((V+E) log V)
	dist.set(s, 0);
	
	TreeSet<int[]> pq = new TreeSet<>(Comparator.comparingInt(x -> x[1])); // balanced BST, bineary heap works as well
	for (int u = 0; u < V; ++u) // enqueue all verticies -> O(V log V)
		pq.add(new int[] { u, dist.get(u) }); // add [ v, d ] -> O(log V)

	while (!pq.isEmpty()) { // every vertex, k neighbours are relaxed -> O(E log V)
		int[] min = pq.pollFirst(); // node to be relaxed
		int u = min[0];
		
		// present in VisuAlgo
		if (visited.get(u)) continue; // already settled, skip
		visited.set(u, true);
		
		for (int[] v_w : AL.get(u)) { // e = [ v, w ]
			int v = v_w[0];
			int w = v_w[1];
			
			// absent in VisuAlgo
			// if (visited.get(v)) continue; // already settled, skip
			
			if (dist.get(u) + w >= dist.get(v)) 
				continue; // not improving, skip
			pq.remove(new int[] { v, dist.get(v) }); // erase old [ v, d ] -> O(log V)
			dist.set(v, dist.get(u) + w); // relax operation
			pq.add(new int[] { v, dist.get(v) }); // enqueue better [ v, d ] -> O(log V)
		}
	}
}
```
- [6 vertex cyclic graph](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":560,"y":260},"1":{"x":660,"y":160},"2":{"x":660,"y":360},"3":{"x":860,"y":160},"4":{"x":860,"y":360},"5":{"x":960,"y":260}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":0,"v":2,"w":5},"2":{"u":1,"v":2,"w":2},"3":{"u":1,"v":3,"w":2},"4":{"u":1,"v":4,"w":1},"5":{"u":2,"v":4,"w":2},"6":{"u":3,"v":4,"w":1},"7":{"u":3,"v":5,"w":3},"8":{"u":4,"v":5,"w":2},"9":{"v":1,"u":4,"w":2}}}&action=dijkstra+0): `dijkstra(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[5][]{
  \draw[->,#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\newcommand\sdwedge[5][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:3},below right=of 0] (2) {2};
\node[vertex,label={[text=orange]3},right=3 of 1] (3) {3};
\node[vertex,label={[text=orange]below:2},right=3 of 2] (4) {4};
\node[vertex,label={[text=orange]4},below right=of 3] (5) {5};

\dwedge[green]{0}{1}{1}{1};
\dwedge[cyan]{0}{2}{5}{2};
\dwedge[green]{1}{2}{2}{3};
\dwedge[green]{1}{3}{2}{4};
\sdwedge[green]{1}{4}{1}{5};
\dwedge[gray]{2}{4}{2}{8};
\dwedge[gray]{3}{5}{3}{10};
\dwedge[gray]{3}{4}{1}{9};
\sdwedge[gray]{4}{1}{2}{6};
\dwedge[green]{4}{5}{2}{7};

\end{tikzpicture}
\end{document}
```
```
curr | pq
_    | [0, 0], [1, INF], [2, INF], [3, INF], [4, INF], [5, INF]
0    | [1, 1], [2, 5], [3, INF], [4, INF], [5, INF]
1    | [4, 2], [2, 3], [3, 3], [5, INF]
4    | [2, 3], [3, 3], [5, 4]
2    | [3, 3], [5, 4]
3    | [5, 4]
5    | _
```
> verticies are only visited once, which can cause problems when the first visit is not the shortest distance

Negative weights
- alternate path might result in shorter distance
- shorter distance is not propagated
- [4-pan -ve weight](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":300,"y":100},"1":{"x":400,"y":0},"2":{"x":400,"y":200},"3":{"x":500,"y":100},"4":{"x":600,"y":100}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":1,"v":3,"w":2},"2":{"u":3,"v":4,"w":3},"3":{"u":0,"v":2,"w":10},"4":{"u":2,"v":3,"w":-10}}}&action=dijkstra+0): `dijkstra(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[5][]{
  \draw[->,#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\newcommand\sdwedge[5][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\begin{scope}
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:10},below right=of 0] (2) {2};
\node[vertex,label={[text=orange]3},below right=of 1] (3) {3};
\node[vertex,label={[text=orange]6},right=of 3] (4) {4};

\dwedge[green]{0}{1}{1}{1};
\dwedge[green]{0}{2}{10}{2};
\dwedge[green]{1}{3}{2}{3};
\dwedge{2}{3}{-10}{5};
\dwedge[green]{3}{4}{3}{4};
\end{scope}

\begin{scope}[shift={(0,-6)}] % shift this block below
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:10},below right=of 0] (2) {2};
\node[vertex,label={[text=orange]0},below right=of 1] (3) {3};
\node[vertex,label={[text=orange]6},right=of 3] (4) {4};

\dwedge[green]{0}{1}{1}{1};
\dwedge[green]{0}{2}{10}{2};
\dwedge[cyan]{1}{3}{2}{3};
\dwedge[green]{2}{3}{-10}{5};
\dwedge[gray]{3}{4}{3}{4};
\end{scope}
\end{tikzpicture}
\end{document}
```
```
curr | pq
_    | [0, 0], [1, INF], [2, INF], [3, INF], [4, INF]
0    | [1, 1], [2, 10], [3, INF], [4, INF]
1    | [3, 3], [2, 10], [4, INF]
3    | [4, 6], [2, 10]
4    | [2, 10]
2    | [3, 0]
3    | _  <- already settled, VisuAlgo relaxes it but doesn't propagate further
```
> slightly different implementations of the original dijkstra will result in different outcomes
> - include both/the first visited check -> incorrect SSSP and violates invariant
> - without the visited checks -> correct SSSP, nodes may be relaxed multiple times but invariant violated

Modified algorithm
- to support negative weight
- BFS with a [priority queue](/labyrinth/notes/cs/cs2040s/priority_queue_ADT)(min weight) instead
- deteriorates to PQ + Bellman-Ford

```java
void dijkstra(int s) { // O(V log V + E log V) = O((V+E) log V)
	dist.set(s, 0);
	
	PriorityQueue<IntegerPair> pq = new PriorityQueue<>(Comparator.comparingInt(x -> x[1])); 
	pq.offer(new int[] { s, 0 }); // only the source is added
	
	while (!pq.isEmpty()) { // every vertex and every edge are relaxed -> O((V+E) log V)
		int[] min = pq.pollFirst(); // node to be relaxed
		int u = min[0];
		
		for (int[] v_w : AL.get(u)) { // e = [ v, w ]
			int v = v_w[0];
			int w = v_w[1];
			
			if (dist.get(u) + w >= dist.get(v)) 
				continue; // not improving, skip

			dist.set(v, dist.get(u) + w); // relax operation
			pq.offer(new int[] { v, dist.get(v) }); // enqueue better [ v, d ] -> O(log E) = O(log V^2) = O(log V)
		}
	}
}
```
- [4-pan -ve weight](https://visualgo.net/en/sssp?create={"vl":{"0":{"x":300,"y":100},"1":{"x":400,"y":0},"2":{"x":400,"y":200},"3":{"x":500,"y":100},"4":{"x":600,"y":100}},"el":{"0":{"u":0,"v":1,"w":1},"1":{"u":1,"v":3,"w":2},"2":{"u":3,"v":4,"w":3},"3":{"u":0,"v":2,"w":10},"4":{"u":2,"v":3,"w":-10}}}&action=dijkstramod+0): `dijkstra(0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\dwedge[5][]{
  \draw[->,#1] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\newcommand\sdwedge[5][]{
  \draw[->,#1,transform canvas={shift={($(#3)!-4pt!90:(#2)-(#3)$)}}] (#2) to node[auto] {#4} node[auto,pos=0.2,red] {#5} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\begin{scope}
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:10},below right=of 0] (2) {2};
\node[vertex,label={[text=orange]3},below right=of 1] (3) {3};
\node[vertex,label={[text=orange]6},right=of 3] (4) {4};

\dwedge[green]{0}{1}{1}{1};
\dwedge[green]{0}{2}{10}{2};
\dwedge[green]{1}{3}{2}{3};
\dwedge{2}{3}{-10}{5};
\dwedge[green]{3}{4}{3}{4};
\end{scope}

\begin{scope}[shift={(0,-7)}] % shift this block below
\node[vertex,label={[text=orange]0}] (0) {0};
\node[vertex,label={[text=orange]1},above right=of 0] (1) {1};
\node[vertex,label={[text=orange]below:10},below right=of 0] (2) {2};
\node[vertex,label={[text=orange]0},below right=of 1] (3) {3};
\node[vertex,label={[text=orange]3},right=of 3] (4) {4};

\dwedge[green]{0}{1}{1}{1};
\dwedge[green]{0}{2}{10}{2};
\dwedge[cyan]{1}{3}{2}{3};
\dwedge[green]{2}{3}{-10}{5};
\dwedge[green]{3}{4}{3}{4};
\end{scope}
\end{tikzpicture}
\end{document}
```
```
curr | pq
_    | [0, 0]
0    | [1, 1], [2, 10]
1    | [3, 3], [2, 10]
3    | [4, 6], [2, 10]
4    | [2, 10]
2    | [3, 0]
3    | [4, 3] <- propagated further
4    | _
```
> correct SSSP but invariant is violated

### Application
Kattis: [Vacation Time](https://open.kattis.com/problems/vacationtime)
- SSSP from source and destination
- meet in the middle with selected edge

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
PrintWriter pw = new PrintWriter(System.out);

StringTokenizer st = new StringTokenizer(br.readLine());

int a = Integer.parseInt(st.nextToken()), f = Integer.parseInt(st.nextToken());

ArrayList<ArrayList<int[]>> AL = new ArrayList<>();
ArrayList<ArrayList<int[]>> rev = new ArrayList<>();
ArrayList<int[]> edges = new ArrayList<>();
for (int u = 0; u < a; ++u) {
	AL.add(new ArrayList<>());
	rev.add(new ArrayList<>());
}

while (f-- > 0) {
	st = new StringTokenizer(br.readLine());
	int o = Integer.parseInt(st.nextToken()), d = Integer.parseInt(st.nextToken()),
			c = Integer.parseInt(st.nextToken());
	String m = st.nextToken();
	AL.get(o).add(new int[] { d, c });
	rev.get(d).add(new int[] { o, c });
	if (m.equals("A380"))
		edges.add(new int[] { o, d, c });
}

int INF = 1000000000;
ArrayList<Integer> distS = new ArrayList<>();
ArrayList<Integer> distT = new ArrayList<>();
for (int i = 0; i < a; i++) {
	distS.add(INF);
	distT.add(INF);
}
distS.set(0, 0); // start from 0
distT.set(a - 1, 0); // start from a - 1

PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(i -> i[0]));
pq.add(new int[] { 0, 0 }); // [dist, u]

while (!pq.isEmpty()) {
	int[] top = pq.poll();
	int u = top[1];
	for (int[] next : AL.get(u)) {
		int v = next[0], w = next[1];
		if (distS.get(u) + w >= distS.get(v))
			continue;
		distS.set(v, distS.get(u) + w);
		pq.add(new int[] { distS.get(v), v });
	}
}

pq.clear();
pq.add(new int[] { 0, a - 1 }); // [dist, u]

while (!pq.isEmpty()) {
	int[] top = pq.poll();
	int u = top[1];
	for (int[] next : rev.get(u)) {
		int v = next[0], w = next[1];
		if (distT.get(u) + w >= distT.get(v))
			continue;
		distT.set(v, distT.get(u) + w);
		pq.add(new int[] { distT.get(v), v });
	}
}

int min = INF;
for (int i = 0; i < edges.size(); i++) {
	int[] e = edges.get(i);
	min = Math.min(min, distS.get(e[0]) + distT.get(e[1]) + e[2]);
}

pw.println(min == INF ? -1 : min);
pw.close();
```

### Extra
