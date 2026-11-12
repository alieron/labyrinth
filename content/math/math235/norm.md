---
tags:
  - math235/chapter4
  - math/linear_algebra
complete: false
succ: "[Lᵖ norms](/labyrinth/notes/math/higher_dimensions/Lᵖ_norms)"
prev: /labyrinth/notes/math/math235/orthogonality_II
next: /labyrinth/notes/math/math235/orthogonal_bases_II

---
### Concept
#### Norm
$$
\|x\|=\sqrt{\langle x,x\rangle}
$$

Properties
$$
\begin{align*}
1) && \text{Scalar multiple:} &&& \left\lVert a \vec{v} \right\rVert = |a|\left\lVert \vec{v} \right\rVert \\
\\
2) && \text{Triangle Inequality:} &&& \left\lVert \vec{v}+\vec{w} \right\rVert \leq \left\lVert \vec{v} \right\rVert+\left\lVert \vec{w} \right\rVert\\
\\
3) && \text{Positive:} &&& \begin{aligned}[t]
&\left\lVert \vec{v} \right\rVert \geq 0 \\
& \left\lVert \vec{v} \right\rVert = 0 \iff \vec{v} = \vec{0}
\end{aligned}
\end{align*}
$$

Triangle inequality
$$
\begin{align*}
&\text{Claim: }\left\lVert \vec{v}+\vec{w} \right\rVert \leq \left\lVert \vec{v} \right\rVert+\left\lVert \vec{w} \right\rVert \\
\\
&\quad\begin{aligned}
\left\lVert \vec{v} + \vec{w} \right\rVert^2 &= \left\langle \vec{v} + \vec{w}, \vec{v} + \vec{w}\right\rangle \\ &= \left\lVert \vec{v} \right\rVert^2 + \left\lVert \vec{w} \right\rVert^2 + \left\langle \vec{v} , \vec{w}\right\rangle + \overline{\left\langle \vec{v}, \vec{w}\right\rangle}\\ &= \left\lVert \vec{v} \right\rVert^2 + \left\lVert \vec{w} \right\rVert^2 + 2 \operatorname{Re}(\left\langle \vec{v}, \vec{w}\right\rangle)\\ &\leq \left\lVert \vec{v} \right\rVert^2 + \left\lVert \vec{w} \right\rVert^2 + 2\left\lvert \operatorname{Re}(\left\langle \vec{v}, \vec{w}\right\rangle) \right\rvert\\ &\leq \left\lVert \vec{v} \right\rVert^2 + \left\lVert \vec{w} \right\rVert^2 + 2\left\lvert \left\langle \vec{v}, \vec{w}\right\rangle \right\rvert\\ &\leq \left\lVert \vec{v} \right\rVert^2 + \left\lVert \vec{w} \right\rVert^2 + 2\left\lVert \vec{v} \right\rVert\left\lVert \vec{w} \right\rVert\\ &= (\left\lVert \vec{v} \right\rVert + \left\lVert \vec{w} \right\rVert)^2 \\
\\
\left\lVert \vec{v}+\vec{w} \right\rVert &\leq \left\lVert \vec{v} \right\rVert+\left\lVert \vec{w} \right\rVert
\end{aligned} \\
&&\square
\end{align*}
$$

0 norm
$$
\begin{align*}
&\text{Claim: }\left\lVert \vec{x} \right\rVert = 0 \iff \vec{x} = \vec{0} \\
\\
&(\implies) \ \text{Suppose } \left\lVert \vec{x} \right\rVert = 0 \\
& \quad \begin{aligned}[t]
&\left\lVert \vec{x} \right\rVert^{2} = 0 = \left\langle \vec{x},\vec{x} \right\rangle \\
&\therefore \vec{x} = \vec{0} && \text{(Positive Definiteness)}
\end{aligned} \\
\\
&(\impliedby) \ \text{Suppose }\vec{x} = \vec{0} \\
& \quad \begin{aligned}[t]
&\left\lVert \vec{x} \right\rVert = \sqrt{ \left\langle \vec{x},\vec{x} \right\rangle } = \sqrt{ \left\langle \vec{0}, \vec{0} \right\rangle } = \sqrt{ 0 }=0 \\
&\therefore \left\lVert \vec{x} \right\rVert = 0
\end{aligned} \\
\\
&\therefore \left\lVert \vec{x} \right\rVert = 0 \iff \vec{x} = \vec{0} \\
&& \square
\end{align*}
$$

#### Isometry
$$
T:V\to V\text{ is an isometry} \iff \left\lVert T(\vec{x}) \right\rVert = \left\lVert \vec{x} \right\rVert
$$

All isometries are invertible
$$
\begin{align*}
&\text{Claim: }T\text{ is invertible} \\
\\
&\text{Suppose }\vec{x}\in \operatorname{Ker}(T) \\
\\
&\quad\begin{aligned}
\left\lVert \vec{x} \right\rVert = \left\lVert T(\vec{x}) \right\rVert = \left\lVert \vec{0} \right\rVert = 0 &\implies \vec{x} = \vec{0} \\
&\implies \operatorname{Ker}(T) = \{ \vec{0} \} \\
&\implies T\text{ is injective} \\
&\implies T\text{ is surjective} && \text{(Dimension argument)} \\
&\implies T\text{ is invertible}
\end{aligned} \\
&&\square
\end{align*}
$$

Inverse of an isometry is also an isometry
$$
\begin{align*}
&\text{Claim: }\left\lVert T^{-1}(\vec{x}) \right\rVert = \left\lVert \vec{x} \right\rVert \\
\\
&\quad\begin{aligned}
\left\lVert T(T^{-1}(\vec{x})) \right\rVert &= \left\lVert \vec{x} \right\rVert && \text{(Inverse of Linear Transform)} \\
\\
\left\lVert T(T^{-1}(\vec{x})) \right\rVert &= \left\lVert T^{-1}(\vec{x}) \right\rVert && \text{(Definition of Isometry)}
\end{aligned} \\
\\
&\therefore \left\lVert T^{-1}(\vec{x}) \right\rVert = \left\lVert \vec{x} \right\rVert \implies T^{-1}\text{ is an isometry} \\
&&\square
\end{align*}
$$

#### Distance
- think of it as how similar/far apart two vectors are

$$
\operatorname{dist}(\vec{v},\vec{w}) = \left\lVert \vec{v}-\vec{w} \right\rVert
$$

Properties
$$
\operatorname{dist}(\vec{v},\vec{0}) = \left\lVert \vec{v} \right\rVert \\
\\
\operatorname{dist}(\vec{v},\vec{w}) \geq 0\\
\operatorname{dist}(\vec{v},\vec{w}) = 0 \iff \vec{v} = \vec{w} \\
\\
\operatorname{dist}(\vec{v},\vec{w}) = \operatorname{dist}(\vec{w},\vec{v})
$$

