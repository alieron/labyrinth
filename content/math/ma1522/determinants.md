---
tags:
- ma1522/chapter2
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/LU_factorization
next: /labyrinth/notes/math/ma1522/vectors_in_Rⁿ
---

   

### Summary
Determinant of 1x1 matrices
$$
\mathbf{A}=\begin{pmatrix}a\end{pmatrix}, \quad \det(\mathbf{A})=a
$$

Determinant of 2x2 matrices ^2f9027
$$
\mathbf{A}=\begin{pmatrix}a&b\\c&d\end{pmatrix}, \quad \det(\mathbf{A})=\begin{vmatrix}a & b \\c & d \end{vmatrix} = ad-bc
$$

Determinant of 3x3 matrices, by cofactor expansion with the 1st row
$$
\mathbf{A}=\begin{pmatrix}a & b & c \\d & e & f \\g & h & i\end{pmatrix}, \quad \det(\mathbf{A})=\begin{vmatrix}a & b & c \\d & e & f \\g & h & i\end{vmatrix}=a\begin{vmatrix}e & f \\h & i\end{vmatrix}-b\begin{vmatrix}d & f \\g & i\end{vmatrix}+c\begin{vmatrix}d & e \\g & h\end{vmatrix}
$$

Rule of Sarrus for 3x3 matrices
![[rule_of_sarrus.png|400]]

Rules
$$
\begin{gather*}
for \ \mathbf{A}_{n\times n}, \ \mathbf{B}_{n\times n}\\
\\
\det(\mathbf{AB})=\det(\mathbf{A})\det(\mathbf{B}) \\
\\
\det(\mathbf{A})=\det(\mathbf{A}^T) \\
\\
\det(\mathbf{A}^{-1})=\det(\mathbf{A})^{-1}\\
\\
\det(c\mathbf{A})=c^n\det(\mathbf{A})
\end{gather*}

$$

Adjoint formula
$$
\mathbf{A}(\operatorname{adj}(\mathbf{A}))=\det(\mathbf{A})\mathbf{I}
$$

[Equivalent statements of invertibility](/labyrinth/notes/math/ma1522/inverse_of_square_matrices#^468393)
$$
\begin{align*}
&&& \mathbf{A}\text{ is invertible} \iff\\
\\
8) &&& \det(\mathbf{A})\neq0
\end{align*}
$$
> if the determinant is 0, the matrix transforms(squishes) space into a lower dimension -> the inverse would not have a unique solution

### Concept
Determinant
- visualise it as the degree to which a unit of space is scaled when undergoing a matrix transformation

Cofactor expansion
$$
\begin{align*} \\
\det(\mathbf{A})& =a_{i1}A_{i1}+a_{i2}A_{i2}+\cdots+a_{in}A_{in}=\sum_{k=1}^na_{ik}A_{ik} & \quad & \text{cofactor expansion along row }i \\
& =a_{1j}A_{1j}+a_{2j}A_{2j}+\cdots+a_{nj}A_{nj}=\sum_{k=1}^na_{kj}A_{kj} && \text{cofactor expansion along col }j \\
\\
& {\color{violet} (i,j) \text{ cofactor:}\quad A_{ij}=(-1)^{i+j}\det(\mathbf{M}_{ij})}
\end{align*}
$$
> [first minor](/labyrinth/notes/math/ma1522/matrix_minor#^c8b222), the submatrix derived by deleting the ith row and jth col
> choose the row/col that has the most zeros

Reduction, with determinant of [elementary matrices](/labyrinth/notes/math/ma1522/elementary_matrices)
- the detereminant of a matrix in RREF is easier to find

$$
\begin{align*}
\text{Interchanging: } &&& \mathbf{I}_n\xrightarrow{R_i\leftrightarrow R_j}\mathbf{E} && \Rightarrow\quad \det(\mathbf{E})=-1 \\
\\
\text{Scaling: } &&& \mathbf{I}_n\xrightarrow{cR_i}\mathbf{E} && \Rightarrow\quad \det(\mathbf{E})=c\\
\\
\text{Add multiple: } &&& \mathbf{I}_n\xrightarrow{R_i+cR_j}\mathbf{E} && \Rightarrow\quad \det(\mathbf{E})=1\\
\end{align*}
$$

Adjoint
- (i,j) entry is the (j,i) cofactor

$$
\operatorname{adj}(\mathbf{A})=\begin{pmatrix} A_{11}&A_{12}&\cdots&A_{1n}\\ A_{21}&A_{22}&\cdots&A_{2n}\\ \vdots&\vdots&\ddots&\vdots\\ A_{n1}&A_{n2}&\cdots&A_{nn} \end{pmatrix}^T=\begin{pmatrix} A_{11}&A_{21}&\cdots&A_{n1}\\ A_{12}&A_{22}&\cdots&A_{n2}\\ \vdots&\vdots&\ddots&\vdots\\ A_{1n}&A_{2n}&\cdots&A_{nn} \end{pmatrix}.
$$

[Cramer's rule](/labyrinth/notes/math/ma1522/cramer's_rule) to solve linear systems

### Application
Determinant of triangular matrices, product of the diagonal entries ^2adce5
$$
\begin{align*}
\begin{vmatrix}1&0&0&0&0\\-1&2&0&0&0\\0&-9&2&0&0\\1&1&0&-1&0\\0&3&-2&0&1\end{vmatrix} & = \begin{vmatrix}2&0&0&0\\-9&2&0&0\\1&0&-1&0\\3&-2&0&1\end{vmatrix} \\
&  = 2\begin{vmatrix}2&0&0\\0&-1&0\\-2&0&1\end{vmatrix} \\
&  = 2(2)\begin{vmatrix}-1&0\\0&1\end{vmatrix} \\
&  = 2(2)(-1)\begin{vmatrix}1\end{vmatrix} \\
\\
&  = 2(2)(-1) = -4 \\
\end{align*}
$$

Adjoint on a 2x2 matrix
$$
\begin{align*}
\mathbf{A}& =\begin{pmatrix}a & b \\ c & d\end{pmatrix} \\
\\
\operatorname{adj}(\mathbf{A})& =\begin{pmatrix}d & -c \\ -b & a\end{pmatrix}^T=\begin{pmatrix}d & -b\\-c & a\end{pmatrix} \\
\\
\mathbf{A}(\operatorname{adj}(\mathbf{A}))& = \begin{pmatrix}a & b \\ c & d\end{pmatrix}\begin{pmatrix}d & -b\\-c & a\end{pmatrix} \\
& = \begin{pmatrix}ad-bc & ab-ab \\ cd-cd & ad-bc\end{pmatrix} = \begin{pmatrix}ad-bc & 0 \\ 0 & ad-bc\end{pmatrix} \\
& = (ad-bc)\mathbf{I} = \det(\mathbf{A})\mathbf{I}
\end{align*}
$$

Deriving the [adjoint formular for inverse](/labyrinth/notes/math/ma1522/inverse_of_square_matrices#^462f96)
$$
\begin{align*}
\mathbf{A}(\operatorname{adj}(\mathbf{A}))& = \det(\mathbf{A})\mathbf{I} \\
\operatorname{adj}(\mathbf{A})=\mathbf{A}^{-1}\mathbf{A}(\operatorname{adj}(\mathbf{A}))& = \mathbf{A}^{-1}\det (\mathbf{A})\mathbf{I} = \det(\mathbf{A})\mathbf{A}^{-1} \\
\\
\therefore \mathbf{A}^{-1}& = \frac{1}{\det(\mathbf{A})}\operatorname{adj}(\mathbf{A})
\end{align*}
$$