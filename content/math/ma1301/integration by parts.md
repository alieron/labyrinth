---
tags:
- ma1301/chapter3
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1301/integration)   [Next](/labyrinth/notes/math/ma1301/definite_integrals)
### Summary
Integration by substitution, involes [differentiation](/labyrinth/notes/math/ma1301/differentiation)
$$
\begin{align*}
\int f'(x)&g(f(x)) \ dx, \quad \text{let } u = f(x) \\
\text{use } \frac{du}{dx}\text{ to} &\text{ find }du\text{ in terms of }dx \\
\\
\text{to get,} &\ \int g(u) \frac{du}{dx} \ dx
\end{align*}
$$

Integration by parts
$$
\begin{align*}
\int u \frac{dv}{dx} \ dx & = uv - \int v \frac{du}{dx} \ dx \\
\\
\int u \ dv & = uv - \int v \ du \\
\text{choose } u, \ dv\text{ such }& \text{that }du, \ v\text{ are easily found}
\end{align*}
$$
### Concept
Formula for integration by parts, derived from the product rule
$$
\begin{align*}
\frac{d}{dx}(uv) & = v \frac{du}{dx} + u \frac{dv}{dx} \\
\\
u \frac{dv}{dx} & = \frac{d}{dx}(uv)  - v \frac{du}{dx} \quad \text{(Integrate all terms)} \\
\\
\int u \frac{dv}{dx}\ dx & = \int \frac{d}{dx}(uv) \ dx  - \int v \frac{du}{dx} \ dx \\
\\
\therefore \int u \ dv & = uv - \int v \ du \\
\end{align*}
$$

LIATE rule
Choose $u$ preferably in order of:
- Logarithmic functions (L), eg $\ln(x)$.
- Inverse trig functions (I), eg $\arcsin(x)$.
- Algebraic functions (A), eg $x²$.
- Trigonometric functions (T), eg $sin(x)$.
- Exponential functions (E), eg $e^x$.
### Application
Integration by substitution
$$
\begin{align*}
\int e^{2x}&\sqrt{ 1+e^{2x} } \ dx, \\
\\
u & = 1 + e^{2x} \\
\frac{du}{dx} & = 2e^{2x}\\
du & = 2e^{2x} dx\\
\frac{1}{2}du & = e^{2x} dx\\
\\
\therefore \int e^{2x}\sqrt{ 1+e^{2x} } \ dx & = \int \sqrt{ u }\ \frac{1}{2}du\\
& = \frac{1}{2}\cdot\frac{u^\frac{3}{2}}{\frac{3}{2}} +C = \frac{1}{3}u^{\frac{3}{2}}+C \\
& = \frac{1}{3}(1+e^{2x})^{\frac{3}{2}} + C
\end{align*}
$$

$$
\begin{align*}
\int &\frac{e^{\arctan x}}{(1+x^2)} \ dx, \\
\\
u & = \arctan x\\
\frac{du}{dx} & = \frac{1}{1+x^2}\\
du & = \frac{1}{1+x^2}dx\\
\\
\therefore \int\frac{e^{\arctan x}}{(1+x^2)} \ dx & = \int e^u \ du \\
& = e^u + C \\
& = e^{\arctan x} + C
\end{align*}
$$

$$
\begin{align*}
\int &\frac{8}{x\sqrt{ \ln x }} \ dx,\\
\\
u & = \ln x \\
\frac{du}{dx} & = \frac{1}{x} \\
du & = \frac{1}{x}dx \\
\\
\therefore \int \frac{8}{x\sqrt{ \ln x }} \ dx & = \int \frac{8}{\sqrt{ u }} \ du\\
& = 8(2\sqrt{ u }) + C \\
& = 16\sqrt{ \ln x } + C
\end{align*}
$$

Integration by parts
$$
\begin{align*}
\int x & e^x \ dx, \\
\\
\begin{split}
u & =x \\
\frac{du}{dx} & = 1 \\
du & = dx \\
\end{split}
\qquad & \qquad
\begin{split}
dv & = e^x \\
v & = \int e^x \ dx = e^x\\
\\
\end{split} \\
\\
\therefore \int xe^x \ dx & = x\cdot e^x - \int e^x \ dx \\
& = xe^x-e^x + C
\end{align*}
$$

Both substitution and by parts
$$
\begin{align*}
\int \arcsin & \frac{x}{2}  \ dx, \\
\\
\begin{split}
u & = \arcsin \frac{x}{2} \\
\frac{du}{dx} & = \frac{1}{\sqrt{ 1-(\frac{x}{2})^2 }} \frac{1}{2} \\
du & = \frac{1}{2\sqrt{ 1-\frac{x^2}{4} }}dx \\
\end{split}
\qquad & \qquad
\begin{split}
dv & = 1 \\
v & = \int 1 \ dx = x\\
\\
\\
\\
\end{split} \\
\\
\therefore \int \arcsin \frac{x}{2} \ dx & = x\arcsin \frac{x}{2} - \int \frac{x}{2\sqrt{ 1-\frac{x^2}{4} }} \ dx \\
\\
for \int &\frac{x}{2\sqrt{ 1-\frac{x^2}{4} }} \ dx, \\
\\
u & = 1-\frac{x^2}{4}\\
\frac{du}{dx} & = -\frac{1}{4}(2x) \\
-du & = \frac{x}{2} \ dx \\
\\
\therefore \int \frac{x}{2\sqrt{ 1-\frac{x^2}{4} }} \ dx & = \int -\frac{1}{\sqrt{ u }} \ du\\
& = - 2\sqrt{ u } = -2\sqrt{ 1-\frac{x^2}{4} } \\
& = -\sqrt{ 4 - x^2 } \\
\\
\therefore \int \arcsin \frac{x}{2} \ dx & = x\arcsin \frac{x}{2} + \sqrt{ 4-x^2 }  + C \\
\end{align*}
$$

$$
\begin{align*}
\int &(\ln x)^2 \ dx, \\
\\
\begin{split}
u & = (\ln x)^2 \\
\frac{du}{dx} & = 2\ln x \cdot \frac{1}{x}\\
du & = \frac{2\ln x}{x} \ dx \\
\end{split}
\qquad & \qquad
\begin{split}
dv & = 1 \\
v & = \int 1 \ dx = x\\
\\
\\
\end{split} \\
\\
\therefore \int (\ln x)^2 \ dx & = x(\ln x)^2-\int x\cdot \frac{2\ln x}{x} \ dx \\
& = x(\ln x)^2 - \int 2\ln x \ dx\\
\\
for \int &2\ln x \ dx, \\
\\
\begin{split}
u & = \ln x \\
\frac{du}{dx} & = \frac{1}{x}\\
du & = \frac{1}{x} \ dx \\
\end{split}
\qquad & \qquad
\begin{split}
dv & = 1 \\
v & = \int 1 \ dx = x\\
\\
\\
\end{split} \\
\\
\therefore \int 2\ln x \ dx & = 2(x\ln x - \int \frac{x}{x} \ dx) \\
& = 2x\ln x - 2x + C\\
\\
\therefore \int (\ln x)^2 \ dx & = x(\ln x)^2 -2x\ln x + 2x + C\\
& = x((\ln x)^2-2\ln x+2) + C\\
\end{align*}
$$