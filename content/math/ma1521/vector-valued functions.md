---
tags:
- ma1521/chapter8
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1521/geometry_in_R³
next: /labyrinth/notes/math/ma1521/multivariate_functions
---
   
### Summary
Derivative rules with dot and cross product
- usual [rules of differentiation apply](/labyrinth/notes/math/ma1301/differentiation#^87dfa9)
- effectively the product rule

$$
\begin{align*}
\text{Dot Product Rule:} &&& \frac{d}{dt}\mathbf{r}(t)\cdot \mathbf{s}(t)=\mathbf{r}'(t)\cdot \mathbf{s}(t)+\mathbf{r}(t)\cdot \mathbf{s}'(t) \\
\\
\text{Cross Product Rule:} &&& \frac{d}{dt}\mathbf{r}(t)\times \mathbf{s}(t)=\mathbf{r}'(t)\times \mathbf{s}(t)+\mathbf{r}(t)\times \mathbf{s}'(t)
\end{align*}
$$

Arc length of a space curve
$$
\begin{align*}
s & = \int_{a}^{b} \sqrt{ f'(t)^{2}+g'(t)^{2}+h'(t)^{2} } \ dt \\
& = \int_{a}^{b} \| \mathbf{r}'(t) \|  \ dt 
\end{align*}
$$
### Concept
Vector-valued functions
$$
\begin{gather*}
\mathbf{r}(t)=\left\langle f(t)\mathbf{i},g(t)\mathbf{j},h(t)\mathbf{k} \right\rangle \\
\\
\mathbf{r}: \mathbb{R} \to \mathbb{R}^2\text{ or }\mathbb{R}^3
\end{gather*}
$$
> r is a parameterization of the curve

Derivative of vector-valued functions
- tangent vector

$$
\begin{align*}
\mathbf{r}'(t) & = \lim_{ \Delta t \to \infty } \frac{\mathbf{r}(t+\Delta t)-\mathbf{r}(t)}{\Delta t} \\
\\
& = \left\langle f'(t),g'(t),h'(t) \right\rangle 
\end{align*}
$$
### Application
Elliptical helix
$$
\begin{gather*}
& \mathbf{r}(t) = (\sin t)\mathbf{i}+(-3\cos t)\mathbf{j}+2t\mathbf{k} \\
\\
\text{relationship between }x\text{ and }y: & x^{2}+\left( \frac{y}{3} \right)^{2}=\sin ^{2}t+\cos ^{2}t=1
\end{gather*}
$$

Tangent at a point
$$
\begin{align*}
\mathbf{r}(t) & = \left\langle \cos t,\sin t,t \right\rangle \qquad \text{at }\left\langle 0,1, \frac{\pi}{2} \right\rangle \quad t = \frac{\pi}{2} \\
\\
\mathbf{r}'(t) & = \left\langle -\sin t,-\cos t,1 \right\rangle \\
r'\left( \frac{\pi}{2} \right) & = \left\langle -1,0,1 \right\rangle \\
\\
\text{Eqn of the line:} \ x & = 0 + (-1)t, y=1+0t, z=\frac{\pi}{2}+t
\end{align*}
$$

Arc length
$$
\begin{align*}
\mathbf{r}(t) & =\left\langle 2t,\ln t,t^{2} \right\rangle \qquad 1\leq t\leq e \\
\\
s & = \int_{1}^{e} \sqrt{ 2^{2}+\left( \frac{1}{t} \right)^{2}+(2t)^{2} } \ dt \\
& = \int_{1}^{e} \sqrt{ 4+\frac{1}{t^{2}}+4t^{2} } \ dt \\
& = \int_{1}^{e} \sqrt{ \frac{4t^{2}+1+4t^{4}}{t^{2}} } \ dt \\
& = \int_{1}^{e} \sqrt{ \frac{\left( 2t^{2}+1 \right)^{2}}{t^{2}} } \ dt \\
& = \int_{1}^{e} \frac{\left( 2t^{2}+1 \right)}{t} \\
& = \int_{1}^{e} \frac{1}{t}+2t \ dt \\
& = [\ln | t | + t^{2} ]_{1}^e \\
& = (\ln e + e^{2})-(\ln 1 + 1^{2}) \\
& = e^{2}
\end{align*}
$$