---
tags:
- ma1301/chapter3
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1301/area_under_curve)   [Next](/labyrinth/notes/math/ma1301/1st_order_ODE)

### Summary
Revolution about the $x$-axis
$$
V = \int_{a}^b \pi y^2 \ dx = \int_{a}^b \pi [f(x)]^2 \ dx
$$

Revolution about a line
$$
\begin{align*}
Line: \quad &y = a \\
	V = \int_{a}^b\pi(y-a)^2 \ dx &= \int_{a}^b\pi(f(x)-a)^2 \ dx
\end{align*}
$$

### Concept
Deriving the formula using the volume of a [cylinder](/labyrinth/notes/math/math_fundementals/3d_shapes)
$$
\begin{align*}
V & = \pi r^2h = \underbrace{ \pi r^2 }_{ area \ of \ circle \ slices }(h)\\
\\
& =\lim_{ n \to \infty } \sum_{i=1}^n \pi r^2 \underbrace{ \frac{h}{n}  }_{ \Delta h\to 0 } \\
\\
& = \int_{0}^h \pi r^2 \ dx \\
& = \int_{0}^h \pi [f(x)]^2 \ dx , \ where \ f(x) = r \\
\end{align*}
$$

Revolution of the area between two curves, difference in area before revolving
$$
\begin{align*}
V & = \int_{a}^b\pi([f(x)]^2 - [g(x)]^2) \ dx \\
\end{align*}
$$

#

## Application
Volume of a sphere
$$
\begin{align*}
x^2 & + y ^2 = r^2 \\
y & = \pm\sqrt{ r^2 - x^2 }, \ using \ y = \sqrt{ r^2-x^2 } \\
\\
V & = \int_{-r}^r \pi\left(\sqrt{ r^2 - x^2 }\right)^2 \ dx \\
& = 2\pi \int_{0}^r r^2 - x^2 \ dx\\
& = 2\pi\left[xr^2-\frac{x^3}{3}\right]_{0}^r \\
& = 2\pi\left(\left(r^3-\frac{r^3}{3}\right)-0\right) \\
& = 2\pi\left(\frac{2}{3}r^3\right) = \frac{4}{3} \pi r^3
\end{align*}
$$

Volume from area bounded $y=\sqrt{ x }$, $y=1$ and $x=4$, revolved about $y=1$
$$
\begin{align*}
\sqrt{ x } & = 1\\
x & = 1 \\
\\
V = & \int_{1}^4\pi(\sqrt{ x }-1)^2 \ dx \\
= & \int_{1}^4\pi(x-2\sqrt{ x }+1)^2 \ dx \\
= & \pi\left[\frac{x^2}{2}-\frac{4}{3}x^{\frac{3}{2}}+x\right]_{1}^4 \\
= & \pi\left(\frac{4}{3}-\frac{1}{6}\right)=\frac{7\pi}{6}
\end{align*}
$$

Revolution about $x$ and $y$ axes
$$
\begin{align*}
y = x^2 + 1, & \quad x = \pm\sqrt{ y-1 } \\
y =9-x^2, & \quad x = \pm \sqrt{ 9-y } \\
\\
intersections: & \ (2,5), \ (-2,5)\\
\\
about \ the & \ y-axis : \\
V = & \int_{1}^5 \pi(\sqrt{ y-1 })^2 \ dy + \int_{5}^9 \pi(\sqrt{ 9-y })^2 \ dy \\
= & \pi\left[\frac{y^2}{2}-y\right]_{1}^5 + \pi\left[9y-\frac{y^2}{2}\right]_{5}^9 \\
= & \pi\left(\frac{15}{2}-\left(-\frac{1}{2}\right)+\frac{81}{2}-\frac{65}{2}\right) \\
= & 16\pi \\
\\
about \ the & \ x-axis : \\ wrong
V = & \int_{-2}^2 \pi((9-x^2)^2-(x^2+1)^2) \ dx \\
= & 2\pi\int_{0}^2(81-18x^2+x^4-x^4-2x^2-1) \ dx \\
= & 2\pi\int_{0}^2(80-20x^2) \ dx \\
= & 2\pi\left[80x-\frac{20x^3}{3}\right]_{0}^2 \\
= & 2\pi\left(\frac{320}{3}\right) = \frac{640\pi}{3}
\end{align*}
$$
<img src="/labyrinth/assets/vol_of_revolution_disk.png" alt="vol_of_revolution_disk.png" class="mx-auto object-fill" style="width:500px;" />