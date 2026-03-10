---
tags:
  - cs2108/chapter4
  - math/analysis
complete: false
prev: /labyrinth/notes/cs/cs2108/fourier_series
next: /labyrinth/notes/cs/cs2108/DFT

---
### Concept
#### Continuous time fourier transform(CTFT)
- for non-periodic signals
- continuous time -> continuous frequency

$$
\begin{gather*}
F(\omega) = \int_{-\infty}^{\infty} f(t) \ e^{-j \omega t} \ dt \\
\\
\text{Lowest frequency: } T\to \infty, \ \frac{1}{T}\to0 & \text{(Continuous frequency axis)}
\end{gather*}
$$
#### Inverse fourier transform
- frequency domain to time domain representation

$$
f(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} F(\omega)\ e^{j\omega t} \ d\omega
$$
