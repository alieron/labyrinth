---
tags:
- ma1522/chapter2
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/inverse_of_square_matrices
next: /labyrinth/notes/math/ma1522/LU_factorization

---
### Summary
Elaboration of [row equivalent](/labyrinth/notes/math/ma1522/gaussian_elimination#^151bcb)
$$
\begin{gather*}
\mathbf{A}\xrightarrow{r_1}\xrightarrow{r_2}\cdots\xrightarrow{r_k}\mathbf{B} & \text{row operations applied to }\mathbf{A} \\
\\
\mathbf{E}_k\cdots\mathbf{E}_2\mathbf{E}_1\mathbf{A}=\mathbf{B} & \text{premultiply }\mathbf{E}_{k}\text{ to }\mathbf{A}\text{ in order} \\
\\
\mathbf{A}=\mathbf{E}_{1}^{-1}\mathbf{E}_{2}^{-1}\dots \mathbf{E}_{k}^{-1}\mathbf{B}
\end{gather*}
$$

Inverse elementary matrix
- reversing the row operation

$$
\begin{align*}
\text{Interchanging: } &&& \mathbf{I}_n\xrightarrow{R_i\leftrightarrow R_j}\mathbf{E}\xrightarrow{R_i\leftrightarrow R_j}\mathbf{I}_n && \Rightarrow\quad\mathbf{E}: R_i\leftrightarrow R_j,\;\mathbf{E}^{-1}: R_i\leftrightarrow R_j. \\
\\
\text{Scaling: } &&& \mathbf{I}_n\xrightarrow{cR_i}\mathbf{E}\xrightarrow{\frac{1}{c}R_i}\mathbf{I}_n && \Rightarrow\quad \mathbf{E}: cR_i,\;\mathbf{E}^{-1}: \frac{1}{c}R_i\\
\\
\text{Add multiple: } &&& \mathbf{I}_n\xrightarrow{R_i+cR_j}\mathbf{E}\xrightarrow{R_i-cR_j}\mathbf{I}_n && \Rightarrow\quad \mathbf{E}: R_i+cR_j,\;\mathbf{E}^{-1}: R_i-cR_j\\
\end{align*}
$$
### Concept
Represents a single [elementary row operation](/labyrinth/notes/math/ma1522/gaussian_elimination#^962797)
- pre-multiply by elementary matrix

$$
\begin{gather*}
\mathbf{I}_n \xrightarrow{r}\mathbf{E} \\
\\
\mathbf{A}\xrightarrow{r}\mathbf{EA}
\end{gather*}
$$

Elementary matrices are invertible
$$
\mathbf{E}\text{ is row equivalent to }\mathbf{I}
$$

Step by step
- premultiply each step

$$
\mathbf{A}\xrightarrow{r_1}\mathbf{E}_1\mathbf{A}\xrightarrow{r_2}\mathbf{E}_2\mathbf{E}_1\mathbf{A}\xrightarrow{r_3}\cdots\xrightarrow{r_k}\mathbf{E}_k\cdots\mathbf{E}_2\mathbf{E}_1\mathbf{A}
$$
### Application
Row operations
$$
\begin{align*}
\text{Interchanging: } &&& \mathbf{I}_3 \xrightarrow{R_{1}\leftrightarrow R_{2}}\mathbf{E}=\begin{pmatrix}0&1&0\\1&0&0\\0 & 0 & 1\end{pmatrix}, \ \mathbf{E}^{-1}=\begin{pmatrix}0&1&0\\1&0&0\\0 & 0 & 1\end{pmatrix}  \\
\\
\text{Scaling: } &&& \mathbf{I}_3 \xrightarrow{3R_{2}}\mathbf{E}=\begin{pmatrix}
1 & 0 & 0 \\
0 & 3 & 0 \\
0 & 0 & 1
\end{pmatrix}, \ \mathbf{E}^{-1}=\begin{pmatrix}1&0&0\\0&\frac{1}{3}&0\\0 & 0 & 1\end{pmatrix} \\
\\
\text{Add multiple: } &&& \mathbf{I}_3 \xrightarrow{R_{2}+3R_{3}}\mathbf{E}= \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 3 \\
0 & 0 & 1
\end{pmatrix}, \ \mathbf{E}^{-1}=\begin{pmatrix}1&0&0\\0&1&-3\\0 & 0 & 1\end{pmatrix} \\
\end{align*}
$$

Elemantary matrix multiplication vs manual row operation
$$
\begin{gather*}
\text{Mannual Row Op: }&\begin{pmatrix}
1 & 1 & 1 & 0 \\
1 & 2 & 3 & -1 \\
2 & 1 & 4 & 2
\end{pmatrix}\xrightarrow{R_{2}\leftrightarrow R_{3}}{\color{cyan}\begin{pmatrix}
1 & 1 & 1 & 0 \\ 
2 & 1 & 4 & 2 \\
1 & 2 & 3 & -1
\end{pmatrix}}\\
\\
\text{Elementary Matrix: }&\begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix}\begin{pmatrix}
1 & 1 & 1 & 0 \\
1 & 2 & 3 & -1 \\
2 & 1 & 4 & 2
\end{pmatrix} = {\color{cyan}\begin{pmatrix}
1 & 1 & 1 & 0 \\ 
2 & 1 & 4 & 2 \\
1 & 2 & 3 & -1
\end{pmatrix}}
\end{gather*}
$$