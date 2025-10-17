---
tags:
- ma1301/chapter1
- math/algebra
complete: true
prev: /labyrinth/notes/math/ma1301/geometric_series
next: /labyrinth/notes/math/ma1301/telescoping_series

---
### Summary
Combinations(recall pascal's triangle)
$$
\begin{align*}
\text{Binomial Coefficient:} & \qquad\binom{n}{r} = \frac{n!}{r!(n-r)!} \\
\\
\text{Symmetry:}& \qquad \binom{n}{r} = \binom{n}{n-r} \\
\\
\text{Choose 0:}& \qquad \binom{n}{0}=\binom{n}{n}=1 \\
\\
\text{Choose 1:}& \qquad \binom{n}{1}=\binom{n}{n-1}=n \\
\end{align*}
$$

Binomial expansion, [polynomials](/labyrinth/notes/math/ma1521/polynomials)
$$
\begin{align*}
(a+b)^n & =\binom{n}{0}a^nb^0+\binom{n}{1}a^{n-1}b^1+\binom{n}{2}a^{n-2}+\dots+\binom{n}{n-1}a^1b^{n-1}+\binom{n}{n}a^0b^n \\
\\
& = \sum_{r=0}^{n} \binom{n}{r}a^rb^{n-r} = \sum_{r=1}^{n} \binom{n}{r-1}a^{r-1}b^{n-(r-1)} \\
\end{align*}
$$

Generalised binomial theorem, refer to [rules of indices](/labyrinth/notes/math/math_fundementals/rules_of_indices#^e0fdcf)
$$
\begin{align*}
(1+a)^n & = 1 + na + \frac{n(n-1)}{2!}a^2 + \frac{n(n-1)(n-2)}{3!}a^3 + \frac{n(n-1)(n-2)(n-3)}{4!}a^4 + \dots, \ |a|<1, \ n\ni \mathbb{Z}^+
\end{align*}
$$
### Concept
Calculation of $nCr$
$$
\begin{align*}
\binom{n}{r} & = \frac{n!}{r!(n-r)!} \\
\\
& = \frac{n(n-1) \dots (n-(r-1))(n-r)!}{r!(n-r)!} \\
\\
& = \frac{n(n-1) \dots (n-(r-1))}{r!} \\
\\
ie. \ \binom{8}{3} &: \\                      
\\
\binom{8}{3} & = \frac{8!}{3!(8-3)!} \\
& = \frac{8(7)(6)(5!)}{3!\times 5!} \\
& = \frac{8\times 7\times 6}{3!} = \frac{8\times 7\times 6}{3\times 2\times 1} = 56 \\
\\
ie. \ \binom{\frac{5}{3}}{4} &:\\
\\
\binom{\frac{5}{3}}{4} & = \frac{\frac{5}{3}(\frac{2}{3})(-\frac{1}{3})(-\frac{4}{3})}{4!} \\
& = \frac{40}{1944}=\frac{5}{243}
\end{align*}
$$

Coefficient of $x^k$ term/constant term($x^0$)
$$
\begin{align*}
with & \ (a+bx)^n, \\
\\
T_{k} & = \binom{n}{k}a^{n-k}b^k
\end{align*}
$$
### Application
Proofs
$$
\begin{align*}
Prove \ that &\ \binom{n-1}{k}+\binom{n-1}{k-1} \equiv \binom{n}{k}, \\
\\
LHS & = \frac{(n-1)!}{k!(n-1-k)!}+\frac{(n-1)!}{(k-1)!(n-k)!} \\
\\
& = \frac{(n-1)!(n-k)}{k!(n-1-k)!(n-k)}+\frac{k(n-1)!}{k(k-1)!(n-k)!} \\
\\
& = \frac{n(n-1)!-k(n-1)!}{k!(n-k)!}+\frac{k(n-1)!}{k!(n-k)!} \\
\\
& = \frac{n(n-1)!-k(n-1)!+k(n-1)!}{k!(n-k)!} \\
\\
& = \frac{n!}{k!(n-k)!} = RHS \ (proven)
\end{align*}
$$