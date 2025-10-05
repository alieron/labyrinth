---
tags:
  - cs2040s/chapter3
  - cs/abstract_data_types
complete: false
prev: /labyrinth/notes/cs/cs2040s/stack_ADT
next: /labyrinth/notes/cs/cs2040s/DLL

---
### Summary
Queue ADT
- first in first out(FIFO)

Circular array implementation - [arrays](/labyrinth/notes/cs/cs1101s/arrays)

| Operation    | Method           | Performance |
| ------------ | ---------------- | ----------- |
| `enqueue(v)` | add after tail   | - $O(1)$    |
| `dequeue()`  | remove from head | - $O(1)$    |
| `peek()`     | get head         | - $O(1)$    |
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[draw,cell] (0) {$a_1$};
  \node[draw,cell,right=of 0] (1) {$a_2$};
  \node[draw,cell,right=of 1,minimum width=2cm] (2){...};
  \node[draw,cell,right=of 2] (3) {$a_n$};
  \node[draw,cell,right=of 3] (4) {};
  \node[draw,cell,right=of 4,minimum width=2cm] (5) {...};
  \node[draw,cell,right=of 5] (6) {};
  
  \node[yshift=-\boxsize] (x0) {0};
  \node[yshift=-\boxsize] (x1) at (1) {1};
  \node[yshift=-\boxsize] (xn) at (3) {n-1};
  \node[yshift=-\boxsize] (xn1) at (4) {n};
  \node[yshift=-\boxsize] (xm) at (6) {m-1};
  
  \node[above=of 0] (head) {head};
  \draw[arrows={-Latex}] (head.south)--(0);  
  \node[above=of 3] (tail) {tail};
  \draw[arrows={-Latex}] (tail.south)--(3);
  
  \node[left=of 0] (a) {initial enqueuing:};
  
  \node[draw,cell,below=2cm of 0] (c0) {$a_1$};
  \node[draw,cell,right=of c0,minimum width=2cm] (c1){...};
  \node[draw,cell,right=of c1] (c2) {$a_x$};
  \node[draw,cell,right=of c2] (c3) {};
  \node[draw,cell,right=of c3] (c4) {$a_y$};
  \node[draw,cell,right=of c4,minimum width=2cm] (c5) {...};
  \node[draw,cell,right=of c5] (c6) {$a_m$};
  
  \node[yshift=-\boxsize] (cx0) at (c0) {0};
  \node[yshift=-\boxsize] (cxm) at (c6) {m-1};
  
  \node[above=of c4] (chead) {head};
  \draw[arrows={-Latex}] (chead.south)--(c4);  
  \node[above=of c2] (ctail) {tail};
  \draw[arrows={-Latex}] (ctail.south)--(c2);
  
  \node[left=of c0] (b) {after some dequeuing:};
\end{tikzpicture}
\end{document}
```
> array "wraps" around to avoid having to shift all the elements during insertion/removal

Two [stacks](/labyrinth/notes/cs/cs2040s/stack_ADT) implementation
- enqueue to the bottom or dequeue from the bottom

| Operation    | Method                                                                                                                                           | Performance                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| `enqueue(v)` | Expensive enqueue: pop items in stack1 to stack2, push `v` to bottom of stack1, push rest of elements back to stack1<br>Push: push `v` to stack1 | - $O(n)$, expensive enqueue<br>- $O(1)$, push to primary  |
| `dequeue()`  | Pop: pop `v` from stack1<br>Expensive dequeue: pop items in stack1 to stack2, pop `v` from top of stack 2, push rest of elements back to stack2  | - $O(1)$, pop from primary<br>- $O(n)$, expensive dequeue |
| `peek()`     | similar to dequeue                                                                                                                               | - $O(1)$, peek the primary<br>- $O(n)$, expensive dequeue |

[SLL](/labyrinth/notes/cs/cs2040s/SLL) implementation

| Operation    | Method           | Performance |
| ------------ | ---------------- | ----------- |
| `enqueue(v)` | insert at tail   | - $O(1)$    |
| `dequeue()`  | remove from head | - $O(1)$    |
| `peek()`     | get head         | - $O(1)$    |

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=2em and 3.5em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here

  \node[draw,cell] (p1) {$a_1$};
  \node[draw,cell,right=of p1] (p2) {$a_2$};
  \node[right=of p2] (dots) {...};
  \node[draw,cell,right=of dots] (p3) {$a_n$};
  
  \draw[arrows={-Latex}] (p1)--(p2);  
  \draw[arrows={-Latex}] (p2)--(dots);     
  \draw[arrows={-Latex}] (dots)--(p3);     
  
  \node[below=of p1] (head) {head};
  \draw[arrows={-Latex}] (head.north)--(p1);  
  \node[below=of p3] (tail) {tail};
  \draw[arrows={-Latex}] (tail.north)--(p3);
  
  \node[above=of p3] (in) {in};
  \draw[arrows={-Latex}] (in)--(p3);  
  \node[above=of p1] (out) {out};
  \draw[arrows={-Latex}] (p1)--(out);
\end{tikzpicture}
\end{document}
```

[java.util.Queue](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html) interface
- [java.util.ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html) -> circular array 
- [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) -> DLL
### Concept
Queue operations ^abf27d
- `enqueue(v)`
	- add `v` to the back of the queue
- `dequeue()`
	- get the first item in the queue and remove it
- `peek()`
	- get the first item in the queue without removing it

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
  
  \node[above=of 0] (in) {in};
  \draw[arrows={-Latex}] (in)--(0);  
  \node[above=of 4] (out) {out};
  \draw[arrows={-Latex}] (4)--(out);
\end{tikzpicture}
\end{document}
```

Monotonic queue

### Application

