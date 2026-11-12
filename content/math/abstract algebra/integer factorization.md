---
tags:
  - math/algebra
  - math/number_theory
complete: false
---
### Summary
Integer factorization algorithms

|                                                          | Main Idea                                                                                                            | Time Complexity                                                                                       | Space                                                                                    | Works well when                                             | Remarks                                                                                                   |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [trial division](/labyrinth/notes/math/abstract_algebra/integer_factorization#Trial_division) | test candidate factors upto $\sqrt{ n }$                                                                             | $O(\sqrt{ n })$                                                                                       | $O(b)$ bits                                                                              | $n$ has a small factor                                      | deterministic<br><br>slow for large factors                                                               |
| [fermat's factorization](#)                               | search for $a^2-n=c^2$, then $n=(a-c)(a+c)$                                                                          | For odd \(n=pq\), exactly \(\frac{p+q}{2}-\lceil\sqrt n\rceil\) increments before reaching this pair. | $O(b)$ bits                                                                              | two factors are close together                              | deterministic<br><br>potentially very slow for widely separated factors<br><br>remove factors of 2 first. |
| [pollard rho](/labyrinth/notes/math/co485/pollard_rho)                                          | Generate a sequence modulo \(n\); a collision modulo an unknown factor is detected through a gcd.                    | Heuristic expected \(O(\sqrt p)\) iterations; \(O(n^{1/4})\) for balanced semiprimes.                 | $O(b)$ bits using Floyd/Brent cycle detection                                            | A factor is relatively small.                               | Restart with a different seed or polynomial if the gcd becomes \(n\).                                     |
| [pollard p-1](#)                                          | Choose \(M\) divisible by \(p-1\); compute \(\gcd(a^M-1,n)\).                                                        | approximately $O(B)$                                                                                  | Small arithmetic state; prime generation/storage adds space depending on implementation. | \(p-1\) consists of small prime powers.                     | Requires \(p-1\mid M\); gcd must lie strictly between \(1\) and \(n\).                                    |
| [ECM](#) - elliptic curve method                          | Replace the fixed group of order \(p-1\) with varying elliptic curve groups; a failed inversion can reveal a factor. | $L_p[1/2,\sqrt2]$, with additional arithmetic costs depending on \(b\).                               | Low in basic stage 1; stage 2 uses additional storage.                                   | A factor is much smaller than \(n\).                        | Success depends on smooth curve-group orders; retry with new curves.                                      |
| [quadratic sieve](#)                                      | Collect smooth values of \(a^2-n\); use linear algebra to construct a congruence of squares.                         | $L_n[1/2,1]$                                                                                          | Large: factor base, relations, sieve arrays, and sparse matrix.                          | General composites without an exploitable factor structure. | Relation collection and linear algebra dominate; space depends heavily on implementation.                 |
| [GNFS](#)                                                 | Collect rational and algebraic smooth relations to construct a congruence of squares.                                | $L_n[1/3,(64/9)^{1/3}]$                                                                               | Large: relations, factor bases, and sparse matrix.                                       | Very large general composites.                              | Substantial setup and implementation complexity.                                                          |
> see [L-notation](/labyrinth/notes/math/co485/L-notation) for the subexponential time complexity

### Concept
#### Integer factorization
- decomposition of a positive integer into a product of integers
- numbers are either composites or primes

Fundemental Theorem of Arithmetic
- [proof](/labyrinth/notes/math/cs1231s/proof_by_induction#^4d3948)

$$
\forall n\in \mathbb{Z} \ n\geq2\to \exists k \in \mathbb{Z} \ n= \prod_{i=1}^k p_{i}^{r_{i}}
$$

#### Trial division
- most basic primality test
- if $n$ is composite, it must have a factor $\leq \sqrt{ n }$

```
TrialDivision(n): // returns (list F of all prime factors of n)
	P <- set of all primes ≤ n**0.5
	F <- empty list of factors

	for each prime p in P do
		if n % p == 0
			add factor p to list F
			n <- n/p
	
	if F is empty  // original n is prime?
		add factor n to list F
		
	return F
```
> determining if a number $\leq \sqrt{ n }$ is prime is non-trivial as $n$ increases, most algorithms just try all numbers $2\dots \sqrt{ n }$

### Extra
Primality test in python
- [trial division](/labyrinth/notes/math/abstract_algebra/integer_factorization#Trial_division) adjacent
- save some time by excluding multiples of 2 and 3

```python
def isPrime(a):
	if a == 2:
		return True
	if a < 2 or a % 2 == 0:
		return False
	return not any(a % x == 0 for x in range(3, int(a**0.5) + 1, 2))
```