---
tags:
  - cs2108/chapter6
  - math/analysis
complete: false
prev: /labyrinth/notes/cs/cs2108/discrete_convolution
next: /labyrinth/notes/cs/cs2108/impulse_train

---
### Concept

$$
(f*g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau) \ d\tau
$$
#### Convolution theorem
$$
\begin{align*}
y(t)&=(x*h)(t) \\
&= \int_{-\infty}^{\infty} x(\tau)h(t-\tau) \ d\tau \\
\\
\mathcal{F}\{y\}&= \mathcal{F}\{x*h\} &\text{(Fourier Transform)} \\
&=\int_{-\infty}^{\infty} \left(\int_{-\infty}^{\infty} x(\tau)h(t-\tau) \ d\tau\right)e^{-j\omega t} \ dt \\
&=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x(\tau)h(t-\tau)e^{-j\omega t} \ dt \ d\tau \\
&=\int_{-\infty}^{\infty} x(\tau) \int_{-\infty}^{\infty} h(t-\tau)e^{-j\omega t} \ dt \ d\tau \\
&=\int_{-\infty}^{\infty} x(\tau)e^{-j\omega\tau} \int_{-\infty}^{\infty} h(t-\tau)e^{-j\omega (t-\tau)} \ dt \ d\tau \\
\\
&\qquad u=t-\tau \qquad du = dt \\
\\
&=\int_{-\infty}^{\infty} x(\tau)e^{-j\omega\tau} \int_{-\infty}^{\infty} h(u)e^{-j\omega u} \ du \ d\tau \\
&=\int_{-\infty}^{\infty} x(\tau)e^{-j\omega\tau} \mathcal{F}\{h\} \ d\tau \\
&= \mathcal{F}\{h\} \int_{-\infty}^{\infty} x(\tau)e^{-j\omega\tau}\ d\tau \\
&= \mathcal{F}\{ h \}\mathcal{F}\{ x \} \\
\\
Y(\omega)&= H(\omega) X(\omega) \\
\end{align*}
$$

- convolution in one domain <-> multiplication of [fourier transform](/labyrinth/notes/cs/cs2108/fourier_transform) in the other

$$
\begin{align*}
y(t) &= (x*h)(t) \\
&=\mathcal{F}^{-1}\{ X\cdot H \} \\
&=\mathcal{F}^{-1}\{ \mathcal{F}\{ x \}\cdot \mathcal{F}\{ h \} \} \\
\end{align*}
$$
> more specifically, convolution in the time domain is equal to point-wise multiplication in the frequency domain
