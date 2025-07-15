---
tags:
- ma1301/chapter3
- math/calculus
complete: true
index: null
---
[Previous](/labyrinth/notes/math/ma1301/optimization)   [Next](/labyrinth/notes/math/ma1301/integration_by_parts)
### Summary
Standard integrals
$$
\int k \ dx = \int kx^0 \ dx = k\int x^0 \ dx = kx + C \\
\\
$$
$$
\begin{align*}
\begin{split}
& \int x^n \ dx = \frac{x^{n+1}}{n+1} + C, \ n\neq -1\\
\\
& \int \frac{1}{x} \ dx = \ln |x| + C \\
\\
& \int e^x \ dx = e^x +C \\
\end{split}
\qquad \qquad
\begin{split}
& \int (ax+b)^n \ dx = \frac{(ax+b)^{n+1}}{a(n+1)} +C, \ n\neq -1 \\
\\
& \int \frac{1}{ax+b} \ dx = \frac{1}{a} \ln |ax+b| + C \\
\\
& \int e^{ax+b} \ dx = \frac{1}{a}e^{ax+b} +C \\
\end{split}
\end{align*}
$$
$$
\int \ln x \ dx = x\ln x - x + C
$$
$$
\int a^x \ dx = \frac{a^x}{\ln a} +C \\
$$

Trigo integrals
$$
\begin{align*}
%\begin{split}
%& \int \sin x \ dx = -\cos x + C \\
%\\
%& \int \cos x \ dx = \sin x + C \\
%\\
%& \int \tan x \ dx = \ln|\sec x| + C \\
%\\
%\end{split}
%\qquad \qquad
%\begin{split}
\int \sin (ax +b) \ dx & = -\frac{1}{a}\cos (ax+b) + C \tag{1} \\
\\
\int \cos (ax+b) \ dx & = \frac{1}{a}\sin (ax+b) + C \tag{2} \\
\\
\int \tan (ax+b) \ dx & = \frac{1}{a}\ln|\sec (ax+b)| + C \tag{3}\\
\\
\int \sec (ax+b) \ dx & = \frac{1}{a}\ln|\sec (ax+b)+\tan (ax+b)| + C \tag{4}\\
\\
\int \csc (ax+b) \ dx & = -\frac{1}{a}\ln|\csc (ax+b)+\cot(ax+b)| + C \tag{5}\\
\\
\int \cot (ax+b) \ dx & = -\frac{1}{a}\ln|\csc (ax+b)| + C \tag{6}\\
\\
\int \sec^2 (ax+b) \ dx & = \frac{1}{a}\tan (ax+b) + C \tag{7}\\
\\
\int \csc^2 (ax+b) \ dx & = -\frac{1}{a}\cot (ax+b) + C \tag{8}\\
\\
\int \sec (ax+b)\cdot \tan(ax+b) \ dx & = \frac{1}{a}\sec (ax+b) + C \tag{9}\\
\\
\int \csc (ax+b)\cdot \cot(ax+b) \ dx & = -\frac{1}{a}\csc (ax+b) + C \tag{10}\\
\\
\int \frac{1}{a^2+(x+b)^2} \ dx & = \frac{1}{a}\tan ^{-1} \left(\frac{x+b}{a}\right) + C \tag{11}\\
\\
\int \frac{1}{\sqrt{ a^2-(x+b)^2 }} \ dx & = \sin ^{-1} \left(\frac{x+b}{a}\right) + C \tag{12}\\
\\
\int \frac{-1}{\sqrt{ a^2-(x+b)^2 }} \ dx & = \cos ^{-1} \left(\frac{x+b}{a}\right) + C \tag{13}\\
\\
\int \frac{1}{a^2-(x+b)^2} \ dx & = \frac{1}{2a}\ln \left|\left(\frac{x+b+a}{x+b-a}\right)\right| + C \tag{14}\\
\\
\int \frac{1}{(x+b)^2-a^2} \ dx & = \frac{1}{2a}\ln \left|\left(\frac{x+b-a}{x+b+a}\right)\right| + C \tag{15}\\
\\
\int \frac{1}{\sqrt{ (x+b)^2+a^2 }} \ dx & = \ln \left|(x+b)+\sqrt{ (x+b)^2 + a^2 }\right| + C \tag{16}\\
\\
\int \frac{1}{\sqrt{ (x+b)^2-a^2 }} \ dx & = \ln \left|(x+b)+\sqrt{ (x+b)^2 - a^2 }\right| + C \tag{17}\\
%\end{split}
\end{align*}
$$
### Concept
Anti-derivative/indefinite integral
$$
\begin{align*}
F \ is \ an \  anti&{-}derivative \ of \ f, \\ C \ is \ the \ con&stant \ of \ integration\\
\\
\frac{d}{dx}(F+C)& = \frac{dF}{dx} = f(x)\\
& or \\
F(x) + C & = \int f(x)\ dx
\end{align*}
$$
### Application
Solving $\int\frac{6}{(x-1)(x^2-1)} \ dx$, using [partial fractions](/labyrinth/notes/math/ma1301/partial_fractions)
$$
\begin{align*}
\int\frac{6}{(x-1)(x^2-1)} \ dx & = \int\frac{6}{(x-1)(x-1)(x+1)} \ dx \\
& = \int\frac{6}{(x-1)^2(x+1)} \ dx \\
& = \int\left(\frac{A}{x-1} + \frac{B}{(x-1)^2} + \frac{C}{x+1}\right)  \ dx && \text{(Partial Fraction Expansion)}\\
& = \int\left(\frac{\frac{3}{2}}{x-1} + \frac{3}{(x-1)^2} + \frac{\frac{3}{2}}{x+1}\right) \ dx \\
& = -\frac{3}{2}\int (x-1)^{-1} \ dx + 3 \int (x-1)^{-2} \ dx + \frac{3}{2} \int (x+1)^{-1} \ dx \\
& = -\frac{3}{2} \ln |x-1| + \frac{3(x-1)^{-1}}{-1} + \frac{3}{2} \ln |x+1| + C \\
& = \frac{3}{2} \ln |x+1|-\frac{3}{2} \ln |x-1|-\frac{3}{x-1}+C
\end{align*}
$$

Solving $\int \frac{1}{x^2+2x+5}\ dx$, using [completing the square](/labyrinth/notes/math/math_fundementals/quadratic_equations#^c3dbf2)
$$
\begin{align*}
\int \frac{1}{x^2+2x+5}\ dx & = \int \frac{1}{x^2+2x+\left(\frac{2}{2(1)}\right)^2-\left(\frac{2}{2(1)}\right)^2+5}\ dx && \text{(Completing the Square)} \\
& = \int \frac{1}{(x+1)^2+4}\ dx && \text{(Apply Trigo Integral (11))} \\
& = \frac{1}{2}\arctan\left(\frac{x+1}{2}\right) + C\\
\end{align*}
$$

Solving $\int \frac{3\cos^2 x+2}{\sin^2 x} \ dx$, using [trigo identities](/labyrinth/notes/math/ma1301/trigo_identities)
$$
\begin{align*}
\int \frac{3\cos^2 x+2}{\sin^2 x} \ dx & = \int \frac{3\cos^2 x}{\sin^2 x} +\frac{2}{\sin^2 x} \ dx && \text{(Trigo Identities)}\\
& = \int 3\cot^2 x + 2\csc^2 x \ dx \\
& = \int 3(\csc^2 x-1) + 2\csc^2 x \ dx \\
& = \int 5\csc^2 x-3 \ dx \\
& = -5\cot x -3x + C
\end{align*}
$$

Solving $\int(2\cos 2x-\sin 2x)^2 \ dx$
$$
\begin{align*}
\int(2\cos 2x-\sin 2x)^2 \ dx & = \int 4\cos^2 2x-4\cos 2x\sin 2x + \sin^2 2x \ dx \\
& = \int 3\underset{ \frac{1}{2}(\cos 2(2x)+1 }{ \cancel{ \cos^2 2x } }-2\underset{ \sin 2(2x) }{ \cancel{ (2\cos 2x\sin 2x) } } + \underset{ 1 }{ \cancel{ (\cos^2 2x +\sin^2 2x) } } \ dx\\
& = \int \frac{3}{2}\cos 4x+\frac{3}{2}-2\sin 4x+1 \ dx\\
& = \frac{3}{8}\sin 4x+\frac{1}{2}\cos 4x+\frac{5}{2}x + C
\end{align*}
$$