---
tags:
  - math235/chapter2
  - math/linear_algebra
complete: false
prev: /labyrinth/notes/math/math235/subspaces_II
pred: "[linear transformations](/labyrinth/notes/math/ma1522/linear_transformations)"
next: /labyrinth/notes/math/math235/change_of_coordinates

---
### Summary
Linear map
- shortcut, similar to closure under linear combination
$$
L: V \rightarrow W \text{ is a linear map} \iff L (t\vec{x} + \vec{y}) = tL(\vec{x})+L(\vec{y})
$$

### Concept
#### Linear transformations
- aka linear map
- generalized as a map between two [vector spaces](/labyrinth/notes/math/math235/vector_spaces)

$$
\begin{gather*}
L: V \to W\text{ is a linear transformation}\iff \\
\\
\begin{aligned}
1) &&& L(\vec{x} + \vec{y}) = L(\vec{x}) + L(\vec{y}) \\
\\
2) &&& L(t\vec{x}) = tL(\vec{x})
\end{aligned}
\end{gather*}
$$

Zero vector preserved
$$
\begin{gather*}
L: V \rightarrow W \text{ is a linear map} \implies\\
\\
L\left(\vec{0}_{V}\right)= \vec{0}_{W}
\end{gather*}
$$

Linear maps cannot increase dimension
$$
\begin{align*}
& \text{Claim: } \{ L(\vec{v}_{1}), \dots, L(\vec{v}_{k}) \} \text{ is independent} \implies \{ \vec{v}_{1},\dots \vec{v}_{k} \}\text{ is independent} \\
\\
& \text{Suppose }\begin{aligned}[t]
a_{1} \vec{v}_{1} + \dots + a_{k}\vec{v}_{k} &= \vec{0} \\
L(a_{1} \vec{v}_{1} + \dots + a_{k}\vec{v}_{k}) &= L(\vec{0}) \\
&= \vec{0} && \text{(Zero Vector preserved)}\\
a_{1}L(\vec{v}_{1}) + \dots + a_{k}L(\vec{v}_{k}) &= \vec{0} && \text{(Definition of linear map)}\\
\end{aligned}\\
\\
&\text{Since }\{ L(\vec{v}_{1}), \dots, L(\vec{v}_{k}) \} \text{ is independent} \implies\\
&\therefore \forall i \in \{ 1,\dots k \}, \quad a_{i} = 0 \implies \{ \vec{v}_{1},\dots \vec{v}_{k} \}\text{ is independent} \\
\\
&& \square
\end{align*}
$$

#### [Range and kernel](/labyrinth/notes/math/ma1522/range_&_kernel)
$$
\begin{gather*}
\operatorname{range}(L) = \{L(\vec{x}) \in W : \vec{x} \in V\} \\
\\
\operatorname{ker}(L) = \{\vec{x} \in V : L(\vec{x}) = \vec{0}\}
\end{gather*}
$$
> range is the output space of the linear transform, kernel is the space of vectors that got squished to 0

Rank-nullity theorem
$$
\operatorname{rank}(L) + \operatorname{nullity}(L) = \operatorname{dim}(V)
$$

Dimension decrease means non zero nullity
$$
\begin{align*}
& \text{Claim: } \text{for }L:V \to U,\quad \operatorname{dim}(U) < \operatorname{dim}(V) \implies \operatorname{ker}(L)\neq \{ \vec{0} \} \\
\\
& \text{Suppose } \operatorname{dim}(U) < \operatorname{dim}(V) \\
\\
&\text{so, }\begin{aligned}[t]
\operatorname{rank}(L) + \operatorname{nullity}(L) &= \operatorname{dim}(V) \\
\operatorname{nullity}(L) &= \operatorname{dim}(V) -\operatorname{rank}(L) \\
&\geq \operatorname{dim}(V) -\operatorname{dim}(U) && \text{(}\operatorname{rank}(L)\leq \operatorname{dim}(U)\text{)}\\
&> 0
\end{aligned}\\
\\
&\therefore \operatorname{nullity}(L) >0 \implies \operatorname{ker}(L)\neq \{ \vec{0} \} \\
\\
&& \square
\end{align*}
$$
### Application
The evaluation map is a linear map
- polynomial evaluated at a certain value
$$
\begin{gather*}
\text{ev}_{t}: \mathcal{P}_{n}(\mathbb{F}) \to \mathbb{F} \\
\\
\text{ev}_{t}(p(x)) = p(t)
\end{gather*}
$$
$$
\begin{align*}
& \text{Claim: } \text{ev}_{t}: \mathcal{P}_{n}(\mathbb{F}) \to \mathbb{F}\text{ is a linear map} \\
\\
& \text{Let }p, q \in \mathcal{P}_{n}(\mathbb{F}), \ s \in \mathbb{F} \\
\\
& 1) \ \begin{aligned}[t]
\text{ev}_{t}(p(x) + q(x)) &= (p(t) + q(t)) \\
&= p(t) + q(t) \\
&= \text{ev}_{t}(p(x)) + \text{ev}_{t}(q(x))
\end{aligned} \\
\\
& 2) \ \begin{aligned}[t]
\text{ev}_{t}(s\cdot p(x)) &= (s\cdot p(t)) \\
&= s \cdot p(t) \\
&= s \cdot \text{ev}_{t}(p(x))
\end{aligned} \\
\\
&\therefore \text{ev}_{t}\text{ is a  linear map} \\
\\
&& \square
\end{align*}
$$
> notice this kinda means that a field is a vector space too

Trace is a linear map
$$
\begin{gather*}
\operatorname{tr}: M_{n \times n}(\mathbb{F}) \to \mathbb{F} \\
\\
A = \begin{bmatrix}a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{n1} &\cdots &a_{nn} \end{bmatrix} \\
\\
\operatorname{tr}(A) = a_{11} + a_{22} + \cdots + a_{nn}
\end{gather*}
$$
$$
\begin{align*}
& \text{Claim: } \operatorname{tr}: M_{n \times n}(\mathbb{F}) \to \mathbb{F}\text{ is a linear map} \\
\\
& \text{Let }A,B \in M_{n \times n}(\mathbb{F}), \ t \in \mathbb{F} \\
\\
& 1) \ \begin{aligned}[t]
\operatorname{tr}(A+B) &= a_{11} + b_{11} + a_{22} + b_{22} + \cdots + a_{nn} + b_{nn} \\ &= a_{11} + a_{22} + \cdots + a_{nn} + b_{11} + b_{22} + \cdots + b_{nn} \\ &= \operatorname{tr}(A) + \operatorname{tr}(B)
\end{aligned} \\
\\
& 2) \ \begin{aligned}[t]
\operatorname{tr}(tA) &= ta_{11} + ta_{22} + \cdots + ta_{nn} \\ &= t(a_{11} + a_{22} + \cdots + a_{nn}) \\ &= t(\operatorname{tr}(A))
\end{aligned} \\
\\
&\therefore \operatorname{tr}\text{ is a  linear map} \\
\\
&& \square
\end{align*}
$$

Differentiation map is linear
$$
\begin{gather*}
D:\mathcal{P}_3(\mathbb{R}) \to \mathcal{P}_2(\mathbb{R}) \\
\\
\begin{aligned}
D(p(x)) &= p'(x) \\
D(a_0 + a_1x + a_2x^2 + a_3x^3) &= a_1 + 2a_2x + 3a_3x^2
\end{aligned}
\end{gather*}
$$

Integration map is linear
$$
\begin{gather*}
I:\mathcal{P}_3(\mathbb{R}) \to \mathcal{P}_4(\mathbb{R}) \\
\\
\begin{aligned}
I(p) &= \int_0^x p(t)\ dt \\
I(a_0 + a_1x + a_2x^2 + a_3x^3) &= a_0 x + \dfrac12 a_1x^2 + \dfrac13 a_2x^3 + \dfrac14 a_3 x^4
\end{aligned}
\end{gather*}
$$

Rank and nullity
$$
\begin{gather*}
L: M_{n}(\mathbb{C}) \to \mathbb{C} \quad L(A) = a_{11} + a_{nn} \\
\\
\operatorname{rank}(L)=1\\
\\
\operatorname{rank}(L) + \operatorname{nullity}(L) = \operatorname{dim}(M_{n}(\mathbb{C})) \\
1 + \operatorname{nullity}(L) = n^2 \\
\operatorname{nullity}(L)= n^{2}-1
\end{gather*}
$$
