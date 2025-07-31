---
tags:
- ma1521/chapter2
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1521/limits_at_∞
next: /labyrinth/notes/math/ma1521/applied_differentiation
---
   

Succeeds: [differentiation](/labyrinth/notes/math/ma1301/differentiation)
### Summary
Derivative of inverse formula
$$
\begin{gather*}
(f^{-1})'(a)=\frac{1}{f'( f^{-1}(a) )}\\
\\
\frac{dx}{dy} =\frac{1}{\frac{dy}{dx}}
\end{gather*}
$$

Useful [logarithm](/labyrinth/notes/math/math_fundementals/rules_of_logarithms) for differntiation
$$
\begin{gather*}
a = e^{\ln a} \\
\\
with \ u = f(x), \ v = g(x) \\
\\
u^v = e^{\ln u^v} = e^{v\ln u} \\
\\
\therefore \frac{d}{dx} u^v = \frac{d}{dx}e^{v\ln u} = {\color{orange} e^{v\ln u}\cdot \frac{d}{dx}v\ln u} = u^v\cdot \frac{d}{dx}v\ln u
\end{gather*}
$$

Change of base
$$
\log_{a}x=\frac{\ln x}{\ln a}, \quad a>0\text{ and }a\neq1
$$

Additional standard derivatives
$$
\begin{gather*}
\begin{split}
& \frac{d}{dx}\cot ^{-1} x = -\frac{1}{1+x^2}\\
\\
& \frac{d}{dx}\sec ^{-1} u = \frac{1}{|x|+\sqrt{ x^2-1 }}, \ |x| > 1\\
\\
& \frac{d}{dx}\csc ^{-1} u = -\frac{1}{|x|+\sqrt{ x^2-1 }}, \ |x| > 1\\
\end{split}
\quad \quad
\begin{split}
& \frac{d}{dx}\cot ^{-1} u = -\frac{1}{1+u^2} \cdot \frac{du}{dx}\\
\\
& \frac{d}{dx}\sec ^{-1} u = \frac{1}{|u|+\sqrt{ u^2-1 }} \cdot \frac{du}{dx}, \ |u| > 1\\
\\
& \frac{d}{dx}\csc ^{-1} u = -\frac{1}{|u|+\sqrt{ u^2-1 }} \cdot \frac{du}{dx}, \ |u| > 1\\
\end{split}
\end{gather*}
$$
### Concept
Derivative as a limit
$$
\begin{align*}
f'(x_{0}) & = \lim_{ h \to 0 } \frac{f(x_{0}+h)-f(x_{0})}{h} \\
\\
& = \lim_{ x \to x_{0} } \frac{f(x)-f(x_{0})}{x-x_{0}} && \text{replacing }h\text{ with }x-x_{0} \\
\\
f'(x_{0})\text{ exists}& \implies f\text{ is differentiable at }x_{0}\\
&\implies f\text{ is continuous at }x_{0}
\end{align*}
$$
> the [rules of differentiation](/labyrinth/notes/math/ma1301/differentiation#^87dfa9), are due to the [rules of limits](/labyrinth/notes/math/ma1521/limits_&_continuity#^c0031f)

### Application
Derivative by first principles
$$
\begin{align*}
f(x) & = \frac{1}{2+\sqrt{ x }} \\
\\
f'(x) & = \lim_{ h \to 0 } \frac{\frac{1}{2+\sqrt{ x+h }}-\frac{1}{2+\sqrt{ x }}}{h} \\
& = \lim_{ h \to 0 } \frac{1}{h}\left( \frac{1}{2+\sqrt{ x+h }}-\frac{1}{2+\sqrt{ x }} \right) \\
& = \lim_{ h \to 0 } \frac{1}{h} \frac{(2+\sqrt{ x })-(2+\sqrt{ x+h })}{(2+\sqrt{ x+h })(2+\sqrt{ x })} \\
& = \lim_{ h \to 0 } \frac{1}{h} \frac{\sqrt{ x }-\sqrt{ x+h }}{(2+\sqrt{ x+h })(2+\sqrt{ x })} \frac{\sqrt{ x }+\sqrt{ x+h }}{\sqrt{ x }+\sqrt{ x+h }} \\
& = \lim_{ h \to 0 } \frac{1}{h} \frac{x-(x+h)}{(2+\sqrt{ x+h })(2+\sqrt{ x })(\sqrt{ x }+\sqrt{ x+h })} \\
& = \lim_{ h \to 0 } \frac{-1}{(2+\sqrt{ x+h })(2+\sqrt{ x })(\sqrt{ x }+\sqrt{ x+h })} \\
& = \frac{-1}{2\sqrt{ x }(2+\sqrt{ x })^2}
\end{align*}
$$

Deriving the derivative of inverse
$$
\begin{align*}
f^{-1}(f(x)) & = x \\
\\
\frac{d}{dx}f^{-1}(f(x)) & = 1 && \text{(Differentiate both sides)} \\
(f^{-1})'(f(x))\cdot \frac{d}{dx}f(x)& = 1 && \text{(Chain Rule)} \\
(f^{-1})'(f(x))\cdot f'(x)& = 1 \\
(f^{-1})'(f(x))& = \frac{1}{f'(x)} \\
(f^{-1})'(y)& = \frac{1}{f'(f^{-1}(y))} \\
\\
\\
y = y(x)&,  \ x=x(y) \\
\\
x & = x(y(x)) \\
\frac{dx}{dx} & = \frac{d}{dx}x(y(x)) \\
1 & = \frac{dx}{dy}\cdot \frac{dy}{dx} \\
\frac{dx}{dy}& =\frac{1}{\frac{dy}{dx}}
\end{align*}
$$

Deriving standard integrals of trig functions
$$
\begin{align*}
\frac{dy}{dx}& =\frac{1}{\frac{dx}{dy}}\\
\frac{d}{dx}\sin ^{-1}x& =\frac{1}{\frac{d}{dy}\sin y}\\
& =\frac{1}{\cos y}\\
\\
y=\sin ^{-1}x \in\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] & \implies x=\sin y \in [-1,1] \\
& \implies \cos y \geq 0 \\
\\
\cos ^{2}y & = 1-\sin ^{2}y && \text{(Trig Identities)} \\
\cos y & = \sqrt{ 1-\sin ^{2}y } \quad \because \cos y \geq 0\\
& = \sqrt{ 1-x^2 } \\
\\
\therefore \frac{d}{dx}\sin ^{-1}x& =\frac{1}{\sqrt{ 1-x^2 }}
\end{align*}
$$

Deriving the standard derivative for polynomials
$$
\begin{align*}
\frac{d}{dx}x^n & = \lim_{ h \to 0 } \frac{(x+h)^n-x^n}{h} \\
& = \lim_{ h \to 0 } \frac{\left( x^n+nhx^{n-1}+\frac{n(n-1)}{2}h^2x^{n-2}+\dots+h^n \right)-x^n}{h} \\
& = \lim_{ h \to 0 } \frac{nhx^{n-1}+\frac{n(n-1)}{2}h^2x^{n-2}+\dots+h^n}{h} \\
& = \lim_{ h \to 0 } nx^{n-1}+\frac{n(n-1)}{2}hx^{n-2}+\dots+h^{n-1} \\
& = nx^{n-1}
\end{align*}
$$

Implicit differentiation for [parametric equations in R²](/labyrinth/notes/math/ma1521/parametric_equations_in_R²)
$$
\begin{gather*}
\text{Folium of Descartes:} \qquad  x^{3}+y^{3}-9xy =0 \\
\\
\begin{split}
\frac{d}{dx}(x^{3}+y^{3}-9xy) & =\frac{d}{dx}0 &\quad& \text{(Differentiate both sides)} \\
3x^2 \frac{dx}{dx}+3y^2 \frac{dy}{dx} -9\left( y\frac{dx}{dx}+x \frac{dy}{dx} \right) & = 0 \\
3x^2 +3y^2 \frac{dy}{dx} -9y -9x \frac{dy}{dx} & = 0 \\
3y^2 \frac{dy}{dx} -9x \frac{dy}{dx} & = -3x^2+ 9y \\
(3y^2-9x) \frac{dy}{dx} & = -3x^2+ 9y \\
\frac{dy}{dx} & = -\frac{3x^2+ 9y}{3y^2-9x} \\
\end{split}
\end{gather*}
$$