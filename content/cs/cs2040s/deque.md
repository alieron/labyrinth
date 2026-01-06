---
tags:
  - cs2040s/chapter2
  - cs/abstract_data_types
  - lang/java
complete: true
next: /labyrinth/notes/cs/cs2040s/priority_queue
prev: /labyrinth/notes/cs/cs2040s/DLL

---
### Summary
Deque
- both LIFO and FIFO

Circular array implementation - [arrays](/labyrinth/notes/cs/cs1101s/arrays)

| Operation    | Method                     | Performance |
| ------------ | -------------------------- | ----------- |
| `enqueue(v)` | add before head/after tail | - $O(1)$    |
| `dequeue()`  | remove from head/tail      | - $O(1)$    |
| `peek()`     | get head/tail              | - $O(1)$    |

[DLL](/labyrinth/notes/cs/cs2040s/DLL) implementation

| Operation    | Method                     | Performance |
| ------------ | -------------------------- | ----------- |
| `enqueue(v)` | add before head/after tail | - $O(1)$    |
| `dequeue()`  | remove from head/tail      | - $O(1)$    |
| `peek()`     | get head/tail              | - $O(1)$    |
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=2em and 3.5em}}

\begin{document}
\begin{tikzpicture}[>=Latex]

  % Nodes
  \node[draw,cell] (p1) {$a_1$};
  \node[draw,cell,right=of p1] (p2) {$a_2$};
  \node[right=of p2] (dots) {...};
  \node[draw,cell,right=of dots] (p3) {$a_n$};
  
  % Forward arrows
  \draw[->] (p1) to[bend left=15] (p2);  
  \draw[->] (p2) to[bend left=15] (dots);     
  \draw[->] (dots) to[bend left=15] (p3);     
  
  % Backward arrows (curved)
  \draw[->] (p2) to[bend left=15] (p1);
  \draw[->] (dots) to[bend left=15] (p2);
  \draw[->] (p3) to[bend left=15] (dots);
  
  % Head and tail pointers
  \node[below=of p1] (head) {head};
  \draw[->] (head.north) -- (p1);  
  \node[below=of p3] (tail) {tail};
  \draw[->] (tail.north) -- (p3);
  
  \node[above= of p1,xshift=-0.5cm] (in) {in};
  \draw[arrows={-Latex}] (in)--(p1);  
  \node[above= of p1,xshift=0.5cm] (out) {out};
  \draw[arrows={-Latex}] (p1)--(out);
  
  \node[above= of p3,xshift=-0.5cm] (in) {in};
  \draw[arrows={-Latex}] (in)--(p3);  
  \node[above= of p3,xshift=0.5cm] (out) {out};
  \draw[arrows={-Latex}] (p3)--(out);
\end{tikzpicture}
\end{document}
```
### Concept
Dequeue ADT operations
- `enqueue(v)` 
	- add `v` to the front/back of the deque
- `dequeue()`
	- get the first/last item in the deque and remove it
- `peek()`
	- get the first/last item in the deque without removing it
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[draw,cell] (0) {};
  \node[draw,cell,right=of 0] (1) {4};
  \node[draw,cell,right=of 1] (2) {3};
  \node[draw,cell,right=of 2] (3) {2};
  \node[draw,cell,right=of 3] (4) {1};
  
  \node[above= of 0,xshift=-0.5cm] (in) {in};
  \draw[arrows={-Latex}] (in)--(0);  
  \node[above= of 0,xshift=0.5cm] (out) {out};
  \draw[arrows={-Latex}] (0)--(out);
  
  \node[above= of 4,xshift=-0.5cm] (in) {in};
  \draw[arrows={-Latex}] (in)--(4);  
  \node[above= of 4,xshift=0.5cm] (out) {out};
  \draw[arrows={-Latex}] (4)--(out);
\end{tikzpicture}
\end{document}
```

Deque as [Queue](/labyrinth/notes/cs/cs2040s/queue)

| Queue Method | Deque Method                  |
| ------------ | ----------------------------- |
| `add(v)`     | `addLast(v)` or `add(v)`      |
| `remove()`   | `removeFirst()` or `remove()` |
| `peek()`     | `peekFirst()` or `peek()`     |

Deque as [Stack](/labyrinth/notes/cs/cs2040s/stack)

| Stack Method | Deque Method                  |
| ------------ | ----------------------------- |
| `push(v)`    | `addFirst(v)`                 |
| `pop()`      | `removeFirst()` or `remove()` |
| `peek()`     | `peekFirst()` or `peek()`     |
> by convention following [queue](/labyrinth/notes/cs/cs2040s/queue), the back(last) of the dequeue is the tail, the front(first) refers to the head 
### Application
Kattis: [backspace](https://open.kattis.com/problems/backspace)
- stack behaviour for backspace
- queue behaviour for printing

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
PrintWriter pw = new PrintWriter(System.out);

Deque<Character> dq = new ArrayDeque<>();

for (char c : br.readLine().toCharArray())
	if (c == '<') // we need LIFO
		dq.removeFirst();
	else
		dq.addFirst(c);

while (!dq.isEmpty())
	pw.append(dq.removeLast()); // we need FIFO

pw.println();
pw.close();
```

Kattis: [integerlist](https://open.kattis.com/problems/integerlists)
- reversible queue

```java
ArrayDeque<Integer> dq = new ArrayDeque<>();

for (int j = 0; j < n; j++)
	dq.add(Integer.parseInt(numArr[j])); // add normally

boolean reversed = false;
for (char c : prog.toCharArray()) {
	if (c == 'R') {
		reversed = !reversed;
	} else {
		if (!dq.isEmpty()) {
			if (reversed) { // take from head or tail depending on reversed state
				dq.pollLast();
			} else {
				dq.pollFirst();
			}
		}
	}
}

StringJoiner sj = new StringJoiner(",", "[", "]");
while (!dq.isEmpty()) {
	int next = 0;
	if (reversed) {
		next = dq.pollLast();
	} else {
		next = dq.pollFirst();
	}
	sj.add(String.format("%d", next));
}
pw.println(sj.toString());

pw.close();
```
> use [StringJoiner](/labyrinth/notes/cs/cs2040s/java_standard_library#^35facb) to handle the joining of strings separated by a delimter
