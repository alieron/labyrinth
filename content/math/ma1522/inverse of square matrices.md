---
tags:
- ma1522/chapter2
- math/linear_algebra
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1522/matrix_equations)   [Next](/labyrinth/notes/math/ma1522/elementary_matrices)

### Summary
Inverse of 2x2 matrix, with [2x2 determinant](/labyrinth/notes/math/ma1522/determinants#^2f9027) ^462f96
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix}a&b\\c&d\end{pmatrix} \text{ is invertible iff } ad-bc \neq 0 \\
\\
\mathbf{A}^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix} = {\color{orange} \frac{1}{\det(\mathbf{A})}\operatorname{adj}(\mathbf{A})}
\end{gather*}
$$

Algorithm to find the inverse
$$
\begin{gather*}
\mathbf{AB}=\mathbf{I}
\\
\left(\begin{array}{c|c} \mathbf{A} & \mathbf{I} \end{array}\right)\xrightarrow{RREF}\begin{pmatrix}\mathbf{R}\mid \mathbf{B}\end{pmatrix} \\
\\
\mathbf{R} = \mathbf{I}\implies\mathbf{B} = \mathbf{A}^{-1}
\end{gather*}
$$
> if $\mathbf{R}$ has zero rows it means that some dimension are lost

Cancellation law for invertible matrices
$$
\begin{align*}
\mathbf{A}\text{ is invertible} \implies \\
\\
\mathbf{AB} = \mathbf{AC} \iff \mathbf{B}= \mathbf{C} &&& \text{(Left Cancellation)}\\
\mathbf{BA} = \mathbf{CA} \iff \mathbf{B}= \mathbf{C} &&& \text{(Right Cancellation)}
\end{align*}
$$
> note: the order of multiplication due to non-commutativity

Rules
$$
\begin{gather*}
(\mathbf{A}^{-1})^{-1} = \mathbf{A} \\
\\
(c \mathbf{A})^{-1} = \frac{1}{c} \mathbf{A}^{-1} \\
\\
(\mathbf{A}^T)^{-1} = (\mathbf{A}^{-1})^T & \text{(Transpose is invertible with Inverse)}\\
\\
(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1} & \text{(Product of invertible matrices is invertible)} \\
\end{gather*}
$$
> similar to transpose

Equivalent statements of invertibility ^468393
$$
\begin{align*}
&&& \mathbf{A}\text{ is invertible} \iff\\
\\
1) &&& \mathbf{A}^T \text{ is invertible} \\
\\
2) &&& \text{(left inverse) }\exists \mathbf{B} \ \mathbf{BA}=\mathbf{I} \\
\\
3) &&& \text{(right inverse) }\exists \mathbf{B} \ \mathbf{AB}=\mathbf{I} \\ 
\\
4) &&& \mathbf{A} \to \mathbf{I} \quad \text{ie. } \mathbf{A}\text{ is row equivalent to } \mathbf{I} \\
\\
5) &&& \mathbf{A}\text{ can be expressed as a product of elementary matrices} \\
\\
6) &&& \mathbf{Ax}=\mathbf{0}\text{ only has the trivial solution} \\
\\
7) &&& \mathbf{Ax}=\mathbf{b}\text{ has a unique solution}
\end{align*}
$$

### Concept
All non-square matrices are non-invertible
- due to the non-commutativity of matrix multiplication

Invertible square matrix
$$
\begin{gather*}
\exists \mathbf{B}_{n\times n} \  \mathbf{AB} = \mathbf{I}_{n}=\mathbf{BA} \implies \mathbf{B} = \mathbf{A}^{-1} & \text{(Inverse Exists)} \\
\\
\exists \mathbf{B}_{n\times n} \ \exists \mathbf{C}_{n\times n} \ \mathbf{AB} = \mathbf{AC} = \mathbf{I}_{n} \implies \mathbf{B}=\mathbf{C} & \text{(Unique Inverse)}\\
\\
\therefore \mathbf{AA}^{-1}=\mathbf{I}_n=\mathbf{A}^{-1}\mathbf{A}
\end{gather*}
$$
> singular matrix is a non-invertible square matrix

Rationale for inverse, solving linear systems
$$
\mathbf{Ax}=\mathbf{b} \land \mathbf{A}\text{ is invertible}\implies\mathbf{x}=\mathbf{A}^{-1}\mathbf{b}
$$

Negative power of invertible matrices
$$
\mathbf{A}^{-n}=(\mathbf{A}^{-1})^n
$$

Uniqueness of inverse
$$
\begin{gather*}
let \ \mathbf{B} \ and \ \mathbf{C} \ be \ inverses \ of \ \mathbf{A}_{n\times n} \\
\\
\text{Def. of invertible matrix: }\exists \mathbf{B}_{n\times n} \quad \mathrm{s.t.}\quad  \mathbf{AB} = \mathbf{I}_{n}=\mathbf{BA} \\
\\
let, \ \mathbf{AB}=\mathbf{I}=\mathbf{BA}, \quad \mathbf{AC}=\mathbf{I}=\mathbf{CA} \\
\\
\mathbf{B}= \mathbf{BI}= \mathbf{B(AC)}= \mathbf{(BA)C}= \mathbf{IC}=\mathbf{C} \\
\\
\therefore \mathbf{B = \mathbf{C}}
\end{gather*}
$$

Cancellation law
$$
\begin{gather*}
\mathbf{AB} = \mathbf{AC} \\
\\
if \ \mathbf{A} \ is \ invertible, \ \mathbf{A}^{-1} \ exists \\
\\
\mathbf{B}= \mathbf{A}^{-1}\mathbf{AB}=\mathbf{A}^{-1}\mathbf{AC} = \mathbf{C}
\end{gather*}
$$

Inverse of symmetric matrix is also symmetric
$$
\begin{align*}
\mathbf{A} \text{ is symmetric} & \implies \mathbf{A} = \mathbf{A}^T \\
\mathbf{A} \text{ is invertible} & \implies \mathbf{I} = \mathbf{AA}^{-1} \\
\\
\mathbf{AA}^{-1} & = (\mathbf{AA}^{-1})^T && \because \mathbf{I} = \mathbf{I}^T \\
\mathbf{AA}^{-1} & = (\mathbf{A}^{-1})^T\mathbf{A}^T && \text{(Multiplication rule of transpose)} \\
\mathbf{A}^{-1}\mathbf{A} & = (\mathbf{A}^{-1})^T\mathbf{A}^T && \text{(Multiplcation with inverse commutes)} \\
\mathbf{A}^{-1}\mathbf{A} & = (\mathbf{A}^{-1})^T\mathbf{A} && \because \mathbf{A} = \mathbf{A}^T \\
\mathbf{A}^{-1} & = (\mathbf{A}^{-1})^T && \text{(Right cancellation)} \\
\\
\therefore \mathbf{A}^{-1} &\text{ is also symmetric}
\end{align*}
$$

Inverse of matrix product
$$
\begin{gather*}
\mathbf{AB} \text{ is invertible} \implies \exists \mathbf{C} \ \mathrm{s.t.}\ \mathbf{I} = \mathbf{C}(\mathbf{AB}) \\
\\
\mathbf{I}=\mathbf{C}(\mathbf{AB})=(\mathbf{CA})\mathbf{B} \implies \mathbf{B}\text{ is invertible and } \mathbf{CA}=\mathbf{B}^{-1}
\end{gather*}
$$

### Application
Homogeneous system with invertible coefficient matrix
$$
\begin{gather*}
\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}0\\0\\0\end{pmatrix} \\
\\
\left(\begin{array}{c c c | c}
1 & 0 & 1 & 0 \\
1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0
\end{array}\right)
\to\left(\begin{array}{c c c | c}
1 & 0 & 1 & 0 \\
0 & 1 & -1 & 0 \\
0 & 1 & 1 & 0
\end{array}\right)
\to\left(\begin{array}{c c c | c}
1 & 0 & 1 & 0 \\
0 & 1 & -1 & 0 \\
0 & 0 & 2 & 0
\end{array}\right)
\to\left(\begin{array}{c c c | c}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0
\end{array}\right) \\
\\
\begin{pmatrix}
0 \\ 0 \\ 0
\end{pmatrix} \ is \ the \ unique \ solution
\end{gather*}
$$

Computing the inverse of a 2x2 matrix
$$
\begin{gather*}
& \mathbf{A}=\begin{pmatrix}3 & 5 \\ 1 & 2\end{pmatrix} \\
\\
Method \ 1: \\
& \left(\begin{array}{c c | c c}
3 & 5 & 1 & 0 \\
1 & 2 & 0 & 1
\end{array}\right)
\to\left(\begin{array}{c c | c c}
1 & 2 & 0 & 1 \\
0 & -1 & 1 & -3
\end{array}\right)
\to\left(\begin{array}{c c | c c}
1 & 0 & 2 & -5 \\
0 & 1 & -1 & 3
\end{array}\right) \\
\\
& \mathbf{A}^{-1}=\begin{pmatrix}2&-5 \\-1&3\end{pmatrix} \\
\\
Method \ 2: \\
& \mathbf{A}^{-1}=\frac{1}{2(3)-(-5)(-1)}\begin{pmatrix}2&-5 \\-1&3\end{pmatrix}=\begin{pmatrix}2&-5 \\-1&3\end{pmatrix}
\end{gather*}
$$

###### Extra
Compiled equivalent statements of invertibility
$$
\begin{align*}
&&& \mathbf{A}\text{ is invertible} \iff\\
\\
1) &&& \mathbf{A}^T \text{ is invertible} \\
\\
2) &&& \text{(left inverse) }\exists \mathbf{B} \ \mathbf{BA}=\mathbf{I} \\
\\
3) &&& \text{(right inverse) }\exists \mathbf{B} \ \mathbf{AB}=\mathbf{I} \\ 
\\
4) &&& \mathbf{A} \to \mathbf{I} \quad \text{ie. } \mathbf{A}\text{ is row equivalent to } \mathbf{I} \\
\\
5) &&& \mathbf{A}\text{ can be expressed as a product of elementary matrices} \\
\\
6) &&& \mathbf{Ax}=\mathbf{0}\text{ only has the trivial solution} \\
\\
7) &&& \mathbf{Ax}=\mathbf{b}\text{ has a unique solution} \\
\\
8) &&& \det(\mathbf{A})\neq0 \\
\\
9) &&& \text{cols/rows of }\mathbf{A}\text{ are linearly independent for }\mathbb{R}^n \\
\\
10) &&& \text{cols/rows of }\mathbf{A}\text{ spans }\mathbb{R}^n \\
\\
11) &&& \operatorname{rank}(\mathbf{A}) = n \quad \text{ie. }\mathbf{A}\text{ is of full rank} \\
\\
12) &&& \operatorname{nullity}(\mathbf{A})=0 \\
\\
13) &&& 0\text{ is not an eigenvalue of }\mathbf{A} \\
\\
14) &&& T_{\mathbf{A}}\text{ is 1-1}\land\text{onto}
\end{align*}
$$