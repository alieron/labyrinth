---
tags:
  - cs2040s/chapter3
  - cs/data_structures
  - lang/java
  - lang/python
complete: false
prev: /labyrinth/notes/cs/cs2040s/BST
next: /labyrinth/notes/cs/cs2040s/graph_ADT

---
### Summary
Binary search tree(BST)
- implements [table ADT](/labyrinth/notes/cs/cs2040s/table_ADT)

| Operation   | Method                    | Performance        |
| ----------- | ------------------------- | ------------------ |
| `search(v)` | tree traversal            | - $O(h)=O(\log n)$ |
| `insert(v)` | tree traversal, rebalance | - $O(h)=O(\log n)$ |
| `remove(v)` | tree traversal, rebalance | - $O(h)=O(\log n)$ |
- implements [priority queue ADT](/labyrinth/notes/cs/cs2040s/priority_queue_ADT)

| Operation    | Method                    | Performance        |
| ------------ | ------------------------- | ------------------ |
| `enqueue(v)` | insert into the tree      | - $O(h)=O(\log n)$ |
| `dequeue()`  | remove max/min, rebalance | - $O(h)=O(\log n)$ |
### Concept
Adelson-Velskii Landis tree(AVL tree)
- balanced BST
- **AVL tree invariant**
	- balance factor
	- the heights of the subtrees can only differ by at most 1

$$
\begin{gather*}
b = h_{L} - h_{R} \\
\\
\text{tree rooted at the node is balanced} \iff |b| \leq 1
\end{gather*}
$$

Minimum size of an AVL tree
- subtree of `h-1` + subtree of `h-2` + root node

$$
\begin{gather*}
S(h) = S(h-1) + S(h-2) + 1 \\
\\
\text{or} \\
\\
N_{h} = N_{h-1}+N_{h-2} + 1 
\end{gather*}
$$
> similar [recurrence relation](/labyrinth/notes/cs/cs1101s/recurrence_relations) to exponential order of growth

Height of an AVL tree
$$
\begin{align*}
&\text{for any AVL tree with }N\text{ nodes and height }h \\
\\
&\text{Claim: }\log_{2}N < h < 2 \log_{2}N \\
\\
& \text{with }N_{h}\text{ as the min size of an AVL tree of height }h \\
& 2^h > N \geq N_{h} \\
\\
&\begin{aligned}
N_{h} & = N_{h-1} + N_{h-2}+1 \\
N_{h} & > 2 N_{h-2} \\
N_{h} & > 4 N_{h-3} \\
& \vdots \\
N_{h} & > 2^{h/2} N_{0} = 2^{h/2}
\end{aligned} \\
\\
&\therefore N  > 2^{h/2} \\
&\log_{2}N > \log_{2}(2^{h/2}) = \frac{h}{2} \\
& 2\log_{2}N > h \\
\\
&\text{and }2^h > N \\
&\log_{2}(2^h)>\log_{2}N\\
& h > \log_{2}N \\
\\
& \log_{2}N < h < 2\log_{2}N \\
&\therefore \Theta(h) = \Theta(\log n) \\
&& \square
\end{align*}
$$

Rotations
- applied when `insert(v)` or `remove(v)` causes the tree to be unbalanced
- needs to preserve the [BST property](/labyrinth/notes/cs/cs2040s/BST#^867efa)
- [left-left case](https://visualgo.net/en/bst?mode=AVL&create=5,3,6,2,4,1): `insert(1)` -> `rotateRight(5)`

```java
TreeNode rotateRight(TreeNode root) { // b > 1 implies that it has a left subtree
	// store the left subtree
	TreeNode L = root.left;
	// modify the left subtree of the root
	if (L.right != null)
		root.left = L.right;
	else
		root.left = null;
	// move the modified root into the right subtree
	L.right = root;
	// left subtree will now take over as root
	return L;
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex,cyan,label={[text=red]$b=2$}] at(0,0) (5) {5};
\node[vertex] at(1,-1) (6) {6};
\node[vertex] at(-1,-2) (4) {4};
\node[vertex,cyan,label={[text=red]$b=1$}] at(-2,-1) (3) {3};
\node[vertex] at(-3,-2) (2) {2};
\node[vertex,green] at(-4,-3) (1) {1};

\draw [-, thick] (5) to (6);
\draw [-, thick] (5) to (3);
\draw [-, thick] (3) to (4);
\draw [-, thick] (3) to (2);
\draw [-, thick] (2) to (1);

\draw[->,green] (5) to[bend left=30] (3);
\draw[->,green] (4) to[bend right=15] (5);

\node[vertex,cyan] at(8,-1) (a5) {5};
\node[vertex] at(9,-2) (a6) {6};
\node[vertex] at(7,-2) (a4) {4};
\node[vertex,cyan,label={[text=red]$b=0$}] at(6,0) (a3) {3};
\node[vertex,label={[text=red]$b=1$}] at(5,-1) (a2) {2};
\node[vertex] at(4,-2) (a1) {1};

\draw [-, thick] (a5) to (a6);
\draw [-, thick] (a5) to (a3);
\draw [-, thick] (a5) to (a4);
\draw [-, thick] (a3) to (a2);
\draw [-, thick] (a2) to (a1);
\end{tikzpicture}
\end{document}
```
- [right-right case](https://visualgo.net/en/bst?mode=AVL&create=3,2,5,1,4,7,6): `remove(1)` -> `rotateLeft(3)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex,cyan,label={[text=red]$b=-2$}] at(0,0) (3) {3};
\node[vertex,cyan,label={[text=red]$b=-1$}] at(2,-1) (5) {5};
\node[vertex] at(-1,-1) (2) {2};
\node[vertex,red] at(-2,-2) (1) {1};
\node[vertex] at(1,-2) (4) {4};
\node[vertex] at(3,-3) (6) {6};
\node[vertex] at(4,-2) (7) {7};

\draw [-, thick] (3) to (2);
\draw [-, thick] (3) to (5);
\draw [-, thick] (2) to (1);
\draw [-, thick] (5) to (4);
\draw [-, thick] (5) to (7);
\draw [-, thick] (7) to (6);

\draw[->,green] (3) to[bend right=30] (5);
\draw[->,green] (4) to[bend left=15] (3);

\node[vertex] at(7,-2) (a2) {2};
\node[vertex,cyan,label={[text=red]$b=0$}] at(8,-1) (a3) {3};
\node[vertex] at(9,-2) (a4) {4};
\node[vertex,cyan,label={[text=red]$b=0$}] at(10,0) (a5) {5};
\node[vertex] at(11,-2) (a6) {6};
\node[vertex] at(12,-1) (a7) {7};

\draw [-, thick] (a5) to (a3);
\draw [-, thick] (a5) to (a7);
\draw [-, thick] (a3) to (a2);
\draw [-, thick] (a3) to (a4);
\draw [-, thick] (a7) to (a6);
\end{tikzpicture}
\end{document}
```
> `rotateLeft(v)` is the mirror of `rotateRight(v)`

- [left-right case](https://visualgo.net/en/bst?mode=AVL&create=5,2,6,1,4,3): `insert(3)` -> `rotateLeft(2)` -> `rotateRight(5)`
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex,label={[text=red]$b=2$}] at(4,0) (5) {5};
\node[vertex] at(0,-2) (1) {1};
\node[vertex,cyan,label={[text=red]$b=-1$}] at(1,-1) (2) {2};
\node[vertex,green] at(2,-3) (3) {3};
\node[vertex,cyan] at(3,-2) (4) {4};
\node[vertex] at(5,-1) (6) {6};

\draw [-, thick] (5) to (6);
\draw [-, thick] (5) to (2);
\draw [-, thick] (2) to (4);
\draw [-, thick] (4) to (3);
\draw [-, thick] (2) to (1);

\draw[->,green] (3) to[bend left=25] (2);
\draw[->,green] (2) to[bend right=30] (4);

\node[vertex,cyan,label={[text=red]$b=2$}] at(12,0) (a5) {5};
\node[vertex] at(8,-3) (a1) {1};
\node[vertex] at(9,-2) (a2) {2};
\node[vertex] at(10,-3) (a3) {3};
\node[vertex,cyan,label={[text=red]$b=2$}] at(11,-1) (a4) {4};
\node[vertex] at(13,-1) (a6) {6};

\draw [-, thick] (a5) to (a6);
\draw [-, thick] (a5) to (a4);
\draw [-, thick] (a4) to (a2);
\draw [-, thick] (a2) to (a3);
\draw [-, thick] (a2) to (a1);

\draw[->,green] (a5) to[bend left=30] (a4);

\node[vertex,cyan,label={[text=red]$b=-1$}] at(8,-7) (b5) {5};
\node[vertex] at(4,-8) (b1) {1};
\node[vertex] at(5,-7) (b2) {2};
\node[vertex] at(6,-8) (b3) {3};
\node[vertex,cyan,label={[text=red]$b=0$}] at(7,-6) (b4) {4};
\node[vertex] at(9,-8) (b6) {6};

\draw [-, thick] (b4) to (b5);
\draw [-, thick] (b5) to (b6);
\draw [-, thick] (b4) to (b2);
\draw [-, thick] (b2) to (b3);
\draw [-, thick] (b2) to (b1);
\end{tikzpicture}
\end{document}
```

- [right-left case](https://visualgo.net/en/bst?mode=AVL&create=3,1,6,2,5,7,4): `remove(2)` -> `rotateRight(6)` -> `rotateLeft(3)`
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex,label={[text=red]$b=-2$}] at(2,0) (3) {3};
\node[vertex] at(0,-1) (1) {1};
\node[vertex,red] at(1,-2) (2) {2};
\node[vertex,cyan] at(4,-2) (5) {5};
\node[vertex] at(3,-3) (4) {4};
\node[vertex,cyan,label={[text=red]$b=1$}] at(5,-1) (6) {6};
\node[vertex] at(6,-2) (7) {7};

\draw [-, thick] (3) to (6);
\draw [-, thick] (3) to (1);
\draw [-, thick] (1) to (2);
\draw [-, thick] (6) to (5);
\draw [-, thick] (6) to (7);
\draw [-, thick] (5) to (4);

\draw[->,green] (6) to[bend left=30] (5);

\node[vertex,cyan,label={[text=red]$b=-1$}] at(12,-1) (a5) {5};
\node[vertex] at(9,-1) (a1) {1};
\node[vertex,cyan,label={[text=red]$b=-2$}] at(10,0) (a3) {3};
\node[vertex] at(11,-2) (a4) {4};
\node[vertex] at(13,-2) (a6) {6};
\node[vertex] at(14,-3) (a7) {7};

\draw [-, thick] (a3) to (a1);
\draw [-, thick] (a3) to (a5);
\draw [-, thick] (a6) to (a5);
\draw [-, thick] (a5) to (a4);
\draw [-, thick] (a6) to (a7);

\draw[->,green] (a4) to[bend left=25] (a3);
\draw[->,green] (a3) to[bend right=30] (a5);

\node[vertex,cyan,label={[text=red]$b=0$}] at(8,-5) (b5) {5};
\node[vertex] at(5,-7) (b1) {1};
\node[vertex] at(10,-7) (b7) {7};
\node[vertex,cyan,label={[text=red]$b=0$}] at(6,-6) (b3) {3};
\node[vertex] at(7,-7) (b4) {4};
\node[vertex] at(9,-6) (b6) {6};

\draw [-, thick] (b5) to (b3);
\draw [-, thick] (b3) to (b1);
\draw [-, thick] (b3) to (b4);
\draw [-, thick] (b5) to (b6);
\draw [-, thick] (b6) to (b7);
\end{tikzpicture}
\end{document}
```
### Application
Kattis: [Compound Words](https://open.kattis.com/problems/compoundwords)
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
PrintWriter pw = new PrintWriter(System.out);

List<String> words = new ArrayList<>();
TreeSet<String> comp = new TreeSet<>();
StringTokenizer st;
String line;

while ((line = br.readLine()) != null && !line.isEmpty()) {
	st = new StringTokenizer(line);

	while (st.hasMoreTokens()) {
		String curr = st.nextToken();
		for (int i = 0; i < words.size(); i++) {
			String other = words.get(i);
			comp.add(other + curr);
			comp.add(curr + other);
		}
		words.add(curr);
	}
}

while (!comp.isEmpty())
	pw.println(comp.pollFirst());

pw.close();
```

Kattis: [Bacon, Eggs and Spam](https://open.kattis.com/problems/baconeggsandspam)
- fairly convoluted
- use tree map to map menu items to a priority queue of people who ordered it, preserve sorted order on both
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
PrintWriter pw = new PrintWriter(System.out);

TreeMap<String, PriorityQueue<String>> orders = new TreeMap<>();
StringTokenizer st;

int n = Integer.parseInt(br.readLine());

while (n != 0) {
	for (int i = 0; i < n; i++) {
		st = new StringTokenizer(br.readLine());
		String name = st.nextToken();

		while (st.hasMoreTokens()) {
			String key = st.nextToken();
			PriorityQueue<String> pq = orders.getOrDefault(key, new PriorityQueue<>());
			pq.offer(name);
			orders.put(key, pq);
		}
	}

	Entry<String, PriorityQueue<String>> elem = orders.firstEntry();
	for (int j = 0; j < orders.size(); j++) {
		pw.print(elem.getKey());
		pw.print(" ");
		PriorityQueue<String> pq = elem.getValue();
		while (!pq.isEmpty()) {
			pw.print(pq.poll());
			pw.print(" ");
		}
		pw.println();
		elem = orders.higherEntry(elem.getKey());
	}
	pw.println();

	orders.clear();
	n = Integer.parseInt(br.readLine());
}

pw.close();
```
### Extra
Min size function in python
```python
def S(h):
	if h == 0:
		return 1
	elif h == 1:
		return 2
	
	return S(h-1) + S(h-2) + 1
```