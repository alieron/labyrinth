---
tags:
- ma1522/chapter4
- math/linear_algebra
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1522/dimensions)   [Next](/labyrinth/notes/math/ma1522/orthogonality)

### Summary
Column space
- output space of the matrix, set of all vectors with solutions

$$
\operatorname{Col}(\mathbf{A})=\{\begin{array}{c|c}\mathbf{v}=\mathbf{Ax}&\mathbf{x}\in\mathbb{R}^n\end{array}\}=\{\begin{array}{l|l}\mathbf{v}&\mathbf{Ax=v}\text{ is consistent}\end{array}\}
$$
> the space that any vector in $\mathbb{R}^n$ gets mapped to by the matrix

Relation to [matrix multiplication](/labyrinth/notes/math/ma1522/matrix_multiplication)
$$
\begin{gather*}
\operatorname{Col}(\mathbf{AB})\subseteq\operatorname{Col}(\mathbf{A}) \\
\\
\operatorname{rank}(\mathbf{AB})\leq \min(\operatorname{rank}(\mathbf{A}),\operatorname{rank}(\mathbf{B}))
\end{gather*}
$$

Rank-nullity theorem
$$
\begin{gather*}
\operatorname{rank}(\mathbf{A})&+&\operatorname{nullity}(\mathbf{A})&=&m\\
\text{no. pivot cols} &+& \text{no. non-pivot} &=& \text{total no. columns}
\end{gather*}
$$

[Equivalent statements of invertibility](/labyrinth/notes/math/ma1522/inverse_of_square_matrices#^468393)
$$
\begin{align*}
&&& \mathbf{A}\text{ is invertible} \iff\\
\\
11) &&& \operatorname{rank}(\mathbf{A}) = n \quad \text{ie. }\mathbf{A}\text{ is of full rank} \\
\\
12) &&& \operatorname{nullity}(\mathbf{A})=0
\end{align*}
$$
> for a square matrix $n=m$

### Concept
For any given matrix
$$
\mathbf{A}_{{n\times m}}=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1m}\\a_{21}&a_{22}&\cdots&a_{2m}\\\vdots&\vdots&\ddots&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nm}\end{pmatrix}
$$

Row space
$$
\operatorname{Row}(\mathbf{A})\subseteq \mathbb{R}^m=\operatorname{span}\{\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1m}\end{pmatrix},\begin{pmatrix}a_{21}&a_{22}&\cdots&a_{2m}\end{pmatrix},...,\begin{pmatrix}a_{n1}&a_{n2}&\cdots&a_{nm}\end{pmatrix}\}
$$

Basis of row space
- nonzero rows in rref
- since, two row equivalent matrices have the same rowspace

Column space
$$
\operatorname{Col}(\mathbf{A})\subseteq \mathbb{R}^n=\text{span}\left\{ \begin{pmatrix}a_{11}\\a_{21}\\\vdots\\a_{n1}\end{pmatrix},\begin{pmatrix}a_{12}\\a_{22}\\\vdots\\a_{n2}\end{pmatrix},...,\begin{pmatrix}a_{1m}\\a_{2m}\\\vdots\\a_{nm}\end{pmatrix}\right\}
$$

Basis of column space
- original columns that correspond to pivot columns in rref
- since, row operations preserve linear relations between columns

Rank
- dimension of the codomain space, how much does the matrix squish its original space
- preserved with transpose

$$
\begin{align*}
\operatorname{rank}(\mathbf{A})&={\color{orange}\dim(\operatorname{Col}(\mathbf{A}))}\\
&= \text{no. of pivot columns} \\
&= \text{no. of pivot entries} \\
&= \text{no. of nonzero rows} \\
&= {\color{orange}\dim(\operatorname{Row}(\mathbf{A}))} \\
\\
\operatorname{rank}(\mathbf{A}_{m\times n}) & \leq \min(m,n) \\
\\
\therefore \operatorname{rank}(\mathbf{A})&=\operatorname{rank}(\mathbf{A}^T)
\end{align*}
$$

Rank of augmented matrix
$$
\mathbf{Ax}=\mathbf{b}\text{ is consistent} \iff \operatorname{rank}(\mathbf{A})=\operatorname{rank}((\begin{array}{c|c}\mathbf{A}&\mathbf{b}\end{array}))
$$

Nullspace ^b3921a
- solution space to the homogeneous system
- set of vectors that become null after transformation
- [intersection](/labyrinth/notes/math/ma1522/matrix_equations#^db80b8) of the linear equations when they are 0

$$
\operatorname{Null}(\mathbf{A})=\{\begin{array}{c|c}\mathbf{x}\in\mathbb R^n&\mathbf{Ax}=\mathbf{0}\end{array}\}
$$
> nontrivial solutions to homogeneous system

[Dimension](/labyrinth/notes/math/ma1522/dimensions#^a42fe0) of nullspace
$$
\operatorname{nullity}(\mathbf{A})=\dim(\operatorname{Null}(\mathbf{A}))
$$
> the number of non-pivot columns or parameters in the general solution

### Application
Spaces of a given matrix
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix}2&1&4&1&2\\4&2&2&3&2\\2&1&-2&2&0\\6&3&6&4&4\end{pmatrix}\xrightarrow{RREF}\mathbf{R}=\begin{pmatrix}1&\frac{1}{2}&0&\frac{5}{6}&\frac{1}{3}\\0&0&1&-\frac{1}{6}&\frac{1}{3}\\0&0&0&0&0\\0&0&0&0&0\end{pmatrix}\\
\\
\operatorname{Row}(\mathbf{A})=\operatorname{span}\left\{ \begin{pmatrix}\frac{1}{2}&0&\frac{5}{6}&\frac{1}{3}\end{pmatrix},\begin{pmatrix}0&0&1&-\frac{1}{6}&\frac{1}{3}\end{pmatrix} \right\}, \quad \operatorname{rank}(\mathbf{A})=2\\
\\
\operatorname{Col}(\mathbf{A})=\operatorname{span}\left\{\begin{pmatrix}2 \\4 \\2 \\6\end{pmatrix}, \begin{pmatrix}4 \\2 \\-2 \\6\end{pmatrix} \right\}\\
\\
\text{isolating non-pivot columns and adding unknowns:}\\
\left(\begin{array}{ccc|c}
\frac{1}{2} & \frac{5}{6} & \frac{1}{2} & 0 \\
0 & -\frac{1}{6} & \frac{1}{3} & 0 \\
1 & 0 & 0 & r \\
0 & 1 & 0 & s \\
0 & 0 & 1 & t
\end{array}\right)\implies r\begin{pmatrix}-\frac{1}{2} \\0 \\1 \\0 \\0\end{pmatrix}+s\begin{pmatrix}-\frac{5}{6} \\\frac{1}{6} \\0 \\1 \\0\end{pmatrix}+t\begin{pmatrix}-\frac{1}{2} \\-\frac{1}{3} \\0 \\0 \\1\end{pmatrix} \qquad \text{(General Solution)}\\
\\
\operatorname{Null}(\mathbf{A})=\operatorname{span}\left\{\begin{pmatrix}-\frac{1}{2} \\0 \\1 \\0 \\0\end{pmatrix},\begin{pmatrix}-\frac{5}{6} \\\frac{1}{6} \\0 \\1 \\0\end{pmatrix},\begin{pmatrix}-\frac{1}{2} \\-\frac{1}{3} \\0 \\0 \\1\end{pmatrix}\right\}, \ \operatorname{nullity}(\mathbf{A})=3
\end{gather*}
$$

Rowspace is [orthogonal](/labyrinth/notes/math/ma1522/orthogonality) to nullspace
$$
\begin{gather*}
\begin{pmatrix}
1 & 2 & 4 \\
2 & -3 & 1 \\
2 & 1 & 5
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}=\begin{pmatrix}
0 \\
0 \\
0
\end{pmatrix} & \text{(homogeneous System)} \\
\\
\begin{pmatrix}
1 & 2 & 4 \\
2 & -3 & 1 \\
2 & 1 & 5
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}=\begin{pmatrix}
\begin{pmatrix}
1 & 2 & 4
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z
\end{pmatrix} \\
\begin{pmatrix}
2 & -3 & 1
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z
\end{pmatrix} \\
\begin{pmatrix}
2 & 1 & 5
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}
\end{pmatrix} & \text{(Block Multiplication)} \\
\\
\begin{pmatrix}
1 & 2 & 4
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}=\begin{pmatrix}
1 \\
2 \\
4
\end{pmatrix}\cdot\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}=0, \ \therefore \begin{pmatrix}
1 \\
2 \\
4
\end{pmatrix}\perp\begin{pmatrix}
x \\
y \\
z
\end{pmatrix} & \text{(Inner Product)}\\
\\
\text{similarly for all rows}\\
\\
\therefore \operatorname{Row}\begin{pmatrix}
1 & 2 & 4 \\
2 & -3 & 1 \\
2 & 1 & 5
\end{pmatrix}\perp \operatorname{Null}\begin{pmatrix}
1 & 2 & 4 \\
2 & -3 & 1 \\
2 & 1 & 5
\end{pmatrix}
\end{gather*}
$$

Check if vector is in rowspace, using nullspace
$$
\begin{gather*}
\text{given }\operatorname{Null}(\mathbf{A})=\operatorname{span}\left\{\begin{pmatrix}
1 \\
1 \\
1 \\
1
\end{pmatrix}\right\} \\
\\
\text{is }\begin{pmatrix}
1 & 3 & -6 & 2
\end{pmatrix} \in \operatorname{Row}(\mathbf{A}) \text{?}\\
\\
\forall s \in \mathbb{R} \ \begin{pmatrix}
1 & 3 & -6 & 2
\end{pmatrix}s\begin{pmatrix}
1 \\
1 \\
1 \\
1
\end{pmatrix} = 0 \\
\\
\therefore \begin{pmatrix}
1 \\
3 \\
-6 \\
2
\end{pmatrix}\perp s\begin{pmatrix}
1 \\
1 \\
1 \\
1
\end{pmatrix}\implies \begin{pmatrix}
1 & 3 & -6 & 2
\end{pmatrix} \in \operatorname{Row}(\mathbf{A})
\end{gather*}
$$