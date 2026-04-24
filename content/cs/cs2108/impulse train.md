---
tags:
  - cs2108/chapter4
  - math/analysis
complete: false
prev: /labyrinth/notes/cs/cs2108/DFT
next: /labyrinth/notes/cs/cs2108/discrete_sampling

---
### Summary
DFT pairs
$$
\begin{align*}
\text{Impulse}\leftrightarrow \text{Constant:}&&&\delta[n]\xleftrightarrow{\text{DFT}}1\\
\\
\text{Constant}\leftrightarrow \text{Impulse:}&&&1\xleftrightarrow{\text{DFT}}N\delta[n]\\
\\
\text{Signal}\leftrightarrow \text{Shifted Impulse:}&&&e^{j 2\pi k_{0}\frac{n}{N}}\xleftrightarrow{\text{DFT}}N\delta[k-k_{0}]\\
\\
\text{Shift theorem:}&&&x[n-m]\xleftrightarrow{\text{DFT}}e^{-j 2\pi k\frac{m}{N}}X[k]\\
\end{align*}
$$

### Concept
#### Single impulse
- [kronecker delta](/labyrinth/notes/math/abstract_algebra/kronecker_delta)
- a linear map

$$
\delta[n] = \begin{cases}
1 & \text{if }n = 0 \\
0 & \text{otherwise}
\end{cases}
$$

Shifted impulse
$$
\delta[n-m] = \begin{cases}
1 & \text{if }n = m \\
0 & \text{otherwise}
\end{cases}
$$

#### Train of impulses
- impulse every period $T$

$$
\sum_{m=-\infty}^{\infty} \delta[n + Tm] = \begin{cases}
1 & \text{if }n=0,\pm T, \pm2T, \dots \\
0 & \text{otherwise}
\end{cases}
$$

[DFT](/labyrinth/notes/cs/cs2108/DFT) of impulse train
- is an impulse train in the other domain
- smaller sampling time -> larger sampling frequency

#### DFT pairs
Signal to shifted impulse
- this is how frequencies can be isolated

$$
\begin{gather*}
\text{let }x[n] = e^{j 2\pi k_{0}\frac{n}{N}} &&\text{(Signal in bin }k_{0}\text{)}\\
\\
\begin{aligned}
X[k] &= \sum_{n=0}^{N-1}  e^{j 2\pi k_{0}\frac{n}{N}} \cdot e^{-j 2\pi k\frac{n}{N}}\\
&=\sum_{n=0}^{N-1}  e^{j 2\pi (k_{0}-k)\frac{n}{N}}\\
\\
\text{if }k=k_{0}: & \sum_{n=0}^{N-1}  e^{j 2\pi (0)\frac{n}{N}} =\sum_{n=0}^{N-1}  1 = N \\
\\
\text{else:}&\text{ points about the unit circle}\to\text{cancel out}\\
\\
\therefore X[k] &= \begin{cases}
N & \text{if }k = k_{0} \\
0 & \text{otherwise}
\end{cases}\\
&= N\delta[k-k_{0}]
\end{aligned}
\end{gather*}
$$

Impulse
$$
\begin{gather*}
\text{let }x[n] = \delta[n] && \text{(Impulse at 0)}\\
\\
\begin{aligned}
X[k] &= \sum_{n=0}^{N-1}  \delta[n] \ e^{-j 2\pi k\frac{n}{N}} \\
&= e^{-j 2\pi k\frac{0}{N}}\\
&=0
\end{aligned}\\
\end{gather*}
$$

Constant
$$
\begin{gather*}
\text{let }x[n] = 1\\
\\
\begin{aligned}
X[k] &= \sum_{n=0}^{N-1} e^{-j 2\pi k\frac{n}{N}} \\
&=N\delta[k-0]\\
&=N\delta[k]
\end{aligned}\\
\end{gather*}
$$

### Application
DFT pair for sine and cosine
- using [complex exponential](/labyrinth/notes/math/imagine/complex_exponentials#^83fa5e)

$$
\begin{align*}
\text{let }x[n] &= \cos \left(2\pi k_{0}\frac{n}{N}\right)\\
&=\frac{1}{2}\left(e^{j 2\pi k_{0}\frac{n}{N}}+e^{-j 2\pi k_{0}\frac{n}{N}}\right)\\
\\
X[k] &= \frac{N}{2}(\delta[k-k_{0}]+\delta[k+k_{0}]) \\
&= \frac{N}{2}\delta[k-k_{0}]+\frac{N}{2}\delta[k+k_{0}] \\
\end{align*}
$$
![[dft_pair_cosine.png|300]]

$$
\begin{align*}
\text{let }y[n] &= \sin \left(2\pi k_{0}\frac{n}{N}\right)\\
&=\frac{1}{2j}\left(e^{j 2\pi k_{0}\frac{n}{N}}-e^{-j 2\pi k_{0}\frac{n}{N}}\right)\\
\\
Y[k] &= \frac{N}{2j}(\delta[k-k_{0}]-\delta[k+k_{0}]) \\
&= \frac{N}{2j}(\delta[k-k_{0}]-\delta[k+k_{0}]) \cdot j^{2}\cdot -1\\
&= \frac{-jN}{2}(\delta[k-k_{0}]-\delta[k+k_{0}])\\
&= \frac{-jN}{2}\delta[k-k_{0}]+\frac{jN}{2}\delta[k+k_{0}]\\
\end{align*}
$$
![[dft_pair_sine.png|300]]

> reflects the [even & odd](/labyrinth/notes/cs/cs2108/even_&_odd_functions) nature of cosine and sine