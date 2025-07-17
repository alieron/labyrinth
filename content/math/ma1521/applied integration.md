---
tags:
- ma1521/chapter5
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1521/improper_integrals)   [Next](/labyrinth/notes/math/ma1521/sequences)

### Summary
[Volume of revolution](/labyrinth/notes/math/ma1301/volume_of_revolution) by disk method
$$
V = \pi \int_{a}^{b} f(x)^{2} \ dx \qquad \text{(About the x-axis)}
$$

Volume of revolution by cylindrical shell
- revolving a regoin bounded by the x-axis around the y-axis

$$
V = 2\pi \int_{a}^{b} x|f(x)| \ dx \qquad \text{(About the y-axis)}
$$
<img src="/labyrinth/assets/vol_of_revolution_cylindrical_shell.png" alt="vol_of_revolution_cylindrical_shell.png" class="mx-auto object-fill" style="width:500px;" />

Arc length of a curve
$$
\begin{align*}
L & = \int_{a}^b\sqrt{ 1+ \left( \frac{dy}{dx} \right)^2} \ dx, \quad a\leq x\leq b \\
\\
& =\int_{c}^d\sqrt{ 1+ \left( \frac{dx}{dy} \right)^2} \ dy, \quad c\leq y\leq d
\end{align*}
$$

### Concept
Area bounded by curve
- and x-axis

$$
A = \int_{a}^{b} |f(x)| \ dx 
$$
- and another curve

$$
A = \int_{a}^{b} |f(x)-g(x)| \ dx 
$$
> area is +ve

### Application
Volume by cylindrical shell
$$
\begin{align*}
\text{Area bounded by }y & = \ln(2x-1), \ x > \frac{1}{2} \text{ and } y = \ln3 \text{ revolved about the x-axis} \\
\\
2x-1 & = e^y \implies x =\frac{1}{2}(e^{y}+1) \\
\\
V & = 2\pi \int_{0}^{\ln 3} y|f(y)| \ dy = 2\pi \int_{0}^{\ln 3} y|\frac{1}{2}(e^{y}+1)| \ dy \\
& = 2\pi \int_{0}^{\ln 3} y\frac{1}{2}(e^{y}+1) \ dy \\
& = \pi \int_{0}^{\ln 3} ye^{y}+y \ dy \\
& = \pi \left[ye^y -e^y+\frac{y^{2}}{2} \right]_{0}^{\ln 3} \\
& = \pi \left( \ln 3(e^{\ln 3}) -e^{\ln 3}+\frac{(\ln 3)^{2}}{2} \right) \\
& = \pi \left( 3\ln 3 -3+\frac{(\ln 3)^{2}}{2} \right)
\end{align*}
$$

Deriving the arc length formula
$$
\begin{align*}
\text{Length of a slanted segment:}&&\sqrt{ (dx)^2 +(dy)^2}&=\sqrt{ 1+\left( \frac{dy}{dx} \right)^2 }\ dx &&\text{(Pythagoras Theorem)}\\
\\
\text{Total length:}&&\int_{a}^b\sqrt{ 1+\left( \frac{dy}{dx} \right)^2 }\ dx &&& \text{(Riemann sum of all the segments)}
\end{align*}
$$