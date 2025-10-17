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
\begin{gather*}
a\oplus b = \begin{cases}
true & if \ a \neq b \\
false & if \ a = b
\end{cases} \\
\\
a\oplus b = (a \land \sim b) \lor(\sim a \land b)
\end{gather*}
$$

| $a$ | $b$ | $a \oplus b$ |
| --- | --- | ------------ |
| T   | T   | F            |
| T   | F   | ==T==        |
| F   | T   | ==T==        |
| F   | F   | F            |

Addition [modulo](/labyrinth/notes/math/modulo) 2
$$
a \oplus b = (a + b) \mod 2
$$

Exclusive-NOR(XNOR)
$$
\begin{gather*}
a\odot b = \begin{cases}
true & if \ a = b \\
false & if \ a \neq b
\end{cases} \\
\\
a\odot b = (a \land b) \lor(\sim a \land \sim b)
\end{gather*}
$$

| $a$ | $b$ | $a \odot b$ |
| --- | --- | ----------- |
| T   | T   | ==T==       |
| T   | F   | F           |
| F   | T   | F           |
| F   | F   | ==T==       |
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
\sim b & = (a \oplus b) \oplus b && \text{(Associativity)} \\
& = a \oplus (b \oplus b) && \text{(Self-Inverse)} \\
& = a \oplus 0 && \text{(Identity)} \\
& = a \\
\\
\sim a & = (a \oplus b) \oplus \sim b \\
& = (a \oplus b) \oplus (a \oplus b) \oplus b && \text{(Self-Inverse)} \\
& = 0 \oplus b && \text{(Identity)} \\
& = b
\end{align*}
$$