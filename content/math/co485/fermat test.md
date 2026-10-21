---
tags: [co485/chapter2, math/number_theory, to_review]
complete: false
prev: /labyrinth/notes/math/co485/finding_primes
next: /labyrinth/notes/math/co485/miller-rabin_test

---
### Concept
#### Theorem 2.5.1
**Theorem 2.5.1.** If $n$ is prime and $0\ne a\in\mathbb Z_n$, then $a^{n-1}\equiv1\pmod n$.
- layman explanation: every nonzero residue modulo a prime returns to one after exactly the group-size exponent.

**Proof.** Since $\mathbb Z_n^*$ has $n-1$ elements, Lemma 2.3.2 gives
$$
\begin{align*}
a^{|\mathbb Z_n^*|}&=1\\
\Longrightarrow a^{n-1}&\equiv1\pmod n.
\end{align*}
$$

#### Proposition 2.5.2
**Proposition 2.5.2.** If composite $n$ has one $a_0\in\mathbb Z_n^*$ with $a_0^{n-1}\not\equiv1\pmod n$, then at least half the units are Fermat witnesses.
- layman explanation: once one unit exposes compositeness, the units that hide it form at most half the group.

**Proof.** Let $S=\{a\in\mathbb Z_n^*:a^{n-1}=1\}$. Then
$$
\begin{align*}
a,b\in S&\Longrightarrow(ab^{-1})^{n-1}=a^{n-1}(b^{n-1})^{-1}=1,
\end{align*}
$$
so $S$ is a subgroup. Since $a_0\notin S$, it is proper; Lagrange gives $|S|\mid|\mathbb Z_n^*|$ and therefore $|S|\le|\mathbb Z_n^*|/2$. Its complement consists of witnesses.

**Definition 2.5.3.** A failing base is a Fermat witness; a passing base for composite $n$ is a Fermat liar; a composite for which every unit lies is a Carmichael number.

### Application
The Fermat test quickly proves compositeness but cannot reject Carmichael numbers; continue with [miller-rabin test](/labyrinth/notes/math/co485/miller-rabin_test).
