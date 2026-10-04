---
tags:
  - co485/chapter2
  - math/number_theory
  - math/modular_arithmetic
complete: false
prev: /labyrinth/notes/math/co485/square-and-multiply
next: /labyrinth/notes/math/co485/euler's_totient

---
### Concept
#### Multiplicative group of integers modulo $n$
$$
\begin{gather*}
\mathbb{Z}_{n} = \{ 0,1, \dots, n-1 \}, \quad |\mathbb{Z}_{n}| = n \\
\\
\mathbb{Z}_{n}^* = \{\begin{array}{c|c} x \in \mathbb{Z}_{n} & x ^{-1} \mod n\text{ exists} \end{array}\}
\end{gather*}
$$

Extended euclidean algorithm(EEA)
- find the gcd and the [bezout](/labyrinth/notes/math/abstract_algebra/greatest_common_divisor#Bezout's_identity) coefficients for 2 numbers

```pseudo
\begin{algorithm}
\caption{Extended Euclidean Algorithm}
\begin{algorithmic}
    \STATE \textbf{Input}: Integers $x,n$ (assume $n >x$)
    \STATE Set $a_0=0$, $b_0=1$, $r_0=n$
    \STATE Set $a_1=1$, $b_1=0$, $r_1=x$
    \STATE $i=1$
    \WHILE {$r_i\neq 0$}
        \STATE Divide $r_{i-1}$ by $r_i$, i.e., set $q_i$ and $r_{i+1}$ such that 
        \[ r_{i-1} = q_ir_i + r_{i+1}\]
        and $0\leq r_{i+1} < r_i$
        \STATE $a_{i+1}=a_{i-1}-q_ia_i$
        \STATE $b_{i+1} = b_{i-1} - q_ib_i$
        \STATE $i=i+1$
    \ENDWHILE
    \STATE Return $(a_i,b_i)$
\end{algorithmic}
\end{algorithm}
```

Coprimality and multiplicative inverse (Theorem 2.1.1) ^531ac2
- a residue has a multiplicative inverse only if its [coprime](/labyrinth/notes/math/abstract_algebra/greatest_common_divisor#Coprimality) to the modulus
- requires the EEA

$$
\begin{align*}
& \text{Claim: } \mathbb{Z}_{n}^* = \{\begin{array}{c|c} x \in \mathbb{Z}_{n} & \gcd(x, n) = 1 \end{array}\} \\
\\
&(\subseteq)\text{ Suppose }x ^{-1} \mod n \text{ exists} \\
&\quad\begin{split}
&\text{then } \exists a, \ ax \equiv 1 \pmod n \\
& ax -1 = bn\text{ for some }b\in \mathbb{Z} \\
&ax-bn = 1 \\
\\
&\text{let }d = \gcd(x,n) \\
&\implies {d\mid x} \land {d\mid n} \\
& \implies \forall k, l \in \mathbb{Z}, \ d \mid (kx + ln) &\qquad& \text{(Linearity of divisibility)} \\
& \implies d\mid (ax-bn) \\
& \implies d \mid 1 \implies d = 1 \\
&\therefore \gcd(x,n) = 1
\end{split} \\
\\
&(\supseteq)\text{ Suppose }\gcd(x,n) = 1 \\
\\
&\text{ See Extended Euclidean Algorithm}\\
\\
&\quad\begin{aligned}
&\textbf{Claim 1: }\forall i, \ a_{i}x + b_{i}n=r_i \\
&\text{Induction base:} \\
&\quad\begin{split}
& i = 0, \ a_0x+b_0n=0x+1n=n=r_0 \\
& i = 1, \ a_1x+b_1n=1x+0n=x=r_1 \\
\end{split} \\
\\
&\text{Induction step:} \\
&\quad\begin{aligned}
&\text{Hypothesis: }a_{i-1}x+b_{i-1}n=r_{i-1} \text{ and }a_ix+b_in=r_i \\
\\
&\begin{aligned}
a_{i+1}x+b_{i+1}n
&=(a_{i-1}-q_ia_i)x+(b_{i-1}-q_ib_i)n\\
&=\underbrace{ (a_{i-1}x+b_{i-1}n) }_{ r_{i-1} }-q_i\underbrace{ (a_ix+b_in) }_{ r_{i} } && \text{(Induction Hypothesis)}\\
&=r_{i-1}-q_ir_i\\
&=r_{i+1}
\end{aligned}
\end{aligned}\\
\\
&\textbf{Claim 2: }r_{i} \neq 0 \implies \gcd(x, n) \mid r_{i} \\
\\
&\text{Let }d = \gcd(x,n) \\
\\
&\text{Induction base:} \\
&\quad\begin{split}
& i = 0, \ r_{0} = n \implies d \mid r_{0} \\
& i = 1, \ r_{1} = x \implies d \mid r_{1} \\
\end{split} \\
&\text{Induction step:} \\
&\quad\begin{aligned}
&\text{Hypothesis: }d \mid r_{i-1} \text{ and } d \mid r_{i} \\
\\
&\begin{aligned}
r_{i+1}
&=r_{i-1}-q_ir_i \\
& \implies d \mid r_{i+1} && \text{(Linearity of divisibility)}
\end{aligned}
\end{aligned} \\
\\
&\textbf{Claim 3: }\forall k \in \mathbb{Z}, \ {k \mid r_{i}} \land {k \mid r_{i+1}} \implies k\mid \gcd(x,n) \\
&\text{Suppose }k \mid r_{i} \text{ and }k \mid r_{i+1}\\
&\quad\begin{split}
r_{i-1} &= q_{i}r_{i} + r_{i+1} \\
& \implies k \mid r_{i-1} &\qquad& \text{(Linearity of divisibility)}
\end{split} \\
\\
&\textbf{Claim 4: }r_{i+1} = 0 \implies r_{i}=\gcd(x,n) \\
&\text{Suppose }r_{i+1} = 0 \\
&\quad\begin{split}
r_{i-1} &= q_{i}r_{i} + \cancel{ r_{i+1} } \\
& \implies r_{i} \mid r_{i-1} &\qquad& \text{(Linearity of divisibility)}
\end{split} \\
\\
&\quad\begin{split}
& \text{Since }r_{i} \mid r_{i-1}\text{ and }r_{i} \mid r_{i} \\
& \text{then }r_{i} \mid \gcd(x,n) &\qquad& \text{(Claim 3)} \\
\\
& \text{also } \gcd(x,n) \mid r_{i} && \text{(Claim 2)} \\
\\
&\therefore r_{i} = \gcd(x,n)
\end{split} \\
\\
&\text{Concluding} \\
&\quad\begin{aligned}
&\begin{array}{cl}
ax+bn = r_{i} & \text{(Claim 1)} \\
r_{i} = \gcd(x,n) & \text{(Claim 4)} \\
\end{array} \\
\\
& ax+bn = \gcd(x,n) \\
&\gcd(x,n) = 1 \implies ax+bn = 1 \\
&\begin{split}
ax + \cancel{ bn } & \equiv 1 \pmod n &\qquad& \text{since }n\mid bn \\
ax &\equiv 1 \pmod n
\end{split} \\
\\
&\therefore a \text{ is the multiplicative inverse of }x\text{ modulo }n
\end{aligned}
\end{aligned} \\
\\
&\therefore x ^{-1} \mod n \text{ exists} \iff \gcd(x,n) = 1
\end{align*}
$$
> Claim 1: every remainder encountered by EEA is a combination of $x$ and $n$
> Claim 2: the GCD divides all remainders
> Claim 3: a divisor of two consecutive remainders divides the GCD
> Claim 4: the last non-zero remainder is the GCD

Runtime of the EEA
- every 2 iteration will at least half the remainder

$$
\begin{align*}
& \text{Claim 5: } r_{i+1}< \frac{1}{2}r_{i-1} \\
\\
& \text{Suppose not, that }r_{i+1}\geq \frac{1}{2}r_{i-1} \\
\\
&\text{so }\\
&\quad\begin{aligned}[t]
r_{i+1} = r_{i-1}-q_{i}r_{i} &\implies q_{i}r_{i} \leq \frac{r_{i-1}}{2} \\
\text{since }r_{i} < r_{i+1}\quad &\implies q_{i} \geq1, \ r_{i}\leq \frac{1}{2}r_{i-1}<r_{i+1}
\end{aligned}\\
\\
&\text{Contradiction, }\therefore r_{i+1}< \frac{1}{2}r_{i-1}
\end{align*}
$$

- at most $2\log_2 n$ iterations
- $O(\log^2 n)$ runtime - due to some optimizations when doing [division](/labyrinth/notes/math/co485/arithmetic_operations)
> "$g^n$" in additive groups is just $ng$, that means there is an efficient way to solve the DLOG, hence why we cannot use them

### Application
GCD by Euclid's algorithm
$$
\begin{align*}
&\begin{aligned}
\gcd(48,18)\quad &\to \quad \gcd(48-18,18)=\gcd(30,18)\\
&\to \quad \gcd(30-18,18)=\gcd(12,18)\\
&\to \quad \gcd(12,18-12)=\gcd(12,6)\\
&\to \quad \gcd(12-6,6)=\gcd(6,6)
\end{aligned} \\
\\
&\therefore \gcd(48,18) = 6
\end{align*}
$$

GCD by EEA
$$
\begin{align*}
&\begin{aligned}\gcd(48,18)\quad &\to \quad \gcd(18,48\bmod 18)=\gcd(18,12)\\
&\to \quad \gcd(12,18\bmod 12)=\gcd(12,6)\\
&\to \quad \gcd(6,12\bmod 6)=\gcd(6,0)
\end{aligned}\\
\\
&\therefore \gcd(48,18) = 6
\end{align*}
$$

$\mathbb{Z}_{n}^*$ is a [group](/labyrinth/notes/math/~ma2202/groups)
$$
\begin{align*}
& \text{Claim: } \mathbb{Z}_{n}^* \text{ is a group}\\
\\
& 1)\ \text{Closure }\\
\\
&\quad\begin{split}
&\text{Suppose }a,b \in \mathbb{Z}_{n}^* \\
\\
&\gcd(a,n)=\gcd(b,n) = 1 \\
& \implies \gcd(ab, n) = 1 \\
\\
&\therefore ab \in \mathbb{Z}_{n}^*
\end{split} \\
\\
& 2)\ \text{Associativity }\\
\\
&\quad\begin{split}
&\text{from Integer Multiplication}\\
&\text{Multiplication is also commutative} \\
\\
&\therefore \mathbb{Z}_{n}^* \text{ is abelian}
\end{split} \\
\\
& 3)\ \text{Identity }\\
\\
&\quad\begin{split}
& 1 \in \mathbb{Z}_{n}^*
\end{split} \\
\\
& 4)\ \text{Inverse }\\
\\
&\quad\begin{split}
&\text{Suppose }a \in \mathbb{Z}_{n}^* \\
\\
&\gcd(a,n)= 1 = ax+ny &\quad& \text{(Bezout's Identity)} \\
& \implies ax \equiv 1 \pmod n \\
& \implies x = a^{-1} \\
\\
&\therefore a^{-1} \in \mathbb{Z}_{n}^*
\end{split}
\end{align*}
$$

Group of $\mathbb{Z}_{10}^*$
$$  
\mathbb Z_{10}^*=\{1,3,7,9\}  
$$