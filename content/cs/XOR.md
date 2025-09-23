---
tags:
  - cs/fundamentals
  - math/logic
  - lang/c
complete: true
---
### Summary
Properties ^bff698
$$
\begin{align*}
\text{Commutativity:} &&& a \oplus b  = b \oplus a \\
\\
\text{Associativity:} &&& a\oplus(b\oplus c) = (a\oplus b)\oplus c \\
\\
\text{Identity:} &&& a \oplus 0 = a \\
\\
\text{Self-Inverse:} &&& a \oplus a = 0
\end{align*}
$$

Negation
$$
\sim(a\oplus b)\equiv (\sim a) \oplus b \equiv a \oplus (\sim b)
$$
### Concept
Exclusive-OR(XOR)
$$
a\oplus b = \begin{cases}
true & if \ a \neq b \\
false & if \ a = b
\end{cases}
$$

| $a$ | $b$ | $a \oplus b$ |
| --- | --- | ------------ |
| T   | T   | F            |
| T   | F   | ==T==            |
| F   | T   | ==T==            |
| F   | F   | F            |

Addition [modulo](/labyrinth/notes/math/modulo) 2
$$
a \oplus b = (a + b) \mod 2
$$
### Application
Swapping variables without an intermediate
```c
int a = 5; // 0b0101
int b = 9; // 0b1001
a = a ^ b; // 0b1100
b = a ^ b; // 0b0101 = original a
a = a ^ b; // 0b1001 = original b
```
$$
\begin{align*}
b' & = (a \oplus b) \oplus b && \text{(Associativity)} \\
& = a \oplus (b \oplus b) && \text{(Self-Inverse)} \\
& = a \oplus 0 && \text{(Identity)} \\
& = a \\
\\
a' & = (a \oplus b) \oplus b' \\
& = (a \oplus b) \oplus (a \oplus b) \oplus b && \text{(Self-Inverse)} \\
& = 0 \oplus b && \text{(Identity)} \\
& = b
\end{align*}
$$