---
tags:
  - math235/chapter2
  - math/linear_algebra
complete: false
prev: /labyrinth/notes/math/math235/linear_transformations_II
next: /labyrinth/notes/math/math235/isomorphism_of_vector_spaces
pred: "[transition matrices](/labyrinth/notes/math/ma1522/transition_matrices)"
---
### Summary
Coordinate vector and matrix
$$
\begin{gather*}
\vec{v}=c_1s_1+\cdots+c_ns_n
\quad\iff\quad
[\vec{v}]_{\mathcal S}=
\begin{bmatrix}
c_1\\ \vdots\\ c_n
\end{bmatrix} \\
\\
{}_{\mathcal S}\mathcal I_{\mathcal B}
=
\begin{bmatrix}
\vert & & \vert\\
[b_1]_{\mathcal S} & \cdots & [b_n]_{\mathcal S}\\
\vert & & \vert
\end{bmatrix}
\end{gather*}
$$

$$
\begin{gather*}
\mathcal{B}[v]_{\mathcal{B}} = {}_{\epsilon}\mathcal I_{\mathcal B}[v]_{\mathcal{B}} = v \\
\\
\\
[\mathcal{B}]_{\mathcal{B}}= {}_{\mathcal{B}}\mathcal{I}_{\mathcal{B}} = I \\
\\
\\
{}_{\mathcal S}\mathcal I_{\mathcal B} = \mathcal{S}^{-1}
\end{gather*}
$$

### Concept
#### Unique representation theorem
- (1.3.23)

$$
\forall \vec{v} \in \operatorname{span}\{ \vec{v}_{1}, \dots ,\vec{v}_{k} \}, \qquad \exists! (x_{1},\dots,x_{k})\in \mathbb{F}^k, \ \vec{v} = x_{1}\vec{v}_{1}+\dots+x_{k}\vec{v}_{k}
$$
> only one set of coefficients exists for any given vector

#### Coordinate vector
- (1.3.26)
- expression of a vector in the basis of another vector space
$$
\begin{gather*}
\mathcal S=(s_1,\dots,s_n),\qquad \mathcal B=(b_1,\dots,b_n) \\
\\
\vec{v} \in \operatorname{span}(\mathcal{B}),\qquad \vec{v}=c_1s_1+\cdots+c_ns_n
\quad\iff\quad
[\vec{v}]_{\mathcal S}=
\begin{bmatrix}
c_1\\ \vdots\\ c_n
\end{bmatrix}
\end{gather*}
$$



Coordinate map is a linear map
- (1.3.29)

$$
\begin{align*}
&\text{Claim: }[\vec{x} + t \vec{y}]_{\mathcal{B}} = [\vec{x}]_{\mathcal{B}} + t[\vec{y}]_{\mathcal{B}} \\
\\
&\text{Suppose }\vec{x} = c_{1}b_{1} + \dots c_{2}b_{2}, \ \vec{y} = d_{1}b_{1}+\dots+d_{n} b_{n} \\
\\
&\quad [\vec{x} + t \vec{y}]_{\mathcal{B}} = \begin{bmatrix}
c_{1}+td_{1} \\
\vdots \\
c_{n} +td_{n} 
\end{bmatrix} = \begin{bmatrix}
c_{1} \\
\vdots \\
c_{n}
\end{bmatrix} + t\begin{bmatrix}
d_{1} \\
\vdots \\
d_{n}
\end{bmatrix} = [\vec{x}]_{\mathcal{B}} + t[\vec{y}]_{\mathcal{B}} \\
\\
&\therefore [\vec{x} + t \vec{y}]_{\mathcal{B}} = [\vec{x}]_{\mathcal{B}} + t[\vec{y}]_{\mathcal{B}} \\
&&\square
\end{align*}
$$

#### Change of coordinate matrix
- change from basis $\mathcal{B}$
- think of linear transforms as a map between 

$$
\begin{gather*}
\mathcal{B} \to \mathcal{S} \\
\\
[\vec{v}]_{\mathcal{S}} = {}_{\mathcal S}\mathcal I_{\mathcal B}[\vec{v}]_{\mathcal B} \\
\\
{}_{\mathcal S}\mathcal I_{\mathcal B}
=
\begin{bmatrix}
\vert & & \vert\\
[b_1]_{\mathcal S} & \cdots & [b_n]_{\mathcal S}\\
\vert & & \vert
\end{bmatrix}
\end{gather*}
$$
> B to S, then its columns are b in S coordinates

Transitivity
$$
{}_{\mathcal C}\mathcal I_{\mathcal B}{}_{\mathcal B}\mathcal I_{\mathcal A} = {}_{\mathcal C}\mathcal I_{\mathcal A}
$$
$$
\begin{align*}
&\text{Claim: }{}_{\mathcal C}\mathcal I_{\mathcal B}{}_{\mathcal B}\mathcal I_{\mathcal A} = {}_{\mathcal C}\mathcal I_{\mathcal A} \\
\\
&\text{We know }[v]_{\mathcal{B}} = {}_{\mathcal B}\mathcal I_{\mathcal A}[v]_{\mathcal{A}}, \ [v]_{\mathcal{C}} = {}_{\mathcal C}\mathcal I_{\mathcal B}[v]_{\mathcal{B}}, \ [v]_{\mathcal{C}} = {}_{\mathcal C}\mathcal I_{\mathcal A}[v]_{\mathcal{A}} \\
\\
&\text{then} \\
&\quad \begin{aligned}[t]
{}_{\mathcal C}\mathcal I_{\mathcal B}{}_{\mathcal B}\mathcal I_{\mathcal A}[v]_{\mathcal{A}} &= {}_{\mathcal C}\mathcal I_{\mathcal B}[v]_{\mathcal{B}} \\
&= [v]_{\mathcal{C}}
\end{aligned} \\
\\
&\therefore {}_{\mathcal C}\mathcal I_{\mathcal B}{}_{\mathcal B}\mathcal I_{\mathcal A} = {}_{\mathcal C}\mathcal I_{\mathcal A} \\
&&\square
\end{align*}
$$


Inverse
$$
_\mathcal{C} \mathcal{I}_{\mathcal{B}} = \left({}_\mathcal{B} \mathcal{I}_\mathcal{C}\right)^{-1}
$$
$$
\begin{align*}
& \text{Claim: }_\mathcal{C} \mathcal{I}_{\mathcal{B}} = \left({}_\mathcal{B} \mathcal{I}_\mathcal{C}\right)^{-1} \\
\\
& \text{Suppose }{}_\mathcal{C}\mathcal{I}_\mathcal{B}\ {}_\mathcal{B}\mathcal{I}_\mathcal{C}\ [\vec{v}]_\mathcal{C} = [\vec{v}]_\mathcal{C} \text{ and }{}_\mathcal{B}\mathcal{I}_\mathcal{C}\ {}_\mathcal{C}\mathcal{I}_\mathcal{B}\ [\vec{v}]_\mathcal{B} = [\vec{v}]_\mathcal{B}\\
\\
&\text{then} \\
&\quad\begin{aligned}[t]
{}_\mathcal{C}\mathcal{I}_\mathcal{B}\ {}_\mathcal{B}\mathcal{I}_\mathcal{C}\ [\vec{v}]_\mathcal{C} &= [\vec{v}]_\mathcal{C}&&&{}_\mathcal{B}\mathcal{I}_\mathcal{C}\ {}_\mathcal{C}\mathcal{I}_\mathcal{B}\ [\vec{v}]_\mathcal{B} &= [\vec{v}]_\mathcal{B} \\
{}_\mathcal{C}\mathcal{I}_\mathcal{B}\ {}_\mathcal{B}\mathcal{I}_\mathcal{C} &= I &&&{}_\mathcal{B}\mathcal{I}_\mathcal{C}\ {}_\mathcal{C}\mathcal{I}_\mathcal{B} &= I
\end{aligned}\\
\\
&\therefore\ _\mathcal{C} \mathcal{I}_{\mathcal{B}} = \left({}_\mathcal{B} \mathcal{I}_\mathcal{C}\right)^{-1} \\
\\
&& \square
\end{align*}
$$

#### Changing coordinates of transformations
$$
_{\mathcal{B}}[L]_{\mathcal{B}} = [L]_{\mathcal{B}} = 
$$

$$
{}_{\mathcal{C}'} [L]_{\mathcal{B}'} = {}_\mathcal{C'}[I]_\mathcal{C} \ {}_\mathcal{C}[L]_\mathcal{B} \ {}_\mathcal{B}[I]_\mathcal{B'}
$$
$$
\begin{align*}
{}_\mathcal{C'}[I]_\mathcal{C}\ {}_\mathcal{C}[L]_\mathcal{B}\ {}_\mathcal{B}[I]_\mathcal{B'}\ [\vec{v}]_{\mathcal{B}'} &= {}_\mathcal{C'}[I]_\mathcal{C}\ {}_\mathcal{C}[L]_\mathcal{B}\ [\vec{v}]_{\mathcal{B}}\\
&= {}_\mathcal{C'}[I]_\mathcal{C}\ [L(\vec{v})]_{\mathcal{C}} \\ 
&= [L(\vec{v})]_{\mathcal{C}'} \\
&= {}_{\mathcal{C}'} [L]_{\mathcal{B}'} [\vec{v}]_{\mathcal{B}'} = [\vec{v}]_{\mathcal{C'}}
\end{align*}
$$

Composition
$$
{}_{\mathcal D}[M\circ L]_{\mathcal B}={}_{\mathcal D}[M]_{\mathcal C}\,{}_{\mathcal C}[L]_{\mathcal B}
$$

### Application
Change of coordinates
- in $\mathbb{R}^{3}$
$$
\mathcal{S} =\left\{ \begin{bmatrix}1 \\0 \\0\end{bmatrix},\begin{bmatrix}0 \\1 \\0\end{bmatrix},\begin{bmatrix}0 \\0 \\1\end{bmatrix} \right\},\qquad \mathcal{B} =\left\{\begin{bmatrix} 1 \\2\\-1\end{bmatrix},\begin{bmatrix} 2 \\0\\-4\end{bmatrix},\begin{bmatrix} 3 \\7\\-1\end{bmatrix} \right\} \\
\\
{}_\mathcal{S}\mathcal{I}_\mathcal{B} = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 0 & 7 \\ -1 & -4 & -1 \end{bmatrix}
$$

- in $\mathcal{P}_{2}(\mathbb{R})$
$$
\begin{gather*}
\mathcal{S} = \{1,x,x^2\},\qquad \mathcal{B} = \{1,1+x,1+x+x^2\} \\
\\
[1]_\mathcal{S} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \quad [1 + x]_\mathcal{S} = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}, \quad [1 + x + x^2]_\mathcal{S} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} \\
\\
{}_\mathcal{S}\mathcal{I}_\mathcal{B} = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}
\end{gather*}
$$

Reordering bases
$$
\begin{gather*}
\mathcal{B}_1=\{ \vec{b}_1,\vec{b}_2,\vec{b}_3 \} \\
\mathcal{B}_2=\{ \vec{b}_2,\vec{b}_3,\vec{b}_1 \} \\
\\
\begin{aligned}
{}_{\mathcal{B}_{2}}\mathcal{I}_{\mathcal{B}_{1}} &= \begin{bmatrix}
[\vec{b}_1]_{\mathcal{B}_{2}} & [\vec{b}_2]_{\mathcal{B}_{2}} & [\vec{b}_3]_{\mathcal{B}_{2}}
\end{bmatrix} \\
&= \begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 0
\end{bmatrix}

\end{aligned}
\end{gather*}
$$

Coordinates of linear transform
$$
\begin{gather*}
\mathcal{E} = \{ 1,x \},\qquad\mathcal B = \left\{-x,1-x\right\} \\
\\
L \colon \mathcal{P}_{1}(\mathbb{F}) \rightarrow \mathcal{P}_{1}(\mathbb{F}) \\
L\left(c_{1}+c_{2} x\right) = 3 c_{1}+\left(-5 c_{1}-2 c_{2}\right) x \\
\\
\begin{aligned}
\;[L]_{\mathcal{E}} &= \begin{bmatrix}
3 & 0\\
-5 & -2
\end{bmatrix} \\
\\
{}_{\mathcal E}{\mathcal I}_{\mathcal B} &= \begin{bmatrix}
0  & 1 \\
-1 & -1
\end{bmatrix} \\
\\
{}_{\mathcal B}{\mathcal I}_{\mathcal E} &= ({}_{\mathcal E}{\mathcal I}_{\mathcal B})^{-1} \\
&= \begin{bmatrix}
-1 & -1 \\
1 & 0
\end{bmatrix}
\end{aligned} \\
\\
\\
\begin{aligned}
\;[L]_{\mathcal B} & = {}_{\mathcal B}{\mathcal I}_{\mathcal E}\ [L]_{\mathcal E}\ {}_{\mathcal E}{\mathcal I}_{\mathcal B}\\[0.2cm] &= \begin{bmatrix}
-1 & -1 \\
1 & 0
\end{bmatrix} \begin{bmatrix}
3 & 0\\
-5 & -2
\end{bmatrix} \begin{bmatrix}
0  & 1 \\
-1 & -1
\end{bmatrix} \\
&= \begin{bmatrix}
-2 & 0 \\
0 & 3
\end{bmatrix}
\end{aligned} \\
\\
L(d_{1}(-x)+d_{2}(1-x)) = -2d_{1}(-x) + 3d_{2}(1-x)
\end{gather*}
$$

Changing basis of linear transform
$$
\begin{gather*}
\mathcal{S} = \{ 1,x,x^{2} \},\qquad \mathcal{B} = \{1,1+x,1+x+x^2\} \\
\\
D:\mathcal{P}_2(\mathbb{R}) \to \mathcal{P}_2(\mathbb{R}) \\
D(p(x)) = p'(x) \\
D(a+bx+cx^{2}) = b+2cx \\
\\
[L]_{\mathcal{S}} = \begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 2 \\
0 & 0 & 0
\end{bmatrix} \\
\\
\begin{aligned}
[L]_{\mathcal{B}} &= \begin{bmatrix}
[D(b_{1})]_{\mathcal{B}} & [D(b_{2})]_{\mathcal{B}} & [D(b_{3})]_{\mathcal{B}}
\end{bmatrix} \\
\\
&= \begin{bmatrix}
[D(1)]_{\mathcal{B}} & [D(1+x)]_{\mathcal{B}} & [D(1+x+x^{2})]_{\mathcal{B}}
\end{bmatrix} \\
\\
&= \begin{bmatrix}
[0]_{\mathcal{B}} & [1]_{\mathcal{B}} & [1+2x]_{\mathcal{B}}
\end{bmatrix} \\
\\
&= \begin{bmatrix}
[0]_{\mathcal{B}} & [1]_{\mathcal{B}} & [-1+2(1+x)]_{\mathcal{B}}
\end{bmatrix} \\
\\
&= \begin{bmatrix}
0 & 1 & -1 \\
0 & 0 & 2 \\
0 & 0 & 0
\end{bmatrix} \\
\end{aligned}
\end{gather*}
$$

Reordering basis by linear transform
$$
\mathcal{B} =\{\vec{v}_1, \cdots,\vec{v}_n \} \\
\\
L: V\to V \\
L(\vec{v}_{k}) = \vec{v}_{k-1} \\
L(\vec{v}_{1}) = \vec{v}_{n} \\
\\
\begin{aligned}
[L]_{\mathcal{B}} &= \begin{bmatrix}
[L(\vec{v}_{1})]_{\mathcal{B}} & [L(\vec{v}_{2})]_{\mathcal{B}} & \cdots & [L(\vec{v}_{n})]_{\mathcal{B}}
\end{bmatrix} \\
&= \begin{bmatrix}
[\vec{v}_{n}]_{\mathcal{B}} & [\vec{v}_{1}]_{\mathcal{B}} & \cdots & [\vec{v}_{n-1}]_{\mathcal{B}}
\end{bmatrix} \\
&= \begin{bmatrix}
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1 \\
1 & 0 & \cdots & 0
\end{bmatrix} \\
\end{aligned}
$$