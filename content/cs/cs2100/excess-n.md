---
tags:
  - cs2100/chapter2
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/complement_operations
next: /labyrinth/notes/cs/cs2100/fixed_&_floating_point

---
### Summary
Excess representation
- alternative to sign-and-magnitude, same range as [2s complement](/labyrinth/notes/cs/cs2100/signed_numbers#^bc6f6a)
- even distribution of +ve and -ve values

$$
\begin{array}{c|c}
\text{Excess-}n & \text{Decimal Value} \\
\hline
\mathrm{bin}(0) & -n \\
\vdots \\
\mathrm{bin}(n-1) & -1 \\
\mathrm{bin}(n) & 0 \\
\mathrm{bin}(n+1) & 1 \\
\vdots \\
\mathrm{bin}(2^n - 1) & n-1
\end{array}
$$
> in general, given `n` bits, we use **excess-2ⁿ⁻ⁱ** or **excess-(2ⁿ⁻ⁱ-1)**
### Concept
Excess-n
- translation by `n`

$$
x_{\text{excess-}n}=x + n
$$
### Application
Excess-2 on 3 bits
$$
\begin{array}{c | c}
\text{Excess-2} & \text{Decimal Value} \\
\hline
000 & -2 \\
001 & -1 \\
010 & 0 \\
011 & 1 \\
100 & 2 \\
101 & 3 \\
110 & 4 \\
111 & 5
\end{array}
$$
> Essentially excess-$n$ implies that there are $n$ -ve values, the remaining space is filled with 0 and +ve values

Excess-1023
$$
\begin{array}{c|c}
\text{Excess-1023} & \text{Decimal Value} \\
\hline
000 0000 0000 & 0-1023 = -1023 \\
\vdots \\
001 1000 1111 & 1023-1023=0 \\
\vdots \\
111 1111 1111 & 2047-1023=1024
\end{array}
$$