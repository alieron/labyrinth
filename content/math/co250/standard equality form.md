---
tags:
  - co250/chapter2
  - math/optimization
complete: false
prev: /labyrinth/notes/math/co250/LP_outcomes
next: /labyrinth/notes/math/co250/canonical_form

---
### Concept
#### Standard Equality Form(SEF)
- can be solved using the [simplex algorithm](/labyrinth/notes/math/co250/simplex_algorithm)
- maximization problem
- every variable must be $x_j\geq 0$, no free variables
- constraints must be equality constraints


$$
\max\{c^Tx:Ax=b,x\ge0\}
$$

Converting to SEF
- every LP has an equivalent SEF form
- preserve infeasibility and unboundedness and permit optimal solutions to be translated both ways

1. replacing minimization, negate objective function

$$
\min f \implies \max -f
$$

2. replacing inequalities, add variable

$$
\begin{gather*}
a^Tx\leq b \implies a^Tx+s = b, \ s \geq 0 \\
\\
a^Tx\geq b \implies a^Tx-s = b, \ s \geq 0 \\
\end{gather*}
$$
> think of it as for $\leq$, we need to add something to the LHS for the equality to hold 

3. replacing free variables, add variables

$$
x\text{ is free} \implies x = a - b, \ a, b \geq 0 
$$