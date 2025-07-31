---
tags:
- ma1522/chapter1
- math/linear_algebra
complete: true
---
### Summary
REF(row echelon form) ^17a789
- nonzero rows are above any all-zero rows
- each leading entry of a row is in a column right of the leading entry of the row above
- all entries before a leading entry are zeros

$$
\begin{pmatrix}
0 & 6 & * & * & * & * & * \\
0 & 0 & 1 & * & * & * & * \\
0 & 0 & 0 & 0 & 5 & * & * \\
0 & 0 & 0 & 0 & 0 & 0 & 0
\end{pmatrix}, \ * \in \mathbb{R}
$$

RREF(reduced row echelon form) ^259d40
- leading entry in each row is 1
- leading 1 is the only nonzero entry in its column

$$
\begin{pmatrix}
0 & 1 & 0 & * & 0 & * & * \\
0 & 0 & 1 & * & 0 & * & * \\
0 & 0 & 0 & 0 & 1 & * & * \\
0 & 0 & 0 & 0 & 0 & 0 & 0
\end{pmatrix}, \ * \in \mathbb{R}
$$

Pivot columns 
- columns with leading entries in the reduced echelon form