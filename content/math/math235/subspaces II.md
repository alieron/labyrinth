---
tags:
  - math235/chapter1
  - math/linear_algebra
complete: false
prev: /labyrinth/notes/math/math235/vector_spaces
pred: "[subspaces](/labyrinth/notes/math/ma1522/subspaces)"
next: /labyrinth/notes/math/math235/linear_transformations_II

---
### Summary
| Task                                    | Start with                   | Goal                                |
| --------------------------------------- | ---------------------------- | ----------------------------------- |
| Show $v\in\operatorname{Span}\{v_i\}$ | $v=\sum_i a_iv_i$          | Find coefficients                   |
| Show $\{v_i\}$ spans $V$            | An arbitrary $v\in V$      | Express $v=\sum_i a_iv_i$         |
| Show $\{v_i\}$ is independent         | $\sum_i a_iv_i=0$            | Prove every $a_i=0$               |
| Show dependence                         | Look for $\sum_i a_iv_i=0$ | Find coefficients not all zero      |
| Show a set is a basis                   | Independence and spanning    | Or use the dimension shortcut below |

Dimensions of vector spaces
$$
\begin{array}{c|c}
V&\dim V\\ \hline
\mathbb F^n&n\\
\mathcal P_n(\mathbb F)&n+1\\
M_{m\times n}(\mathbb F)&mn\\
\{0\}&0
\end{array}
$$


### Concept
#### Subspace
- a subset of a [vector space](/labyrinth/notes/math/math235/vector_spaces), that is also a vector space

zero must be the same zero as the original vector space



$$
W = \{\begin{array}{c|c} p(x)\in \mathcal{P}_{n}(\mathbb{R}) & p'(x) = 0 \end{array}\}
$$


Intersection of subspaces
$$
\begin{align*}
&\text{Claim: }W,U\text{ are subspaces of }V \implies W\cap U\text{ is a subspace of V} \\
\\
&\text{Suppose }\vec{x},\vec{y} \in W \cap U \\
&\text{then }\begin{aligned}[t]
&\vec{x},\vec{y} \in W\text{ and }\vec{x}, \vec{y} \in U \\
&\implies s\cdot \vec{x} + \vec{y} \in W \text{ and } s\cdot \vec{x} + \vec{y} \in U \\
&\implies s\cdot \vec{x} + \vec{y} \in W \cap U
\end{aligned} \\
\\
&\therefore W\cap U\text{ is a subspace of V} \\
&&\square
\end{align*}
$$

Addition of subspaces
$$
W+U=\{\vec{w}+\vec{u}:\vec{w}\in W,\vec{u}\in U\}
$$
$$
\begin{align*}
&\text{Claim: }W,U\text{ are subspaces of }V \implies W+ U\text{ is a subspace of V} \\
\\
&\text{Suppose }\vec{x},\vec{y} \in W + U \\
&\text{then }\begin{aligned}[t]
&\vec{x}= \vec{w}_{1}+\vec{u}_{1} \text{ and } \vec{y}= \vec{w}_{2} + \vec{u}_{2}  \\
&\implies \begin{aligned}[t]
s\cdot \vec{x} + \vec{y} &= s\cdot (\vec{w}_{1}+\vec{u}_{1}) + \vec{w}_{2} + \vec{u}_{2} \\
&= \underbrace{ s\cdot \vec{w}_{1} + \vec{w}_{2} }_{ \in W } + \underbrace{ s\cdot \vec{u}_{1} + \vec{u}_{2} }_{ \in U }
\end{aligned} \\
&\implies s\cdot \vec{x} + \vec{y} \in W+U
\end{aligned} \\
\\
&\therefore W + U\text{ is a subspace of V} \\
&&\square
\end{align*}
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

### Application
[Plane](/labyrinth/notes/math/ma1301/planes_in_R³) as a subspace of $\mathbb{R}^3$
$$
\begin{gather*}
x + 2y+3z = 0 \\
\\
x = -2y - 3z \\
\\
\begin{pmatrix}
x \\
y \\
z
\end{pmatrix} = \begin{pmatrix}
-2y-3z \\
y \\
z
\end{pmatrix}= y\begin{pmatrix}
-2 \\
1 \\
0
\end{pmatrix}+z\begin{pmatrix}
-3 \\
0 \\
1
\end{pmatrix}
\end{gather*}
$$