---
tags:
- ma1521/chapter6
- math/calculus
complete: false
prev: /labyrinth/notes/math/ma1521/series
next: /labyrinth/notes/math/ma1521/geometry_in_R³
---

   

### Summary
Power series at a
$$
\begin{align*}
& \sum_{n=0}^{\infty} c_{n}(x-a)^n \implies \text{exactly one of the following is true} \\
\\
& 1)\text{ the series converges at }x=a\text{ only} \\
& 2)\text{ the series converges for all }x \\
& 3) \ \exists R \in \mathbb{R}^+ \ (|x-a|<R \implies \text{the series converges}) \land (|x-a|>R \implies \text{the series diverges})
\end{align*}
$$

Radius and interval of convergence
- possible intervals on which the series is convergent

$$
\begin{gather*}
\lim_{ n \to \infty } \left|\frac{c_{n+1}}{c_{n}}\right| = L\lor\lim_{ n \to \infty } \sqrt[n]{ |c_{n}| } = L \implies R = \frac{1}{L} \\
\\
L = 0 \implies R = \infty \land L = \infty \implies R = 0\\
\\
\\
(a −R, a + R), [a −R, a + R), (a −R, a + R], [a −R, a + R]
\end{gather*}
$$
![[interval_of_convergence.png|500]]

Derivative and integral of power series
$$
\begin{gather*}
f(x) = \sum_{n=0}^{\infty} c_{n}(x-a)^n \\
\\
R>0 \implies f(x)\text{ is differentiable on the interval }|x-a| < R \\
\\
\text{ie. }\left\{\begin{split}
1) & \ f'(x) = \sum_{n=1}^{\infty} nc_{n} (x-a)^{n-1}\\
2) & \ \int f(x)\ dx = \sum_{n=0}^{\infty} c_{n} \frac{(x-a)^{n+1}}{n+1} + C
\end{split}\right.\quad, \ |x-a| <R
\end{gather*}
$$

### Concept
Power series
- resembles [polynomials](/labyrinth/notes/math/ma1521/polynomials)

$$
f(x)=\sum_{n=0}^{\infty} c_{n}x^n = c_{0}+c_{1}x+c_{2}x^{2}+c_{3}x^{3}+\dots
$$
> congerges or diverges based on x

Power series representation of a function
$$
\sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots = \frac{1}{1-x}, \quad |x| < 1
$$
> proof in  add link to cs1231s combinations and perms 

Taylor and maclaurin series
- approximation of any function about a point
- based on [higher order derivatives](/labyrinth/notes/math/math_fundementals/derivative_notation#^2e3691) at that point

$$
\begin{align*}
f(x) & = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n && \text{(Taylor Series)}\\
& = f(a) + \frac{df}{dx}(a)(x-a) + \frac{d^2f}{dx^2}(a)\frac{(x-a)^{2}}{2!}+\frac{d^{3}f}{dx^{3}}(a)\frac{(x-a)^{3}}{3!}+\dots \\
\\
\text{where }c_{n} & = \frac{f^{(n)}(a)}{n!}\text{ is the value of the }n\text{th order derivative at }a \\
\\
\\
\text{at }a=0:\quad f(x) & = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n && \text{(Maclaurin Series)} \\
& = f(0) + \frac{df}{dx}(0)x + \frac{d^2f}{dx^2}(0)\frac{x^{2}}{2!}+\frac{d^{3}f}{dx^{3}}(0)\frac{x^{3}}{3!}+\dots
\end{align*}
$$

### Application
Convergence of power series
$$
\begin{align*}
& \sum_{n=0}^{\infty} n!x^n \\
\\
\text{for }x\neq0&\text{, }\lim_{ n \to \infty } \left|\frac{(n+1)!x^{n+1}}{n!x^n}\right|=\lim_{ n \to \infty } |(n+1)x|=\infty \\
\\
\therefore&\text{the power series converges}\iff x=0
\end{align*}
$$
> power series default to using [ratio test](/labyrinth/notes/math/ma1521/series#^02e3ba) or root test

Interval on which the series is convergent
$$
\begin{align*}
& \sum_{n=0}^{\infty} \frac{(x-7)^n}{n} \\
\\
\lim_{ n \to \infty } \left|  \frac{\frac{(x-7)^{n+1}}{n+1}}{ \frac{(x-7)^n}{n}} \right| & = \lim_{ n \to \infty } \left|  \frac{n(x-7)}{n+1} \right| = \lim_{ n \to \infty } \frac{n}{n+1}|x-7| && \because n \in \mathbb{N} \\
& = |x-7| \\
\\
& |x-7| < 1 \implies \text{the power series is absolutely convergent} \\
& |x-7| > 1 \implies \text{the power series is divergent} \\
& |x-7| = 1 \implies \left\{\begin{split}
& x=6 \implies \sum_{n=0}^{\infty} \frac{(-1)^n}{n} \\
& \text{Alternating Series Test:} \\
& \frac{1}{n}>\frac{1}{n+1} \land \lim_{ n \to \infty } \frac{1}{n}=0 \\
& \therefore\text{the power series is convergent} \\
\\
\text{or }& x=8 \implies \sum_{n=0}^{\infty} \frac{1}{n} \\
& \text{Integral Test:} \\
& \int_{1}^{\infty} \frac{1}{x} \ dx =\lim_{ b \to \infty } [\ln x]_{1}^b = \lim_{ b \to \infty } \ln b = \infty \\
& \therefore\text{the power series is divergent}
\end{split}\right. && \text{ratio test is inconclusive} \\
\\
\therefore& \sum_{n=0}^{\infty} \frac{(x-7)^n}{n} \text{ is convergent for }x \in[6,8)
\end{align*}
$$

Power series representation and recognising the formula for [convergent geometric series](/labyrinth/notes/math/ma1521/series#^aa4638)
$$
\begin{align*}
\frac{1}{1+x} & = \frac{1}{1-(-x)} \\
& = \sum_{n=0}^{\infty} (-x)^n \\
& = 1 - x + x^2 -x^{3} + \dots \\
& = \sum_{n=0}^{\infty} (-1)^nx^n, \quad |-x| = |x| < 1 \\
\\
\\
\frac{x^{3}}{x+2} & = \frac{x^{3}}{2}\cdot \frac{1}{\frac{x}{2}+1} \\
& = \frac{x^{3}}{2} \sum_{n=0}^{\infty} (-1)^n\left( \frac{x}{2} \right)^n, \quad \left|\frac{x}{2}\right| < 1 \\
& = \frac{x^{3}}{2} \sum_{n=0}^{\infty} \frac{(-1)^n}{2^n}x^n \\
& = \sum_{n=0}^{\infty} \frac{(-1)^n}{2^{n+1}}x^{n+3}, \quad |x|< 2
\end{align*}
$$

Power series using integral
$$
\begin{align*}
\ln(1-x) & = - \int \frac{1}{1-x}\ dx && \frac{1}{1-x}=\sum_{n=0}^{\infty} x^n\\
& = -\sum_{n=0}^{\infty} \frac{x^{n+1}}{n+1} + C, \quad |x|<1 \\
\\
\text{solve for }& C, \ x = 0 \\
\ln (1-0)& = - \sum_{n=0}^{\infty} \frac{0^{n+1}}{n+1} + C \\
0 & = 0 + C, \ C = 0 \\
\\
\therefore\ln(1-x) & = -\sum_{n=0}^{\infty} \frac{x^{n+1}}{n+1}, \quad |x|<1 \\
\\
\text{Ratio Test:}\qquad & \\
\lim_{ n \to \infty } \left|  \frac{\frac{x^{n+2}}{n+2}}{ \frac{x^{n+1}}{n+1}} \right| & = \lim_{ n \to \infty } \left|  \frac{x(n+1)}{n+2} \right| \\
& = \lim_{ n \to \infty } \left|  \frac{n+1}{n+2} \right||x| \\
& = |x|, \quad L = 1, \therefore R = 1 \\
\\
\\
\tan ^{-1} x & = \int \frac{1}{1+x^{2}} \ dx && \frac{1}{1-(-x^{2})}=\sum_{n=0}^{\infty} (-x^{2})^n = \sum_{n=0}^{\infty} (-1)^nx^{2n} \\
& = \sum_{n=0}^{\infty} (-1)^n\frac{x^{2n+1}}{2n+1} +C, \quad |x|<1 \\
\\
\text{colve for }& C, \ x = 0 \\
\tan ^{-1} 0 & = \sum_{n=0}^{\infty} (-1)^n0^{2n} +C \\
0 & = 0 + C, \ C = 0 \\
\\
\therefore\tan ^{-1} x & = \sum_{n=0}^{\infty} (-1)^nx^{2n}, \quad |x|<1
\end{align*}
$$

Maclaurin series of cosine
![[maclaurin_cosine.png|600]]
$$
\begin{align*}
& f(x)= \cos x && P(x)=c_{0}+c_{1}x+c_{2}x^2+ c_{3}x^{3} +c_{4}x^4 +\dots &&P\text{ approximates }f\text{ at }0\\
\\
& f(0) = 1 && P(0) = c_{0}, \ \therefore c_{0} = 1 \\
& \frac{df}{dx}(0) = -\sin 0 = 0 && \frac{dP}{dx}(0) = 1(c_{1}), \ \therefore c_{1} = 0 \\
& \frac{d^{2}f}{dx^{2}}(0) = -\cos 0 = -1 && \frac{d^{2}P}{dx^{2}}(0) = 2\cdot1(c_{1}), \ \therefore c_{2} = \frac{-1}{2!}=-\frac{1}{2} \\
& \frac{d^{3}f}{dx^{3}}(0) = \sin 0 = 0 && \frac{d^{3}P}{dx^{3}}(0) = 3\cdot2\cdot1(c_{2}), \ \therefore c_{3} = 0 \\
& \frac{d^{4}f}{dx^{4}}(0) = \cos 0 = 1 && \frac{d^{4}P}{dx^{4}}(0) = 4\cdot3\cdot2 \cdot1(c_{4}), \ \therefore c_{4} = \frac{1}{4!}=\frac{1}{24} \\
\\
& \therefore f(x)=1-\frac{1}{2}x^2+\frac{1}{24}x^{4}+ \dots && \text{at or around }x=0 && \text{even terms ie. symmetrical about }x=0
\end{align*}
$$
> [3b1b video](https://www.youtube.com/watch?v=3d6DsjIBzJ4)

Maclaurin series representation of important functions
$$
\begin{align*}
& e^x \\
\forall n\geq0 \ &\frac{d^ne^x}{dx^n}(0) = e^0 = 1 \\
\\
e^x & = \sum_{n=0}^{\infty} \frac{1}{n!}x^n \\
\\
\text{Ratio Test:} \qquad & \\
\lim_{ n \to \infty } \left|\frac{\frac{1}{(n+1)!}}{\frac{1}{n!}}\right| & = \lim_{ n \to \infty } \left|\frac{1}{n+1}\right| = 0 \\
R & = \infty \\
\therefore e^x & = {\color{aqua} \sum_{n=0}^{\infty} \frac{1}{n!}x^n, \quad \forall x \in \mathbb{R} } \\
\\
\\
& \sin x \\
\frac{d^n\sin x}{dx^n}(0) & = \begin{cases}
0 & n\equiv 0 \pmod 4 \\
1 & n\equiv 1 \pmod 4 \\
0 & n\equiv 2 \pmod 4 \\
-1 & n\equiv 3 \pmod 4 \\
\end{cases} \\
\\
\sin x & = \sum_{n=0}^{\infty} (-1)^n \frac{1}{(2n+1)!}x^{2n+1} \\
\\
\text{Ratio Test:} \qquad & \\
\lim_{ n \to \infty } \left|\frac{\frac{(-1)^{n+1}}{(2(n+1)+1)!}}{\frac{(-1)^n}{(2n+1)!}}\right| & = \lim_{ n \to \infty } \left|\frac{1}{(2n+3)(2n+2)}\right| = 0 \\
R & = \infty \\
 \therefore \sin x & = {\color{aqua} \sum_{n=0}^{\infty} (-1)^n \frac{1}{2n+1}x^{2n+1} , \quad \forall x \in \mathbb{R} } \\
\\
\\
& \cos x \\
\frac{d^n\cos x}{dx^n}(0) & = \begin{cases}
1 & n\equiv 0 \pmod 4 \\
0 & n\equiv 1 \pmod 4 \\
-1 & n\equiv 2 \pmod 4 \\
0 & n\equiv 3 \pmod 4 \\
\end{cases} \\
\\
\cos x & = \sum_{n=0}^{\infty} (-1)^n \frac{1}{(2n)!}x^{2n} \\
\\
\text{Ratio Test:} \qquad & \\
\lim_{ n \to \infty } \left|\frac{\frac{(-1)^{n+1}}{(2(n+1))!}}{\frac{(-1)^n}{(2n)!}}\right| & = \lim_{ n \to \infty } \left|\frac{1}{(2n+2)(2n+1)}\right| = 0 \\
R & = \infty \\
 \therefore \cos x & = {\color{aqua} \sum_{n=0}^{\infty} (-1)^n \frac{1}{(2n)!}x^{2n} , \quad \forall x \in \mathbb{R} }
\end{align*}
$$