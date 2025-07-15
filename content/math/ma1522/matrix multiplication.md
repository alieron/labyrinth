---
tags:
- ma1522/chapter2
- math/linear_algebra
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1522/matrices)   [Next](/labyrinth/notes/math/ma1522/matrix_transpose)
### Summary
Non-commutative
- multiply A by B vs multiply B to A
- pre-multiply vs post-multiply

$$
\mathbf{AB}\neq \mathbf{BA}
$$
> unless they are [[#^3eabd2|diagonal]] matrices

Rules
$$
\begin{align*}
\text{Associativity:} &&& (\mathbf{AB})\mathbf{C} = \mathbf{A}(\mathbf{BC}) \\
\\
\text{Left Distributive Law:} &&& \mathbf{A}(\mathbf{B}+\mathbf{C}) = \mathbf{AB}+\mathbf{AC} \\
\text{Right Distributive Law:} &&& (\mathbf{A}+\mathbf{B})\mathbf{C} = \mathbf{AC}+\mathbf{BC} \\
\\
\text{Commutative with Scalar Multiplication:} &&& c(\mathbf{AB}) = (c\mathbf{A})\mathbf{B}=\mathbf{A}(c\mathbf{B}) \\
\\
\text{Multiplication with Zero Matrix:} &&& \mathbf{A}\mathbf{0}_{n\times p}=\mathbf{0}_{m\times p}\\
&&& \mathbf{0}_{p\times m}\mathbf{A}=\mathbf{0}_{p\times n} \\
\\
\text{Multiplicative Identity:} &&& \mathbf{A}_{m\times n}=\mathbf{AI}_{n}=\mathbf{I}_{m}\mathbf{A} \\
\\
\text{Zero Product:} &&& \exists \mathbf{A}\neq \mathbf{0}_{m\times n} \ \exists \mathbf{B}\neq \mathbf{0}_{n\times p} \ \mathbf{AB} = \mathbf{0}_{m\times p} \\
\end{align*}
$$
> zero product -> product of two nonzero matrices can be 0

Block multiplication ^4ca496
- spread the multiplication to columns/rows
- rows of first, cols of second

$$
\begin{gather*}
\mathbf{AB}=\mathbf{A}\begin{pmatrix} |&|&&|\\ \mathbf{b}_1&\mathbf{b}_2&\cdots&\mathbf{b}_n\\ |&|&&|\\ \end{pmatrix}=\begin{pmatrix} |&|&&|\\ \mathbf{Ab}_1&\mathbf{Ab}_2&\cdots&\mathbf{Ab}_n\\ |&|&&| \end{pmatrix} \\
\\
\mathbf{AB}=\begin{pmatrix}-&\mathbf{a}_1&-\\-&\mathbf{a}_2&-\\&\vdots&\\-&\mathbf{a}_m&-\end{pmatrix}\mathbf{B}=\begin{pmatrix}-&\mathbf{a}_1\mathbf{B}&-\\-&\mathbf{a}_2\mathbf{B}&-\\&\vdots&\\-&\mathbf{a}_m\mathbf{B}&-\end{pmatrix}
\end{gather*}
$$
### Concept
Matrix multiplication
$$
\begin{align*}
\mathbf{AB}& =(a_{ij})_{m\times n}(b_{ij})_{n\times p}=\left(\sum_{k=1}^pa_{ik}b_{kj}\right)_{m\times p}\\
& =\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}\begin{pmatrix}b_{11}&b_{12}&\cdots&b_{1p}\\b_{21}&b_{22}&\cdots&b_{2p}\\\vdots&\vdots&\ddots&\vdots\\b_{n1}&b_{n2}&\cdots&b_{np}\end{pmatrix}= \begin{pmatrix} a_{11}b_{11}+a_{12}b_{21}+\cdots+a_{1n}b_{n1}&a_{11}b_{12}+a_{12}b_{22}+\cdots+a_{1n}b_{n2}&\cdots&a_{11}b_{1n}+a_{12}b_{2n}+\cdots+a_{1n}b_{np}\\ a_{21}b_{11}+a_{22}b_{21}+\cdots+a_{2n}b_{n1}&a_{21}b_{12}+a_{22}b_{22}+\cdots+a_{2n}b_{n2}&\cdots&a_{21}b_{1n}+a_{22}b_{2n}+\cdots+a_{2n}b_{np}\\ \vdots&\vdots&\ddots&\vdots\\ a_{m1}b_{11}+a_{m2}b_{21}+\cdots+a_{mn}b_{n1}&a_{m1}b_{12}+a_{m2}b_{22}+\cdots+a_{mn}b_{n2}&\cdots&a_{m1}b_{1n}+a_{m2}b_{2n}+\cdots+a_{mn}b_{np} \end{pmatrix}
\end{align*}
$$
<img src="/labyrinth/assets/matrix_mul.png" alt="matrix_mul.png" class="mx-auto object-none" style="">

Size of matrices for the product to be well defined
$$
({\color{royalblue}{m}} \times {\color{orangered}{n}}) \cdot ({\color{orangered}{n}} \times {\color{violet}{p}}) \to ({\color{royalblue}{m}} \times {\color{violet}{p}})
$$

Multiplication of [diagonal matrices](/labyrinth/notes/math/ma1522/special_matrices#^7a3e46) is commutative ^3eabd2
$$
\mathbf{AB}=\begin{pmatrix}a_{11}&0&\cdots&0\\0&a_{22}&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&a_{mn}\end{pmatrix}\begin{pmatrix}b_{11}&0&\cdots&0\\0&b_{22}&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&b_{nm}\end{pmatrix}= \begin{pmatrix}a_{11}b_{11}&0&\cdots&0\\0&a_{22}b_{22}&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&a_{mn}b_{nm}\end{pmatrix}=\mathbf{BA}
$$

Power of square matrices ^6a9606
$$
\begin{gather*}
\mathbf{A}^0 = \mathbf{I} \\
\\
\mathbf{A}^n = \mathbf{AA}^{n-1}, \ n\geq1
\end{gather*}
$$
### Application
Row vector and column vector
$$
\begin{align*}
\begin{pmatrix}
1 \\ 2 \\ 3
\end{pmatrix}
\begin{pmatrix}
1 & 2 & 3
\end{pmatrix} =
\begin{pmatrix}
1 \times 1 & 1 \times 2 & 1 \times 3 \\
2 \times 1 & 2 \times 2 & 2 \times 3 \\
3 \times 1 & 3 \times 2 & 3 \times 3 \\
\end{pmatrix} = 
\begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
\end{align*}
$$

Using the rules of matrix multiplication
$$
\begin{align*}
\text{Show that: }&(\mathbf{A}+\mathbf{B})^2=\mathbf{A}^2+2\mathbf{AB}+\mathbf{B}^2 \text{ for diagonal matrices}\\
\\
(\mathbf{A}+\mathbf{B}) ^2 & = (\mathbf{A}+\mathbf{B})(\mathbf{A}+\mathbf{B}) \\
& = (\mathbf{A}+\mathbf{B})\mathbf{A}+(\mathbf{A}+\mathbf{B})\mathbf{B} && \text{(Left Distributative Law)} \\
& = \mathbf{AA}+\mathbf{BA}+\mathbf{AB} + \mathbf{BB} && \text{(Right Distributative Law)} \\
& = \mathbf{AA} + \mathbf{AB}+\mathbf{AB} + \mathbf{BB} && \text{(Commutativity of Diagonal Matrix)} \\
& = \mathbf{A}^2 + 2\mathbf{AB} + \mathbf{B}^2
\end{align*}
$$

Finding a specific column using block multiplication
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix}1&-3\\-3&8\end{pmatrix}, \ \mathbf{AB}=\begin{pmatrix}-1&3&-2\\1&-7&3\end{pmatrix} \\
\\
\text{Find the 2nd column of } \mathbf{B}, \ \mathbf{b}_{2}=\begin{pmatrix}a\\ b\end{pmatrix} \\
\\
\mathbf{Ab}_{2} = \begin{pmatrix}1&-3\\-3&8\end{pmatrix}\begin{pmatrix}a\\ b\end{pmatrix}=\begin{pmatrix}3\\-7\end{pmatrix} \\
\\
\left(\begin{array}{c c | c}
1 & -3 & 3 \\
-3 & 8 & -7
\end{array}\right)
\to\left(\begin{array}{c c | c}
1 & -3 & 3 \\
0 & -1 & 2
\end{array}\right)
\to\left(\begin{array}{c c | c}
1 & 0 & -3 \\
0 & -1 & 2
\end{array}\right)
\to\left(\begin{array}{c c | c}
1 & 0 & -3 \\
0 & 1 & -2
\end{array}\right) \\
\\
\therefore \mathbf{b}_{2}=\begin{pmatrix}-3\\ -2\end{pmatrix}
\end{gather*}
$$