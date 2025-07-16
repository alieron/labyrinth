---
tags:
- ma1522/chapter3
- math/linear_algebra
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1522/subspaces)   [Next](/labyrinth/notes/math/ma1522/basis_vectors)
### Summary
Algorithm to check for linear independence
- recall the [intuition](/labyrinth/notes/math/ma1522/gaussian_elimination#^0aa696) for row reduction, expressing columns as multiples of another
- if the column is not a pivot column, then its vector can be expressed as a multiple of the other vectors

$$
\begin{gather*}
&\begin{pmatrix}\mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{k}\end{pmatrix}\mathbf{x}=\mathbf{0} & \mathbf{x}\text{ is a nontrivial solution} \\ 
\\
&\left(\begin{array}{cccc|c} \mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{k} & \mathbf{0} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{I} & \mathbf{x} \end{array}\right) & \text{if linearly independent }\mathbf{x}=\mathbf{0}\\
\\
\text{or }&\begin{pmatrix}\mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{k}\end{pmatrix}\xrightarrow{RREF}\mathbf{R}\\
&\mathbf{R}=\mathbf{I}\implies\begin{pmatrix}\mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{k}\end{pmatrix}\text{ is linearly independent} & \text{no non-pivot columns}
\end{gather*}
$$
> additionally $\mathbf{R}$ tells us how each linearly dependent vector is a multiple of the other vector in the set
### Concept
Linear independence
- no redundant vectors

$$
c_1\mathbf{u}_1+c_2\mathbf{u}_2+\cdots+c_k\mathbf{u}_k=\mathbf{0} \iff c_1=c_2=\cdots=c_k=0
$$
> no vector is a linear combination of the others, which would allow its coefficient to cancel out

Maximum number for linear independence
$$
\begin{gather*}
S=\{ \mathbf{u}_{1} , \mathbf{u}_{2} , \dots , \mathbf{u}_{k} \}, \quad \mathbf{u}_{i}\in \mathbb{R}^n \\
\\
\begin{split}
k>n &\implies \text{more columns than rows} \\
& \implies \text{there is at least 1 non-pivot column} \\
&\implies S\text{ is linearly dependent} \\
\end{split}
\end{gather*}
$$

Special cases
$$
\begin{gather*}
\{ \mathbf{0} \} \text{ is always linearly independent} \\
\\
\mathbf{v}\neq \mathbf{0}\implies \{ \mathbf{v} \}\text{ is linearly independent} \\
\\
\{ \mathbf{v}_{1},\mathbf{v}_{2} \}\text{ is linearly }{\color{orange} \text{dependent} }\iff a\mathbf{v}_{1}=\mathbf{v}_{2} & \text{(Scalar multiples)} \\
\\
\varnothing\text{ is always linearly independent}
\end{gather*}
$$
### Application
Deducing original vectors from RREF form
$$
\begin{gather*}
\begin{pmatrix} 
| & | & | & | \\
\mathbf{v}_{1} & \mathbf{v}_{2} & \mathbf{v}_{3} & \mathbf{v}_{4} \\
| & | & | & |
\end{pmatrix}\xrightarrow{RREF}
\begin{pmatrix}
1 & 0 & 2 & 1 \\
0 & 1 & 1 & 4 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{pmatrix} \\
\\
\mathbf{v}_{1}=\begin{pmatrix}
-3 \\
5 \\
2 \\
1
\end{pmatrix}, \quad \mathbf{v}_{2}=\begin{pmatrix}
4 \\
-3 \\
7 \\
-1
\end{pmatrix} \\
\\
\mathbf{v}_{3}=2\mathbf{v}_{1}+\mathbf{v}_{2}=\begin{pmatrix}
-2 \\
7 \\
11 \\
1
\end{pmatrix} \\
\\
\mathbf{v}_{4}=\mathbf{v}_{1}+4\mathbf{v}_{2}=\begin{pmatrix}
13 \\
-7 \\
30 \\
-3
\end{pmatrix}
\end{gather*}
$$