---
tags:
- ma1521/chapter7
- math/geometry
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1521/power_series)   [Next](/labyrinth/notes/math/ma1521/vector-valued_functions)
### Summary
Rules for [vectors in R³](/labyrinth/notes/math/ma1301/vectors_in_R³)
- vector addition
- scalar multiplication

Equation of a sphere ^4e8904
- similar to [equation of a circle](/labyrinth/notes/math/ma1521/parametric_equations_in_R²#^fb55c7)

$$
\begin{gather*}
(x-h)^2+(y-k)^2+(z-l)^{2} = r^{2}\\
\\
\text{Center: }\left\langle h, k, l \right\rangle
\end{gather*}
$$

[Dot product](/labyrinth/notes/math/ma1301/dot_product)
- orthogonality if the dot product is 0

[Cross Product](/labyrinth/notes/math/ma1301/cross_product)
- produces a vector that is orthogonal to both vectors

Projection ^18b73e
$$
\begin{align*}
\text{component of }\mathbf{b}\text{ along }\mathbf{a}: &&& \operatorname{comp}_{\mathbf{a}}\mathbf{b} = \| \mathbf{b} \| \cos\theta = \frac{\mathbf{a}\cdot \mathbf{b}}{\| \mathbf{a}\| } \\
\\
\text{vector projection of }\mathbf{b}\text{ onto }\mathbf{a}: &&& \operatorname{proj}_{\mathbf{a}}\mathbf{b}= \operatorname{comp}_{\mathbf{a}}\mathbf{b}\frac{\mathbf{a}}{\| \mathbf{a} \| } = \frac{\mathbf{a}\cdot \mathbf{b}}{\| \mathbf{a}\|^2 }\mathbf{a} = \frac{\mathbf{a}\cdot \mathbf{b}}{\mathbf{a}\cdot \mathbf{a} }\mathbf{a}
\end{align*}
$$
> length of the sides of the triangle using toa, cah, soh

Shortest distance from a point to a plane
$$
\frac{| ax_{0}+by_{0}+cz_{0}-d |}{\sqrt{ a^{2}+b^{2}+c^{2} }} 
$$
### Concept
Position vectors
- horizontal notation

$$
\mathbf{v}=\left\langle x, y, z  \right\rangle, \quad \mathbf{v}\in \mathbb{R}^3
$$

Standard basis vectors
$$
\mathbf{i}=\left\langle 1, 0, 0 \right\rangle \quad\mathbf{j}=\left\langle 0, 1, 0 \right\rangle\quad\mathbf{k}=\left\langle 0, 0, 1 \right\rangle
$$

[Unit vectors](/labyrinth/notes/math/ma1301/unit_vectors)
- normalising a vector to get a magnitude of 1

[Lines](/labyrinth/notes/math/ma1301/lines_in_R³)
- use the parametric form

[Planes](/labyrinth/notes/math/ma1301/planes_in_R³)
$$
(\mathbf{r}-\mathbf{a})\cdot \mathbf{n} = 0
$$
### Application
Distance from point to planes
$$
\begin{align*}
\vec{QP}\text{ is the vector }&\text{from any point on the plane to point }P \\
\\
\text{shortest distance: }\| \operatorname{proj}_{\mathbf{n}}\vec{QP} \| & = | \operatorname{comp}_{\mathbf{n}}\vec{QP} | \\
& = \left| \frac{\vec{QP}\cdot \mathbf{n}}{\| \mathbf{n}\| } \right| \\
& = \frac{| \left\langle x_0 −x_1, y_0 −y_1, z_0 −z_1 \right\rangle· \left\langle a, b, c \right\rangle |}{\sqrt{ a^{2}+b^{2}+c^{2} } } \\
& = \frac{| ax_{0}+by_{0}+cz_{0}-d |}{\sqrt{ a^{2}+b^{2}+c^{2} }} \qquad \because ax_1 + by_1 + cz_1 = d && \text{(Equation of a plane)}
\end{align*}
$$

Distance between two skew lines/planes
$$
\begin{align*}
L_1 : & x −2 = −t, y −1 = 2t, z −5 = 2t \\
L_2 : & x −1 = s, y −2 = −s, z −1 = 3s \\
\\
\mathbf{u}& = \left\langle -1,2,2  \right\rangle \quad \mathbf{v} = \left\langle 1,-1,3  \right\rangle \\
\\
\mathbf{n} & = \mathbf{u}\times \mathbf{v} \\
& = \left\langle 8,5,-1 \right\rangle \\
\\
\vec{QP} & = \left\langle 2,1,5 \right\rangle - \left\langle 1.2.1 \right\rangle \\
& = \left\langle 1,-1,4 \right\rangle \\
\\
\operatorname{proj}_{\mathbf{n}}\vec{QP} & = \left|\frac{\left\langle 1,-1,4 \right\rangle\cdot\left\langle 8,5,-1 \right\rangle}{\sqrt{ 8^{2}+5^{2}+1^{2} }}\right| \\
& = \left|\frac{8-5-4}{\sqrt{ 90 }}\right| \\
& = \frac{1}{\sqrt{ 90 }}
\end{align*}
$$