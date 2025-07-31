---
tags:
- ma1521/chapter4
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1521/integration_II
next: /labyrinth/notes/math/ma1521/applied_integration
---
   
### Summary
Type I
- infinite limits of integration/bounds

$$
\begin{align*}
\int_{a}^\infty f(x)\ dx&=\lim_{ b \to \infty } \int_{a}^bf(x)\ dx\\
\\
\int_{-\infty}^b f(x)\ dx&=\lim_{ a \to -\infty } \int_{a}^bf(x)\ dx\\
\\
\int_{-\infty}^\infty f(x)\ dx&= \int_{-\infty}^c f(x)\ dx +  \int_{c}^\infty f(x)\ dx
\end{align*}
$$

Tyoe II
- function goes to infinity within the interval of integration

$$
\begin{align*}
\text{Discontinuous at }a: &&\int_{a}^b f(x)\ dx&=\lim_{ c \to a^+ } \int_{a}^b f(x)\ dx\\
\\
\text{Discontinuous at }b: && \int_{a}^b f(x)\ dx&=\lim_{ c \to b^- } \int_{a}^c f(x)\ dx\\
\\
\text{Discontinuous at }c, \ a<c<b: &&\int_{a}^b f(x)\ dx&= \int_{a}^c f(x)\ dx +  \int_{c}^b f(x)\ dx
\end{align*}
$$
### Concept
Improper integrals
- converges -> limit is finite
- diverges -> limit DNE
### Application
Evaluating type I improper integrals
$$
\begin{align*}
& \int_{1}^\infty \frac{\ln x}{x^2}\ dx \\
\\
\int \frac{\ln x}{x^2}\ dx & = \ln x\cdot\frac{-1}{x}-\int \frac{1}{x}\cdot\frac{-1}{x}\ dx\\
& = -\frac{\ln x}{x}-\frac{1}{x}+C\\
& = -\frac{1+\ln x}{x}+c\\
\\
\int_{1}^\infty \frac{\ln x}{x^2}\ dx & = \lim_{ b \to \infty } \int_{1}^b \frac{\ln x}{x^2}\ dx\\
& = \lim_{ b \to \infty } \left[-\frac{1+\ln x}{x}\right]_{1}^b\\
& = \lim_{ b \to \infty } \left( -\frac{1+\ln b}{b} \right)-\left( -\frac{1+\ln 1}{1} \right)\\
& = \lim_{ b \to \infty } 1-\frac{1}{b}-\frac{\ln b}{b} &&& \lim_{ b \to \infty } \frac{\ln b}{b}=\lim_{ b \to \infty } \frac{1}{b}=0\quad\text{(L'Hôpital's Rule)}\\
& = 1
\end{align*}
$$
$$
\begin{align*}
& \int_{-\infty}^{\infty} \frac{1}{1+x^2} \ dx \\
\\
\int \frac{1}{1+x^2} \ dx & = \tan ^{-1}x+C \\
\\
\int_{-\infty}^{\infty} \frac{1}{1+x^2} \ dx & = \lim_{ b \to -\infty } \int_{b}^{0} \frac{1}{1+x^2} \ dx +  \lim_{ b \to \infty } \int_{0}^{b} \frac{1}{1+x^2} \ dx \\
& =  \lim_{ b \to -\infty } [\tan ^{-1}x]_{b}^0 +  \lim_{ b \to \infty } [\tan ^{-1}x]_{0}^b \\
& = \lim_{ b \to -\infty } (\tan ^{-1}0-\tan ^{-1}b) +  \lim_{ b \to \infty } (\tan ^{-1}b-\tan ^{-1}0) \\
& =-\left( -\frac{\pi}{2} \right) +  \frac{\pi}{2} \\
& = \pi
\end{align*}
$$

Evaluating type II improper integrals
$$
\begin{align*}
&\int_{0}^1 \frac{1}{(x-1)^\frac{2}{3}} \ dx, \quad x\to1, \ \frac{1}{(x-1)^\frac{2}{3}}\to \infty \\ 
\\
\int_{0}^1 \frac{1}{(x-1)^\frac{2}{3}} \ dx & = \lim_{ c \to 1^- } \int_{0}^c \frac{1}{(x-1)^\frac{2}{3}} \ dx\\
& = \lim_{ c \to 1^- } \left[ \frac{(x-1)^\frac{1}{3}}{\frac{1}{3}} \right]_{0}^c=\lim_{ c \to 1^- } \left[ 3(x-1)^\frac{1}{3} \right]_{0}^c\\
& = \lim_{ c \to 1^- } 3(c-1)^\frac{1}{3}-(-3)\\
& = 3
\end{align*}
$$