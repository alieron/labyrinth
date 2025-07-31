---
tags:
- ma1521/chapter6
- math/calculus
complete: false
prev: /labyrinth/notes/math/ma1521/sequences
next: /labyrinth/notes/math/ma1521/power_series
---
   
### Summary
Rules for convergent series
$$
\begin{align*}
\text{Constant Rule :}&&& \sum_{n=1}^{\infty} ca_{n} = c\sum_{n=1}^{\infty} a_{n} \\
\\
\text{Addition Rule :}&&& \sum_{n=1}^{\infty} (a_{n}+b_{n}) = \sum_{n=1}^{\infty} a_{n} + \sum_{n=1}^{\infty} b_{n}
\end{align*}
$$

Convergence tests ^02e3ba
$$
\begin{align*}
\text{nth Term Test: }&&& \lim_{ n \to \infty } a_{n} \ DNE \lor \lim_{ n \to \infty } a_{n} \neq 0 \implies \sum_{n=1}^{\infty} a_{n}\text{ is divergent} &&\text{inconclusive when }\lim_{ n \to \infty } a_{n} = 0 \\
\\
\text{Integral Test: }&&& a_{n}=f(x), \ \sum_{n=1}^{\infty} a_{n}\text{ is convergent} \iff \int_{1}^{\infty} f(x) \ \text{ is convergent} \\
\\
\text{Comparison Test: }&&& \forall n\in \mathbb{Z}^+ \ 0\leq a_{n}\leq b_{n} && \text{only applies to series with nonnegative terms}\\
&&& \text{(i) } \sum_{n=1}^{\infty} b_{n}\text{ is convergent} \implies \sum_{n=1}^{\infty} a_{n}\text{ is convergent} && \text{bigger is convergent, then smaller is also} \\
&&& \text{(ii) } \sum_{n=1}^{\infty} a_{n}\text{ is divergent} \implies \sum_{n=1}^{\infty} b_{n}\text{ is divergent} && \text{smaller is divergent, then bigger is also} \\
\\
\text{Ratio Test: }&&& \lim_{ n \to \infty } \left|\frac{a_{n+1}}{a_{n}}\right| = L && \text{compare with next term, inconclusive if }L = 1\\
&&& \text{(i) } 0\leq L<1 \implies \sum_{n=1}^{\infty} a_{n}\text{ is absolutely convergent} \implies \sum_{n=1}^{\infty} |a_{n}| \text{ is convergent} \\
&&& \text{(ii) } L>1 \implies \sum_{n=1}^{\infty} a_{n}\text{ is divergent} \\
\\
\text{Root Test: }&&& \lim_{ n \to \infty } \sqrt[n]{ |a_{n}| } = L && \text{inconclusive if }L = 1\\
&&& \text{(i) } 0\leq L<1 \implies \sum_{n=1}^{\infty} a_{n}\text{ is absolutely convergent} \\
&&& \text{(ii) } L>1 \implies \sum_{n=1}^{\infty} a_{n}\text{ is divergent} \\
\\
\text{Alternating Series Test: }&&& \forall n \in \mathbb{Z}^+ \ b_{n} \geq b_{n+1} \land \lim_{ n \to \infty } b_{n} = 0 \implies \sum_{n=1}^{\infty} (-1)^{n-1}b_{n}\text{ is convergent} && \text{successive term decreases and term approaches 0}
\end{align*}
$$
> comparison -> test against similar geometric series or p-series
> ratio -> series involving factorials
> root -> series involving the nth power

Useful [logarithm](/labyrinth/notes/math/math_fundementals/rules_of_logarithms) for evaluating limits with exponents
$$
\lim_{ n \to \infty } u^n = e^{\lim_{ n \to \infty } \ln u^n} = e^{\lim_{ n \to \infty } n \ln u}
$$
### Concept
Series
$$
\sum_{n=1}^{\infty} a_{n} = a_{1}+a_{2}+ \dots
$$

Sequence of partial sums, and its limit
$$
\begin{align*}
& S_{n} = \sum_{i=1}^{n} a_{i} = a_{1}+a_{2}+ \dots \\
\\
& \{ S_{n} \}\implies S_{1}=(a_{1}),S_{2}=(a_{1}+a_{2}), \dots\text{ is the sequence of partial sums} \\
\\
& \lim_{ n \to \infty } S_{n} = \sum_{i=1}^{\infty} a_{i} \qquad \text{series is convergent if there is a finite sum}
\end{align*}
$$
> divergent and convergent similar to sequences

Property of convergent series
$$
\begin{align*}
{\color{orange}\sum_{n=1}^{\infty} a_{n} \text{ is convergent}} & \implies \lim_{ n \to \infty } S_{n}=L \\
& {\color{orange}\implies \lim_{ n \to \infty } a_{n}}=\lim_{ n \to \infty } (S_{n} - S_{n-1}) = L-L = {\color{orange}0} & \because \forall n \geq 2 \ a_{n} = S_{n}-S_{n-1}
\end{align*}
$$

Convergent [geometric series](/labyrinth/notes/math/ma1301/geometric_series) ^aa4638
$$
|r|< 1 \land a\neq0 \implies\sum_{n=1}^{\infty} ar^{n-1} = \frac{a}{1-r}
$$

p-series
$$
\sum_{n=1}^{\infty} \frac{1}{n^p}\text{ is convergent} \iff p> 1
$$

Bounded from above
$$
\sum_{n=1}^{\infty} a_{n}\text{ of nonnegative terms converges} \iff \exists k \in \mathbb{R} \ \forall n \in \mathbb{Z}^+ \ S_{n} < k \qquad \text{bounded above by }k
$$

Convergence of absolute series
$$
\sum_{n=1}^{\infty} |a_{n}|\text{ is convergent}\implies \sum_{n=1}^{\infty} a_{n}\text{ is absolutely convergent}
$$
> else it is conditionally convergent
### Application
Convergent geometric series
$$
\begin{align*}
\sum_{n=1}^{\infty} 2^{2n}3^{1-n} & = 3\sum_{n=1}^{\infty} \left( \frac{4}{3} \right)^n \\
& = 4\sum_{n=1}^{\infty} \left( \frac{4}{3} \right)^{n-1} \\
\\
r = \frac{4}{3}> 1 & \quad \therefore\text{divergent} \\
\\
|x| < 1,\ \sum_{n=1}^{\infty} x^n & = \sum_{n=1}^{\infty} x\cdot x^{n-1} \\
& = \frac{x}{1-x} \quad \therefore\text{convergent}
\end{align*}
$$
> factorize to get n-1

Breakdown into partial sums for [telescoping series](/labyrinth/notes/math/ma1301/telescoping_series)
$$
\begin{align*}
\sum_{n=1}^{\infty} \frac{1}{n(n+1)} & = \sum_{n=1}^{\infty} \frac{n+1}{n(n+1)}-\frac{n}{n(n+1)} \\
& = \sum_{n=1}^{\infty} \frac{1}{n}-\frac{1}{n+1} \\
\\
S^n & = \sum_{i=1}^{n} \frac{1}{i}-\frac{1}{i+1} \\
& = \left( \frac{1}{1}-\frac{1}{2} \right) + \left( \frac{1}{2}-\frac{1}{3} \right) + \dots + \left( \frac{1}{n-1}-\frac{1}{n} \right) + \left( \frac{1}{n}-\frac{1}{n+1} \right) \\
& = 1-\frac{1}{n+1} \\
\\
\lim_{ n \to \infty } S_{n} & = \lim_{ n \to \infty } 1-\frac{1}{n+1} \\
& = \lim_{ n \to \infty } 1-\frac{\frac{1}{n}}{\frac{n}{n}+\frac{1}{n}} \\
& = 1
\end{align*}
$$

Alternating series test
$$
\begin{align*}
\text{smallest }&a\in \mathbb{Z}^+\text{ such that }\sum_{n=1}^{\infty}(-1)^{n-1}\frac{(\ln n)^2}{n^a} \text{ is convergent} \\
\lim_{ n \to \infty } \frac{(\ln n)^2}{n^a} &=\lim_{ n \to \infty } \frac{2\ln n\cdot \frac{1}{n}}{an^{a-1}} &&& \text{(L'Hopital's Rule }\frac{\infty}{\infty} \text{)}\\
&=\lim_{ n \to \infty } \frac{2\ln n}{an^{a}}\\
&=\lim_{ n \to \infty } \frac{\frac{2}{n}}{a^2n^{a-1}} &&& \text{(L'Hopital's Rule }\frac{\infty}{\infty} \text{)}\\
&=\lim_{ n \to \infty } \frac{2}{a^2n^{a}}\\
&=0, \quad for \ a\geq1 \quad \therefore \text{convergent}
\end{align*}
$$

