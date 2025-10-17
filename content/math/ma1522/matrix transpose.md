---
tags:
  - ma1522/chapter2
  - math/linear_algebra
  - lang/octave
complete: true
prev: /labyrinth/notes/math/ma1522/matrix_multiplication
next: /labyrinth/notes/math/ma1522/matrix_equations

---
### Summary
Rules
$$
\begin{gather*}
(\mathbf{A}^T)^T = \mathbf{A} \\
\\
(c \mathbf{A})^T = c \mathbf{A}^T \\
\\
(\mathbf{A}+\mathbf{B})^T = \mathbf{A}^T+\mathbf{B}^T \\
\\
(\mathbf{AB})^T = \mathbf{B}^T\mathbf{A}^T \\
\end{gather*}
$$

Symmetric along the diagonal ^e47d16
$$
\mathbf{A}\text{ is symmetric when: }\mathbf{A} = \mathbf{A}^T
$$
### Concept
Matrix transpose, flipping on diagonal
$$
\mathbf{A}=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}_{m\times n}\quad \mathbf{A}^T=\begin{pmatrix}a_{11}&a_{21}&\cdots&a_{m1}\\a_{12}&a_{22}&\cdots&a_{m2}\\\vdots&\vdots&\ddots&\vdots\\a_{1n}&a_{2n}&\cdots&a_{mn}\end{pmatrix}_{n\times m}
$$

Generalization of multiplication rule, reverse order
$$
(\mathbf{A}_1\mathbf{A}_2\cdots\mathbf{A}_k)^T=\mathbf{A}_k^T\cdots\mathbf{A}^T_2\mathbf{A}^T_1
$$

Pre-multiplication with transpose is symmetric ^9318d6
$$
\begin{gather*}
\forall \mathbf{A} \ \mathbf{A}^T\mathbf{A}\text{ is symmetric} \\
\\
\begin{aligned}
(\mathbf{A}^T\mathbf{A})^T & = \mathbf{A}^T(\mathbf{A}^T)^T \\
& = \mathbf{A}^T\mathbf{A}
\end{aligned}
\end{gather*}
$$
### Application
Finding transpose
$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{pmatrix}^T = \begin{pmatrix}
1 & 4 & 7 \\
2 & 5 & 8 \\
3 & 6 & 9
\end{pmatrix}
$$
### Extra
Octave
```octave
# Matrix transpose
transpose(A)

# or
A'
```