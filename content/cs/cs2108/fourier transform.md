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

### Application
CTFT of rectangular function
- [sinc function](/labyrinth/notes/cs/cs2108/sinc_function)

$$
\begin{gather*}
rect(t)=\begin{cases}
1 & -0.5\leq t\leq 0.5 \\
0 & \text{otherwise}
\end{cases} \\
\\
\mathcal{F}(rect(t)) =X(\omega)=\text{sinc}\left( \frac{\omega}{2\pi} \right)
\end{gather*}
$$