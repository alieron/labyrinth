---
tags:
  - ma1522/chapter5
  - math/linear_algebra
  - lang/octave
complete: true
prev: /labyrinth/notes/math/ma1522/QR_factorization
next: /labyrinth/notes/math/ma1522/eigenvectors
---
   
### Summary
Least square solution
$$
\begin{align*}
&&& \mathbf{u}\text{ is a least square solution to }\mathbf{Ax}=\mathbf{b}\iff \\
\\
1)&&& \mathbf{Au}=\mathbf{b}_{p}\text{, the projection of }\mathbf{b}\text{ onto }\operatorname{Col}(\mathbf{A})\\
\\
2)&&& \mathbf{u}\text{ is a solution to }\mathbf{A}^T\mathbf{Ax}=\mathbf{A}^T\mathbf{b}
\end{align*}
$$

Algorithm for finding least square solution
$$
\begin{gather*}
\mathbf{A}^T\mathbf{Au}=\mathbf{A}^T\mathbf{b} \\
\\
\left(\begin{array}{c|c} \mathbf{A}^T\mathbf{A} & \mathbf{A}^T\mathbf{b} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{R} & \mathbf{u} \end{array}\right)
\end{gather*}
$$
> least square may have a general solution

Least square by QR factorization
$$
\begin{gather*}
\mathbf{Ru}=\mathbf{Q}^T\mathbf{b} \\
\\
\left(\begin{array}{c|c} \mathbf{R} & \mathbf{Q}^T\mathbf{b} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{I} & \mathbf{u} \end{array}\right)
\end{gather*}
$$
> $\mathbf{R}$ is already in REF making it easier to solve

Projection
$$
\begin{align*}
\mathbf{b}_{p}& =\mathbf{Au} \\
& = {\color{orange} \mathbf{A}(\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^T\mathbf{b} } \\
\end{align*}
$$
### Concept
Least square solution
- solution that is closer than every other vector

$$
\begin{gather*}
\mathbf{u}\text{ is a least square solution of }\mathbf{Ax}=\mathbf{b}\text{ if}\\
\\
\forall \mathbf{v}\in \mathbb{R}^n \ ||\mathbf{Au}-\mathbf{b}||\leq||\mathbf{Av}-\mathbf{b}||
\end{gather*}
$$

Orthogonal [projection](/labyrinth/notes/math/ma1522/orthogonal_projection)
$$
\begin{gather*}
\text{We know:}&\begin{gathered}
\mathbf{Au}\in \operatorname{Col}(\mathbf{A}) \\
\therefore\mathbf{Au}-\mathbf{b}\perp \operatorname{Col}(\mathbf{A}) \\
\end{gathered} \\
\\
&\mathbf{Au}-\mathbf{b}\in \operatorname{Null}(\mathbf{A}^T) \\
\\
&\mathbf{A}^T(\mathbf{Au}-\mathbf{b})=\mathbf{0} \\
&\mathbf{A}^T\mathbf{Au}=\mathbf{A}^T\mathbf{b}
\end{gather*}
$$

Projection is unique
$$
\begin{gather*}
\mathbf{u}_{1}, \mathbf{u}_{2}\text{ are least square solutions of }\mathbf{Ax}=\mathbf{b}\\
\\
\text{then } \mathbf{A}^T\mathbf{Au}_{1}=\mathbf{A}^T\mathbf{b}, \ \mathbf{A}^T\mathbf{Au}_{2}=\mathbf{A}^T\mathbf{b}\\
\\
\mathbf{A}^T\mathbf{Au}_{1}=\mathbf{A}^T\mathbf{Au}_{2}
\end{gather*}
$$

QR factorization
$$
\begin{align*}
\mathbf{A}^T\mathbf{Au}& =\mathbf{A}^T\mathbf{b} \\
(\mathbf{QR})^T\mathbf{QRu}& = (\mathbf{QR})^T\mathbf{b} \\
\mathbf{R}^T\mathbf{Q}^T\mathbf{QRu}& =\mathbf{R}^T\mathbf{Q}^T\mathbf{b} \\
\mathbf{R}^T\mathbf{Ru}& =\mathbf{R}^T\mathbf{Q}^T\mathbf{b} && \text{(Orthogonal matrices)} \\
\mathbf{Ru}& =\mathbf{Q}^T\mathbf{b} && \text{(}\mathbf{R}\text{ is invertible)}
\end{align*}
$$
### Application
Linear regression
$$
\begin{gather*}
p(x)=a_{1}+a_{2}x\text{ is a best-fit line over a set of points }(x_{i},y_{i}) \\
\\
\text{We are trying to solve for the unknowns }a_{1}, a_{2} \\
\text{minimizing }\| p(\mathbf{x})-\mathbf{y} \| ^{2} \\
\\
\begin{pmatrix}
1 & x_{1} \\
1 & x_{2} \\
\vdots & \vdots \\
1 & x_{n}
\end{pmatrix}\begin{pmatrix}
a_{1} \\
a_{2}
\end{pmatrix}=\begin{pmatrix}
y_{1} \\
y_{2} \\
\vdots \\
y_{n}
\end{pmatrix} 
\end{gather*}
$$
> constructing the matrix equation
### Extra
Octave
```octave
# Least squares solution(last column)
rref([A'*A A'*b])

# Least squares solution if A is QR factorizable
[Q, R] = qr(A)
rref([R Q’*b])
```