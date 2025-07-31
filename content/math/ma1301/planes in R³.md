---
tags:
- ma1301/chapter4
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1301/lines_in_R³
---

### Summary
Vector equation of a plane
- $\mathbf{r}$ represents any point on the plane
$$
\begin{align*}
\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}, \quad where \ \mathbf{a} \ is \ a \ known \ point \ on \ the \ plane \ and \ \mathbf{n} \ is \ the \ normal \ vector
\end{align*}
$$

Normal vector using [cross product](/labyrinth/notes/math/ma1301/cross_product)
$$
\begin{align*}
let \ \mathbf{u} \ and \ \mathbf{v} \ be \ &vectors \ parallel \ to \ the \ plane\\
\\
\mathbf{n} & = \mathbf{u} \times \mathbf{v}
\end{align*}
$$

Cartesian equation of a plane
$$
\begin{align*}
\mathbf{r} \cdot \mathbf{n} & = d, \quad expands \ to \\
\\
ax+by&+cz=d \\
\\
\mathbf{n} = a\mathbf{i}+b\mathbf{j}+c\mathbf{k} \ &, \ \mathbf{r} = x\mathbf{i}+y\mathbf{j}+z\mathbf{k}
\end{align*}
$$
### Concept
Normal is perpendicular to the plane, [perpendicular rule of dot product](/labyrinth/notes/math/ma1301/dot_product)
$$
\begin{align*}
\vec{OP} = \mathbf{r} & \ \text{: Any point on the plane} \\
\vec{OA} = \mathbf{a} & \ \text{: Known point on the plane} \\
\\
\vec{AP} & \perp \mathbf{n} \\
\because \vec{AP} & = \vec{OP} - \vec{OA} \\
& = \mathbf{r} - \mathbf{a} \\
\\
\therefore \mathbf{r} - \mathbf{a} & \perp \mathbf{n} \\
(\mathbf{r} - \mathbf{a}) &\cdot \mathbf{n} = 0
\end{align*}
$$

Acute angle between line and plane
- $\sin$ due to $\mathbf{n}$ being perpendicular to the plane
$$
\sin \theta = \left|\frac{\mathbf{v}\cdot \mathbf{n}}{|\mathbf{v}||\mathbf{n}|}\right| \ , \ given \ \mathbf{v} \cdot \mathbf{n} \neq 0
$$

Acute angle between planes
$$
\cos \theta = \left|\frac{\mathbf{n_{1}}\cdot \mathbf{n_{2}}}{|\mathbf{n_{1}}||\mathbf{n_{2}}|}\right|
$$

Line of intersection of 2 planes
![[intersection_of_planes.png]]

Direction vector is perpendicular to both normals
$$
\mathbf{r} = \mathbf{a} + t(\mathbf{n_{1}}\times \mathbf{n_{2}})
$$
### Application
Equation of plane from 2 parallel vectors and a point
$$
\begin{align*}
\mathbf{u}: & \quad \ \mathbf{i}+2\mathbf{k}\\
\mathbf{v}: & \quad \ 3\mathbf{i}+\mathbf{j}+\mathbf{k}\\
\mathbf{a}: & \quad \ (0,-1,-2)\\
\\
\mathbf{n} & = \mathbf{u} \times \mathbf{v}\\
& = (\mathbf{i}+2\mathbf{k})\times(3\mathbf{i}+\mathbf{j}+\mathbf{k}) \\
& = -2\mathbf{i}+5\mathbf{j}+\mathbf{k}\\
\\
\mathbf{r} \cdot \mathbf{n} & = \mathbf{a} \cdot \mathbf{n}\\
\mathbf{r}\cdot \begin{pmatrix}
-2\\5\\1
\end{pmatrix} & = \begin{pmatrix}
0\\-1\\-2
\end{pmatrix}\cdot \begin{pmatrix}
-2\\5\\1
\end{pmatrix} = -7\\
\\
with \ r & = \begin{pmatrix}
x\\y\\z
\end{pmatrix}: \\
\\
-2 &x+5y+z = -7
\end{align*}
$$

Intersection between line and plane
$$
\begin{align*}
p: \quad & \ r\cdot(\mathbf{i}-\mathbf{j}) = 0\\
l: \quad & \ r = \mathbf{i}-\mathbf{j}+2\mathbf{k} + t(\mathbf{j}+3\mathbf{k})\\
\\
sub \ & l \ into \ p : \\
\begin{pmatrix}
1\\-1+t\\2+3t
\end{pmatrix} &\cdot \begin{pmatrix}
1\\-1\\0
\end{pmatrix} = 0 \\
\\
1+1&-t=0 \\
t& = 2 \\
\\
intersection: \quad & \ \underbrace{ (1,-1+2,2+6) }_{ l, \ t=2 } \to(1,1,8)
\end{align*}
$$

Intersection between 2 planes ^90ce2c
$$
\begin{align*}
p_{1}: \quad & \ r\cdot(\mathbf{i}-\mathbf{j}) = 3\\
p_{2}: \quad & \ r\cdot(\mathbf{j}+\mathbf{k}) = 1\\
\\
&x-y=3\tag{1}\\ 
&y+z=1\tag{2}\\
\\
set \ one \ & variable \ to \ 0: \\
&y=0 \\
\therefore \ & x = 3, \ z = 1 \\
\\
\mathbf{a} & = 3\mathbf{i}+\mathbf{k}\\
\\
\mathbf{v} & = \mathbf{n_{1}}\times \mathbf{n_{2}}\\
& = (\mathbf{i}-\mathbf{j})\times(\mathbf{j}+\mathbf{k})\\
& = -\mathbf{i}-\mathbf{j}+\mathbf{k}\\
\\
line \ of \ intersection: \quad & \ r = (3\mathbf{i}+\mathbf{k}) + t(-\mathbf{i}-\mathbf{j}+\mathbf{k})
\end{align*} 
$$
### Extra
$$
\begin{align*}
\measuredangle \ between \ line\ \& \ plane : & \qquad \sin \theta = \left|\frac{\mathbf{v}\cdot \mathbf{n}}{|\mathbf{v}||\mathbf{n}|}\right| \ , \ given \ \mathbf{v} \cdot \mathbf{n} \neq 0\\
\measuredangle \ between \ 2 \ planes : & \qquad \cos \theta = \left|\frac{\mathbf{n_{1}}\cdot \mathbf{n_{2}}}{|\mathbf{n_{1}}||\mathbf{n_{2}}|}\right|\\
\\
line \ of \ intersection \ of \ 2\ planes: & \qquad \mathbf{r} = \mathbf{a} + t(\mathbf{n_{1}}\times \mathbf{n_{2}})
\end{align*}
$$