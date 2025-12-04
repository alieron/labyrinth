---
tags:
- math/modular_arithmetic
complete: false
---
   
### Summary
Simple form
$$
x\equiv(a+b)^e \mod n
$$
### Concept
Modulo of a [binomial](/labyrinth/notes/math/ma1301/binomial_theorem) expansion
$$
\begin{align*}
&\qquad n=pq \\
c &\equiv (ap+bq)^{e} \pmod n \\
\\
(ap+bp)^e &= (ap)^e+\binom{e}{1}(ap)^{e-1}(bq)+\dots+\binom{e}{e-1}(ap)(bq)^{e-1}+(bq)^e \\
&=(ap)^e+k_{1}(pq)+\dots+k_{e-1}(pq)+(bq)^e \\
\\
\therefore c &\equiv (ap+bq)^{e}=(ap)^e+\cancel{ k_{1}(pq) }+\dots+\cancel{ k_{e-1}(pq) }+(bq)^e \pmod {pq} \\
&\equiv (ap)^e+(bq)^e \pmod n
\end{align*}
$$
### Application
Solving for unknowns $p$ and $q$
$$
\begin{gather*}
n=pq \\
c_{1} \equiv (a_{1}p+b_{1}q)^{e} \pmod n \\
c_{2} \equiv (a_{2}p+b_{2}q)^{e} \pmod n \\
\\
for \ eqn \ 1: \\
c_{1} \equiv (a_{1}p)^e+(b_{1}q)^{e} \pmod n \\
a_{1}^{-e}c_{1}\equiv a_{1}^{-e}(a_{1}p)^e+a_{1}^{-e}(b_{1}q)^{e} \pmod n \\
a_{1}^{-e}c_{1}\equiv p^e+a_{1}^{-e}(b_{1}q)^{e} \pmod n \\
\\
same for \ eqn \ 2: \\
a_{2}^{-e}c_{2}\equiv p^e+a_{2}^{-e}(b_{2}q)^{e} \pmod n \\
\\
subtract \ 2 \ from \ 1: \\
a_{1}^{-e}c_{1}-a_{2}^{-e}c_{2} \equiv p^e+a_{1}^{-e}(b_{1}q)^{e}-p^e-a_{2}^{-e}(b_{2}q)^{e} \pmod n \qquad& \text{(Eliminating }p\text{)} \\
a_{1}^{-e}c_{1}-a_{2}^{-e}c_{2} \equiv a_{1}^{-e}(b_{1}q)^{e}-a_{2}^{-e}(b_{2}q)^{e}= kq^e \pmod n \\
\therefore q\mid (a_{1}^{-e}c_{1}-a_{2}^{-e}c_{2} \mod n) \ and \ q\mid n \\
q=gcd(a_{1}^{-e}c_{1}-a_{2}^{-e}c_{2} \mod n, n) \\
\\
repeat \ for \ p: \\
p=gcd(b_{1}^{-e}c_{1}-b_{2}^{-e}c_{2} \mod n, n) \\
\\
or \ trivially: \\
p=n\div q
\end{gather*}
$$

Solving for different exponents
$$
\begin{gather*}
n=pq \\
c_{1} \equiv (a_{1}p+b_{1}q)^{e_{1}} \pmod n \\
c_{2} \equiv (a_{2}p+b_{2}q)^{e_{2}} \pmod n \\
\\
(c_1)^{e2}​​=(a_1​p+b_1​q)^{e_1​e_2} \pmod n \\
c1e2​​=(a1​⋅p)e1​⋅e2​+(b1​⋅q)e1​⋅e2​modNa1−e1​⋅e2​​⋅c1e2​​=a1−e1​⋅e2​​⋅(a1​⋅p)e1​⋅e2​+a1−e1​⋅e2​​⋅(b1​⋅q)e1​⋅e2​modNa1−e1​⋅e2​​⋅c1e2​​=pe1​⋅e2​+a1−e1​⋅e2​​⋅(b1​⋅q)e1​⋅e2​modN
\end{gather*}
$$

