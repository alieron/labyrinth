---
tags:
  - cs2108/chapter2
  - math/harmonics
complete: true
prev: /labyrinth/notes/cs/cs2108/basis_functions
next: /labyrinth/notes/cs/cs2108/fourier_series

---
### Summary
Orthogonalities
$$
\begin{align*}
\braket{ \sin(m\omega_{0}t) | \sin(n\omega_{0}t) } &= \begin{cases} 0 &\text{if }m\neq n\\ \frac{T}{2}&\text{if }m=n\end{cases} \\
\\
\braket{ \cos(m\omega_{0}t) | \cos(n\omega_{0}t) } &= \begin{cases} 0 &\text{if }m\neq n\\ \frac{T}{2}&\text{if }m=n\end{cases} \\
\\
\braket{ \sin(m\omega_{0}t) | \cos(n\omega_{0}t) } &= \begin{cases} 0 &\text{if }m\neq n\\0&\text{if }m=n\end{cases}
\end{align*}
$$
### Concept
#### Inner products of sinusoids
- [orthogonal](/labyrinth/notes/math/ma1522/orthogonality) in all non equal frequencies ^275f80

$$
\begin{align*}
\braket{ \sin(m\omega_{0}t) | \sin(n\omega_{0}t) } &= \int_{0}^{T} sin(m\omega_{0}t)\sin(n\omega_{0}t) \ dx \\
&= \frac{1}{2}\left[ \frac{\sin((m-n)\omega_{0}t)}{(m-n)\omega_{0}} - \frac{\sin((m+n)\omega_{0}t)}{(m+n)\omega_{0}} \right]_{0}^{T} \\
&= \begin{cases} 0 &\text{if }m\neq n\\ \frac{T}{2}&\text{if }m=n\end{cases} \\
\\
\braket{ \cos(m\omega_{0}t) | \cos(n\omega_{0}t) } &= \int_{0}^{T} sin(m\omega_{0}t)\sin(n\omega_{0}t) \ dx \\
&= \frac{1}{2}\left[ \frac{\sin((m-n)\omega_{0}t)}{(m-n)\omega_{0}} + \frac{\sin((m+n)\omega_{0}t)}{(m+n)\omega_{0}} \right]_{0}^{T} \\
&= \begin{cases} 0 &\text{if }m\neq n\\ \frac{T}{2}&\text{if }m=n\end{cases} \\
\\
\braket{ \sin(m\omega_{0}t) | \cos(n\omega_{0}t) } &= \int_{0}^{T} sin(m\omega_{0}t)\cos(n\omega_{0}t) \ dx \\
&= \frac{1}{2}\left[ \frac{\cos((m-n)\omega_{0}t)}{-(m-n)\omega_{0}} - \frac{\cos((m+n)\omega_{0}t)}{(m+n)\omega_{0}} \right]_{0}^{T} \\
&= \begin{cases} 0 &\text{if }m\neq n\\0&\text{if }m=n\end{cases} 
\end{align*}
$$
> we need both sine and cosine bases since its impossible to isolate a pure sine wave with only cosine


Basis for signal space
$$
\left\{\begin{array}{c|c} \sin(n\omega_{0}t),\ \cos(n\omega_{0}t) & \forall n \in \mathbb{Z} \end{array}\right\}\text{ is an orthonormal basis}
$$