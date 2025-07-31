---
tags:
- ma1521/chapter1
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1521/limits_&_continuity
next: /labyrinth/notes/math/ma1521/differentiation_II
---
   
### Summary
Shortcut for limits of [rational functions](/labyrinth/notes/math/ma1521/polynomials#^e957d2), at infinity
$$
\begin{gather*}
\lim_{ x \to \infty } \frac{p(x)}{q(x)} = \begin{cases}
0 & if \ deg \ p < deg \ q \\
\frac{\text{leading coefficient of }p}{\text{leading coefficient of }q} & if \ deg \ p = deg \ q  \\
\infty \ or \ -\infty & if \ deg \ p > deg \ q 
\end{cases}
\end{gather*}
$$

Standard limits at infinity
$$
\begin{align*}
&\lim_{ x \to \infty } \frac{1}{x}=0 \\
\\
&\lim_{ x \to \infty } b^x=0, \ 0<b<1 && \text{(Convergent)}\\
\\
&\lim_{ x \to \infty } b^x=\infty, \ b>1 && \text{(Divergent)}\\
\\
&\lim_{ x \to \infty } e^{-x}=0
\end{align*}
$$
### Concept
Horizontal aymptote
$$
\lim_{ x \to \infty } f(x)=c\in \mathbb{R} \to y=c\text{ is a horizontal asymptote}
$$
### Application
Solving limits of rational functions
- divide by highest power

$$
\begin{align*}
\lim_{ x \to \infty } \frac{3x+2}{x^2-x+1} & = \lim_{ x \to \infty } \frac{\frac{3x}{x^2}+\frac{2}{x^2}}{\frac{x^2}{x^2}-\frac{x}{x^2}+\frac{1}{x^2}} = \lim_{ x \to \infty } \frac{\frac{3}{x}+\frac{2}{x^2}}{1-\frac{1}{x}+\frac{1}{x^2}} \\
& = \lim_{ x \to \infty } \frac{\cancelto{ 0 }{ \frac{3}{x} }+\cancelto{ 0 }{ \frac{2}{x^2} }}{1-\cancelto{ 0 }{ \frac{1}{x }}+\cancelto{ 0 }{ \frac{1}{x^2} }} = 0 \\
\\
\lim_{ x \to \infty } \frac{-x^2+x-1}{2x^2-3x+3} & = \lim_{ x \to \infty } \frac{-1+\frac{1}{x}-\frac{1}{x^2}}{2-\frac{3}{x}+\frac{3}{x^2}} \\
& = \frac{-1}{2} \\
\\
\lim_{ x \to \infty } \frac{x^2-x+1}{3x+2} & = \lim_{ x \to \infty } \frac{1-\frac{1}{x}+\frac{1}{x^2}}{\frac{3}{x}+\frac{2}{x^2}} \\
& = \frac{1}{0} = \infty
\end{align*}
$$

Solving limits of exponential functions with [rules of indices](/labyrinth/notes/math/math_fundementals/rules_of_indices)
- divide by largest exponent

$$
\begin{align*}
\lim_{ x \to \infty } \frac{5^{x+2}-2^{2x}}{5^{x-1}+3^{x+1}} & = \lim_{ x \to \infty }  \frac{25\cdot 5^x -4^x}{\frac{1}{5}\cdot 5^x + 3\cdot 3^x}  \\
& = \lim_{ x \to \infty }  \frac{25 -\frac{4^x}{5^x}}{\frac{1}{5} + 3\cdot \frac{3^x}{5^x}} \\
& = \lim_{ x \to \infty }  \frac{25 -\cancelto{ 0 }{ \left( \frac{4}{5} \right)^x }}{\frac{1}{5} + 3\cdot \cancelto{ 0 }{ \left( \frac{3}{5} \right)^x }} \\
& = \frac{25}{\frac{1}{5}} = 125
\end{align*}
$$

Limits with square root
- involves [absolute values](/labyrinth/notes/math/ma1521/absolute_values)

$$
\begin{align*}
\lim_{ x \to \infty } \frac{1}{x}\sqrt{ \frac{9x^{10}+3x-1}{(x^2+3x-5)^3(2x+5)^2} } & = \lim_{ x \to \infty } \frac{1}{-\sqrt{ x^2 }}\sqrt{ \frac{9x^{10}+3x-1}{4x^{8}+\dots} } && for \ x<0,\ \sqrt{ x^2 }=|x|=-x,\ \therefore x = -\sqrt{ x^2 } \\
& = \lim_{ x \to \infty } -\sqrt{ \frac{9x^{10}+3x-1}{4x^{10}+\dots} } \\
& = \lim_{ x \to \infty } -\sqrt{ \frac{9}{4} } \\
&= -\frac{3}{2}
\end{align*}
$$

Limits techniques
$$
\begin{align*}
\lim_{ x \to \infty } \left( \frac{\sin(2\ln x)}{\ln x}+2x\sin\left( \frac{1}{x} \right) \right) & = \lim_{ x \to \infty }\frac{\sin(2\ln x)}{\ln x}+\lim_{ x \to \infty }  2x\sin\left( \frac{1}{x} \right) \\
\\
\text{Identify domain: }& x\to \infty\\ 
& x>1 \implies\ln x>0 \\
\\
\text{Forming bounding functions: }& |\sin(2\ln x)| \leq 1 \\
& \left|\frac{\sin(2\ln x)}{\ln x}\right| \leq \frac{1}{\ln x} \quad \because \ln x > 0 \\
\\
\text{Squeeze Theorem: }& -\frac{1}{\ln x} \leq \frac{\sin(2\ln x)}{\ln x} \leq \frac{1}{\ln x} \\
& \lim_{ x \to \infty } \frac{1}{\ln x}=0,\ \lim_{ x \to \infty } -\frac{1}{\ln x}=-0=0 \\
& \therefore \lim_{ x \to \infty }\frac{\sin(2\ln x)}{\ln x}=0 \\
\\
\lim_{ x \to \infty }  2x\sin\left( \frac{1}{x} \right) & = 2\lim_{ x \to \infty }  \frac{x \frac{1}{x}\sin\left( \frac{1}{x} \right) }{\frac{1}{x}}\\
& = 2\lim_{ x \to \infty }  \frac{\sin\left( \frac{1}{x} \right) }{\frac{1}{x}} && \text{(Limits of Trig Functions)}\\
& = 2(1) \quad \because\lim_{ x \to \infty } \frac{1}{x} = 0 \\
\\
\\
\therefore\lim_{ x \to \infty } \left( \frac{\sin(2\ln x)}{\ln x}+2x\sin\left( \frac{1}{x} \right) \right) & = 0 + 2 = 2
\end{align*}
$$