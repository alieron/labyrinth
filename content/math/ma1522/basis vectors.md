---
tags:
- ma1522/chapter3
- math/linear_algebra
complete: false
prev: /labyrinth/notes/math/ma1522/linear_independence
next: /labyrinth/notes/math/ma1522/transition_matrices
---
   
### Summary
Standard basis ^709a91
$$
\begin{gather*}
E=\left\{ \begin{pmatrix}
1 \\
0 \\
0
\end{pmatrix},\begin{pmatrix}
0 \\
1 \\
0
\end{pmatrix},\begin{pmatrix}
0 \\
0 \\
1
\end{pmatrix} \right\} \\
\\
\text{is a basis for }\mathbb{R}^{3}
\end{gather*}
$$

[Equivalent statements of invertibility](/labyrinth/notes/math/ma1522/inverse_of_square_matrices#^468393)
$$
\begin{align*}
&&& \mathbf{A}\text{ is invertible} \iff\\
\\
9) &&& \text{cols/rows of }\mathbf{A}\text{ are linearly independent for }\mathbb{R}^n \\
\\
10) &&& \text{cols/rows of }\mathbf{A}\text{ spans }\mathbb{R}^n
\end{align*}
$$
> idea of [row and column space](/labyrinth/notes/math/ma1522/matrix_spaces) is relevant here

Algorithm for computing relative coordinate ^b5ff18
$$
\begin{gather*}
S\mathbf{x}=\mathbf{v} & \mathbf{x}\text{ is a unique solution}\\
\\
\left(\begin{array}{c|c} S & \mathbf{v} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{R} & \mathbf{x} \end{array}\right) \\
\mathbf{R}=\mathbf{\mathbf{I}}\implies \mathbf{x}=[\mathbf{v}]_{S}
\end{gather*}
$$
> note: this is a [transition](/labyrinth/notes/math/ma1522/transition_matrices) from the standard basis
### Concept
Basis
$$
\begin{gather*}
\text{for }S=\{ \mathbf{u}_{1} , \mathbf{u}_{2} , \dots , \mathbf{u}_{k} \} \\
\\
\operatorname{span}(S)=V\land S\text{ is linearly independent} \implies S\text{ is a basis for }V
\end{gather*}
$$
> every vector in $V$ can be expressed as a linear combination of the basis vectors

Relative coordinates
- the coordinates wrt. another basis
- unique linear combination of the basis vectors that maps to a vector in the standard basis

$$
\begin{gather*}
&\text{for basis }S = \left\{\mathbf u_1,\mathbf u_2,...,\mathbf u_k\right\} \\
\\
&\forall \mathbf{v} \in V \ c_1\mathbf u_1 + c_2\mathbf u_2 + \cdots + c_k\mathbf u_k=\mathbf{v} \\
\\
\mathbf{v}\text{ relative to basis }S: &[\mathbf{v}]_{S}=\begin{pmatrix}
c_{1} \\
c_{2} \\
\vdots \\
c_{k}
\end{pmatrix}
\end{gather*}
$$

Unique relative coordinate
$$
\begin{align*}
&\text{for basis }S = \left\{\mathbf u_1,\mathbf u_2,...,\mathbf u_k\right\} \\
&\text{then }\mathbf{A}=\begin{pmatrix}\mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{k}\end{pmatrix}\text{ has linearly independent columns} \\
\\
&\therefore \forall \mathbf{b}\in \mathbb{R}^n \ \mathbf{Ax}=\mathbf{b}\text{ has a unique solution} & \text{(Statements of Invertibility)}\\
\\
&\mathbf{x}=[\mathbf{v}]_{S}\text{ is the unique solution}
\end{align*}
$$
### Application
$$

$$

### Extra

