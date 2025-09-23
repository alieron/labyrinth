---
tags:
- math/modular_arithmetic
complete: false
---
   
### Summary
Legendre symbol, function to check for quadratic residue for [prime](/labyrinth/notes/math/prime_numbers) moduli
$$
\begin{gather*}
\left({\frac {a}{p}}\right)\equiv a^\frac{p-1}{2} \pmod p\\
\\
\left({\frac {a}{p}}\right)={\begin{cases}1&{\text{if }}a{\text{ is a quadratic residue modulo }}p{\text{ and }}a\not \equiv 0{\pmod {p}},\\-1&{\text{if }}a{\text{ is a quadratic nonresidue modulo }}p,\\0&{\text{if }}a\equiv 0{\pmod {p}}.\end{cases}}
\end{gather*}
$$
### Concept
$a$ is a quadratic residue $n$ if it is congruent to a perfect square
$$
\exists x \in \mathbb{Z} : \quad x^2\equiv a \pmod n
$$

Law of quadratic reciprocity
$$
\left( \frac{p}{q} \right)\left( \frac{q}{p} \right) = (-1)^{\frac{p-1}{2}\frac{q-1}{2}}
$$
### Application
Deriving the legendre symbol with [fermat's little theorem](/labyrinth/notes/math/fermat's_little_theorem)
$$
\begin{align*}
a^{p-1}&\equiv 1 \pmod p && \text{(Fermat's Little Theorem)}\\
a^{p-1} -1 &\equiv 0 \pmod p \\
\left(a^\frac{p-1}{2} -1\right)\left(a^\frac{p-1}{2} + 1\right) &\equiv 0 \pmod p && \text{(Difference of two squares)}\\
\\
a^\frac{p-1}{2} -1 &\equiv 0 \pmod p &or\qquad a^\frac{p-1}{2} +1 &\equiv 0 \pmod p\\
\end{align*}
$$

Primes modulo 4
$$
\begin{gather*}
\because primes \ are \ odd, \ for \ prime \ p\\
p\equiv 1 \pmod 4 \quad or \quad p\equiv 3 \pmod 4 
\end{gather*}
$$

