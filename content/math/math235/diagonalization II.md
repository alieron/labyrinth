---
tags:
  - math235/chapter3
  - math/linear_algebra
complete: false
prev: /labyrinth/notes/math/math235/isomorphism_of_vector_spaces
next: /labyrinth/notes/math/math235/inner_product
pred: "[diagonalization](/labyrinth/notes/math/ma1522/diagonalization)"
---
### Summary
Recognising eigenvalues

| Situation                     | Conclusion                           |
| ----------------------------- | ------------------------------------ |
| Triangular matrix             | Eigenvalues are the diagonal entries |
| Diagonal matrix               | Already diagonalized                 |
| $n$ distinct eigenvalues      | Diagonalizable                       |
| Nonreal eigenvalues           | Cannot diagonalize over $\mathbb R$  |
| Only one eigenvalue $\lambda$ | Diagonalizable iff $A=\lambda I$     |
| $0$ is an eigenvalue          | Matrix is not invertible             |
| Invertible matrix             | May still fail to be diagonalizable  |

### Concept

#### Eigenvector and eigenvalue
- eigenvector - vector that is only scaled by the [linear operator](/labyrinth/notes/math/math235/linear_transformations_II#Linear_operator)
- eigenvalue - scalar that the vector is scaled by

$$
\vec{v} \neq \vec{0},\quad L(\vec{v}) = \lambda \vec{v}
$$

Eigenspace
$$
E_{\lambda}(L) = \{\vec{v} \in V : L(\vec{v}) = \lambda \vec{v}\}
$$

$$
E_\lambda(A) = \operatorname{Null}(A-\lambda I)
$$

Characteristic polynomial
$$
C_A(\lambda)=\det(A - \lambda I)
$$

#### Diagonalizability
$$
A\text{ is diagonalizable} \iff \exists P, \ A = PDP^{-1}
$$

Formally
$$
L:V\to V\text{ is diagonalizable} \iff \exists \mathcal{D}\text{ a basis for }V, \ [L]_{\mathcal{D}}\text{ is diagonal}
$$
$$
\begin{align*}
[L]_{\mathcal{S}} &= {}_{\mathcal{S}}\mathcal{I}_{\mathcal{D}}[L]_{\mathcal{D}}{}_{\mathcal{D}}\mathcal{I_{\mathcal{S}}} \\
&= {}_{\mathcal{S}}\mathcal{I}_{\mathcal{D}}[L]_{\mathcal{D}}({}_{\mathcal{S}}\mathcal{I}_{\mathcal{D}})^{-1}
\end{align*}
$$
> diagonalizing is just finding the eigenbasis $\mathcal{D}$

$$
\mathcal{D} = \{ \vec{v}_{1},\dots,\vec{v}_{k} \}\\
\\
\begin{aligned}
[L]_{\mathcal{S}} &= {}_{\mathcal{S}}\mathcal{I}_{\mathcal{D}}[L]_{\mathcal{D}}({}_{\mathcal{S}}\mathcal{I}_{\mathcal{D}})^{-1} \\
&= \begin{bmatrix}
| &  & | \\
[\vec{v}_{1}]_{\mathcal{S}} & \dots & [\vec{v}_{k}]_{\mathcal{S}} \\
| &  & |
\end{bmatrix} \begin{bmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{k}
\end{bmatrix} \begin{bmatrix}
| &  & | \\
[\vec{v}_{1}]_{\mathcal{S}} & \dots & [\vec{v}_{k}]_{\mathcal{S}} \\
| &  & |
\end{bmatrix}^{-1} 
\end{aligned} \\
\\
\text{where }[L]_{\mathcal{S}}\vec{v}_{i} = \lambda_{i}\vec{v}_{i}
$$

Diagonalizability test
- (3.2.18)
- algebraic multiplicity - degree of the root
- geometric multiplicity - dimension of the eigenspace

$$
C_A(\lambda) = (\lambda - \lambda_1)^{a_{\lambda_1}} \cdots (\lambda - \lambda_k)^{a_{\lambda_k}}h(\lambda) \\
\\
A\text{ is diagonalizable}\iff h(\lambda) = k \land \forall 1,\dots,k ,\ \text{algebraic multiplicity of }\lambda_{i} = \text{geometric multiplicity of }\lambda_{i}
$$

Powers of matrix
$$
\begin{align*}
A^k &= (PDP^{-1})(PDP^{-1}) \cdots (PDP^{-1})\\
&= PD(P^{-1}P)D(P^{-1}P) \cdots (P^{-1}P)DP^{-1} \\ 
&= PD^kP^{-1}
\end{align*} \\
\\
D^k = \begin{bmatrix}\lambda_1^k & 0 & \cdots & 0 \\ 0 & \lambda_2^k & \ddots & \vdots \\ \vdots & \ddots & \ddots & 0 \\ 0 & \cdots & 0 & \lambda_n^k\end{bmatrix}
$$

#### Similarity
$$
\begin{align*}
&A\text{ and }B\text{ are similar} \iff \exists P, \ B = P^{-1}AP
\end{align*}
$$
> $P$ must be invertible

Revering diagonalizability
$$
A = PDP^{-1} \implies D = P^{-1}AP
$$

Similarity is just [change of coordinates](/labyrinth/notes/math/math235/change_of_coordinates#Changing_coordinates_of_transformations)
$$
[L]_{\mathcal{B}} = ({}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}})^{-1}[L]_{\mathcal{C}}{}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}}
$$
$$
\begin{align*}
&\text{Claim: }[L]_{\mathcal{B}} = ({}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}})^{-1}[L]_{\mathcal{C}}{}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}} \\
\\
&\quad\begin{aligned}
({}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}})^{-1}[L]_{\mathcal{C}}{}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}}
&= ({}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}})^{-1}{}_{\mathcal{C}}[L]_{\mathcal{C}}{}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}} \\
&= {}_{\mathcal{B}}\mathcal{I}_{\mathcal{C}}{}_{\mathcal{C}}[L]_{\mathcal{C}}{}_{\mathcal{C}}\mathcal{I}_{\mathcal{B}} \\
&= {}_{\mathcal{B}}\mathcal{I}_{\mathcal{C}}{}_{\mathcal{C}}[L]_{\mathcal{B}} \\
&= {}_{\mathcal{B}}[L]_{\mathcal{B}} \\
&= [L]_{\mathcal{B}}
\end{aligned}
\end{align*}
$$
> essentially, two matricies are similar if they represent the same transformation

Similar matricies share properties
- [trace](/labyrinth/notes/math/math235/trace)

$$
\begin{align*}
\operatorname{tr}(B) &= \operatorname{tr}(P^{-1}AP) \\
&= \operatorname{tr}(APP^{-1}) \\
&= \operatorname{tr}(AI) \\
&= \operatorname{tr}(A)
\end{align*}
$$

- [determinants](/labyrinth/notes/math/ma1522/determinants)

$$
\begin{align*}
\det(B) &= \det(P^{-1}AP) \\
&= \det(P^{-1}) \det (A)\det(P) \\
&= \frac{1}{\det(P)}\det(A) \det(P) \\
&= \det(A)
\end{align*}
$$

- characteristic polynomial

$$
\begin{align*}
B-\lambda I &= P^{-1}AP -\lambda I \\
&= P^{-1}AP - P^{-1}(\lambda I)P \\
&= P^{-1}(A - \lambda I)P \\
\\
C_{B}(\lambda) &= \det(B - \lambda I) \\
&= \det(P^{-1}(A - \lambda I)P) \\
&= \det(A - \lambda I) && \text{(det proof above)} \\
&= C_{A}(\lambda)
\end{align*}
$$

- diagonalizability

$$
A\text{ is diagonalizable}\implies A = SDS^{-1} \\
\\
\begin{aligned}
B &= P^{-1}(SDS^{-1})P \\
&= (P^{-1}S)D(S^{-1}P) \\
&= (P^{-1}S)D(P^{-1}S)^{-1} \\
&= R DR^{-1}
\end{aligned} \\
\\
\therefore B\text{ is diagonalizable}
$$

- [invertibility](/labyrinth/notes/math/ma1522/inverse_of_square_matrices)
$$
A\text{ is invertible}\implies A^{-1}\text{ exists} \\
\\
\begin{aligned}
B^{-1} &= (P^{-1}AP)^{-1} \\
&= (AP)^{-1}(P^{-1})^{-1} \\
&= P^{-1}A^{-1}P
\end{aligned} \\
\\
\therefore B\text{ is invertible}
$$
### Application
Diagonalizing a linear map
$$
\begin{gather*}
\begin{aligned}
L\left(\begin{bmatrix} x \\ y \\ z \end{bmatrix}\right) &= \begin{bmatrix} x \\ y \\ z \end{bmatrix}- \dfrac{2(x + y + z)}{3}\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} \\
&= \begin{bmatrix}
\frac{1}{3}x - \frac{2}{3}y - \frac{2}{3}z \\
-\frac{2}{3}x + \frac{1}{3}y-\frac{2}{3}z \\
-\frac{2}{3}x - \frac{2}{3}y+\frac{1}{3}z 
\end{bmatrix}
\end{aligned} \\
\\
[L]_\mathcal{S} = \begin{bmatrix} \dfrac 13 & -\dfrac 23 & -\dfrac 23 \\ -\dfrac 23 & \dfrac 13 &-\dfrac 23 \\ -\dfrac 23 & -\dfrac 23 & \dfrac 13\end{bmatrix} \\
\\
\\
\text{Consider, }\mathcal{B} = \left\{\begin{bmatrix} 1 \\ 1 \\1 \end{bmatrix}, \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}, \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix}\right\} \\
\\
\begin{aligned}
[L]_{\mathcal{B}} &= \begin{bmatrix}
[L(b_{1})]_{\mathcal{B}} & [L(b_{2})]_{\mathcal{B}} & [L(b_{3})]_{\mathcal{B}}
\end{bmatrix} \\
&= \begin{bmatrix}
\left[\begin{bmatrix}
-1 \\
-1 \\
-1
\end{bmatrix}\right]_{\mathcal{B}} & \left[\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}\right]_{\mathcal{B}} & \left[\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix}\right]_{\mathcal{B}}
\end{bmatrix} \\
&= \begin{bmatrix}
-1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
\end{aligned}
\end{gather*}
$$

Eigenvector in $\mathcal{P}_{2}(\mathbb{R})$
$$
T:\mathcal{P}_2(\mathbb{R}) \to \mathcal{P}_2(\mathbb{R})\\
T(a+bx+cx^2) = (a+5 b) + 5 bx+(5 a+b+3 c)x^2 \\
\\
\text{is }p(x)=x\text{ an eigenvector?} \\
\\
T(x) = 5+5x+x^2 \neq \lambda x
$$

Characteristic polynomial of linear operator
- no roots = no eigenvectors

$$
L(\vec{x}) = A\vec{x}, \quad A=[L]_{\mathcal{S}}=\begin{bmatrix}
0 & 1 \\
-1 & 0
\end{bmatrix} \\
\\
\begin{aligned}
C_{A}(\lambda) &= \det(A - \lambda I)\\
&= \det\left(\begin{bmatrix}
-\lambda & 1 \\
-1 & -\lambda
\end{bmatrix}\right) \\
&= (-\lambda)(-\lambda) - (-1)(1) \\
&= \lambda^{2}+1
\end{aligned} \\
\\
\text{discriminant: }\Delta = - 4 <0 \\
\therefore\text{no roots in }\mathbb{R} 
$$

- two roots
$$
A = \begin{bmatrix}
-4 & 10 \\
0 & 1
\end{bmatrix} \\
\\
\begin{aligned}
C_{A}(\lambda) &= \det \left( \begin{bmatrix}
-4-\lambda & 10 \\
0 & 1-\lambda
\end{bmatrix} \right) \\
&= (-4-\lambda)(1-\lambda)
\end{aligned} \\
\\
\lambda = -4, 1 \\
\\
\begin{split}
&\begin{gathered}
A - (-4)I = \begin{bmatrix}
0 & 10 \\
0 & 5
\end{bmatrix} \\
\\
\begin{bmatrix}
0 & 10 \\
0 & 5
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix} = \vec{0} \\
\\
x\text{ free}\\
y=0 \\
\\
E_{-4}=\operatorname{span}\left\{ \begin{bmatrix}
1 \\
0
\end{bmatrix} \right\} 
\end{gathered}&\qquad&\begin{gathered}
A - (1)I = \begin{bmatrix}
-5 & 10 \\
0 & 0
\end{bmatrix} \\
\\
\begin{bmatrix}
-5 & 10 \\
0 & 0
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix} = \vec{0} \\
\\
5x = 10y \\ x = 2y \\
\\
E_{1} = \operatorname{span}\left\{ \begin{bmatrix}
2 \\
1
\end{bmatrix} \right\}
\end{gathered}
\end{split}
$$

Interesting linear operator
$$
L: V\to V, \ L^{2} = L \\
\\
\begin{aligned}
L(\vec{x}) &= \lambda \vec{x} \\
\\
L^{2}(\vec{x}) &= L(L(\vec{x})) \\
&= L(\lambda \vec{x}) = \lambda L(\vec{x}) \\
&= \lambda^{2}\vec{x}
\end{aligned} \\
\\
L(\vec{x}) = L^{2}(\vec{x}) \implies \lambda x = \lambda^{2}\vec{x} \\
\\
\begin{aligned}
\lambda^{2} &= \lambda \\
\lambda(\lambda-1) &=0
\end{aligned} \\
\\
\therefore \lambda= 0,1
$$

Fixed point
- special case where eigenvalue is 1

$$
A\vec{x} = \vec{x} \implies\vec{x}\text{ is a fixed point} \\
\\
A\vec{x} = \vec{x} \iff (A-I)\vec{x}=\vec{0} \implies \vec{x} \in \operatorname{Null}(A-I) \\
\\
A = \begin{bmatrix}
5 & -2 \\
6 & -2
\end{bmatrix}, \ A-I = \begin{bmatrix}
4 & -2 \\
6 & -3
\end{bmatrix} \\
\\
\begin{bmatrix}
4 & -2 \\
6 & -3
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix} = \vec{0} \\
\\
y=2x \\
\\
E_{1} = \operatorname{span}\left\{ \begin{bmatrix}
1 \\
2
\end{bmatrix} \right\} \\
\\
\\
B = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}, \ B - I = \begin{bmatrix}
0 & 2 \\
3 & 3
\end{bmatrix} \\
\\
\begin{bmatrix}
0 & 2 \\
3 & 3
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}=\vec{0} \\
\\
y = 0 \\
3x+3y = 0 \implies x = 0 \\
\\
E_{1} = \operatorname{span}\{\vec{0}\}
$$

Properties from characteristic polynomial
$$
C_{A}(\lambda) = \left(\lambda -3\right)^{2} \left(\lambda -2\right)^{2} \left(\lambda -1\right)^{2} \\
\\
\text{dim}(E_{3})=2, \ \text{dim}(E_{2})=2 ,\ \text{dim}(E_{1})=2 \\
\\
A\text{ is diagonalizable} \\
\\
D = \begin{bmatrix}
3 \\
 & 3 \\
 &  & 2 \\
 &  &  & 2 \\
 &  &  &  & 1 \\
 &  &  &  &  & 1
\end{bmatrix} \\
\\
\det(A) = \det(D) = 3^{2}\cdot 2^{2}\cdot 1^{2} = 36 \\
\\
\operatorname{tr}(A) = \operatorname{tr}(D) = 3+3+2+2+1+1 = 12
$$