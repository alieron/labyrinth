---
tags:
- ma1522/chapter5
- math/linear_algebra
complete: false
prev: /labyrinth/notes/math/ma1522/orthogonal_bases
next: /labyrinth/notes/math/ma1522/QR_factorization
---

   

### Summary
Gram-Schmidt orthogonalization
- convert a basis into an orthogonal/orthonormal basis
$$
\begin{gather*}
S = \{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{k} \}\text{ is linearly independent} \\
\\
\begin{aligned}
\mathbf{v}_1&=\mathbf{u}_1\\
\mathbf{v}_2&=\mathbf{u}_2-\left(\frac{\mathbf{v}_1\cdot\mathbf{u}_2}{\lVert\mathbf{v}_1\rVert^2}\right)\mathbf{v}_1\\
\mathbf{v}_3&=\mathbf{u}_3-\left(\frac{\mathbf{v}_1\cdot\mathbf{u}_3}{\lVert\mathbf{v}_1\rVert^2}\right)\mathbf{v}_1-\left(\frac{\mathbf{v}_2\cdot\mathbf{u}_3}{\lVert\mathbf{v}_2\rVert^2}\right)\mathbf{v}_2\\
&\vdots \\
\mathbf{v}_k&=\mathbf{u}_k-\left(\frac{\mathbf{v}_1\cdot\mathbf{u}_k}{\lVert\mathbf{v}_1\rVert^2}\right)\mathbf{v}_1-\left(\frac{\mathbf{v}_2\cdot\mathbf{u}_k}{\lVert\mathbf{v}_2\rVert^2}\right)\mathbf{v}_2-\cdots-\left(\frac{\mathbf{v}_{k-1}\cdot \mathbf{u}_k}{\lVert\mathbf{v}_{k-1}\rVert^2}\right)\mathbf{v}_{k-1}
\end{aligned} \\
\\
\{ \mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{k} \}\text{ is a set of nonzero orthogonal vectors} \\
\\
\left\{  \frac{\mathbf{v}_{1}}{\| \mathbf{v}_{1} \| },\frac{\mathbf{v}_{2}}{\| \mathbf{v}_{2} \| },\dots,\frac{\mathbf{v}_{k}}{\| \mathbf{v}_{k} \| }  \right\}\text{ is an orthonormal set}
\end{gather*}
$$
> removing the projections of prior vectors from subsequent ones, making them orthogonal

### Concept
Orthogonal projection theorem
- projection/shadow on a subspace

$$
\begin{gather*}
\text{for }V\subseteq \mathbb{R}^n \\
\\
\forall \mathbf{w} \in \mathbb{R}^n \ \mathbf{w}=\mathbf{w}_{p}+\mathbf{w}_{n} \implies \mathbf{w}_{p}\in V\land \mathbf{w}_{n}\perp V \\
\\
\mathbf{w}_p=\frac{\mathbf{w}\cdot\mathbf{u}_1}{\mathbf{u}_1\cdot\mathbf{u}_1}\mathbf{u}_1+\frac{\mathbf{w}\cdot\mathbf{u}_2}{{\mathbf{u}_2\cdot\mathbf{u}_2}}\mathbf{u}_2+\cdots+\frac{\mathbf{w}\cdot\mathbf{u}_k}{{\mathbf{u}_k\cdot\mathbf{u}_k}}\mathbf{u}_k
\end{gather*}
$$
> the idea of [projecting a vector to another](/labyrinth/notes/math/ma1521/geometry_in_R³#^18b73e), but over the basis for a subspace

Best approximation theorem
$$
\forall \mathbf{v}\in V \ \| \mathbf{w-w}_p\| \leq \| \mathbf{w-v} \|
$$
> $\mathbf{w}_{p}$ is the closest vector in $V$ to $\mathbf{w}$

### Application
$$

$$

