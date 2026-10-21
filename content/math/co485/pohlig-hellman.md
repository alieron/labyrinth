---
tags:
  - co485/chapter2
  - math/number_theory
  - to_review
complete: false
prev: /labyrinth/notes/math/co485/pollard_rho
next: /labyrinth/notes/math/co485/index_calculus

---
### Concept
#### Pohlig-Hellman
**Correctness claim (Pohlig--Hellman reconstruction).** The residues $x\bmod p_i^{e_i}$ uniquely recover $x\bmod n$.
- layman explanation: prime-power logarithms are digits of one exponent and crt glues them together.

**Proof.** If $y\equiv x\pmod{p^k}$ and $x-y=p^kx_k+p^{k+1}z$, put $\alpha=g^{n/p}$ and $\beta=(hg^{-y})^{n/p^{k+1}}$. Then
$$\beta=g^{(x-y)n/p^{k+1}}=g^{x_kn/p+zn}=\alpha^{x_k},$$
because $g^n=1$. Thus each size-$p$ logarithm supplies the next digit; induction gives each prime-power residue, and [chinese remainder theorem](/labyrinth/notes/math/co485/chinese_remainder_theorem) combines them.
If $n=\prod_i p_i^{e_i}$, recover $x\bmod p_i^{e_i}$ one base-$p_i$ digit at a time and combine the results with the [chinese remainder theorem](/labyrinth/notes/math/co485/chinese_remainder_theorem). The cost is governed by the largest prime factor, so cryptographic groups use a large prime-order subgroup.
