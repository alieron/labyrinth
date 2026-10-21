---
tags: [co485/chapter2, math/number_theory, to_review]
complete: false
prev: /labyrinth/notes/math/co485/miller-rabin_test
next: /labyrinth/notes/math/co485/discrete_logarithm

---
### Concept
#### Chinese remainder theorem
**Chinese remainder theorem.** For pairwise coprime $n_1,\ldots,n_t$, every system $x\equiv a_i\pmod{n_i}$ has exactly one solution modulo $N=\prod_i n_i$.
- layman explanation: compatible remainders for coprime moduli combine into one number, unique across one full product-sized cycle.

**Proof.** Put $N_i=N/n_i$. Since $\gcd(N_i,n_i)=1$, choose $u_i$ with $N_iu_i\equiv1\pmod{n_i}$ and define
$$
\begin{align*}
x&=\sum_{i=1}^t a_iN_iu_i\pmod N.
\end{align*}
$$
For fixed $j$, every term with $i\ne j$ is divisible by $n_j$, while $N_ju_j\equiv1\pmod{n_j}$, so
$$
\begin{align*}
x&\equiv a_jN_ju_j+\sum_{i\ne j}a_iN_iu_i\\
&\equiv a_j\pmod{n_j}. &&\text{(existence)}
\end{align*}
$$
If $x,y$ solve the system, then $n_i\mid(x-y)$ for every $i$. Pairwise coprimality gives
$$
\begin{align*}
N=\prod_i n_i&\mid(x-y)\\
\Longrightarrow x&\equiv y\pmod N. &&\text{(uniqueness)}
\end{align*}
$$

### Application
Pohlig-Hellman computes $x\bmod p_i^{e_i}$ for $n=\prod_i p_i^{e_i}$, then the constructive formula above recovers the unique discrete logarithm $x\bmod n$.
