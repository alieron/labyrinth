---
tags:
  - math235/chapter1
  - math/linear_algebra
complete: false
prev: /labyrinth/notes/math/math235/vector_spaces
pred: "[subspaces](/labyrinth/notes/math/ma1522/subspaces)"
next: /labyrinth/notes/math/math235/linear_transformations_II

---
### Concept
#### Subspace
- a subest of a [vector space](/labyrinth/notes/math/math235/vector_spaces), that is also a vector space

zero must be the same zero as the original vector space



$$
W = \{\begin{array}{c|c} p(x)\in \mathcal{P}_{n}(\mathbb{R}) & p'(x) = 0 \end{array}\}
$$

[linear combinations](/labyrinth/notes/math/ma1522/linear_combinations)



$$
\begin{align*}
W &= \{\begin{array}{c|c} A \in M_{2\times 2}(\mathbb{F}) & \operatorname{trace}(A) = 0 \end{array}\}\\
&= \left\{\begin{array}{c|c} \begin{bmatrix}
a & b \\ c & -a
\end{bmatrix} & a,b,c \in \mathbb{F} \end{array}\right\}\\
&= \left\{\begin{array}{c|c} a\begin{bmatrix}
1&0\\0&-1
\end{bmatrix}+ b \begin{bmatrix}
0&1\\0&0
\end{bmatrix}+ c \begin{bmatrix}
0&0\\1&0
\end{bmatrix} & a,b,c \in \mathbb{F} \end{array}\right\}
\end{align*}
$$

$$
W = \{\begin{array}{c|c} p \in P_{2}(\mathbb{R}) & p'(1)=p(-1) \end{array}\}
$$
> the intuition is that its a valid subspace as long as the conditions looks linear, and not affine(with some scalar constant)

span is more useful when you need to show examples, 