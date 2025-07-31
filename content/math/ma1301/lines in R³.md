---
tags:
- ma1301/chapter4
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1301/cross_product
next: /labyrinth/notes/math/ma1301/planes_in_R³
---
   
### Summary
Vector equation of a line
- $r$ represents any point on the line
$$
\begin{align*}
\mathbf{r} = \mathbf{a} + t\mathbf{v}, \quad where \ \mathbf{a} \ is \ a \ known \ point \ on \ the \ line \ and \ \mathbf{v} \ is \ the \ direction\ vector
\end{align*}
$$
### Concept
Parametric equations
$$
\begin{align*}
for \ \mathbf{r} & = (a_{1}\mathbf{i}+a_{2}\mathbf{j}+a_{3}\mathbf{k}) + t(v_{1}\mathbf{i}+v_{2}\mathbf{j}+v_{3}\mathbf{k})\\
\\
\mathbf{r} &= \begin{cases*}
x=a_{1}+tv_{1} \\
y=a_{2}+tv_{2} \\
z=a_{3}+tv_{3}
\end{cases*}
\end{align*}
$$
### Application
If point lies on line
$$
\begin{align*}
l_{1}: \quad & \ r = \mathbf{i}+\mathbf{j}+\mathbf{k} + t(2\mathbf{i}+\mathbf{j}+\mathbf{k})\\
P: \quad & \ (3,3,7)\\
\\
3\mathbf{i}+3\mathbf{j}+7\mathbf{k} & = \mathbf{i}+\mathbf{j}+\mathbf{k} + t(2\mathbf{i}+\mathbf{j}+\mathbf{k})\\
\\
3 & =1+2t, \ t = 1 \qquad \text{(Separate by component)}\\ 
3 & = 1+t, \ t = 2 \\ 
7 & = 1 + t, \ t = 6 \qquad \text{(Multiple solution, invalid)} \\
\\
\therefore P &\ is \ not \ on \ l_{1}
\end{align*}
$$

Check if 2 lines intersect
$$
\begin{align*}
l_{1}: \quad & \ r = \mathbf{i}+\mathbf{j}+\mathbf{k} + t(2\mathbf{i}+\mathbf{j}+\mathbf{k})\\
l_{2}: \quad & \ r = 4\mathbf{i}+\mathbf{j}+10\mathbf{k} + u(\mathbf{i}+3\mathbf{k})\\
\\
\mathbf{i}+\mathbf{j}+\mathbf{k} + t(2\mathbf{i}+\mathbf{j}+\mathbf{k}) & = 4\mathbf{i}+\mathbf{j}+10\mathbf{k} + u(\mathbf{i}+3\mathbf{k})\\
\\
t(2\mathbf{i}+\mathbf{j}+\mathbf{k}) & = 3\mathbf{i}+9\mathbf{k} + u(\mathbf{i}+3\mathbf{k})\\
\\
2t & =3+u, \ u = -3 \qquad \text{(Separate by component)}\\ 
t & = 0, \\ 
t & = 9 + 3u, \ u = -3 \qquad \text{(One solution, valid)} \\
\\
\text{intersection:} \quad & \ \underbrace{ (1+0,1+0,1+0) }_{ l_{1}, \ t=0 } \ or \ \underbrace{ (4-3,1+0,10-9) }_{ l_{2}, \ u = -3 }\to(1,1,1)
\end{align*}
$$

Acute angle between 2 lines
$$
\begin{align*}
l_{1}: \quad & \ r = \mathbf{i}+\mathbf{j}+\mathbf{k} + t(2\mathbf{i}+\mathbf{j}+\mathbf{k})\\
l_{2}: \quad & \ r = 4\mathbf{i}+\mathbf{j}+10\mathbf{k} + u(\mathbf{i}+3\mathbf{k})\\
\\
\cos\theta & =\frac{\mathbf{v}_{1}\cdot \mathbf{v}_{2}}{|\mathbf{v}_{1}||\mathbf{v}_{2}|} \\
& = \frac{(2\mathbf{i}+\mathbf{j}+\mathbf{k})\cdot(\mathbf{i}+3\mathbf{k})}{\sqrt{ 2^2+1^2+1^2 }\sqrt{ 1^2+0^2+3^2 }}\\
& = \frac{2+3}{\sqrt{ 6 }\sqrt{ 10 }} = \frac{5}{\sqrt{ 60 }} \\
& = \frac{5}{2\sqrt{ 15 }} = \frac{5\sqrt{ 15 }}{30} = \frac{\sqrt{ 15 }}{6}\\
\\
\theta & = \arccos\left(\frac{\sqrt{ 15 }}{6}\right)
\end{align*}
$$

Foot of a perpendicular from a point to a line/projection of a point on the line
![[perpendicular_foot.png]]
$$
\begin{align*}
l: \quad & \ r = \mathbf{i}-3\mathbf{j}+2\mathbf{k} + t(-\mathbf{i}-\mathbf{j}+3\mathbf{k})\\
P: \quad & \ (5,0,-3) \\
\\
\because \vec{QP} & \perp \mathbf{v}_{l}\\
\vec{QP} \cdot \mathbf{v}_{l} & = 0 \\
(\vec{OP}-\vec{OQ}) \cdot \mathbf{v}_{l} & = 0 \\
\\
\left(\begin{pmatrix}
5\\0\\-3
\end{pmatrix}-\begin{pmatrix}
1-t\\ -3-t\\ 2+3t
\end{pmatrix}\right)\cdot
\begin{pmatrix}
-1\\-1\\3
\end{pmatrix} & = \begin{pmatrix}
4+t\\ 3+t \\ -5-3t
\end{pmatrix}\cdot
\begin{pmatrix}
-1\\-1\\3
\end{pmatrix} = 0\\
\\
-4-t-3-t-15-9t & = 0\\
11t+22 & = 0, \ t= -2 \\
\\
\therefore Q: \quad & \ (1-t,-3-t,2+3t) \to (3,-1,-4)
\end{align*}
$$