---
tags:
- ma1522/chapter6
- math/linear_algebra
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1522/eigenvectors)   [Next](/labyrinth/notes/math/ma1522/orthogonal_diagonalization)
### Summary
Diagonalizable
$$
\mathbf{A}_{n\times n}\text{ is diagonalizable}\iff \mathbf{A}\text{ has }n\text{ linearly independent eigenvectors}
$$
> ie. the eigenvectors have to span $\mathbb{R}^n$

Eigenspaces are linearly independent
$$
\begin{align*}
\lambda_{i}\neq\lambda_{j} & \implies \forall \mathbf{v}\in E_{\lambda_{i}} \ \mathbf{Av} = \lambda_{i} \mathbf{v}\neq\lambda_{j}\mathbf{v} \\
& \implies \forall \mathbf{v}\in E_{\lambda_{i}} \ \mathbf{v}\not\in E_{\lambda_{j}}
\end{align*}
$$

Equivalent statements for diagonalizability
$$
\begin{align*}
&&& \mathbf{A}\text{ is diagonalizable} \iff\\
\\
1) &&& \{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{n} \}\text{ is a basis of }\mathbb{R}^n \land \forall i<n \ \mathbf{u}_{i}\text{ is an eigenvector of }\mathbf{A} \\
\\
2) &&& \det(x\mathbf{I}-\mathbf{A}) \text{ splits into linear factors} \land \forall\lambda \ \operatorname{dim}(E_{\lambda})=r_{\lambda}
\end{align*}
$$

[Scalar matrices](/labyrinth/notes/math/ma1522/special_matrices#^ca64e0)
$$
\mathbf{A}\text{ is diagonalizable}\land\mathbf{A}\text{ has only one eigenvalue }\lambda \iff \mathbf{A}=\lambda \mathbf{I}
$$
### Concept
Diagonalization
$$
\begin{gather*}
\mathbf{A}=\mathbf{PDP}^{-1} \text{ or } \mathbf{P}^{-1}\mathbf{AP} = \mathbf{D} \\
\\
\text{then }\mathbf{P}=\begin{pmatrix}
\mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{n}
\end{pmatrix}, \quad \mathbf{D}=\operatorname{diag}(\mu_{1}, \mu_{1},\dots,\mu_{n}) \\
\\
\forall \mathbf{u}_{i}\ \mathbf{Au}_{i}=\mu_{i}\mathbf{u}_{i} & \mu_{i}\text{ is the eigenvalue associated to eigenvector }\mathbf{u}_{i}
\end{gather*}
$$
> several linearly independent eigenvectors can share the same eigenvalue

[Geometric](/labyrinth/notes/math/ma1522/eigenvectors#^444228) and [algebraic](/labyrinth/notes/math/ma1522/eigenvectors#^3360ad) multiplicities
- the geometric multiplicity cannot be greater than the algebraic multiplicity, in order for the matrix to be diagonalizable

$$
1\leq \operatorname{dim}(E_{\lambda})\leq r_{\lambda}
$$
> if the algebraic is 1, then the geometric is also 1 -> only need to check geometric for eigenvalues with algebraic > 1

Non-diagonalizable
- show that the characteristic polynomial doesn't split into linear factors
- show that there is a geometric multiplicity that is less than its algebraic multiplicity

[Powers](/labyrinth/notes/math/ma1522/matrix_multiplication#^6a9606) of diagonalizable matrices
$$
\begin{gather*}
\mathbf{A}=\mathbf{PDP}^{-1} \implies \mathbf{A}^m = \mathbf{PD}^m\mathbf{P}^{-1} \\
\\
\mathbf{D}^m=\begin{pmatrix}
(\mu_{1})^m & 0 & \dots & 0 \\
0 & (\mu_{2})^m & \dots & 0 \\
\vdots & \vdots & \ddots & 0 \\
0 & 0 & 0 & (\mu_{n})^m
\end{pmatrix} 
\end{gather*}
$$
> akin to changing base, applying the power, then changing back
### Application
Diagonal and identity matrix
$$
\mathbf{D}=\mathbf{IDI}^{-1}
$$
> any diagonal matrix is diagonalizable by the identity matrix

Non-diagonalizable
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 1 \\
0 & -1 & 0
\end{pmatrix} \\
\\
\det(x\mathbf{I}-\mathbf{A})=\det\begin{pmatrix}
x-1 & 0 & 0 \\
0 & x & -1 \\
0 & 1 & x
\end{pmatrix}=(x-1)(x^{2}+1) \\
\\
\therefore\mathbf{A}\text{ does not split into linear factors}\\
\\
\\
\mathbf{A}=\begin{pmatrix}
1 & 2 \\ 0 & 1
\end{pmatrix}, \quad \lambda = 1, r_{1}=2 &\text{(Eigenvalues of Triangular matrices)}\\
\\
\mathbf{I}-\mathbf{A}=\begin{pmatrix}
1-1 & -2 \\ 0 & 1-1
\end{pmatrix}\to\begin{pmatrix}
0 & 1 \\ 0 & 0
\end{pmatrix} \quad E_{1}=\operatorname{span}\left\{ \begin{pmatrix}
1 \\
0
\end{pmatrix} \right\} \\
\\
\therefore \operatorname{dim}(E_{1})=1<r_{1}=2
\end{gather*}
$$
###### Extra
Theorem for the independence of eigenspaces(formally)
$$
\begin{align*}
\lambda_{1}\neq\lambda_{2}& \implies \{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \} \subseteq E_{\lambda_{1}}\text{ is linearly independent} \land \{ \mathbf{v}_{1},\dots,\mathbf{v}_{m} \} \subseteq E_{\lambda_{2}}\text{ is linearly independent} \\
& \implies \{ \mathbf{u}_{1},\dots,\mathbf{u}_{k} \} \cup\{ \mathbf{v}_{1},\dots,\mathbf{v}_{m} \}\text{ is also linearly independent}
\end{align*}
$$