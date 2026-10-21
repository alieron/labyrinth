---
tags: [co485/chapter2, math/number_theory, to_review]
complete: false
prev: /labyrinth/notes/math/co485/fermat_test
next: /labyrinth/notes/math/co485/chinese_remainder_theorem

---
### Concept
#### Theorem 2.5.4
**Theorem 2.5.4.** Let odd prime $n$ satisfy $n-1=2^ek$ with $k$ odd. Every nonzero $a\in\mathbb Z_n$ satisfies $a^k\equiv1$, or $a^{2^rk}\equiv-1$ for some $0\le r<e$.
- layman explanation: repeated squaring from the odd part must reach one through minus one unless it started at one.

**Proof.** If $a^k\ne1$, Fermat gives $a^{2^ek}=1$. Choose the least $r$ with $a^{2^{r+1}k}=1$. Then
$$
\begin{align*}
(a^{2^rk})^2&=1,\\
a^{2^rk}&\ne1,\\
\therefore a^{2^rk}&=-1, &&\text{(the only roots of }x^2-1\text{ in a field)}.
\end{align*}
$$

**Definition 2.5.5.** For odd composite $n$, a base violating both alternatives is a strong witness; otherwise it is a strong liar.

#### Theorem 2.5.6
**Theorem 2.5.6.** For composite $N$, at most half of $\mathbb Z_N^*$ are strong liars.
- layman explanation: all bases that fool one round fit inside a proper subgroup, so they cannot occupy more than half the units.

**Proof.** If $N=p^r$, every strong liar has order dividing both $N-1$ and $\varphi(N)$, hence dividing $p-1$; thus it lies in $H=\{a:a^{p-1}=1\}$. This subgroup is proper because
$$
\begin{align*}
(1+p^{r-1})^{p-1}&\equiv1+(p-1)p^{r-1}\not\equiv1\pmod{p^r}.
\end{align*}
$$
If $N$ has at least two prime-power factors, let $i_0$ be maximal with some $a_0^{2^{i_0}k}=-1$ and set $G=\{a:a^{2^{i_0}k}=\pm1\}$. Every strong liar lies in $G$. CRT chooses $a\equiv a_0$ modulo one prime power and $a\equiv1$ modulo the complementary factor, so $a^{2^{i_0}k}$ is simultaneously $-1$ and $1$ on different components and hence is neither $\pm1\pmod N$. Thus $G$ is proper. In either case Lagrange gives size at most half.

### Application
Independent rounds reduce the course bound to $2^{-t}$ after $t$ rounds; 64 rounds give at most $2^{-64}$ under this theorem.
