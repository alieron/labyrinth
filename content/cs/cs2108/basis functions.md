---
tags:
  - cs2108/chapter2
  - math/harmonics
complete: true
prev: /labyrinth/notes/cs/cs2108/sound_waves
next: /labyrinth/notes/cs/cs2108/sinusoid_orthogonality

---
### Concept
Signals as vectors
- signal space is a [vector space](/labyrinth/notes/math/ma1522/vectors_in_Rⁿ#^f4d609)

$$
f(t),g(t) \in S \implies \forall a,b \in \mathbb{R},\ af(t)+bg(t) \in S
$$
> by definition of a signal as a summation, amplitude is not important

Inner product of signals
- similarity between two functions
- behaves like the [dot product](/labyrinth/notes/math/ma1301/dot_product) for discrete functions

$$
\begin{align*}
\text{Discrete:} &&& 
\begin{aligned}
\langle f,g\rangle & = \sum_{n=1}^{N} f(t_{n})g(t_{n}) \\
& = f(t_{1})g(t_{1}) + f(t_{2})g(t_{2}) + \dots + f(t_{N})g(t_{N})
\end{aligned} \\
\\
\text{Continuous:} &&& \langle f,g\rangle = \int_{0}^{T} f(t)g(t) \ dt
\end{align*}
$$
> inner products are defined for vector spaces

Basis signals
- any signal can be thought of as a [linear combination](/labyrinth/notes/math/ma1522/linear_combinations) of the basis signals, usually simple sinusoidal
- choosing a set of [orthogonal](/labyrinth/notes/math/ma1522/orthogonality) bases, allows the separation of component frequencies by projection

$$
\{ f_{1},f_{2},\dots f_{k} \}\text{ is an orthogonal basis}\iff \forall i,j \in \{ 1,2,\dots,k \},\ {\color{aqua} \langle f_{i}, f_{j} \rangle = \begin{cases}0 &\text{ if }i\neq j\\||f_{i}||^2&\text{ if }i=j\end{cases} }
$$
### Extra
[Hilbert space](/labyrinth/notes/math/hilbert_space)
$$
L^{2}[a,b]=\left\{\begin{array}{c|c} f & \int_{a}^{b}|f(x)|^{2} \ dx < \infty\end{array}\right\} \\
$$