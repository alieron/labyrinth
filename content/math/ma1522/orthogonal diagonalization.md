---
tags:
- ma1522/chapter6
- math/linear_algebra
complete: false
prev: /labyrinth/notes/math/ma1522/diagonalization
next: /labyrinth/notes/math/ma1522/markov_chains
---

   

### Summary
Spectral theorem, [symmetry](/labyrinth/notes/math/ma1522/matrix_transpose#^e47d16)
$$
\mathbf{A}_{n\times n}\text{ is orthogonally diagonalizable}\iff \mathbf{A}\text{ is symmetric}
$$

Eigenspaces are orthogonal
$$
\begin{align*}
\lambda_{i}\neq\lambda_{j} & \implies \forall \mathbf{v}_{i}\in E_{\lambda_{i}} \ \forall \mathbf{v}_{j}\in E_{\lambda_{j}} \ \mathbf{v}_{i}\cdot \mathbf{v}_{j}=0
\end{align*}
$$

Equivalent statements for orthogonal diagonalizability
$$
\begin{align*}
&&& \mathbf{A}\text{ is orthogonally diagonalizable} \iff\\
\\
1) &&& \{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{n} \}\text{ is an orthonormal basis of }\mathbb{R}^n \land \forall i<n \ \mathbf{u}_{i}\text{ is an eigenvector of }\mathbf{A} \\
\\
2) &&& \mathbf{A}\text{ is symmetric}
\end{align*}
$$

Shortcut for the determinant of symmetric matrices, using submatrices
$$
\det\begin{pmatrix}
\mathbf{A} & \mathbf{B} \\
\mathbf{B} & \mathbf{A}
\end{pmatrix} = \det(\mathbf{A}-\mathbf{B})\det(\mathbf{A}+\mathbf{B})
$$

### Concept
Orthogonal diagonalization
- breaking up a complex transformation into a rotation, scale and then reverse rotation

$$
\begin{gather*}
\mathbf{A}=\mathbf{PDP}^T \\
\\
\text{where }\mathbf{P}\text{ is orthogonal so }\mathbf{P}^{-1}=\mathbf{P}^T  
\end{gather*}
$$
> $\mathbf{P}$ is a rotation matrix

Spectral theorem
$$
\begin{align*}
(\implies)\ &\text{Suppose }\mathbf{A}=\mathbf{PDP}^T\\
&\mathbf{A}^T=(\mathbf{PDP}^T)^T = (\mathbf{P}^T)^T\mathbf{D}^T\mathbf{P}^T = \mathbf{PDP}^T=\mathbf{A} \\
& \therefore \mathbf{A}^T=\mathbf{A} \\
\\
(\impliedby)\ & \dots
\end{align*}
$$
> the converse is out of scope for MA1522

[Orthogonality](/labyrinth/notes/math/ma1522/orthogonality) of eigenspaces
- for symmetric matrices

$$
\begin{align*}
\lambda_{1}\mathbf{v}_{1} \cdot \mathbf{v}_{2}& =(\mathbf{A}\mathbf{v}_{1})\cdot \mathbf{v}_{2} \\
& =(\mathbf{A}\mathbf{v}_{1})^T \mathbf{v}_{2} \\
& =\mathbf{v}_{1}^T\mathbf{A}^T\mathbf{v}_{2} \\
& =\mathbf{v}_{1}^T(\mathbf{A}\mathbf{v}_{2}) \\
& =\mathbf{v}_{1}^T(\lambda_{2}\mathbf{v}_{2}) \\
& =\lambda_{2}\mathbf{v}_{1}\cdot \mathbf{v}_{2} \\
\\
\therefore \lambda_{1}\neq\lambda_{2}& \iff \mathbf{v}_{1}\cdot \mathbf{v}_{2} = 0
\end{align*}
$$
> only perform Gram-Schmidt for vectors within each eigenspace, the eigenspaces are already orthogonal

### Application
$$

$$


