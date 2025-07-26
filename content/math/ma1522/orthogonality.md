---
tags:
- ma1522/chapter5
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/matrix_spaces
next: /labyrinth/notes/math/ma1522/orthogonal_bases
---

   

### Summary
Orthogonal set
- vectors are pairwise orthogonal

$$
S=\{\mathbf{v}_1,\mathbf{v}_2,...,\mathbf{v}_k\}\text{ is orthogonal if for every }i\neq j, \quad \mathbf{v}_i\cdot\mathbf{v}_j=0
$$
> can include the 0 vector

Orthonornal set
- orthogonal and [normalised](/labyrinth/notes/math/ma1301/unit_vectors#^43f21a)

$$
S=\{\mathbf{v}_1,\mathbf{v}_2,...,\mathbf{v}_k\}\text{ is orthogonal if for every }i, j=1,\dots,k, \quad \mathbf{v}_i\cdot\mathbf{v}_j=\begin{cases}0 &\text{ if }i\neq j\\1&\text{ if }i=j\end{cases}
$$
> magnitude of 1

Algorithm to check for orthogonality to a subspace
$$
\mathbf{A}^T\mathbf{v}=\mathbf{0} \implies \mathbf{v}\in \operatorname{Null}(\mathbf{A})
$$

### Concept
Orthogonal vectors
$$
\mathbf{u}\cdot \mathbf{v}=0
$$
> ie. either is the zero vector or two vectors are perpendicular

Orthogonal to subspaces
- perpendicular to every vector

$$
\text{for }V\subseteq \mathbb{R}^n \ \mathbf{n}\in \mathbb{R}^n \quad \forall \mathbf{v}\in V\ \mathbf{v}\cdot \mathbf{n}=0\to\mathbf{n}\perp V
$$
- relation to [nullspace](/labyrinth/notes/math/ma1522/matrix_spaces#^b3921a) of the [matrix transpose](/labyrinth/notes/math/ma1522/matrix_transpose)

$$
\mathbf{w}\perp V \iff \mathbf{w}\in \operatorname{Null}(\mathbf{A}^T)
$$
> $\mathbf{A}$ is a matrix of the basis of $V$, simultaneously $V=\operatorname{Col}(\mathbf{A})$

Orthogonal complement
- set of all orthogonal vectors

$$
\begin{align*}
V^\perp & =\{\begin{array}{c|c}\mathbf{w}\in\mathbb{R}^n & \forall \mathbf{v}\in V \ \mathbf{w}\cdot \mathbf{v}=0 \end{array}\}\\
\\
& = \{\begin{array}{c|c}\mathbf{w}\in\mathbb{R}^n & \forall \mathbf{v}\in V \ \mathbf{v}^T\mathbf{w}=0 \end{array}\}\\
\\
& = \{\begin{array}{c|c}\mathbf{w}\in\mathbb{R}^n & \mathbf{A}^T\mathbf{w}=0 \end{array}\}\\
\\
& = \operatorname{Null}(\mathbf{A}^T)
\end{align*}
$$

### Application
Normalising an orthogonal set
$$
\begin{gather*}
\left\{\begin{pmatrix}0\\1\\0\end{pmatrix},\begin{pmatrix}1\\0\\1\end{pmatrix},\begin{pmatrix}1 \\0\\-1\end{pmatrix}\right\}&\text{ is orthogonal, but }\mathbf{v_{2}}\cdot\mathbf{v_{2}}=2\neq1 \\
\\
\left\{\begin{pmatrix}0\\1\\0\end{pmatrix},\frac{1}{\sqrt{2}}\begin{pmatrix}1\\0\\1\end{pmatrix},\frac{1}{\sqrt{2}}\begin{pmatrix}1 \\0\\-1\end{pmatrix}\right\}&\text{is orthonormal}
\end{gather*}
$$

Vector orthogonal to a subspace
$$
\begin{gather*}
V=\operatorname{span}\left\{ \mathbf{u_{1}}=\begin{pmatrix}1 \\1 \\1 \\2\end{pmatrix}, \mathbf{u_{2}}=\begin{pmatrix}0 \\1 \\-1 \\0\end{pmatrix} \right\}, \ \mathbf{w}=\begin{pmatrix}a \\ b \\ c \\ d \\\end{pmatrix} \\
\\
\mathbf{w}\perp V \iff \mathbf{w}\cdot \mathbf{u_{1}}=0 \land \mathbf{w}\cdot \mathbf{u_{2}}=0 \\
\\
\text{so}\quad\begin{cases}
a &+& b &+& c &+& 2d &=& 0 \\
&& b &-& c && &=& 0 \\
\end{cases}\qquad\text{or}\qquad\begin{pmatrix}
1 & 1 & 1 & 2 \\
0 & 1 & -1 & 0
\end{pmatrix}\mathbf{w}=\mathbf{0} \\
\\
\left(\begin{array}{cccc|c}1&1&1&2&0\\0&1&-1&0&0\end{array}\right)\to\left(\begin{array}{cccc|c}1&0&2&2&0\\0&1&-1&0&0\end{array}\right)\\
\\
\left(\begin{array}{cc|c}2&2&0\\-1&0&0\\1&0&s\\0&1&t\end{array}\right)\implies s\begin{pmatrix}-2\\1\\1\\0\end{pmatrix}+t\begin{pmatrix}-2\\0\\0\\1\end{pmatrix}\\
\\
\therefore\mathbf{w}\perp V\iff \mathbf{w}\in V^\perp=\operatorname{span}\left\{\begin{pmatrix}-2\\1\\1\\0\end{pmatrix},\begin{pmatrix}-2\\0\\0\\1\end{pmatrix}\right\}\text{ which corresponds to }\operatorname{Null}((\mathbf{u_{1}}\ \mathbf{u_{2}})^T)
\end{gather*}
$$
> hence the transpose before the nullspace, due to the [inner product](/labyrinth/notes/math/ma1522/vectors_in_Rⁿ)

Orthogonality of [hyperplanes](/labyrinth/notes/math/ma1301/planes_in_R³)
- span of the normal makes up the orthogonal complement of a plane

$$
\begin{gather*}
V=\left\{\begin{array}{c|c}\begin{pmatrix}x\\y\\z\end{pmatrix}&2x-y+3z=0\end{array}\right\} \\
\\
\text{recall the eqn of a plane is given as: }\mathbf{v}\cdot \mathbf{n}=d\\
\\
\begin{pmatrix}x \\ y \\ z\end{pmatrix}\cdot \mathbf{n}=x-y+3z=0 \\
\mathbf{n}=\begin{pmatrix}2 \\ -1 \\ 3\end{pmatrix} \\
\\
\therefore \forall \mathbf{v} \in V \ \mathbf{v}\cdot \mathbf{n}=0\\
\\
V^\perp=\operatorname{span}\{\mathbf{n}\}
\end{gather*}
$$

Rowspace is orthogonal to nullspace
$$
\begin{gather*}
\mathbf{r} \text{ are rows vectors, representing the rows of }\mathbf{A} \\
\\
\forall \mathbf{x}\in \operatorname{Row}(\mathbf{A})^T \ \mathbf{Ax}=\begin{pmatrix}
\mathbf{r}_{1} \\
\mathbf{r}_{2} \\
\vdots \\
\mathbf{r}_{n}
\end{pmatrix}\mathbf{x}=\begin{pmatrix}
\mathbf{r}_{1} \mathbf{x} \\
\mathbf{r}_{2} \mathbf{x} \\
\vdots \\
\mathbf{r}_{n} \mathbf{x}
\end{pmatrix}=\mathbf{0} & \mathbf{x}\text{ is orthogonal to the Rowspace} \\
\\
\mathbf{Ax}=\mathbf{0} \implies \mathbf{x}\in \operatorname{Null}(\mathbf{A}) \\
\therefore \operatorname{Row}(\mathbf{A})^T\subseteq\operatorname{Null}(\mathbf{A}) \\
\\
\forall \mathbf{x} \in \operatorname{Null}(\mathbf{A}) \ \mathbf{Ax}=\mathbf{0} \\
\\
\text{satisfies the equation above}\\
\therefore \operatorname{Null}(\mathbf{A})\subseteq\operatorname{Row}(\mathbf{A})^T 
\end{gather*}
$$