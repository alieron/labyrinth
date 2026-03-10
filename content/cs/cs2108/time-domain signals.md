---
tags:
  - cs2108/chapter1
  - math/analysis
complete: false
next: /labyrinth/notes/cs/cs2108/basis_functions

---
### Concept
#### Sinusoids
$$
\begin{align*}
\text{Continuous:} &&& y_{sin}(t) = a \sin(2\pi ft) && y_{cos}(t)=b\cos(2\pi ft) \\
\\
\text{Discrete:} &&& t_{n} = n \Delta t \text{, }&&n\text{ samples over the range }t\\
&&& y_{sin}[n] = a \sin(2\pi ft_{n}) && y_{cos}[n] = b\cos(2\pi ft_{n})
\end{align*}
$$
> use the $[x]$  to represent a discrete variable

Phase shifts
- the waves may not be perfectly phased
- represent a phase shifted sinusoid as a **weighted sum** of sine and cosine, using [trigo identities](/labyrinth/notes/math/ma1301/trigo_identities)

$$
\begin{align*}
A \sin(\omega t + \phi) &= A\sin(\omega t)\cos \phi + A\cos(\omega t)\sin \phi \\
&= (A\cos \phi)\sin(\omega t) + (A\sin \phi)\cos(\omega t) \\
&= a\sin(\omega t) + b\cos(\omega t)
\end{align*}
$$
#### Sum of frequencies
- any sound is a combination of tones
- a large enough number of frequencies $K$, can represent a sound well enough

$$
\begin{gather*}
\text{Discrete tone of the }k\text{th frequency:} \qquad y[n,k] = a_{k}\sin(2\pi f_{k}t_{n}) + b_{k}\cos(2\pi f_{k}t_{n}) \\
\\
\begin{aligned}
sig[n] &= \sum_{k=1}^{K} y[n,k] \\
&= {\color{aqua} \sum_{k=1}^{K} [a_{k}\sin(2\pi f_{k}t_{n}) + b_{k}\cos(2\pi f_{k}t_{n})] } \\
&= \sum_{k=1}^{K} A_{k}\sin(2\pi f_{k}t_{n}+\phi_{k}) \\
\end{aligned}
\end{gather*}
$$

Periodic signals
- fundemental frequency -> defines the frequency at which the combined signal oscillates at
- repeats forever: sum of periodic functions -> periodic

- base case with 2 frequencies
$$
\begin{gather*}
h(t) = \sin(pt + a) + \sin(qt+b) \\
\\
h\text{ is periodic }\iff \frac{p}{q}\text{ is rational} \\
\\
\text{Fundemental frequency:}\qquad \omega_{0} = gcd(p, q) \\
\\
\text{Integer multiples of }\omega_{0}:\qquad p=n_{1}\omega_{0}, \ n_{1}\in \mathbb{Z} \quad \ q=n_{2}\omega_{0},\ n_{2}\in \mathbb{Z}
\end{gather*}
$$
> sine and cosine are interchangeable here since all that maters is the angluar frequency of each tone

- large number of frequencies
$$
\begin{gather*}
h(t)=\sum_{k=1}^{K} A_{k}\sin(\omega_{k} t + \phi_{k}) \\
\\
\omega_{k}=n_{k}\omega_{0}, \ n_{k}\in \mathbb{Z}\\
\\
\forall i,j \ \frac{\omega_{i}}{\omega_{j}}\in \mathbb{Q}
\end{gather*}
$$
### Extra
Angluar frequency
$$
\begin{gather*}
\omega=2\pi f, \ f = \frac{\omega}{2\pi} \\
\\
T = \frac{1}{f} =\frac{2\pi}{\omega}
\end{gather*}
$$