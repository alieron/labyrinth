---
tags:
  - cs2040s/chapter2
  - cs/data_structures
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/queue_ADT
next: /labyrinth/notes/cs/cs2040s/deque_ADT

---
### Summary
Doubly linked list
- implements [list ADT](/labyrinth/notes/cs/cs2040s/list_ADT)

| Operation     | Method                                | Performance                                                                                                                                                                                      |
| ------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `get(i)`      | list traversal                        | - $O(1)$, first element/last element<br>- $O(n)$, other elements                                                                                                                                 |
| `search(v)`   | linear search                         | - $O(1)$, first element/last element<br>- $O(n)$, not found                                                                                                                                      |
| `insert(i,v)` | traverse the list and insert the node | - $O(1)$, insert at head, shift head pointer<br>- $O(1)$, insert into empty list, need to set the tail pointer<br>- $O(n)$, insert in between<br>- $O(1)$, insert after tail, shift tail pointer |
| `remove(i)`   | traverse the list and remove the node | - ${\color{red}O(1)}$, remove at head/remove at tail<br>- $O(n)$, remove in between                                                                                                              |
Strengths
- fast insertion and extraction at the head and tail

Limitations
- indexing requires traversal
### Concept
Data structure
- series of nodes
- pointer to next and previous node
- non-contiguous

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

\end{tikzpicture}
\end{document}
```
```java
class Node {
	Node previous;
	Object data;
	Node next;
}
```