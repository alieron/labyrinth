---
tags:
  - ma1522/chapter2
  - math/linear_algebra
  - lang/octave
complete: true
prev: /labyrinth/notes/math/ma1522/gaussian_elimination
next: /labyrinth/notes/math/ma1522/matrix_multiplication
---
   
### Summary
$m$ by $n$ matrix, $m$ rows and $n$ columns
$$
\mathbf{A}=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}=(a_{ij})_{m\times n}=(a_{ij})_{i=1\;j=1}^{m\;\;\;\;n}
$$

Entries
$$
(i, j) \ entry \ or \ a_{ij}, \ ith \ row \ and \ jth \ col
$$

Rules
$$
\begin{gather*}
\mathbf{A} + \mathbf{0}_{m\times n} = \mathbf{A} \iff \mathbf{A} + (-\mathbf{A}) =\mathbf{0}_{m\times n}\\
\\
a(\mathbf{A}+\mathbf{B})=a\mathbf{A}+a\mathbf{B} \\
\\
(a+b)\mathbf{A}=a\mathbf{A}+b\mathbf{A} \\
\\
(ab)\mathbf{A}=a(b\mathbf{A})
\end{gather*}
$$
### Concept
Zero matrix -> all entries are 0
Square matrix -> no. of rows = no. of cols
Other [special matrices](/labyrinth/notes/math/ma1522/special_matrices)

Scalar multiplication
$$
c\mathbf{A}=c\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}=\begin{pmatrix}ca_{11}&ca_{12}&\cdots&ca_{1n}\\ca_{21}&ca_{22}&\cdots&ca_{2n}\\\vdots&\vdots&\ddots&\vdots\\ca_{m1}&ca_{m2}&\cdots&ca_{mn}\end{pmatrix}
$$

Matrix addition/subtraction
$$
\mathbf{A}\pm \mathbf{B}=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}\pm \begin{pmatrix}b_{11}&b_{12}&\cdots&b_{1n}\\b_{21}&b_{22}&\cdots&b_{2n}\\\vdots&\vdots&\ddots&\vdots\\b_{m1}&b_{m2}&\cdots&b_{mn}\end{pmatrix}=\begin{pmatrix}a_{11}\pm b_{11}&a_{12}\pm b_{12}&\cdots&a_{1n}\pm b_{1n}\\a_{21}\pm b_{21}&a_{22}\pm b_{22}&\cdots&a_{2n}\pm b_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}\pm b_{m1}&a_{m2}\pm b_{m2}&\cdots&a_{mn}\pm b_{mn}\end{pmatrix}
$$
### Application
3 by 4 zero matrix, 3 rows and 4 cols
$$
\mathbf{0}_{3\times4}=
\begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$

Zero square matrix of order 3, 3 rows and 3 cols
$$
\mathbf{0}_{3}=
\begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 
\end{pmatrix}
$$

### Extra
Octave
```octave
# Zero matrix(m × n)
zeros(m, n)

# Identity matrix(n × n)
eye(n)

# Matrix addition and scalar multiplication
A + c * B
```