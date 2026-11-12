---
tags:
  - math/group_theory
  - to_review
complete: false
prev: /labyrinth/notes/math/~ma2202/subgroups
next: /labyrinth/notes/math/~ma2202/group_homomorphisms

---
### Summary
Finite cyclic groups: $G=\langle g\rangle$, $|G|=n$
$$
\begin{gather*}
G\text{ abelian},\quad G\cong\mathbb Z_n
\end{gather*}
$$

Powers and generators: $G=\langle g\rangle$, $|G|=n$
$$
\begin{gather*}
g^a=g^b\iff a\equiv b\pmod n,\qquad
\operatorname{ord}(g^k)=\frac{n}{\gcd(n,k)} \\
g^k\text{ generates }G\iff\gcd(n,k)=1,\qquad
\#\text{generators}=\varphi(n)
\end{gather*}
$$

Subgroups of $G=\langle g\rangle$, $|G|=n$
$$
\begin{gather*}
d\mid n\quad\Longrightarrow\quad
H_d=\langle g^{n/d}\rangle\text{ is the unique subgroup of order }d
\end{gather*}
$$

Prime-order groups
$$
\begin{gather*}
|G|\text{ prime}\quad\Longrightarrow\quad G\text{ cyclic}
\end{gather*}
$$

Generator test
$$
\begin{gather*}
|K|=N,\ x\in K:\quad
x\text{ generates }K\iff x^{N/q}\ne e\text{ for every prime }q\mid N
\end{gather*}
$$

Euler's theorem
$$
\begin{gather*}
\gcd(a,m)=1\quad\Longrightarrow\quad a^{\varphi(m)}\equiv1\pmod m
\end{gather*}
$$

### Concept
#### Cyclic groups and element order
- a [cyclic group](/labyrinth/notes/math/~ma2202/groups) consists of all integer powers of one element.
- element order is the first positive exponent giving the identity; otherwise it is infinite.

$$
\begin{gather*}
\langle g\rangle=\{g^k:k\in\mathbb Z\},\qquad
\operatorname{ord}(g)=\min\{t\in\mathbb Z_{>0}:g^t=e\}\quad\text{(if nonempty)} \\
\\
g^ag^b=g^{a+b}=g^{b+a}=g^bg^a
\quad\Longrightarrow\quad\langle g\rangle\text{ abelian}
\end{gather*}
$$

Equality of powers
- for finite order $t$, apply the division algorithm to $a-b$.

$$
\begin{align*}
&a-b=qt+r,\qquad 0\le r<t \\
&g^a=g^b\iff g^{a-b}=e\iff g^r=e \\
&g^r=e\implies r=0\qquad\text{(minimality of }t\text{)} \\
\\
&\therefore\quad g^a=g^b\iff t\mid(a-b)\iff a\equiv b\pmod t,\qquad
|\langle g\rangle|=t \\
&\operatorname{ord}(g)=\infty\quad\Longrightarrow\quad
g^a=g^b\iff a=b
\end{align*}
$$

Order of a power
- let $\operatorname{ord}(g)=n$ and $d=\gcd(n,k)$.

$$
\begin{gather*}
n=dn',\quad k=dk',\quad\gcd(n',k')=1 \\
\\
(g^k)^m=e\iff n\mid km\iff n'\mid k'm\iff n'\mid m \\
\therefore\quad\operatorname{ord}(g^k)=n'=\frac{n}{d} \\
\\
g^k\text{ generates }\langle g\rangle\iff d=1,\qquad
\#\{0\le k<n:\gcd(n,k)=1\}=\varphi(n)
\end{gather*}
$$

#### Prime-divisor generator test
- [Lagrange](/labyrinth/notes/math/~ma2202/subgroups#Lagrange's_theorem) gives $t=\operatorname{ord}(x)\mid N$ for $x\in K$, $|K|=N$.

$$
\begin{align*}
&t=N\implies x^{N/q}\ne e\quad\text{for every prime }q\mid N \\
\\
&t<N\implies N/t>1\implies\exists\text{ prime }q\mid N/t \\
&\hspace{2em}\implies t\mid N/q\implies x^{N/q}=e \\
\\
&\therefore\quad t=N\iff\forall\text{ prime }q\mid N,\ x^{N/q}\ne e
\end{align*}
$$

#### Euler's theorem and prime-order groups
- apply Lagrange to the unit group in [modular arithmetic](/labyrinth/notes/math/abstract_algebra/modular_arithmetic); a prime-order group has no intermediate element orders.

$$
\begin{gather*}
\mathbb Z_m^*=\{[a]_m:\gcd(a,m)=1\},\quad |\mathbb Z_m^*|=\varphi(m),\quad m\ge2 \\
\gcd(a,m)=1\implies\operatorname{ord}([a]_m)\mid\varphi(m)
\implies a^{\varphi(m)}\equiv1\pmod m \\
\\
|G|=p\text{ prime},\quad g\ne e
\implies 1<\operatorname{ord}(g)\mid p
\implies\operatorname{ord}(g)=p
\implies G=\langle g\rangle
\end{gather*}
$$

#### Subgroups of a cyclic group
- for $H\le\langle g\rangle$, $H\ne\{e\}$, choose the least positive $s$ with $g^s\in H$.

$$
\begin{align*}
&g^a\in H,\quad a=qs+r,\quad0\le r<s \\
&g^r=g^a(g^s)^{-q}\in H\implies r=0 \\
&\therefore\quad H=\langle g^s\rangle \\
\\
&\operatorname{ord}(g)=n<\infty:\quad
g^n=e\in H\implies s\mid n,\qquad |H|=n/s \\
&\therefore\quad d\mid n\implies H_d=\langle g^{n/d}\rangle
\text{ uniquely},\qquad H_1=\{e\} \\
\\
&\operatorname{ord}(g)=\infty:\quad
H=\{e\}\text{ or }H=\langle g^s\rangle\ (s\ge1),\quad
s\text{ unique},\quad |H|=\infty\text{ if }H\ne\{e\}
\end{align*}
$$

### Application
#### Orders and generators in a group of order 18
- find $\operatorname{ord}(g^{12})$ and all generators of $G=\langle g\rangle$, $|G|=18$.

$$
\begin{gather*}
\operatorname{ord}(g^{12})=\frac{18}{\gcd(18,12)}=3 \\
\\
\gcd(k,18)=1,\quad0\le k<18
\iff k\in\{1,5,7,11,13,17\} \\
\therefore\quad\text{generators: }g,g^5,g^7,g^{11},g^{13},g^{17}
\end{gather*}
$$

#### All subgroups of a group of order 20
- list the subgroups of $G=\langle g\rangle$, $|G|=20$.

$$
\begin{gather*}
d\mid20\iff d\in\{1,2,4,5,10,20\},\qquad H_d=\langle g^{20/d}\rangle \\
\\
\begin{array}{c|cccccc}
d&1&2&4&5&10&20\\\hline
H_d&\{e\}&\langle g^{10}\rangle&\langle g^5\rangle&\langle g^4\rangle&\langle g^2\rangle&\langle g\rangle
\end{array}
\end{gather*}
$$

#### Additive generators modulo 10
- find all generators of $(\mathbb Z_{10},+)$.

$$
\begin{gather*}
\operatorname{ord}([k]_{10})=\frac{10}{\gcd(10,k)} \\
\\
[k]_{10}\text{ generates }\mathbb Z_{10}
\iff\gcd(10,k)=1\iff[k]_{10}\in\{[1],[3],[7],[9]\}
\end{gather*}
$$

#### A generator modulo 23
- is $5$ a generator of $\mathbb Z_{23}^*$?

$$
\begin{gather*}
|\mathbb Z_{23}^*|=22,\qquad\text{prime divisors: }2,11 \\
\\
5^{22/11}=5^2\equiv2\not\equiv1\pmod{23} \\
5^{22/2}=5^{11}\equiv5\cdot2\cdot4\cdot16
\equiv22\equiv-1\not\equiv1\pmod{23} \\
\\
\therefore\quad\operatorname{ord}(5)=22,\qquad\mathbb Z_{23}^*=\langle5\rangle
\end{gather*}
$$

#### Generators modulo 13
- find all generators of $\mathbb Z_{13}^*$ using $2$.

$$
\begin{gather*}
2^6\equiv12\ne1,\quad2^4\equiv3\ne1\pmod{13}
\implies\operatorname{ord}(2)=12 \\
\\
\gcd(k,12)=1,\quad0\le k<12\iff k\in\{1,5,7,11\} \\
\therefore\quad\text{generators: }2,2^5,2^7,2^{11}\equiv2,6,11,7\pmod{13}
\end{gather*}
$$
