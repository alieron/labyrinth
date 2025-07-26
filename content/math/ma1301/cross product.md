---
tags:
- ma1301/chapter4
- math/linear_algebra
complete: false
prev: /labyrinth/notes/math/ma1301/dot_product
next: /labyrinth/notes/math/ma1301/lines_in_R³
---

   

### Summary
Vector/cross product, [determinant](/labyrinth/notes/math/ma1522/determinants#^2f9027) method
$$
\begin{align*}
\mathbf{a} \times \mathbf{b} =\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k}\\
x_{a} & y_{a} & z_{a} \\
x_{b} & y_{b} & z_{b}
\end{vmatrix} & = 
\begin{vmatrix}
y_{a} & z_{a} \\
y_{b} & z_{b}
\end{vmatrix}\mathbf{i} + 
\begin{vmatrix}
z_{a} & x_{a} \\
z_{b} & x_{b} 
\end{vmatrix}\mathbf{j} + 
\begin{vmatrix}
x_{a} & y_{a} \\
x_{b} & y_{b}
\end{vmatrix}\mathbf{k} \\
\\
& = (y_{a}z_{b} - y_bz_a)\mathbf{i} + (z_{a}x_{b}
- z_{b}x_{a})\mathbf{j} + (x_{a}y_{b}
- x_{b} y_{a})\mathbf{k} \\
\end{align*}
$$

Angle between two vectors
$$
|\mathbf{a}\times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta
$$

Rules
$$
\begin{align*}
\mathbf{a} \times \mathbf{a} & = 0 \\
\\
\mathbf{a}\times \mathbf{b} & = \mathbf{-b}\times \mathbf{a} = \mathbf{b} \times \mathbf{-a}\\
\\
\lambda(\mathbf{a}\times \mathbf{b}) & = (\lambda \mathbf{a})\times \mathbf{b} = \mathbf{a} \times (\lambda \mathbf{b}), \quad for \ \lambda \in \mathbb{R}\\
\\
\mathbf{a} \times (\mathbf{b}+\mathbf{c}) & = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}
\end{align*}
$$

Triangle formed by 2 vectors [[#^66cf44|derived below]]
$$
\begin{align*}
for: & \ \triangle ABC \\
\\
Area & = \frac{1}{2}|\vec{CA}\times \vec{CB}|\\
& = \frac{1}{2} |\mathbf{a}\times \mathbf{b}+\mathbf{b}\times \mathbf{c}+\mathbf{c}\times \mathbf{a}|\\
\\
h & = \frac{|\vec{CA}\times \vec{CB}|}{|\vec{CB}|} = \frac{|\mathbf{a}\times \mathbf{b}+\mathbf{b}\times \mathbf{c}+\mathbf{c}\times \mathbf{a}|}{|\mathbf{b}-\mathbf{c}|}\\
%% & = |\vec{CA}|\sin\theta = |\mathbf{a}-\mathbf{c}|\sin\theta %%
\end{align*}
$$

### Concept
Vector product of standard unit vectors
$$
\begin{align*}
\mathbf{i}\times \mathbf{j} & = \mathbf{k}\\
\mathbf{j}\times \mathbf{k} & = \mathbf{i}\\
\mathbf{k}\times \mathbf{i} & = \mathbf{j}
\end{align*}
$$

Normal to the plane formed by $\mathbf{a}$ and $\mathbf{b}$
use the **right hand rule**, thumb is the first vector, index is the second and middle is the cross product
$$
\mathbf{a}\times \mathbf{b} \perp \mathbf{a} \ and \ \mathbf{b}\\
$$
![[cross_product.png]]

Deriving the formula for the area of triangle ^66cf44
$$
\begin{align*}
let: &\ \vec{OA} = \mathbf{a}, \ \vec{OB} = \mathbf{b}, \ \vec{OC} = \mathbf{c},\\
\\
Area & = \frac{1}{2}|\vec{CA}\times \vec{CB}|\\
& = \frac{1}{2}|(\mathbf{a}-\mathbf{c})\times(\mathbf{b}-\mathbf{c})|\\
& = \frac{1}{2}|(\mathbf{a}\times(\mathbf{b}-\mathbf{c}))+(-\mathbf{c}\times(\mathbf{b}-\mathbf{c}))|\\
& = \frac{1}{2}|(\mathbf{a}\times \mathbf{b})+\underbrace{ (-\mathbf{a}\times \mathbf{c}) }_{ \mathbf{c}\times \mathbf{a} }+\underbrace{ (-\mathbf{c}\times \mathbf{b}) }_{ \mathbf{b}\times \mathbf{c} }+\underbrace{ (-\mathbf{c}\times-\mathbf{c}) }_{ 0 }| \qquad \text{(Rules of cross product)}\\
& = \frac{1}{2} |\mathbf{a}\times \mathbf{b}+\mathbf{b}\times \mathbf{c}+\mathbf{c}\times \mathbf{a}|
\end{align*}
$$

Area of parallelogram formed by 2 vectors
$$
\begin{align*}
A & = |\mathbf{a}||\mathbf{b}|\sin\theta = |\mathbf{a}\times \mathbf{b}|
\end{align*}
$$
![[area_of_parallelogram.png]]![[cross_product_parallelogram.png]]

### Application
