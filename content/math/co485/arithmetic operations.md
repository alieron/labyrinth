---
tags:
  - co485/chapter1
  - cs/algorithms
complete: false
---
### Summary
Runtime of arithmetic operations
- relevant when dealing with large numbers
- polynomial time algorithms are efficient

| Operation                                      | Runtime for `co485` | Best runtime              |
| ---------------------------------------------- | ------------------- | ------------------------- |
| Addition, $a+b$                                | $O(\log n)$         | =                         |
| Subtraction, $a-b$                             | $O(\log n)$         | =                         |
| Comparison, $a>b$                              | $O(\log n)$         | =                         |
| Multiplication, $ab$                           | $O(\log^2 n)$       | $O(\log n \log \log n)$   |
| Integer division, $a/b \to b = aq+r$           | $O(\log^2 n)$       | $O(\log n \log \log n)$   |
| Modular addition/subtraction, $a\pm b \bmod n$ | $O(\log n)$         | =                         |
| Modular multiplication, $ab\bmod n$ ^fa4ba8    | $O(\log^2 n)$       | $O(\log n \log \log n)$   |
| Modular inversion(EEA), $a^{-1}\bmod n$        | $O(\log^2 n)$       | =                         |
| Modular division, $a^{-1}b\bmod n$             | $O(\log^2 n)$       | =                         |
| Modular exponentiation, $a^b\bmod n$           | $O(\log^3 n)$       | $O(\log^2 n \log \log n)$ |

> we use $\log n$ since when thinking about operations, we care about the size of the number in bits
### Concept
#### Multiplication
- use simple $O(\log^2 n)$
- ignore more efficient algorithms, such as:
	- $O(n^{\log_{2}3})$, [karatsuba algorithm](/labyrinth/notes/cs/cs341/karatsuba_algorithm)
	- $O(n\log n)$, galactic algorithm

#### Modular inversion
- why can the EEA do modular inversion?

$$
\begin{gather*}
aa^{-1} \equiv 1 \pmod n \\
\\
a^{-1}\text{ exists}\iff \gcd(a,n)=1 \qquad \text{(Theorem 2.1.1)} \\
\\
\begin{aligned}
ax + ny &= \gcd(a,n) &&\text{(Linearity of GCD)} \\
&= 1 \\
\\
ax + \underbrace{ ny  }_{ \equiv 0 \pmod n }&\equiv 1 \pmod n \\
ax &\equiv 1 \pmod n
\end{aligned} \\
\\
\therefore x = a^{-1}\text{ which was one of the coefficients from GCD}
\end{gather*}
$$


### Application
Swapping runtime between input value and bit length
$$
\begin{gather*}
\begin{aligned}
\text{input: }&&&n \\
\text{bit length: }&&& b = \log_{2} n, \ n = 2^b
\end{aligned} \\
\\
\begin{aligned}
O(\sqrt{ n }) &= O(n^\frac{1}{2}) \\
&= O(2^{\frac{b}{2}})
\end{aligned}
\end{gather*}
$$
> which explains why [trial division](/labyrinth/notes/math/abstract_algebra/integer_factorization#Trial_division) is actually exponential in bit length