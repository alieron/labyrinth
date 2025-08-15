---
tags:
- math/fundamentals
- math/calculus
complete: true
---
### Summary
$$
\begin{align*}
\frac{dx}{dx} = 1
\end{align*}
$$
$$
\begin{align*}
with \ u & = f(x), \ v= g(x), \\
\\
\frac{du}{dx} & =\frac{d}{dx}f(x)=f'(x) \\
\\
\frac{d}{dx}g(u)  & = \frac{d}{du}g(u) \cdot \frac{du}{dx} \\
& \Updownarrow \\
\frac{d}{dx}g(f(x)) & = g'(f(x)) \cdot f'(x) \\
\\
\text{in general:} \qquad \frac{d}{dx}g(\Box) & = \frac{d}{d\Box}g(\Box) \cdot \frac{d}{dx}\Box \quad \text{(Chain Rule)} 
\end{align*}
$$

Differentiation rules in Lagrange notation ^753b98
$$
\begin{align*}
\text{Constant \ Rule :}& \qquad \frac{d}{dx}(c) = 0\\
\\
\text{Multiple \ Rule :}& \qquad \frac{d}{dx}(c\cdot f(x)) = c \cdot f'(x) \\
\\
\text{Sum/Difference \ Rule :}& \qquad \frac{d}{dx}(f(x)\pm g(x))=f'(x)\pm g'(x) \\
\\
\text{Product \ Rule :}& \qquad \frac{d}{dx}(f(x)\cdot g(x))=g(x)\cdot f'(x) + f(x)\cdot g'(x) \\
\\
\text{Quotient \ Rule :}& \qquad \frac{d}{dx}\left(\frac{f(x)}{g(x)}\right)=\frac{g(x)\cdot f'(x) - f(x)\cdot g'(x)}{g(x)^2} \\
\\
\text{Chain \ Rule :}& \qquad \frac{d}{dx}f(g(x)) = f'(g(x))\cdot g'(x)\\
\end{align*}
$$

Higher order derivatives ^2e3691
$$
\begin{align*}
\frac{d}{dx}\left(\frac{dy}{dx}\right) & =\frac{d^2}{dx^2}= f''(x) = D^2f(x)\\
\\
\frac{d}{dx}\left(\frac{d^2y}{dx^2}\right) & =\frac{d^3}{dx^3}= f'''(x) = D^3f(x)\\
\\
\text{in general:} \qquad \frac{d^ny}{dx^n} & = f^{(n)}(x) = D^{(n)}f(x), \ \text{for the }n\text{th derivative}
\end{align*}
$$