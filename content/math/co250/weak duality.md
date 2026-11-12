---
tags:
  - co250/chapter3
  - math/optimization
  - to_review
complete: false
prev: /labyrinth/notes/math/co250/feasible_regions
next: /labyrinth/notes/math/co250/shortest_path_duality

---
### Summary
Primal to dual

| Primal item                   | Dual item                     |
| ----------------------------- | ----------------------------- |
| constraint $\le,=,\ge$        | variable $\ge0$, free, $\le0$ |
| variable $\ge0$, free, $\le0$ | constraint $\ge,=,\le$        |

### Concept
#### Duality
- a *dual* is a related problem that **gives bounds** on the *primal* problem

$$
\begin{gather*}
\begin{array}{rl}
\min && c^T x \\
\text{s.t. } && Ax \geq b \\
&& x \geq \mathbb{0}
\end{array}\tag{P} \\
\\
\begin{array}{rl}
\max && b^T y \\
\text{s.t. } && A^T y \leq c \\
&& y \geq \mathbb{0}
\end{array}\tag{D}
\end{gather*}
$$

#### Weak duality
- for min primal, the dual provides a lower bound on the primal's objective

$$
\bar{x}\text{ feasible for (P)}\land \bar{y}\text{ feasible for (D)} \implies b^T\bar{y} \leq c^T\bar{x}
$$
> min problem is larger than the max problem

$$
\begin{gather*}
\begin{aligned}
b^T\bar{y} &= \bar{y}^Tb \\
&\leq \bar{y}^T(A\bar{x}) && \text{since }\bar{y} \geq \mathbb{0} \text{ and } b \leq A\bar{x} \\
&= (A^T\bar{y})^T\bar{x} \\
&\leq c^T\bar{x} && \text{since } \bar{x} \geq \mathbb{0} \text{ and } A^T\bar{y} \leq c
\end{aligned}
\end{gather*}
$$


Equality certifies both optimal. It also implies an unbounded primal has infeasible dual, and vice versa.


For a max primal, each primal constraint creates a dual variable and each primal variable creates a dual constraint; the matrix transposes.

![[Pasted image 20261110023619.png]]

Thus the dual of $\max c^Tx$ with right-hand side $b$ is a minimization of $b^Ty$ subject to the corresponding $A^Ty$ relations. In the standard pair,
$$\min\{c^Tx:Ax\ge b,x\ge0\}\leftrightarrow
\max\{b^Ty:A^Ty\le c,y\ge0\}.$$
Taking the dual twice recovers the primal. The guarantees are in [strong duality](/labyrinth/notes/math/co250/strong_duality).


