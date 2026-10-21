---
tags:
  - co485/chapter2
  - math/abstract_algebra
  - to_review
complete: false
next: /labyrinth/notes/math/co485/elliptic_curve_groups
prev: /labyrinth/notes/math/co485/index_calculus

---
### Summary
A field is a commutative ring whose nonzero elements are invertible. Quotienting $\mathbb F_p[x]$ by an irreducible degree-$d$ polynomial produces the finite field $\mathbb F_{p^d}$.

### Concept
A commutative ring $(R,+,\cdot)$ has an abelian additive group, associative and commutative multiplication with identity, and distributivity. A field additionally gives every nonzero element a multiplicative inverse.

Polynomial division over a field gives

$$
a(x)=q(x)p(x)+r(x),\qquad \deg r<\deg p.
$$

Thus $F[x]/(p(x))$ has unique representatives of degree below $d=\deg p$ and is a $d$-dimensional vector space over $F$.

**Theorem.** $F[x]/(p(x))$ is a field iff $p(x)$ is irreducible over $F$.

If $p$ is irreducible and $a\not\equiv0\pmod p$, then $\gcd(a,p)=1$. Polynomial EEA gives $u,v$ such that

$$
\begin{align*}
u(x)a(x)+v(x)p(x)&=1,\\
u(x)a(x)&\equiv1\pmod{p(x)},
\end{align*}
$$

so $u$ is the inverse of $a$. If $p=rs$ is reducible, then the nonzero residue classes of $r$ and $s$ multiply to zero, so the quotient cannot be a field.

For $F=\mathbb F_p$, the quotient has $p^d$ elements. Every finite field is isomorphic to one of this form, and $\mathbb F_q^*$ is cyclic of order $q-1$. Quadratic residues and DLOG therefore extend from prime fields to all odd finite fields.

### Application
If

$$
p(x)=x^d+p_{d-1}x^{d-1}+\cdots+p_0,
$$

then $x^d\equiv-(p_{d-1}x^{d-1}+\cdots+p_0)$. Multiplication by $x$ is a companion matrix, and multiplication by any polynomial $a(x)$ is the corresponding polynomial in that matrix. This representation leads directly to [module LWE](/labyrinth/notes/math/co485/module_LWE).

Related prerequisites: [rings](/labyrinth/notes/math/~ma2202/rings), [fields](/labyrinth/notes/math/~ma2202/fields), and [modular arithmetic](/labyrinth/notes/math/abstract_algebra/modular_arithmetic).
