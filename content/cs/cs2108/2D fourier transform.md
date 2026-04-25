---
tags:
  - cs2108/chapter5
  - math/analysis
complete: false
prev: /labyrinth/notes/cs/cs2108/frequency_bins
next: /labyrinth/notes/cs/cs2108/discrete_convolution

---
### Summary
2D DFT and inverse 2D DFT
$$
\begin{align*}
\text{2D DFT:} &&& G[k,l]=\sum_{u=0}^{M-1}\sum_{v=0}^{N-1} g[u,v]\ e^{-j 2\pi (k\frac{u}{M}+l\frac{v}{N})} \\
\\
\text{Inverse 2D DFT:} &&& g[u,v] = \frac{1}{MN}\sum_{k=0}^{M-1}\sum_{l=0}^{N-1} G[k,l] \ e ^{j 2\pi (k\frac{u}{M}+l\frac{v}{N})}
\end{align*}
$$
### Concept
#### 2D signals
Sampling frequency
- each pixel is a sample

$$
f_{s}=\frac{N}{d}\quad \text{(samples per m)}
$$

Resolution
- same concept as [frequency bins](/labyrinth/notes/cs/cs2108/frequency_bins)

$$
\Delta f = \frac{f_{s}}{N} = \frac{1}{d}
$$
> notice its the same relationship as with frequency and period

#### 2D [DFT](/labyrinth/notes/cs/cs2108/DFT)
- use cycles per distance(metres) instead
- used in images
- apply the DFT in both the horizontal and vertical axes

$$
G[k,l]=\sum_{u=0}^{M-1}\sum_{v=0}^{N-1} g[u,v]\ e^{-j 2\pi (k\frac{u}{M}+l\frac{v}{N})} 
$$

![[2d_signal.png|360]]

#### Inverse 2D DFT
$$
g[u,v] = \frac{1}{MN}\sum_{k=0}^{M-1}\sum_{l=0}^{N-1} G[k,l] \ e ^{j 2\pi (k\frac{u}{M}+l\frac{v}{N})}
$$

### Application
Sampling frequency and resolution
![[2d_wave.png|500]]

$$
\begin{align*}
\text{Horizontal:}&& f_{s}&=\frac{640}{2} = 320\\
&& \Delta f&=\frac{320}{640} = \frac{1}{2} = 0.5\text{ cycles/m}\\
\\
\text{Vertical:}&& f_{s}&=\frac{480}{1.6} = 300\\
&& \Delta f&=\frac{300}{480} = \frac{1}{1.6} = 0.625\text{ cycles/m}
\end{align*}
$$

Resulting DFT peaks
$$
\begin{align*}
\text{Horizontal sine:}&&g[u,v] &= \sin \left(2\pi fu \right) \qquad f = 2.5\text{ cycles/m}\\
\\
&& \Delta f&=\frac{320}{640} = \frac{1}{2} = 0.5\text{ cycles/m}\\
\\
&& k_{0}&= \frac{f}{\Delta f} = 5 && \text{(}k_{0}\text{th bin)}\\
\\
&& G[k,l] &= \frac{N}{2}(\delta[k-k_{0}]+\delta[k+k_{0}]) \\
&& &= \frac{N}{2}\delta[k-k_{0}]+\frac{N}{2}\delta[k+k_{0}]
\end{align*}
$$
