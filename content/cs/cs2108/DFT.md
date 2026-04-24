---
tags:
  - cs2108/chapter4
  - math/analysis
complete: false
prev: /labyrinth/notes/cs/cs2108/fourier_transform
next: /labyrinth/notes/cs/cs2108/impulse_train

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

DFT properties
- [linear transformation](/labyrinth/notes/math/ma1522/linear_transformation)
- periodic
- shift theorem

$$
\begin{align*}
\text{Linearity:}&&&\mathcal{F}(\alpha x[n] + \beta y[n]) = \alpha X[k]+ \beta Y[k] \\
\\
\text{Periodicity:}&&&X[k+N] = X[k] \\
\\
\text{Shift:}&&&\mathcal{F}(x[n-m])= e^{-j 2\pi k\frac{m}{N}}X[k]\\
&&&\phi=2\pi k\frac{m}{N}\\
&&&\left|\mathcal{F}(x[n-m])\right|= |X[k]|
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

Linearity
$$
\begin{align*}
h[n] &= \alpha x[n] + \beta y[n] \\
\\
\mathcal{F}(h[n]) = H[k] &= \sum_{n=0}^{N-1} (\alpha x[n] + \beta y[n])\ e^{-j 2\pi k\frac{n}{N}} \\
&= \sum_{n=0}^{N-1} \alpha x[n]\ e^{-j 2\pi k\frac{n}{N}} + \sum_{n=0}^{N-1} \beta y[n]\ e^{-j 2\pi k\frac{n}{N}}\\
&= \alpha\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}} + \beta\sum_{n=0}^{N-1}  y[n]\ e^{-j 2\pi k\frac{n}{N}}\\
&= \alpha X[k] +  \beta Y[k]
\end{align*}
$$

Periodic frequency domain
- period of $N$

$$
\begin{align*}
X[k+N]&=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi (k+N)\frac{n}{N}} \\
&=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}-j 2\pi n} \\
&=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}} \cdot e^{-j 2\pi n} \\
&=\sum_{n=0}^{N-1} x[n]\ e^{-j 2\pi k\frac{n}{N}}\cdot(-1)^{2n}&&\text{(Euler's Theorem)}\\
&=X[k]
\end{align*}
$$

Shift theorem ^2e4953
- shift in one domain -> phase shift in other domain
- assuming periodic signal - wrap around

$$
\begin{align*}
y[n] &= x[(n-m)\bmod N] && \text{(Shift by }m\text{)} \\
\\
Y[k] &= \sum_{n=0}^{N-1} x[n-m]\ e^{-j 2\pi k\frac{n}{N}}\\
&= \sum_{n=0}^{N-1} x[n-m]\ e^{-j 2\pi k\frac{n-m+m}{N}}\\
&= e^{-j 2\pi k\frac{m}{N}}\sum_{n=0}^{N-1} x[n-m]\ e^{-j 2\pi k\frac{n-m}{N}}\\
&= e^{-j 2\pi k\frac{m}{N}}\sum_{n'=-m}^{N-1-m} x[n']\ e^{-j 2\pi k\frac{n'}{N}}&& \text{(}x[n']\text{ is periodic)}\\
&= e^{-j 2\pi k\frac{m}{N}}X[k]\\
\\
\phi&=2\pi k\frac{m}{N} \\
\\
|Y[k]| &= |e^{-j 2\pi k\frac{m}{N}}| \ |X[k]|\\
&= |X[k]|\\
\end{align*}
$$

Symmetry about 0
- complex conjugate
- 

#### Inverse DFT
- frequency-doamin -> time-domain

$$
x[n] = \frac{1}{N}\sum_{k=0}^{N-1} X[k] \ e ^{-j 2\pi k\frac{n}{N}}
$$
> scaling is kept as convention

