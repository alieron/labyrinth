---
tags:
  - co485/chapter2
  - math/number_theory
  - to_review
complete: false
prev: /labyrinth/notes/math/co485/pohlig-hellman
next: /labyrinth/notes/math/co485/finite_fields

---
### Concept
#### Index calculus
**Correctness claim (index calculus).** Smooth relations determine factor-base logarithms, after which one smooth multiple of the target determines its logarithm.
- layman explanation: factoring smooth values turns products into linear equations for logarithms.

**Proof.** From $g^{x_i}\equiv\prod_jp_j^{e_{ij}}\pmod p$,
$$x_i\equiv\sum_je_{ij}\operatorname{DLOG}_g(p_j)\pmod{p-1}.$$
After solving these equations, $hg^y\equiv\prod_jp_j^{f_j}$ gives
$$\operatorname{DLOG}_g(h)\equiv\sum_jf_j\operatorname{DLOG}_g(p_j)-y\pmod{p-1}.$$
In $\mathbb Z_p^*$, collect relations where $g^x\bmod p$ factors over a small factor base, solve a linear system for the factor-base logarithms, then find a smooth $hg^y$. This subexponential attack is why finite-field Diffie-Hellman needs roughly 3072-bit $p$ for 128-bit classical security, while generic elliptic-curve attacks need roughly 256-bit groups.