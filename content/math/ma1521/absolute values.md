---
tags:
- ma1521
- math/algebra
complete: true
next: /labyrinth/notes/math/ma1521/functions
---



### Summary
$$
\begin{gather*}
|-x| = |x| \\
|xy| = |x||y| \\
\sqrt{ x^2 } = |x| \\
\\
-|x|\leq x\leq|x| \\
x=-|x| \ or \ |x| \\
|x| = -x \ or \ x \\
\\
|x|<a \\
-a < x < a
\end{gather*}
$$

Triangle inequality
$$
\begin{gather*}
|x+y| \leq |x|+|y| \\
\\
|x|-|y| \leq |x-y|
\end{gather*}
$$

### Concept
$$
|x| = 
\left\{
\begin{array}{ll}
x  & x \geq 0\\
-x & x < 0
\end{array}
\right.
$$

### Application
Sign inequalities
$$
\begin{align*}
Prove: \ |x − a| < r \iff &x ∈ (−r + a, a + r) \\
\\
\because |x| = x& \quad or \quad -x \\
\\
\begin{split}
(x-a) &< r \\
x &< r+a
\end{split} \qquad & or \qquad
\begin{split}
-(x-a) &< r\\
x &> -r + a\\
\end{split} \\
\\
\therefore -r+a<&x<r+a
\end{align*}
$$

[Quadratic](/labyrinth/notes/math/math_fundementals/quadratic_equations) inequalities
$$
\begin{align*}
|x + 1| &\leq |2x − 1| \\
(x+1)^2 &\leq (2x-1)^2 \\
x^2 +1+2x &\leq 4x^2+1-4x \\
0 &\leq 3x^2-6x \\
0 &\leq 3x(x-2) \\
3x &\leq 0 \quad or \quad x-2 \geq 0 \\
x &\leq 0 \quad or \quad x\geq 2 \\
\\
x&\in(-\infty,0]\cup[2,\infty)
\end{align*}
$$

Proving the triangle inequality
$$
\begin{align*}
|x+y| &\leq |x|+|y| \\
|x+y|^2 &\leq (|x|+|y|)^2 \\
(x+y)^2 &\leq (|x|+|y|)^2 \\
x^2+y^2+2xy &\leq |x|^2+|y|^2+2|x||y| \\
\cancel{ x^2+y^2 }+2xy &\leq \cancel{ x^2+y^2 }+2|x||y| \\
2xy &\leq2|x||y| \\
xy &\leq |xy|, \quad \because xy=-|xy| \ or \ |xy|
\end{align*}
$$

Using the triangle inequality
$$
\begin{align*}
Prove: \ ||x| − |y|| &\leq |x − y|, \ for \ x,y \in \mathbb{R}\\
\\
|x+y| &\leq |x|+|y| \qquad \text{(Triangle Inequality)}\\
\\
\begin{split}
|x|&=|(x-y)+y| \leq |x-y|+|y| \\
\\
\therefore |x| &\leq |x-y|+|y|\\
|x|-|y| &\leq |x-y| \qquad \text{(-ve Triangle Inequality)}\\
\\
\end{split} \ & \qquad
\begin{split}
|y|&=|(y-x)+x| \leq|y-x|+|x|=|x-y|+|x| \\
\\
\therefore |y|&\leq|x-y|+|x| \\
-|x|+|y|&\leq |x-y| \\
-(|x|-|y|) &\leq|x-y|
\end{split} \\
\\
\because ||x|-|y|| = |x|&-|y|  \quad or \quad -(|x|-|y|) \\
\therefore ||x|-|y|| & \leq |x-y|
\end{align*}
$$

###### Extra
1. Identify subject
2. Expand to both signs
3. Solve
4. Combine