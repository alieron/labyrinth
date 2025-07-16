---
tags:
- ma1301/chapter3
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1301/integration_by_parts)   [Next](/labyrinth/notes/math/ma1301/area_under_curve)
### Summary
Basic rules
$$
\begin{align*}
\text{Zero Rule:} \qquad & \int_{a}^a f(x) \ dx = 0\\
\\
\text{Constant Rule:} \qquad & \int_{a}^b kf(x) \ dx = k\int_{a}^b f(x) \ dx\\
\\
\text{Reverse Rule:} \qquad & \int_{a}^b f(x) \ dx = -\int_{b}^a f(x) \ dx\\
\\
\text{Sum/Difference Rule:} \qquad & \int_{a}^b [f(x)\pm g(x)] \ dx = \int_{a}^b f(x) \ dx \pm \int_{a}^b g(x) \ dx \\
\end{align*}
$$

Definite integral of $f(x)$ from $a$ to $b$ ^24e447
$$
\int_{a}^b f(x)\ dx = [F(x)]_{a}^b=F(b)-F(a)
$$
### Concept
Integral from first principles, sum of infinite slices of $f(x)\ dx$
$$
\begin{align*}
\int_{a}^b f(x) \ dx & = \lim_{ n \to \infty } \sum_{i=1}^n f(x_{i}) \ \Delta x\\
& = \lim_{ n \to \infty } \sum_{i=1}^n \underbrace{ f\left(a+i\left(\frac{b-a}{n}\right)\right) }_{ height \ of \ current \ slice }\cdot \underbrace{ \frac{b-a}{n} }_{ width } \\
\\
as \ &n \to \infty, \ \Delta x \to 0
\end{align*}
$$
