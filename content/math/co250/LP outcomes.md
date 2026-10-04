---
tags:
  - co250/chapter2
  - math/optimization
complete: false
prev: /labyrinth/notes/math/co250/nonlinear_programs
next: /labyrinth/notes/math/co250/standard_equality_form

---
### Concept
#### Fundamental Theorem of LP
$$
\text{linear program}\begin{cases}
\text{has an optimal solution} \\
\text{is infeasible} \\
\text{is unbounded}
\end{cases}
$$

Certificate
- proof of the solution by the solver

#### Feasibility
$$
\begin{align*}
\text{optimization problem is feasible} &\iff \text{it has at least one feasible solution} \\
&\iff \exists\text{ some assignment to the variables that satisfies all the constraints}
\end{align*}
$$

Proving infeasibility
$$
\begin{array}{rc}
\text{constraints} & Ax=b \\
 \\
\text{new equation} & y^TAx=y^Tb \\
 \\
\text{contradiction} & \underbrace{y^TA}_{\geq\mathbb{0}^{\top}}\underbrace{\bar{x}}_{\geq\mathbb{0}} = \underbrace{y^Tb}_{ \lt 0}
\end{array}
$$

Farkas' Lemma
$$
\exists y, \quad y^TA \geq 0\text{ and }y^Tb <0 \implies \text{there is no solution to }Ax=b, \ x\geq 0
$$
> will be slightly different for different forms of LP
#### Optimality
$$
\begin{align*}
&\text{maximization problem: an optimal solution is a feasible solution that }\textbf{maximizes}\text{ the objective function} \\
\\
&\text{minimization problem: an optimal solution is a feasible solution that }\textbf{minimizes}\text{ the objective function}
\end{align*}
$$

Proving optimality
#### Unbounded
$$
\begin{align*}
&\text{maximization problem is unbounded}\iff \forall M,\quad \exists \text{ a feasible solution with objective value greater than }M \\
\\
&\text{minimization problem is unbounded}\iff \forall M,\quad \exists \text{ a feasible solution with objective value smaller than }M
\end{align*}
$$

Proving unboundedness
- construct a family of feasible solutions $x(t)$ and show that as $t$ increases, the function goes to infinity

- $x(t)$ must be feasible for all $t\geq0$

$$
\begin{gather*}
x(t) = \bar{x} + tr \geq 0 \\
\\
Ax(t)= A\left[\bar{x}+tr\right]=\underbrace{A\bar{x}}_{b}+t\underbrace{Ar}_{0}= b
\end{gather*}
$$


- $c^Tx(t)\to \infty$ when $t\to \infty$
$$
\begin{gather*}
 c^Tx(t) = c^T[\bar{x}+tr]=c^T\bar{x}+t\underbrace{c^Tr}_{=1 \gt 0}
\end{gather*}
$$

For $\max\{c^Tx:Ax=b,x\ge0\}$:
- infeasibility is certified by $y^TA\ge0$ and $y^Tb<0$; Farkas' lemma says such $y$ exists whenever the system is infeasible;
- unboundedness is certified by feasible $\bar x$ and a ray $r\ge0$ with $Ar=0$ and $c^Tr>0$, since $\bar x+tr$ is feasible and improves forever;
- optimality is certified by a feasible point attaining a valid objective bound, later supplied systematically by [weak and strong duality](/labyrinth/notes/math/co250/weak_and_strong_duality).


### Application
Feasibility
$$
\begin{gather*}
\begin{array}{rl}
\max &  x_{1}-x_{2} \\
\text{such that} & 4x_{1} +x_{2}\geq 2 \\
 & 2x_{1}-3x_{2}\leq 4 \\
 & x_{1},x_{2}\geq 0
\end{array} \\
\\
\begin{array}{lc}
\begin{aligned}
x_{1}&=1 \\
x_{2}&=3
\end{aligned} & \text{feasible} \\
\\
\begin{aligned}
x_{1}&=3 \\
x_{2}&=0
\end{aligned} & \text{infeasible}
\end{array}
\end{gather*}
$$

Optimality
- infinite optimal solutions

$$
\begin{gather*}
\begin{array}{rl}
\max &  x_{1} \\
\text{such that} & x_{1}\leq 1 \\
 & x_{2} \geq 1
\end{array} \\
\\
\begin{array}{lc}
\begin{aligned}
x_{1}&=1 \\
x_{2}&=\alpha, \quad \alpha\geq1
\end{aligned} & \text{feasible and optimal}
\end{array}
\end{gather*}
$$
> there can be multiple optimal solutions

- feasible but no optimal, unbounded

$$
\begin{gather*}
\begin{array}{rl}
\max &  x_{1} \\
\text{such that} & x_{1}\geq 1 \\
\end{array} \\
\\
\begin{array}{lc}
\begin{aligned}
x_{1}&=1 
\end{aligned} & \text{feasible but not optimal}
\end{array}
\end{gather*}
$$

Strict inequalities
$$
\begin{gather*}
\begin{array}{rl}
\max &  x \\
\text{such that} & x< 1 \\
\end{array} \\
\\
\begin{array}{rl}
\text{feasible} & x=0 \\
\text{not unbounded} & 1\text{ is the upper bound} \\
\text{no optimal} & 
\end{array}
\end{gather*}
$$

$$
\begin{align*}
& \text{Claim: } x\text{ has no optimal solution} \\
\\
& \text{Suppose not, that } x\text{ is an optimal solution}\\
\\
&\text{Let }x' = \frac{x+1}{2}\\
\\
&\text{so }\\
&\quad\begin{aligned}[t]
& x' < 1\text{ is feasible and }x' > x \\
\end{aligned}\\
\\
&\therefore x\text{ is not optimal}\\
\\
&\text{Contradiction} \\
&&\square
\end{align*}
$$

Nonlinear objective function
$$
\begin{gather*}
\begin{array}{rl}
\min &  \frac{1}{x} \\
\text{such that} & x\geq 1 \\
\end{array} \\
\\
\begin{array}{rl}
\text{feasible} & x=1 \\
\text{not unbounded} & 1\text{ is the upper bound} \\
\text{no optimal} & 
\end{array}
\end{gather*}
$$