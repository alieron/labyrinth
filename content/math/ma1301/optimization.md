---
tags:
- ma1301/chapter2
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1301/tangent_and_normal)   [Next](/labyrinth/notes/math/ma1301/integration)

### Summary
Minimise/maximise one variable wrt to another, applying [first derivative test](/labyrinth/notes/math/ma1301/derivative_tests)
$$
\begin{align*}
find \ \frac{dy}{dx}=0
\end{align*}
$$

### Application
Commonly involves [quadratic equations](/labyrinth/notes/math/math_fundementals/quadratic_equations)

Change of surface area wrt to change of volume of a [3d shape](/labyrinth/notes/math/math_fundementals/3d_shapes)
$$
\begin{align*}
For \ a \ sphere: \quad & V=\frac{4}{3}\pi r^3, \ S=4\pi r^2 \\
\\
\frac{dS}{dV} & = \frac{\frac{dS}{dr}}{\frac{dV}{dr}}=\frac{4\pi(2r)}{\frac{4}{3}\pi(3r^2)}\\
& =\frac{\underset{ 2 }{ \cancel{ 8\pi r } }}{\cancel{ 4\pi } r^\cancel{ 2 }}\\
& = \frac{2}{r}
\end{align*}
$$

Maximum area of a rectangle enclosed by the unit circle
<img src="/labyrinth/assets/unit_cirlce_rect.png" alt="unit_cirlce_rect.png" class="mx-auto object-fill" style="" />
$$
\begin{align*}
Eqn \ of \ Circle: \quad & x^2  +y^2=r^2, \quad r \ is \ constant \\
& y = \sqrt{ r^2-x^2 }\\
\\
Eqn \ of \ Area \ of \ the \ rectangle: \quad & A = 2x(2y) = 4xy \\
\\
find \ \frac{dA}{dx} & =0: \\
\end{align*}
$$
$$
\begin{align*}
\begin{split}
Method \ 1: \quad &\\
\\
\frac{dA}{dx} & = \frac{d}{dx}4x(\sqrt{ r^2-x^2 })\\
& = 4\sqrt{ r^2-x^2 } + 4x\left(\frac{1}{2\sqrt{ r^2-x^2 }}\right)(-2x) \\
\\
0 & = \cancel{ 4 }\sqrt{ r^2-x^2 } - \cancel{ 4 }\left(\frac{\cancel{ 2 }x^2}{\cancel{ 2 }\sqrt{ r^2-x^2 }}\right) \\
\frac{x^2}{\sqrt{ r^2-x^2 }} & = \sqrt{ r^2-x^2 } \\
x^2& =r^2-x^2\\
2x^2 & = r^2\\
x& = \sqrt{ \frac{r^2}{2} }=\frac{r}{\sqrt{ 2 }}\\
\\
\\
\end{split}
\qquad \qquad
\begin{split}
Method \ 2: \quad & (Avoid \ sqrt)\\
\\
let \ \alpha & = A^2, \\
\frac{dA}{dx} & = 0 \implies \frac{d\alpha}{dx}=0\\
\\
\frac{d\alpha}{dx} & = \frac{d}{dx}\left(4x\sqrt{ r^2-x^2 }\right)^2\\
& = \frac{d}{dx}16x^2(r^2-x^2)\\
& = 32r^2x-64x^3\\
\\
0 & =32r^2x-64x^3\\
0 & = 32x(r^2-2x^2)\\
32x = 0 \quad & \quad r^2-2x^2=0 \\
x=0 \quad & \quad x^2=\frac{r^2}{2}\\
& \quad x = \frac{r}{\sqrt{ 2 }}\\
\end{split}
\end{align*}
$$
$$
\begin{align*}
x = \frac{r}{\sqrt{ 2 }}, \ y & = \sqrt{ r^2-\left(\frac{r}{\sqrt{ 2 }}\right)^2 }\\
& =\sqrt{ \frac{2r^2-r^2}{2} } = \frac{r}{\sqrt{ 2 }}, \quad \therefore x=y\\
\\
A_{max} & = 4\left(\frac{r}{\sqrt{ 2 }}\right)^2 = 2r^2
\end{align*}
$$