---
tags:
- ma1301/chapter2
- math/calculus
complete: true
index: null
---
### Summary
Increasing/decreasing
$$
\begin{align*}
Increasing: \quad f'(x)>0 \qquad Decreasing: f'(x)<0
\end{align*}
$$

Turning/stationary points, infer the shape of [quadratic equations](/labyrinth/notes/math/math_fundementals/quadratic_equations)
$$
\begin{gather*}
f'(x)=0\\
f''(x)\neq 0
\end{gather*}
$$
<img src="/labyrinth/assets/turning_pt.png" alt="turning_pt.png" class="mx-auto object-none" style="">

Concavity
$$
\begin{gather*}
Concave \ Up: \quad f''(x)>0 \qquad Concave \ Down: f''(x)<0\\
\\
Inflection: \quad f''(x)=0
\end{gather*}
$$

Stationary point of inflection
$$
\begin{gather*}
f'(x)=0\\
f''(x)=0
\end{gather*}
$$
<img src="/labyrinth/assets/stationary_pt.png" alt="stationary_pt.png" class="mx-auto object-none" style="">
### Application
First [derivative](/labyrinth/notes/math/math_fundementals/derivative_notation) test -> determine turning/stationary points
Second derivative test -> determine concavity, if turning point is maximum or minimum

Stationary points of $y=-x^{3}+12x$
$$
\begin{align*}
solve \ \frac{dy}{dx}=0, \quad & (first \ derivative \ test)\\
\\
\frac{dy}{dx} & =\frac{d}{dx}(-x^3+12x)\\
& = -3x^2+12\\
\\
-3(x^2-4) & = 0\\
x& = \pm 2\\
\\
\frac{d^2y}{dx^2} & = \frac{d}{dx}(-3x^2+12)\\
& = -6x\\
\\
\begin{split}
for \ x = 2, &\\
\\
\frac{d^2y}{dx^2} & = -6(2) =-12\\
\\
\because f'(x) & = 0, f''(x)<0,\\
\therefore \ & maximum \ point
\end{split}
\qquad  & \qquad
\begin{split}
for \ x = -2, &\\
\\
\frac{d^2y}{dx^2} & = -6(-2) =12\\
\\
\because f'(x) & = 0, f''(x)>0,\\
\therefore \ & minimum \ point
\end{split}
\end{align*}
$$