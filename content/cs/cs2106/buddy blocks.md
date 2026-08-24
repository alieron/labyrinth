---
tags:
  - cs2106/chapter7
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/contiguous_memory
next: /labyrinth/notes/cs/cs2106/paging_scheme

---
### Concept
- partition into blocks of size 2ⁿ
- each block has an adjacent buddy of the same size
- if free, both can be merged into a larger block

![[buddy_blocks.png|600]]

Implementation
- [table](/labyrinth/notes/cs/cs2040s/table), `A[0..n]` where `2ⁿ` is the largest allocatable block size
- `A[j]` is a linked list of the **free blocks** of size `2ʲ`

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize}}
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[label=left:{A[0]},draw,cell] (0) {};
  \node[label=left:{A[1]},draw,cell,above=0 of 0] (1) {};
  \node[draw,cell,above=0 of 1] (dot) {$\vdots$};
  \node[label=left:{A[8]},draw,cell,above=0 of dot] (8) {};
  \node[label=left:{A[9]},draw,cell,above=0 of 8] (9) {};

	\pnull{0}
	\pnull{1}
	\pnull{9}
	
	\node[draw,cell,right=of 8] (v8) {256};
	
	\draw[->] (8.center) -> (v8);
\end{tikzpicture}
\end{document}
``` 

Allocation
- for a block of size `N`
1. find the smallest `j` such that `2ʲ >= N`
2. check `A[j]`
	- if there is a free block, allocate it, remove from the table
	- else, divide a larger block

Deallocation
- for a block of size `N`
- check in `A[j]` where `2ʲ == N`
	- if the buddy is free, merge it up the table
	- else, insert it into the table

Identifying buddies
- for blocks of size `2ᵏ`
- the address is identical, only the `kth` bit is flipped

$$
\begin{gather*}
A = \text{xx000000} \\
\\
\text{Split:}\\
B = \text{xx000000} \\
C = \text{xx010000}
\end{gather*}
$$
> the suffix is always all `0s`