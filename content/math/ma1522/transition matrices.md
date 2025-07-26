---
tags:
- ma1522/chapter3
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/basis_vectors
next: /labyrinth/notes/math/ma1522/dimensions
---

   

### Summary
Algorithm to find transition matrix
- extension of the [algorithm for computing coordinates](/labyrinth/notes/math/ma1522/basis_vectors#^b5ff18)

$$
\begin{gather*}
\left(\begin{array}{cccc|c} \mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{k} & \mathbf{v} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{I} & [\mathbf{v}]_{s} \end{array}\right)\\
\\
(\begin{array}{c|c}S&T\end{array})=\left(\begin{array}{cccc|cccc}\mathbf{u}_1&\mathbf{u}_2&\cdots&\mathbf{u}_k&\mathbf{v}_1&\mathbf{v}_2&\cdots&\mathbf{v}_k\end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c}\begin{matrix} \mathbf{I}_k\\\mathbf{0}_{(n-k)\times k} \end{matrix}&\begin{matrix} \mathbf{P}\\\mathbf{0}_{(n-k)\times k} \end{matrix}\end{array}\right)
\end{gather*}
$$

Inverse of transition matrix
$$
\begin{align*}
&T\text{ and }S\text{ are bases for a subspace} \\
\\
T\text{ to }S: \ & \mathbf{P}=\begin{pmatrix}
[\mathbf{v}_{1}]_{S} & [\mathbf{v}_{2}]_{S} &  \dots & [\mathbf{v}_{k}]_{S}
\end{pmatrix} \\
\\
S\text{ to }T: \ & \mathbf{P}^{-1}=\begin{pmatrix}
[\mathbf{u}_{1}]_{T} & [\mathbf{u}_{2}]_{T} &  \dots & [\mathbf{u}_{k}]_{T}
\end{pmatrix}
\end{align*}
$$
> inverse is defined when the transition preserves dimension

### Concept
Transition matrix
- coordinates of the vectors in $T$ relative to the basis $S$

$$
\begin{gather*}
\text{for }S=\{\mathbf{u}_1,...,\mathbf{u}_k\} \quad T=\{\mathbf{v}_1,...,\mathbf{v}_k\} \\
\\
T\text{ to }S: \ P= \begin{pmatrix}
[\mathbf{v}_{1}]_{S} & [\mathbf{v}_{2}]_{S} &  \dots & [\mathbf{v}_{k}]_{S}
\end{pmatrix}\\
\\
[w]_{S}=\mathbf{P}[w]_{T}
\end{gather*}
$$
> intuition: any matrix is a standard basis to its column space

Linear independence of relative coordinates
$$
\begin{gather*}
V\subseteq \mathbb{R}^n \ B\text{ is a basis for }V \land | B |=k \\
\\
\begin{split}
1)&\quad&&\{ \mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{m} \}\subseteq V\text{ is linearly independent} \iff \{ [\mathbf{v}_{1}]_{B},[\mathbf{v}_{2}]_{B},\dots,[\mathbf{v}_{m}]_{B} \} \text{ is linearly independent in }\mathbb{R}^k \\
\\
2)&&&\{ \mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{m} \}\text{ spans }V\iff\{ [\mathbf{v}_{1}]_{B},[\mathbf{v}_{2}]_{B},\dots,[\mathbf{v}_{m}]_{B} \}\text{ spans } \mathbb{R}^k
\end{split}
\end{gather*}
$$
> (1) applies to the negation as well, ie. if the set was linearly dependent

Number of basis vectors
$$
\begin{gather*}
V\subseteq \mathbb{R}^n \ B\text{ is a basis for }V \land | B |=k \\
\\
S=\{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{m} \} \land m>k \implies S\text{ is linearly dependent} \\
\\
S=\{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{m} \} \land m<k \implies S\text{ cannot span }V \\
\end{gather*}
$$

### Application
Transition matrix from the [standard basis](/labyrinth/notes/math/ma1522/basis_vectors#^709a91) ^b69bf6
$$
\begin{gather*}
& S = \{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{k} \} \\
\\
E\text{ to }S: & \mathbf{A}=\begin{pmatrix}
\begin{bmatrix}
1 \\
0 \\
\vdots \\
0
\end{bmatrix}_{S} & \begin{bmatrix}
0 \\
1 \\
\vdots \\
0
\end{bmatrix}_{S} & \dots & \begin{bmatrix}
0 \\
0 \\
\vdots \\
1
\end{bmatrix}_{S}
\end{pmatrix}=\begin{pmatrix}
\mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{k}
\end{pmatrix} \\
\\
S\text{ to }E: & \mathbf{A}^{-1}
\end{gather*}
$$
> the matrix of the vectors in $S$, $\mathbf{A}$ is a transformation from the standard basis to the basis $S$