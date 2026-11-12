---
tags:
  - math/abstract_algebra
  - to_review
complete: false
---
### Summary
A field is a commutative ring in which every nonzero element has a multiplicative inverse.

### Concept
For field $F$, $(F\setminus\{0\},\cdot)$ is an abelian group. Consequently fields have no zero divisors:

$$
ab=0,\ a\ne0
\implies a^{-1}ab=a^{-1}0
\implies b=0.
$$

Examples are $\mathbb Q,\mathbb R,\mathbb C$, and $\mathbb Z_p$ for prime $p$. In contrast, $\mathbb Z_n$ is not a field when $n$ is composite.



### Application
Over a field, a nonzero degree-$d$ polynomial has at most $d$ roots. This fact underlies the generator theorem for $\mathbb Z_p^*$ and primality tests. Finite extensions arise as $\mathbb F_p[x]/(f(x))$ for irreducible $f$; see [rings and finite fields](#).


$$
\mathbb{S} = M_{2}(\mathbb{R})\text{ is not a field}
$$