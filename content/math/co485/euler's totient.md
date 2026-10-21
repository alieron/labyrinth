---
tags:
  - co485/chapter2
  - math/number_theory
complete: false
prev: /labyrinth/notes/math/co485/multiplicative_modular_group
next: /labyrinth/notes/math/co485/quadratic_residues

---
### Summary
Common values
$$
\begin{gather*}
p\text{ is prime}\implies \phi(p) = p -1 \\
\\
\gcd(m,n)=1\implies\phi(mn)=\phi(m)\phi(n) \\
\\
\phi(pq)=(p-1)(q-1)
\end{gather*}
$$

Element order lemma
$$
\begin{align*}
t &= \operatorname{ord}(a) \\
\\
a^s\equiv1\pmod n&\iff t\mid s\\
a^x\equiv a^y\pmod n&\iff x\equiv y\pmod t\\
t&\mid\phi(n)
\end{align*}
$$

Equivalences for generators and exponents
$$
\begin{array}{c|c}
\text{Question about }g^k & \text{Question about }k\\
\hline
(g^k)^m=1 & \operatorname{ord}(g)\mid km\\
g^x=g^y & x\equiv y\pmod{\operatorname{ord}(g)}\\
\text{Is }g^k\text{ a square?} & k\text{ even?}\\
\sqrt{g^k} & \text{solve }2x\equiv k\\
\operatorname{DLOG}_g(g^k) & k\\
\left(\frac{g^k}{p}\right) & \text{parity of }k
\end{array}
$$

### Content
#### Euler's totient
- aka euler's phi function

$$
\phi(n) =
\begin{cases}
1 & n=1 \\
|\mathbb{Z}_n^*| & n \geq 2
\end{cases}
$$

- generalized for a number as a multiple of primes

$$
\begin{align*}
n&=\prod_{i=1}^r p_i^{e_i}\\
\phi(n)&=n\prod_{p\mid n}\left(1-\frac1p\right)\\
&=\prod_{i=1}^r p_i^{e_i-1}(p_i-1)
\end{align*}
$$

#### Euler's theorem
- generalization of [fermat's little theorem](/labyrinth/notes/math/abstract_algebra/fermat's_little_theorem)

$$
\begin{gather*}
\forall a \in \mathbb{Z}_{n}^*, \quad a^{\phi(n)}\equiv1\pmod n \\
\\
a^{\phi(n)}\equiv1\pmod n \iff \gcd(a, n) = 1
\end{gather*}
$$
> the GCD definition comes from the [theorem 2.1.1](/labyrinth/notes/math/co485/multiplicative_modular_group#^531ac2)

Order of an element (Definition 2.3.1)
- smallest number of exponentiations to return to the identity element

$$
\text{for }a \in G,\quad \operatorname{ord}(a) \text{ is the smallest }t>0\text{ such that }a^t = e
$$

Order and size of the group (Lemma 2.3.2)
- powers repeat every order-many steps, and that cycle length divides the group size
- generalized for any [group](/labyrinth/notes/math/~ma2202/groups), but applicable to $G = \mathbb{Z}_{n}^*$ and $|G| = \phi(n)$ 

$$
\begin{align*}
&\text{for }a \in G\text{, let }t=\operatorname{ord}(a) \\
\\
&\quad\begin{aligned}
1) &&& a^{|G|}=1 \qquad\text{(}\operatorname{ord}(a)\text{ exists and is well defined)}\\
\\
2) &&& \forall s \in \mathbb{Z}, \quad a^s = 1 \iff t \mid s \\
\\
3) &&& \forall x,y \in \mathbb{Z}, \quad a^x = a^y \iff x \equiv y \pmod t \\
\\
4) &&& t \mid |G|
\end{aligned}
\end{align*}
$$

$$
\begin{align*}
& \text{Claim 1: } a^{|G|} = 1\\
\\
& \text{Suppose }f(x) = ax\text{ is a permutation on }G\\
\\
&\text{so }\\
%&\quad\begin{aligned}[t]
%\prod_{x\in\mathbb Z_n^*}x
%&=\prod_{x\in\mathbb Z_n^*}ax\\
%&=a^{|\mathbb Z_n^*|}\prod_{x\in\mathbb Z_n^*}x\\
%&=a^{\phi(n)}\prod_{x\in\mathbb Z_n^*}x
%\end{aligned}\\
&\quad\begin{aligned}
\prod_{x\in G}x
&=\prod_{x\in G}ax\\
&=a^{|G|}\prod_{x\in G}x
\end{aligned}
\\
&\therefore a^{|G|} = 1
\end{align*}
$$
> for $\mathbb{Z}_{n}^*$, see that this is sufficient to prove euler's theorem

$$
\begin{align*}
& \text{Claim 2: } \forall s \in \mathbb{Z}, \quad a^s = 1 \iff t \mid s\\
\\
&(\Longleftarrow)\text{ Show that }t\mid s \implies a^s = 1 \\
&\quad \begin{aligned}
&\text{ Suppose }t\mid s \\
&\quad\begin{split}
& s = tk\text{, for some }k \\
& \implies a^s = a^{tk} =(a^t)^k = 1^k = 1\\
\\
&\therefore a^s = 1
\end{split}
\end{aligned} \\
\\
\\
&(\Longrightarrow)\text{ Show that }a^s = 1 \implies t\mid s \\
&\quad \begin{aligned}
&\text{ Suppose }a^s = 1  \\
&\quad\begin{split}
& s = tq + r, \ 0\leq r < t \\
& \implies 1 = a^s = a^{tq+r} = a^{tq}a^r = a^r \\
& \implies r = 0\\
& \implies s = tq \\
\\
&\therefore t \mid s
\end{split}
\end{aligned} \\
\\
&\therefore a^s = 1 \iff t \mid s \\
\\
\\
& \text{Claim 3: } \forall x,y \in \mathbb{Z}, \quad a^x = a^y \iff x \equiv y \pmod t\\
\\
&\text{so} \\
&\quad \begin{aligned}
a^x = a^y &\iff a^{x-y} = 1 \\
&\iff t\mid x-y &&\text{(Claim 2)} \\
&\iff x-y \equiv 0 \pmod t \\
&\iff x\equiv y \pmod t
\end{aligned} \\
\\
&\therefore a^x = a^y \iff x \equiv y \pmod t \\
\\
\\
& \text{Claim 4: } t\mid |G|\\
\\
&\text{so} \\
&\quad \begin{aligned}
a^{|G|} = 1 & \iff t\mid |G| && \text{(Claim 1 \& 2)}
\end{aligned} \\
\\
&\therefore t\mid |G|
\end{align*}
$$
> the order of an element 

Generators (Definition 2.3.3)
- aka *primitive roots* for $G = \mathbb{Z}_{n}^8$
- every element in $G$ can be expressed as an exponentiation of the generator

$$
\begin{gather*}
g \in G\text{ is a generator} \iff \operatorname{ord}(g) = |G| \\
\\
G = \{ g^0, g^1, g^2, \dots, g^{|G| -1} \}
\end{gather*}
$$

Some residues modulo a prime are generators (Theorem 2.3.4)
$$
\begin{align*}
& \text{Claim: } p\text{ is prime}\implies \mathbb{Z}_{p}^*\text{ has a generator, specifically, }\phi(p-1)\text{ generators}\\
\\
&\text{Suppose }p\text{ is prime}\\
\\
& \text{Let }\psi_{1}(d)\text{ count the number of elements of order }d\text{ in }\mathbb{Z}_{p}^*\text{ for each }d\mid p-1 \\
\\
&\quad p-1 = \sum_{d\mid p-1}\psi_{1}(d) \\
\\
\\
&1) \text{ Suppose }\beta \in \mathbb{Z}_{p}^*, \quad \operatorname{ord}(\beta)=d\\
\\
&\text{so }\\
&\quad\begin{aligned}
&\beta^0, \beta^1, \beta^{2}, \dots, \beta^{d-1}\text{ are }d\text{ distinct elements} \\
\\
&\text{which are }\textbf{all the roots of}\text{ the polynomial }x^d-1\text{ over the field }\mathbb{Z}_{p}\\
&\text{since } (\beta^i)^d - 1 = (\beta^d)^i - 1 = 1^i - 1 = 0\\
\\
&\begin{aligned}
\operatorname{ord}(\beta^i) = d &\iff (\beta^i)^k \neq 1 \text{ for }1\leq k<d\\
&\iff \beta^{ik} \neq 1 \text{ for }1\leq k<d\\
&\iff d\not\mid ik \text{ for }1\leq k<d\\
&\iff \gcd(i,d) = 1\\
\end{aligned}\\
&\therefore\text{there are }\phi(d)\text{ possible }i\text{} \qquad\text{(Theorem 2.1.1)} \\
\\
&\psi_1(d)=
\begin{cases}
0&\text{if no element of order }d\text{ exists}\\
\phi(d)&\text{if one does exist}
\end{cases} \\
\\
&\psi_1(d)\leq\phi(d) \\
\\
&\therefore p-1=\sum_{d\mid {p-1}} \psi_{1}(d) \leq \sum_{d\mid {p-1}} \phi(d)
\end{aligned}\\
\\
\\
&\text{Consider }\mathbb{Z}_{p-1}\text{ where }\operatorname{ord}(a)=d\text{ means that }da \equiv 0\pmod {p-1} \\
\\
& \text{Let }\psi_{2}(d)\text{ count the number of elements of order }d\text{ in }\mathbb{Z}_{p-1}\text{ for each }d\mid p-1 \\
\\
&2) \text{ Suppose }a \in \mathbb{Z}_{p-1}, \quad \operatorname{ord}(a)=d\\
\\
&\text{so }\\
&\quad\begin{aligned}
&0,a,2a, \dots, (d-1)a\text{ are }d\text{ distinct elements} \\
\\
&\begin{aligned}
\operatorname{ord}(ia) = d &\iff k(ia) \neq 1 \text{ for }1\leq k<d\\
&\iff kia \neq 1 \text{ for }1\leq k<d\\
&\iff d\not\mid ki \text{ for }1\leq k<d\\
&\iff \gcd(i,d) = 1\\
\end{aligned}\\
\\
&\text{then for every }d\mid p-1\text{, exactly }\phi (d)\text{ elements have order }d\\
\\
&\psi_2(d)\geq\phi(d) \\
\\
&\therefore p-1=\sum_{d\mid {p-1}} \psi_{2}(d) \geq \sum_{d\mid {p-1}} \phi(d)
\end{aligned}\\
\\
&p-1=\sum_{d\mid {p-1}} \psi_{1}(d) \leq \sum_{d\mid {p-1}} \phi(d) \leq \sum_{d\mid {p-1}} \psi_{2}(d) = p-1 \\
\\
&\therefore p-1=\sum_{d\mid {p-1}} \psi_{1}(d) = \sum_{d\mid {p-1}} \phi(d) \\
\\
&\text{taking }d = p-1\text{, then }\psi_{1}(p-1) = \phi(p-1) > 0\\
\\
&\therefore \phi(p-1)\text{ elements of order }p-1\text{ (a generator) exists}
\end{align*}
$$
> more specifically, but not provided, $\mathbb{Z}_{n}^*$ has a generator iff $n = 1,2,4,p^k, 2p^k$ where $p$ is an odd prime

Condition for generators
$$
\begin{gather*}
\text{for generator }g \\
\\
\operatorname{ord}(g^k) = \frac{p-1}{\gcd(k, p-1)} \\
\\
g^k\text{ is a generator}\iff \gcd(k, p-1) = 1
\end{gather*}
$$

### Application
Euler's totient example
$$
\begin{gather*}
20 = 2^{2}5\\
\\
\begin{aligned}
\phi(20)&=20\left(1-\frac12\right)\left(1-\frac15\right)\\
&=8
\end{aligned}
\end{gather*}
$$

Order of -1
$$
\begin{gather*}
\operatorname{ord}(-1) = k \iff (-1)^k \equiv 1 \pmod p \\
\\
(-1)^{2} \equiv 1 \pmod p, \quad p > 2 \\
\\
\therefore \operatorname{ord}(-1) = 2\\
\\
\\
\text{when }p = 2,\ -1 \equiv 1 \pmod 2
\end{gather*}
$$

Number of generators of $\mathbb{Z}_{103}^*$
$$
\begin{gather*}
103\text{ is prime}\\
\\
103-1 = (2)(3)(17) \\
\\
\begin{aligned}
\phi(103 - 1) &= (2-1)(3-1)(17-1) \\
&= 32
\end{aligned}
\end{gather*}
$$

2 is a generator of $\mathbb{Z}_{13}^*$
$$
\begin{array}{llllll}
2^0 = 1, & 2^2 = 4, & 2^4 = 3, & 2^6 = 12, & 2^8 = 9, & 2^{10} = 10, \\
2^1 = 2, & 2^3 = 8, & 2^5 = 6, & 2^7 = 11, & 2^9 = 5, & 2^{11} = 7
\end{array}
$$


Generators