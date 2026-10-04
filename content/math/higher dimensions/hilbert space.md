---
tags:
  - math/linear_algebra
  - math/analysis
  - to_review
complete: false
prev: /labyrinth/notes/math/math235/inner_product
next: /labyrinth/notes/math/higher_dimensions/n-sphere

---
### Summary
- A Hilbert space is a complete [inner product](/labyrinth/notes/math/math235/inner_product) space
- It extends Euclidean projection and orthogonality to infinite dimensions

### Concept
#### Completeness
- Every Cauchy sequence converges to an element of the space
- Distinguish algebraic completeness from completeness in the induced norm
- Compare completion of an inner product space with metric completion

#### Canonical spaces
- Finite-dimensional Euclidean and unitary spaces
- Sequence space $\ell^2$ and function space $L^2$

$$
\ell^2=\left\{x:\sum_i|x_i|^2<\infty\right\},\qquad
\langle f,g\rangle=\int_a^b f(x)\overline{g(x)}\,dx
$$

#### Projection theory
- Every closed convex subset has a unique nearest point
- Closed subspaces yield orthogonal decompositions
- Study how projection fails without closedness or completeness

#### Orthonormal bases
- A Hilbert basis may be infinite and is defined through dense span
- Parseval identifies norm with square-summable coordinates
- Compare separable and nonseparable Hilbert spaces

$$
\|x\|^2=\sum_i|\langle x,e_i\rangle|^2
$$

#### Operator theory
- Examine bounded operators, adjoints, compactness, and spectra
- Connect self-adjoint operators to observables and variational principles
- Research the Riesz representation theorem

#### Open questions
- Which Banach-space results depend specifically on inner products
- How do weak and strong convergence differ
- When do orthogonal expansions converge pointwise rather than only in norm

### Links
- [fourier series](/labyrinth/notes/cs/cs2108/fourier_series)
- [basis functions](/labyrinth/notes/cs/cs2108/basis_functions)
- [inner product](/labyrinth/notes/math/math235/inner_product)
- [Lᵖ norms](/labyrinth/notes/math/higher_dimensions/Lᵖ_norms)
- [n-sphere](/labyrinth/notes/math/higher_dimensions/n-sphere)

### Sources
- [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space)
- [MIT OCW Functional Analysis](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/)
- [Conway Functional Analysis](https://link.springer.com/book/10.1007/978-1-4757-4383-8)
