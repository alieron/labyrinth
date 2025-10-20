---
tags:
- ma1521/chapter8
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1521/multivariate_functions
next: /labyrinth/notes/math/ma1521/applied_partial_differentiation
---
   
### Summary
Higher order partial derivatives
$$
\begin{align*}
f_{xx} & = \frac{\partial^{2}f}{\partial x^{2}} \\
\\
f_{yy} & = \frac{\partial^{2}f}{\partial y^{2}} \\
\\
f_{xy} & = \frac{\partial}{\partial x}\frac{\partial x}{\partial y} \\
\\
f_{yx} & = \frac{\partial}{\partial y}\frac{\partial x}{\partial x}
\end{align*}
$$

Clairaut's theorem
- applies to most functions

$$
\begin{gather*}
f_{xy}=f_{yx} \\
\\
f_{xyy} = f_{yxy} = f_{yyx} & \text{(3rd order partial derivatives)}
\end{gather*}
$$

Equation of tangent plane
$$
f_{x}(a,b)(x-a) + f_{y}(a,b)(y-b)-(z-f(a,b)) = 0. \quad \text{at }\left\langle a,b,f(a,b) \right\rangle
$$

Chain rule for partial derivatives
$$
\begin{gather*}
z = f(x,y), \quad x = g(t), \quad y = h(t) \\
\\
\frac{dz}{dt} = \frac{\partial x}{\partial x} \frac{dx}{dt} + \frac{\partial x}{\partial y} \frac{dy}{dt} \\
\\
\\
z = f(x,y), \quad x = g(s,t), \quad y = h(s,t) \\
\\
\frac{\partial z}{\partial s} = \frac{\partial x}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial x}{\partial y} \frac{\partial y}{\partial s} \\
\\
\frac{\partial z}{\partial t} = \frac{\partial x}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial x}{\partial y} \frac{\partial y}{\partial t} \\
\end{gather*}
$$
![[chain_rule_partial.png|600]]

Implicit differentiation theorem
$$
f_{z}\neq_{0} \implies \frac{\partial z}{\partial x}=-\frac{f_{x}}{f_{z}}
$$
### Concept
Partial derivatives
- focus on bivariate functions for `ma1521`
- do the small change over each variable individually
- treate the other variable as a constant

$$
\begin{align*}
f_{x}(x,y)& = \frac{\partial x}{\partial x} = \lim_{ h \to 0 } \frac{f(x+h,y)-f(x,y)}{h} \\
\\
f_{y}(x,y)& = \frac{\partial x}{\partial y} = \lim_{ h \to 0 } \frac{f(x,y+h)-f(x,y)}{h} \\
\end{align*}
$$

Equation of tangent plane
$$
\begin{align*}
& \text{ at }\left\langle a,b,f(a,b) \right\rangle \\
\\
\left\langle 1,0,f_{x}(a,b) \right\rangle & \text{ when }x\text{ changes }z\text{ changes accordingly} \\
\left\langle 0,1,f_{y}(a,b) \right\rangle & \text{ when }y\text{ changes }z\text{ changes accordingly} \\
\\
\mathbf{n}& = \left\langle 0,1,f_{y}(a,b) \right\rangle \times \left\langle 1,0,f_{x}(a,b) \right\rangle \\
& = \left\langle f_{x}(a,b),f_{y}(a,b),-1 \right\rangle && \text{can be }\left\langle f_{x}(a,b),f_{y}(a,b),1 \right\rangle\text{ as well} \\
\\
\text{Eqn of plane: }& \mathbf{n}\cdot \left\langle x-a,y-b,z-f(a,b) \right\rangle = 0 \\

\end{align*}
$$

General form of the chain rule
- for n variable function u, which takes in m variable functions x

$$
\begin{gather*}
u = f(x_{1},x_{2},\dots,x_{n}), \quad \forall j \in \{ 1,2,\dots,n \} \ x_{j} = g(t_{1},t_{2}, \dots, t_{m}) \\
\\
\forall i \in \{ 1, 2, \dots, m \} \ \frac{\partial u}{\partial t_{i}} = \frac{\partial u}{\partial x_{1}}\frac{\partial x_{1}}{\partial t_{i}}+\frac{\partial u}{\partial x_{2}}\frac{\partial x_{2}}{\partial t_{i}}+\dots+\frac{\partial u}{\partial x_{n}}\frac{\partial x_{n}}{\partial t_{i}}
\end{gather*}
$$
![[chain_rule_partial_2.png|800]]

Increments ^9b8f6d
$$
\begin{gather*}
z=f(x,y) \\
\\
\Delta z=f(x+\Delta x,y+\Delta y)-f(x,y)
\end{gather*}
$$
> change in $z$ resulting from changes in $x$ and $y$

Differentials
$$
dz=f_{x}(x,y)dx+f_{y}(x,y)dy\approx\Delta z
$$
> change in the tangent plane, gives a good approximation of increment over smaller changes
### Application
Computing partial derivatives
$$
\begin{align*}
f(x,y) & = e^{xy}+\frac{x}{y} \\
\\
f_{x}(x,y) & = ye^{xy}+\frac{1}{y} \\
f_{y}(x,y) & = xe^{xy}-\frac{x}{y^{2}}
\end{align*}
$$

Implicit differentiation with partial derivatives
$$
\begin{gather*}
&x^{3}+y^{3}+z^{3}+6xyz = 1, \quad \text{find }\frac{\partial z}{\partial x} \\
\\
&3x^{2}+3z^{2}\frac{\partial z}{\partial x}+6y\left(z+x\frac{\partial z}{\partial x}\right) =0 \\
&(3z^{2}+6yx)\frac{\partial z}{\partial x}=-(3x^{2}+6yz) \\
&\frac{\partial z}{\partial x}= - \frac{x^{2}+2yz}{z^{2}+2yx} \\
\\
\text{Notice:}&f_{x}=3x^{2}+6yz\quad f_{z}=3z^{2}+6xy \\
&\frac{\partial z}{\partial x}= - \frac{f_{x}}{f_{z}} = - \frac{3x^{2}+6yz}{3z^{2}+6yx} & \text{as above}
\end{gather*}
$$

Increment
$$
\begin{gather*}
z=2x^{2}-xy \\
\\
\begin{aligned}
\Delta z&=(2(x+\Delta x)^{2}-(x+\Delta x)(y+\Delta y))-(2x^{2}-xy) \\
& = 2((\Delta x)^{2}+2x\Delta x+x^{2})-(xy+y\Delta x+x\Delta y+\Delta x\Delta y)-2x^{2}+xy \\
& = 2(\Delta x)^{2}+4x\Delta x-y\Delta x-x\Delta y-\Delta x\Delta y
\end{aligned}\\
\\
\text{Changing from: }(1,1)\text{ to }(0.98,1.03) \\
\Delta x=-0.02 \quad\Delta y=0.03 \\
\\
\therefore \Delta z=2(-0.02)^{2}+4(-0.02)-(-0.02)-0.03-(-0.02)(0.03) = -0.0886
\end{gather*}
$$