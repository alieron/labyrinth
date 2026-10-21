---
tags:
  - math235/chapter4
  - math/linear_algebra
  - math/analysis
  - to_review
complete: false
prev: /labyrinth/notes/math/math235/diagonalization_II
pred: "[orthogonality](/labyrinth/notes/math/ma1522/orthogonality)"
next: /labyrinth/notes/math/math235/adjoint

---
### Summary
- An inner product equips a vector space with length, angle, and orthogonality
- Its induced norm supports projection and approximation

$$
\|x\|=\sqrt{\langle x,x\rangle}
$$

### Concept
#### Inner product
- generalization of the [dot product](/labyrinth/notes/math/ma1301/dot_product) across vector spaces

$$
\langle \phantom v,\phantom i \rangle : V\times V \to \mathbb{F}
$$

Axioms
- Specify which argument is linear under the chosen convention
- Require conjugate symmetry and positive definiteness over complex spaces
- Compare bilinear forms, sesquilinear forms, and semi-inner products

#### Geometry
- Orthogonality means $\langle x,y\rangle=0$
- Projection is the closest point in a one-dimensional subspace
- Extend to orthogonal complements and closed subspaces

$$
\operatorname{proj}_u v=\frac{\langle v,u\rangle}{\langle u,u\rangle}u
$$

#### Cauchy-Schwarz
- Investigate equality conditions and consequences for angle definitions
- Derive triangle inequality for the induced norm

$$
|\langle x,y\rangle|\le\|x\|\|y\|
$$

#### Orthonormal systems
- Compare Gram-Schmidt, QR factorization, and numerical loss of orthogonality
- Study Bessel inequality and Parseval equality
- Connect Fourier coefficients to projections in [hilbert space](/labyrinth/notes/math/higher_dimensions/hilbert_space)


Standard inner product on $\mathcal{P}_{n}(\mathbb{R})$
- similar to the [inner product on signals](/labyrinth/notes/cs/cs2108/basis_functions#^a3bbc8)

$$
\begin{gather*}
p,q \in \mathcal{P}_{n}(\mathbb{R}) \\
\\
\langle p, q \rangle = \int_{-1}^{1} p(x)q(x) \ dx
\end{gather*}
$$

Standard inner product on $M_{m\times n}(\mathbb{R})$
- Fronbenius inner product

$$
\begin{gather*}
A,B \in M_{m\times n}(\mathbb{R}) \\
\\
\begin{aligned}
\langle A, B \rangle &= \operatorname{tr}(B^TA)\\
&= \sum_{i=1}^m \sum_{j=1}^n a_{ij} b_{ij}.
\end{aligned}
\end{gather*}
$$

### Sources
- [Inner product space](https://en.wikipedia.org/wiki/Inner_product_space)
- [Axler Linear Algebra Done Right](https://linear.axler.net/)
- [Conway Functional Analysis](https://link.springer.com/book/10.1007/978-1-4757-4383-8)
