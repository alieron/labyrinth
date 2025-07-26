---
tags:
- ma1521/chapter1
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1521/functions
next: /labyrinth/notes/math/ma1521/limits_at_∞
---

   

### Summary
Rules ^c0031f
$$
\begin{align*}
\text{Sum/Difference Rule :}&&& \lim_{ x \to c }(f(x)\pm g(x))=\lim_{x → c} f(x)± \lim_{x → c} g(x) \\
\\
\text{Multiple Rule :}&&& \lim_{ x \to c }k \cdot f(x)=k\lim_{ x \to c }f(x) \\
\\
\text{Product Rule :}&&& \lim_{ x \to c }f(x)g(x)=\left(\lim_{ x \to c }f(x)\right)\left(\lim_{ x \to c }g(x)\right) \\
\\
\text{Quotient Rule :}&&& \lim_{ x \to c } \frac{f(x)}{g(x)} = \frac{ \lim\limits_{ x \to c } f(x)}{\lim\limits_{ x \to c }g(x)}, \ if \ \lim_{ x \to c }g(x)\neq0 \\
\\
\text{Composite Rule :}&&& \lim_{ x \to c }g(f(x)) = g(b)=g\left(\lim_{ x \to c }f(x)\right), \ b=\lim_{ x \to c }f(x), \ if \ g \text{ is continuous at } b
\end{align*}
$$

Trigonometric functions
$$
\begin{align*}
& \lim_{ x \to c } g(x) = 0 \\
\\
\implies &\lim_{ x \to c } \frac{\sin (g(x))}{g(x)} = \frac{g(x)}{\sin (g(x))} = 1 \\
\\
\implies &\lim_{ x \to c } \frac{\tan (g(x))}{g(x)} = \frac{g(x)}{\tan (g(x))} = 1 \\
\end{align*}
$$

Standard limit of trigonometric functions
$$
\begin{align*}
\lim_{ x \to 0 } \frac{\sin x}{x} = 1 \\
\\
\lim_{ x \to 0 } \frac{\tan x}{x} = 1 \\
\end{align*}
$$

### Concept
Limit exists
- behaviour around c

$$
\lim_{ x \to c } f(x) =L \iff \lim_{ x \to c^- } f(x) = \lim_{ x \to c^+ } f(x) =L
$$
> function converges on the same value when approaching from both sides

Continuous
- no breaks at c

$$
f(x) \text{ is continuous at } c \iff f(c)=\lim_{ x \to c } f(x) 
$$

Squeeze/sandwich theorem ^0ae1b5
- limit of a function bounded by two other functions

$$
\begin{gather*}
\forall x \in D \ g(x) ≤f (x) ≤h(x) \\
\\
\lim_{ x \to c } h(x)=\lim_{ x \to c } g(x)=L \implies \lim_{ x \to c } f(x)=L
\end{gather*}
$$
![[squeeze_theorem.png]]

Intermmediate value theorem
$$
f\text{ is continuous on }[a,b]\text{ and }f(a)\leq k\leq f(b) \implies k=f(c)\ for \ some \ c\in[a,b]
$$

Definition of limit
- by making $x$ as close as possible to $c$, we make $f(x)$ as close to $L$
- for each degree of closeness to $c$, there is a corresponding closeness to $L$

$$
\begin{gather*}
for \ \lim_{ x \to c } f(x) = L \\
\\
\forall\delta \in \mathbb{R} \ \exists\epsilon \in \mathbb{R} \ 0< |x-c|<\delta \implies |f(x)-L|<\epsilon
\end{gather*}
$$

### Application
Limits of reciprocal
$$
\begin{align*}
\lim_{ x \to 0^- } \frac{1}{x} & = -\infty \\
\\
\lim_{ x \to 0^+ } \frac{1}{x} & = \infty \\
\\
\therefore \lim_{ x \to 0 } \frac{1}{x} & = DNE 

\end{align*}
$$

Limits with [absolute values](/labyrinth/notes/math/ma1521/absolute_values)
$$
\begin{align*}
\lim_{ x \to -3 } \frac{|x|-23x-72}{x^{2}-9} & = \lim_{ x \to -3 } \frac{-x-23x-72}{x^{2}-9} && for \ x<0, \ |x|=-x \\
& = \lim_{ x \to -3 } \frac{-24(x+3)}{(x-3)(x+3)} \\
& = \lim_{ x \to -3 } \frac{-24}{x-3} \\
& = \frac{-24}{-6} = 4
\end{align*}
$$

Applying standard limits of trigonometric functions
$$
\begin{align*}
\lim_{ x \to 0 } \frac{4x\sin (3x)}{\tan^2(4x)} & = \lim_{ x \to 0 } \frac{4x\sin (3x)}{\tan^2(4x)}\cdot \frac{3x}{3x}\cdot \frac{(4x)^2}{(4x)^2} \\
& = \lim_{ x \to 0 } \frac{\frac{\sin (3x)}{3x}}{\left( \frac{\tan(4x)}{4x} \right)^2}\cdot \frac{\cancel{ 4x }\cdot 3x}{(4x)^\cancel{ 2 }} && x\to0, \ 3x\to 0 \ and \ 4x\to 0 \\
& = \frac{3}{4} \\
\\
\lim_{ x \to 3 } \left( \frac{\tan(2\ln(x-2))}{3\ln(x-2)} \right)^3 & = \lim_{ x \to 3 } \left( \frac{2}{3}\cdot\frac{\tan(2\ln(x-2))}{2\ln(x-2)} \right)^3 && let \ y=2\ln(x-2), \ x\to3, \ y\to0 \\
& = \lim_{ y \to 0 } \left( \frac{2}{3}\cdot\frac{\tan y}{y} \right)^3 \\
& = \frac{8}{27} \\
\\
\lim_{ x \to 1 } \frac{x^{2}-5x+4}{\tan(x^{2}-x)} & = \lim_{ x \to 1 } \frac{(x-4)(x-1)}{\tan(x(x-1))}\cdot \frac{x}{x}\cdot \frac{x-4}{x-4} \\
& = \lim_{ x \to 1 } \frac{x(x-1)}{\tan(x(x-1))}\cdot \frac{x-4}{x} && let\ y = x(x-1), \ x\to1, \ y\to 0 \\
& = \lim_{ y \to 0 } \frac{y}{\tan y}\cdot \lim_{ x \to 1 } \frac{x-4}{x} \\
& = 1\cdot -3 = -3
\end{align*}
$$

Limits with trigonometric functions
$$
\begin{align*}
\lim_{ x \to 0^+ } (x^2\cot(2x)\csc^2(3\sqrt{ x })) & = \lim_{ x \to 0^+ } \left( x^2 \frac{1}{\tan(2x)} \frac{1}{\sin^2(3\sqrt{ x })} \right)\\
& = \lim_{ x \to 0^+ } \left( \frac{x^2}{18x^2} \frac{2x}{\tan(2x)}\left(\frac{3\sqrt{ x }}{\sin(3\sqrt{ x })}\right)^2 \right)\\
& = \lim_{ x \to 0^+ } \left( \frac{1}{18} \frac{2x}{\tan(2x)} \left(\frac{3\sqrt{ x }}{\sin(3\sqrt{ x })}\right)^2 \right)\\
& = \frac{1}{18}\lim_{ x \to 0^+ }\frac{2x}{\tan(2x)}\times\lim_{ x \to 0^+ }\left(\frac{3\sqrt{ x }}{\sin(3\sqrt{ x })}\right)^2\\
& = \frac{1}{18}
\end{align*}
$$

Squeeze theorem and absolute
$$
\begin{gather*}
-|f(x)| \leq f(x)\leq |f(x)| \\
\\
if \ \lim_{ x \to c } |f(x)| = 0 \\
then \  \lim_{ x \to c } -|f(x)| = 0 \\
\\
\therefore \lim_{ x \to c } |f(x)| =  \lim_{ x \to c } -|f(x)| =0 \implies \lim_{ x \to c } f(x) = 0
\end{gather*}
$$

###### Extra
Distributes with simple arithmetic
$$
\lim_{ x \to c }(f(x) \ \begin{array}{}+\\[-20pt]-\\[-20pt] \times \\[-20pt] \div \end{array} \ g(x))=\lim_{ x \to c }f(x) \ \begin{array}{}+\\[-20pt]-\\[-20pt] \times \\[-20pt] \div \end{array} \ \lim_{ x \to c }g(x)
$$