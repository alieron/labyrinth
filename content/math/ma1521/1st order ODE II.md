---
tags:
- ma1521/chapter10
- math/calculus
complete: false
index: null
---
[Previous](/labyrinth/notes/math/ma1521/double_integrals)

Succeeds: [1st order ODE](/labyrinth/notes/math/ma1301/1st_order_ODE)

### Summary
Linear ODE
$$
\begin{gather*}
\frac{dy}{dx}+P(x)y=Q(x) \\
\\
I(x)=e^{ \int P(x) \ dx } && \text{(Integrating factor)}\\
\\
y\cdot I(x)=\int Q(x)\cdot I(x) \ dx
\end{gather*}
$$

Bernoulli equation
$$
\begin{gather*}
\frac{dy}{dx}+P(x)y=Q(x)y^n \\
\\
u = y^{1-n}, \ u'=(1-n)y^{-n}y' \\
\\
u'+(1-n)P(x)u=(1-n)Q(x) & \text{(First Order Linear ODE)}
\end{gather*}
$$
> reducing the exponent

### Concept
Separable ODE
$$
\begin{gather*}
\frac{dy}{dx}=f(x)g(y) \\
\\
\int\frac{1}{g(y)} \ dy = \int f(x) \ dx
\end{gather*}
$$

Linear 1st order ODE
$$
\frac{dy}{dx}+P(x)y=Q(x)
$$

Bernoulli equation
$$
\frac{dy}{dx}+P(x)y=Q(x)y^n
$$

Euler's method
- approximation

$$
\begin{gather*}
\text{Interval: }[a,b]\\
h=\frac{b-a}{n} \\
\\
\begin{aligned}
x_{0}&=a\\
x_{1}&=x_{0}+h \\
x_{2}&=x_{1}+h \\
&\quad\vdots \\
b=x_{n}&=x_{n-1}+h
\end{aligned} \\
\\
\begin{aligned}
y_{1}&=y_{0}+f(x_{0},y_{0})h\\
y_{2}&=y_{1}+f(x_{1},y_{1})h\\
&\quad\vdots \\
y_{n}&=y_{n-1}+f(x_{n-1},y_{n-1})h\\
\end{aligned}
\end{gather*}
$$

### Application
Separable ODE
$$
\begin{align*}
\frac{dy}{dx}&=xe^{3x-2y} \\
\frac{dy}{dx}&=xe^{3x}e^{-2y} \\
e^{2y}\frac{dy}{dx}&=xe^{3x} \\
\int e^{2y}\ dy&=\int xe^{3x} \ dx && u = x, \ du=dx \\
\frac{1}{2}e^{ 2y } & = \frac{1}{3}xe^{ 3x }-\frac{1}{3}\int e^{ 3x } \ dx  &&dv = e^{ 3x }dx, \ v = \frac{1}{3}e^{ 3x } \\
& = \frac{1}{3}xe^{ 3x }-\frac{1}{9}e^{ 3x }+C
\end{align*}
$$

Substitution
$$
\begin{align*}
0& = 2xyy'-y^{2}+x^{2} \\
y' & = \frac{y^{2}-x^{2}}{2xy} \\
& = \frac{y^{2}-x^{2}}{2xy} \cdot \frac{\frac{1}{x^{2}}}{\frac{1}{x^{2}}} \\
& = \frac{\left( \frac{y}{x} \right)^{2}-1}{2\frac{y}{x}} \\
\\
\text{Substitution:} \quad v&=\frac{y}{x} \\
y& = xv \\
y'&=v+xv' \\
\\
v+xv'&=\frac{v^{2}-1}{2v} \\
xv'&=\frac{v^{2}-1}{2v}-v \\
&=\frac{v^{2}-1-2v^{2}}{2v} \\
x\frac{dv}{dx}&=-\frac{1+v^{2}}{2v} \\
\int\frac{2v}{1+v^{2}}\ dv & = -\int\frac{1}{x}\ dx && u = 1+v^{2}, \ du=2v \ dv \\ 
\int \frac{1}{u} \ du &= -\ln|x|+C \\
\ln|x(1-v^{2})| &=C \\
|x(1+v^{2})|&=e^{ C } \\
\left|x\left( 1+\left( \frac{y}{x} \right)^{2} \right)\right|&=e^{ C } \\
\end{align*}
$$

Linear ODE
$$
\begin{align*}
xy'-3y&=x^{2}, x>0 \\
y'-\frac{3}{x}y&=x && \text{(Standard Form)} \\
\\
I(x)& = e^{ \int -3/x \ dx  } \\
& = e^{ -3\ln x } \\
& = x^{-3} \\
\\
yx^{-3}&=\int x\cdot x^{-3} \ dx \\
& = \int x^{-2} \ dx \\
& = -\frac{1}{x}+C \\
y& = -x^{2}+Cx^{3} \\
\end{align*}
$$

Bernoulli equation
$$
\begin{align*}
y'+y&=x^{2}y^{2} \\
\\
z=y^{-1}, & \ z'=-y^{-2}y' \\
z'-z& = -x^{2} \\
\\
I(x)&=e^{ \int -1 \ dx  } \\
&= e^{ -x } \\
\\
ze^{ -x }&=\int-x^{2}e^{ -x } \ dx && u=-x^{2}, \ du = -2x \ dx&& dv = e^{ -x }, \ v = -e^{ -x }\\
&=x^{2}e^{ -x }-\int 2xe^{ -x } \ dx  && u = 2x, \ du = 2 \ dx \\
&=x^{2}e^{ -x }-\left( -2xe^{ -x } - \int 2e^{ -x } \ dx \right) \\
y^{-1}e^{ -x }&=x^{2}e^{ -x }+2xe^{ -x } - 2e^{ -x } + C \\
y^{-1}&=x^{2}+2x-2+Ce^{ x } \\
y&=\frac{1}{x^{2}+2x-2+Ce^{ x }}
\end{align*}
$$

$$
\begin{align*}
xy'+y& = x^{4}y^{3} \\
y'+\frac{1}{x}y&=x^{3}y^{3} \\
\\
z=&y^{-2} \\
z'-\frac{2}{x}z&=-2x^{3} \\
\\
I(x)&=e^{ \int-2/x \ dx } \\
&=e^{ -2\ln x } \\
&=x^{-2} \\
\\
zx^{-2}&=\int-2x \ dx \\
y^{-2}x^{-2}&= -x^{2}+C \\
y^{-2}&=-x^{4}+Cx^{2}
\end{align*}
$$

Uranium-thorium dating
$$
\begin{align*}
\begin{gathered}
\frac{dU}{dt}=-k_{U}U \\
\frac{dT}{dt}=k_{U}U-k_{T}T
\end{gathered} \\
\\
\end{align*}
$$


Euler's method
$$
\begin{gather*}
y'=1+y, \ y(0)=1\\
\\
\begin{aligned}
\int \frac{1}{1+y} \ dy &=\int dx \\
\ln | 1+y | &=x+C \\
| 1+y |&=e^{ x+C } \\
y&=Ce^{ x }-1 \\
\\
1&=C-1 \\
C&=2
\end{aligned} \\
\\
y=2e^{ x }-1 \\
\\
[0,1]\text{ with }h=0.1\\
\begin{array}{|c|c|c|}
\hline x & y\text{ (Euler)} & y\text{ (Exact)} \\
\hline 0 & 1 & 1 \\
\hline 0.1 & 1.2 &  \\
\hline 0.2 & 1.42 &  \\
\hline 0.3 & 1.662 &  \\
\hline 0.4 & 1.928 &  \\
\hline 0.5 & 2.221 &  \\
\hline 0.6 & 2.543 &  \\
\hline 0.7 & 2.897 &  \\
\hline 0.8 & 3.287 &  \\
\hline 0.9 & 3.716 &  \\
\hline 1 & 4.187 & 4.437 \\
\hline
\end{array}
\end{gather*}
$$
> smaller jumps make it more precise