---
tags:
- ma1522/chapter3
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/linear_combinations
next: /labyrinth/notes/math/ma1522/linear_independence
---

   

### Summary
Properties of a subspace
$$
\begin{align*}
&&& V\text{ is a subspace }\iff \\
\\
1) &&& \mathbf{0}\in V && \text{(Contains Zero)} \\
1') &&& V \neq \varnothing \\
2) &&& \forall \mathbf{v}\in V\ \forall a \in \mathbb{R}\ a\mathbf{v}\in V && \text{(Closed under Scalar Multiplication)} \\
3) &&& \forall \mathbf{v},\mathbf{u}\in V\ \mathbf{v}+\mathbf{u}\in V && \text{(Closed under Addition)}
\end{align*}
$$
> system must be consistent, for its solution set to be a subspace

Solution set of homogeneous systems
- solution space/is a subspace

$$
\{\begin{array}{c|c} \mathbf{u}\in R^n & \mathbf{Au}=\mathbf{b} \end{array}\}\text{ is a subspace} \iff \mathbf{b}=\mathbf{0}
$$

Checking if a vector is in a subspace
- check if the corresponding x,y,z values correspond to 

### Concept
Solution set to a linear system
$$
\begin{align*}
\text{Implicit:}&&& \{\begin{array}{c|c} \mathbf{u}\in R^n & \mathbf{Au}=\mathbf{b} \end{array}\} \\
\\
\text{Explicit:}&&& \{\begin{array}{c|c} \mathbf{u} + c_{1}\mathbf{v}_{2}+c_{2}\mathbf{v}_{2}+\dots c_{n}\mathbf{v}_{n} & \forall c_{1},c_{2},\dots ,c_{n}\in \mathbb{R} \end{array}\}
\end{align*}
$$
> solution set is not neccesarily a subspace

Solution set of an inconsistent system
$$
\begin{gather*}
\mathbf{Ax}=\mathbf{b}\text{ is inconsistent}\iff\mathbf{Ax}=\mathbf{b}\text{ has no solutions} \\
\\
\therefore \{\begin{array}{c|c} \mathbf{u}\in \mathbb{R}^n & \mathbf{Au}=\mathbf{b} \end{array}\}=\varnothing
\end{gather*}
$$

Subspace is a span
$$
V\text{ is a subspace}\iff \exists S=\{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{k} \}  \ V=\operatorname{span}(S)
$$

Affine spaces
- similar to [relation between homogeneous and non-homogeneous systems](/labyrinth/notes/math/ma1522/matrix_equations#^e53cfd)
- its displacement is the particular solution 

$$
\begin{align*}
W & =\{\begin{array}{c|c} \mathbf{w} & \mathbf{Aw}=\mathbf{b} \end{array}\}, \quad \mathbf{b}\neq \mathbf{0} &&\text{non-homogeneous system} \\
& = \mathbf{u} +V:=\{\begin{array}{c|c} \mathbf{u}+\mathbf{v} & \forall \mathbf{v}\in V \end{array}\}, \quad V = \{\begin{array}{c|c} \mathbf{v} & \mathbf{Av} = \mathbf{0} \end{array}\}\\
\\
\mathbf{u}\text{ is a }&\text{displacement from the origin} \\
&\text{and }\mathbf{Au}=\mathbf{b}
\end{align*}
$$
> visualise a plane that doesn't pass through the origin

### Application
Converting between implicit and explicit forms
$$
\begin{align*}
\text{Implicit:} &&& \left\{\begin{array}{c|c} \begin{pmatrix}
x \\ y \\ z\end{pmatrix} & 3x+2y-z=1,y-z=0 \end{array}\right\} \\
\\
&&& \left(\begin{array}{c c c | c}
3 & 2 & -1 & 1 \\
0 & 1 & -1 & 0
\end{array}\right) \to \left(\begin{array}{c c c | c}
3 & 0 & 1 & 1 \\
0 & 1 & -1 & 0
\end{array}\right) \to \left(\begin{array}{c c c | c}
3 & 0 & 1 & 1 \\
0 & 1 & -1 & 0 \\
0 & 0 & 1 & s
\end{array}\right) \to \left(\begin{array}{c c c | c}
1 & 0 & 0 & \frac{1-s}{3} \\
0 & 1 & 0 & s \\
0 & 0 & 1 & s
\end{array}\right) && \text{finding the general solution} \\
\\
\text{Explicit:} &&& \left\{ \begin{array}{c|c} \begin{pmatrix}
\frac{1}{3} \\ 0 \\ 0\end{pmatrix} +s\begin{pmatrix}
-\frac{1}{3} \\ 1 \\ 1
\end{pmatrix} & \forall s \in \mathbb{R} \end{array} \right\} \quad \text{since the solution space is not a span, it is not a subspace} \\
\\
\\
\\
\text{Explicit:} &&& \left\{\begin{array}{c|c} \begin{pmatrix}
s \\ t \\ s+t \end{pmatrix} & \forall s,t\in \mathbb{R} \end{array}\right\} = \left\{\begin{array}{c|c} s\begin{pmatrix}1 \\ 0 \\ 1\end{pmatrix}+t\begin{pmatrix}0 \\1 \\1\end{pmatrix} & \forall s,t\in \mathbb{R} \end{array}\right\}\\
\\
&&& \begin{split}
&x=s+0 &\quad& y=0+t &\quad& z=s+t \\
&s=x&&t=y \\
& \therefore z = x+y
\end{split} && \text{finding the system in standard form} \\
\\
\text{Implicit:} &&& \left\{\begin{array}{c|c} \begin{pmatrix}
x \\ y \\ z\end{pmatrix} & z=x+y \end{array}\right\}=\left\{\begin{array}{c|c} \begin{pmatrix}
x \\ y \\ z\end{pmatrix} & x+y-z=0 \end{array}\right\}
\end{align*}
$$

Proving that a span is equal to a subspace
$$
\begin{align*}
& W = \left\{\begin{array}{c|c} \begin{pmatrix}
x \\ y \\ z\end{pmatrix} & z=x+y \end{array}\right\}=\left\{\begin{array}{c|c} s\begin{pmatrix}1 \\ 0 \\ 1\end{pmatrix}+t\begin{pmatrix}0 \\1 \\1\end{pmatrix} & \forall s,t\in \mathbb{R} \end{array}\right\} \\
& S = \left\{ \begin{pmatrix}1 \\0 \\1\end{pmatrix},\begin{pmatrix}0 \\1 \\1\end{pmatrix},\begin{pmatrix}1 \\1 \\2\end{pmatrix} \right\} \\
\\
\text{Show: } & \operatorname{span}(S) = W \\
\\
(\subseteq) \ & \forall \begin{pmatrix}x \\ y \\ z\end{pmatrix}\in S \ z=x+y && \text{ for all the vectors that define the span} \\
& \begin{pmatrix}1 \\0 \\1\end{pmatrix}:1=1+0 \quad \begin{pmatrix}0 \\1 \\1\end{pmatrix}:1=0+1 \quad \begin{pmatrix}1 \\1 \\2\end{pmatrix}:2=1+1 \\
\\
&\therefore \operatorname{span}(S) \subseteq W && \text{the vectors in the span are in }W \\
\\
(\supseteq) \ & \left(\begin{array}{c c c | c c}
1 & 0 & 1 & 1 & 0 \\
0 & 1 & 1 & 0 & 1 \\
1 & 1 & 2 & 1 & 1
\end{array}\right) \to \left(\begin{array}{c c c | c c}
1 & 0 & 1 & 1 & 0 \\
0 & 1 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)\text{ is consistent} && \text{check if the vectors in the general solution are in the span} \\
\\
&\therefore W\subseteq \operatorname{span}(S)
\end{align*}
$$
> note: the subspace defines a plane, which is defined by 2 [basis vectors](/labyrinth/notes/math/ma1522/basis_vectors), therefore S is not [linearly independent](/labyrinth/notes/math/ma1522/linear_independence)

Affine spaces
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix}-1&1&2&1\\3&3&6&9\\3&-1&-2&1\end{pmatrix} \\
\\
\left(\begin{array}{cccc|c}-1&1&2&1&0\\3&3&6&9&0\\3&-1&-2&1&0\end{array}\right)\xrightarrow{RREF} \left(\begin{array}{cccc|c}1&0&0&1&0\\0&1&2&2&0\\0&0&0&0&0\end{array}\right) \\
\\
V=\left\{\begin{array}{c|c}s\begin{pmatrix}0\\-2\\1\\0\end{pmatrix}+t\begin{pmatrix}-1\\-2\\0\\1\end{pmatrix}& s,t\in\mathbb{R}\end{array}\right\}=\text{span}\left\{\begin{pmatrix}0\\-2\\1\\0\end{pmatrix},\begin{pmatrix}-1\\-2\\0\\1\end{pmatrix}\right\} & \text{solution space for the homogeneous system}\\ \\
\text{for }\mathbf{b}=\begin{pmatrix}3\\3\\-5\end{pmatrix} \\
\\
\left(\begin{array}{cccc|c}-1&1&2&1&3\\3&3&6&9&3\\3&-1&-2&1&-5\end{array}\right)\xrightarrow{RREF} \left(\begin{array}{cccc|c}1&0&0&1&-1\\0&1&2&2&2\\0&0&0&0&0\end{array}\right) \\
\\
W=\left\{\begin{array}{c|c}\begin{pmatrix}-1\\2\\0\\0\end{pmatrix}+s\begin{pmatrix}0\\-2\\1\\0\end{pmatrix}+t\begin{pmatrix}-1\\-2\\0\\1\end{pmatrix}& s,t\in\mathbb{R}\end{array}\right\}=\underbrace{ \begin{pmatrix}-1\\2\\0\\0\end{pmatrix} }_{ \text{Displacement} }+\text{span}\left\{\begin{pmatrix}0\\-2\\1\\0\end{pmatrix},\begin{pmatrix}-1\\-2\\0\\1\end{pmatrix}\right\} \\
\end{gather*}
$$