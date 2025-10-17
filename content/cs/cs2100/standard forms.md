---
tags:
  - cs2100/chapter11
  - math/logic
complete: true
prev: /labyrinth/notes/cs/cs2100/boolean_algebra
next: /labyrinth/notes/cs/cs2100/logic_circuits

---
### Summary
Canonical form
- canonical sum-of-products -> sum-of-minterms ^37b440
- canonical product-of-sums -> product-of-maxterms
### Concept
Standard forms for boolean expressions

| Form                 | Definition                                   | Example                                                     |
| -------------------- | -------------------------------------------- | ----------------------------------------------------------- |
| Literal              | boolean variable or its complement           | $x$, $x'$                                                   |
| Product Term         | literal<br>logical product of literals       | $x$, $x'\cdot y$                                            |
| Sum Term             | literal<br>logical sum of literals           | $x$, $x'+y$                                                 |
| Sum-of-Products(SOP) | product term<br>logical sum of product terms | $x$, $x'\cdot y$, $x'\cdot y + x$, $x' \cdot y + x\cdot y'$ |
| Product-of-Sums(POS) | sum term<br>logical product of sum terms     | $x$, $x'+y$, $(x'+ y) \cdot x$, $(x' + y) \cdot (x+ y')$    |
> related to [CNF](/labyrinth/notes/math/cs1231s/proof_by_induction#^ffe45f)

Minterms and maxterms ^a0f561
- minterm
	- product term
	- $x'$ -> `0`, $x$ -> `1`
- maxterm
	- sum term
	- complement of minterm
	- $x'$ -> `1`, $x$ -> `0`

$$
\begin{gather*}
\begin{array}{c|c|c|c}
x & y & \text{minterm} & \text{maxterm} \\
\hline 0 & 0 & m0 = x'\cdot y' & M0 = x+y \\
0 & 1 & m1 = x'\cdot y & M1 = x + y' \\
1 & 0 & m2 = x \cdot y' & M2 = x'+y \\
1 & 1 & m3 = x \cdot y & M3 = x' + y'
\end{array} \\
\\
(m_{i})'  = M_{i}
\end{gather*}
$$
> `2ⁿ` minterms and `2ⁿ` maxterms over `n` variables, they represent all the rows of the truth table
### Application
Identifying SOP and POS
$$
\begin{array}{c|c|c}
\text{Expression} & \text{SOP} & \text{POS} \\
x'\cdot y+x\cdot y'+x\cdot y\cdot z & \text{T} & \text{F} \\
(x+y')\cdot(x'+y)\cdot(x'+z') & \text{F} & \text{T} \\
x'+y+z & \text{T} & \text{T} \\
x\cdot(w'+y\cdot z) & \text{F} & \text{F} \\
x\cdot y\cdot z' & \text{T} & \text{T} \\
w\cdot x'\cdot y+v\cdot(x\cdot z+w') & \text{F} & \text{F}
\end{array}
$$

Sum-of-minterms
$$
\begin{gather*}
F = b \cdot c + a\cdot b' \\
\\
\begin{array}{cc|c|c|c}
 & a & b & c & F \\
\hline m0 &  0 & 0 & 0 & 0 \\
m1 & 0 & 0 & 1 & 0 \\
m2 & 0 & 1 & 0 & 0 \\
{\color{cyan} m3} & 0 & 1 & 1 & 1 \\
{\color{cyan} m4} & 1 & 0 & 0 & 1 \\
{\color{cyan} m5} & 1 & 0 & 1 & 1 \\
m6 & 1 & 1 & 0 & 0 \\
{\color{cyan} m7} & 1 & 1 & 1 & 1
\end{array} \\
\\
\begin{aligned}
F &= b \cdot c + a\cdot b' \\
&= a \cdot b \cdot c + a' \cdot b \cdot c + a\cdot b'\cdot c + a\cdot b'\cdot c' \\
&= m7 + m3 + m5 + m4 \\
& = \Sigma m(3,4,5,7) 
\end{aligned}
\end{gather*}
$$
> `0` is the complement

Product-of-maxterms
$$
\begin{gather*}
G = (x+y')\cdot(y+z) \\
\\
\begin{array}{cc|c|c|c}
 & x & y & z & G \\
\hline {\color{orange} M0} & 0 & 0 & 0 & 0 \\
M1 & 0 & 0 & 1 & 1 \\
{\color{orange} M2} & 0 & 1 & 0 & 0 \\
{\color{orange} M3} & 0 & 1 & 1 & 0 \\
{\color{orange} M4} & 1 & 0 & 0 & 0 \\
M5 & 1 & 0 & 1 & 1 \\
M6 & 1 & 1 & 0 & 1 \\
M7 & 1 & 1 & 1 & 1
\end{array} \\
\\
\begin{aligned}
G &= (x+y')\cdot(y+z) \\
&= (x+y'+z)\cdot(x+y'+z')\cdot(x+y+z)\cdot(x'+y+z) \\
&= M2 \cdot M3 \cdot M0 \cdot M4 \\
&= \Pi M(0,2,3,4)
\end{aligned}
\end{gather*}
$$
> `1` is the complement