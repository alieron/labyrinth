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

### Concept
#### Coordinate vector
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
&\text{so, } \\
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

Changing coordinates of transformations
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

### Application
Change of coordinates
$$
\begin{gather*}
\mathcal{S} = \{1,x,x^2\},\qquad \mathcal{B} = \{1,1+x,1+x+x^2\} \\
\\
[1]_\mathcal{S} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \quad [1 + x]_\mathcal{S} = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}, \quad [1 + x + x^2]_\mathcal{S} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} \\
\\
{}_\mathcal{S}\mathcal{I}_\mathcal{B} = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}
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
\end{aligned}
\end{gather*}
$$

