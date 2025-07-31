---
tags:
- ma1522/chapter3
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/transition_matrices
next: /labyrinth/notes/math/ma1522/matrix_spaces
---
   
### Summary
Relations between subspaces
$$
\begin{gather*}
\text{for }U,V\subseteq \mathbb{R}^n \\
\\
U\subseteq V \implies \operatorname{dim}(U)\leq \operatorname{dim}(V) \\
U\subset V \implies \operatorname{dim}(U)< \operatorname{dim}(V) \\
\\
\operatorname{dim}(U)=dim(V)\iff U=V
\end{gather*}
$$

Dimension of a solution space ^a42fe0
- <span style="color:rgb(255, 127, 0)">number of non-pivot columns</span>

Equivalent checks for basis
$$
\begin{align*}
&&& S \text{ is a basis for }V \iff\\
\\
1) &&& \operatorname{span}(S)=V\land S\text{ is linearly independent} && \text{(Definition of Basis)} \\
\\
2) &&& | S | =\operatorname{dim}(V)\land S\subseteq V\land S\text{ is linearly independent} && \text{when its hard to check }\operatorname{span}(S)=V \\
\\
3) &&& | S | =\operatorname{dim}(V)\land V\subseteq \operatorname{span}(S) && \text{when its hard to check linear independence}
\end{align*}
$$
> in essence to check $L\subseteq R$ do $\left(\begin{array}{c|c} R & L \end{array}\right)$
### Concept
Dimension of a subspace
- minimum number of vectors required to span a subspace -> number of vectors in any basis of the space
- number of degress of freedom(linearly independent vectors) in the subspace

$$
\begin{gather*}
\text{for }V\subseteq \mathbb{R}^n \\
\\
S=\{\mathbf{u}_1,\mathbf{u}_2,...,\mathbf{u}_k\}\text{ is a basis for }V \land T=\{\mathbf{v}_1,\mathbf{v}_2,...,\mathbf{v}_m\}\text{ is a basis for }V \implies k=m \\
\\
\operatorname{dim}(V)=k=m
\end{gather*}
$$
> every basis of a subspace has the same number of vectors

Spanning set theorem
$$
\begin{gather*}
\text{for }S=\{ \mathbf{u}_{1} , \mathbf{u}_{2} , \dots , \mathbf{u}_{k} \} \subseteq \mathbb{R}^n\\
\\
V=\operatorname{span}(S)\land V\neq \{ \mathbf{0} \}\implies \exists T \subseteq S \ T\text{ is a basis for }V
\end{gather*}
$$
> if a set spans $V$, then either it or its subset is a basis for $V$

Linear independence theorem
$$
\begin{gather*}
\text{for }V\subseteq \mathbb{R}^n \\
\\
S=\{ \mathbf{u}_{1} , \mathbf{u}_{2} , \dots , \mathbf{u}_{k} \} \subseteq V \land S\text{ is linearly independent}\implies \exists T\supseteq S \ T\text{ is a basis for }V
\end{gather*}
$$
> a linearly independent subset of $V$, is either a basis for $V$ or is part of a superset that is a basis for $V$

Check for basis with dimensions
$$
\begin{gather*}
\text{for }V\subseteq \mathbb{R}^n \ \operatorname{dim}(V)=k \\
\\
\exists S\subseteq V\ | S | =k \implies S\text{ is a basis for }V \\
\\
\exists S\subseteq \mathbb{R}^n \ |S|=k\land V\subseteq \operatorname{span}(S) \implies S\text{ is a basis for }V
\end{gather*}
$$
> number of basis vectors match the dimension and $S$ in $V$ or $S$ spans $V$
### Application
Check for basis
$$
\begin{gather*}
V=\left\{\begin{array}{c|c} \begin{pmatrix}
x \\
y \\
z
\end{pmatrix} & x+y-z=0 \end{array}\right\} \qquad S = \left\{ \begin{pmatrix}
-1 \\
2 \\
1
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
2
\end{pmatrix} \right\} \\
\\
\begin{split}
\text{Method (1):} &\quad& i)\ & \operatorname{span}(S)=V \\
&&& (\subseteq)\ \forall \mathbf{u}\in S \ \mathbf{u}\in V\\
&&& \begin{pmatrix}
-1 \\
2 \\
1
\end{pmatrix}: -1+2-1=0 \qquad \begin{pmatrix}
1 \\
1 \\
2
\end{pmatrix}:1+1-2=0 \\
&&& \therefore S \subseteq V \implies \operatorname{span}(S)\subseteq V \\
\\
&&& (\supseteq)\ \left(\begin{array}{c|c} 'S' & 'V' \end{array}\right) \\
&&& V=\left\{\begin{array}{c|c} s\begin{pmatrix}1 \\ 0 \\ 1\end{pmatrix}+t\begin{pmatrix}0 \\1 \\1\end{pmatrix} & \forall s,t\in \mathbb{R} \end{array}\right\} \\
&&& \left(\begin{array}{cc|cc} -1 & 1 & 1 & 0 \\
2 & 1 & 0 & 1 \\
1 & 2 & 1 & 1 \end{array}\right)\to\left(\begin{array}{cc|cc} 1 & 0 & -\frac{1}{3} & \frac{1}{3} \\
0 & 1 & \frac{2}{3} & \frac{1}{3} \\
0 & 0 & 0 & 0 \end{array}\right)\text{ is consistent}\\
&&& \therefore V \subseteq \operatorname{span}(S) \\
\\
&\quad& ii)\ & S\text{ is linearly independent} \\
&&& \forall a \in \mathbb{R} \ \mathbf{u}_{1}\neq a\mathbf{u}_{2}
\\
\\
\text{Method (2):} &\quad& i)\ & | S | =\operatorname{dim}(V)\\
&&& \text{coefficient matrix: }\begin{pmatrix}
1 & 1 & -1
\end{pmatrix}\text{ has 2 nonpivot columns} \\
&&& \therefore \operatorname{dim}(V)=2 \\
\\
&&& \text{or linear system of }V\text{ is a plane} \\
&&& \therefore \operatorname{dim}(V)=2 \\
\\
&&& \therefore | S | = 2= \operatorname{dim}(V) \\
\\
&\quad& ii)\ & S \subseteq V \\
&&& \text{(Above)} \\
\\
&\quad& iii)\ & S\text{ is linearly independent} \\
&&& \text{(Above)} \\
\\
\\
\text{Method (3):} &\quad& i)\ & | S | =\operatorname{dim}(V) \\
&&& \text{(Above)} \\
\\
&\quad& ii)\ & V\subseteq \operatorname{span}(S) \\
&&& \text{(Above)}
\end{split}
\end{gather*}
$$

Subspace implicit <-> explicit form via coefficient matrix
$$
\begin{gather*}
V=\left\{\begin{array}{c|c} \begin{pmatrix}
x \\
y \\
z
\end{pmatrix} & x+y-z=0 \end{array}\right\} \\
\\
\left(\begin{array}{c|c} \mathbf{A} & \mathbf{b} \end{array}\right) = \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \end{array}\right)\to\underbrace{ \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\
0 & 1 & 0 & s \\
0 & 0 & 1 & t \end{array}\right) }_{ \text{Adding Parameters} }\to\left(\begin{array}{ccc|c} 1 & 0 & 0 & t-s \\
0 & 1 & 0 & s \\
0 & 0 & 1 & t \end{array}\right) \\
\\
\therefore\text{general solution: }t\begin{pmatrix}
1 \\
0 \\
1
\end{pmatrix}+s\begin{pmatrix}
-1 \\
1 \\
0
\end{pmatrix}
\end{gather*}
$$