---
tags:
  - cs2108/chapter3
  - math/harmonics
complete: false
prev: /labyrinth/notes/cs/cs2108/sinusoid_orthogonality
next: /labyrinth/notes/cs/cs2108/fourier_transform

---
### Concept
#### Isolating frequencies
- [inner product](/labyrinth/notes/cs/cs2108/basis_functions#^8ec0b0) with the signal

$$
\begin{align*}
\text{recall:}\qquad sig[n]&= {\color{aqua} \sum_{k=1}^{K} [a_{k}\sin(\omega_{k}t_{n}) + b_{k}\cos(\omega_{k}t_{n})] } \\
\\
\braket{ sig[n] | \sin(\omega_{m}t) } &= \frac{T}{2}a_{m} &&\text{(Sine component)}\\
\braket{ sig[n] | \cos(\omega_{m}t) } &= \frac{T}{2}b_{m} &&\text{(Cosine component)}
\end{align*}
$$

Strength
- need to use [both sine and cosine](/labyrinth/notes/cs/cs2108/sinusoid_orthogonality#^275f80)
- representing sine and cosine within a frequency as a [complex number](/labyrinth/notes/math/imagine/complex_numbers)

$$
\begin{align*}
X(\omega_{m}) &= \braket{ sig[n] | \cos(\omega_{m}t) } - j \braket{ sig[n] | \sin(\omega_{m}t) } \\
&= {\color{aqua} \frac{T}{2}(b_{m}-ja_{m}) }
\end{align*}
$$
> use $j$ to represent the imaginary number, phycics convention

Magnitude
- represents the actual amplitude of the frequency

$$
|X(\omega_{m})|=\frac{T}{2}\sqrt{ b_{m}^{2}+a_{m}^{2} }
$$

Phase
- represents the phase shift

$$
\phi_{m} = \text{arctan}\left( -\frac{a_{m}}{b_{m}} \right)
$$

Simplify with [euler's formula](/labyrinth/notes/math/imagine/complex_exponentials#^df8f33)
$$
\begin{align*}
X(\omega_{m}) &= \braket{ sig[n] | \cos(\omega_{m}t) } - j \braket{ sig[n] | \sin(\omega_{m}t) } \\
&= \int_{0}^{T}(sig[n])\cos(\omega_{m}t) \ dt - j \int_{0}^{T}(sig[n])\sin(\omega_{m}t) \ dt \\
&= \int_{0}^{T}(sig[n])e^{-j\omega_{m}t} \ dt
\end{align*}
$$
#### Fourier series
- the expansion of a periodic function into a sum of sine and cosine

$$
X(\omega) = \int_{0}^{T} x(t) \ e^{-j \omega t} \ dt
$$