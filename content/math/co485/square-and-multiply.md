---
tags:
  - co485/chapter1
  - math/number_theory
  - to_review
complete: false
next: /labyrinth/notes/math/co485/multiplicative_modular_group
prev: /labyrinth/notes/math/co485/diffie-hellman_key_exchange_II

---
### Concept
#### Square-and-Multiply
- efficient exponentiation
- using the binary decomposition of $n$

```pseudo
\begin{algorithm}
\caption{Square-And-Multiply}
    \begin{algorithmic}
        \STATE \textbf{Input}: $g\in G$, $n\in\Z$
        \STATE \textbf{Output:} $g^n$
        \STATE If $n < 0$, set $g\leftarrow g^{-1}$ and $n\leftarrow -n$
        \STATE Let $n=n_0+n_12^1 + n_2 2^2 + \dots + n_k 2^k$ be the binary decomposition of $n$ (so $n_i\in\{0,1\}$)
        \STATE Set $y_0=g$
        \FOR {$i=1$ to $k$}
            \STATE Set $y_i = y_{i-1}^2$
        \ENDFOR
        \STATE Set $h=e$
        \FOR {$i=0$ to $k$}
            \STATE Set $h\leftarrow h y_i^{n_i}$
        \ENDFOR
        \STATE Return $h$
    \end{algorithmic}
\end{algorithm}
```

Correctness
$$
\begin{align*}
&\text{Claim: }y_i=g^{2^i}\text{ for }0\le i\le k\\
\\
&\text{Base case: }y_0=g=g^{2^0}\\
&\text{Induction step: suppose }y_{i-1}=g^{2^{i-1}}\\
&\quad\begin{aligned}
y_i&=y_{i-1}^2\\
&=\left(g^{2^{i-1}}\right)^2 && \text{(induction hypothesis)}\\
&=g^{2^i}.\\[1ex]
h&=\prod_{i=0}^{k}y_i^{n_i}\\
&=\prod_{i=0}^{k}\left(g^{2^i}\right)^{n_i} && \text{(claim)}\\
&=g^{\sum_{i=0}^{k}n_i2^i}\\
&=g^n. && \text{(binary expansion of }n\text{)}
\end{aligned}
\end{align*}
$$

Runtime
- $O(k)$ group operations(square + multiply) => $O(\log n)$ 
- the [runtime for modular multiplication](/labyrinth/notes/math/co485/arithmetic_operations) is $O(\log ^{2}n)$
- so exponentiation is $O(\log ^{3}n)$

#### Montgomery ladder
- keeps 2 adjacent powers

```pseudo
\begin{algorithm}
\caption{Montgomery Ladder}
\begin{algorithmic}
    \STATE \textbf{Input}: $g\in G$, bits $b_{k-1}\cdots b_0$ of $n$
    \STATE $x_0\leftarrow e$, $x_1\leftarrow g$
    \FOR{$i=k-1$ down to $0$}
        \STATE $x_{1-b_i}\leftarrow x_0x_1$
        \STATE $x_{b_i}\leftarrow x_{b_i}^2$
    \ENDFOR
    \STATE \textbf{return} $x_0$
\end{algorithmic}
\end{algorithm}
```

Correctness
TODO

Runtime
TODO

Assignment 1 proves the ladder invariant. If $m$ is the prefix represented by the processed bits, then

$$
\begin{gather*}
x_j=g^{m+j},\qquad j\in\{0,1\}.
\end{gather*}
$$

Initially $m=0$, so $(x_0,x_1)=(g^0,g^1)$. Processing bit $b_i$ changes $m$ to $m'=2m+b_i$ and gives

$$
\begin{align*}
x'_{b_i}&=x_{b_i}^2=g^{2m+2b_i}=g^{m'+b_i},\\
x'_{1-b_i}&=x_0x_1=g^{2m+1}=g^{m'+(1-b_i)}.
\end{align*}
$$

Thus the invariant is maintained, and after all bits are processed $m=n$, so $x_0=g^n$. Its regular operation pattern also reduces simple timing leakage compared with a branchy exponentiation routine.
