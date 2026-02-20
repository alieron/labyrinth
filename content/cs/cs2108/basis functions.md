---
tags:
  - cs2108/chapter2
  - math/harmonics
complete: true
prev: /labyrinth/notes/cs/cs2108/time-domain_signals
next: /labyrinth/notes/cs/cs2108/sinusoid_orthogonality

---
### Concept
#### Signals as vectors
- signal space is a [hilbert space](/labyrinth/notes/math/abstract_algebra/hilbert_space)
- a sound can be defined by up to an infinite number of frequencies

$$
f(t),g(t) \in S \implies \forall a,b \in \mathbb{R},\ af(t)+bg(t) \in S
$$
> by definition of a signal as a summation, amplitude is not important

[Inner product](/labyrinth/notes/math/abstract_algebra/inner_product) of signals
- similarity between two functions
- behaves like the [dot product](/labyrinth/notes/math/ma1301/dot_product) for discrete functions

$$
\begin{align*}
\text{Discrete:} &&& 
\begin{aligned}
\braket{ f | g }  & = \sum_{n=1}^{N} f(t_{n})g(t_{n}) \\
& = f(t_{1})g(t_{1}) + f(t_{2})g(t_{2}) + \dots + f(t_{N})g(t_{N})
\end{aligned} \\
\\
\text{Continuous:} &&& \braket{ f | g }  = \int_{0}^{T} f(t)g(t) \ dt
\end{align*}
$$
> ignore the [complex conjugate](/labyrinth/notes/math/imagine/complex_numbers#^1337ee), we are only concerned with the real component


#### Basis signals
- any signal can be thought of as a [linear combination](/labyrinth/notes/math/ma1522/linear_combinations) of the basis signals, usually simple sinusoidal
- choosing a set of [orthogonal](/labyrinth/notes/math/ma1522/orthogonality) bases, allows the separation of component frequencies by projection

$$
\{ f_{1},f_{2},\dots f_{k} \}\text{ is an orthogonal basis}\iff \forall i,j \in \{ 1,2,\dots,k \},\ {\color{aqua} \braket{ f_{i} | f_{j} }  = \begin{cases}0 &\text{ if }i\neq j\\|f_{i}|^2&\text{ if }i=j\end{cases} }
$$
> alternatively it can be an orthonormal basis since we aren't concerned with amplitude

- orthonormal with the [kronecker delta](/labyrinth/notes/math/abstract_algebra/kronecker_delta)

$$
\{ f_{1},f_{2},\dots f_{k} \}\text{ is an orthonormal basis}\iff \forall i,j \in \{ 1,2,\dots,k \},\ {\color{aqua} \braket{ f_{i} | f_{j} }  = \delta_{ij} }
$$

Isolating a basis from a signal ^8ec0b0
- apply the inner product

$$
\begin{align*}
sig[n] &= \sum_{i}A_{i}f_{i} \\
\\
\text{choos}&\text{ing basis } f_{k} \\
\\
\braket{ sig[n] | f_{k} } &= \braket{ \sum_{i}A_{i}f_{i} | f_{k} } \\
&= \sum_{i}A_{i} \braket{ f_{i} | f_{k} } &&\text{(Left Linearity)}\\
&= \sum_{i}A_{i} \delta_{ik} &&\text{(Kronecker Delta)}\\
&= A_{k} &&\text{(Sifting)}\\
\end{align*}
$$