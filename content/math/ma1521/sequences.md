---
tags:
- ma1521/chapter6
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1521/applied_integration)   [Next](/labyrinth/notes/math/ma1521/series)
### Summary
Convergence and divergence, limit of a sequence
$$
\begin{align*}
& \text{for sequence }\{ a_{n} \}_{n=1}^\infty \\
\\
& \lim_{ n \to \infty } a_{n} =L \in \mathbb{R} \implies \{ a_{n} \}\text{ converges to }L && \text{simply: }a_{n} \to L \\
\\
\text{but }& \lim_{ n \to \infty } a_{n} \not\in \mathbb{R} \implies \{ a_{n} \}\text{ diverges} && \text{(Limit }DNE\text{ or is }\infty\text{)}
\end{align*}
$$
> [rules of limits](/labyrinth/notes/math/ma1521/limits_&_continuity#^c0031f) apply to convergent sequences, since their limit exists

[Squeeze theorem](/labyrinth/notes/math/ma1521/limits_&_continuity#^0ae1b5) for sequences
$$
(\forall n \in \mathbb{Z}^+ \ a_{n}\leq b_{n}\leq c_{n}) \land (\lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } c_{n}=L) \to \lim_{ n \to \infty } =L
$$
### Concept
Sequences
- infinite set of real numbers
- evaluation of a real function at discrete points

$$
\{ a_{n} \}_{n=1}^\infty \implies a_{1}, a_{2}, \dots  \quad a_{n}=f(n)
$$
> a sequence is a [function](/labyrinth/notes/math/cs1231s/function_relations#^86d994)/restriction of domain of the defining function to $\mathbb{Z}^+$

### Application
Sequences of [arithmetic series](/labyrinth/notes/math/ma1301/arithmetic_series) and [geometric series](/labyrinth/notes/math/ma1301/geometric_series)
$$
\begin{align*}
\text{AP:}&&& \{ a+(n-1)d \}_{n=1}^\infty \\
\\
\text{GP:}&&& \{ ar^{n-1} \}_{n=1}^\infty
\end{align*}
$$

Converging/diverging sequences
$$
\begin{gather*}
\left\{  \frac{n}{n+1}  \right\}\text{ converges to }1 \\
\lim_{ n \to \infty } \frac{n}{n+1} =\lim_{ n \to \infty } \frac{\frac{n}{n}}{\frac{n}{n}+\frac{1}{n}} = 1 \\
\\
\{ (-1)^n \} \implies -1,1,-1,1,\dots\text{ diverges} \\
\text{does not converge to }1\text{ or }-1 \\
\\
\{ 2n \}\text{ diverges} \\
\lim_{ n \to \infty } 2n = \infty \not\in \mathbb{R}
\end{gather*}
$$

Squeeze theorem on sequences
$$
\begin{gather*}
\lim_{ n \to \infty } \frac{n!}{n^n} \\
\\
0\leq \frac{n!}{n^n} = \frac{n}{n}\times \frac{n-1}{n}\times \dots \times \frac{2}{n} \times \frac{1}{n} \leq \frac{1}{n} \\
\\
\lim_{ n \to \infty } 0 = 0\text{ and }\lim_{ n \to \infty } \frac{1}{n} = 0 \\
\\
\therefore \lim_{ n \to \infty } \frac{n!}{n^n}  = 0
\end{gather*}
$$
> can use y=0 as a lower bound