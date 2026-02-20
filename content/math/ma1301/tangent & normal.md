---
tags:
- ma1301/chapter2
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1301/cartesian_differentiation
next: /labyrinth/notes/math/ma1301/optimization

---
### Summary
$$
\begin{align*}
for \ y  = f(x), \ at \ (x_{0}, y_{0}), & \ f'(x_{0}) = m \\
\\
Eqn \ of \ tangent :& \qquad y-y_{0} =m(x-x_{0})\\
Eqn \ of \ normal  :& \qquad y-y_{0} =-\frac{1}{m}(x-x_{0})\\
\\
in \ general :& \qquad m_{tangent} \times m_{normal} = -1 \\
\\
&m_{tangent} = \frac{y-y_{0}}{x-x_{0}}
\end{align*}
$$
### Concept
$$
\begin{align*}
Eqn \ of \ line: \qquad y& =mx+c \\
\\
for \ y =f(x) \ at \ x = a, \ line \ & passes \ through \ (a, f(a)):\\
\\
Eqn \ of \ tangent: \qquad y & = f'(x)(x-a) + f(a)\\
Eqn \ of \ normal: \qquad y & = -\frac{1}{f'(x)}(x-a)+f(a)\\
\\
Linear \ Approximation: \qquad y & \approx f(a)+f'(a)(x-a), \ where \ a \ is \ close \ to \ x
\end{align*}
$$
### Application
Tangents for $x^2+3xy+y^2+4=0$ which are parallel to $y=x+7$
$$
\begin{align*}
m & =1, \ \therefore \frac{dy}{dx}=1 \\
\\
\frac{d}{dx}0 & =\frac{d}{dx}(x^2+3xy+y^2+4) \\
0 & = 2x +3\left(y+x\cdot \frac{dy}{dx}\right)+2y\cdot \frac{dy}{dx}\\
0 & = \frac{dy}{dx}\cdot(3x+2y)+(2x+3y)\\
\\
\therefore \frac{dy}{dx} & = -\frac{2x+3y}{3x+2y}\\
1 & = -\frac{2x+3y}{3x+2y} \\
5x & = -5y \\
y & = -x \tag{1} \\
\\
sub \ (1) \ into \ the \ & curve :\\
\\
x^2+3x(-x)+(-x)^2+4 & =0\\
-x^2 & =-4\\
x & =\pm 2, \ y =\mp 2\\
\\
Tangents: \quad y & = 1(x-2)+(-2) = x-4 \\
y & = 1(x-(-2))+2 = x+4\\
\end{align*}
$$
![[tangents_graph.png|500]]

Tangents for $y^2-4xy+8x^2=100$ which are parallel to the y-axis
$$
\begin{align*}
m & = \pm \infty, \ \therefore \frac{dy}{dx}=\frac{1}{0}, \ \frac{dx}{dy}=0\\
\\
\frac{dx}{dy}100 & = \frac{d}{dy}(y^2-4xy+8x^2)\\
0 & = 2y-4\left(y\cdot \frac{dx}{dy}+x\right)+16x\cdot \frac{dx}{dy}\\
0 & = \frac{dx}{dy}\cdot(16x-4y)+(2y-4x) \\
\\
\therefore \frac{dx}{dy} & = -\frac{y-2x}{8x-2y} \\
0 & = 2x-y \\
y & = 2x \tag{2} \\
\\
sub \ (2) \ into \ the \ & curve: \\
\\
(2x)^2-4x(2x)+8x^2 & = 100\\
4x^2 & = 100 \\
x & = \pm 5, \ y = \pm 10 \\
\\
Tangents : \quad x & = 0(y - 10)+5 = 5 \\
x & = 0(y-(-10))+(-5) = -5\\
\end{align*}
$$
![[tangent_graph2.png|500]]

Linear approximation of $101^2$ and $\sqrt{ 101 }$, using tangent
$$
\begin{align*}
\begin{split}
let \ y & = x^2, \\
\\
\frac{dy}{dx} & = 2x \implies \left.\frac{dy}{dx}\right|_{x=a}=2a\\
\\
x & \approx a, \ x^2 \approx 2a(x-a)+a^2\\
\\
101 & \approx 100 \\
101^2 & \approx 2(100)(101-100)+100^2\\
& \approx 10200\\
\end{split}
\qquad \qquad
\begin{split}
let \ y & = \sqrt{ x }, \\
\\
\frac{dy}{dx} & =\frac{1}{2\sqrt{ x }} \implies \left.\frac{dy}{dx}\right|_{x=a}=\frac{1}{2\sqrt{ a }}\\
\\
x & \approx a, \ \sqrt{ x } \approx \frac{1}{2\sqrt{ a }}(x-a)+\sqrt{ a }\\
\\
101 & \approx 100 \\
\sqrt{ 101 } & \approx \frac{1}{2\sqrt{ 100 }}(101-100)+\sqrt{ 100 }\\
& \approx 10.05
\end{split}
\end{align*}
$$