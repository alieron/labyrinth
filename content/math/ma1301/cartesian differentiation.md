---
tags:
- ma1301/chapter2
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1301/differentiation)   [Next](/labyrinth/notes/math/ma1301/tangent_and_normal)
### Summary
Implicit differentiation ^a2341c
$$
\begin{align*}
with \ u & = f(y), \\
\\
\frac{du}{dx} & = \frac{du}{dy}\cdot \frac{dy}{dx} \\
\\
\frac{d}{dx}f(y) & = f'(y)\cdot \frac{dy}{dx}\\
\end{align*}
$$

Parametric differentiation
$$
\begin{align*}
with \ x & = f(t), \ y = g(t), \\
\\
\frac{dy}{dx} & = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}=\frac{g'(t)}{f'(t)} && \text{taking derivatives wrt. }t \\
\\
\frac{d^2y}{dx^2} & = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}}{\frac{dx}{dt}}\left(\frac{dy}{dx}\right)
\end{align*}
$$
### Concept
Cartesian, equations involving $x$ and $y$
$$
\begin{align*}
\text{Eqn of circle:} && x^2+y^2 = r^2 && \text{(where \textit{r} is constant)}
\end{align*}
$$

Parametric, $x$ and $y$ are functions of a thrid variable/parameter($t$ or $\theta$)
$$
\begin{align*}
\text{Eqn of circle:} &&
\begin{cases*}
x = r\cos\theta \\
y = r\sin\theta
\end{cases*}
&& \text{(where \textit{r} is constant)}
\end{align*}
$$
### Application
[2nd order derivative](/labyrinth/notes/math/math_fundementals/derivative_notation) via chain rule
$$
\begin{align*}
for \ y & =z^8, \ z=-x-1,\\
\\
\frac{dy}{dx} & = \frac{dy}{dz}\cdot \frac{dz}{dx} = 8z^7\cdot(-1) = -8z^7 && \text{(Implicit \ Differentiation)} \\
\\
\frac{d^2y}{dx^2} & = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{d}{dx}(-8z^7), \quad let \ u = -8z^7 \\
& = \frac{du}{dx} = \frac{du}{dz}\cdot \frac{dz}{dx} && \text{(Chain Rule)} \\
\\
& = 7(-8x^6)\cdot(-1) = 56x^6
\end{align*}
$$

$\frac{dy}{dx}$ of a parametric equation, with [trigo identities](/labyrinth/notes/math/ma1301/trigo_identities)
$$
\begin{align*}
for \ x & = a(t-\sin t), \ y = a(1-\cos t), \\
\\
\frac{dy}{dx} & = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{a(\sin t)}{a(1-\cos t)} \\
& = \frac{\sin 2(\frac{t}{2})}{1-\cos 2(\frac{t}{2})} = \frac{2\sin \frac{t}{2}\cdot \cos \frac{t}{2}}{2\sin^2 \frac{t}{2}} && \text{(Double Angle Identities)} \\
& = \frac{\cos \frac{t}{2}}{\sin \frac{t}{2}} = \cot \frac{t}{2}
\end{align*}
$$

Proving $\frac{d^2y}{dx^2} \neq \frac{\frac{d^2y}{dt^2}}{\frac{d^2x}{dt^2}}$, for a parametric equation
$$
\begin{align*}
\frac{d^2y}{dx^2} & = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}}{\frac{dx}{dt}}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}}{\frac{dx}{dt}}\left(\frac{\frac{dy}{dt}}{\frac{dx}{dt}}\right) \\
& = \frac{\frac{d^2y}{dt^2}}{\left(\frac{dx}{dt}\right)^2} = \frac{g''(t)}{(f'(t))^2}, \quad for \ x = f(t), \ y = g(t)  \\
\\
\therefore \ \frac{d^2y}{dx^2} & \neq \frac{\frac{d^2y}{dt^2}}{\frac{d^2x}{dt^2}} = \frac{g''(t)}{f''(t)} \\
\end{align*}
$$