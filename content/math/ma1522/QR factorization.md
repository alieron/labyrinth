---
tags:
- lang/octave
- ma1522/chapter5
- math/linear_algebra
complete: false
index: null
---
[Previous](/labyrinth/notes/math/ma1522/orthogonal_projection)   [Next](/labyrinth/notes/math/ma1522/least_square_approximation)

### Summary
QR factorization
$$
\begin{align*}
1)&&& \text{ensure }\mathbf{A}=\begin{pmatrix}
\mathbf{a}_{1} & \mathbf{a}_{2} & \dots & \mathbf{a}_{n}
\end{pmatrix}\text{ has  linearly independent columns} \\
\\
2)&&& \text{obtain }\mathbf{Q}\text{ by Gram-Schmidt} \\
\\
3)&&& \text{compute }\mathbf{R}=\mathbf{Q}^T\mathbf{A}
\end{align*}
$$
> $\mathbf{R}$ is an invertible upper triangular matrix with positive diagonal entries, due to Gram-Schmidt

### Concept
QR factorization
$$
\begin{align*}
\mathbf{A}&=\mathbf{QR} \\
\mathbf{Q}^T\mathbf{A}&=\mathbf{Q}^T\mathbf{QR} = \mathbf{IR} \\
\\
\therefore \mathbf{R}&=\mathbf{Q}^T\mathbf{A}
\end{align*}
$$
> isolating a rotation matrix

R is triangular
- due to Gram-Schmidt

$$
\begin{eqnarray*} \mathbf{a}_1&=&r_{11}\mathbf{q}_1=\begin{pmatrix}\mathbf{q}_1&\cdots&\mathbf{q}_n\end{pmatrix}\begin{pmatrix}r_{11}\\0\\\vdots\\0\end{pmatrix}\\ \mathbf{a}_2&=&r_{12}\mathbf{q}_1+r_{22}\mathbf{q}_2=\begin{pmatrix}\mathbf{q}_1&\cdots&\mathbf{q}_n\end{pmatrix}\begin{pmatrix}r_{12}\\r_{22}\\\vdots\\0\end{pmatrix}\\ &\vdots&\\ \mathbf{a}_n&=&r_{1n}\mathbf{q}_1+r_{2n}\mathbf{q}_2+\cdots+r_{nn}\mathbf{q}_n=\begin{pmatrix}\mathbf{q}_1&\cdots&\mathbf{q}_n\end{pmatrix}\begin{pmatrix}r_{1n}\\r_{2n}\\\vdots\\r_{nn}\end{pmatrix}
\\
\\
\mathbf{A}&=&\begin{pmatrix}\mathbf{a}_1&\mathbf{a}_2&\cdots&\mathbf{a}_n\end{pmatrix}\\ &=&\begin{pmatrix}\mathbf{q}_1&\mathbf{q}_2&\cdots&\mathbf{q}_n\end{pmatrix}\begin{pmatrix} r_{11}&r_{12}&\cdots&r_{1n}\\ 0&r_{22}&\cdots&r_{2n}\\ \vdots&\vdots&\ddots&\vdots\\ 0&0&\cdots&r_{nn} \end{pmatrix}\\ &=&\mathbf{QR} \end{eqnarray*}
$$

Properties of R
$$
\begin{align*}
&&\mathbf{A}& =\mathbf{QR} \\
&&\mathbf{Q}^T\mathbf{A}& =\mathbf{R} \\
&&(\mathbf{q}_{i}^T\mathbf{a}_{j})& = (r_{ij}) \\
\\
\text{Diagonal Entries:}&& r_{ii}& =\mathbf{q}_{i}\cdot \mathbf{a}_{i} \\
\\
\text{During Gram-Schmidt:}&& \mathbf{q}_{i}\not\perp \mathbf{a}_{i} & \implies \mathbf{q}_{i}\cdot \mathbf{a}_{i}>0 &\text{pointing in similar direction} \\
\\
&& \det(\mathbf{R}) & = r_{11}r_{22}\dots r_{nn}>0 \\
\\
&&\therefore\mathbf{R}&\text{ is invertible}
\end{align*}
$$

Non-square matrices can have a left inverse
$$
\begin{gather*}
\mathbf{A}_{m\times n}\land \operatorname{rank}(\mathbf{A})=n\implies \mathbf{A}^T\mathbf{A}\text{ is invertible}\land \exists \mathbf{B} \ \mathbf{BA}=\mathbf{I} \\
\\
\mathbf{A} =\mathbf{QR} \\
\\
\begin{aligned}
\mathbf{A}^T\mathbf{A}& =(\mathbf{QR})^T\mathbf{QR}\\
& = \mathbf{R}^T\mathbf{Q}^T\mathbf{QR} \\
& = \mathbf{R}^T\mathbf{R} \\
\end{aligned} \\
\\
\mathbf{R}\text{ is invertible} \implies \mathbf{R}^T\text{ is invertible}\implies \mathbf{R}^T\mathbf{R}\text{ is invertible} & \text{(Product of Invertible matrices)} \\
\therefore \mathbf{A}^T\mathbf{A}\text{ is invertible} \\
\\
\begin{aligned}
\mathbf{BA}& = \mathbf{I} \\
\mathbf{BQR}& = \mathbf{I} \\
\mathbf{BQ}& = \mathbf{R}^{-1} \\
\mathbf{B}& = \mathbf{R}^{-1}\mathbf{Q}^T
\end{aligned} \\
\\
\therefore \mathbf{A}\text{ has a left inverse}
\end{gather*}
$$
> [pre-multiplication with transpose](/labyrinth/notes/math/ma1522/matrix_transpose#^9318d6) is symmetric

#

##### Octave
```octave

# QR factorization of A
[Q, R] = qr(A)
```

### Application
$$

$$

