---
tags:
- ma1522/chapter3
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/determinants
next: /labyrinth/notes/math/ma1522/linear_combinations

---
### Summary
Rules of vector algebra, same as [vectors in R³](/labyrinth/notes/math/ma1301/vectors_in_R³)
$$
\begin{align*}
\text{Commutative:} &&& \mathbf{u}+\mathbf{v}=\mathbf{v}+\mathbf{u}\\
\\
\text{Associative:} &&& \mathbf{u}+(\mathbf{v}+\mathbf{w})=(\mathbf{u}+\mathbf{v})+\mathbf{w} \\
\\
\text{Zero Vector:} &&& \mathbf{0}+\mathbf{v}=\mathbf{v} \\
&&& a\mathbf{u}=\mathbf{0} \implies \mathbf{u}=\mathbf{0}\lor a =0\\
\\
\text{Negative:} &&& -\mathbf{v}\in \mathbb{R}^n\ \mathbf{v}+(-\mathbf{v})=\mathbf{0}\\
\\
\text{Distributive:} &&& a(\mathbf{u}+\mathbf{v})=a\mathbf{u}+a\mathbf{v} \\
\\
\text{Distributive with Scalar Multiplication:} &&& (a+b)\mathbf{u}=a\mathbf{u}+b\mathbf{u} \\
\\
\text{Associative with Scalar Multiplication:} &&& (ab)\mathbf{u}=a(b\mathbf{u})
\end{align*}
$$

Rules of inner product and norm
$$
\begin{align*}
\text{Symmetric:} &&& \mathbf{u}\cdot\mathbf{v}=\mathbf{v}\cdot\mathbf{u}\\
\\
\text{Scalar Multiplication:} &&& c \mathbf{u · v }= (c \mathbf{u}) \cdot \mathbf { v = u} \cdot(c \mathbf v) \\
\\
\text{Distributive:} &&& \mathbf u · (a \mathbf v + b \mathbf w) = a \mathbf{u} · \mathbf{v} + b \mathbf{u} · \mathbf{w} \\
\\
\text{Positive Definite:} &&& \mathbf{u}\cdot \mathbf{u}\geq0 \land (\mathbf{u}\cdot \mathbf{u}=0 \iff \mathbf{u}=\mathbf{0}) \\
\\
\text{Norm with Scalar Multiplication} &&& \| c \mathbf u \| = |c| \| \mathbf u \|
\end{align*}
$$

Distance and angle between vectors
$$
\begin{gather*}
d(\mathbf{u},\mathbf{v}) = \| \mathbf{u}-\mathbf{v} \| \\
\\
\cos\theta= \frac{\mathbf{u}\cdot\mathbf{v}}{\| \mathbf{u} \| \| \mathbf{v} \| }
\end{gather*}
$$
### Concept
Vector, a n by 1 matrix
$$
\boldsymbol{x}=\begin{pmatrix}
x_{1}\\ \vdots \\ x_{n}
\end{pmatrix}, \ for \ \boldsymbol{x} \in \mathbb{R}^n
$$

Vector space, satisfies
$$
\begin{align*}
\text{Closure under Linear Combination:} &&& \mathbf{u},\mathbf{v}\in V \implies \forall a,b \in \mathbb{R} \ a\mathbf{u}+b\mathbf{v}\in V
\end{align*}
$$

Inner/[dot product](/labyrinth/notes/math/ma1301/dot_product)
$$
\begin{gather*}
\mathbf{u}\cdot \mathbf{v}=\mathbf{u}^T\mathbf{v}=\sum_{i=1}^{n} u_{i}v_{i}\\
\\
({\color{royalblue}{n}} \times {\color{orangered}{1}})^T \cdot ({\color{royalblue}{n}} \times {\color{orangered}{1}}) \to ( {\color{orangered}{1}} \times {\color{orangered}{1}})
\end{gather*}
$$
> is always associated with projections

Norm and [normalizing](/labyrinth/notes/math/ma1301/unit_vectors#^43f21a)
$$
\begin{gather*}
\| \mathbf{u} \| =\sqrt{ \mathbf{u}\cdot \mathbf{u} } \\
\\
\mathbf{\hat{u}} = \frac{\mathbf{u}}{\| \mathbf{u} \| }
\end{gather*}
$$

Euclidean n-space
- set of all n-dimension vectors

$$
\mathbb{R}^n=\left\{\mathbf v = \begin{pmatrix}v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} \middle|\ \forall i \in \{ 1,2,\dots,n \} \ v_i \in \mathbb{R} \right\}
$$