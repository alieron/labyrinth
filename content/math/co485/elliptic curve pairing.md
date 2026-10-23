---
tags:
  - co485/chapter3
  - math/elliptic_curves
  - cryptography
  - to_review
complete: false
prev: /labyrinth/notes/math/co485/elliptic_curves
next: /labyrinth/notes/math/co485/choosing_curves

---
### Summary
Secure elliptic curves need a large prime-order subgroup and a large embedding degree. Pairings can move ECDLP into a finite field, so they are either an attack surface or a deliberate protocol feature.

### Concept
For $n$ coprime to the characteristic, the algebraic-closure torsion satisfies

$$
E(\overline{\mathbb F}_p)[n]\cong\mathbb Z_n\times\mathbb Z_n.
$$

Consequently $E(\mathbb F_p)$ is cyclic or a product of two cyclic groups. Point counting is polynomial-time via Schoof's algorithm; random curves have orders distributed near $p+1$ and can be searched for prime order.

A nondegenerate bilinear pairing has the form

$$
e:E[n]\times E[n]\to\mu_n\subseteq\mathbb F_{p^k}^*,
$$

with

$$
e(P+Q,R)=e(P,R)e(Q,R),\qquad e(P,Q+R)=e(P,Q)e(P,R).
$$

If $Q=xP$, then

$$
e(P,Q)=e(P,P)^x,
$$

reducing ECDLP to DLOG in $\mathbb F_{p^k}^*$. The embedding degree is the least $k$ such that $n\mid p^k-1$.

Curve selection therefore checks:

1. A large prime group order or prime-order subgroup.
2. No small embedding degree.
3. Group order not equal to $p$.
4. Safe formulas, input validation, and twist security.

### Application
- NIST P-256 uses a sparse prime and $a=-3$ for efficient arithmetic.
- Curve25519 uses $p=2^{255}-19$, Montgomery-form x-only arithmetic, cofactor $8$, and a secure twist; scalar clamping keeps operations in the intended subgroup.
- secp256k1 uses $y^2=x^3+7$ and is deployed by Bitcoin.

Invalid-point attacks exploit implementations that scalar-multiply a point on another curve. Validate points or use a design, such as Curve25519's x-only ladder, that safely handles the twist. See [pairing based cryptography](/labyrinth/notes/math/co485/pairing_based_cryptography) for constructive uses.
