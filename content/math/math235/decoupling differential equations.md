---
tags:
  - math235/chapter3
  - math/calculus
complete: false
---
### Concept
[differentiation](/labyrinth/notes/math/ma1301/differentiation) [diagonalization II](/labyrinth/notes/math/math235/diagonalization_II)

![[Pasted image 20261111230631.png]]
$$
\begin{aligned}
\dfrac{dx}{dt} &= 5x - 3y \\
\dfrac{dy}{dt} &= -6x + 2y
\end{aligned} \\
\\
\text{sub }u = -\dfrac 23x + \dfrac 13 y \quad\text{and}\quad w = \dfrac 13x + \dfrac 13y \\
\\
\begin{aligned}
\dfrac{du}{dt} &= -\dfrac 23 \dfrac{dx}{dt} + \dfrac 13 \dfrac{dy}{dt} \\
&= -\dfrac 23 (5x - 3y) + \dfrac 13(-6x + 2y) \\
&= -\dfrac{16}{3}x + \dfrac 83 y\\ 
&= 8u \\
\\
\dfrac{dw}{dt} &= \dfrac 13(5x - 3y) + \dfrac 13(-6x + 2y) \\
&= -\dfrac 13 x - \dfrac 13 y \\
&= -w
\end{aligned}
$$
> these differential equations are much easier to solve since they only have 1 variable (ie. decoupled)

how to find?
$$
\vec{x} = \begin{bmatrix} x \\ y \end{bmatrix}, \quad \dfrac{d\vec{x}}{dt} = \begin{bmatrix} \dfrac{dx}{dt} \\ \dfrac{dy}{dt} \end{bmatrix}, \quad\text{and}\quad A = \begin{bmatrix} 5 & -3 \\ -6 & 2 \end{bmatrix} \\
\\
\dfrac{d\vec{x}}{dt} = A \vec{x} \\
\\
\text{diagonalize: }A=PDP^{-1} \\
\\
P = \begin{bmatrix} -1 & 1 \\ 1 & 2 \end{bmatrix} \quad\text{and}\quad D = \begin{bmatrix} 8 & 0 \\ 0 & -1 \end{bmatrix} \\
\\
\dfrac{d\vec{x}}{dt} = PDP^{-1}\vec{x} \\
\\
\vec{v} = \begin{bmatrix} u \\ w \end{bmatrix} = P^{-1}\vec{x} = \begin{bmatrix} - \dfrac 23 x + \dfrac 13 y \\ \dfrac 13 x + \dfrac 13y \end{bmatrix} \\
\\
\dfrac{d(P\vec{v})}{dt} = P\dfrac{d\vec{v}}{dt}= PD\vec{v} \\
\\
\dfrac{d\vec{v}}{dt} = D\vec{v} \\
\begin{bmatrix} \dfrac{du}{dt} \\ \dfrac{dw}{dt} \end{bmatrix} = \begin{bmatrix} 8 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} u \\ w \end{bmatrix} = \begin{bmatrix} 8u \\ -w \end{bmatrix}
$$