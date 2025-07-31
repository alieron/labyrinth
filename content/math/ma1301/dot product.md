---
tags:
- ma1301/chapter4
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1301/unit_vectors
next: /labyrinth/notes/math/ma1301/cross_product
---
   
### Summary
Scalar/dot product, sum of the product of each component
$$
\mathbf{a}\cdot \mathbf{b} = x_{a}x_{b}+y_{a}y_{b}+z_{a}z_{b}\\
$$

Angle between two vectors
$$
\begin{align*}
\mathbf{a}\cdot \mathbf{b} & = |\mathbf{a}||\mathbf{b}|\cdot \cos \theta \\
\\
\cos \theta & = \frac{\mathbf{a}\cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\\
\end{align*}
$$

Rules
$$
\begin{align*}
\mathbf{a}\cdot \mathbf{a} & = |\mathbf{a}|^2 \\
\\
\mathbf{a}\cdot \mathbf{b} & = 0, \quad if \ \mathbf{a} \perp \mathbf{b} \\
\\
\lambda(\mathbf{a}\cdot \mathbf{b}) & = (\lambda \mathbf{a})\cdot \mathbf{b}=\mathbf{a}\cdot(\lambda \mathbf{b}), \quad for \ \lambda \in \mathbb{R} \\
\\
\mathbf{a}\cdot(\mathbf{b}+\mathbf{c}) & = \mathbf{a}\cdot \mathbf{b}+\mathbf{a}\cdot \mathbf{c} \\
\end{align*}
$$

Compound vectors
$$
\begin{align*}
|\mathbf{a}+\mathbf{b}| & = \sqrt{ (\mathbf{a}+\mathbf{b})\cdot(\mathbf{a}+\mathbf{b}) } \\
& = \sqrt{ \mathbf{a}\cdot(\mathbf{a}+\mathbf{b}) + \mathbf{b}\cdot(\mathbf{a}+\mathbf{b}) } \\
& = \sqrt{ \mathbf{a}\cdot \mathbf{a}+\mathbf{a}\cdot \mathbf{b} + \mathbf{b}\cdot \mathbf{a}+\mathbf{b}\cdot \mathbf{b} } \\
& = \sqrt{ \mathbf{a}\cdot \mathbf{a} + 2(\mathbf{a}\cdot \mathbf{b}) + \mathbf{b}\cdot \mathbf{b} } \qquad \text{(Quadratic Expansion)}
\end{align*}
$$
### Concept
Expanding the scalar product
$$
\begin{align*}
\cos \theta & = \frac{\mathbf{a}\cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|} = \frac{x_{a}x_{b}+y_{a}y_{b}+z_{a}z_{b}}{\sqrt{{x_{a}}^2+{y_{a}}^2+{z_{a}}^2}\cdot\sqrt{{x_{b}}^2+{y_{b}}^2+{z_{b}}^2}}
\end{align*}
$$
### Application
Angle between 2 vectors, might involve [special angles](/labyrinth/notes/math/math_fundementals/special_angles)
$$
\begin{align*}
a & = 2\mathbf{i}+9\mathbf{j}-6\mathbf{k} \\
b & = 6\mathbf{i}+3\mathbf{j}+6\mathbf{k} \\
\\
\cos \theta & = \frac{a \cdot b}{|a||b|} \\
& = \frac{2\cdot6 + 9\cdot3 + (-6)\cdot6}{\sqrt{ 2^2+9^2+(-6)^2 }\cdot \sqrt{ 6^2+3^2+6^2 }} = \frac{12+27-36}{\sqrt{ 81 }\cdot \sqrt{ 121 }}\\
& = \frac{3}{99}\\
\\
\therefore \theta & = \arccos\left(\frac{3}{99}\right) \\
& = 1.5404\dots \approx 1.54
\end{align*}
$$

Deriving the [cosine rule](/labyrinth/notes/math/math_fundementals/triangle_geometry)
![[deriving_cos_rule.png]]
$$
\begin{align*}
|a-b|^2 & = (a-b)\cdot(a-b)\\
& = a\cdot a + b\cdot b - 2(a\cdot b)\\
& = |a|^2+|b|^2+2|a||b|\cos\theta \qquad \text{(Dot product and rules)}
\end{align*}
$$