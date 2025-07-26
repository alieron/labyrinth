---
tags:
- ma1522/chapter2
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/elementary_matrices
next: /labyrinth/notes/math/ma1522/determinants
---

   

### Summary
LU factorizable
- $\mathbf{L}$ is a unit lower triangular matrix
- $\mathbf{U}$ is a upper triangular matrix

$$
\begin{gather*}
\mathbf{A}\xrightarrow{r_1}\xrightarrow{r_2}\cdots\xrightarrow{r_k}\mathbf{U} \\
\\
\mathbf{A=E}_1^{-1}\mathbf{E}_2^{-1}\cdots\mathbf{E}_k^{-1}\mathbf{U=LU} \\
\end{gather*}
$$

Algorithm for solving linear systems via LU factorisation
$$
\begin{align*}
&&& \mathbf{Ax}=\mathbf{b}, \ \mathbf{A}=\mathbf{LU} \\
\\
1) &&& \mathbf{Ly}=\mathbf{b} \quad \Rightarrow \quad (\mathbf{L} \ | \ \mathbf{b})\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{I} & \mathbf{y} \end{array}\right) \\
\\
2) &&& \mathbf{Ux}=\mathbf{y} \quad \Rightarrow \quad (\mathbf{U} \ | \ \mathbf{y})\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{R} & \mathbf{x} \end{array}\right)
\end{align*}
$$

No LU factorization
- if any of its [leading principal minors](/labyrinth/notes/math/ma1522/matrix_minor) are 0 

### Concept
Rationale for LU factorization
$$
\begin{gather*}
\mathbf{Ax}=\mathbf{LUx}=\mathbf{b} \\
\\
\mathbf{Ux}=\mathbf{L}^{-1}\mathbf{b}=\mathbf{y} & \text{(}\mathbf{L}\text{ is the product of invertible matrices)}
\end{gather*}
$$

Unit lower triangular matrix
$$
\mathbf{E}: R_i+cR_j\text{ for }i>j\implies\mathbf{E}\text{ is a unit lower triangular matrix}
$$

Product of 2 unit lower triangular matrix ^919bbb
$$
\mathbf{L}_{1}\mathbf{L}_{2}\text{ is also a unit lower triangular matrix}
$$

### Application
General solution by LU factorization
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix} 2 &4&1&5&-2\\ -4 &-5&3&-8&1\\ 2 &-5&-4&1&8 \\ -6& 0&7&-3&1 \end{pmatrix}=\begin{pmatrix} 1&0&0&0\\ -2&1&0&0\\ 1&-3&1&0\\ -3&4&-1&1 \end{pmatrix}\begin{pmatrix} 2&4&1&5&-2\\ 0&3&5&2&-3\\ 0&0&10&2&1\\ 0&0&0&6&8 \end{pmatrix}=\mathbf{LU} \\
\\
\begin{aligned}
\mathbf{Ly}=\mathbf{b}: &&& \left(\begin{array}{cccc|c} 1&0&0&0&6\\ -2&1&0&0&1\\ 1&-3&1&0&-4\\ -3&4&-1&1&7 \end{array}\right) \to \left(\begin{array}{cccc|c} 1&0&0&0&6\\ 0&1&0&0&13\\ 0&0&1&0&29\\ 0&0&0&1&2 \end{array}\right) \\
\\
\mathbf{Ux}=\mathbf{y}: &&& \left(\begin{array}{ccccc|c} 2&4&1&5&-2&6\\ 0&3&5&2&-3&13\\ 0&0&10&2&1&29\\ 0&0&0&6&8&2 \end{array}\right) \\
\\
&&& \mathbf{x}=\frac{1}{36}\begin{pmatrix} 71+37s\\ -22+58s\\ 102+6s\\ 12-48s\\ 36s \end{pmatrix}
\end{aligned}
\end{gather*}
$$

Non LU factorisiable matrix
$$
\begin{gather*}
\mathbf{A} = \begin{pmatrix}
0 & 1 \\
1 & 1
\end{pmatrix} \\
\\
\mathbf{L}=\pmatrix{ 1 & 0 \\ l_{21} & 1} \quad \mathbf{U}=\pmatrix{ u_{11} & u_{12} \\ 0 & u_{22}} \\
\\
\mathbf{A}=\mathbf{LU} \implies \\
a_{11}=1\cdot u_{11}, \ \therefore u_{11}=0 \\
\\
\text{but }a_{21}=u_{11}\cdot l_{21}+1\cdot0=0 \\
\text{contradiction }\because a_{21}=1 \\
\\
\therefore \text{no LU factorization exists}
\end{gather*}
$$