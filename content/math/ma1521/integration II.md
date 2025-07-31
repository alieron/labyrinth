---
tags:
- ma1521/chapter4
- math/calculus
complete: false
prev: /labyrinth/notes/math/ma1521/applied_differentiation
next: /labyrinth/notes/math/ma1521/improper_integrals
---
   

Succeeds: [integration](/labyrinth/notes/math/ma1301/integration)
### Summary
Trigonometric substitution
$$
\begin{align*}
\sqrt{ a^2-(x+b)^{2} } && \text{use:} \quad & x+b=a\sin\theta, \ -\frac{\pi}{2}\leq\theta\leq \frac{\pi}{2} \\
\\
\sqrt{ a^2+(x+b)^{2} } && \text{use:} \quad & x+b=a\tan\theta, \ -\frac{\pi}{2}\leq\theta\leq \frac{\pi}{2} \\
\\
\sqrt{ (x+b)^{2}-a^{2} } && \text{use:} \quad & x+b=a\sec\theta, \ 0<\theta< \frac{\pi}{2} \ or \ \pi\leq\theta<\frac{3\pi}{2} \\
\end{align*}
$$

Additional standard integrals
$$
\begin{align*}
\int \sqrt{ a^{2}-x^{2} } \ dx & = \frac{x}{2}\sqrt{ a^{2}-x^{2} }+\frac{a^{2}}{2}\sin ^{-1} \frac{x}{a}+C \\
\\
\int \sqrt{ x^{2}-a^{2} } \ dx & = \frac{x}{2}\sqrt{ x^{2}-a^{2} }-\frac{a^{2}}{2}\ln | x+\sqrt{ x^{2}-a^{2} } | +C 
\end{align*}
$$

FTC formula
$$
\frac{d}{dx}\int_{a}^{g(x)}f(t)\ dt = f(g(x))g'(x)
$$

Solving [partial fractions](/labyrinth/notes/math/ma1301/partial_fractions)
$$
\int \frac{px+q}{ax^{2}+bx+c} \ dx
$$
### Concept
Riemann sum
- total area of infinitely many small rectangles
- can be approximated for a sufficiently large n

$$
\int_{a}^bf(x)\ dx = \lim_{ n \to \infty } \left( \sum_{k=1}^{n} \left( \frac{b-a}{n} \right)f\left( a+k\left( \frac{b-a}{n} \right) \right) \right)
$$

Fundemental theorem of calculus I
- [definite integral](/labyrinth/notes/math/ma1301/definite_integrals#^24e447)

$$
\int_{a}^b f(x)\ dx = [F(x)]_{a}^b=F(b)-F(a)
$$

Fundemental theorem of calculus II
- the area function is an antiderivative of the integrand

$$
\begin{gather*}
\frac{d}{dx}\int_{a}^xf(t)\ dt = f(x)\\
\\
g(x)=\int_{a}^xf(t)\ dt\\
\text{then, }\quad g'(x)=f(x)
\end{gather*}
$$

https://www.youtube.com/watch?v=e0E8Is_G_p4

Even and odd functions
- symmetry about the y axis

$$
\begin{align*}
\text{Even: }&\quad \int_{-a}^{a} f(x) \ dx =  2\int_{0}^{a} f(x) \ dx && \text{ie. }x^{2}\\
\text{Odd: }&\quad \int_{-a}^{a} f(x) \ dx = 0 && \text{ie. }x, x^3
\end{align*}
$$
### Application
Trigo substitution
$$
\begin{align*}
\int \frac{\sqrt{ 25-4x^{2} }}{x^{2}} \ dx & = \int \frac{\sqrt{ 25-(2x)^{2} }}{x^{2}} \ dx && 2x=5\sin\theta \implies x=\frac{5}{2}\sin\theta \\
& = \int \frac{5\cos\theta}{x^{2}} \ dx && \sqrt{ 25-4x^{2} }=\sqrt{ 25(1-\sin^{2}\theta) }=5\cos\theta \\
& = \int \frac{5\cos\theta}{\left( \frac{5}{2}\sin\theta \right)^{2}} \cdot \frac{5}{2}\cos\theta \ d\theta && \frac{dx}{d\theta}=\frac{5}{2}\cos\theta \implies dx=\frac{5}{2}\cos\theta \ d\theta \\
& = \int \frac{2\cos ^{2}\theta}{\sin ^{2}\theta} \ d\theta \\
& = \int 2\cot^2\theta \ d\theta \\
& = 2\int \csc^2\theta -1 \ d\theta \\
& = -2\cot\theta -2\theta +C \\
& = -2\frac{\cos\theta}{\sin\theta} -2\theta +C && \cos\theta=\frac{\sqrt{ 25-4x^{2} }}{5}, \ \sin\theta=\frac{2x}{5} \\
& = -\frac{1}{x}\sqrt{ 25-4x^{2} } - 2\arcsin \frac{2x}{5} +C && \theta = \arcsin \frac{2x}{5}
\end{align*}
$$

Riemann sum, with [limits at ∞](/labyrinth/notes/math/ma1521/limits_at_∞)
$$
\begin{align*}
given \quad \sum_{k=1}^{n} k^2 & = \frac{1}{6}n(n+1)(2n+1) \\
\\
\int_{0}^3x^2\ dx & = \lim_{ n \to \infty } \left( \sum_{k=1}^{n} \left( \frac{3}{n} \right)f\left( k\left( \frac{3}{n} \right) \right) \right) \\
& = \lim_{ n \to \infty } \left( \sum_{k=1}^{n} \left( \frac{3}{n} \right)\left( \frac{3k}{n} \right)^{2} \right) \\
& = \lim_{ n \to \infty } \left( \frac{27}{n^{3}} \sum_{k=1}^{n} k^{2} \right) \\
& = \lim_{ n \to \infty } \left( \frac{27}{n^{3}} \frac{1}{6}n(n+1)(2n+1) \right) \\
& = \lim_{ n \to \infty } \left( \frac{9n(n+1)(2n+1)}{2n^{3}} \right) \\
& = \lim_{ n \to \infty } \left( \frac{18n^{2}+27n+9}{2n^{2}} \right) \\
& = \lim_{ n \to \infty } \left( \frac{18+\frac{27}{n}+\frac{9}{n^{2}}}{2} \right) \\
& = 9
\end{align*}
$$

Riemann sum as an integral
$$
\begin{align*}
\lim_{ x \to \infty } \sum_{k=1}^{n} \frac{1}{3k+n} & = \lim_{ x \to \infty } \sum_{k=1}^{n} \frac{1}{3} \frac{3}{n}\frac{1}{\frac{3}{n}k+1}  && \text{(Outer }\frac{\square}{n}\text{)} \\
& = \frac{1}{3} \lim_{ x \to \infty } \sum_{k=1}^{n} \frac{3}{n}\frac{1}{\underbrace{ \frac{3}{n} }_{ \frac{\square}{n} }k+\underbrace{ 1 }_{ a }} && 3 = b-a = b-1 \implies b = 4 \\
& = \frac{1}{3} \lim_{ x \to \infty } \sum_{k=1}^{n} \frac{4-1}{n}\frac{1}{\frac{4-1}{n}k+1} && f(x) = \frac{1}{x} \\
& = \frac{1}{3}\int_{1}^4 \frac{1}{x}\ dx \\
& = \frac{1}{3}[\ln x]_{1}^4 \\
& = \frac{1}{3}\ln4
\end{align*}
$$
