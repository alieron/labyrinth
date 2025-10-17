---
tags:
- ma1522/chapter1
- math/linear_algebra
complete: true
next: /labyrinth/notes/math/ma1522/gaussian_elimination

---
### Summary
Inconsistent
- No solutions

Consistent ^95b858
- Exactly one solution
- Infinitely many solutions
### Concept
Linear equation in standard form
$$
a_1x_1 + a_2x_2 + ... + a_nx_n = b
$$

Collection of linear equations
$$
\begin{cases}
a_{11}x_1&+&a_{12}x_2&+&\cdots&+&a_{1n}x_n&=&b_1\\ a_{21}x_1&+&a_{22}x_2&+&\cdots&+&a_{2n}x_n&=&b_2\\ &&&&\vdots&&&&\\ a_{m1}x_1&+&a_{m2}x_2&+&\cdots&+&a_{mn}x_n&=&b_m
\end{cases}
$$
> a linear system is homogeneous when all b=0

General solution
- Needed when there are infinite solutions, the variables are expressed in terms of parameters
### Application
Consistent systems (one solution)
$$
\begin{gather*}
\begin{cases}
x-y=0\\ x+y=2
\end{cases}\\
\\
x=y \\
2x = 2\\
\therefore x=1, \ y=1 &\text{(Unique Solution)}
\end{gather*}
$$

Consistent systems (infinite solutions)
$$
\begin{gather*}
\begin{cases}
x+2y=5\\ 2x+4y=10
\end{cases} & \text{(Eqns are the same)}\\
\\
\text{not enough info for unique solution} \\
\therefore \ let \ y = s, \ x=5-2s, \ s \in \mathbb{R}&\text{(General Solution)}\\
\text{or} \\
\therefore \ let \ x = t, \ y=\frac{5-t}{2}, \ t \in \mathbb{R} 
\end{gather*}
$$

Inconsistent systems
$$
\begin{gather*}
\begin{cases}
x-2y=1\\3x-6y=5
\end{cases} &\text{(Same coefficients, different constants)} \\
\\
\text{for eqn 1:} \\
x=1-2y \\
\\
\text{for eqn 2:} \\
x=\frac{5}{3}-2y \\
\\
\therefore \text{there is no case that solves both eqns}
\end{gather*}
$$