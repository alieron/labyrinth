---
tags:
- ma1522/chapter3
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/vectors_in_Rⁿ
next: /labyrinth/notes/math/ma1522/subspaces
---
   
### Summary
Properties of linear span
$$
\begin{align*}
\text{Origin:} &&& \mathbf{0}\in \operatorname{span}(S) \\
\\
\text{Closure under Linear Combination:} &&& \mathbf{u},\mathbf{v}\in \operatorname{span}(S) \implies \forall a,b \in \mathbb{R} \ a\mathbf{u}+b\mathbf{v}\in \operatorname{span}(S)
\end{align*}
$$

Algorithms
$$
\begin{gather*}
\mathbf{v}\in \operatorname{span}\{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{k} \} \iff \left(\begin{array}{cccc|c} \mathbf{u}_{1}&\mathbf{u}_{2}&\dots&\mathbf{u}_{k} & \mathbf{v} \end{array}\right)\text{ is consistent} \\
\\
\operatorname{span}(S)= \mathbb{R}^n \iff S \xrightarrow{RREF}\mathbf{R}, \ \mathbf{R}\text{ has no zero rows} \\
\\
\operatorname{span}(T)\subseteq \operatorname{span}(S) \iff \left(\begin{array}{c|c} S & T \end{array}\right)\text{ is consistent}
\end{gather*}
$$

Relationships between spans
$$
\begin{gather*}
S = \{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{k} \} \quad T = \{ \mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{m} \} \\
\\
\begin{split}
\operatorname{span}(T)\subseteq \operatorname{span}(S) & \iff \forall \mathbf{v}\in T\ \mathbf{v}\in \operatorname{span}(S) \\
& \iff \forall \mathbf{v}\in T \ \left(\begin{array}{cccc|c} \mathbf{u}_{1}&\mathbf{u}_{2}&\dots&\mathbf{u}_{k} & \mathbf{v} \end{array}\right)\text{ is consistent} \\
& \iff \left(\begin{array}{cccc|c|c|c|c} \mathbf{u}_{1}&\mathbf{u}_{2}&\dots&\mathbf{u}_{k} & \mathbf{v}_{1} & \mathbf{v}_{2} & \dots & \mathbf{v}_{m} \end{array}\right)\text{ is consistent} \\
& \iff \left(\begin{array}{c|c} S & T \end{array}\right)\text{ is consistent}
\end{split}
\end{gather*}
$$
> to prove euality, [prove subset in both ways](/labyrinth/notes/math/cs1231s/sets#^ca7c0d)
### Concept
Linear combinations are vector equations/linear systems
$$
c_{1}\mathbf{u}_{1}+c_{2}\mathbf{u}_{2}+\dots+c_{m}\mathbf{u}_{m}=\mathbf{b}
$$

Linear span
- set of all linear combinations of the vectors

$$
\operatorname{span}\{\mathbf{u}_1,...,\mathbf{u}_p\} = \left\{\begin{array}{c|c} c_1\mathbf{u}_1 +c_2\mathbf{u}_2 +...+c_p\mathbf{u}_p & c\in \mathbb{R} \end{array}\right\}
$$
> each linearly independent vector in the span represents one dimension of freedom

Check if vector is in a span ^0bcb4b
$$
\begin{gather*}
\left(\begin{array}{c c c c | c}
| & | & \dots & | & | \\
\mathbf{u}_{1} & \mathbf{u}_{2} & \dots & \mathbf{u}_{m} & \mathbf{v} \\
| & | & \dots & | & |
\end{array}\right)\xrightarrow{RREF} \left(\begin{array}{c|c} \mathbf{R} & \mathbf{c} \end{array}\right) \\
\\
\left(\begin{array}{c|c} \mathbf{R} & \mathbf{c} \end{array}\right)\text{ is consistent}\iff \mathbf{v}\in \operatorname{span}\{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{k} \}
\end{gather*}
$$

Check if linear combination spans n-space
$$
\begin{gather*}
S = \{ \mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{k} \}\quad \mathbf{A} = (\mathbf{u}_{1},\mathbf{u}_{2},\dots,\mathbf{u}_{k}) \\
\\
\begin{split}
\operatorname{span}(S)= \mathbb{R}^n & \iff \forall \mathbf{v}\in \mathbb{R}^n\ \mathbf{Ax}=\mathbf{v}\text{ is consistent} \\
& \iff \mathbf{A}\xrightarrow{RREF}\mathbf{R}, \ \mathbf{R}\text{ has no zero rows}
\end{split}&\text{ie. there is a linear combination that reaches every vector in }\mathbb{R}^n \\
\\
k < n \implies \text{there is a zero row} \implies \operatorname{span}(S)\neq \mathbb{R}^n
\end{gather*}
$$
> the span must have enough dimensions of freedom to reach every vector

Geometric representation of span as [lines in R³](/labyrinth/notes/math/ma1301/lines_in_R³) and [planes in R³](/labyrinth/notes/math/ma1301/planes_in_R³)
$$
\begin{gather*}
\text{with }\mathbf{u}, \mathbf{v} \in \mathbb{R}^3 \\
\\
\operatorname{span}\{\mathbf{u}\}\text{ represents the set of all the points on the line of }\mathbf{u}\text{ through the origin:} \\
\mathbf{r}=0+c \mathbf{u}\\
\\
\operatorname{span}\{\mathbf{u},\mathbf{v}\}\text{ represents the set of all the points on the plane of }\mathbf{u}\text{ and }\mathbf{v}\text{ through the origin:} \\
\mathbf{r} \cdot \mathbf{n} = 0\\
\mathbf{r} \cdot ( \mathbf{v} \times \mathbf{u}) = 0
\end{gather*}
$$
> represents the point of higher dimensional space as the number of non-parallel vectors are included
> dimension is equal to the number of linearly independent vectors in the span
### Application
Solving a linear combination
$$
\begin{gather*}
\mathbf{u}_{1}=\begin{pmatrix}
1\\-2\\-5
\end{pmatrix},
\mathbf{u}_{2}=\begin{pmatrix}
2\\5\\6
\end{pmatrix},
\boldsymbol{b}=\begin{pmatrix}
7\\4\\-3
\end{pmatrix}\\
\\
x_{1}\mathbf{u}_{1}+x_{2}\mathbf{u}_{2}=\boldsymbol{b}\\
\\
x_{1}\begin{pmatrix}
1\\-2\\-5
\end{pmatrix}+x_{2}\begin{pmatrix}
2\\5\\6
\end{pmatrix}=\begin{pmatrix}
7\\4\\-3
\end{pmatrix}\\
\begin{pmatrix}
x_{1}+2x_{2}\\-2x_{1}+5x_{2}\\-5x_{1}+6x_{2}
\end{pmatrix}=\begin{pmatrix}
7\\4\\-3
\end{pmatrix}\\
\\
\left(\begin{array}{c c | c}
1 & 2 & 7 \\
-2 & 5 & 4 \\
-5 & 6 & -3
\end{array}\right) \\
\to\left(\begin{array}{c c | c}
1 & 2 & 7 \\
0 & 9 & 18 \\
0 & 16 & 32
\end{array}\right)
\to\left(\begin{array}{c c | c}
1 & 2 & 7 \\
0 & 1 & 2 \\
0 & 1 & 2
\end{array}\right)
\to\left(\begin{array}{c c | c}
1 & 0 & 3 \\
0 & 1 & 2 \\
0 & 0 & 0
\end{array}\right)
\end{gather*}
$$
> combine the column vectors into a matrix and solve for the unknown coefficients

Finding vectors ouside of the span
$$
\begin{gather*}
S = \left\{ \begin{pmatrix}
1 \\
2 \\
1
\end{pmatrix},\begin{pmatrix}
2 \\
6 \\
-2
\end{pmatrix},\begin{pmatrix}
-3 \\
-11 \\
7
\end{pmatrix} \right\} \\
\\
\text{check if }\mathbf{v}=\begin{pmatrix}
x \\
y \\
z
\end{pmatrix} \in \operatorname{span}(S) \\
\\
\left(\begin{array}{ccc|c} 1 & 2 & -3 &x \\
2 & 6 & -11 & y \\
1 & -2 & 7 & z \end{array}\right)\to\left(\begin{array}{ccc|c} 1 & 2 & -3 &x \\
0 & 2 & -5 & y-2x \\
0 & -4 & 10 & z-x \end{array}\right)\to\left(\begin{array}{ccc|c} 1 & 2 & -3 &x \\
0 & 2 & -5 & y-2x \\
0 & 0 & 0 & z+2y-5x \end{array}\right) \\
\\
\begin{split}
\left(\begin{array}{c|c} S & \mathbf{v} \end{array}\right) \text{ is inconsistent} & \implies z+2y-5x\neq 0 \\
& \implies \begin{pmatrix}
x \\
y \\
z
\end{pmatrix}\not\in \operatorname{span}(S)
\end{split} \\
\therefore\begin{pmatrix}
1 \\
0 \\
0 
\end{pmatrix},\begin{pmatrix}
0 \\
1 \\
0 
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1
\end{pmatrix}\text{ fulfill this condition}
\end{gather*}
$$