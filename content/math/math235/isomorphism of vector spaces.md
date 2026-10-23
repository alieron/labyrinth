---
tags:
  - math235/chapter2
  - math/linear_algebra
complete: false
prev: /labyrinth/notes/math/math235/change_of_coordinates
next: /labyrinth/notes/math/math235/diagonalization_II

---
### Summary
Injectivity and surjectivity

$$
\begin{align*}
\text{(1-1)} &&& \operatorname{nullity}(L) = 0\\
\\
\text{(onto)} &&& \operatorname{rank}(L) = \operatorname{dim}(W)
\end{align*}
$$

### Concept
#### Properties of linear transformations
- properties of [function relations](/labyrinth/notes/math/cs1231s/function_relations)

$$
\begin{gather*}
L: V \to W \\
\\
\vec{v}_{1},\vec{v}_{2}\in V \\
\\
\begin{aligned}
\text{(1-1)} &&& L(\vec{v}_{1}) = L(\vec{v}_{2}) \implies  \vec{v}_{1} = \vec{v}_{2}\\
\\
\text{(onto)} &&& \operatorname{Range}(L) = W
\end{aligned}
\end{gather*}

$$

Injectivity requires 0 nullity
$$
\begin{align*}
&\text{Claim: }L: V\to W \text{ is 1-1} \iff \operatorname{Ker}(L) = \{ \vec{0} \} \\
\\
&(\implies) \ \begin{aligned}[t]
&\text{Suppose }L\text{ is 1-1} \\
\\
&(\subseteq) \ \begin{aligned}[t]
&\text{for some }\vec{v}\in \operatorname{Ker}(L) \\
\\
&L(\vec{v}) = \vec{0} = L(\vec{0}) \\
\\
&\vec{v} = \vec{0}\\ 
\\
&\therefore \operatorname{Ker}(L) \subseteq \{ \vec{0} \}
\end{aligned} \\
\\
&(\supseteq) \ \begin{aligned}[t]
&\operatorname{Ker}(L)\text{ is a vector space} \\
\\
&\therefore \{ \vec{0} \}\subseteq \operatorname{Ker}(L)
\end{aligned}
\end{aligned} \\
\\
\\
&(\impliedby) \ \begin{aligned}[t]
&\text{Suppose }\operatorname{Ker}(L) = \{ \vec{0} \} \\
\\
&\text{for some }L(\vec{v}) = L(\vec{w}) \\
\\
&\quad \begin{aligned}[t]
&\vec{0} = L(\vec{v}) - L(\vec{w}) = L(\vec{v}-\vec{w}) \\
\\
&\vec{v} - \vec{w} \in \operatorname{Ker}(L)\\
\\
& \vec{v} - \vec{w} = \vec{0}, \quad \operatorname{Ker}(L) = \{ \vec{0} \} \\
\\
& \vec{v} = \vec{w} \\
\\
&\therefore L\text{ is 1-1}
\end{aligned}
\end{aligned}
\end{align*}
$$

#### [Isomorphism](/labyrinth/notes/math/~ma2202/group_isomorphisms)
- structure(operator) preserving map

$$
\begin{align*}
L \text{ is an isomorphism }&\iff L\text{ is 1-1} \land L\text{ is onto} \\
&\iff V \cong W \\
&\iff \operatorname{dim}(V) = \operatorname{dim}(W)
\end{align*}
$$



Kernel and [nullspace](/labyrinth/notes/math/ma1522/matrix_spaces#^b3921a)
$$
\operatorname{Ker}(L) \cong \operatorname{Null}(A)
$$

Range and [column space](/labyrinth/notes/math/ma1522/matrix_spaces#^24ceb3)
$$
\operatorname{Range}(L)\cong \operatorname{Col}(A)
$$


### Application
Proving isomorphism
$$
\begin{gather*}
L: \mathcal{P}_{2}(\mathbb{R}) \to \mathbb{R}^{3} \\
\\
L(a+bc+cx^{2}) = \begin{bmatrix}
a \\
a+b \\
a+b+c
\end{bmatrix} \\
\\
L(a,b,c) = \begin{bmatrix}
1 & 0 & 0 \\
1 & 1 & 0 \\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
a \\
b \\
c
\end{bmatrix} \\
\\
\begin{bmatrix}
1 & 0 & 0 \\
1 & 1 & 0 \\
1 & 1 & 1
\end{bmatrix}\xrightarrow{ RREF } \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix} \\
\\
\therefore \operatorname{nullity}(L) = 0 \land \operatorname{dim}(L) = \operatorname{dim}(\mathbb{R}^{3}) \implies L\text{ is a bijection}
\end{gather*}
$$