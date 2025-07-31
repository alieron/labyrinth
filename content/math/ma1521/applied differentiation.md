---
tags:
- ma1521/chapter3
- math/calculus
complete: true
prev: /labyrinth/notes/math/ma1521/differentiation_II
next: /labyrinth/notes/math/ma1521/integration_II
---
   
### Summary
Equations of [tangent and normal](/labyrinth/notes/math/ma1301/tangent_and_normal)
$$
\begin{align*}
for \ m = f'(x_{0}) \\
\\
\text{Tangent: }&&&y-f(x_{0})=m(x-x_{0}) \\
\\
\text{Normal: }&&&y-f(x_{0})=- \frac{1}{m}(x-x_{0}) \\
\\
\\
for \ x=x(t), \ y=y(t) &&& \text{(Parametric Equations)} \\
\\
\text{then }&&& x_{0}=x(t_{0}), \ f(x_{0})= y(t_{0})
\end{align*}
$$

[Derivative tests](/labyrinth/notes/math/ma1301/derivative_tests)
- change between increasing and decreasing -> 1st derivative test
- change of concavity -> 2nd derivative test

[Related rates](/labyrinth/notes/math/ma1301/optimization)
- using chain rule

L'Hôpital's rule
- applies to limits at infinity and one-sided limits

$$
\lim_{ x \to c } \frac{f(x)}{g(x)} = \lim_{ x \to c } \frac{f'(x)}{g'(x)}
$$
> provided the right limit exists or equals infinity/negative infinity
### Concept
Increasing and decreasing
$$
\begin{align*}
\forall x \in (a,b) \ f'(x)>0 & \implies f\text{ is increasing on }[a,b]\\
\\
\forall x \in (a,b) \ f'(x)<0 & \implies f\text{ is decreasing on }[a,b]
\end{align*}
$$

Critical points
$$
f'(c)=0 \lor f'(c) \ DNE \implies (c, f(c))\text{ is a critical point of }f
$$
> not including the endpoints of the interval

Indeterminate forms
$$
\begin{gather*}
\lim_{ x \to c } \frac{f(x)}{g(x)} \\
\\
\frac{0}{0}\text{ when }f(x)\to 0, \ g(x)\to 0 \ as \ x\to c \\
\\
\frac{\infty}{\infty}\text{ when }f(x)\to \infty, \ g(x)\to \infty \ as \ x\to c
\end{gather*}
$$

Rolle's theorem
- if the endpoints over an interval are the same, then there is a local minimum/maximum in the interval

$$
\begin{gather*}
for \ f \text{ continuous on } [a,b]\text{, and differentiable on }(a,b) \\
\\
f(a)=f(b) \implies \exists c\in(a,b) \ f'(c)=0
\end{gather*}
$$

Mean value theorem
- there is a point whose gradient is average gradient between the endpoints

$$
f\text{ is continuous on }[a,b] \land f\text{ is differentiable on }(a,b) \implies \exists c\in(a,b) \ f'(c)=\frac{f(b)-f(a)}{b-a}
$$
### Application
Critical points, minima and maxima of piecewise funtions
$$
\begin{align*}
f(x) & =\begin{cases}
|x| & -5\leq x<2 \\
x^2-6x+10 & 2\leq x\leq 4
\end{cases} \\
\\
f\text{ is continuous at }x=2: & \quad
\begin{split}
& \lim_{ x \to 2^- } |x| = 2\\
& \lim_{ x \to 2^+ } x^2-6x+10 = 2\\
\\
& \therefore \lim_{ x \to 2 } f(x) = 2
\end{split} \\
\\
f\text{ is not differentiable at }x=2: & \quad
\begin{split}
\lim_{ x \to 2^- } \frac{|x|-2}{x-2} & = \lim_{ x \to 2^- } \frac{x-2}{x-2} \quad \because x>0, \ |x| = x \\
& = \lim_{ x \to 2^- }1 \\
&= 1\\
\lim_{ x \to 2^+ } \frac{x^2-6x+10-2}{x-2} & = \lim_{ x \to 2^+ } \frac{x^2-6x+8}{x-2} \\
& = \lim_{ x \to 2^+ } \frac{(x-2)(x-4)}{x-2} \\
& = \lim_{ x \to 2^+ } x-4 \\
& = -2
\end{split} \\
\\
f\text{ is not differentiable at }x=0: & \quad |x|\text{ is not differentiable at }x=0 \\
\\
\text{local minimum on }[2,4]: & \quad
\begin{split}
& \frac{d}{dx}x^2-6x+10 = 2x-6 = 0 \\
& x = 3
\end{split} \\
\\
\text{critical points at } & x = 0,2,3
\\
\\
\text{consider endpoints and critical points:} & \quad
\begin{split}
&f(-5)=5 &\quad& \text{(Maxima)}\\
&f(0)=0 && \text{(Minima)}\\
&f(2)=2\\
&f(3)=1\\
&f(4)=2\\
\end{split} 
\end{align*}
$$
> not all continuous points are differentiable

Deriving the mean value theorem from Rolle's theorem
$$
\begin{align*}
f\text{ is continuous on }&[a,b]\text{, and differentiable on }(a,b) \\
\\
\text{gradient between 2 points: }& \quad \frac{f(b)-f(a)}{b-a} \\
\\
\text{tangent: }& \quad y = \frac{f(b)-f(a)}{b-a}(x-a)+f(a) \\
\\
\text{flattening }f(x)\text{ against the tangent: }& \quad g(x)=f(x)-\left(\frac{f(b)-f(a)}{b-a}(x-a)+f(a)\right) \\
\\
g\text{ is continuous on }&[a,b]\text{, and differentiable on }(a,b) \\
\\
\text{by Rolle's Theorem: }& \quad \exists c \in (a,b) \ g'(c)=0 \\
\\
g'(x) & = f'(x)-\frac{f(b)-f(a)}{b-a} \\
0 & = f'(x)-\frac{f(b)-f(a)}{b-a} \\
f'(x) & = \frac{f(b)-f(a)}{b-a}
\end{align*}
$$