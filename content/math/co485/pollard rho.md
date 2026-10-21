---
tags:
  - co485/chapter2
  - math/number_theory
  - to_review
complete: false
prev: /labyrinth/notes/math/co485/discrete_logarithm
next: /labyrinth/notes/math/co485/pohlig-hellman

---
### Concept
#### Pollard rho


Collision
f(a,b) = g^a h^{-b}

(a,b) != (a',b') st. f(a,b) = f(a',b')

**Correctness claim (Pollard rho collision equation).** A collision gives $(b_1-b_2)x\equiv a_2-a_1\pmod n$.
- layman explanation: equal walk states make one linear modular equation for the unknown logarithm.

**Proof.**
$$
\begin{align*}
g^{a_1}h^{b_1}=g^{a_2}h^{b_2}&\Longrightarrow g^{a_1+b_1x}=g^{a_2+b_2x}\\
&\Longrightarrow(b_1-b_2)x\equiv a_2-a_1\pmod n.
\end{align*}
$$
Pollard rho walks through elements $g^ah^b$ until a collision gives

$$
a_1+b_1x\equiv a_2+b_2x\pmod n.
$$

but collision finding is still $O(\sqrt{ n })$ space


When $b_1-b_2$ is invertible modulo $n$, this yields $x$. It has expected $O(\sqrt n)$ time and constant memory using cycle detection.