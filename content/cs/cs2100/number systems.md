---
tags:
  - cs2100/chapter2
  - cs/fundamentals
complete: true
prev: /labyrinth/notes/cs/cs2100/data_representation
next: /labyrinth/notes/cs/cs2100/signed_numbers

---
### Summary
**Decimal (base 10):** digits 0–9
**Binary (base 2):** digits 0,1
**Octal (base 8):** digits 0–7
**Hexadecimal (base 16):** digits 0–9, A–F
### Concept
Weighted positional number systems
- each digit represents the

**Base-R → Decimal**
- multiply digits by powers of R

**Decimal → Base-R**
- repeated division by R        

**Between non-decimal bases** convert via decimal or shortcuts (group bits).
- Binary -> Octal: groups of 3.
- Binary -> Hex: groups of

### Application
Positional weights
$$
\begin{gather*}
\text{Decimal:} & 1984_{10} \\
& 1 \times 10^{3} + 9 \times 10^{2} + 8 \times 10^1 + 4 \times 10^0 \\
\\
\text{Binary:} & 1000101_{2} \\
& 1\times 2^6+1\times 2^{2}+1\times 2^0 \\
\\
\text{Hexadecimal:} & dead_{16} \\
& 13\times 16^3+14\times 16^2+10\times 16^1+13\times 16^0
\end{gather*}
$$

Binary <-> Octal <-> Hexadecimal
$$
\begin{gather*}
& 11011110101011011011111011101111_{2} \\
\\
\text{Octal:} & \begin{array}{c | c}
011 & 011 & 110 & 101 & 011 & 011 & 011 & 111 & 011 & 101 & 111 \\
3 & 3 & 6 & 5 & 3 & 3 & 3 & 7 & 3 & 5 & 7
\end{array} \\
\\
\text{Hexadecimal:} & \begin{array}{c | c}
1101 & 1110 & 1010 & 1101 & 1011 & 1110 & 1110 & 1111 \\
d & e & a & d & b & e & e & f
\end{array}
\end{gather*}
$$