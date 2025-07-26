---
tags:
- ma1521/chapter8
- math/geometry
complete: true
prev: /labyrinth/notes/math/ma1521/vector-valued_functions
next: /labyrinth/notes/math/ma1521/partial_derivatives
---

   

### Summary
Level curve ^69f6b8
- can be thought of as a slice of the curve at z=k

$$
f(x,y)=k, \quad k \in \mathbb{R}
$$

Contour plot
- multiple level curves at discrete values of k
- flattened to the xy-plane

Cylinder
- any equation in R³ thats missing one variable is a cylinder

$$
y^{2}+z^{2}=1
$$
> x is not in the equation, the circle formed in the yz-plane is the same for all x

Elliptic paraboloid
- bowl

$$
\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}=\frac{z}{c}
$$

Ellipsoid
- closed shape
- ie. [spheres](/labyrinth/notes/math/ma1521/geometry_in_R³#^4e8904)

$$
\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}+\frac{z^{2}}{c^{2}}=1
$$

Level surface
- projection of trivatiate functions onto 3D space
- ie. [planes](/labyrinth/notes/math/ma1301/planes_in_R³)

$$
f(x,y,z)=k, \quad k \in \mathbb{R}
$$

### Concept
Bivariate functions of a surface
- accepts an [ordered pair](/labyrinth/notes/math/cs1231s/n-ary_relations#^81cdfc)
- above or below(z-axis) the domain of the function

$$
\begin{gather*}
z=f(x,y) \\
\\
f:\mathbb{R}^2\to \mathbb{R}
\end{gather*}
$$

Quadratic curves
- focus on elliptic paraboloid and ellipsoids

$$
Ax^2 + By^2 + Cz^2 + Dxy + Eyz + Fxz + Gx + Hy + Iz + J = 0 
$$

Trivariate functions
- accepts an ordered triple
- lies in 4 dimensional space

$$
\begin{gather*}
w = f(x,y,z) \\
\\
f: \mathbb{R}^3\to \mathbb{R}
\end{gather*}
$$

### Application
Domain of a bivariate function
$$
\begin{gather*}
f(x,y)=x\ln(y^{2}-x) \\
\\
D = \left\{\begin{array}{c|c} (x,y) & x\ln(y^{2}-x)\text{ is defined} \end{array}\right\} = \left\{\begin{array}{c|c} (x,y) & y^{2}-x>0  \end{array}\right\}
\end{gather*}
$$