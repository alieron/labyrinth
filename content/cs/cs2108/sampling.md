---
tags:
  - cs2108/chapter7
  - math/analysis
complete: false
next: /labyrinth/notes/cs/cs2108/DCT
prev: /labyrinth/notes/cs/cs2108/continuous_convolution

---
### Concept
#### Convolution with impulse
- in frequency domain
- shift

$$
\begin{align*}
G(f) &= \delta(f-nf_{s}) * X(f)\\
&= \int_{-\infty}^{\infty} \delta(\tau-nf_{s})X(f-\tau) \ d\tau\\
&=X(f-nf_{s}) && \text{(Shifted frequency distribution)}
\end{align*}
$$

![[freq_conv_impulse.png|400]]

With [impulse train](/labyrinth/notes/cs/cs2108/impulse_train)
- repeated at each impulse

$$
\begin{align*}
G(f) &= \left(\sum_{n=-\infty}^{\infty}  \delta(f-nf_{s}) \right)* X(f) \\
&= \sum_{n=-\infty}^{\infty}  \delta(f-nf_{s})* X(f) \\
&= \sum_{n=-\infty}^{\infty}  X(f - nf_{s}) \\
\end{align*}
$$


Sampling in time domain
- due to [convolution theorem](/labyrinth/notes/cs/cs2108/continuous_convolution#Convolution_theorem)
- using the [CTFT of impulse train](/labyrinth/notes/cs/cs2108/impulse_train#^3a14f5)

$$
\begin{align*}
G(f) &= \left(\sum_{n=-\infty}^{\infty} \delta(f-nf_{s}) \right)* X(f) \\
&= \mathcal{F}\left\{\mathcal{F}^{-1}\left\{\sum_{n=-\infty}^{\infty} \delta(f-nf_{s})\right\}\cdot x(t)\right\} \\
&= \mathcal{F}\left\{\frac{T_{s}}{2\pi}\sum_{n=-\infty}^{\infty} \delta(t-mT_{s})\cdot x(t)\right\} \\
\end{align*}
$$
> essentially, sampling - point-wise mult of signal with impulse train, is convolution with impulse train in freq domain -> explaining the periodic nature

#### Nyquist limit
- minimum sampling frequency needed to analyse a frequency
- the impulses need to be far apart enough to prevent overlaps of the freq distributions

$$
f_{s} >\underbrace{  2 f_{\text{max}} }_{ \text{Nyquist Rate} }
$$
> due to the complex conjugate symmetry for real signals, $X(f)=X^*(-f)$

Low pass filtering
- remove high frequencies
- prevent [aliasing](/labyrinth/notes/cs/cs2108/aliasing) at lower sampling rates

### Extra

| x(t) | time domain signal                     | -CTFT-> | X(om) | freq domain, non periodic  |
| ---- | -------------------------------------- | ------- | ----- | -------------------------- |
|      | point-wise mult                        |         |       | *                          |
| x[n] | impulse train                          | -CTFT-> | X[k]  | impulse train(freq domain) |
|      | V                                      |         |       | V                          |
| x[n] | discrete samples of time domain signal | -DTFT-> | X[k]  | freq domain, periodic      |

