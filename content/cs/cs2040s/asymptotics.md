---
tags:
  - cs2040s/chapter1
  - cs/fundamentals
  - cs/algorithms
complete: false
prev: /labyrinth/notes/cs/cs2040s/compact_array
next: /labyrinth/notes/cs/cs2040s/sorting_II
pred: "[orders of growth](/labyrinth/notes/cs/cs1101s/orders_of_growth)"
---
### Summary
Relations
$$
\begin{gather*}
f\in o(g)
\implies
f\in O(g) \\
\\
f\in\omega(g)
\implies
f\in\Omega(g) \\
\\
f\in\Theta(g)
\iff
f\in O(g)\text{ and }f\in\Omega(g)
\end{gather*}
$$

Useful limits
$$
\begin{gather*}
\frac{1}{n} \to 0, \quad \frac{1}{n^{k}} \to 0 \qquad (k>0) \\
\\
\frac{\log n}{n^k}\to 0,\quad \frac{(\log n)^a}{n^k}\to 0 \qquad (a>1) \\
\\
\frac{n^k}{a^n} \to 0 \\
\\
\frac{a^n}{n!} \to 0
\end{gather*}
$$

Standard growth hierachy
$$
1
\ll
\log n
\ll
(\log n)^k
\ll
n^\varepsilon
\ll
n
\ll
n^k
\ll
a^n
\ll
n!
\ll
n^n \qquad (k>1,\varepsilon>0,a>1)
$$

### Concept
#### Big-$O$
- $f$ grows no faster than $g$

$$
\begin{gather*}
f\in O(g)
\iff
\exists c>0,\exists n_0:
0\le f(n)\le c\,g(n)
\quad\text{for all }n\ge n_0 \\
\\
\lim_{n\to\infty}\frac{f(n)}{g(n)}<\infty
\quad\implies\quad
f\in O(g)
\end{gather*}
$$

#### Little-$o$
 - $f$ grows strictly slower than $g$
 - $f$ becomes insignificant

$$
\begin{gather*}
f\in o(g)
\iff
\lim_{n\to\infty}\frac{f(n)}{g(n)}=0 \\
\\
f \in o(g) \quad\implies\quad f \in O(g)
\end{gather*}
$$

#### Big-$\Omega$
- $f$ grows no slower than $g$

$$
\begin{gather*}
f\in\Omega(g)
\iff
\exists c>0,\exists n_0:
0\le c\,g(n)\le f(n)
\quad\text{for all }n\ge n_0 \\
\\
\lim_{n\to\infty}\frac{f(n)}{g(n)}>0 \quad\implies\quad f \in \Omega(g)
\end{gather*}
$$

#### Little-$\omega$
- $f$ grows strictly faster than $g$

$$
\begin{gather*}
f\in\omega(g)
\iff
\lim_{n\to\infty}\frac{f(n)}{g(n)}=\infty \\
\\
f \in \omega(g) \quad\implies\quad f \in \Omega(g)
\end{gather*}
$$

#### Big-$\Theta$
- $f$ grows at the same rate as $g$

$$
\begin{gather*}
f\in\Theta(g)
\iff
\exists c_1,c_2>0,\exists n_0:
c_1g(n)\le f(n)\le c_2g(n)\\
\\
0<
\lim_{n\to\infty}\frac{f(n)}{g(n)}
<\infty
\quad\implies\quad
f\in\Theta(g)
\end{gather*}
$$




![[big-o_complexity.png]]

### Application

$$
\begin{gather*}
f(n) = n ^{300} \log n, \quad g(n) = n (\log n)^{300} \\
\\
\begin{aligned}
\lim_{ x \to \infty } \frac{n ^{300} \log n}{n (\log n)^{300}} &= \lim_{ x \to \infty } \frac{n ^{299}}{ (\log n)^{299}} \\
&= \lim_{ x \to \infty } \left( \frac{n}{ \log n} \right) ^{299}\\
&\to\infty
\end{aligned} \\
\\
f \in \omega(g) \\
\\
\\
f(n) = \sum_{i=1}^{n} \log i , \quad g(n) = n \log n \\
\\
\begin{aligned}
\sum_{i=1}^{n} \log i &\leq \sum_{i=1}^{n} \log n \\
&\leq n\log n \\
&\geq \frac{n}{2}\log \frac{n}{2}
\end{aligned}\\
\\
f \in \Theta(g) \\
\\
\\
f(n) = 2^n, \quad g(n) = n ! \\
\\
\begin{aligned}
\lim_{ x \to \infty } \frac{2^n}{n!} &= \lim_{ x \to \infty } \frac{\log 2^n}{\log n!}  \\
&= \lim_{ x \to \infty } \frac{n\log 2}{\log n!} < \lim_{ x \to \infty } \frac{n\log 2}{n\log n}\\
&\to 0
\end{aligned} \\
\\
f \in o(g) \\
\\
\\
f(n) = n ^{\log n}, \quad g(n) = (\log n)^n \\
\\
\begin{aligned}
\lim_{ x \to \infty } \frac{n ^{\log n}}{(\log n)^n} &= \lim_{ x \to \infty } \frac{\log n \log n }{n\log \log n}   \\
&\to 0
\end{aligned} \\
\\
f \in o(g) \\
\\
\\
f(n) = 3^n, \quad g(n) = 3 ^{2n} \\
\\
\begin{aligned}
\lim_{ x \to \infty } \frac{3^n}{3 ^{2n}} &= \lim_{ x \to \infty } 3^{-n} \\
&\to 0
\end{aligned} \\
\\
f \in o(g) \\
\\
\\
f(n) = 2^{n^{0.1}}, \quad g(n) = (\log n) ^{\log n} \\
\\
\begin{aligned}
\lim_{ x \to \infty } \frac{2^{n^{0.1}}}{(\log n) ^{\log n}} &= \lim_{ x \to \infty }  \frac{n^{0.1}\log 2}{(\log n) \log(\log n)} \\
&\to \infty
\end{aligned} \\
\\
f \in \omega(g)
\end{gather*}
$$
