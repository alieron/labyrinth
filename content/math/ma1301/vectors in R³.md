---
tags:
- ma1301/chapter4
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1301/1st_order_ODE
next: /labyrinth/notes/math/ma1301/unit_vectors
---
   
### Summary
3d vectors
$$
\begin{gather}
\mathbf{v}=\begin{pmatrix}
v_{1}\\ v_{2}\\ v_{3}
\end{pmatrix}
=\begin{pmatrix}
x \\ y \\ z
\end{pmatrix}
\end{gather}
$$

Magnitude, extension of the Pythagorean theorem
$$
\begin{align*}
|\mathbf{v}| \ or \ ||\mathbf{v}|| = \sqrt{ {v_{1}}^2 + {v_{2}}^2 + {v_{3}}^2 } 
\end{align*}
$$

Standard unit vectors form
$$
\begin{gather}
\mathbf{v}=\begin{pmatrix}
x \\ y \\ z
\end{pmatrix} = x\mathbf{i}+y\mathbf{j}+z\mathbf{k}
\end{gather}
$$

Vector addition/subtraction
$$
\begin{gather}
\mathbf{a}\pm \mathbf{b} = \begin{pmatrix}
x_{a} \\ y_{a} \\ z_{a}
\end{pmatrix} \pm \begin{pmatrix}
x_{b} \\ y_{b} \\ z_{b}
\end{pmatrix} = \begin{pmatrix}
x_{a} \pm x_{b} \\ y_{a} \pm z_{b} \\ z_{a} \pm z_{b} 
\end{pmatrix}
\end{gather}
$$

Scalar multiplication
$$
\begin{gather}
k\mathbf{v}=k\begin{pmatrix}
x\\ y\\ z
\end{pmatrix} = \begin{pmatrix}
kx\\ ky\\ kz
\end{pmatrix}
\end{gather}
$$
### Concept
Use the right hand rule for the 3D cartesian coordinate system

Position vectors, $O$ is the origin
$$
\begin{align*}
for \ & A(x_{a}, y_{a}, z_{a}), \\
\vec{OA} & = \begin{pmatrix}
x_{a} \\ y_{a} \\ z_{a}
\end{pmatrix}
\end{align*}
$$

Addition of position vectors
$$
\begin{align*}
\vec{AB} & = \vec{AO}+\vec{OB} \quad \text{(Connect A to B through O)}\\
& = \vec{OB} - \vec{OA} \quad\text{(Reverse }\vec{AO} \text{)}\\
\end{align*}
$$

Distance between two points
$$
\begin{gather}
A(x_{a},y_{a},z_{a}), \ B(x_{b},y_{b},z_{b})\\
\\
|\vec{AB}| = \sqrt{ (x_{b}-x_{a})^2+(y_{b}-y_{a})^2+(z_{b}-z_{a})^2 }
\end{gather}
$$
### Application
2d vectors
$$
\begin{align*}
u & = i + j \\
v & = i-6j \\
\\
2u+v & = 3i-4j \\
|2u+v| & = \sqrt{ 3^2+(-4)^2 }\\
& = 5
\end{align*}
$$

Finding a point using position vectors
$$
\begin{align*}
P(3,-2) &\implies \vec{OP} = \begin{pmatrix}
3 \\ -2
\end{pmatrix}\\
\vec{QP}&=\begin{pmatrix}
2 \\ 0
\end{pmatrix} \\
\\
\vec{OQ} & = \vec{OP}+\vec{PQ}\\
& = \vec{OP}-\vec{QP}\\
& = \begin{pmatrix}
3-2 \\-2-0
\end{pmatrix} = \begin{pmatrix}
1 \\ -2
\end{pmatrix}\\
\\
\therefore Q&(1,-2)
\end{align*}
$$
