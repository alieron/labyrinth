---
tags:
- math/fundamentals
- math/modular_arithmetic
complete: false
index: null
---
[[#|Previous]]   [[#|Next]]
### Summary
Congruence modulo $n$ ^3013a5
$$
\begin{gather*}
a\equiv b \pmod n \iff n\mid (a-b)\\
\\
\exists k \in \mathbb{Z} , \ a = kn + b & \text{(Multiple of Moduli)} \\
\\
0\leq r<n & \text{(Common Remainder)}\\
a = pn + r \\
b = qn + r \\
where, \ k = p - q
\end{gather*}
$$

Modulo inverse(multiplicative) ^186d73
### Concept
Modulo operator, remainder of integer division
$$
\begin{gather*}
a\mod n = r, \ 0\leq r<n \\
r=a-kn, \ k\in \mathbb{Z}
\end{gather*}
$$

[Divisibility](/labyrinth/notes/math/cs1231s/properties_of_integers#^e55bde), remainder 0
$$
a\equiv 0 \pmod n \iff n \mid a
$$

cancellation law
$$
\begin{align*}

\end{align*}
$$
### Application
Demonstration of congruence modulo 10
$$
\begin{gather*}
&63\equiv 33 \equiv 13 \pmod {10}& \\
\\
&\text{Multiple of Moduli:} \\
63 = 3(10) + 33 & 63 = 5(10)+13 & 23 = 1(10)+13 \\
\\
&\text{Common Remainder:} \\
63=6(10)+3 & 33=3(10)+3 & 13=1(10)+3\\
63 \mod 10 = 3 & 33 \mod 10 = 3 & 13 \mod 10 = 3 \\
& r = 3
\end{gather*}
$$

