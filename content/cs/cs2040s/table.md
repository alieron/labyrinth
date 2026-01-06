---
tags:
  - cs2040s/chapter3
  - cs/abstract_data_types
  - lang/java
complete: true
next: /labyrinth/notes/cs/cs2040s/hash_table
prev: /labyrinth/notes/cs/cs2040s/binary_heap

---
### Summary
Table
- binds a key to a value
- allows lookup for stored values

Direct addressing table(DAT) - [array](/labyrinth/notes/cs/cs2040s/compact_array) ^c3b281
- the values are used as the key/indexes of the array

| Operation   | Method                           | Performance |
| ----------- | -------------------------------- | ----------- |
| `search(v)` | check if the index `v` is filled | - $O(1)$    |
| `insert(v)` | fill index `v`                   | - $O(1)$    |
| `remove(v)` | empty index `v`                  | - $O(1)$    |
> the couting array in [counting sort](/labyrinth/notes/cs/cs2040s/counting_sort) works similarly, range of keys must be small(and non-negative), $O(k)$ space
### Concept
Table operations
- `search(v)`
	- determine if `v` exists in the table
- `insert(v)`
	- insert `v` into the table
- `remove(v)`
	- remove `v` from the table

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
  \node[label=left:{0},draw,cell] (0) {};
  \node[label=left:{1},draw,cell,below=of 0] (1) {};
  \node[label=left:{2},draw,cell,below=of 1] (2) {};
  \node[label=left:{3},draw,cell,below=of 2] (3) {};
  \node[draw,cell,below=of 3] (4) {$\vdots$};
  \node[label=left:{k},draw,cell,below=of 4] (k) {};
  
	\pnull{1}
	\pnull{2}
	
	\node[right=of 0] (v0) {$v_0$};
	\node[right=of 3] (v3) {$v_3$};
	\node[right=of k] (vk) {$v_k$};
	
	\draw[->] (0.center) -> (v0);
	\draw[->] (3.center) -> (v3);
	\draw[->] (k.center) -> (vk);
\end{tikzpicture}
\end{document}
``` 