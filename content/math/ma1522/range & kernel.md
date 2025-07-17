---
tags:
- ma1522/chapter7
- math/linear_algebra
complete: false
index: null
---
[Previous](/labyrinth/notes/math/ma1522/linear_transformation)

### Summary
Rank and injectivity/surjectivity
$$
\begin{align*}
\text{Tall matrix:}&&& \mathbf{A}\text{ is full rank}\land \operatorname{rank}(\mathbf{A})=n \iff \\
1) &&& \operatorname{Row}(\mathbf{A})=\mathbb{R}^n \\
2) &&& \text{cols of }\mathbf{A}\text{ are linearly independent} \\
3) &&& \operatorname{Null}(\mathbf{A})=\{ \mathbf{0} \} \\
4) &&& \mathbf{A}^T\mathbf{A}\text{ is invertible} \\
5) &&& \mathbf{A}\text{ has a left inverse} \\
6) &&& T_{\mathbf{A}}\text{ is 1-1} \\
\\
\text{Long matrix:}&&& \mathbf{A}\text{ is full rank}\land \operatorname{rank}(\mathbf{A})=m \iff \\
1) &&& \operatorname{Col}(\mathbf{A})=\mathbb{R}^m \\
2) &&& \text{rows of }\mathbf{A}\text{ are linearly independent} \\
3) &&& \forall \mathbf{b}\in \mathbb{R}^m \ \mathbf{Ax}=\mathbf{b}\text{ is consistent} \\
4) &&& \mathbf{AA}^T\text{ is invertible} \\
5) &&& \mathbf{A}\text{ has a right inverse} \\
6) &&& T_{\mathbf{A}}\text{ is onto}
\end{align*}
$$

[Equivalent statements of invertibility](/labyrinth/notes/math/ma1522/inverse_of_square_matrices#^468393)
$$
\begin{align*}
&&& \mathbf{A}\text{ is invertible} \iff\\
\\
14) &&& T_{\mathbf{A}}\text{ is 1-1}\land\text{onto}
\end{align*}
$$

### Concept
[Range](/labyrinth/notes/math/cs1231s/function_relations#^803f4f)
$$
\begin{align*}
\operatorname{range}(T)& =\{\begin{array}{c|c} \mathbf{v}\in \mathbb{R}^m & \forall \mathbf{u} \in \mathbb{R}^n \ \mathbf{v}=T(\mathbf{u}) \end{array}\} \\
& = \{\begin{array}{c|c} \mathbf{v}=\mathbf{Au} & \mathbf{u}\in \mathbb{R}^n \end{array}\} \\
& = \operatorname{Col}(\mathbf{A})
\end{align*}
$$
> set of vectors that gets mapped to

Rank
$$
\operatorname{rank}(T)=\dim(\operatorname{range}(T))=\dim(\operatorname{Col}(\mathbf{A}))=\operatorname{rank}(\mathbf{A})
$$

Kernel
$$
\begin{align*}
\ker(T) & = \{\begin{array}{c|c} \mathbf{u}\in \mathbb{R}^n & T(\mathbf{u})=\mathbf{0} \end{array}\} \\
& = \{\begin{array}{c|c}\mathbf{u}\in\mathbb R^n&\mathbf{Au}=\mathbf{0}\end{array}\} \\
& = \operatorname{Null}(\mathbf{A})
\end{align*}
$$
> set of vectors that map to 0

Nullity
$$
\operatorname{nullity}(T)=\dim(\ker(T))=\dim(\operatorname{Null}(\mathbf{A}))=\operatorname{nullity}(\mathbf{A})
$$

1-1 (injective)
$$
T:\mathbb{R}^n\to \mathbb{R}^m\text{ is 1-1}\iff\ker(\mathbf{A})=\{ \mathbf{0} \}
$$
> if multiple vectors map to 0, then it cannot be 1-1

onto (surjective)
$$
\forall \mathbf{v}\in \mathbb{R}^m \ \exists \mathbf{u}\in \mathbb{R}^n \ \mathbf{v}=T(\mathbf{u})\implies T:\mathbb{R}^n\to \mathbb{R}^m\text{ is onto}
$$
> every $\mathbf{u}$ is mapped to by at least one $\mathbf{v}$

Bijectivity and invertibility
- [existence of an inverse](/labyrinth/notes/math/cs1231s/function_relations#^3e4c90)

$$
\begin{gather*}
T_{\mathbf{A}}(T_{\mathbf{B}}(\mathbf{x}))=\mathbf{ABx} \\
T_{\mathbf{B}}(T_{\mathbf{A}}(\mathbf{x}))=\mathbf{BAx} \\
\\
\mathbf{A}\text{ is bijective}\implies \exists \mathbf{B} \ \mathbf{A}\mathbf{B}=\mathbf{I}=\mathbf{BA} \\
\\
\therefore \exists T_{\mathbf{B}} \quad  T_{\mathbf{A}}(T_{\mathbf{B}}(\mathbf{x}))=\mathbf{x}\land T_{\mathbf{B}}(T_{\mathbf{A}}(\mathbf{x}))=\mathbf{x}
\end{gather*}
$$

#

## Application
$$

$$

#

##### Extra

