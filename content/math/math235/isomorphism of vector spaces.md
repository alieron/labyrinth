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


#### [Isomorphism](/labyrinth/notes/math/~ma2202/group_isomorphisms)
- structure(operator) preserving map

$$
\begin{align*}
L \text{ is an isomorphism }&\iff L\text{ is 1-1} \land L\text{ is onto} \\

&\iff V \cong W
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


