---
tags:
  - cs2108/chapter4
  - math/harmonics
complete: false
prev: /labyrinth/notes/cs/cs2108/fourier_transform
next: /labyrinth/notes/cs/cs2108/discrete_sampling

---
### Summary
DFT and inverse DFT
$$
\begin{align*}
\text{DFT:} &&& X[k]=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}} \\
\\
\text{Inverse DFT:} &&& x[n] = \frac{1}{N}\sum_{k=0}^{N-1} X[k] \ e ^{-j 2\pi k\frac{n}{N}}
\end{align*}
$$
### Concept
#### Discrete time fourier transform(DTFT)
- discrete time -> continuous frequency

$$
\begin{align*}
&& X(\omega) &= \int_{-\infty}^{\infty} x(t) \ e^{-j \omega t} \ dt &&\text{(CTFT)} \\
\\
\text{Discrete Time Samples:} && t &= n \Delta t = n \frac{T}{N} \\
\\
&& X(\omega) &= \sum_{n=-\infty}^{\infty} x(n\Delta t) \ e^{-j\omega n\Delta t} \cdot \Delta t \\
&& &= \frac{T}{N}\sum_{n=-\infty}^{\infty} x[n] \ e^{-j\omega n \frac{T}{N}} && \text{(DTFT)} 
\end{align*}
$$
#### Discrete fourier transform(DFT)
- assumes periodic signals
- discrete time -> discrete frequency

$$
\begin{align*}
&& X(\omega) &= \frac{T}{N}\sum_{n=-\infty}^{\infty} x[n] \ e^{-j\omega n \frac{T}{N}} && \text{(DTFT)}  \\
\text{Periodic Assumption:} && &= \frac{T}{N}\sum_{n=0}^{N-1} x[n] \ e^{-j\omega n \frac{T}{N}} \\
\\
\text{Discrete Frequencies:} && \omega &= k \omega_{0}=k \ 2\pi f_{0} = k \ 2\pi\frac{1}{T} \\
\\
&& X[k] &= \frac{T}{N}\sum_{n=0}^{N-1} x[n] \ e^{-j 2\pi n \frac{kT}{TN}} \\
&& &=\frac{T}{N} {\color{aqua}  \sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}}} && \text{(DFT)}
\end{align*}
$$
> the scaling terms are usually dropped, kinda imprecise "*engineering*" math
> DFT is also slow, the [FFT](/labyrinth/notes/cs/cs2108/FFT) is a fast implementation

Periodic frequency domain
- period of $N$

$$
\begin{align*}
X[k+N]&=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi (k+N)\frac{n}{N}} \\
&=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}-j 2\pi n} \\
&=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}} \cdot e^{-j 2\pi n} \\
&=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}} &&\text{(Euler's Theorem)}\\
&=X[k]
\end{align*}
$$
#### Inverse DFT
- frequency-doamin -> time-domain

$$
x[n] = \frac{1}{N}\sum_{k=0}^{N-1} X[k] \ e ^{-j 2\pi k\frac{n}{N}}
$$
> scaling is kept as convention

