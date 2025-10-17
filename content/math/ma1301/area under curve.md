---
tags:
- ma1301/chapter3
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1301/definite_integrals
next: /labyrinth/notes/math/ma1301/volume_of_revolution

---
### Summary
Area enclosed/bounded by the curve and x-asix
$$
\begin{align*}
A & = \int_{a}^b |f(x)| \ dx \\
\end{align*}
$$

Area between two curves
$$
\begin{align*}
if& \ g(x) \geq f(x) \ on \ [a, b], \\
A & = \int_{a}^b \underbrace{ g(x)-f(x) }_{ top - bottom } \ dx\\
\\
else, \ A & = \int_{a}^b |g(x)-f(x)| \ dx
\end{align*}
$$
### Concept
Area is a positive sum
$$
\begin{align*}
if \ f(x) \geq 0 \ &on \ [a, b],\\
\int_{a}^b f(x) \ dx & \geq 0 \\
\\
\therefore take \ \left|\int_{a}^b f(x) \ dx \right|, \ if &\ f(x) < 0 \ on \ [a, b]
\end{align*}
$$
![[area_under_curve.png|500]]

Quadrants of the $xy$ plane
$$
\begin{gather}
+y \ \ \ \ \ \ \ \ 
\\
\begin{array}{c | c}
\\
2nd \ Quadrant & 1st \ Quadrant
\\
\\
\hline
\\
3rd \ Quadrant & 4th \ Quadrant
\\
\\
\end{array}
\ + x
\end{gather}
$$
### Application
$\int_{0}^\pi \cos x \ dx$ vs $\int_{0}^\pi |\cos x| \ dx$
$$
\begin{align*}
\int_{0}^\pi \cos x \ dx & = [\sin x]_{0}^\pi\\
& = \sin \pi - \sin 0 \\
& = 0 - 0 = 0 \\
\\
\int_{0}^\pi |\cos x| \ dx & = \int_{0}^{\frac{\pi}{2}} \cos x \ dx + \left|\int_{\frac{\pi}{2}}^{\pi} \cos x \ dx\right| \\
& = [\sin x]_{0}^{\frac{\pi}{2}} + \left|[\sin x]_{\frac{\pi}{2}}^{\pi}\right| \\
& = \left(\sin \frac{\pi}{2}-\sin 0\right)+\left|\left(\sin \pi - \sin \frac{\pi}{2}\right)\right| \\
& = (1-0)+|(0- 1)| \\
& = 1 + |-1| = 2\\
\end{align*}
$$

Area bound by $f(x)=x(x^2-x-2)$ and $x$-axis, for $[-1, 2]$
$$
\begin{align*}
x(x^2-&x-2)  = 0 \\
x = 0 , \ x & = 2, \ x = -1 \\
\\
visualisi&ng \ the  \ curve, \\
f(x) \geq 0, for \ & -1 \leq x\leq 0 , x \geq 2\\
\\
\int_{-1}^2 x^3-x^2-2x \ dx & = \left[\frac{x^4}{4}-\frac{x^3}{3}-\frac{2x^2}{2}\right]_{-1}^2\\
& = \left[\frac{x^2(3x^2-4x-12)}{12}\right]_{-1}^2\\
\\
\therefore A & = \left[\frac{x^2(3x^2-4x-12)}{12}\right]_{-1}^0 + \left|\left[\frac{x^2(3x^2-4x-12)}{12}\right]_{0}^2\right| \\
& = \left(0-\left(-\frac{5}{12}\right)\right) + \left|\left(-\frac{8}{3}-0\right)\right| \\
& = \frac{5}{12} + \frac{8}{3} = \frac{37}{12}
\end{align*}
$$

Area between $x=y^2-2y-3$ and $y =x-1$, using [inverse functions](/labyrinth/notes/math/math_fundementals/inverse_functions)
$$
\begin{align*}
y & = x-1 \\
x & = y + 1 \quad (Inversing \ f(y) \ to \ f^{-1}(x))\\
\\
Intersect&ion \ points: \\
y+1 & = y^2-2y-3\\
y^2-3y-4 & = 0 \\
y =4 \ &\quad y = -1 \\
\\
\therefore A & = \int_{-1}^4(y+1)-(y^2-2y-3) \ dy\\
& = \int_{-1}^4-y^2+3y+4 \ dy\\
& = \left[-\frac{y^3}{3}+\frac{3y^2}{2}+4y\right]_{-1}^4\\
& = \frac{56}{3} - (-\frac{13}{6}) = \frac{125}{6}
\end{align*}
$$