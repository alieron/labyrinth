---
tags:
  - cs2040s/chapter4
  - cs/algorithms
  - lang/java
  - lang/python
complete: true
next: /labyrinth/notes/cs/cs2040s/DFS
prev: /labyrinth/notes/cs/cs2040s/graph_ADT

---
### Summary
Graph traversal problems

| Task                 | DFS                                                                    | BFS                                                                    |
| -------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Reachability test    | check if target was visited                                            | check if target was visited                                            |
| Traversal path       | preorder add to predecessor array, backtrack through predecessor array | preorder add to predecessor array, backtrack through predecessor array |
| Connected components | run until all are visited                                              | run until all are visited                                              |
| Cycle detection      | if node is explored but not fully visited                              | -                                                                      |
| Bipartite check      | check alternating neighbours                                           | check alternating neighbours                                           |
| Topological sort     | postorder append to array                                              | Kahn's algorithm                                                       |
### Concept
Traversal path
- store the source vertex of a given vertex in a predecessor array
- backtrack through the array to find the path

```
in traversal tree: u -> v
				stored as: p[v] = u
```
```java
List<Integer> p = new ArrayList<>(Collections.nCopies(V, -1)); // -1 to signify the root

void backtrack(int u) {
	if (p.get(u) == -1) { // stop at -1
		System.out.printf("%d", u);
		return;
	}
	backtrack(p.get(u));
	System.out.printf(" %d", u);
}
```

Cycle detection
- if traversing re-encounters an already visited node
- [3-complete or 3-cycle](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":50},"1":{"x":529,"y":275},"2":{"x":270,"y":275}},"el":{"0":{"u":0,"v":1},"1":{"u":1,"v":2},"2":{"u":2,"v":0}}}&directed=0)

```tikz
\usepackage{tikz}
\usetikzlibrary{graphs,graphs.standard}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\graph[nodes={vertex}] { subgraph K_n [V={0,1,2},clockwise,radius=1cm] };
\end{tikzpicture}
\end{document}
```
> see [graph nomenclature](https://en.wikipedia.org/wiki/List_of_graphs), and for [small graphs](https://www.graphclasses.org/smallgraphs.html)

Bipartite check
- alternate neighbours and check for conflicts
- check for odd length cycles
- [2,2-complete bipartite or 4-cycle](https://visualgo.net/en/dfsbfs?create={"vl":{"0":{"x":400,"y":50},"1":{"x":550,"y":200},"2":{"x":400,"y":350},"3":{"x":250,"y":200}},"el":{"0":{"u":0,"v":1},"1":{"u":1,"v":3},"2":{"u":3,"v":2},"3":{"u":2,"v":0}}}&directed=0)

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,graphs,graphs.standard}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\begin{scope}
\node[vertex,teal] (a0) {0};
\node[vertex,orange,below right=of a0] (a1) {1};
\node[vertex,orange,below left=of a0] (a2) {2};
\node[vertex,teal,below right=of a2] (a3) {3};
\draw[-] (a0) -- (a1);
\draw[-] (a0) -- (a2);
\draw[-] (a1) -- (a3);
\draw[-] (a2) -- (a3);
\draw[-,red] (a1) -- (a2);
\draw[-,red] (a0) -- (a3);
\end{scope}

\begin{scope}[shift={(-1,-5)}] % shift this block below
\graph[nodes={vertex},grow right=2cm,branch down=2cm] {
  {0,3} -- [complete bipartite] {1,2}
};
\end{scope}
\end{tikzpicture}
\end{document}
```

Topological ordering
- only applicable to DAG
- rearranging the graph such that the edges are only pointing in one direction
- topological order is not unique
- a short tree has many topological orders
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

- [SLL](/labyrinth/notes/cs/cs2040s/SLL) has only one topological order
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

Cut vertex/bridges
- for undirected graphs
- cut vertex - vertex that if deleted will increase the number of connected components
- bridge - edge that if deleted will increase the number of connected components

Strongly connected components
- subgraph where there is a two-way path between every vertex
- [kosaraju's algorithm](/labyrinth/notes/cs/kosaraju's_algorithm) or [tarjan's algorithm](/labyrinth/notes/cs/tarjan's_algorithm)
- useful for solving [2-SAT](/labyrinth/notes/cs/2-SAT)
> out of syllabus for `cs2040s`
### Extra
Python script for generating graphs for use in VisuAlgo url
```python
import json
import re
import random
import math
import urllib.parse

def parse_edges(input_text):
	"""Parse edge input format like 
		- `1 -> 2` (arrow)
		- `1->2` (arrow no spaces)
		- `1 - 2` (single dash)
		- `1-2` (single dash no spaces)
		- `1 -- 2` (double dash)
		- `1--2` (double dash no spaces)
	"""
	edges = []
	lines = input_text.strip().split('\n')
	
	for line in lines:
		line = line.strip()
		if not line:
			continue
		
		# Match pattern like "1 -> 2" or "1->2"
		match = re.match(r'(\d+)\s*(-{1,2}>?|\-\-)\s*(\d+)', line)
		if match:
			u, _, v = match.groups()
			edges.append((int(u), int(v)))

	return edges

def create_graph_json(edges):
	"""Convert edges to vertex list and edge list JSON format"""  
	# Collect all unique vertices
	vertices = set()
	for u, v in edges:
		vertices.add(u)
		vertices.add(v)
	
	vertices = sorted(vertices)
	n = len(vertices)
	
	# Create vertex list with evenly spaced circular layout
	vl = {}
	center_x, center_y = 400, 200
	radius = 150
	
	for i, vertex in enumerate(vertices):
		angle = -math.pi / 2 + 2 * math.pi * i / n
		vl[str(vertex)] = {
			"x": int(center_x + radius * math.cos(angle)),
			"y": int(center_y + radius * math.sin(angle))
		}
	
	# Create edge list
	el = {}
	for idx, (u, v) in enumerate(edges):
		el[str(idx)] = {
			"u": u,
			"v": v,
			# "w": 1  # user should handle weight, comment out for unweighted
		}
	
	return {"vl": vl, "el": el}

def main():
	print("Enter edges...")
	print("Press Ctrl+D (Linux/Mac) or Ctrl+Z then Enter (Windows) when done:")
	
	# Read multi-line input
	lines = []
	try:
		while True:
			line = input()
			lines.append(line)
	except EOFError:
		pass
	
	input_text = '\n'.join(lines)
	
	# Parse edges
	edges = parse_edges(input_text)
	
	if not edges:
		print("\nNo valid edges found!")
		return
	
	# Generate graph JSON
	graph = create_graph_json(edges)
	
	# Output JSON
	json_output = json.dumps(graph, separators=(',', ':'))
	print("\nOutput:")
	print(json_output)
	
	# Output URL-encoded version
	url_encoded = urllib.parse.quote(json_output)
	print("\nURL-encoded:")
	print(url_encoded)

if __name__ == "__main__":
	main()
```