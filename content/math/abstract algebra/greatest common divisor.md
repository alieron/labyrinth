---
tags:
  - math/algebra
  - math/number_theory
  - to_review
complete: false
next: /labyrinth/notes/math/co485/tonelli-shanks_algorithm
prev: /labyrinth/notes/math/abstract_algebra/divisibility

---
### Summary
$$
\begin{gather*}
\gcd(a,b)=\max\{d>0:d\mid a\text{ and }d\mid b\} \\
\\
\begin{aligned}
& \gcd(a,b) = gcd(b,a) \\
& a \neq 0 \implies\gcd(a, 0) = |a|
\end{aligned}
\end{gather*}
$$

### Concept
#### Greatest common divisor(GCD)
- largest divisor of two integers

$$
\gcd(a,b)=\max\{d>0:d\mid a\text{ and }d\mid b\}
$$

#### Euclidean invariance
- GCD is invariant under euclidean division
- basis for the euclidean algorithm

$$
\begin{align*}
& \text{Claim: } \gcd(a,b)=\gcd(b,a\bmod b), \quad a,b \neq 0 \\
& \text{Rewrite: } {d\mid a} \land {d\mid b} \iff {d\mid b} \land {d\mid (a \bmod b)} \\
\\
& \text{ WLOG let }a = bq+r \implies r = a \mod b \\
\\
&(\Longrightarrow)\text{ Show that }{d\mid a} \land {d\mid b} \implies {d\mid b} \land {d\mid r} \\
&\quad \begin{aligned}
&\text{ Suppose }{d\mid a} \land {d\mid b} \\
&\quad\begin{split}
& \implies \forall k, l \in \mathbb{Z}, \ d \mid (ka + lb) &\qquad& \text{(Linearity of divisibility)} \\
& \implies d \mid (a - qb)\\
& \implies d \mid r \\
\\
&\therefore d \mid r 
\end{split}
\end{aligned} \\
\\

\\
&(\Longleftarrow)\text{ Show that }{d\mid b} \land {d\mid r} \implies {d\mid a} \land {d\mid b} \\
&\quad \begin{aligned}
&\text{ Suppose }{d\mid b} \land {d\mid r}  \\
&\quad\begin{split}
& \implies \forall k, l \in \mathbb{Z}, \ d \mid (kb + lr) &\qquad& \text{(Linearity of divisibility)} \\
& \implies d \mid (qb + r)\\
& \implies d \mid a \\
\\
&\therefore d \mid a
\end{split}
\end{aligned} \\
\\

\end{align*}

$$
> we generalise $d$ to represent an arbitrary common divisor, essentially the set of divisors between $(a, b)$ and $(b,r)$ is identical, so we can ignore the max condition in the GCD

#### Bezout's identity
- Common-divisor maximum under divisibility
- Positive generator of the ideal $(a,b)$ in $\mathbb Z$
- Minimal positive integer representable as an integer linear combination

$$
ax+by=\gcd(a,b)
$$

#### Coprimality
$$
\gcd(a,b)=1\iff\exists x,y\in\mathbb Z:\ ax+by=1
$$

- Derive invertibility of $a$ modulo $b$ from Bezout coefficients
- Compare pairwise coprime and jointly coprime collections
- Research consequences for the [chinese remainder theorem](/labyrinth/notes/math/co485/chinese_remainder_theorem)

#### Generalizations
- Define gcds up to units in integral domains
- Compare Bezout domains, principal ideal domains, and unique factorization domains
- Extend to polynomial gcds and subresultant methods

#### Open questions
- Which gcd algorithms minimize bit complexity for huge integers
- How do approximate gcd problems arise with noisy data
- When does a multivariate polynomial gcd remain computationally tractable

### Links
- [prime numbers](/labyrinth/notes/math/~ma2202/prime_numbers)
- [euclidean algorithm](#)
- [chinese remainder theorem](/labyrinth/notes/math/co485/chinese_remainder_theorem)
- [GNFS](#)

### Sources
- [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm)
- [Niven Zuckerman Montgomery](https://www.wiley.com/en-us/An+Introduction+to+the+Theory+of+Numbers%2C+5th+Edition-p-9780471625469)
- [Modern Computer Algebra](https://doi.org/10.1017/CBO9781139856065)
