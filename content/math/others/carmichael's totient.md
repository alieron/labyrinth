---
tags:
- math/modular_arithmetic
complete: true
index: null
---
[[#|Previous]]   [[#|Next]]
### Summary
For [prime numbers](/labyrinth/notes/math/others/prime_numbers)
$$
\lambda(p) = p-1
$$
### Concept
Improvement of [euler's totient](/labyrinth/notes/math/others/euler's_totient)
$$
\begin{gather*}
\lambda(n)=m, m \in \mathbb{Z}_{+} \ is \ the \ smallest \ number \ \ \mathrm{s.t.}\\
\forall a \ coprime \ to \ n : \qquad a^m \equiv 1 \pmod n
\end{gather*}
$$
### Application
Difference between euler's and carmichael's totients
$$
\begin{gather*}
n=8 \\
\varphi(n)=\varphi(8)=\varphi(2^3)=2^{3-1}(2-1)=4\\
\\
\lambda(n)=\lambda(8)=2 \\
\because 1^{2}\equiv 3^{2}\equiv 5^{2}\equiv 7^{2}\equiv 1{}\pmod {8}
\end{gather*}
$$