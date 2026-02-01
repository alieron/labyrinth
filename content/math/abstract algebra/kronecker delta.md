---
tags:
  - math/linear_algebra
complete: true
---
### Summary
Properties
$$
\begin{align*}
\text{Symmetric:} &&& \delta_{ij}=\delta_{ji} \\
\\
\text{Sifting:} &&& \sum_{i}\delta_{ji}a_{i} = \sum_{i}a_{i}\delta_{ij}=a_{j} & \text{(Extraction)} \\
\\
&&& \sum_{k}\delta_{ik}\delta_{kj} = \delta_{ij}
\end{align*}
$$
### Concept
#### Kronecker delta
- 1 if the variables are equal
- 0 otherwise

$$
\delta_{ij} = \begin{cases}
0 & \text{if }i\neq j \\
1&\text{if }i = j
\end{cases}
$$
> see the similarity with the definition of [orthogonality](/labyrinth/notes/math/ma1522/orthogonality)

Identity matrix
- entries match the delta

$$
\begin{gather*}
\text{for }\mathbf{I}_{n\times n}\quad I_{ij}=\delta_{ij} \\
\\
\begin{pmatrix}
1 & 0 & \dots & 0 \\
0 & 1 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & 1
\end{pmatrix}=\begin{pmatrix}
\delta_{11} & \delta_{12} & \dots & \delta_{1n} \\
\delta_{21} & \delta_{22} & \dots & \delta_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
\delta_{n1} & \delta_{n2} & \dots & \delta_{nn} \\
\end{pmatrix}
\end{gather*}
$$

Generalisation of the [dot product](/labyrinth/notes/math/ma1522/vectors_in_Rⁿ#^8d371f)
- double sum <-> single sum
- only sum when the components are of the same basis

$$
\begin{gather*}
\text{let }\mathbf{a},\mathbf{b}\in \mathbb{R}^n \\
\mathbf{a}=\begin{pmatrix}
a_{1} & a_{2} & \dots & a_{n}
\end{pmatrix} \quad \mathbf{b}=\begin{pmatrix}
b_{1} & b_{2} & \dots & b_{n}
\end{pmatrix} \\
\\
\mathbf{a}\cdot \mathbf{b}=\sum_{i=1}^{n} \sum_{j=1}^{n} a_{i}\delta_{ij}b_{j} = \sum_{i=1}^{n} a_{i}b_{i}
\end{gather*}
$$
### Application
Infinite sum
$$
\begin{align*}
\sum_{i=1}^{\infty}a_{i}\delta_{i_{3}} &= a_{1}\cancelto{ 0 }{ \delta_{13} }+a_{2}\cancelto{ 0 }{ \delta_{23} }+a_{3}\cancelto{ 1 }{ \delta_{33} } + \dots \\
&= a_{3}
\end{align*}
$$
> sifting: idea of extracting that specific component from the sum