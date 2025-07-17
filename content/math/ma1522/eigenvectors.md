---
tags:
- ma1522/chapter6
- math/linear_algebra
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1522/least_square_approximation)   [Next](/labyrinth/notes/math/ma1522/diagonalization)

### Summary
Characteristic polynomial
$$
\det(x\mathbf{I}-\mathbf{A})
$$

Finding eigenspaces ^8e6feb
$$
\begin{gather*}
&\mathbf{Av}=\lambda \mathbf{I} \mathbf{v} \\
&(\lambda\mathbf{I}-\mathbf{A})\mathbf{v}=\mathbf{0} & \mathbf{v}\text{ is a nontrivial solution}\\
\\
&\text{given }\lambda:\\
&\left(\begin{array}{c|c} \lambda\mathbf{I}-\mathbf{A} & \mathbf{0} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{I} & \mathbf{v} \end{array}\right) & \text{the general solution }\mathbf{v} \\
\\
&\mathbf{v}\text{ is a basis for eigenspace}
\end{gather*}
$$

Eigenvalues of triangular matrices
- are the diagonal entries
- extends from [determinant of triangular matrices](/labyrinth/notes/math/ma1522/determinants#^2adce5)

Invariant with [transpose](/labyrinth/notes/math/ma1522/matrix_transpose)
$$
\begin{align*}
 x\mathbf{I}-\mathbf{A}^T & = x\mathbf{I}^T-\mathbf{A}^T && \text{(}\mathbf{I}\text{ is symmetric)}\\
& = (x\mathbf{I}-\mathbf{A})^T \\
\\
\det(x\mathbf{I}-\mathbf{A}^T) & = \det(x\mathbf{I}-\mathbf{A})^T \\
& = \det(x\mathbf{I}-\mathbf{A}) && \text{(Determinant is invariant with Transpose)}
\end{align*}
$$

[Equivalent statements of invertibility](/labyrinth/notes/math/ma1522/inverse_of_square_matrices#^468393)
$$
\begin{align*}
&&& \mathbf{A}\text{ is invertible} \iff\\
\\
13) &&& 0\text{ is not an eigenvalue of }\mathbf{A}
\end{align*}
$$

Eigenvalues of 2x2 matrices
$$
\mathbf{A}=\begin{pmatrix}a&b\\c&d\end{pmatrix}, \quad  \lambda_{1},\lambda_{2}=\left( \frac{ad}{2} \right)\pm \sqrt{ \left( \frac{ad}{2} \right)^{2}-(ad-bc) }
$$

### Concept
Eigenvalues and eigen vectors
- premultiplying a matrix to a vector has the same effect as scaling it

$$
\begin{gather*}
\mathbf{Av}=\lambda \mathbf{v}, \ \mathbf{v}\neq \mathbf{0} \\
\end{gather*}
$$
> vectors that do not change direction during transformation by the matrix, [3b1b video](https://www.youtube.com/watch?v=PFDu9oVAE-g&t=1005s)

Characteristic [polynomial](/labyrinth/notes/math/ma1521/polynomials)
$$
\begin{gather*}
\text{for }\mathbf{A}_{n\times n} \\
(\lambda\mathbf{I}-\mathbf{A})\mathbf{v}=\mathbf{0}\text{ has nontrivial solutions}\iff \det(\lambda\mathbf{I}-\mathbf{A}) = 0 & \text{(Statements of Invertibility)}\\
\\
\det(x\mathbf{I}-\mathbf{A}) = p(x)\text{ of degree }n=0 \\
\\
\therefore \lambda\text{ is an eigenvalue}\iff\lambda\text{ is a root of }\det(x\mathbf{I}-\mathbf{A})
\end{gather*}
$$

Eigenvalue of 0
$$
\begin{align*}
0\text{ is an eigen value of }\mathbf{A}&\iff \exists \mathbf{v}\neq \mathbf{0}\ \mathbf{Av}=\mathbf{0v}=\mathbf{0} \\
&\iff \mathbf{v}\text{ is a nontrivial solution to } \mathbf{Ax}=\mathbf{0} \\
&\iff \mathbf{A}\text{ is not invertible}
\end{align*}
$$
> means that some values are squished to 0 space, decreasing dimension

Algebraic multiplicity ^3360ad
- the exponent associated with a root of the characteristic polynomial

$$
\begin{gather*}
&\det(x\mathbf{I}-\mathbf{A}) = (x-\lambda)^{r_{\lambda}}p(x) & r_{\lambda}\text{ is the algebraic multiplicity associated with }\lambda \\
\\
\text{factorized completely:}& \det(x\mathbf{I}-\mathbf{A}) = (x-\lambda_{1})^{r_{1}}(x-\lambda_{2})^{r_{2}}\dots(x-\lambda_{k})^{r_{k}} \\
\\
& r_{1}+r_{2}+\dots+r_{k}=n \\
& k\leq n
\end{gather*}
$$

Eigenspace and geometric multiplicity ^444228
- set of eigenvectors associated with a particular eigenvalue

$$
\begin{gather*}
&\begin{split}
E_{\lambda} & =\{\begin{array}{c|c} \mathbf{v}\in \mathbb{R}^n & \mathbf{Av}=\lambda \mathbf{v} \end{array}\} \\
& = \{\begin{array}{c|c} \mathbf{v}\in \mathbb{R}^n & (\lambda \mathbf{I}-\mathbf{A})\mathbf{v}= \mathbf{0} \end{array}\} \\
& = \operatorname{Null}(\lambda \mathbf{I}-\mathbf{A})
\end{split} \\
\\
\text{geometric multiplicity:}&\operatorname{dim}(E_{\lambda})=\operatorname{nullity}(\lambda \mathbf{I}-\mathbf{A}) 
\end{gather*}
$$

Eigenvalues of 2x2 matrices
$$
\begin{gather*}
&\text{for }\mathbf{A}=\begin{pmatrix}a&b\\c&d\end{pmatrix} \\
\\
&\operatorname{tr}\begin{pmatrix}a&b\\c&d\end{pmatrix} = a+d = \lambda_{1}+\lambda_{2} & \text{(Trace is the sum of diagonal entries)} \\
\text{mean of the eigenvalues:}&\frac{1}{2}\operatorname{tr}\begin{pmatrix}a&b\\c&d\end{pmatrix} = \frac{a+d}{2} = \frac{\lambda_{1}+\lambda_{2}}{2} = m \\
\\
\text{product of the eigenvalues:} & \det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad-bc = \lambda_{1}\lambda_{2} = p & \text{(Due to how determinant is the scaling of a unit space)} \\
\\
& \begin{split}
\lambda_{1}& = m+d \\
\lambda_{2}& = m-d \\
\\
p & = (m+d)(m-d) \\
& = m^{2}-d^{2} \\
\\
d & = \sqrt{ m^{2}-p }\\
\therefore \lambda & = m\pm\sqrt{ m^{2}-p }
\end{split}
\end{gather*}
$$

### Application
Eigenvalues and eigenspaces
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix}
1 & 2 & 1 \\
0 & 3 & 1 \\
0 & 5 & -1
\end{pmatrix} \\
\\
\text{characteristic polynomial:}\\
\det(x\mathbf{I}-\mathbf{A})=\det\begin{pmatrix}
x-1 & -2 & -1 \\
0 & x-3 & -1 \\
0 & -5 & x+1
\end{pmatrix}=(x-1)((x-3)(x+1)-5)=(x-1)(x-4)(x+2) \\
\\
\therefore \lambda = 1,4,-2 \\
\\
\begin{split}
\mathbf{I}-\mathbf{A}& = \begin{pmatrix}0 & -2 & -1 \\0 & -2 & -1 \\0 & -5 & 2\end{pmatrix}\to \begin{pmatrix}0 & 1 & 0 \\0 & 0 & 1 \\0 & 0 & 0\end{pmatrix} &\quad& E_{1}=\operatorname{span}\left\{ \begin{pmatrix}1 \\0 \\0\end{pmatrix} \right\} \\
4\mathbf{I}-\mathbf{A}& = \begin{pmatrix}3 & -2 & -1 \\0 & 1 & -1 \\0 & -5 & 5\end{pmatrix}\to \begin{pmatrix}1 & 0 & -1 \\0 & 1 & -1 \\0 & 0 & 0\end{pmatrix} && E_{4}=\operatorname{span}\left\{ \begin{pmatrix}1 \\1 \\1\end{pmatrix} \right\} \\
-2\mathbf{I}-\mathbf{A}& = \begin{pmatrix}0 & -2 & -1 \\0 & -2 & -1 \\0 & -5 & 2\end{pmatrix}\to \begin{pmatrix}1 & 0 & \frac{1}{5} \\0 & 1 & \frac{1}{5} \\0 & 0 & 0\end{pmatrix} && E_{-2}=\operatorname{span}\left\{ \begin{pmatrix}-\frac{1}{5} \\-\frac{1}{5} \\1\end{pmatrix} \right\}
\end{split}
\end{gather*}
$$

Fibonnacci
$$
\begin{gather*}
F_{n}=F_{n-1}+F_{n-2} \\
\\
\begin{pmatrix}
F_{n} \\
F_{n-1}
\end{pmatrix}=\begin{pmatrix}
1 & 1 \\
1 & 0 
\end{pmatrix}\begin{pmatrix}
F_{n-1} \\
F_{n-2}
\end{pmatrix} \\
\\
\det\left(x\mathbf{I}-\begin{pmatrix}
1 & 1 \\
1 & 0 
\end{pmatrix}\right)=\det\begin{pmatrix}
x-1 & -1 \\
-1 & x 
\end{pmatrix}=(x-1)x-1=x^{2}-x-1 \\
\\
\lambda = \frac{1+\sqrt{ 5 }}{2},\frac{1-\sqrt{ 5 }}{2} & {\color{gold} \text{golden ratio} }
\end{gather*}
$$