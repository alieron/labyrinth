---
tags:
  - math/algebra
  - math/number_theory
complete: false
next: /labyrinth/notes/math/abstract_algebra/greatest_common_divisor

---
### Summary
Divisibility
$$
\begin{gather*}
d\mid m \implies m=dk\text{ for some }k \in \mathbb{Z}\\
\\
\begin{aligned}
&\forall d \in \mathbb{Z}\setminus \{ 0 \}, \ d\mid 0 &&\text{Every number divides 0}\\
&\forall m \in \mathbb{Z}, \ 1 \mid m &&\text{1 divides every number}\\
\end{aligned}
\end{gather*}
$$

Properties
$$
\begin{align*}
\text{Transitivity:} &&& {a \mid b} \land {b\mid c} \implies a \mid c \\
\\
\text{Multiplication:} &&& a\mid b \implies ca \mid cb \\
\\
\text{Linearity:} &&& \begin{aligned}[t]
{a \mid b} \land {a\mid c} &\implies \forall x,y \in \mathbb{Z}, \ a \mid (bx+cy) \\
&\implies a \mid b+c \\
&\implies a \mid b - c
\end{aligned}
\end{align*}
$$
### Concept
#### Divisibility
- a number divides another when it is a multiple of that number

$$
d|m \implies m=dk\text{ for some }k \in \mathbb{Z}
$$

Useful properties
- transitivity
$$
\begin{align*}
& \text{Claim: } {a \mid b} \land {b\mid c} \implies a \mid c \\
\\
& \text{Suppose }a\mid b\text{ and }b\mid c\\
\\
&\text{so }b = ak, \ c = bl\\
&\quad\begin{aligned}[t]
c &= (ak)l \\
&=a(kl)
\end{aligned}\\
\\
&\therefore a\mid c
\end{align*}
$$

- multiplication
$$
\begin{align*}
& \text{Claim: } a\mid b \implies ca\mid cb \\
\\
& \text{Suppose }a\mid b\\
\\
&\text{so }b = ak\\
&\quad\begin{aligned}[t]
cb &= c(ak) \\
&=(ca)k
\end{aligned}\\
\\
&\therefore ca\mid cb
\end{align*}
$$

- linearity
$$
\begin{align*}
& \text{Claim: } {a\mid b} \land {a \mid c} \implies \forall x,y \in \mathbb{Z}, \ a \mid (bx+cy)\\
\\
& \text{Suppose }a\mid b\text{ and }a\mid c\\
\\
&\text{so }b = ak, \ c = al\\
&\quad\begin{aligned}[t]
bx+cy &= (ak)x + (al)y \\
&=a(kx+ly)
\end{aligned}\\
\\
&\therefore a\mid (bx+cy)
\end{align*}
$$
> this means that a common divisor divides every [linear combination](/labyrinth/notes/math/ma1522/linear_combinations) of the numbers, and is a very important property

#### Euclidean division
- division with remainder

$$
a = qb +r, \quad 0\leq r < |b|
$$

### Application
Divisors of 1
$$
\begin{align*}
& \text{Claim: } a\mid 1 \implies a = \pm 1 \\
\\
&\text{Suppose }a\mid 1 \\
&\quad\begin{split}
&1 = ak \\
&1 = |a||k| \\
&\left|\frac{1}{k}\right| = |a| \\
\\
& 1 \leq |a| =\left|\frac{1}{k}\right| \leq 1
\end{split} \\
\\
&\therefore a = \pm 1
\end{align*}
$$

Zero divides only zero
$$
\begin{align*}
& \text{Claim: } 0\mid m \implies m=0 \\
\\
&\quad\begin{split}
m &= 0k \\
&= 0
\end{split}
\end{align*}
$$

TODO
Cancellation property
$$
\begin{align*}
& \text{Claim: } {ca\mid cb} \land {c\neq 0} \implies a \mid b \\
\\
&\text{so }cb = (ca)k\\
&\quad\begin{aligned}[t]

\end{aligned}\\
\\
&\therefore a\mid (bx+cy)
\end{align*}
$$

Divisor of consecutive numbers
$$
\begin{align*}
& \text{Claim: } d\mid a \land d\mid (a+1) \implies d = \pm1 \\
\\
& \text{Suppose }d\text{ divides both }a\text{ and }a + 1 \\
\\
&\text{so }\\
&\quad\begin{split}
d\mid a \land d\mid (a+1) & \implies d \mid (a+1)-a &\quad& \text{(Linearity)} \\
& \implies d\mid 1 && \text{(Divisors of 1)} \\
& \implies d = \pm 1
\end{split}
\end{align*}
$$