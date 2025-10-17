---
tags:
  - cs2040s/chapter3
  - cs/data_structures
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/priority_queue_ADT
next: /labyrinth/notes/cs/cs2040s/table_ADT

---
### Summary
Binary heap
- implements [priority queue ADT](/labyrinth/notes/cs/cs2040s/priority_queue_ADT)
- semi-sorted "tree"
- leverages divide-and-conquer to imitate sorting

| Operation    | Method                      | Performance   |
| ------------ | --------------------------- | ------------- |
| `enqueue(v)` | insert as a leaf, reheapify | - $O(\log n)$ |
| `dequeue()`  | extract the head            | - $O(\log n)$ |

Slow build heap
- enqueue $n$ elements, $O(\log n)$ each

```java
for (int i = 0; i < arr.length; i++)
	pq.offer(arr[i]);
```
$$
\begin{align*}
\text{Single enqueue:} &&& O(\log n) \\
\\
\text{Enqueuing }n\text{ elements:} &&& O(\log 1 + \log 2 + \log 3 + \dots + \log n) = O(\log n!) \\
\\
\text{Sterling's Approximation:} &&& n! \approx \sqrt{2\pi n}\left( \frac{n}{e} \right)^n \\
\\
&&& \begin{aligned}
\log n ! &\approx n\log \frac{n}{e} + \frac{1}{2}\log 2\pi n \\
& \approx {\color{orange} n\log n} - n + \log n
\end{aligned} \\
\\
&&& \therefore O(\log n!) \approx O(n\log n)
\end{align*}
$$

Fast build heap
- alter the existing array

```java
PriorityQueue<Integer> pq = new PriorityQueue<>(Arrays.asList(arr, arr.length)); // supply the array as a collection
```
$$
\begin{align*}
\text{Number of nodes at }h\text{:}&&& \left\lceil  \frac{n}{2^{h+1}}  \right\rceil \\
\\
\text{Heapify a note at }h\text{:}&&& O(h) \qquad \text{worse case }h\text{ swaps to the bottom} \\
\\
\text{Work done at each level:}&&& \left\lceil  \frac{n}{2^{h+1}}  \right\rceil \cdot O(h) \\
\\
\text{Total work for the whole tree:}&&& \sum_{h=0}^{\log n} \left\lceil  \frac{n}{2^{h+1}}  \right\rceil \cdot O(h) \\
\\
\text{Power series:}&&& \sum_{h=0}^{\infty} \frac{h}{2^h} = 2 \\
\\
&&& \begin{aligned}
\sum_{h=0}^{\log n} \left\lceil  \frac{n}{2^{h+1}}  \right\rceil \cdot O(h) & = \frac{cn}{2} \sum_{h=0}^{\log n}  \frac{h}{2^h} && \text{(worse case, tree is full)} \\
&= \frac{cn}{2} \sum_{h=0}^{\infty}  \frac{h}{2^h} && \text{(worse case, tree is infinite)} \\
&= \frac{cn}{2}\cdot2 = O(n)
\end{aligned}
\end{align*}
$$
> convergent [p-series](/labyrinth/notes/math/ma1521/series#^1ef7c9)
### Concept
Abstraction
- **complete binary tree**
	- all levels are filled
	- lowest is filled from the left
- **max/min heap property**
	- the parent of every vertex(except the root) is >= that vertex
	- every path from node to leaf is a sorted sub-array

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node [vertex] (4){$v_1$}
  child {
    node [vertex] (3) {$v_2$}
    child {
      node [vertex] (2) {$v_4$}
      child {
        node [vertex] (1) {$v_8$}
        child {node [vertex] (0) {$v_{16}$}}
        child {node [vertex] {$v_{17}$}}
      }
      child {
        node [vertex] {$v_9$}
      }
    }
    child {
      node [vertex] {$v_5$}
      child {node [vertex] {$v_{10}$}}
      child {node [vertex] {$v_{11}$}}
    }
  }
  child {
    node [vertex] {$v_3$}
    child {
      node [vertex] {$v_6$}
      child {node [vertex] {$v_{12}$}}
      child {node [vertex] {$v_{13}$}}
    }
    child {
      node [vertex] {$v_7$}
      child {node [vertex] {$v_{14}$}}
      child {node [vertex] {$v_{15}$}}
    }
  };
  
	\coordinate (ref) at ($(0)+(-2,0)$);
  \node at (ref |- 0) {$h=0$};
	\node at (ref |- 1) (h1) {$h=1$};
	\node at (ref |- 2) (h2) {$h=2$};
	\node at (ref |- 3) (h3) {$h=3$};
	\node at (ref |- 4) (h4) {$h=4$};
\end{tikzpicture}
\end{document}
```

Data structure
- concrete implementation as a [compact array](/labyrinth/notes/cs/cs2040s/compact_array), with 1-based indexing

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[draw,cell] (0) {};
  \pnull{0}
  \node[draw,cell,right=of 0] (1) {$v_1$};
  \node[draw,cell,right=of 1,minimum width=2cm] (2){...};
  \node[draw,cell,right=of 2] (3) {$v_{17}$};
  \node[draw,cell,right=of 3] (4) {};
  
  \node[yshift=-\boxsize] (x0) {0};
  \node[yshift=-\boxsize] (x1) at (1) {1};
  \node[yshift=-\boxsize] (xn) at (3) {17};
  \node[yshift=-\boxsize] (xn1) at (4) {18};
  
  \node[above= of 4] (in) {in};
  \draw[arrows={-Latex}] (in)--(4);  
  \node[above= of 1] (out) {out};
  \draw[arrows={-Latex}] (1)--(out);
\end{tikzpicture}
\end{document}
```

Heap traversal
```
parent(i) = i >> 1 // integer division by 2

left(i) = i << 1 // multiply by 2

right(i) = (i << 1) + 1 // multiply by 2, add 1
```
> hence why we use the 1-based array, reduces computation

TODO: CS1231S
Height of complete binary tree
$$
\begin{gather*}
N = 2^{(h+1)} - 1 \\
\\
h = \log_{2}(N+1)-1 \approx \log_{2} N
\end{gather*}
$$
> using bitwise left shift `n = 1 << (h + 1)`

Heapify
- bubble an element up
- at most $O(h)\approx O(\log n)$ swaps
- inserting a new root to a [heap](https://visualgo.net/en/heap?create=47,22,30,42,25,14,37,15)

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node [vertex,red] (a4) {47}
  child {
    node [vertex,red] (a3) {42}
    child {
      node [vertex,red] (a2) {22}
      child {
        node [vertex] {15}
      }
      child {
        node [vertex] (a1) {50}
      }
    }
    child {
      node [vertex] {25}
    }
  }
  child {
    node [vertex] {37}
    child {
      node [vertex] {14}
    }
    child {
      node [vertex] {30}
    }
  };
\node[below=of a1] (in) {in};
\draw[arrows={-Latex},thin] (in) -- (a1);
\draw[<->,red] (a1) to[bend right=45] (a2);
\draw[<->,red] (a2) to[bend left=45] (a3);
\draw[<->,red] (a3) to[bend left=45] (a4);
\end{tikzpicture}
\end{document}
```

Extract max/min
- remove the highest priority(head)
- swap the head with the last leaf, extract it, then reheapify
- extracting from the [heap](https://visualgo.net/en/heap?create=50,47,37,42,25,14,30,15,22)

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node [vertex,green] (a4) {50}
  child {
    node [vertex,red] (a3) {47}
    child {
      node [vertex,red] (a2) {42}
      child {
        node [vertex] {15}
      }
      child {
        node [vertex,red] (a1) {22}
      }
    }
    child {
      node [vertex] {25}
    }
  }
  child {
    node [vertex] {37}
    child {
      node [vertex] {14}
    }
    child {
      node [vertex] {30}
    }
  };
\node[below=of a1] (out) {out};
\draw[arrows={-Latex},thin] (a1) -- (out);
\draw[<->,green] (a4) to[bend left=45] (a1);
\draw[<->,red] (a2) to[bend left=45] (a3);
\draw[<->,red] (a3) to[bend left=45] (a4);
\end{tikzpicture}
\end{document}
```
### Application
Kattis: [Numbers On a Tree](https://open.kattis.com/problems/numbertree)
- understanding heap traversal

```java
String[] input = br.readLine().split(" ");

int h = Integer.parseInt(input[0]), n = 1 << (h + 1); // height and total number of nodes

int i = 1; // node number, 1-based
if (input.length > 1) { // possible that 
	for (char c : input[1].toCharArray())
		if (c == 'L')
			i <<= 1;
		else {
			i <<= 1;
			i++;
		}
}

pw.println(n - i);
```

Leetcode: [Mice and Cheese](https://leetcode.com/problems/mice-and-cheese)
- min heap for the opportunity cost

```java
PriorityQueue<Integer> pq = new PriorityQueue<>();

int points = 0;
for (int i = 0; i < reward1.length; i++) {
	points += reward2[i];
	pq.add(reward2[i] - reward1[i]);
}

while (k-- > 0) {
	points -= pq.poll();
}

return points;
```

Leetcode: [Find the K-Sum of an Array](https://leetcode.com/problems/find-the-k-sum-of-an-array)
- min heap for the subtractions
- partial sort

```java
// test input: [2,4,-2]
// [2] : {2,0}               <- 2nd
//  ├─ [2] : {2,1}           <- 3rd
//  │   ├─ [4] : {4,2}       <- 4th
//  │   └─ [2,4] : {6,2}
//  └─ [2,2] : {4,1}         <- 5th
//      ├─ [2,4] : {6,2}
//      └─ [2,2,4] : {8,2}

long max = 0, minus = 0;
for (int i = 0; i < nums.length; i++) {
	max += Math.max(nums[i], 0); // add +ve numbers to get the max
	nums[i] = Math.abs(nums[i]); // -ve doesn't matter
}

Arrays.sort(nums); // O(n log n)

PriorityQueue<long[]> minheap = new PriorityQueue<>(Comparator.comparingLong(o -> o[0]));
minheap.add(new long[] { nums[0], 0 });

while (--k > 0) { // O(k log k)
	long[] cur = minheap.poll();
	int i = (int) cur[1];
	minus = cur[0];
	if (i < nums.length - 1) {
		// O(log k), add the two next sequences
		minheap.add(new long[] { cur[0] + nums[i + 1], i + 1 });
		minheap.add(new long[] { cur[0] + nums[i + 1] - nums[i], i + 1 });
	}
}

return max - minus;
```