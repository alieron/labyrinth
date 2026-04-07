---
tags:
  - cs2108/chapter4
  - math/analysis
complete: false
prev: /labyrinth/notes/cs/cs2108/DFT
next: /labyrinth/notes/cs/cs2108/2D_fourier_transform

---
### Concept
#### Sampling frequency
- need not be related to the fundemental frequency

Analysis frequencies
- has the same periodicity as the sample being analysed

$$
f_{k}=\frac{k}{N}\cdot f_{s}, \quad k \in \mathbb{Z}
$$

Frequency bins
- continuous range of frequencies represented by one discrete frequency

$$
\frac{\Delta f}{f_{s}} = \frac{1}{N}
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

Nyquist-Shannon sampling theorem
