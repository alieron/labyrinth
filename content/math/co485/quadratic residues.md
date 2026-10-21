---
tags:
  - co485/chapter2
  - math/modular_arithmetic
  - math/number_theory
complete: false
prev: /labyrinth/notes/math/co485/euler's_totient
next: /labyrinth/notes/math/co485/tonelli-shanks_algorithm

---
### Summary
Legendre symbol
$$
\begin{align*}
\left(\frac ap\right)&=
\begin{cases}
0&a\not \in \mathbb{Z}_{p}^*\\
1&a\in\mathrm{QR}_p\\
-1&a\in\mathrm{QNR}_p
\end{cases} \\
\\
\left(\frac ap\right) &\equiv a^{\frac{(p-1)}{2}}\pmod p
\end{align*}
$$

### Concept
#### Quadratic residues (Definition 2.4.1)
- a residue that can be "square rooted"

$$
\begin{align*}
&\text{for }n \geq 2 \text{ and }a \in \mathbb{Z}_{n}^* \\
\\
&\begin{aligned}
\operatorname{QR}_n&=\{a\in\mathbb Z_n^*:a=x^2\text{ for some }x\in\mathbb Z_n^*\}\\
\overline{\operatorname{QR}}_n&=\mathbb Z_n^*\setminus\operatorname{QR}_n
\end{aligned}
\end{align*}
$$

Even powers of the generator (Theorem 2.4.3)
- modulo a prime, squares are exactly the even powers of a generator
- each square has two roots

$$
\begin{align*}
&&& \text{for generator }g\in \mathbb{Z}_{p}^*, \ \forall a \in \mathbb{Z} _{p}^* \\
\\
&&& \text{the following are equivalent}\\
\\
1) &&& a\text{ is a quadratic residue }\bmod p \\
\\
2) &&& k \in \mathbb{Z}, \ a = g^{2k} \\
\\
3) &&& \operatorname{DLOG}_{g}(a)\text{ is even} \\
\\
4) &&& l \in \mathbb{Z} \land a = g^l \implies l\text{ is even}
\end{align*}
$$
> implicitly $p$ is an odd prime, ie. every prime except 2, we care about large primes, so 2 can be ignored for the most part

$$
\begin{align*}
& \text{Claim (Statements 1 \& 2): } a\text{ is a quadratic residue}\bmod p \iff k\in \mathbb{Z}, \ a = g^{2k}\\
\\
&(\Longrightarrow)\text{ Show that }a=g^{2k}\\
&\quad\begin{aligned}
& \text{Suppose }a\text{ is a quadratic residue}\bmod p\\
&\quad\begin{aligned}
&\text{so, }\exists x \in \mathbb{Z}_{p}^*, \ x^2 = a \\
&x^{2} = (g^i)^{2} = g^{2i} \qquad \text{since }g\text{ is a generator}
\end{aligned}
\end{aligned}\\
\\
&(\Longleftarrow)\text{ Show that }a\text{ is a quadratic residue}\bmod p\\
&\quad\begin{aligned}
& \text{Suppose }a=g^{2k}\\
&\quad\begin{aligned}
&\text{so, }&a = x^{2} &\implies x=a^{\frac{1}{2}} = (g^{2k})^{\frac{1}{2}} = g^k \\
&&&\implies x \in \mathbb{Z}_{p}^*
\end{aligned}
\end{aligned}\\
\\
&\therefore (1) \iff (2) \\
\\
&\text{Trivially:}\\
&(4)\implies (3)\\
&(3)\implies (2)\\
\\
\\
&\text{Claim (Statements 2 \& 4): }k \in \mathbb{Z}, \ a = g^{2k} \implies ( l \in \mathbb{Z} \land a = g^l \implies l\text{ is even}) \\
\\
&\text{Suppose }a = g^{2k} \\
&\quad\begin{aligned}
&\text{so, }\begin{aligned}[t]
&g^{2k}=a=g^l \\
&2k \equiv l \pmod {p-1} &\quad& \text{(Lemma 2.3.2)} \\
\\
&2k\text{ is even and }p-1\text{ is even}\implies l\text{ is even}
\end{aligned}
\end{aligned}\\
\\
&\therefore (2) \implies (4)
\end{align*}
$$

Half of the exponents are even
$$
\begin{gather*}
\mathbb{Z}_{p}^* = \{ {\color{aqua} g^0}, {\color{orange} g^1}, {\color{aqua} g^2}, {\color{orange} g^3}, \dots, {\color{aqua} g^{p-3}}, {\color{orange} g^{p-2}} \} \\
\\
|\operatorname{QR}_p|=|\overline{\operatorname{QR}}_{p}|=\frac{p-1}{2}
\end{gather*}
$$

Each quadratic residue has 2 roots

$$
\begin{gather*}
\begin{aligned}
&\text{for generator }g\in \mathbb{Z}_{p}^* \\
\\
&g^{p-1}=g^0\equiv1 \pmod p \\
\\
&g^{\frac{p-1}{2}} \equiv 1 \pmod p \quad \text{or} \quad g^{\frac{p-1}{2}} \equiv -1 \pmod p
\end{aligned} \\
\\
g^{\frac{p-1}{2}} \equiv 1 \pmod p \text{ is rejected since }\operatorname{ord}(g)=p-1\text{, and }g^0\equiv 1\pmod p \\
\\
\begin{aligned}
y^2-x^2&=(y-x)(y+x)\equiv0\pmod p\\
&\implies y\equiv x\pmod p\quad\text{or}\quad y\equiv-x\pmod p \\
\text{let }x = g^k\quad &\implies y\equiv g^k\pmod p\quad\text{or}\quad \begin{aligned}[t]
y&\equiv-g^k\pmod p \\
y&\equiv g^{\frac{p-1}{2}}g^k\pmod p \\
y&\equiv g^{\frac{p-1}{2}+k}\pmod p \\
\end{aligned}
\end{aligned} 
\end{gather*}
$$
> note that if $k$ is odd, then one of the roots can also be a quadratic residue
> $p\equiv 1 \bmod 4 \implies \frac{p-1}{2}+k \text{ is odd}$
> $p\equiv 3 \bmod 4 \implies \frac{p-1}{2}+k \text{ is even}$

#### Legendre symbol (Definition 2.4.4)
$$
\begin{gather*}
\left(\frac ap\right)=
\begin{cases}
0&a\not \in \mathbb{Z}_{p}^*\\
1&a\in\mathrm{QR}_p\\
-1&a\in\mathrm{QNR}_p
\end{cases} \\
\\
\left(\frac{a}{p}\right) = \left(\frac{a\bmod p}{p}\right)
\end{gather*}
$$

Euler's criterion (Theorem 2.4.5)
- determining if the number is a quadratic residue efficiently using modular exponentiation via [square-and-multiply](/labyrinth/notes/math/co485/square-and-multiply)

$$
\forall a \in \mathbb{Z}_{p},\quad\left(\frac ap\right)\equiv a^{\frac{(p-1)}{2}}\pmod p
$$

$$
\begin{align*}
& \text{Claim: } \forall a \in \mathbb{Z}_{p},\quad\left(\frac ap\right)\equiv a^{\frac{(p-1)}{2}}\pmod p\\
\\
& \text{Suppose }a = 0 \not\in \mathbb{Z}_{p}^*\\
&\text{so }\\
&\quad\begin{aligned}[t]
\left(\frac 0p\right)&\equiv 0^{\frac{(p-1)}{2}}\pmod p\\
0&\equiv 0\pmod p
\end{aligned}\\
\\
& \text{otherwise }a = g^i \\
\\
&\text{Case 1: }i = 2k\\
&\quad\begin{aligned}[t]
&a^{\frac{(p-1)}{2}} = (g^i)^{\frac{(p-1)}{2}} = g^{k(p-1)} = 1 = \left(\frac ap\right)
\end{aligned}\\
\\
&\text{Case 2: }i = 2k+1\\
&\quad\begin{aligned}[t]
&a^{\frac{(p-1)}{2}} = (g^i)^{\frac{(p-1)}{2}} = g^{k(p-1)}g^{\frac{(p-1)}{2}} = g^{\frac{(p-1)}{2}} = -1 = \left(\frac ap\right)
\end{aligned}\\
\\
&\therefore \left(\frac ap\right)\equiv a^{\frac{(p-1)}{2}}\pmod p
\end{align*}
$$
> there is an $O(\log^2n)$ algorithm to compute the legendre symbol using the [law of quadratic reciprocity](/labyrinth/notes/math/co485/quadratic_residues#Law_of_quadratic_reciprocity), but its out of scope for `co485`

#### Existence of roots
- we can find a $k$th root by finding $k^{-1} \bmod{p-1}$
- done efficiently with modular inversion(EEA) and modular exponentiation 

$$
\begin{align*}
&\text{if }\gcd(k,p-1) = 1 \\
\\
&\text{then }\forall a \in \mathbb{Z}_{p}^*\text{, the }k\text{th root }b=a^u \\
\\
&\quad\begin{aligned}
b^k&=a^{ku} \qquad u = k^{-1}\\
&=a^{m(p-1)+1}\\
&=(a^{p-1})^ma\\
&\equiv a\pmod p
\end{aligned} \\
\\
&\text{so we need }\begin{aligned}[t]
ku &= m(p-1)+1 \\
ku&\equiv 1 \pmod{p-1} \\
u&\equiv k^{-1} \pmod{p-1}
\end{aligned}
\end{align*}
$$

Finding square roots (Lemma 2.4.6)
- square roots need separate treatment because $\gcd(2,p-1)=2$

$$
p\equiv 3 \pmod 4 \implies \forall a \in \operatorname{QR}_{p}, \quad a^{\frac{p-1}{4}}\text{ is a square root of }a
$$

$$
\begin{align*}
&\text{Claim: }p\equiv 3 \pmod 4 \implies a^{\frac{p-1}{4}}\text{ is a square root of }a \\
\\
&\begin{aligned}
\left(a^{\frac{p+1}{4}}\right)^2
&= a^{\frac{p+1}{2}}\\
&= a^{\frac{p-1}{2}}a\\
&\equiv\left(\frac ap\right)a \pmod p\\
&\equiv a\pmod p
\end{aligned}

\end{align*}
$$

#### Law of quadratic reciprocity
- for distinct odd primes $p,q$

$$
\left(\frac pq\right)\left(\frac qp\right)=(-1)^{\frac{p-1}{2}\frac{q-1}{2}}
$$

### Application
Quadratic residues of $\mathbb{Z}_{13}^*$
$$
\begin{array}{llllll}
1^2 = 1, & 2^2 = 4, & 3^2 = 9, & 4^2 = 3, & 5^2 = 12, & 6^2 = 10.
\end{array}
$$

Deriving the legendre symbol with [euler's theorem](/labyrinth/notes/math/co485/euler's_totient#Euler's_theorem)/[fermat's little theorem](/labyrinth/notes/math/abstract_algebra/fermat's_little_theorem)
$$
\begin{gather*}
\begin{aligned}
a^{\phi(p)}&\equiv 1 \pmod p && \text{(Euler's Theorem)}\\
a^{p-1}&\equiv 1 \pmod p && \text{(Fermat's Little Theorem)}\\
a^{p-1} -1 &\equiv 0 \pmod p \\
\left(a^\frac{p-1}{2} -1\right)\left(a^\frac{p-1}{2} + 1\right) &\equiv 0 \pmod p && \text{(Difference of two squares)}
\end{aligned}\\
\\
a^\frac{p-1}{2} -1 \equiv 0 \pmod p \quad or\quad a^\frac{p-1}{2} +1 \equiv 0 \pmod p\\
\end{gather*}
$$

The Legendre symbol over $\mathbb{Z}_{p}$
$$
\begin{align*}
&\text{Claim: }\sum_{a\in\mathbb{Z}_p}\left(\frac{a}{p}\right)=0 \\
\\
&\quad\begin{aligned}
\sum_{a \in \mathbb{Z}_p} \left(\frac{a}{p}\right) &= \left(\frac{0}{p}\right) + \sum_{a \in \operatorname{QR}_p} \left(\frac{a}{p}\right) + \sum_{a \in \overline{\operatorname{QR}}_p} \left(\frac{a}{p}\right) \\
&= 0 + \sum_{a \in \operatorname{QR}_p} 1 + \sum_{a \in \overline{\operatorname{QR}}_p} (-1) \\
&= |\operatorname{QR}_p| - |\overline{\operatorname{QR}}_p| \\
&= \frac{p-1}{2} - \frac{p-1}{2} \\
&= 0
\end{aligned}
\end{align*}
$$



For odd prime $p$, the Mobius map $\phi(x)=(1+x)/(1-x)$ is a bijection $\mathbb Z_p\setminus\{1\}\to\mathbb Z_p\setminus\{-1\}$ with inverse $\phi^{-1}(y)=(y-1)/(y+1)$. This repairs the extracted assignment typo $1+x=x-11$; the intended contradiction is $1+x=-(1-x)\Rightarrow2=0$.

For $d\ne0$, the number $N$ of pairs satisfying $x^2+y^2\equiv d\pmod p$ is

$$
\begin{align*}
N&=\sum_{x\in\mathbb Z_p}\left(1+\left(\frac{d-x^2}{p}\right)\right)\\
&=p+\sum_{x\in\mathbb Z_p}\left(\frac{d-x^2}{p}\right)\\
&=p-\left(\frac{-1}{p}\right)\\
&=\begin{cases}p-1,&p\equiv1\pmod4,\\p+1,&p\equiv3\pmod4.\end{cases}
\end{align*}
$$

The assignment's line saying a nonresidue lies in $\mathrm{QR}_p$ is a transcription error; it should say $a\in\mathrm{QNR}_p$.
