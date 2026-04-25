---
tags:
  - cs2108/chapter4
  - math/analysis
complete: false
next: /labyrinth/notes/cs/cs2108/2D_fourier_transform
prev: /labyrinth/notes/cs/cs2108/impulse_train

---
### Concept
#### Sampling frequency
- need not be related to the fundemental frequency

Frequency bins
- when performing the [DFT](/labyrinth/notes/cs/cs2108/DFT)
- continuous range of frequencies represented by one discrete frequency

$$
\begin{gather*}
\frac{\Delta f}{f_{s}} = \frac{1}{N}\\
\\
\Delta f = \frac{f_{s}}{N}\\
\\
N = f_{s}\cdot T\\
\Delta f=\frac{f_{s}}{f_{s}T}= \frac{1}{T}
\end{gather*}
$$
> only duration can affect bin size

Analysis frequencies
- has the same periodicity as the sample being analysed
- `kth` frequency bin

$$
\begin{gather*}
f_{k}=\frac{k}{N}\cdot f_{s}, \quad k \in \mathbb{Z}\\
\\
k = \frac{f_{k}}{f_{s}}\cdot N
\end{gather*}
$$

Frequency [aliasing](/labyrinth/notes/cs/cs2108/aliasing)
- going beyond $N$ frequencies

$$
\begin{align*}
f_{N+1} &= \frac{N+1}{N}\cdot f_{s} \\
&= \frac{N}{N}\cdot f_{s}+\frac{1}{N}\cdot f_{s} \\
&= f_{s} + f_{1}
\end{align*}
$$
> this is why the frequency domain is also periodic

$$
\begin{align*}
f_{N-1} &= \frac{N-1}{N}\cdot f_{s} \\
&= \frac{N}{N}\cdot f_{s}-\frac{1}{N}\cdot f_{s} \\
&= f_{s} - f_{1}
\end{align*}
$$

Zero-padding
- add zero samples to the signal

$$
\begin{gather*}
x_{\text{padded}}[n] = \begin{cases}
x[n] & 0\leq n< N \\
0 & N\leq n< N_{\text{new}}
\end{cases}\\
\\
\Delta f = \frac{f_{s}}{N_{\text{new}}} = \frac{f_{s}}{f_{s}T + (N_{\text{new}}-N)}
\end{gather*}
$$
> artificially extend the signal to lower bin size
