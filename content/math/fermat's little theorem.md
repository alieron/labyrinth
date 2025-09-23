---
tags:
- math/modular_arithmetic
complete: false
---
   
### Summary
For the [modulo](/labyrinth/notes/math/modulo) of a [prime](/labyrinth/notes/math/prime_numbers) $p$
$$
a^p\equiv a \pmod p \iff a^p \mod p = a
$$
### Concept
Definition
$$
\begin{gather*}
for \ prime \ p, \ a \in \mathbb{Z} \ \mathrm{s.t.}\  \ p \nmid a \\
a^{p-1} - 1\mid p \\
\\
\therefore a^{p-1}-1\equiv 0 \pmod p \\
a^{p-1}\equiv 1 \pmod p \\
a^p\equiv a \pmod p \\
\\
\frac{a^{p-1}-1}{p}=0
\end{gather*}
$$

Multiplicative [inverse](/labyrinth/notes/math/modulo#^186d73) for prime moduli
$$
\begin{gather*}
a^{p-1}\equiv 1 \pmod p \iff a^{p-1} \mod p = 1 \\
a^{p-1}\times a^{-1}\equiv a^{-1} \pmod p \\
a^{p-2} \times a \times a^{-1}\equiv a^{-1} \pmod p \\
a^{p-2}\equiv a^{-1} \pmod p \iff a^{p-2} \mod p = a^{-1} \\
\end{gather*}
$$
### Application
Proof by induction with the [binomial theorem](/labyrinth/notes/math/ma1301/binomial_theorem)
$$
\begin{align*}
Induction \ base : \\
& 1^p \equiv 1 \pmod p \\
\\
Induction \ step : \\
Hypothesis \quad & n^p \equiv n \pmod p \\
&(n+1)^p = \sum_{k=0}^{p} \binom{p}{k}n^{p-k}\cdot 1^k = \sum_{k=0}^{p} \binom{p}{k}n^{p-k} && \text{(Binomial Theorem)}\\
&\forall k: \ 0<k<p \qquad\binom{p}{k}\equiv 0 \pmod p && \text{(Binomial Coefficient of Prime)}\\
\\
so \quad & \\
&\sum_{k=0}^{p} \binom{p}{k}n^{p-k} = \underset{ 1 }{ \cancel{ \binom{p}{0} } }n^p+\binom{p}{1}n^{p-1}+\dots+\binom{p}{p-1}n^1+\underset{ 1 }{ \cancel{ \binom{p}{p} } }n^0 \\
&\sum_{k=0}^{p} \binom{p}{k}n^{p-k} \equiv n^p+\underset{ 0 }{ \cancel{ \binom{p}{1} } }n^{p-1}+\dots+\underset{ 0 }{ \cancel{ \binom{p}{p-1} } }n^1+n^0 \pmod p && \text{(Properties of modular multiplication)} \\
\therefore \quad & (n+1)^p \equiv n^p+n^0 \pmod p \\
& (n+1)^p \equiv n^p + 1 \equiv n + 1 \pmod p && \text{(Induction hypothesis)} \\
\\
Divide \ by \ n: \\
& n ^p \equiv n \pmod p \implies n^{p-1} \equiv 1 \pmod p
\end{align*}
$$

Example on small numbers
$$
\begin{gather*}
a=3, \ p =13 \\
3^{13} = 1594323 = 122640(13)+3\\
\therefore 3^{13} \mod 13 = 3 \\
\\
with \ a^{-1} = a^{p-2} \mod p, \\
a^{-1} = 3^{11} \mod 13 \\
3^{11} = 177147 = 13626(13)+9\\
\therefore a^{-1} = 9 \\
\\
\text{Multiplicative Inverse:} \\
a\times a^{-1}\equiv 1 \pmod p \iff (a\times a^{-1}) \mod p = 1 \\
\\
3\times9 = 27 = 2(13)+1\\
\therefore (3\times9)\mod 13 = 1 \\
\\
\text{9 is the multiplicative inverse of 3 modulo 13}
\end{gather*}
$$

