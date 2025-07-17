---
tags:
- ma1521/chapter9
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1521/applied_partial_differentiation)   [Next](/labyrinth/notes/math/ma1521/1st_order_ODE_II)

### Summary
Special case of Fubini's theorem
$$
\begin{align*}
f(x,y)&=g(x)h(y) &&f\text{ is factorizable into individual terms} \\
\\
\iint _{R}f(x,y)\ dA & = \int_{a}^b\int_{c}^{d} g(x)h(y) \ dy \ dx \\
& = \int_{a}^b g(x) \int_{c}^{d} h(y) \ dy \ dx && \text{wrt. }y,\ g(x)\text{ is a constant} \\
& = \left( \int_{c}^{d} h(y) \ dy \right)\left( \int_{a}^b g(x) \ dx  \right)&& \text{ wrt. }x, \ \int_{c}^{d} h(y) \ dy\text{ is a constant}
\end{align*}
$$

Area of region
$$
A=\iint_{D}1 \ dA
$$

Surface area
$$
S = \iint_{D}dS = \iint_{D}\sqrt{ (f_{x})^{2}+(f_{y})^{2}+1 } \ dA
$$

Double integral in [polar coordinates](/labyrinth/notes/math/ma1521/polar_coordinates)
$$
\begin{gather*}
R = \{\begin{array}{c|c} (r,\theta) & a\leq r\leq b \land \alpha \leq \theta \leq\beta \end{array}\} \\
\\
\iint_{R}f(x,y) \ dA = \int_{\alpha}^{\beta} \int_{a}^{b} f(r\cos\theta,r\sin\theta)r \ dr  \ d\theta 
\end{gather*}
$$
<img src="/labyrinth/assets/little_polar_rectangle.png" alt="little_polar_rectangle.png" class="mx-auto object-fill" style="width:300px;" />

### Concept
Fubini's theorem
- volume over a rectangle

$$
\begin{align*}
V&=\iint _{R}f(x,y)\ dA \\
\\
& R = [a,b]\times [c,d] \\
\\
V & = \int_{a}^b\int_{c}^{d} f(x,y) \ dy \ dx \\
& = \int_{c}^{d} \int_{a}^{b} f(x,y) \ dx  \ dy 
\end{align*}
$$

Type I region
- bounded by functions of $x$
- vertical arrow

$$
\begin{gather*}
D = \{\begin{array}{c|c} (x,y) & a\leq x\leq b \land g(x)\leq y\leq h(x) \end{array}\} \\
\\
\iint_{D}f(x,y) \ dA = \int_{a}^{b} \int_{g(x)}^{h(x)} f(x,y) \ dy  \ dx 
\end{gather*}
$$

Type II region
- bounded by functions of $y$
- horizontal arrow

$$
\begin{gather*}
D = \{\begin{array}{c|c} (x,y) & c\leq y\leq d \land g(y)\leq x\leq h(y) \end{array}\} \\
\\
\iint_{D}f(x,y) \ dA = \int_{c}^{d} \int_{g(y)}^{h(y)} f(x,y) \ dx  \ dy 
\end{gather*}
$$

Area and surface area
$$
\begin{align*}
dA&=| dx \ dy | \\
\\
dS&=\|  \left\langle dx,0,f_{x}(x,y)dy \right\rangle \times  \left\langle 0,dy, f_{y}(x,y)dx \right\rangle \| \\
& = \| \left\langle -f_{x}dy \ dx,-f_{y}dy \ dx, dy \ dx \right\rangle \| \\
& = \| \left\langle -f_{x},-f_{y}, 1 \right\rangle dy \ dx \| \\
& = \sqrt{ (f_{x})^{2}+(f_{y})^{2}+1 } \ dA
\end{align*}
$$

### Application
Evaluating iterated integral
$$
\begin{align*}
\int_{1}^{2} \int_{0}^{3} x^{2}y \ dx  \ dy & = \int_{1}^{2} \left[ \frac{x^{3}y}{3} \right]_{0}^3 \ dy \\
& = \int_{1}^{2} 9y \ dy \\
& = \left[ \frac{9y^{2}}{2} \right]_{1}^2 \\
& = 18-\frac{9}{2} \\
& = \frac{27}{2} \\
\\
\int_{0}^{3} \int_{1}^{2} x^{2}y \ dy  \ dx & =  \int_{0}^{3} \left[ \frac{x^{2}y^{2}}{2} \right]_{1}^2  \ dx \\
& =  \int_{0}^{3} \frac{3x^{2}}{2} \ dx \\
& = \left[ \frac{3x^{3}}{6} \right]_{0}^3 \\
& = \frac{27}{2}
\end{align*}
$$
> order of integration does not matter

Factorizable function
$$
\begin{align*}
\frac{2x}{y}&=2x\left( \frac{1}{y} \right) \\
\\
\int_{3}^{4} \int_{1}^{2} \frac{2x}{y} \ dy  \ dx & = \left( \int_{3}^{4} 2x \ dx  \right)\left( \int_{1}^{2} \frac{1}{y} \ dy  \right) \\
& = [x^{2}]_{3}^4\cdot[\ln | y | ]_{1}^2 \\
& = 7\ln2
\end{align*}
$$

Type I region
$$
\begin{align*}
D\text{ is bounded by }&y=2x^{2}, \ y=1+x^{2} \\
\\
2x^{2}& = 1+x^{2} \\
x^{2}& = 1 \\
x=1&\text{ or }x=-1 \\
\\
\iint_{D}(x+2y)\ dA & = \int_{-1}^{1} \int_{2x^{2}}^{1+x^{2}} (x+2y) \ dy  \ dx \\
& = \int_{-1}^{1} [xy+y^{2}]_{2x^{2}}^{1+x^{2}}  \ dx \\
& = \int_{-1}^{1} (x(1+x^{2})+(1+x^{2})^{2})-(x(2x^{2})+(2x^{2})^{2}) \ dx \\
& = \int_{-1}^{1} x+1+2x^{2}-x^{3}-3x^{4} \ dx \\
& = \left[ \frac{x^{2}}{2}+x+\frac{2x^{3}}{3}-\frac{x^{4}}{4}-\frac{3x^{5}}{5} \right]_{-1}^1 \\
& = \frac{32}{15}
\end{align*}
$$

Converting between types/interchanging order
$$
\begin{align*}
D\text{ is bounded by }&y=x-1, \ y^{2}=2x+6 \\
\\
x=y+1 \quad & \quad x=\frac{y^{2}}{2}-3 \\
y+1& = \frac{y^{2}}{2}-3 \\
y^{2}-2y-8 & =0 \\
y=4&\text{ or }y=-2\\
\\
D = & \left\{ \begin{array}{c|c} (x,y) & -2\leq y\leq4 \land \frac{y^{2}}{2}-3\leq x\leq y+1 \end{array} \right\} && \text{(Type II)}
\end{align*}
$$
> use the one that is easier to compute

Volume above xy-plane
$$
\begin{align*}
R & = [1,2]\times [0,\pi] \\
\\
y\sin(xy)& =0 \\
y=0\text{ or }&\sin(xy)=0 \\
&xy=0\text{ or }xy=\pi\text{ or }xy=2\pi \\
\\
y = 0 \quad & \quad y=\frac{\pi}{x} \\
\\
\int_{1}^{2} \int_{0}^{\pi/x} y\sin(xy) \ dy  \ dx & = \int_{1}^{2} \left[ -\frac{y}{x}\cos(xy) \right]_{0}^{\pi/x} +\int_{0}^{\pi/x} \frac{1}{x}\cos(xy) \ dy \ dx && u=y, \ du=dy \\
& = \int_{1}^{2} \left[ \frac{1}{x^{2}}\sin(xy)-\frac{y}{x}\cos(xy) \right]_{0}^{\pi/x} \ dx && dv = \sin (xy), \ v = -\frac{1}{x}\cos(xy) \\
& = \int_{1}^{2} \frac{1}{x^{2}}\sin(\pi)-\frac{\pi}{x^{2}}\cos(\pi) \ dx \\
& = \int_{1}^{2} \frac{\pi}{x^{2}} \ dx \\
& = \pi\left[ -\frac{1}{x} \right]_{1}^2 \\
& = \pi\left( -\frac{1}{2}+1 \right) = \frac{\pi}{2}
\end{align*}
$$
> find the domain first, then find the volume

Polar rectangles
$$
\begin{align*}
R\text{ is bounded by }&x^{2}+y^{2}=1, \ x^{2}+y^{2}=4, \ y=0 \\
\\
R = & \{\begin{array}{c|c} (r,\theta) & 1\leq r\leq 2\land 0\leq\theta\leq \pi \end{array}\} \\
\\
\iint_{R} (3x+4y^{2}) \ dA & = \int_{0}^{\pi} \int_{1}^{2} r(3r\cos\theta+4(r\sin\theta)^{2}) \ dr  \ d\theta \\
& = \int_{0}^{\pi} \int_{1}^{2} (3r^{2}\cos\theta+4r^{3}\sin ^{2}\theta) \ dr \ d\theta \\
& = \int_{0}^{\pi} [r^{3}\cos\theta+r^{4}\sin ^{2}\theta]_{1}^{2} \ d\theta \\
& = \int_{0}^{\pi} 7\cos\theta+15\sin ^{2}\theta \ d\theta \\
& = \int_{0}^{\pi} 7\cos\theta+\frac{15}{2}(1-\cos2\theta) \ d\theta \\
& = \left[ 7\sin\theta+\frac{15}{2}\left( \theta-\frac{1}{2}\sin2\theta \right) \right]_{0}^{\pi} \\
& = \frac{15\pi}{2}\\
\end{align*}
$$

Surface area of parabola
$$
\begin{align*}
z=x^{2}+y^{2}&\text{ under }z=9 \\
\\
x^{2}+y^{2}&=9 && \text{circle with }r=3 \\
\\
D =& \{\begin{array}{c|c} (r,\theta) & 0\leq r\leq 3\land0\leq\theta\leq 2\pi \end{array}\} \\
\\
\iint_{D}dS & = \iint_{D}\sqrt{ (2x)^{2}+(2y)^{2}+1 } \ dA \\
& = \int_{0}^{2\pi} \int_{0}^{3}  r\sqrt{ (2r\cos\theta)^{2}+(2r\sin\theta)^{2}+1 } \ dr  \ d\theta \\
& = \int_{0}^{2\pi} \int_{0}^{3}  r\sqrt{ 4r^{2}(\cos ^{2}\theta+\sin ^{2}\theta)+1 } \ dr  \ d\theta \\
& = \int_{0}^{2\pi} \int_{0}^{3}  r\sqrt{ 4r^{2}+1 } \ dr  \ d\theta && u = 4r^{2}+1,\ du=8r \ dr \\
& = \int_{0}^{2\pi} \int_{1}^{37}  \frac{1}{8}\sqrt{ u } \ du  \ d\theta \\
& = \int_{0}^{2\pi} \left[ \frac{1}{12}u^{3/2} \right]_{1}^{37} \ d\theta \\
& = \int_{0}^{2\pi} \frac{1}{12}(37\sqrt{ 37 }-1) \ d\theta \\
& = \left[ \frac{r}{12}(37\sqrt{ 37 }-1) \right]_{0}^{2\pi} \\
& = \frac{\pi}{6}(37\sqrt{ 37 }-1)\\
\end{align*}
$$

Slicing by planes
$$
\begin{align*}
y^{2}+z^{2}&=1 \\
\\
\text{sliced by }y=x+2&\text{ and }y=x-2 \\
\\
D = &\{\begin{array}{c|c} (x,y) & -1\leq y\leq1\land y-2\leq x\leq y+2 \end{array}\} \\
\\
y^{2}+z^{2}&=1 \\
z &= \sqrt{ 1-y^{2} } \\
\\
S & = 2\iint_{D}\sqrt{ \left( \frac{1}{2\sqrt{ 1-y^{2} }}(-2y) \right)^{2}+1 } \ dA \\
& = 2\int_{-1}^{1} \int_{y-2}^{y+2} \sqrt{ \frac{y^{2}+1-y^{2}}{1-y^{2}} } \ dx \ dy \\
& = 2\int_{-1}^{1} \int_{y-2}^{y+2} \frac{1}{\sqrt{ 1-y^{2} }} \ dx \ dy \\
& = 2\int_{-1}^{1} \left[ \frac{x}{\sqrt{ 1-y^{2} }} \right]_{y-2}^{y+2} \ dy \\
& = 8\int_{-1}^{1} \frac{1}{\sqrt{ 1-y^{2} }} \ dy \\
& = 8\left[ \sin ^{-1}x \right]_{-1}^{1} \\
& = 8\left( \frac{\pi}{2}-\left( -\frac{\pi}{2} \right) \right) = 8\pi
\end{align*}
$$