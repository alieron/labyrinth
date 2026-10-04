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
f(n) = \sum_{i=1}^{n} \log i , \quad g(n) = n \log n \\
\\
f(n) = 2^n, \quad g(n) = n ! \\
\\
f(n) = n ^{\log n}, \quad g(n) = (\log n)^n \\
\\
f(n) = 3^n, \quad g(n) = 3 ^{2n} \\
\\
f(n) = 2^{n^{0.1}}, \quad g(n) = (\log n) ^{\log n} 
\end{gather*}
$$

### Extra
