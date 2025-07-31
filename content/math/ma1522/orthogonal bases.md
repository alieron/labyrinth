---
tags:
- ma1522/chapter5
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/orthogonality
next: /labyrinth/notes/math/ma1522/orthogonal_projection
---
   
### Summary
Relative coordinates to an orthogonal basis ^ffe6f8
$$
\begin{gather*}
\forall \mathbf{v} \in V \ \mathbf{v}=\left( \frac{\mathbf{v}\cdot \mathbf{u}_{1}}{\mathbf{u}_{1}\cdot \mathbf{u}_{1}} \right)\mathbf u_1 + \left( \frac{\mathbf{v}\cdot \mathbf{u}_{2}}{\mathbf{u}_{2}\cdot \mathbf{u}_{2}} \right)\mathbf u_2 + \cdots + \left( \frac{\mathbf{v}\cdot \mathbf{u}_{k}}{\mathbf{u}_{k}\cdot \mathbf{u}_{k}} \right)\mathbf u_k \\
\\
[\mathbf{v}]_{S}=\begin{pmatrix}
\left( \frac{\mathbf{v}\cdot \mathbf{u}_{1}}{\mathbf{u}_{1}\cdot \mathbf{u}_{1}} \right) \\
\left( \frac{\mathbf{v}\cdot \mathbf{u}_{2}}{\mathbf{u}_{2}\cdot \mathbf{u}_{2}} \right) \\
\vdots \\
\left( \frac{\mathbf{v}\cdot \mathbf{u}_{k}}{\mathbf{u}_{k}\cdot \mathbf{u}_{k}} \right)
\end{pmatrix}
\end{gather*}
$$

Relative coordinates to an orthonormal basis
$$
\begin{gather*}
\forall \mathbf{v} \in V \ \mathbf{v}=(\mathbf{v}\cdot \mathbf{u}_{1})\mathbf u_1 + (\mathbf{v}\cdot \mathbf{u}_{2})\mathbf u_2 + \cdots + (\mathbf{v}\cdot \mathbf{u}_{k})\mathbf u_k \\
\\
[\mathbf{v}]_{S}=\begin{pmatrix}
(\mathbf{v}\cdot \mathbf{u}_{1}) \\
(\mathbf{v}\cdot \mathbf{u}_{2}) \\
\vdots \\
(\mathbf{v}\cdot \mathbf{u}_{k})
\end{pmatrix}
\end{gather*}
$$

Orthogonal matrices
$$
\begin{align*}
&&& \mathbf{A}\text{ is orthogonal}\iff\\
\\
1)&&& \mathbf{A}^T=\mathbf{A}^{-1}\implies \mathbf{A}^T\mathbf{A}=\mathbf{I}=\mathbf{AA}^T \\
\\
2)&&& \text{columns of }\mathbf{A}\text{ is an orthonormal basis of }\mathbb{R}^n \\
\\
3)&&& \text{rows of }\mathbf{A}\text{ is an orthonormal basis of }\mathbb{R}^n
\end{align*}
$$
### Concept
Orthogonality and [linear independence](/labyrinth/notes/math/ma1522/linear_independence)
- not every orthogonal set is linearly independent -> can contain the 0 vector
- every orthonormal set is linearly independent

$$
\begin{align*}
& S\text{ is an orthogonal set}\land \mathbf{0}\not\in S \implies S\text{ is linearly independent} \\
\\
& \text{for }S=\{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{n} \} \\
\\
& \text{Suppose }c_{1}\mathbf{u}_{1}+c_{2}\mathbf{u}_{2}+\dots+c_{n}\mathbf{u}_{n}=0 \\
& \text{then }\forall i < n \\
& \quad \begin{aligned}
0 & = \mathbf{u}_{i}\cdot(c_{1}\mathbf{u}_{1}+c_{2}\mathbf{u}_{2}+\dots+c_{n}\mathbf{u}_{n})\\
0 & = \cancel{ c_{1}\mathbf{u}_{i}\cdot\mathbf{u}_{1} }+ \cancel{ c_{2}\mathbf{u}_{i}\cdot\mathbf{u}_{2} }+\dots+c_{i}\mathbf{u}_{i}\cdot\mathbf{u}_{i}+\dots+\cancel{ c_{n}\mathbf{u}_{i}\cdot\mathbf{u}_{n} } &\quad&\text{(}\mathbf{u}_{i}\text{ is perpendicular to the other vectors)} \\
0 & = c_{i}\| \mathbf{u}_{i} \|^{2} \\
\\
&\mathbf{u}_{i}\neq \mathbf{0}\implies \| \mathbf{u}_{i} \|^{2}>0 \implies c_{i}=0
\end{aligned} \\
\\
& \therefore c_{1}\mathbf{u}_{1}+c_{2}\mathbf{u}_{2}+\dots+c_{n}\mathbf{u}_{n}=0 \implies \forall i \ c_{i}=0 \implies \text{linearly independent}
\end{align*}
$$

Orthogonal/orthonormal basis
- if the orthogonal set spans a subspace
- similar properties to the standard basis

Orthogonal matrices preserve norm
$$
\begin{gather*}
\| \mathbf{Qx} \|=\| \mathbf{x} \| \\
\\
\begin{aligned}
\| \mathbf{Qx} \|^{2} & = (\mathbf{Qx})^T \mathbf{Qx} \\
& = \mathbf{x}^T\mathbf{Q}^T\mathbf{Qx} \\ 
& = \mathbf{x}^T\mathbf{I}\mathbf{x} &&\text{(Orthogonal matrices)} \\
& = \mathbf{x}^T\mathbf{x} \\
& = \mathbf{x}\cdot \mathbf{x} = \| \mathbf{x} \| ^{2}
\end{aligned}
\end{gather*}
$$
> orthogonal matrices do not scale

Core idea of orthogonal matrices
$$
\begin{gather*}
\mathbf{Q}^T\mathbf{Q}=\begin{pmatrix}
\mathbf{q}_{1}^T \\
\mathbf{q}_{2}^T \\
\vdots \\
\mathbf{q}_{n}^T
\end{pmatrix}\begin{pmatrix}
\mathbf{q}_{1} & \mathbf{q}_{2} & \dots & \mathbf{q}_{n}
\end{pmatrix}=(\mathbf{q}_{i}^T\mathbf{q}_{j}) \\
\\
\{ \mathbf{q}_{1}, \mathbf{q}_{2},\dots, \mathbf{q}_{n} \}\text{ is an orthonormal set} \\
\mathbf{q}_{i}^T\mathbf{q}_{j}=1 \iff i=j \\
\\
\therefore \mathbf{Q}^T\mathbf{Q}= \mathbf{I}
\end{gather*}
$$

Product of orthogonal matrices is orthogonal
$$
\begin{align*}
(\mathbf{AB})^T\mathbf{AB} & = \mathbf{B}^T\mathbf{A}^T\mathbf{AB} \\
& = \mathbf{B}^T\mathbf{B} \\
& = \mathbf{I}
\end{align*}
$$

[Determinants](/labyrinth/notes/math/ma1522/determinants) of orthogonal matrices
$$
\begin{align*}
\det(\mathbf{Q}^T\mathbf{Q})& =\det(\mathbf{I}) = 1 \\
\det(\mathbf{Q}^T)\det(\mathbf{Q}) & =1 \\
\det(\mathbf{Q})^{2}& =1 \\
\det(\mathbf{Q}) & = \pm \sqrt{ 1 }= \pm1
\end{align*}
$$
### Application
Relative coordinates
$$
\begin{gather*}
S = \{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{n} \} \text{ is an orthonormal basis for }V \\
\\
\text{for }\mathbf{v},\mathbf{w}\in V \\
\\
\text{Let }\mathbf{Q}=\begin{pmatrix}
\mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{n} 
\end{pmatrix} \\
\\
\begin{aligned}[]
\mathbf{v}\cdot\mathbf{w} & = \mathbf{Q}[\mathbf{v}]_{S}\cdot \mathbf{Q}[\mathbf{w}]_{S} \\
& = (\mathbf{Q}[\mathbf{v}]_{S})^T \mathbf{Q}[\mathbf{w}]_{S} \\
& = ([\mathbf{v}]_{S})^T \mathbf{Q}^T\mathbf{Q}[\mathbf{w}]_{S} \\
& = ([\mathbf{v}]_{S})^T\mathbf{I}[\mathbf{w}]_{S} & \text{(Orthogonal matrices)} \\
& = ([\mathbf{v}]_{S})^T[\mathbf{w}]_{S} = [\mathbf{v}]_{S}\cdot[\mathbf{w}]_{S}
\end{aligned} \\
\\
\\
\begin{aligned}
\| \mathbf{v}-\mathbf{w} \|^{2}& = \| \mathbf{Q}([\mathbf{v}]_{S}-[\mathbf{w}]_{S}) \| \\
& = \mathbf{Q}([\mathbf{v}]_{S}-[\mathbf{w}]_{S})\cdot\mathbf{Q}([\mathbf{v}]_{S}-[\mathbf{w}]_{S}) \\
& = (\mathbf{Q}([\mathbf{v}]_{S}-[\mathbf{w}]_{S}))^T\mathbf{Q}([\mathbf{v}]_{S}-[\mathbf{w}]_{S}) \\
& = ([\mathbf{v}]_{S}-[\mathbf{w}]_{S})^T\mathbf{Q}^T\mathbf{Q}([\mathbf{v}]_{S}-[\mathbf{w}]_{S}) \\
& = ([\mathbf{v}]_{S}-[\mathbf{w}]_{S})^T([\mathbf{v}]_{S}-[\mathbf{w}]_{S}) \\
& = \| [\mathbf{v}]_{S}-[\mathbf{w}]_{S} \| ^{2}
\end{aligned} \\
\\
| a | ^{2}=| b |^{2} \implies | a | =| b | \\
\therefore \| \mathbf{v}-\mathbf{w} \|=\| [\mathbf{v}]_{S}-[\mathbf{w}]_{S} \|
\end{gather*}
$$
> orthogonal matrices preserve angle and distance between relative coordinates

Rotation matrix
$$
\begin{pmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{pmatrix}
$$
### Extra
$$
[\mathbf{v}]_{S}=\begin{pmatrix}
\mathbf{v}\cdot \mathbf{u}_{1} \\
\mathbf{v}\cdot \mathbf{u}_{2} \\
\vdots \\
\mathbf{v}\cdot \mathbf{u}_{n}
\end{pmatrix},\qquad [\mathbf{w}]_{S}=\begin{pmatrix}
\mathbf{w}\cdot \mathbf{u}_{1} \\
\mathbf{w}\cdot \mathbf{u}_{2} \\
\vdots \\
\mathbf{w}\cdot \mathbf{u}_{n}
\end{pmatrix} \\
$$