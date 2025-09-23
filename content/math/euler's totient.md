---
tags:
- math/number_theory
complete: false
---
   
### Summary
For [prime numbers](/labyrinth/notes/math/prime_numbers)
$$
\varphi(p) = p-1
$$

Euler's theorem, generalisation of [fermat's little theorem](/labyrinth/notes/math/fermat's_little_theorem)
$$
\begin{gather*}
a^{\varphi(n)} \equiv 1 \pmod n, \ where \ gcd(a,n) = 1 \\
\\
k^a\equiv k^b \pmod n \iff a\equiv b \pmod {\varphi(n)} \qquad & \text{(Congruence in Exponentiation)}
\end{gather*}
$$
### Concept
Number of integers [coprime](/labyrinth/notes/math/greatest_common_divisor#^449690) with $n$
$$
\begin{gather*}
n=p_{1}^{k_{1}}p_{2}^{k_{2}}\cdots p_{r}^{k_{r}}, \qquad p_{1},p_{2},\dots,p_{k} \ are \ distinct \ prime \ numbers \qquad & \text{(Prime Factorization of n)}\\
\\
\varphi (n)=p_{1}^{k_{1}-1}(p_{1}{-}1)\,p_{2}^{k_{2}-1}(p_{2}{-}1)\cdots p_{r}^{k_{r}-1}(p_{r}{-}1)\\
\end{gather*}
$$

Multiplicativity
$$
\varphi(mn)=\varphi(m)\varphi(n), \ where \ gcd(m, n) = 1
$$
### Application
Application in [math/RSA](/labyrinth/notes/math/RSA)
$$
\begin{gather*}
n = pq, \ where \ p \ and \ q \ are \ primes \\
\varphi(n)=\varphi(pq)=\varphi(p)\varphi(q)=(p-1)(q-1)
\end{gather*}
$$

Calculating euler's totient
$$
\begin{align*}
\varphi(20)=\varphi(2^2\cdot5)&=2^{2-1}(2-1)\cdot5^{1-1}(5-1) \\
&=2\cdot 4 \\
&=8
\end{align*}
$$

Example of euler's theorem on small numbers
$$
\begin{gather*}
p = 5, \ q = 7 \\
n=pq=35 \\
\varphi(n)= (p-1)(q-1)=24 \\
\\
choose \ a \ \mathrm{s.t.}\ gcd(a,n)=1, \ let \ a=3 \\
a^{\varphi(n)} \equiv 1 \pmod n \iff a^{\varphi(n)} \mod n = 1 \\
\\
3^{24} = 8069415328(35)+1\\
3^{24} \mod 35 = 1
\end{gather*}
$$

Deriving congruence in exponentiation with the [modulo](/labyrinth/notes/math/modulo) exponentiation rule
$$
\begin{gather*}
a^c\equiv a^d \pmod n \\
a^{c-d}\equiv 1 \pmod n \\
\\
a^{\varphi(n)} \equiv 1 \pmod n & \text{(Euler's Theorem)}\\
a^{k\varphi(n)} \equiv 1^k=1 \pmod n, \ k \in \mathbb{Z}_+ & \text{(Compatibility with Exponentiation)}\\
\\
\therefore k\varphi(n)=c-d \\
c=k\varphi(n)+d \iff c\equiv d \pmod {\varphi(n)}
\end{gather*}
$$

