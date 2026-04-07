---
tags:
  - cs2108/chapter6
  - math/analysis
complete: false
prev: /labyrinth/notes/cs/cs2108/2D_fourier_transform
next: /labyrinth/notes/cs/cs2108/continuous_convolution

---
### Concept
- slinding a kernel(window) over the signal
- take the weighted sum
- taking the weighted average of the signal over the window, giving a blurring effect
#### Linear convolution
- pad the rest to 0

$$
\begin{align*}
&\text{for }x\text{ of length }N\text{, and }h\text{ of length }K\\
\\
(x*h)[n]&= \sum_{k=0}^{K-1} h[k]x[n-k] \\
&= h[0]x[n]+h[1]x[n-1]+\dots+h[K-1]x[n-K+1]
\end{align*}
$$

$$
\begin{gather*}
x=\begin{array} {|c | c|}
\hline
x[0] & x[1] & x[2] & \dots & x[N-1] \\
\hline
\end{array} \\
h=\begin{array} {|c | c|}
\hline
h[0] & h[1] & h[2] & \dots & h[K-1] \\
\hline
\end{array} \\
\\
\begin{array} {|c|c|}
\hline
&  &  & x[0] & x[1] & x[2] & \dots \\
\dots & h[2] & h[1] & h[0] \\
\hline
\end{array} \\
\\
y[0] = x[0]h[0] \\
\\
\begin{array} {|c|c|}
\hline
&  & x[0] & x[1] & x[2] & \dots \\
\dots & h[2] & h[1] & h[0] \\
\hline
\end{array} \\
\\
y[1] = x[0]h[1] + x[1]h[0] \\
\\
\dots\\
\\
\begin{array} {|c|c|}
\hline
\dots & x[N-3] & x[N-2] & x[N-1] \\
&  & h[K-1] & h[K-2] & h[k-3] & \dots \\
\hline
\end{array} \\
\\
y[N+K-2] = x[N-2]h[K-1] + x[N-1]h[K-2]\\
\\
\begin{array} {|c|c|}
\hline
\dots & x[N-3] & x[N-2] & x[N-1] \\
 & &  & h[K-1] & h[K-2] & h[K-3] & \dots \\
\hline
\end{array} \\
\\
y[N+K-1] = x[N-1]h[K-1]
\end{gather*}
$$
> kernel is "flipped", weighted sum of overlapping, rest is assumed to be 0
#### Circular convolution
- wrap the signal instead of padding to 0
- analogous to [periodic signals](/labyrinth/notes/cs/cs2108/fourier_series#Fourier_series)
### Application
Standard example
$$
\begin{gather*}
[1,2,3]*[4,5,6] \\
\\
\begin{aligned}
y[0] &= 4\cdot 1 = 4 \\
y[1] &= 4\cdot 2 + 5\cdot 1 = 13 \\
y[2] &= 4\cdot 3 + 5\cdot 2 + 6\cdot 1 =28 \\
y[3] &= 5\cdot 3 + 6 \cdot 2 = 27 \\
y[4] &= 6\cdot 3 = 18
\end{aligned} \\
\\
[1,2,3]*[4,5,6] = [4,13,28,27,18]
\end{gather*}
$$

[Polynomial](/labyrinth/notes/math/ma1521/polynomials) coefficients
$$
\begin{gather*}
[1,2,3]*[4,5,6] = [{\color{red}4},{\color{orange}13},{\color{yellow}28},{\color{green}27},{\color{royalblue}18}] \\
\\
(1+2x+3x^{2})(4+5x+6x^{2}) \\
\\
\begin{array}{c|c}
 & 1 & 2x & 3x^{2} \\
\hline
4 & {\color{red} 4 } & {\color{orange} 8x } & {\color{yellow} 12x^{2} } \\
\hline
5x & {\color{orange} 5x } & {\color{yellow} 10x^{2} } & {\color{green} 15x^{3} } \\
\hline
6x^{2} & {\color{yellow} 6x^{2} } & {\color{green} 12x^{3} } & {\color{royalblue}18x^{4} }
\end{array} \\
\\
(1+2x+3x^{2})(4+5x+6x^{2}) = {\color{red}4}+{\color{orange}13x}+{\color{yellow}28x^{2}}+{\color{green}27x^{3}}+{\color{royalblue}18x^{4}}
\end{gather*}
$$
> multiplication of polynomials <=> convolution of coefficients
> hints that we can find the convolution using multiplication