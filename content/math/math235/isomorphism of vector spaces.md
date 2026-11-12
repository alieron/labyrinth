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
\text{(1-1)} &&& \begin{aligned}[t]
L(\vec{v}_{1}) = L(\vec{v}_{2}) \implies  \vec{v}_{1} = \vec{v}_{2} &\iff \operatorname{nullity}(L) = 0 \\
&\iff \operatorname{Ker}(L) = \{ \vec{0} \}
\end{aligned} \\
\\
\text{(onto)} &&& \operatorname{Range}(L) = W \iff \operatorname{rank}(L) = \operatorname{dim}(W)
\end{align*}
$$

Prove injectivity
$$
\begin{gather*}
\vec{x} \in \operatorname{Ker}(L), \ \vec{x} = a_{1}\vec{v}_{1} + \dots + a_{k}\vec{v}_{k} \\
\\
L(\vec{x}) = \vec{0} = a_{1}L(\vec{v}_{1}) + \dots + a_{k}L(\vec{v}_{k})
\end{gather*}
$$
$$
\begin{align*}
\text{1-1:} &&& \forall \vec{x},\vec{x}' \in V && {\color{royalblue}f(x)=f(x')} \xrightarrow{show} {\color{limegreen}x=x'} && \text{contrapositive: }{\color{royalblue}x\neq x'} \xrightarrow{show} {\color{limegreen}f(x)\neq f(x')} \\
&&& \forall \vec{x} \in \operatorname{Ker}(L) && {\color{royalblue}L(\vec{x})= \vec{0}} \xrightarrow{show} {\color{limegreen}\vec{x}= \vec{0}} \\
\\
\text{onto:} &&& \forall \vec{y} \in W && {\color{royalblue}\text{let }x=\dots}\xrightarrow{show} {\color{limegreen}\exists x \in X \ y=f(x)}
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
> 1-1 (injective) -> no y has more than one incoming arrow
> onto (surjective) -> every y has at least one incoming arrow

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

[Coordinate map](/labyrinth/notes/math/math235/change_of_coordinates#Coordinate_vector) is an isomorphism
- (2.5.13)

$$
V = \operatorname{span}(B) \land \operatorname{dim}(V) = n \implies [\ ]_{\mathcal{B}}: V \to \mathbb{F}^n\text{ is an isomorphism}
$$
$$
\begin{align*}
&\text{Claim: }V = \operatorname{span}(B) \land \operatorname{dim}(V) = n \implies [\ ]_{\mathcal{B}}: V \to \mathbb{F}^n\text{ is an isomorphism} \\
\\
& \text{Suppose }V = \operatorname{span}(B) \land \operatorname{dim}(V) = n\\
&\text{then }B = \{ \vec{v}_{1},\dots \vec{v}_{n} \}\text{ is a basis for }V \\
\\
&\quad\begin{aligned}
\forall \vec{v} \in V \ \exists! (x_{1},\dots,x_{k})\in \mathbb{F}^k, \ \vec{v} = x_{1}\vec{v}_{1}+\dots+x_{k}\vec{v}_{k} \implies[\ ]_{\mathcal{B}}\text{ is injective} && \text{(Unique Representation Theorem)}
\end{aligned} \\
\\
&\quad\begin{aligned}
[\ ]_{\mathcal{B}}\text{ is injective} &\implies \operatorname{nullity}([\ ]_{\mathcal{B}}) = 0 \\
&\implies n=\operatorname{dim}(V) = \operatorname{rank}([\ ]_{\mathcal{B}}) = \operatorname{dim}(\mathbb{F}^n) \land \operatorname{Range}([\ ]_{\mathcal{B}}) \subseteq \mathbb{F}^n  \\
&\implies \operatorname{Range}([\ ]_{\mathcal{B}}) = \mathbb{F}^n \\
&\implies [\ ]_{\mathcal{B}}\text{ is surjective}
\end{aligned}
\end{align*}
$$


Equal dimension implies bijectivity
$$
\begin{aligned}
&L:V\to W, \quad \operatorname{dim}(V) < \infty\land \operatorname{dim}(W)<\infty\\
\\
&\text{(a)}\ \operatorname{dim}(V)<\operatorname{dim}(W)\implies L\text{ is not surjective} \\
&\text{(b)}\ \operatorname{dim}(V)>\operatorname{dim}(W)\implies L\text{ is not injective} \\
&\text{(c)}\ \operatorname{dim}(V)=\operatorname{dim}(W)\implies\left(L\text{ injective}\iff L\text{ surjective}\right)
\end{aligned}
$$
$$
\begin{align*}
&\text{Claim (a): }\operatorname{dim}(V)<\operatorname{dim}(W)\implies L\text{ is not surjective} \\
\\
&\quad\begin{aligned}
\operatorname{dim}(V)<\operatorname{dim}(W) &\implies \operatorname{Range}(L) \neq W \\
&\implies L\text{ is not surjective}
\end{aligned} \\
&&\square \\
\\
&\text{Claim (b): }\operatorname{dim}(V)>\operatorname{dim}(W)\implies L\text{ is not injective} \\
\\
&\quad\begin{aligned}
\operatorname{dim}(V)>\operatorname{dim}(W) &\implies \operatorname{nullity}(L) > 0 \\
&\implies L\text{ is not injective}
\end{aligned} \\
&&\square \\
\\
&\text{Claim (c): }\operatorname{dim}(V)=\operatorname{dim}(W)\implies \left(L\text{ injective}\iff L\text{ surjective}\right)\\
\\
&\text{then }\operatorname{dim}(W) = \operatorname{dim}(V)=\operatorname{rank}(L)+\operatorname{nullity}(L) \\
\\
&\quad\begin{aligned}
L\text{ is injective} &\iff \operatorname{nullity}(L) = 0 \\
&\iff \operatorname{dim}(W) =\operatorname{dim}(V) = \operatorname{rank}(L) \\
&\iff L\text{ is surjective}
\end{aligned} \\
\end{align*}
$$
> therefore it is sufficient to prove that a linear map is an isomorphism by proving that it is 

An injective linear map is an isomorphism
- it must also be finite-dimensional

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

Isomorphism between [plane](/labyrinth/notes/math/ma1301/planes_in_R³) and $\mathbb{R}^2$
$$
\begin{gather*}
P: \ x + 2y+3z = 0 \\
\\
x = -2y - 3z \\
\\
\begin{pmatrix}
x \\
y \\
z
\end{pmatrix} = \begin{pmatrix}
-2y-3z \\
y \\
z
\end{pmatrix}= y\begin{pmatrix}
-2 \\
1 \\
0
\end{pmatrix}+z\begin{pmatrix}
-3 \\
0 \\
1
\end{pmatrix} \\
\\
T: \mathbb{R}^{2} \to P \\
T\left(\begin{pmatrix}
x \\
y
\end{pmatrix}\right) = x\begin{pmatrix}
-2 \\
1 \\
0
\end{pmatrix}+y\begin{pmatrix}
-3 \\
0 \\
1
\end{pmatrix}
\end{gather*}
$$