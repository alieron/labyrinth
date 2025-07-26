---
tags:
- ma1522/chapter7
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/singular_value_decomposition
next: /labyrinth/notes/math/ma1522/range_&_kernel
---

   

### Summary
Properties of linear transformations
$$
\begin{align*}
&&& T\text{ is a linear transformation}\iff \\
\\
1) &&& T(\mathbf{0}) = \mathbf{0}\\
\\
2) &&& T(a\mathbf{u}) = aT(\mathbf{u})\\
\\
3) &&& T(\mathbf{u}+\mathbf{v})=T(\mathbf{u})+T(\mathbf{v})
\end{align*}
$$
> similarities to [subspaces](/labyrinth/notes/math/ma1522/subspaces)

Transformation with respect to basis
$$
\left(\begin{array}{c|c} S & \mathbf{A} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{I} & [T]_{s} \end{array}\right)\\
$$

### Concept
Linear transformations
- [function relations](/labyrinth/notes/math/cs1231s/function_relations) over multi-dimensional space

$$

T: \mathbb{R}^n\to \mathbb{R}^m
$$

Matrix representation/standard matrix
- matrix premultiplication is a linear transformation
- [transition matrix from standard basis](/labyrinth/notes/math/ma1522/transition_matrices#^b69bf6)

$$
\begin{gather*}
\forall \mathbf{u} \in \mathbb{R}^n \ T(\mathbf{u})=\mathbf{A}_{m\times n}\mathbf{u} \\
\\
\mathbf{A} = \begin{pmatrix}
T(\mathbf{e}_{1}) & T(\mathbf{e}_{2}) & \dots & T(\mathbf{e}_{n})
\end{pmatrix}
\end{gather*}
$$

Linear transformation with respect to basis
$$
\begin{gather*}
S = \{ \mathbf{u}_{1}, \mathbf{u}_{2},\dots,\mathbf{u}_{n} \} \\
\\
[T]_{S}=\begin{pmatrix}
T(\mathbf{u}_{1}) & T(\mathbf{u}_{2}) & \dots & T(\mathbf{u}_{n})
\end{pmatrix}
\end{gather*}
$$

[Transition matrix](/labyrinth/notes/math/ma1522/transition_matrices)
$$
\begin{align*}
T(\mathbf{v})& = [T]_{S}[\mathbf{v}]_{S} \\
& = [T]_{S}\mathbf{P}_{E\to S}\mathbf{v} \\
\\
\mathbf{Av}& =[T]_{S}\mathbf{P}_{E\to S}\mathbf{v} \\
\mathbf{A}& =[T]_{S}\mathbf{P}_{E\to S} \\
\end{align*}
$$
> follow the order, premultiplication

### Application
Identifying the standard matrix
$$
\begin{gather*}
T\left(\begin{pmatrix}
x \\
y
\end{pmatrix}\right)=\begin{pmatrix}
x+y \\
x-y \\
2y
\end{pmatrix} \\
\\
\mathbf{A}\begin{pmatrix}
x \\
y
\end{pmatrix}=\begin{pmatrix}
x+y \\
x-y \\
2y
\end{pmatrix}=x\begin{pmatrix}
1 \\
1 \\
0
\end{pmatrix}+y\begin{pmatrix}
1 \\
-1 \\
2
\end{pmatrix} \\
\\
\mathbf{A}=\begin{pmatrix}
1 & 1 \\
1 & -1 \\
0 & 2
\end{pmatrix}
\end{gather*}
$$