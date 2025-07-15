---
tags:
- ma1301/chapter1
- math/algebra
complete: true
index: null
---
### Summary
Linear / Quadratic
$$
\begin{align*}
\frac{px+q}{(x-a)(x-b)} & = \frac{A}{x-a} + \frac{B}{x-b} \ ,\ a \neq b \\
\\
\frac{px+q}{(x-a)^2} & = \frac{A}{x-a} + \frac{B}{(x-a)^2} \\
\end{align*}
$$

Quadratic / Cubic
$$
\begin{align*}
\frac{px^2+qx+r}{(x-a)(x-b)(x-c)} & = \frac{A}{x-a} + \frac{B}{x-b} + \frac{C}{x-c} \\
\\
\frac{px^2+qx+r}{(x-a)^2(x-b)} & = \frac{A}{x-a} + \frac{B}{(x-a)^2} + \frac{C}{x-b} \\
\\
\frac{px^2+qx+r}{(x-a)(x^2+bx+c)} & = \frac{A}{x-a} + \frac{Bx+C}{x^2+bx+c} \\
\end{align*}
$$
### Application
Solve the system for $A$ and $B$ (linear/quadratic)
$$
\begin{align*}
\frac{px+q}{(x-a)(x-b)} & = \frac{A}{x-a} + \frac{B}{x-b} \\
& = \frac{A}{x-a} \cdot \frac{x-b}{x-b} + \frac{B}{x-b} \cdot \frac{x-a}{x-a} \\
\\
\therefore \ px+q & = A(x-b) + B(x-a) \\
\\
let \ x=a, \ px+q & = A(a-b) \\
A & = \frac{px+q}{a-b} \\
\\
let \ x=b, \ px+q & = B(b-a) \\
B & = \frac{px+q}{b-a}
\end{align*}
$$

Solve the system for $A$, $B$ and $C$ (quadratic/cubic)
$$
\begin{align*}
\frac{px^2+qx+r}{(x-a)^2(x-b)} & = \frac{A}{x-a} + \frac{B}{(x-a)^2} + \frac{C}{x-b} \\
& = \frac{A}{x-a}\cdot \frac{(x-a)(x-b)}{(x-a)(x-b)} + \frac{B}{(x-a)^2}\cdot \frac{x-b}{x-b} + \frac{C}{x-b}\cdot \frac{(x-a)^2}{(x-a)^2} \\
\\
\therefore \ px^2+qx+r & = A(x-a)(x-b) + B(x-b) + C(x-a)^2 \\
\\
let \ x=a, \ px^2+qx+r & = B(a-b) \\
B & = \frac{px^2+qx+r}{a-b} \\
\\
let \ x=b, \ px^2+qx+r & = C(b-a)^2 \\
C & = \frac{px^2+qx+r}{b-a} \\
\\
solve \ px^2+qx+r & = A(x-a)(x-b) + B(x-b) + C(x-a)^2 \ for \ A, \ knowing \ B \ and \ C \\
\\
let \ x = 0, \ \dots
\end{align*}
$$