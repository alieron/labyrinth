---
tags:
- ma1522/chapter2
- math/linear_algebra
complete: false

---


### Summary
Solving a linear system by [determinants](/labyrinth/notes/math/ma1522/determinants)
$$
\mathbf{x}=\frac{1}{\det(\mathbf{A})}\begin{pmatrix}
\det(A_{1}) \\
\det(A_{2}) \\
\vdots \\
\det(A_{n})
\end{pmatrix}= \begin{pmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{pmatrix} ,\quad \det(\mathbf{A}) \neq 0
$$

System with 2 unknowns
$$
\begin{gather*}
\begin{bmatrix}a_{1}&b_{1}\\a_{2}&b_{2}\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}{\color {red}c_{1}}\\{\color {red}c_{2}}\end{bmatrix} \\
\\
x=\frac{\begin{vmatrix}{\color {red}{c_{1}}}&b_{1}\\{\color {red}{c_{2}}}&b_{2}\end{vmatrix}}{\begin{vmatrix}a_{1}&b_{1}\\a_{2}&b_{2}\end{vmatrix}}=\frac{{\color {red}c_{1}}b_{2}-b_{1}{\color {red}c_{2}}}{a_{1}b_{2}-b_{1}a_{2}},\quad y=\frac{\begin{vmatrix}a_{1}&{\color {red}{c_{1}}}\\a_{2}&{\color {red}{c_{2}}}\end{vmatrix}}{\begin{vmatrix}a_{1}&b_{1}\\a_{2}&b_{2}\end{vmatrix}}=\frac{a_{1}{\color {red}c_{2}}-{\color {red}c_{1}}a_{2}}{a_{1}b_{2}-b_{1}a_{2}}
\end{gather*}
$$

System with 3 unknowns
$$
\begin{gather*}
\begin{bmatrix}a_{1}&b_{1}&c_{1}\\a_{2}&b_{2}&c_{2}\\a_{3}&b_{3}&c_{3}\end{bmatrix}\begin{bmatrix}x\\y\\z\end{bmatrix}=\begin{bmatrix}{\color {red}d_{1}}\\{\color {red}d_{2}}\\{\color {red}d_{3}}\end{bmatrix} \\
\\
x=\frac{\begin{vmatrix}{\color {red}d_{1}}&b_{1}&c_{1}\\{\color {red}d_{2}}&b_{2}&c_{2}\\{\color {red}d_{3}}&b_{3}&c_{3}\end{vmatrix}}{\begin{vmatrix}a_{1}&b_{1}&c_{1}\\a_{2}&b_{2}&c_{2}\\a_{3}&b_{3}&c_{3}\end{vmatrix}},\quad y=\frac{\begin{vmatrix}a_{1}&{\color {red}d_{1}}&c_{1}\\a_{2}&{\color {red}d_{2}}&c_{2}\\a_{3}&{\color {red}d_{3}}&c_{3}\end{vmatrix}}{\begin{vmatrix}a_{1}&b_{1}&c_{1}\\a_{2}&b_{2}&c_{2}\\a_{3}&b_{3}&c_{3}\end{vmatrix}},\text{ and }z=\frac {\begin{vmatrix}a_{1}&b_{1}&{\color {red}d_{1}}\\a_{2}&b_{2}&{\color {red}d_{2}}\\a_{3}&b_{3}&{\color {red}d_{3}}\end{vmatrix}}{\begin{vmatrix}a_{1}&b_{1}&c_{1}\\a_{2}&b_{2}&c_{2}\\a_{3}&b_{3}&c_{3}\end{vmatrix}}
\end{gather*}
$$

### Concept
General form
$$
\begin{gather*}
\mathbf{Ax}=\mathbf{b} \\
\\
x_{i}=\frac {\det(A_{i})}{\det(\mathbf{A})} \\
\\
A_{i}\text{ is the matrix formed by replacing the i-th column with }\mathbf{b}
\end{gather*}
$$

### Application
$$

$$

