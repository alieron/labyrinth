---
tags:
  - math/abstract_algebra
  - to_review
complete: false
---
### Summary
A commutative ring supports addition, subtraction, multiplication, identities, and distributivity; multiplication need not have inverses.

### Concept
A commutative ring $(R,+,\cdot)$ satisfies:

$$
\begin{gather*}
(R,+)\text{ is an abelian group},\\
(ab)c=a(bc),\qquad ab=ba,\qquad 1a=a,\\
a(b+c)=ab+ac.
\end{gather*}
$$

Examples include $\mathbb Z$, $\mathbb Z_n$, and polynomial rings $F[x]$. A ring can contain zero divisors: nonzero $a,b$ with $ab=0$.


#### Characteristic
- order of the rings's additive group

$$
\operatorname{char}(R)\begin{cases}
\text{smallest }n, \ \underbrace {1+\cdots +1} _{n{\text{ summands}}}=0  & \text{if }n\text{ exists}\\
0 & \text{otherwise}
\end{cases}
$$
### Application
Quotient rings $F[x]/(p(x))$ represent polynomials modulo $p(x)$. They are fields exactly when $p(x)$ is irreducible. See [fields](/labyrinth/notes/math/~ma2202/fields), [rings and finite fields](#), and [ring module LWE and NTT](#).
