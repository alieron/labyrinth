---
tags:
  - cs/competitive
  - math/number_theory
  - math/modular_arithmetic
  - to_review
complete: false
prev: /labyrinth/notes/math/co485/quadratic_residues
next: /labyrinth/notes/math/co485/finding_primes

---
### Concept
#### Tonelli-Shanks algorithm
- finds square roots for an odd prime

```pseudo
\begin{algorithm}
\caption{Tonelli-Shanks Algorithm}
\begin{algorithmic}
\STATE \textbf{Input}: prime $p$, number $a$ (assumed to be in $QR_p$)
\STATE Let $2^er=p-1$ for odd $r$
\STATE Choose a quadratic non-residue $x$; set $x\leftarrow x^r\bmod p$
\STATE $b\leftarrow a^{\frac{r+1}{2}}\bmod p$
\WHILE {$b^2\neq a\bmod p$}
	\STATE $i\leftarrow$minimum such that $(b^2a^{-1})^{2^i}\equiv 1\bmod p$
	\STATE $b\leftarrow b x^{2^{e-i-1}}$
\ENDWHILE
\STATE Return $b$
\end{algorithmic}
\end{algorithm}
```

Runtime (Theorem 2.4.7)
**Theorem 2.4.7.** If $p-1=2^er$ with $r$ odd, the following algorithm finds a square root of $a\in\mathrm{QR}_p$ in at most $e-1=O(\log p)$ iterations.
- layman explanation: every correction removes at least one power of two from the remaining error.

**Proof.**
For a general odd prime, write $p-1=2^er$ with $r$ odd. Given $a\in\mathrm{QR}_p$, choose $z\in\mathrm{QNR}_p$ and set

$$
\begin{gather*}
x=z^r,\qquad b=a^{(r+1)/2},\qquad c=b^2a^{-1}=a^r.
\end{gather*}
$$

The element $x$ has order $2^e$: if $z=g^j$, then $j$ is odd, so $z^r=g^{jr}$ retains the full power-of-two part of the generator's order. Since $a$ is a square, $c=a^r$ has order $2^i$ for some $0\le i\le e-1$. If $i=0$, then $c=1$ and $b^2=a$.

Otherwise choose the least $i>0$ with $c^{2^i}=1$ and replace

$$
\begin{gather*}
b\leftarrow bx^{2^{e-i-1}},\\
c\leftarrow b^2a^{-1}.
\end{gather*}
$$

To see progress, $c$ of order $2^i$ satisfies $c^{2^{i-1}}=-1$, while $x$ of order $2^e$ satisfies $x^{2^{e-1}}=-1$. For the updated error $c'$, therefore,

$$
\begin{align*}
(c')^{2^{i-1}}
&=\left(x^{2^{e-i}}c\right)^{2^{i-1}}\\
&=x^{2^{e-1}}c^{2^{i-1}}\\
&=(-1)(-1)=1.
\end{align*}
$$

Thus its order drops to at most $2^{i-1}$. Repeating reaches order $1$ in at most $e-1=O(\log p)$ iterations, at which point $b^2=a$. The least $i$ is found by repeated squaring. This is the core termination argument of the [tonelli-shanks algorithm](/labyrinth/notes/math/co485/tonelli-shanks_algorithm).


#### Existence test
- Handle $n\equiv0\pmod p$ separately
- Euler's criterion distinguishes nonzero quadratic residues

$$
n^{(p-1)/2}\equiv1\pmod p
$$

#### Group decomposition
- Factor the group order as $p-1=Q2^S$ with $Q$ odd
- Choose a quadratic nonresidue to generate the needed two-power correction
- Interpret the state inside the Sylow $2$-subgroup

#### Core invariant
- Maintain a candidate root $R$ and an error term $t$

$$
R^2\equiv nt\pmod p
$$

- Each correction lowers the two-power order of $t$
- Termination at $t=1$ certifies $R^2\equiv n\pmod p$

#### Special cases and complexity
- For $p\equiv3\pmod4$, a direct exponent gives a root
- Runtime depends strongly on $v_2(p-1)$ and modular exponentiation cost
- Compare deterministic and randomized nonresidue selection

#### Applications
- Point decompression for [elliptic curves](/labyrinth/notes/math/abstract_algebra/elliptic_curves)
- Solving quadratic congruences in computational number theory
- Residue checks in cryptographic protocols

#### Open questions
- Which prime forms make modular square roots simplest
- How should implementations avoid timing leakage
- What changes for prime powers and composite moduli

### Sources
- [CP-Algorithms modular square root](https://cp-algorithms.com/algebra/tonelli-shanks.html)
- [Cohen Computational Algebraic Number Theory](https://doi.org/10.1007/978-3-662-02945-9)
- [Handbook of Applied Cryptography](https://cacr.uwaterloo.ca/hac/)
