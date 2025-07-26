---
tags:
- ma1301/chapter2
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1301/telescoping_series
next: /labyrinth/notes/math/ma1301/cartesian_differentiation
---

   

### Summary
Basic rules, or in [Lagrange notation](/labyrinth/notes/math/math_fundementals/derivative_notation#^753b98) ^87dfa9
$$
\begin{align*}
with \ u & = f(x), \ v= g(x), \\
\\
\text{Constant Rule:}& \qquad \frac{d}{dx}(c) = 0\\
\\
\text{Multiple Rule:}& \qquad \frac{d}{dx}(c\cdot u) = c \cdot \frac{du}{dx} \\
\\
\text{Sum/Difference Rule:}& \qquad \frac{d}{dx}(u\pm v)=\frac{du}{dx}\pm \frac{dv}{dx} \\
\\
\text{Product Rule:}& \qquad \frac{d}{dx}(uv)=v\frac{du}{dx} + u\frac{dv}{dx} \\
\\
\text{Quotient Rule:}& \qquad \frac{d}{dx}\left(\frac{u}{v}\right)=\frac{v \frac{du}{dx}-u \frac{dv}{dx}}{v^2} \\
\\
\text{Chain Rule:}& \qquad \frac{dy}{dx} = \frac{dy}{du}\cdot \frac{du}{dx}, \ y = g(u)\\
\end{align*}
$$

Standard derivatves
$$
\begin{equation}
  \begin{split}
    & \frac{d}{dx}x^n = nx^{n-1} \\
    \\
    & \frac{d}{dx}e^x = e^x\\
    \\
    & \frac{d}{dx}\ln x = \frac{1}{x} \\
  \end{split}
  \qquad \qquad
  \begin{split}
    & \frac{d}{dx}u^n = (n\cdot u^{n-1}) \cdot \frac{du}{dx}\\
    \\
    & \frac{d}{dx}e^u = e^u\cdot \frac{du}{dx}\\
    \\
    & \frac{d}{dx}\ln u = \frac{1}{u}\cdot \frac{du}{dx}\\
  \end{split}
\end{equation}
$$

Trigo derivatives
$$
\begin{equation}
\begin{split}
& \frac{d}{dx}\sin x = \cos x \\
\\
& \frac{d}{dx}\cos x = -\sin x\\
\end{split}
\qquad \qquad
\begin{split}
& \frac{d}{dx}\sin u = \cos u \cdot \frac{du}{dx}\\
\\
& \frac{d}{dx}\cos u = -\sin u\cdot \frac{du}{dx}\\
\end{split}
\end{equation}
$$
$$
\begin{gather}
cycling \ of \ the \ derivatives \ of \ \sin \ and \ \cos\\
\\
\sin x \underset{ \frac{d}{dx} }{ \longrightarrow } \cos x \underset{ \frac{d^2}{dx^2} }{ \longrightarrow }-\sin x \underset{ \frac{d^3}{dx^3} }{ \longrightarrow } -\cos x \underset{ \frac{d^4}{dx^4} }{ \longrightarrow } \sin x \\
\end{gather}
$$
$$
\begin{equation}
\begin{split}
& \frac{d}{dx}\tan x = \sec^2 x \\
\\
& \frac{d}{dx}\sec x = \sec x\tan x \\
\\
& \frac{d}{dx}\csc x = -\csc x\cot x \\
\\
& \frac{d}{dx}\cot x = -\csc^2 x \\
\\
& \frac{d}{dx}\sin ^{-1} x = \frac{1}{\sqrt{ 1-x^2 }} \\
\\
& \frac{d}{dx}\cos ^{-1} x = - \frac{1}{\sqrt{ 1-x^2 }} \\
\\
& \frac{d}{dx}\tan ^{-1} x = \frac{1}{1+x^2} \\
\end{split}
\qquad \qquad
\begin{split}
& \frac{d}{dx}\tan u = \sec^2 u \cdot \frac{du}{dx}\\
\\
& \frac{d}{dx}\sec u = \sec u \tan u\cdot \frac{du}{dx}\\
\\
& \frac{d}{dx}\csc u = -\csc u\cot u\cdot \frac{du}{dx}\\
\\
& \frac{d}{dx}\cot u = -\csc^2 u\cdot \frac{du}{dx} \\
\\
& \frac{d}{dx}\sin ^{-1} u = \frac{1}{\sqrt{ 1-u^2 }}\cdot \frac{du}{dx}\\
\\
& \frac{d}{dx}\cos ^{-1} u = - \frac{1}{\sqrt{ 1-u^2 }}\cdot \frac{du}{dx}\\
\\
& \frac{d}{dx}\tan ^{-1} u = \frac{1}{1+u^2} \cdot \frac{du}{dx}\\
\end{split}
\end{equation}
$$

[Logarithmic](/labyrinth/notes/math/math_fundementals/rules_of_logarithms) derivatives
$$
\begin{align*}
with \ constant \ a,
\end{align*}
$$
$$
\begin{equation}
  \begin{split}
    & \frac{d}{dx}a^x = a^x(\ln a) \\
    \\
    & \frac{d}{dx}\log_{a}x = \frac{1}{x\ln a} \\
  \end{split}
  \qquad \qquad
  \begin{split}
    & \frac{d}{dx}a^u = a^u(\ln a)\cdot \frac{du}{dx}\\
    \\
    & \frac{d}{dx}\log_{a}u = \frac{1}{u\ln a}\cdot \frac{du}{dx}\\
  \end{split}
\end{equation}
$$

### Concept
Derivative from first principles, change in $f(x)$ over a small change in $x$ ^3ed593
$$
\begin{align*}
y & =f(x)\\
\\
\frac{dy}{dx} = f'(x) & =\lim_{ h \to 0 }\left(\frac{f(x+h)-f(x)}{h}\right) 
\end{align*}
$$

Derivative of absolute values
$$
\begin{align*}
\frac{d}{dx}|u| & = \frac{u}{|u|} \cdot \frac{du}{dx} 
\end{align*}
$$

### Application
Deriving $\frac{d}{dx}\tan x = \sec^2(x)$, with [trigo identities](/labyrinth/notes/math/ma1301/trigo_identities)
$$
\begin{align*}
\frac{d}{dx}\tan x & = \frac{d}{dx}\left(\frac{\sin x}{\cos x}\right) \\
\\
& = \frac{\cos x \left(\frac{d}{dx}\sin x\right)-\sin x \left(\frac{d}{dx}\cos x\right)}{(\cos x)^2} && \text{(quotient rule)}\\
\\
& = \frac{\cos x (\cos x)-\sin x (-\sin x)}{\cos^2 x} \\
\\
& = \frac{\cos^2 x+\sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} && \text{(trigo identity)} \\
\\
& = \sec^2 x
\end{align*}
$$

Deriving $\frac{d}{dx}\tan ^{-1} x=\frac{1}{1+x^2}$, with [trigo identities](/labyrinth/notes/math/ma1301/trigo_identities) and [inverse functions](/labyrinth/notes/math/math_fundementals/inverse_functions)
$$
\begin{gather*}
\tan ^{-1} x =y\\
\\
\therefore \tan y  = x & \text{(inverse function)}\\
\\
\frac{d}{dy}\tan y=\sec^2y  = \frac{dx}{dy} & \text{(differentiate both sides)}\\
\\
\ \frac{1}{\sec^2 y} = \frac{dy}{dx} & \text{(reciprocal of both sides)}\\
\\ 
\frac{dy}{dx} = \frac{d}{dx}\tan ^{-1} x = \frac{1}{\sec^2 y} = \frac{1}{1-\tan^2 y} & \text{(trigo identity)}\\
\\
\therefore \frac{d}{dx}\tan ^{-1} x =\frac{1}{1-x^2}
\end{gather*}
$$

Deriving $\frac{d}{dx}a^x=a^x\ln x$
$$
\begin{align*}
y & = a^x \\
\ln y & = \ln a^x = x\ln a \\
\\
\frac{d}{dx}\ln y & = \frac{d}{dx}x\ln a = \ln a \cdot \frac{dx}{dx} + x\cdot \underset{ 0 }{ \cancel{ \frac{d}{dx}\ln a } } \\

\frac{1}{y}\cdot\frac{dy}{dx} & = \ln a+0 \\
\\
\therefore \frac{dy}{dx} & = y\ln a = a^x\ln a\\
\end{align*}
$$

Differentiating $\frac{d}{dx}f(x)^{g(x)}$, using [implicit differentiation](/labyrinth/notes/math/ma1301/cartesian_differentiation#^a2341c)
$$
\begin{align*}
y & = f(x)^{g(x)},\\
\\
\ln y & = \ln f(x)^{g(x)}=g(x)\ln f(x)\\
\\
\frac{d}{dx}\ln y & = \frac{d}{dx}g(x)\ln f(x)=\ln f(x)\cdot g'(x)+g(x)\cdot \frac{1}{f'(x)}\\
\\
\frac{1}{y}\cdot \frac{dy}{dx} & = \frac{d}{dx}g(x)\ln f(x)=g'(x)\cdot \ln f(x)+\frac{g(x)}{f'(x)}\ \\
\\
\frac{dy}{dx} & =\left(g'(x)\cdot \ln f(x)+\frac{g(x)}{f'(x)}\right)\cdot y \\
\end{align*}
$$

Formula for derivitves of absolute value
$$
\begin{align*}
\frac{d}{dx}|u| & = \frac{d}{dx} \sqrt{ u^2 } \qquad \left(|u| = \sqrt{ u^2 }\right)\\
& = \frac{1}{2\sqrt{ u^2 }} \cdot \frac{d}{dx}u^2 \\
& = \frac{1}{2\sqrt{ u^2 }} \cdot 2u \cdot \frac{du}{dx} \\
& = \frac{2u}{2\sqrt{ u^2 }} \cdot \frac{du}{dx} = \frac{u}{|u|} \cdot \frac{du}{dx}
\end{align*}
$$