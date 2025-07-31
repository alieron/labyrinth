---
tags:
- ma1521/chapter8
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1521/partial_derivatives
next: /labyrinth/notes/math/ma1521/double_integrals
---
   
### Summary
Directional derivative and gradient vector
$$
\begin{align*}
\text{for }&\mathbf{u}=\left\langle a,b \right\rangle \\
\\
D_{u}f(x,y)& =f_{x}(x,y)a+f_{y}(x,y)b \\
& = \left\langle f_{x},f_{y} \right\rangle\cdot\left\langle a,b \right\rangle \\
& = \nabla f(x,y)\cdot \mathbf{u}
\end{align*}
$$

Tangent [plane](/labyrinth/notes/math/ma1301/planes_in_R³) to level surface
$$
\nabla f(x_{0},y_{0},z_{0})\cdot\left\langle x-x_{0},y-y_{0},z-z_{0} \right\rangle = 0
$$

Maximizing/minimizing
$$
\begin{gather*}
\mathbf{u}=\pm\frac{\nabla f}{\| \nabla f \| } \\
\\
D_{u}f=\pm \| \nabla f \| 
\end{gather*}
$$

First derivative of local maximum/minimum
$$
(a,b)\text{ is a local maximum/minimum} \implies f_{x}(a,b)=f_{y}(a,b)=0
$$

Second derivative test
$$
\begin{align*}
&&& D = f_{xx}(a,b)f_{yy}(a,b)-(f_{xy}(a,b))^{2} \\
\\
&(a) && D>0 \land f_{xx}(a,b)>0 \implies (a,b)\text{ is a local mimimum}\\
&(b) && D>0 \land f_{xx}(a,b)<0 \implies (a,b)\text{ is a local maximum}\\
&(c) && D<0  \implies (a,b)\text{ is a saddle point}\\
&(d) && D=0 \text{ inconclusive}\\
\end{align*}
$$
### Concept
Directional derivative
- vectorization of [increments](/labyrinth/notes/math/ma1521/partial_derivatives#^9b8f6d)

$$
\begin{gather*}
&\text{at }(x_{0},y_{0})\text{ in direction of unit vector }\mathbf{u}=\left\langle a,b \right\rangle \\
\\
\text{2D:}&D_{u}f(x_{0},y_{0})=\lim_{ h \to 0 } \frac{f(x_{0}+ha,y_{0}+hb)-f(x_{0},y_{0})}{h} \\
\\
\\
&\text{at }(x_{0},y_{0},z_{0})\text{ in direction of unit vector }\mathbf{u}=\left\langle a,b,c \right\rangle \\
\\
\text{3D:}&D_{u}f(x_{0},y_{0},z_{0})=\lim_{ h \to 0 } \frac{f(x_{0}+ha,y_{0}+hb,z_{0}+hc)-f(x_{0},y_{0},z_{0})}{h}
\end{gather*}
$$

Gradient
- [vector-valued functions](/labyrinth/notes/math/ma1521/vector-valued_functions)

$$
\begin{gather*}
\nabla f(x,y)= \left\langle f_{x},f_{y} \right\rangle \\
\\
\nabla f(x,y,z)= \left\langle f_{x},f_{y}, f_{z} \right\rangle
\end{gather*}
$$
> normal to a given [level curve](/labyrinth/notes/math/ma1521/multivariate_functions#^69f6b8)/surface

Maximizing/minimizing directional derivative
$$
\begin{align*}
D_{u}f& = \nabla f\cdot \mathbf{u} \\
& = \| \nabla f \| \| \mathbf{u} \| \cos \theta && \text{(Dot Product)} \\
& = \| \nabla f \| \cos \theta && \text{(Unit vector)} \\
\\
\operatorname{range}(\cos x)& = [-1, 1] \\
\\
\begin{gathered}
\text{Maximum} \\
D_{u}f = \| \nabla f \| \\
\cos\theta = 1\\
\\
\mathbf{u}=\frac{\nabla f}{\| \nabla f \| }
\end{gathered}\quad & \qquad\begin{gathered}
\text{Minimum} \\
D_{u}f = -\| \nabla f \| \\
\cos\theta = -1\\
\\
\mathbf{u}=-\frac{\nabla f}{\| \nabla f \| }
\end{gathered}
\end{align*}
$$
> maximised when $\mathbf{u}$ points in the direction of the gradient vector

Local maximum and minimum
- largest/smallest value for all points within a disk centered at the point

Absolute maximum and minimum
- largest/smallest value over the entire domain

Critical/stationary point
$$
f_{x}(a,b)=f_{y}(a,b)=0\lor\text{one of the partial derivatives DNE}\implies(a,b)\text{ is a critical point}
$$

Saddle point
- is a critical point
- increases in one direction and decreases in another
### Application
Directional derivative
$$
\begin{gather*}
f(x,y)=x^{2}y^{3}-4y \\
\\
\text{at }(2,-1)\text{ in the direction }\mathbf{v}=\left\langle 2,5 \right\rangle \\
\\
\begin{aligned}
D_{v}f(x,y)& = \left\langle 2xy^{3}, 3x^{2}y^{2}-4 \right\rangle\cdot \frac{1}{\sqrt{ 29 }}\left\langle 2,5 \right\rangle \\
& = \frac{1}{\sqrt{ 29 }}(4xy^{3}+15x^{2}y^{2}-20)
\end{aligned} \\
\\
D_{v}f(2,-1)= \frac{1}{\sqrt{ 29 }}(4(2)(-1)^{3}+15(2)^{2}(-1)^{2}-20) = \frac{32}{\sqrt{ 29 }}
\end{gather*}
$$

Tangnent plane
$$
\begin{gather*}
\frac{x^{2}}{4}+y^{2}+\frac{z^{2}}{9}=3 & \text{Level surface at }k=3\\
\\
\text{at: }(-2,1,-3) \\
\\
f_{x}=\frac{x}{2} \quad f_{y}=2y \quad f_{z}=\frac{2z}{9} \\
\\
\nabla f=\left\langle \frac{x}{2},2y,\frac{2z}{9} \right\rangle \\
\nabla f(-2,1,-3)=\left\langle -1,2,-\frac{2}{3} \right\rangle \\
\\
\begin{gathered}
\text{Tangent plane:}&\left\langle -1,2,-\frac{2}{3} \right\rangle\cdot \left\langle x+2,y-1,z+3 \right\rangle = 0 \\
& -1(x+2)+2(y-1)-\frac{2}{3}(z+3)=0 \\
& -x+2y-\frac{2}{3}z-6=0
\end{gathered}
\end{gather*}
$$

Finding critical points
$$
\begin{gather*}
&f(x,y)=x^{3}+3xy^{2}-3x^{2}-3y^{2}+4 \\
\\
&f_{x}(x,y)=3x^{2}+3y^{2}-6x \\
&f_{y}(x,y)=6xy-6y \\
\\
\text{Solve:}\\
&3x^{2}+3y^{2}-6x=0 \tag{1} \\
&6xy-6y = 0 \tag{2} \\
\\
&\begin{aligned}
(2): \quad6xy-6y & = 0 \\
6y(x-1) & = 0 \\
y=0\text{ or }&x=1
\end{aligned} &\text{equation with the least solutions} \\
\\
&\begin{aligned}
y=0:\quad 3x^{2}+0-6x&=0 \\
3x(x-2) & = 0 \\
x=0\text{ or }&x=2 \\
\\
x=1:\quad 3+3y^{2}-6&=0 \\
y^{2} & = 1 \\
y=1\text{ or }&y=-1 \\
\end{aligned} \\
\\
\text{Critical Points:}&(0,0),(2,0),(1,1),(1,-1) \\
\\
&f_{xx}(x,y)=6x-6\\
&f_{yy}(x,y)=6x-6 \\
&f_{xy}(x,y)=6y \\
\\
\text{Discriminant:}&D= (6x-6)^{2}-(6y)^{2}\\
\\
\text{2nd Derivative Test:}&\begin{array}{|c|c|c|c|}
\hline
\text{Critical Point} & D & f_{xx} & \text{Conclusion} \\
\hline
(0,0) & 36 & -6 & \text{local maximum} \\
\hline
(2,0) & 36 & 6 & \text{local minimum} \\
\hline
(1,1) & -36 &  & \text{saddle point} \\
\hline
(1,-1) & -36 &  & \text{saddle point} \\
\hline
\end{array}
\end{gather*}
$$