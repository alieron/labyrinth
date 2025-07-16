---
tags:
- ma1521/chapter0
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1521/absolute_values)   [Next](/labyrinth/notes/math/ma1521/limits_&_continuity)
### Summary
Real-valued function, codomain is the set of real numbers
$$
\begin{align*}
f: \ A \longrightarrow \mathbb{R}
\end{align*}
$$
> Surjective -> each $y$ has at least one $x$
> Injective -> each $y$ has at most one $x$
> Bijective -> one-to-one correspondence, each $y$ has exactly one $x$

Domain and range of common functions
$$
\begin{gather*}
f(x)=x^2 \\
\\
\text{Domain: }\mathbb{R} \quad \text{Range: }[0,\infty)\\
\\
f(x)=\sqrt{ x } \\
\\
\text{Domain: }[0,\infty) \quad \text{Range: }[0,\infty)\\
\\
f(x)=-\sqrt{ x } \\
\\
\text{Domain: }[0,\infty) \quad \text{Range: }[0,-\infty)\\
\\
f(x)=\frac{1}{x} \\
\\
\text{Domain: }\mathbb{R}\setminus \{ 0 \} \quad \text{Range: }\mathbb{R}\setminus \{ 0 \}\\
\\
f(x)=a^x, \ a>0\\
\\
\text{Domain: }\mathbb{R} \quad \text{Range: }\mathbb{R}^+\\
\\
f(x)=\log_{a} x\\
\\
\text{Domain: }\mathbb{R}^+ \quad \text{Range: }\mathbb{R}\\
\\
f(x)=\sin x, \ f(x)=\cos x\\
\\
\text{Domain: }\mathbb{R} \quad \text{Range: }[-1,1]\\
\end{gather*}
$$
### Concept
Domain, codomain and range
$$
\begin{gather*}
f: \ A \longrightarrow B \\
such \ that \ a\in A \ is \ assigned \ to \ f(a) \in B \\
\\
\text{Domain: } A \quad \text{Codomain: }B \\
\text{Range: }\left\{\begin{array}{c|c} f(x)\in B & x \in B \end{array}\right\}
\end{gather*}
$$

[Inverse](/labyrinth/notes/math/math_fundementals/inverse_functions) functions
$$
\begin{gather*}
f: \ A \longrightarrow B \\
f^{-1}: \ B \longrightarrow A \\
\\
f^{-1}(f(x)) = x, \ x\in A
\end{gather*}
$$

Composite functions
$$
\begin{gather*}
f: \ A \longrightarrow B \\
g: \ B \longrightarrow C \\
\\
g \circ f(x)= g(f(x)), \ x\in A \\
\\
g \circ f: \ A \longrightarrow C
\end{gather*}
$$

Mapping
$$
\begin{align*}
\text{Injective:} & \quad a,b\in A, \ f(a)=f(b) \iff a=b \\
& \quad f(x_{1}) = f(x_{2}) \iff x_{1} = x_{2}\\
\\
\text{Surjective:} & \quad b\in B, \ there\ is\ an\ a\in A, \ such\ that\ f(a)=b \\
& \quad f(x) = y
\end{align*}
$$
### Application
Domain and range
$$
\begin{gather*}
f(x) = x^2 − x + 1 \\
\\
Domain: \ \mathbb{R} \\
Range: \ [\frac{3}{4},\infty)
\end{gather*}
$$

Domain of common functions
$$
\begin{gather*}
\frac{1}{x} & undefined \ for \ x = 0 \\
\\
\sqrt{ x } & undefined \ for \ x < 0 \\
\\
\ln x & undefined \ for \ x \leq 0 \\
\end{gather*}
$$

Determinining range with [inverse functions](/labyrinth/notes/math/math_fundementals/inverse_functions)
$$
\begin{gather*}
f(x) = \frac{1}{x-1} \\
\\
\text{Domain: } \mathbb{R} \setminus \{ 1 \}, \ \because x=1, \ f(x) = undefined \\
\text{Range: } \mathbb{R} \setminus \{ 0 \}, \ \because y = 0, \ f^{-1}(y) = undefined \\
\\
f^{-1}(y) = x =\frac{1}{y} + 1
\end{gather*}
$$
$$
\begin{gather*}
f(x) = x + 5, \ g(x) = x^2 − 3 \\
h(x)=g(f(x)) = (x+5)^2 - 3 \\
\\
Domain: \ \mathbb{R} \\
Range: \ [-3, \infty) \\
\\
h^{-1}(y) = x = \pm\sqrt{ y+3 } - 5
\end{gather*}
$$

Proving that if $f^{-1}$ exists, $f$ must be bijective
$$
\begin{gather*}
f^{-1}(f(x)) = x \\
f(f^{-1}(y)) = y \\
\\
f(x_{1}) = f(x_{2}) \\
f^{-1}(f(x_{1})) = f^{-1}(f(x_{2})) \\
x_{1}=x_{2} \ \therefore f\ is\ injective \\
\\
f(x) = f(f^{-1}(y)) = y \ \therefore f\ is\ surjective
\end{gather*}
$$