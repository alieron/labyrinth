---
tags:
  - cs2107/chapter8
  - cs/security
  - cs/pwn
  - lang/c
complete: false
prev: /labyrinth/notes/cs/cs2107/buffer_overflow
next: /labyrinth/notes/cs/cs2107/script_injection

---
### Summary
Premise
- code performs arithmetic assuming numbers fit in types without checks
- assumption that `a < (a + 1)` is always true
 
Attack
- choose inputs so arithmetic overflows the size of the type

Attacker’s goals
- trigger out-of-bounds writes/reads -> integrity
- bypass size checks -> execution integrity

Defense
- perform explicit overflow-safe checks, check `count <= SIZE_MAX / sizeof(struct)`
- use wide integer types for intermediate calculations
- use safe allocation helpers that check for overflow
- static analysis and fuzzing to detect edge cases
### Concept
Integer overflow
- result of arithmetic operation exceeds the range of the data type
- [signed overflow](/labyrinth/notes/cs/cs2100/complement_operations)
- unsigned overflow
### Application
Unsigned overflow(4-bit)
$$
\begin{gather*}
\begin{array}{cr}
 & 15 \\
+ & 2 \\
\hline & 17
\end{array} & \begin{array}{cr}
 & 1111 \\
+ & 0010 \\
\hline & {\color{red}1 }0001 \\
\end{array} & {\color{red} \text{Overflow} } \\
\end{gather*}
$$

Bypass size checks
```c

```