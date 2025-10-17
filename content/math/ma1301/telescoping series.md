---
tags:
- ma1301/chapter1
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1301/binomial_theorem
next: /labyrinth/notes/math/ma1301/differentiation

---
### Summary
[Summation](/labyrinth/notes/math/math_fundementals/summation_notation) notation
$$
\begin{align*}
\sum_{i=1}^{n}a_{i}-a_{i-1}, \ or \ \sum_{i=1}^{n}a_{i}-a_{i+1} \\
\end{align*}
$$
### Concept
Telescopic sequence
$$
\begin{align*}
\lbrace a_{i} \rbrace^{n}_{i=m}: \quad a_{m}, \ & a_{m+1}, \ a_{m+2}, \ \dots \ , \ a_{n} \\
\\
such \ that: \quad u_{m} & = a_{m}-a_{m+1} \\
\\
u_{m+1} & = a_{m+1}-a_{m+2} \\
& \dots \\
u_{n} & = a_{n}-a_{n+1} \\
\\
\therefore \ \sum_{1=m}^{n} & = u_{m}+u_{m+1}+\dots+u_{n-1}+u_{n} \\
& = a_{m} - a_{n+1}
\end{align*}
$$
### Application
Finite telescopic sequence, with [partial fractions](/labyrinth/notes/math/ma1301/partial_fractions)
$$
\begin{align*}
\sum_{r=2}^{400}(\sqrt{ r }-\sqrt{ r-1 }) & = -\sqrt{ 1 } + \sqrt{ 400 } \\
& = 20-1 = 19 \\
\\
\sum_{r=1}^n \frac{1}{(r+1)(r+2)} & = \sum_{r=1}^n \left(\frac{1}{r+1}-\frac{1}{r+2}\right) \ (partial \ fractions) \\
& = \frac{1}{2}-\frac{1}{n+2}
\end{align*}
$$

Infinite telescopic sequence
$$
\begin{align*}
\sum_{i=1}^n\frac{1}{i(i+1)} & = \sum_{i=1}^n \left(\frac{1}{i}-\frac{1}{i+1}\right) \\
& = \frac{1}{1}-\cancel{ \frac{1}{2} }+\cancel{ \frac{1}{2} }-\cancel{ \frac{1}{3} }+\dots+\cancel{ \frac{1}{n-1} }-\cancel{ \frac{1}{n} }+\cancel{ \frac{1}{n} }-\frac{1}{n+1} \\
& = \frac{1}{1} - \frac{1}{n+1} \\
\\
if \ n\to \infty \implies a_{n+1} & \to 0 \\
\\
\sum_{i=1}^\infty\frac{1}{i(i+1)} & = \frac{1}{1}=1
\end{align*}
$$

Telescopic sequence involving [logarithms](/labyrinth/notes/math/math_fundementals/rules_of_logarithms)
$$
\begin{align*}
\sum_{r=1}^{99}\lg\left(\frac{r+1}{r}\right) & = \sum_{r=1}^{99}(\lg(r+1)-\lg r) \\
& = \cancel{ \lg 2 } - \lg 1 + \cancel{ \lg 3 } - \cancel{ \lg 2 } + \dots + \cancel{ \lg 99 } -\cancel{ \lg 98  }+ \lg 100 - \cancel{ \lg 99 } \\
& = \lg 100 - \lg 1 = \lg 10^2 + \lg 1 \\
& = 2+0 = 2
\end{align*}
$$