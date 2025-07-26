---
tags:
- ma1522/chapter2
- math/linear_algebra
complete: true

---


### Summary
Diagonal matrices ^7a3e46
- stretch matrix
- only the diagonal entries are filled, (i,j) where i=j

$$\mathbf{D} = \begin{pmatrix}a_{11}&0&\cdots&0\\0&a_{22}&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&a_{nn}\end{pmatrix}$$

Scalar matrices ^ca64e0
- only the diagonal entries are filled, with the same value

$$\mathbf{S}=\begin{pmatrix}s&0&\cdots&0\\0&s&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&s\end{pmatrix}$$

Identity matrix ^0009e8
- only the diagonal entries are 1

$$\mathbf{I}_{n}=\begin{pmatrix}1&0&\cdots&0\\0&1&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&1\end{pmatrix}$$

Triangle matrices
- Eetries are filled in a triangle shape

Upper triangle matrices
- only entries *on and above* the diagonal are filled

$$\\\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\0&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&a_{nn}\end{pmatrix}$$

Strictly upper triangular matrices
- only entries *above* the diagonal are filled

$$\begin{pmatrix}0&a_{12}&\cdots&a_{1n}\\0&0&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&0\end{pmatrix}$$

Lower triangular matrices
- only entries *on and below* the diagonal are filled

$$\\\begin{pmatrix}a_{11}&0&\cdots&0\\a_{21}&a_{22}&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{pmatrix}$$

Strictly lower triangular matrices
- only entries *below* the diagonal are filled

$$\begin{pmatrix}0&0&\cdots&0\\a_{21}&0&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\a_{n1}&a_{n2}&\cdots&0\end{pmatrix}$$