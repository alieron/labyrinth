---
tags:
  - cs2107/chapter3
  - cs/data_structures
  - cs/cryptography
complete: true
---
### Summary
Hash array
- matrix structure

| Operation      | Method                                                                | Performance |
| -------------- | --------------------------------------------------------------------- | ----------- |
| `insert(f)`    | calculate hash and append                                             | - $O(n)$    |
| `verify(i,j)`  | retrieve $h_{i,j}$, calculate $h_{i,j}'$ and check $h_{i,j}'=h_{i,j}$ | - $O(1)$    |
| `update(i, f)` | recalculate all following hashes                                      | - $O(n^2)$  |
### Concept
Data structure
- store all possible combinations of hashes

$$
\begin{gather*}
h_{i,j}=H(f_{i}||f_{i+1}||\dots||f_{j}) \\
\\
\begin{array}{c}
1 & h_{1,1} \\
2 & h_{1,2} & h_{2,2} \\
3 & h_{1,3} & h_{2,3} & h_{3,3} \\
 & \vdots \\
n & h_{1,n} & h_{2,n} & h_{3,n} & \dots & h_{n,n}
\end{array}
\end{gather*}
$$
