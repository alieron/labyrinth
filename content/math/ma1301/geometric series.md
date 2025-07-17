---
tags:
- ma1301/chapter1
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1301/arithmetic_series)   [Next](/labyrinth/notes/math/ma1301/binomial_theorem)

### Summary
Basic formulae
$$
\begin{align*}
nth \ term \ in \ a \ sequence &: \qquad a_{n} = a_{1}r^{n-1} \\
\\
Sum \ of \ a \ converging \ series &: \qquad S_{n} = \frac{a_{1}(1-r^n)}{1-r}, \ |r|<1 \\
\\
Sum \ of \ a \ diverging \ series &: \qquad S_{n} = \frac{a_{1}(r^n-1)}{r-1}, \ |r|>1 \\
\end{align*}
$$

Derived formulae
$$
\begin{align*}
S_\infty & = \frac{a_{1}}{1-r}, \ \because when \ |r|<1, \ r^\infty =0 \\
\\
S_{n} & = n\cdot a_{1}, \ when \ r = 1
\end{align*}
$$

[Summation](/labyrinth/notes/math/math_fundementals/summation_notation) notation
$$
\begin{align*}
\sum^n_{i=m} a_{i} , & \ where \ a_{i} \ has \ the \ form, \ r^i \\
\end{align*}
$$

#

## Concept
Geometric sequence
$$
\begin{align*}
\lbrace a_{i} \rbrace^{n}_{i=1}: \quad a_{1}, \ & a_{2}, \ a_{3}, \ \dots \ , \ a_{n} \\
\\
such \ that: \quad a_{2} & = a_{1}r \\
\\
a_{3} & = a_{2}r = a_{1}r^2
\end{align*}
$$

Proving geometric progression
$$
\begin{align*}
\frac{a_{n}}{a_{n-1}} & =\frac{a_{n+1}}{a_{n}}=r \\
\\
ie. & \ 1, \ -4, \ 16: \\
\\
\frac{a_{2}}{a_{1}} & =\frac{-4}{1} = -4 \\
\frac{a_{3}}{a_{2}} & = \frac{16}{-4} = -4 \\
d & = -4, \ \therefore geometric \ sequence(alternating)
\end{align*}
$$

### Application
Expressing 0.321321321... as a rational number
$$
\begin{align*}
Method \ 1: \qquad & \\
let \ a_{1} & = 0.321, \ r = 0.001 \\
S_{\infty} & =\frac{a_{1}}{1-r} \\
& = \frac{0.321}{1-0.001} = \frac{0.321}{0.999} = \frac{107}{333}
\\
Method \ 2: \qquad &\\
let \ S & = 0.321321321\dots \\
1000S & = 321.321321321\dots  \\
999S & =321.321321321\dots - 0.321321321\dots \\
& = 321 \\
\therefore S & =\frac{321}{999}=\frac{107}{333} \\ 
\end{align*}
$$

Expressing 1.1232323... as a rational number
$$
\begin{align*}
let \ S & = 1.1232323\dots \\
& = 1.1 + (0.0232323\dots) \\
& = \frac{11}{10} + (0.023 + 0.00023 + 0.0000023 + \dots) \\
& = \frac{11}{10} + \frac{0.023}{1-0.01} = \frac{11}{10}+\frac{23}{990} \\
& = \frac{556}{495}
\end{align*}
$$