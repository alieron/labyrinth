---
tags:
  - co250/chapter1
  - math/optimization
complete: false
next: /labyrinth/notes/math/co250/integer_programs

---
### Concept
#### Affine functions
- linear equation plus a constant translation
- related to [affine spaces](/labyrinth/notes/math/ma1522/subspaces#^69292f)

$$
f:\mathbb{R}^n\to\mathbb{R}\text{ is affine}\iff f(x)=a^Tx+\beta
\qquad a\in\mathbb{R}^n,\ \beta\in\mathbb{R}
$$
$$
f(x)=a_1x_1+a_2x_2+\cdots+a_nx_n+\beta
$$

#### Linear functions
$$
f:\mathbb{R}^n\to\mathbb{R}\text{ is linear}
\iff f(x)=a^Tx
\iff f\text{ is affine and }\beta=0
$$
$$
f(x)=a_1x_1+a_2x_2+\cdots+a_nx_n
$$

#### Linear programs

A linear program (LP) has:

- **decision variables:** the unknown quantities being chosen;
- **constraints:** finitely many affine equalities or non-strict inequalities defining feasible solutions;
- **objective function:** a linear function to minimize or maximize.

A compact form is

$$\min\{c^Tx:Ax\le b\}.$$

Rules for an LP formulation:

1. Variables cannot be multiplied or divided by other variables.
2. Strict inequalities are not allowed; use $\le$, $\ge$, or $=$.
3. There must be finitely many constraints.

To validate a formulation, map practical solutions to model solutions and back, preserving feasibility and objective value.

#### Multiperiod models
Multiperiod models couple decisions through time. With purchase $p_t$, inventory $I_t$, demand $d_t$, and capacity $C$, the central balance is
$$I_t+p_t=d_t+I_{t+1},\qquad 0\le I_t\le C.$$
Given $I_1$, minimizing $\sum_t c_tp_t$ shifts purchases toward cheap periods while respecting storage and demand. Holding cost adds $\sum_t h_tI_t$.

To minimize the maximum purchase, introduce $M$, impose $p_t\le M$ for every $t$, and minimize $M$. At optimum $M=\max_t p_t$; otherwise $M$ could decrease.


### Application
Production planning uses nonnegative production variables, resource-capacity constraints, and profit (revenue minus cost). Optimization is iterative: practical problem $\to$ mathematical model $\to$ solver $\to$ validation. See [multiperiod models](#), [integer programs](/labyrinth/notes/math/co250/integer_programs), and [nonlinear programs](/labyrinth/notes/math/co250/nonlinear_programs).
