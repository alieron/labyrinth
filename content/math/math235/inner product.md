---
tags:
  - math235/chapter4
  - math/linear_algebra
  - math/analysis
  - to_review
complete: false
prev: /labyrinth/notes/math/math235/diagonalization_II
pred: "[dot product](/labyrinth/notes/math/ma1301/dot_product)"
next: /labyrinth/notes/math/math235/orthogonality_II

---
### Summary
Standard inner product on $\mathbb{C}^n$
- requires the [complex conjugate](/labyrinth/notes/math/imagine/complex_numbers#Complex_conjugate)

$$
\begin{gather*}
\vec{v}, \vec{w} \in \mathbb{C}^n \\
\\
\left\langle \vec{v}, \vec{w} \right\rangle = v_{1} \overline{w_{1}} + \dots + v_{n}\overline{w_{n}}
\end{gather*}
$$

Standard inner product on $\mathcal{P}_{n}(\mathbb{R})$
- similar to the [inner product on signals](/labyrinth/notes/cs/cs2108/basis_functions#^a3bbc8)

$$
\begin{gather*}
p,q \in \mathcal{P}_{n}(\mathbb{R}) \\
\\
\langle p, q \rangle = \int_{-1}^{1} p(x)q(x) \ dx
\end{gather*}
$$

Standard inner product on $M_{m\times n}(\mathbb{C})$
- Fronbenius inner product

$$
\begin{gather*}
A,B \in M_{m\times n}(\mathbb{C}) \\
\\
\begin{aligned}
\langle A, B \rangle &= \operatorname{tr}(\overline{B^T}A)\\
&= \sum_{i=1}^m \sum_{j=1}^n a_{ij} b_{ij}.
\end{aligned}
\end{gather*}
$$

### Concept
#### Inner product
- generalization of the [dot product](/labyrinth/notes/math/ma1301/dot_product) across vector spaces

$$
\langle \phantom v,\phantom i \rangle : V\times V \to \mathbb{F}
$$

Axioms
$$
\begin{align*}
1) && \text{Conjugate Symmetry:} &&& \left\langle \vec{v},\vec{w} \right\rangle = \overline{\left\langle \vec{w},\vec{v} \right\rangle} \\
\\
2) && \text{Linearity in first arg:} &&& \left\langle \alpha \vec{v} + \vec{u}, \vec{w} \right\rangle = \alpha\left\langle \vec{v},\vec{w} \right\rangle + \left\langle \vec{u},\vec{w} \right\rangle\\
\\
3) && \text{Positive Definiteness:} &&& \begin{aligned}[t]
&\left\langle \vec{v},\vec{v} \right\rangle \geq 0 \\
&\left\langle \vec{v},\vec{v} \right\rangle = 0 \iff \vec{v} = \vec{0}
\end{aligned}
\end{align*}
$$

### Application
All vectors are orthogonal to the zero vector
$$
\begin{align*}
&\text{Claim: }\left\langle \vec{0}, \vec{v} \right\rangle = \left\langle \vec{v}, \vec{0} \right\rangle=0 \\
\\
& \text{Claim 1: }  \left\langle \vec{0}, \vec{v} \right\rangle = 0 \\
\\
& \quad\begin{aligned}[t]
\left\langle \vec{0}, \vec{v} \right\rangle &= \left\langle 0 \cdot \vec{0}, \vec{v} \right\rangle \\
&= 0 \left\langle  \vec{0}, \vec{v} \right\rangle && \text{(Linearity)} \\
&= 0
\end{aligned} \\
\\
& \text{Claim 2: }  \left\langle \vec{v}, \vec{0} \right\rangle = 0 \\
\\
& \quad\begin{aligned}[t]
\left\langle \vec{v}, \vec{0} \right\rangle &= \overline{\left\langle \vec{0}, \vec{v} \right\rangle} && \text{(Conjugate Symmetry)}\\
&= \overline{0} \\
&= 0
\end{aligned}
\end{align*}
$$

Linearity(with conjugation) in second argument
$$
\begin{align*}
&\text{Claim: }\left\langle \vec{w}, \alpha \vec{v} + \vec{u} \right\rangle = \overline{\alpha}\left\langle \vec{w},\vec{v} \right\rangle + \left\langle \vec{w},\vec{u} \right\rangle \\
\\
& \quad \begin{aligned}
\left\langle \vec{w}, \alpha \vec{v} + \vec{u} \right\rangle &= \overline{\left\langle \alpha \vec{v} + \vec{u}, \vec{w} \right\rangle} && \text{(Conjugate Symmetry)} \\
&= \overline{\alpha\left\langle \vec{v}, \vec{w} \right\rangle + \left\langle \vec{u}, \vec{w} \right\rangle} && \text{(Linearity)} \\
&= \overline{\alpha} \overline{\left\langle \vec{v}, \vec{w} \right\rangle} + \overline{\left\langle \vec{u}, \vec{w} \right\rangle} \\
&= \overline{\alpha}\left\langle \vec{w},\vec{v} \right\rangle + \left\langle \vec{w},\vec{u} \right\rangle && \text{(Conjugate Symmetry)}
\end{aligned}
\end{align*}
$$

Shortcut for inner products in $M_{2}(\mathbb{R})$
TODO

Linear transform involving inner product
$$
\begin{gather*}
T: M_{2}(\mathbb{R}) \to M_{2}(\mathbb{R}) \\
\\
A = \begin{bmatrix}
1 & 1 \\
1 & 1
\end{bmatrix} \\
T(B) = \left\langle B,A \right\rangle A \\
\\
\text{generalise: }B = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix} \\
\\
\left\langle B,A \right\rangle = \operatorname{tr}(A^T B) = a+b+c+d \\
\\
\therefore T\left(\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}\right) = (a+b+c+d) \begin{bmatrix}
1 & 1 \\
1 & 1
\end{bmatrix} \\
\\
\\
\text{Kernel:} \\
\\
\begin{aligned}
T(B) = 0 &\implies a+b+c+d = 0 \\
&\implies a = -b-c-d
\end{aligned} \\
\\
\begin{aligned}
B &= \begin{bmatrix}
-b-c-d & b \\
c & d
\end{bmatrix} \\
&= b\begin{bmatrix}
-1 & 1 \\
0 & 0
\end{bmatrix} + c \begin{bmatrix}
-1 & 0 \\
1 & 0
\end{bmatrix} + d \begin{bmatrix}
-1 & 0 \\
0 & 1
\end{bmatrix}
\end{aligned} \\
\\
\operatorname{Ker}(T) = \operatorname{span}\left\{
\begin{bmatrix}
-1 & 1 \\
0 & 0
\end{bmatrix}, \begin{bmatrix}
-1 & 0 \\
1 & 0
\end{bmatrix}, \begin{bmatrix}
-1 & 0 \\
0 & 1
\end{bmatrix}\right\}
\end{gather*}
$$


### Sources
- [Inner product space](https://en.wikipedia.org/wiki/Inner_product_space)
- [Axler Linear Algebra Done Right](https://linear.axler.net/)
- [Conway Functional Analysis](https://link.springer.com/book/10.1007/978-1-4757-4383-8)
