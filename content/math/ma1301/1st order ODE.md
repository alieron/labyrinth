---
tags:
- ma1301/chapter3
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1301/volume_of_revolution
next: /labyrinth/notes/math/ma1301/vectors_in_R³

---
### Summary
Equations containing $\frac{dy}{dx}$ and $x$ and/or $y$, solve using [integration](/labyrinth/notes/math/ma1301/integration)
$$
\begin{gather}
\frac{dy}{dx}=f(x)\\
\frac{dy}{dx}=g(y)\\
\frac{dy}{dx}=f(x)g(y)
\end{gather}
$$
### Concept
$$
\begin{gather}
\frac{dy}{dx}=f(x) \implies y = ∫ f(x) \ dx\\
\\
\frac{dy}{dx}=g(y) \implies x= \int \frac{1}{g(y)} \ dy\\
\\
\frac{dy}{dx}=f(x)g(y) \implies \int \frac{1}{g(y)} \ dy = \int f(x) \ dx
\end{gather}
$$
### Application
For the form $\frac{dy}{dx}=f(x)$
$$
\begin{align*}
x \frac{dy}{dx} & = x+2 \\
\frac{dy}{dx} & = \frac{x+2}{x} \\
y & = \int 1+\frac{2}{x} \ dx\\
& = x + 2 \ln |x| +C \quad \text{(General Solution)} \\
\\
for \ x& =1, \ y = 3, \\
3& = 1+2\ln 1 + C\\
C & = 2\\
\\
\therefore y& = x+2\ln |x|+2 \quad \text{(Particular Solution)}
\end{align*}
$$

For the form $\frac{dy}{dx}=g(y)$, express it as $\frac{dx}{dy}=\frac{1}{g(y)}$
$$
\begin{align*}
\frac{dy}{dx} & = \frac{y}{1+2y^2} \\
\frac{dx}{dy} & = \frac{1+2y^2}{y} \quad \text{(Reciprocal)}\\
x & = \int \frac{1}{y}+2y \ dy \\
& = \ln |y| + y^2 + C \quad \text{(General Solution)} \\
\\
for \ x & = 2,\ y=1, \\
2& = \ln 1+1+C \\
C & = 1\\
\\
\therefore x & = y^2 + \ln |y| + 1 \quad \text{(Particular Solution)}
\end{align*}
$$

For the form $\frac{dy}{dx}=f(x)g(y)$
$$
\begin{align*}
x^2 \frac{dy}{dx} & = y(x^3+4)\\
\frac{dy}{dx} & = y(x+\frac{4}{x^2})\\
\frac{1}{y} dy & = (x+\frac{4}{x^2})dx \\
\int \frac{1}{y} \ dy & = \int x+\frac{4}{x^2} \ dx \quad \text{(Integrate both sides)}\\
\ln |y| & = \frac{x^2}{2}-\frac{4}{x} + C \quad \text{(General Solution)}\\
\\
for \ x & = 2,\ y=1, \\
\ln 1 & = \frac{2^2}{2}-\frac{4}{2} + C \\
0 & = 2-2 + C \\
C & = 0\\
\\
\therefore \ln |y| & = \frac{x^2}{2}-\frac{4}{x} \quad \text{(Particular Solution)}
\end{align*}
$$

Solve using substitution, with [differentiation](/labyrinth/notes/math/ma1301/differentiation) on a third variable
- reduce 2 unknowns to one

$$
\begin{align*}
\frac{dy}{dx} & = 1+\frac{1}{(y-x)^2}\\ 
\\
\text{Substitution:} \quad y & = w+x \\
\frac{dy}{dx} & = \frac{dw}{dx} + 1 \\
\\
\frac{dw}{dx} + \cancel{ 1 } & = \cancel{ 1 }+\frac{1}{(w+x-x)^2} = \frac{1}{w^2}\\
w^2dw & = 1dx\\
\int w^2\ dw & = \int 1\ dx \quad \text{(Integrate both sides)}\\
\frac{w^3}{3} & = x + C \\
w^3 & = 3x + C \\
(y-x)^3 & = 3x + C \quad \text{(General Solution)}\\
\\
for \ x & = 0,\ y=0, \\
(0-0)^3 & = 3(0) + C\\
C & = 0\\
\\
\therefore (y-x)^3 & = 3x \quad \text{(Particular Solution)}
\end{align*}
$$

$$
\begin{align*}
x^3\frac{dy}{dx}+4 & = 2x^2y\\ 
\\
\text{Substitution:} \quad y & = z\cdot x^2 \\
\frac{dy}{dx} & = x^2 \frac{dz}{dx} + z(2x) \\
\\
x^2 \frac{dz}{dx} + \cancel{ 2zx } & = \frac{2x^2(zx^2)-4}{x^3} = \cancel{ 2zx } - \frac{4}{x^3}\\
1dz & = -\frac{4}{x^5}dx \\
\int1\ dz & = \int-\frac{4}{x^5}\ dx\quad \text{(Integrate both sides)}\\
z & = -\frac{4x^{-4}}{-4} + C\\
\frac{y}{x^2} & = \frac{1}{x^4} + C\\
y & = \frac{1}{x^2} + C \quad \text{(General Solution)}\\
\\
for \ x & = 1,\ y=6, \\
6 & = \frac{1}{1^2}+C\\
C & = 5\\
\\
\therefore y & = \frac{1}{x^2} + 5 \quad \text{(Particular Solution)}
\end{align*}
$$