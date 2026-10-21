---
tags:
  - co250/chapter2
  - math/optimization
complete: false
prev: /labyrinth/notes/math/co250/canonical_form
next: /labyrinth/notes/math/co250/feasible_regions

---
### Summary
Simplex algorithm
TODO


Finding a feasible solution
```
given Ax = b
1. multiply the equations such that b>=0
2. construct an auxiliary problem, add m auxiliary variables
3. solve the auxiliary problem using the simplex algorithm
4. if z = 0, return the feasible solution to the original problem
5. else, return "infeasible"
```

### Concept
#### Simplex algorithm
- finds the optimal solution given a basic feasible solution
- pick non-basic variable where the corresponding entry in the objective matrix is >0


$$
\begin{gather*}
\text{for some }k\not\in B, \ x_{k} = t \geq0 \\
\text{keep the rest of the non-basic variables }x_{j}= 0
\\
x_{B} = b - tA_{k} \\
\\
\text{choose large }t\text{ such that }x_{B}\geq0
\end{gather*}
$$

$$
\begin{alignedat}{5} & \max \ && z=c_N^{T}x_N+\bar{z} \\ &\text{s.t. } \ & \\ &&& x_B+A_Nx_N=b \\ &&& x\geq \mathbb{0}
\end{alignedat}
$$

For a feasible basis in canonical form, simplex moves between BFSs.

```
repeat
  if every reduced cost c̄_j ≤ 0: return current BFS (optimal)
  choose entering k with c̄_k > 0
  if Ā_k ≤ 0: return unbounded ray
  t <- min { b̄_i/Ā_ik : Ā_ik > 0 }
  choose a minimizing basic index to leave; pivot
```

Optimality follows because $\bar c_N^Tx_N\le0$. If $\bar A_k\le0$, increasing $x_k$ preserves nonnegativity and improves without bound. Degeneracy can cause cycling; **Bland's rule** chooses the smallest eligible entering and leaving indices and guarantees termination. 

Bland's rule
- prevent cycling in the simplex algorithm
- ensures termination
- choose the smallest element to enter and leave the basis

#### Finding a feasible solution
- the [simplex algorithm](/labyrinth/notes/math/co250/simplex_algorithm#Simplex_algorithm) finds the optimal solution given a feasible solution
- we first need to find a feasible solution

> [canonical form](/labyrinth/notes/math/co250/canonical_form) is insufficient, we might see a solution that is infeasible due to negative coefficients


Auxiliary problem
- add auxiliary variables to have a very obvious feasible solution
- try to reduce the auxiliary variables to 0

$$
\begin{gather*}
\begin{array}{ll}
\min & z = {\color{aqua} x_{n+1}} + {\color{aqua} \dots} + {\color{aqua} x_{n+m}} \\
\text{s.t.} \\
& \left(\begin{array}{c|c}A_{m\times n} & I_{m}\end{array}\right)x = b \\
& x \geq 0
\end{array} \\
\\
\begin{pmatrix}
x_{1} & \dots & x_{n} & {\color{aqua} x_{n+1}}  &  {\color{aqua} \dots}  &  {\color{aqua} x_{n+m}}
\end{pmatrix}^T \text{ is the optimal solution} \\
\\
\\
\begin{aligned}
z = 0 &\implies {\color{aqua} x_{n+1}} = {\color{aqua} \dots} = {\color{aqua} x_{n+m}} = 0\\
&\implies \begin{pmatrix}
x_{1} & \dots & x_{n}
\end{pmatrix}^T \text{ is a feasible solution to the original problem} \\
\\
\\
z > 0 &\implies \text{the original problem has no solutions}
\end{aligned}
\end{gather*}
$$
> we want to minimize the effect that the auxiliary variables have on the problem
> note, the auxiliary problem is not in [SEF](/labyrinth/notes/math/co250/standard_equality_form), we have to convert it to SEF and then to [canonical form](/labyrinth/notes/math/co250/canonical_form)

Non-zero auxiliary variables implies infeasibility
$$
\begin{align*}
&\text{Claim: }z>0 \implies \text{the original problem has no solution} \\
\\
&\text{Suppose not, that the original problem has solution }x_{1}', \dots, x_{n}' \\
\\
&\text{then, }\begin{aligned}[t]
&\begin{pmatrix}
x_{1}' & \dots & x_{n}' & 0 & \dots & 0
\end{pmatrix}^T\text{ is a feasible solution to the auxiliary problem} \\
\\
&\text{however, this solution would have objective value }0 \\
&\text{whilst the optimal solution, }z > 0
\end{aligned} \\
\\
&\text{ Contradiction} \\
\\
&\therefore z>0 \implies \text{the original problem has no solution}&\square
\end{align*}
$$

if there is a feasible solution, this step always gives a basic solution

#### Two-phase simplex
- proves the [fundemental theorem of LP](/labyrinth/notes/math/co250/LP_outcomes#Fundamental_Theorem_of_LP)

```
Phase I: minimize sum of artificial variables
if z > 0: report infeasible
extract a feasible original basis
Phase II: restore original objective and run simplex
```

With Bland's rule, this proves an SEF LP is infeasible, unbounded, or has an optimal BFS. See [LP outcomes](/labyrinth/notes/math/co250/LP_outcomes).


### Application
Finding a better the optimal solution
$$
\begin{gather*}
\begin{alignedat}{5}
& \max \ && \underbrace{\begin{pmatrix}
{\color{red} 0} & 1 & 3 & {\color{red} 0}
\end{pmatrix}}_{c} x \\ &\text{s.t. } \ & \\ &&& \underbrace{ \begin{pmatrix} {\color{red}1} & 1 & 2 & {\color{red}0}\\ {\color{red}0} & 1 & 1 & {\color{red}1} \end{pmatrix} }_{A} x = \underbrace{ \begin{pmatrix} 2\\ 5 \end{pmatrix} }_{b} \\ &&& x_1,x_2,x_3,x_4\geq 0
\end{alignedat} \\
\\
B = \{ 1,4 \}\text{ is a basis} \\
\\
\text{the LP is in canonical form for }B \\
\end{gather*}
$$
$$
\begin{gather*}
\text{1) work on increasing }x_{2}=t \geq 0\text{, while }x_{3} = 0 \\
\\
\begin{aligned}
\begin{pmatrix} 2\\ 5 \end{pmatrix} &= \begin{pmatrix} 1 & 1 & 2 & 0\\ 0 & 1 & 1 & 1 \end{pmatrix} x \\
&= {\color{red}x_1} \begin{pmatrix} 1\\ 0 \end{pmatrix} + x_2\begin{pmatrix} 1\\ 1 \end{pmatrix}+x_3\begin{pmatrix} 2\\ 1 \end{pmatrix}+{\color{red}x_4}\begin{pmatrix} 0\\ 1 \end{pmatrix} \\
&= \begin{pmatrix} {\color{red}x_1}\\ 0 \end{pmatrix} + t\begin{pmatrix} 1\\ 1 \end{pmatrix}+0\begin{pmatrix} 2\\ 1 \end{pmatrix}+\begin{pmatrix} 0\\ {\color{red}x_4} \end{pmatrix} \\
&= t\begin{pmatrix} 1\\ 1 \end{pmatrix} +\begin{pmatrix} {\color{red}x_1}\\ {\color{red}x_4} \end{pmatrix}
\end{aligned} \\
\\
\underbrace{ \begin{pmatrix} {\color{red}x_1}\\ {\color{red}x_4} \end{pmatrix} }_{ x_{B} }= \underbrace{ \begin{pmatrix} 2 \\5 \end{pmatrix} }_{ b } - t\underbrace{ \begin{pmatrix} 1\\ 1 \end{pmatrix} }_{ A_{2} }
\end{gather*}
$$
$$
\begin{gather*}
\text{2) choose the largest }t\text{ such that }x_{B} \geq 0 \\
\\
t = \min\left( \frac{2}{1}, \frac{5}{1} \right) = 2 \\
\\
\text{new feasible solution: }\begin{pmatrix}
0 & 2 & 0 & 3
\end{pmatrix}^T, \quad B' = \{ 2,4 \}
\end{gather*}
$$
> note that the new feasible solutions are all basic solutions

$$
\begin{gather*}
\text{3) find the canonical form for }B' \\
\\
\begin{aligned}
A' = A_{B'}^{-1}A &= \begin{pmatrix}
1 & 0 \\
1 & 1
\end{pmatrix}^{-1} \begin{pmatrix} 1 & 1 & 2 & 0\\0 & 1 & 1 & 1 \end{pmatrix} \\
&= \begin{pmatrix}
1 & {\color{red} 1} & 2 & {\color{red} 0} \\
-1 & {\color{red} 0} & -1 & {\color{red} 1}
\end{pmatrix} \\
\\
b' = A_{B'}^{-1} b &= \begin{pmatrix}
1 & 0 \\
1 & 1
\end{pmatrix}^{-1} \begin{pmatrix}
2 \\
5
\end{pmatrix} \\
&= \begin{pmatrix}
2 \\
3
\end{pmatrix} \\
\\
y=(A_{B'}^T)^{-1}c_{B'} &= \begin{pmatrix}
1 & 0 \\
1 & 1
\end{pmatrix}^{-T} \begin{pmatrix}
1 \\
0
\end{pmatrix} \\
&= \begin{pmatrix}
1 \\
0
\end{pmatrix} \\
\\
\bar{c}^T = c^{T}-y^{T}A &= \begin{pmatrix}
0 & 1 & 3 & 0
\end{pmatrix} - \begin{pmatrix}
1 & 0
\end{pmatrix}\begin{pmatrix} {\color{red}1} & 1 & 2 & {\color{red}0}\\ {\color{red}0} & 1 & 1 & {\color{red}1} \end{pmatrix} \\
&=  \begin{pmatrix}
-1 & {\color{red} 0} & 1 & {\color{red} 0}
\end{pmatrix} \\
\\
\bar{z} = y^{T}b &= \begin{pmatrix}
1 & 0
\end{pmatrix}\begin{pmatrix}
2 \\
5
\end{pmatrix} \\
&= 2
\end{aligned} \\
\\
\\
\begin{alignedat}{5}
& \max \ && \begin{pmatrix}
-1 & {\color{red} 0} & 1 & {\color{red} 0}
\end{pmatrix} x + 2 \\ &\text{s.t. } \ & 
\\ &&& \begin{pmatrix}
1 & {\color{red} 1} & 2 & {\color{red} 0} \\
-1 & {\color{red} 0} & -1 & {\color{red} 1}
\end{pmatrix} x = \begin{pmatrix} 2\\ 3 \end{pmatrix} 
\\ &&& x_1,x_2,x_3,x_4\geq 0
\end{alignedat}
\end{gather*}
$$
$$
\begin{gather*}
\text{4) work on increasing }x_{3}=t \geq 0 \\
\\
\underbrace{ \begin{pmatrix} {\color{red}x_2}\\ {\color{red}x_4} \end{pmatrix} }_{ x_{B'} }= \underbrace{ \begin{pmatrix} 2 \\3 \end{pmatrix} }_{ b' } - t\underbrace{ \begin{pmatrix} 2\\ -1 \end{pmatrix} }_{ A'_{3} }
\end{gather*}
$$
$$
\begin{gather*}
\text{5) choose the largest }t\text{ such that }x_{B'} \geq 0 \\
\\
t = \min\left( \frac{2}{2}, - \right) = 1 \\
\\
\text{new feasible solution: }\begin{pmatrix}
0 & 0 & 1 & 4
\end{pmatrix}^T, \quad B'' = \{ 3,4 \}
\end{gather*}
$$
> the -1 term does not restict $t$, since any value of $t$ will gaurentee $x_{4}\geq 0$

$$
\begin{gather*}
\text{6) find the canonical form for }B'' \\
\\
\begin{alignedat}{5}
& \max \ && \begin{pmatrix}
-1.5 & -0.5 & {\color{red} 0} & {\color{red} 0}
\end{pmatrix} x + 3 \\ &\text{s.t. } \ & 
\\ &&& \begin{pmatrix}
0.5 & 0.5 & {\color{red} 1} & {\color{red} 0} \\
-0.5 & 0.5 & {\color{red} 0} & {\color{red} 1}
\end{pmatrix} x = \begin{pmatrix} 1\\ 4 \end{pmatrix} 
\\ &&& x_1,x_2,x_3,x_4\geq 0
\end{alignedat}
\end{gather*}
$$
> stop the algorithm, since there are no more non-basic variables with 

$$
\begin{gather*}
\text{7) prove that this solution is optimal}\\
\\
\underbrace{(-1.5,\;-0.5,\;0,\;0)}_{\leq{\class{bold}{0}}}\underbrace{x}_{\geq \class{bold}{0}}+3 \leq 3 \\
\text{with }\begin{pmatrix}
0 & 0 & 1 & 4
\end{pmatrix}^T, \ z = 3 \quad\therefore \text{optimal}
\end{gather*}
$$

Unbounded LP
$$
\begin{gather*}
\begin{alignedat}{5}
& \max \ && \begin{pmatrix}
{\color{red}0} & -4 & 3 & {\color{red}0} & {\color{red}0}
\end{pmatrix} x \\ 
&\text{s.t. } \ & \\ &&& \begin{pmatrix} {\color{red}1} & -2 & 1 & {\color{red}0} & {\color{red}0} \\ {\color{red}0} & 5 & -3 & {\color{red}1} & {\color{red}0} \\ {\color{red}0} & 4 & -2 & {\color{red}0} & {\color{red}1} \end{pmatrix} x = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} \\
&&& x_1,x_2,x_3,x_4\geq 0
\end{alignedat} \\
\\
\Downarrow \ x_{3}\text{ enters, }x_{1}\text{ leaves} \\
\\
\begin{alignedat}{5}
& \max \ && \begin{pmatrix}
-3 & 2 & {\color{red}0} & {\color{red}0} & {\color{red}0}
\end{pmatrix} x + 3\\ 
&\text{s.t. } \ & \\ &&& \begin{pmatrix} 1 & -2 & {\color{red}1} & {\color{red}0} & {\color{red}0} \\ 3 & -1 & {\color{red}0} & {\color{red}1} & {\color{red}0} \\ 2 & 0 & {\color{red}0} & {\color{red}0} & {\color{red}1} \end{pmatrix} x = \begin{pmatrix} 1 \\ 4 \\ 4 \end{pmatrix} \\
&&& x_1,x_2,x_3,x_4\geq 0
\end{alignedat} \\
\\
\Downarrow\text{ trying with } x_{2}\\
\\
\begin{pmatrix}
x_{3} \\
x_{4} \\
x_{5}
\end{pmatrix} = \begin{pmatrix}
1 \\
4 \\
4
\end{pmatrix} - t \begin{pmatrix}
-2 \\
-1 \\
0
\end{pmatrix} \\
\\
t = \min(-,-,-) = ? \\
\\
\\
\begin{aligned}
x_{2} &= t \\
x_{1} &= 0 & \text{(non-basic variable)} \\
\begin{pmatrix}
x_{3} \\
x_{4} \\
x_{5}
\end{pmatrix} &= \begin{pmatrix}
1 \\
4 \\
4
\end{pmatrix} - t \begin{pmatrix}
-2 \\
-1 \\
0
\end{pmatrix}
\end{aligned} \\
\\
x(t) = \begin{pmatrix}
0 \\
t \\
1+2t \\
4+t \\
4
\end{pmatrix} = \underbrace{ \begin{pmatrix}
0 \\
0 \\
1 \\
4 \\
4
\end{pmatrix} }_{ \bar{x} } + t \underbrace{ \begin{pmatrix}
0 \\
1 \\
2 \\
1 \\
0
\end{pmatrix} }_{ r } \\
\\
\forall t\geq 0, \ x(t)\text{ is feasible} \\
t \to \infty \implies z = 2t \to \infty 
\end{gather*}
$$
> $\bar{x}$ and $r$ can be considered the certificate for the LP's [unboundedness](/labyrinth/notes/math/co250/LP_outcomes#Unbounded)
> notice, if the column of the chosen non-basic solution is <=0, then the LP is unbounded

Finding a feasible solution
$$
\begin{gather*}
\begin{pmatrix}
1 & 5 & 2 & 1 \\
2 & 9 & 0 & -3
\end{pmatrix}x = \begin{pmatrix}
7 \\
13
\end{pmatrix} \\
\\
\text{1) ensure RHS is non-negative} \\
\\
\text{done }b\geq 0 \\
\\
\\
\text{2) create an auxillary problem, with auxillary variables} \\
\\
\begin{array}{ll}
\min & x_{5}+x_{6} \\
\text{s.t.} \\
 & \begin{pmatrix}
1 & 5 & 2 & 1  & {\color{red} 1} & {\color{red} 0}\\
2 & 9 & 0 & -3 & {\color{red} 0} & {\color{red} 1}
\end{pmatrix}x = \begin{pmatrix}
7 \\
13
\end{pmatrix} \\
 & x\geq 0
\end{array} \\
\\
\text{feasible, solution: }x = \begin{pmatrix}
0 & 0 & 0 & 7 & 13
\end{pmatrix}^T \\
\\
\text{this problem is feasible and bounded, }\therefore\text{there must be an optimal solution} \\
\\
\\
\text{3) solve using simplex algorithm} \\
\\
\text{optimal solution: }x = \begin{pmatrix}
2 & 1 & 0 & 0 & 0 & 0
\end{pmatrix}^T \\
\\
\text{so }x = \begin{pmatrix}
2 & 1 & 0 & 0
\end{pmatrix}\text{ is a feasible solution to the original problem}
\end{gather*}
$$

Detect infeasibility
$$
\begin{gather*}
\begin{pmatrix}
5 & 1 & 1 \\
1 & -1 & -2
\end{pmatrix}x = \begin{pmatrix}
1 \\
-5
\end{pmatrix} \\
\\
\text{1) ensure RHS is non-negative} \\
\\
\begin{pmatrix}
5 & 1 & 1 \\
-1 & 1 & 2
\end{pmatrix}x = \begin{pmatrix}
1 \\
5
\end{pmatrix} \\
\\
\\
\text{2) create an auxillary problem, with auxillary variables} \\
\\
\begin{array}{ll}
\min & x_{4}+x_{5} \\
\text{s.t.} \\
 & \begin{pmatrix}
5 & 1 & 1 & {\color{red} 1} & {\color{red} 0}\\
-1 & 2 & 1 & {\color{red} 0} & {\color{red} 1}
\end{pmatrix}x = \begin{pmatrix}
1 \\
5
\end{pmatrix} \\
 & x\geq 0
\end{array} \\
\\
\text{feasible, solution: }x = \begin{pmatrix}
0 & 0 & 0 & 0 & 1 & 5
\end{pmatrix}^T \\
\\
\text{this problem is feasible and bounded, }\therefore\text{there must be an optimal solution} \\
\\
\\
\text{3) solve using simplex algorithm} \\
\\
\text{optimal solution: }x = \begin{pmatrix}
0 & 0 & 1 & 0 & 3
\end{pmatrix}^T \\
\\
\\
\text{4) prove that the original problem has no solutions} \\
\\
\begin{aligned}
&\text{Claim: the original problem has no solutions} \\
\\
&\text{Suppose not, that the original problem has solution }x_{1}', x_{2}',x_{3}' \\
\\
&\text{then, }\begin{aligned}[t]
&\begin{pmatrix}
x_{1}' & x_{2}' & x_{3}' & 0 & 0
\end{pmatrix}^T\text{ would be a feasible solution to the auxiliary problem} \\
\\
&\text{however, this solution would have objective value }0 \\
&\text{whilst the optimal solution, }z = 3
\end{aligned} \\
\\
&\therefore\text{ Contradiction}&\square
\end{aligned}
\end{gather*}
$$
### Extra
Octave function to solve an LP using two-phase simplex
```octave
function [x, z, B, status] = simplex_lp(c, A, b)
  % Solve:
  %   maximize c' * x
  %   subject to A*x = b, x >= 0
  %
  % status: "optimal", "infeasible", or "unbounded"
  %
  % Uses two-phase primal simplex with Bland's pivot rule.
  % Intended for small classroom problems.

  tol = 1e-9;
  maxiter = 10000;

  c = c(:);
  b = b(:);
  [m, n] = size(A);

  if length(c) != n || length(b) != m
    error("Dimensions of c, A, and b do not match.");
  endif

  if any(!isfinite(A(:))) || any(!isfinite(b)) ...
      || any(!isfinite(c))
    error("Inputs must contain only finite numbers.");
  endif

  x = [];
  z = NaN;
  B = [];

  % Make every RHS nonnegative.
  neg = (b < 0);
  A(neg, :) = -A(neg, :);
  b(neg) = -b(neg);

  % Phase I:
  % Add artificial variables a >= 0:
  %   A*x + I*a = b
  % Maximize -sum(a), initially using a as the basis.
  Awork = [A, eye(m)];
  cphase1 = [zeros(n, 1); -ones(m, 1)];
  B = n + (1:m);

  [B, phase_status] = simplex_pivots( ...
      cphase1, Awork, b, B, tol, maxiter);

  if !strcmp(phase_status, "optimal")
    error("Numerical failure during Phase I.");
  endif

  [Ac, bc, ~, phase_value] = ...
      canonical_lp(cphase1, Awork, b, B);

  if phase_value < -tol
    status = "infeasible";
    B = [];
    return;
  endif

  % Remove any zero-valued artificial variables still basic.
  % Pivot in an original variable when possible.
  % Otherwise, the transformed row is redundant.
  while any(B > n)
    [Ac, bc] = canonical_lp(cphase1, Awork, b, B);
    r = find(B > n, 1);

    if abs(bc(r)) > tol
      error("Numerical failure removing artificial variables.");
    endif

    nonbasic = setdiff(1:n, B);
    candidates = nonbasic(abs(Ac(r, nonbasic)) > tol);

    if !isempty(candidates)
      B(r) = candidates(1);
    else
      % Work with the equivalent canonical equations.
      Awork = Ac;
      b = bc;
      Awork(r, :) = [];
      b(r) = [];
      B(r) = [];
    endif
  endwhile

  % Delete all artificial-variable columns.
  Awork = Awork(:, 1:n);

  % Phase II: optimize the original objective.
  [B, status] = simplex_pivots( ...
      c, Awork, b, B, tol, maxiter);

  [~, bc] = canonical_lp(c, Awork, b, B);
  bc(abs(bc) < tol) = 0;

  x = zeros(n, 1);
  x(B) = bc;

  if strcmp(status, "unbounded")
    z = Inf;
  else
    z = c' * x;
  endif
endfunction


function [B, status] = simplex_pivots(c, A, b, B, tol, maxiter)
  % Primal simplex from a feasible basis.

  n = columns(A);

  for iteration = 1:maxiter
    [Ac, bc, cc] = canonical_lp(c, A, b, B);

    if any(bc < -tol)
      error("The current basis is not feasible.");
    endif

    bc(abs(bc) < tol) = 0;

    % Bland's rule: smallest-index improving variable enters.
    nonbasic = setdiff(1:n, B);
    improving = nonbasic(cc(nonbasic) > tol);

    if isempty(improving)
      status = "optimal";
      return;
    endif

    entering = improving(1);
    d = Ac(:, entering);

    % x_B = bc - d*t, so only d_i > 0 limits t.
    eligible = find(d > tol);

    if isempty(eligible)
      status = "unbounded";
      return;
    endif

    ratios = bc(eligible) ./ d(eligible);
    theta = min(ratios);

    % Break minimum-ratio ties using basic-variable indices.
    tied = eligible(abs(ratios - theta) <= tol);
    [~, k] = min(B(tied));
    leaving_row = tied(k);

    B(leaving_row) = entering;
  endfor

  error("Iteration limit reached.");
endfunction
```