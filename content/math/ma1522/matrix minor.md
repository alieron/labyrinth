---
tags:
- ma1522/chapter2
- math/linear_algebra
complete: false
index: null
---

### Summary
First minor ^c8b222
- submatrix formed by deleting the ith row and jth column
> conventionally it refers to the determinant of this submatrix, for MA1522 it refers to the submatrix

Principal minor
- minors where i=j

Leading principal minor
- submatricies starting from the top left corner
- and n by n matrix has n leading principal minors

### Application
Computing first minor
$$
\begin{gather*}
\mathbf{A} = \begin{pmatrix}1&4&7\\3&0&5\\-1&9&11\\\end{pmatrix} \\
\\
\mathbf{M}_{2,3} = \begin{pmatrix}1&4&\Box \\\Box &\Box &\Box \\-1&9&\Box\end{pmatrix}=\begin{pmatrix}1&4\\-1&9\end{pmatrix}
\end{gather*}
$$

Leading principal submatricies
$$
\begin{gather*}
& \mathbf{A} = \begin{pmatrix}1&4&7\\3&0&5\\-1&9&11\\\end{pmatrix} \\
\\
\text{Leading principal minors:}& \begin{pmatrix}1&\Box&\Box \\\Box &\Box &\Box \\\Box&\Box&\Box \\\end{pmatrix}=\begin{pmatrix}1\end{pmatrix} \quad \begin{pmatrix}1&4&\Box \\3 &0 &\Box \\\Box&\Box&\Box \\\end{pmatrix}=\begin{pmatrix}1 & 4 \\3 & 0\end{pmatrix} \quad \begin{pmatrix}1&4&7\\3&0&5\\-1&9&11\\\end{pmatrix}
\end{gather*}
$$
