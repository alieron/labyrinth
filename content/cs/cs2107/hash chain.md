---
tags:
  - cs2107/chapter3
  - cs/data_structures
  - cs/cryptography
complete: true
---
### Summary
Hash chain
- block chain
- **forward integrity** - previous hashes cannot be computed, provided the hash function is [pre-image resistant](/labyrinth/notes/cs/cs2107/cryptographic_hashing#^ff5111)
- [linear](/labyrinth/notes/cs/cs2040s/list_ADT) structure

| Operation      | Method                                                                      | Performance |
| -------------- | --------------------------------------------------------------------------- | ----------- |
| `insert(f)`    | calculate hash and append                                                   | - $O(1)$    |
| `verify(i,j)`  | retrieve $h_{i-1}$ and $h_{j}$, calculate $h_{j}'$ and check $h_{j}'=h_{j}$ | - $O(1)$    |
| `update(i, f)` | recalculate all following hashes                                            | - $O(n)$    |
### Concept
Data structure
- chaining the hash of the file with the previous

$$
\begin{align*}
\text{Seed:} && h_{0}&=0\\
\text{General:}&& h_{i}&=H(h_{i-1}||H(f_{i}))\\
\\
\text{Chain:} && h_{1}&=H(h_{0}||H(f_{1})) \\
&& h_{2}&=H(h_{1}||H(f_{2}))
\end{align*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=2em and 3.5em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here

  \node[draw,cell] (p1) {$h_0$};
  \node[draw,cell,right=of p1] (p2) {$h_1$};
  \node[right=of p2] (dots) {...};
  \node[draw,cell,right=of dots] (p3) {$h_n$};
  
  \draw[arrows={-Latex}] (p1)--(p2);  
  \draw[arrows={-Latex}] (p2)--(dots);     
  \draw[arrows={-Latex}] (dots)--(p3);     
\end{tikzpicture}
\end{document}
```