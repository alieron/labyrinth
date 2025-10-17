---
tags:
  - cs2107/chapter4
  - cs/security
complete: false
prev: /labyrinth/notes/cs/cs2107/textbook_RSA

---
### Summary

### Concept
Birthday paradox

### Application
Non-collision resistant hash
- using [xor](/labyrinth/notes/cs/xor) properties

$$
\begin{gather*}
H(x) = \verb|SHA3|(x\oplus k)\oplus \verb|SHA3|(\verb|rot|(x,n)) \\
\\
\text{where }\verb|rot|(x,n)\text{ rotates the bits in }x\text{ to the right by }n\text{ positions} \\
\\
\text{find }x_{1}, x_{2}\text{ such that }H(x_{1}) = H(x_{2}) \\
\\
\text{essentially:} \\
\verb|SHA3|(x_{1}\oplus k)\oplus \verb|SHA3|(\verb|rot|(x_{1},n)) = \verb|SHA3|(x_{2}\oplus k)\oplus \verb|SHA3|(\verb|rot|(x_{2},n)) \\
\\
\text{try:} \\
\begin{gathered}
\verb|SHA3|(x_{1}\oplus k) = \verb|SHA3|(x_{2}\oplus k) & \verb|SHA3|(\verb|rot|(x_{1},n)) = \verb|SHA3|(\verb|rot|(x_{2},n)) \\
x_{1}\oplus k=x_{2}\oplus k & \verb|rot|(x_{1},n) = \verb|rot|(x_{2},n)\\
\end{gathered} \\
x_{1}=x_{2} & \text{ is the only solution} \\
\\
\text{but we need }x_{1}\neq x_{2} \\
\verb|SHA3|(x_{1}\oplus k) =\verb|SHA3|(\verb|rot|(x_{2},n)) \\
x_{1}\oplus k =\verb|rot|(x_{2},n) & \text{possible collisions} \\
\\
\text{test:} \\
x_{1}=1010, \ k = 0110 \\
\\
\begin{aligned}
1010 \oplus 0110 &= 1100 \\
&= rot(1001, 1) \\
\text{or }&= rot(0011, 2) \\ 
\text{or }&= rot(0110, 3) \\ 
\end{aligned} \\
\\
\therefore x_{2}=1001, \ n = 1
\end{gather*}
$$