---
tags:
  - co250/chapter2
  - math/optimization
  - lang/octave
complete: false
prev: /labyrinth/notes/math/co250/standard_equality_form
next: /labyrinth/notes/math/co250/simplex_algorithm

---
### Concept
#### Basis
- similar to the traditional definition in linear algebra

$$
B\text{ is a basis} \iff A_{B}\text{ is square}\land A_{B}\text{ is non-singluar}
$$
> a non-singular matrix is one with [independent](/labyrinth/notes/math/ma1522/linear_independence) columns

Basic variables
- basic variables are the ones corresponding to the independent columns

$$
\begin{align*}
&\text{for basis }B\text{ of }A \\
\\
& x_{j} \begin{cases}
\text{is a basic variable} & j \in B \\
\text{is a non-basic variable} & j \not\in B
\end{cases}
\end{align*}
$$

Basic solution
$$
\begin{align*}
&x\text{ is a basic solution for basis }B \iff \\
\\
1)& \quad Ax=b \\
2)& \quad x_{j} = 0, \ \forall j \not\in B
\end{align*}
$$
> non-basic variables are zero
> basic solutions are feasible if all values are non-negative

Uniqueness of basic solution
$$
\begin{gather*}
\begin{aligned}
b &= Ax \\
&= \sum_jA_jx_j \\
&= \sum_{j\in B}A_jx_j+\sum_{j\notin B}A_j\underbrace{x_j}_{=0} \\
&= \sum_{j\in B}A_jx_j \\
&= A_{B}x_{B}
\end{aligned} \\
\\
\begin{aligned}
B\text{ is a basis} &\implies A_{B}\text{ is non-singular} \\
&\implies A_{B}^{-1}\text{ exists}
\end{aligned} \\
\\
\therefore x_{B} = A_{B}^{-1}b
\end{gather*}
$$

#### Canonical form
- choose basic variables that form an identity matrix, so they can be expressed in terms of non-basic variables
- 

$$
\begin{align*}
& \text{(P): }\max\left\{c^{T}x:Ax=b,x\geq {\large\unicode{x1D7D8}} \right\} \\
\\
& \text{(P) is in canonical form for }B \iff \\
\\
1) & \quad A_{B} = I \\
2) & \quad c_{j} = 0, \ \forall j \in B
\end{align*}
$$

Every linear program has a canonical form
- feasible solutions have the same objective value

Converting to canonical form
1. make the desired basis submatrix an identity

$$
\begin{gather*}
Ax = b \quad \Longrightarrow \quad A'x = b', \quad A'_{B} = I \\
\\
\underbrace{A_B^{-1}A}_{A'}x=\underbrace{A_B^{-1}b}_{b'}
\end{gather*}
$$

2. remove basis variables from the objective function

$$
\begin{gather*}
z = c^Tx \quad \Longrightarrow \quad z =\bar{c}^Tx  + \bar{z}, \quad \forall j \in B, c_{j} = 0 \land \bar{z}\text{ is a constant} \\
\\
y=(A_B^T)^{-1}c_B \\
\\
z=\underbrace{\left[c^{T}-y^{T}A\right]}_{\bar{c}^{T}}x+\underbrace{y^{T}b}_{\bar{z}}
\end{gather*}
$$

### Application
Finding a basic solution
$$
\begin{gather*}
\begin{array}{c} \begin{array}{cccc}\color{red}{1}&\color{red}{2} &\color{red}{3}\;\; &\color{red}{4}\; \end{array} \\ 
\underbrace { \begin{pmatrix} 1 & 0 & 1 & -1 \\ 0 & 1 & 1 & 1 \end{pmatrix} }_{A}
\end{array} x = \underbrace { \begin{pmatrix} 2 \\ 2 \end{pmatrix} }_{b} \\
\\
B=\{1,4\} \\
\\
\begin{aligned}
\begin{pmatrix} 2 \\ 2 \end{pmatrix}&= \begin{pmatrix} 1 & 0 & 1 & -1\\ 0 & 1 & 1 & 1 \end{pmatrix} x\\
&= x_1\begin{pmatrix} 1 \\ 0 \end{pmatrix}+ \underbrace{x_2}_{=0}\begin{pmatrix} 1 \\ 0 \end{pmatrix}+ \underbrace{x_3}_{=0}\begin{pmatrix} 1 \\ 1 \end{pmatrix}+ x_4\begin{pmatrix} -1 \\ 1 \end{pmatrix} && \text{(set non-basic vars to 0)} \\
&= \begin{pmatrix} 1 & -1\\ 0 & 1 \end{pmatrix} \begin{pmatrix} x_1\\ x_4 \end{pmatrix}
\end{aligned} \\
\\
\begin{aligned}
\begin{pmatrix} x_1\\ x_4 \end{pmatrix}&= \begin{pmatrix} 1 & -1\\ 0 & 1 \end{pmatrix} ^{-1} \begin{pmatrix} 2 \\ 2 \end{pmatrix} \\
&= \begin{pmatrix} 1 & 1\\ 0 & 1 \end{pmatrix} \begin{pmatrix} 2 \\ 2 \end{pmatrix} \\
&= \begin{pmatrix} 4\\ 2 \end{pmatrix}
\end{aligned} \\
\\
\text{basic solution for }B\text{: }x = \begin{pmatrix}
4 & 0 & 0 & 2
\end{pmatrix} ^T
\end{gather*}
$$

Canonical form with different basis
$$
\begin{gather*}
\begin{alignedat}{5} 
& \max \ && z= \underbrace{\begin{pmatrix}
0 & 0 & 2 & 4
\end{pmatrix}}_{c}x \\ &\text{s.t. } \ & \\ &&& \underbrace{ \begin{pmatrix} 1 & 0 & 1 & -1\\ 0 & 1 & 1 & 2 \end{pmatrix} }_{A} x = \underbrace{ \begin{pmatrix} 1\\ 2 \end{pmatrix} }_{b} \\ &&& x_1,x_2,x_3,x_4\geq 0
\end{alignedat} \\
\\
\\
\text{use: }B = \{ 2,3 \} \\
\\
\text{rewriting constraints:} \\
\text{goal: }A_{B} = I \\
\\
\begin{aligned}
\begin{pmatrix} 1 & {\color{red} 0} & {\color{red} 1} & -1\\ 0 & {\color{red} 1} & {\color{red} 1} & 2 \end{pmatrix} x &= \begin{pmatrix} 1\\ 2 \end{pmatrix} \\
\\
\begin{pmatrix} {\color{red} 0} & {\color{red} 1} \\ {\color{red} 1} & {\color{red} 1} \end{pmatrix}^{-1}\begin{pmatrix} 1 & {\color{red} 0} & {\color{red} 1} & -1\\ 0 & {\color{red} 1} & {\color{red} 1} & 2 \end{pmatrix} x &= \begin{pmatrix} {\color{red} 0} & {\color{red} 1} \\ {\color{red} 1} & {\color{red} 1} \end{pmatrix}^{-1}\begin{pmatrix} 1\\ 2 \end{pmatrix} \\
\\
\end{aligned} \\
\boxed{\begin{pmatrix} -1 & {\color{blue} 1} & {\color{blue} 0} & 3\\ 1 & {\color{blue} 0} & {\color{blue} 1} & -1 \end{pmatrix} x = \begin{pmatrix} 1\\ 1 \end{pmatrix}}\\
\\
\text{rewriting objective function:} \\
\text{goal: }\forall j \in B, \ c_{j}= 0
\\
\begin{aligned}
\begin{pmatrix} 1 & 0 & 1 & -1\\ 0 & 1 & 1 & 2 \end{pmatrix} x &= \begin{pmatrix} 1\\ 2 \end{pmatrix} &&\text{(original constraints)} \\
\\
\begin{pmatrix} y_{1} & y_{2}\end{pmatrix} \begin{pmatrix} 1 & 0 & 1 & -1\\ 0 & 1 & 1 & 2 \end{pmatrix} x &= \begin{pmatrix} y_{1} & y_{2}\end{pmatrix} \begin{pmatrix} 1\\ 2 \end{pmatrix}
\end{aligned} \\
\\
\begin{aligned}
0 &= - \begin{pmatrix} y_{1} & y_{2}\end{pmatrix} \begin{pmatrix} 1 & 0 & 1 & -1\\ 0 & 1 & 1 & 2 \end{pmatrix} x + \begin{pmatrix} y_{1} & y_{2}\end{pmatrix} \begin{pmatrix} 1 \\ 2 \end{pmatrix} \\
z &= \begin{pmatrix}
0 & 0 & 2 & 4
\end{pmatrix}x \\
\\
z &= \underbrace{ \left[ \begin{pmatrix} 0 & {\color{red} 0} & {\color{red} 2} & 4\end{pmatrix} - \begin{pmatrix} y_{1} & y_{2}\end{pmatrix} \begin{pmatrix} 1 & {\color{red} 0} & {\color{red} 1} & -1\\ 0 & {\color{red} 1} & {\color{red} 1} & 2 \end{pmatrix} \right] }_{ \bar{c}^T } x + \underbrace{ \begin{pmatrix} y_{1} & y_{2}\end{pmatrix} \begin{pmatrix} 1 \\ 2 \end{pmatrix} }_{ \bar{z} }
\end{aligned} \\
\\
\begin{aligned}
\bar{c}^T = \begin{pmatrix} 0 & 0 \end{pmatrix} &= \begin{pmatrix} {\color{red} 0} & {\color{red} 2} \end{pmatrix} - \begin{pmatrix} y_{1} & y_{2} \end{pmatrix} \begin{pmatrix} {\color{red} 0} & {\color{red} 1} \\ {\color{red} 1} & {\color{red} 1} \end{pmatrix} \\
\\
\begin{pmatrix} {\color{red} 0} & {\color{red} 2} \end{pmatrix} &= \begin{pmatrix} y_{1} & y_{2} \end{pmatrix} \begin{pmatrix} {\color{red} 0} & {\color{red} 1} \\ {\color{red} 1} & {\color{red} 1} \end{pmatrix} \\
\\
\begin{pmatrix} \color{red}{0} & \color{red}{1} \\ \color{red}{1} & \color{red}{1} \end{pmatrix} ^{T} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} &= \begin{pmatrix} \color{red}{0} & \color{red}{1} \\ \color{red}{1} & \color{red}{1} \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} = \begin{pmatrix} \color{red}{0}\\ \color{red}{2} \end{pmatrix} && \text{(transpose the equation)} \\
\\
\begin{pmatrix} y_1 \\ y_2 \end{pmatrix} &= \begin{pmatrix} \color{red}{0} & \color{red}{1} \\ \color{red}{1} & \color{red}{1} \end{pmatrix}^{-1} \begin{pmatrix} \color{red}{0}\\ \color{red}{2} \end{pmatrix} \\
&=\begin{pmatrix} 2 \\ 0 \end{pmatrix}
\end{aligned} \\
\\
\begin{aligned}
z &= \left[ \begin{pmatrix} 0 & \color{red}{0} & \color{red}{2} & 4 \end{pmatrix} - \begin{pmatrix}2 & 0 \end{pmatrix} \begin{pmatrix} 1 & \color{red}{0} & \color{red}{1} & -1\\ 0 & \color{red}{1} & \color{red}{1} & 2 \end{pmatrix} \right] x + \begin{pmatrix} 1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 2 \end{pmatrix} \\
&= [\begin{pmatrix} 0 & 0 & 2 & 4 \end{pmatrix} - \begin{pmatrix}
2 & 0 & -2 & -2
\end{pmatrix}]x + 2
\end{aligned} \\
\\
\boxed{z= \begin{pmatrix}
-2 & {\color{blue} 0} & {\color{blue} 0} & 6
\end{pmatrix}x + 2}
\end{gather*}
$$
> recall that [matrix transpose](/labyrinth/notes/math/ma1522/matrix_transpose) swaps the operands over [matrix multiplication](/labyrinth/notes/math/ma1522/matrix_multiplication)
### Extra
Column sub-matrix notation
$$
\begin{gather*}
\begin{array} {c} \begin{array} {ccccc} \qquad\color{red}{1}& \color{red}{2}\;\; & \color{red}{3}\; & \color{red}{4}\; & \,\,\color{red}{5} \end{array} \\  
A=\begin{pmatrix} \vert & \vert & \vert & \vert & \vert \\ a_{1} & a_{2} & a_{3} & a_{4} & a_{5} \\ \vert  & \vert & \vert & \vert & \vert \end{pmatrix} \end{array} \\
\\
B=\{1,2,3\} \qquad A_{B} = \begin{pmatrix} \vert & \vert & \vert \\ a_{1} & a_{2} & a_{3}  \\ \vert  & \vert & \vert \end{pmatrix} \\
\\
B=\{1,3,4\} \qquad A_{B} = \begin{pmatrix} \vert & \vert & \vert \\ a_{1} & a_{3} & a_{4}  \\ \vert  & \vert & \vert \end{pmatrix}
\end{gather*}
$$

Working to derive the objectvie function rewrite step
$$
\begin{align*}
0^T = \bar{c}_{B}^T &= c_{B}^T-y^TA_{B} \\
y^TA_{B} &= c_{B}^T \\
A_{B}^T y&= c_{B} \\
y &= (A_{B}^T)^{-1}c_{B}
\end{align*}
$$

### Extra
Octave function to convert an LP into canonical form
```octave
function [Ac, bc, cc, z0] = canonical_lp(c, A, b, B)
  % Canonical form of:
  %   maximize c' * x
  %   subject to A*x = b, x >= 0
  %
  % B: indices of the basic variables.
  %
  % Output:
  %   Ac*x = bc
  %   z = z0 + cc'*x
  %
  % Ac(:, B) is the identity; cc(B) is zero.

  c = c(:);
  b = b(:);
  B = B(:)';
  [m, n] = size(A);

  if length(c) != n || length(b) != m
    error("Dimensions of c, A, and b do not match.");
  endif

  if length(B) != m || length(unique(B)) != m ...
      || any(B < 1) || any(B > n) || any(B != fix(B))
    error("B must contain m distinct valid column indices.");
  endif

  AB = A(:, B);

  if rank(AB) < m
    error("The selected basis matrix is singular.");
  endif

  Ac = AB \ A;
  bc = AB \ b;

  cB = c(B);
  cc = c - Ac' * cB;
  z0 = cB' * bc;

  % Remove numerical noise in the basis columns.
  Ac(:, B) = eye(m);
  cc(B) = 0;
endfunction
```