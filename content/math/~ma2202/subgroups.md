---
tags:
  - math/group_theory
  - to_review
complete: false
prev: /labyrinth/notes/math/~ma2202/groups
next: /labyrinth/notes/math/~ma2202/cyclic_groups

---
### Summary
Subgroup test
$$
\begin{gather*}
H\subseteq G:\quad H\le G\iff H\ne\varnothing\ \land\ \forall a,b\in H,\ ab^{-1}\in H
\end{gather*}
$$

Coset equality
$$
H\le G:\quad aH=bH\iff a^{-1}b\in H
$$

Lagrange's theorem
$$
\begin{gather*}
H\le G,\quad |G|<\infty:\quad |G|=[G:H]|H|,\qquad |H|\mid |G|
\end{gather*}
$$

### Concept
#### Subgroup
- subset which is also a [group](/labyrinth/notes/math/~ma2202/groups) over the same binary operation
- think of it as a smaller cycling

$$
H \leq G \iff H \subseteq G \land H\text{ is a group}
$$

Generated group
- set created from repeaded operations on an element

$$
\langle g\rangle=\{g^n:n\in\mathbb Z\}
$$

$$
\begin{align*}
& \text{Claim: } \langle g\rangle \leq G \\
\\
& \text{So }g^0 = e \\
\\
&\therefore \langle g \rangle\neq \varnothing \\
\\
& \text{Suppose }g^a, g^b \in\langle g\rangle\\
\\
&\text{so }\\
&\quad\begin{aligned}[t]
&g^a(g^b)^{-1} = g^ag^{-b} = g^{a-b} \\
&a-b \in \mathbb{Z} \implies g^{a-b} \in \langle g\rangle
\end{aligned}\\
\\
&\therefore \langle g\rangle \leq G
\end{align*}
$$

#### Subgroup test
- for $H\subseteq G$, necessity follows from closure under inverses and products. Conversely, suppose $H\ne\varnothing$ and $ab^{-1}\in H$ for all $a,b\in H$.

$$
\begin{align*}
&c\in H\implies cc^{-1}=e\in H \\
\\
&b\in H\implies eb^{-1}=b^{-1}\in H \\
\\
&a,b\in H\implies a(b^{-1})^{-1}=ab\in H \\
\\
&\text{Associativity is inherited from }G,\quad\therefore H\le G
\end{align*}
$$

#### Cosets
- for $H\le G$ and $a\in G$, define the left and right cosets:

$$
\begin{gather*}
aH=\{ah:h\in H\},\qquad Ha=\{ha:h\in H\} \\
\\
\text{Additive notation: }a+H=\{a+h:h\in H\}
\end{gather*}
$$

- left cosets are equal or disjoint. If they share an element, then

$$
\begin{align*}
&x=ah_1=bh_2,\qquad h_1,h_2\in H \\
&b^{-1}a=h_2h_1^{-1}\in H \\
\\
&a=b(h_2h_1^{-1})\implies aH\subseteq bH \\
&a^{-1}b=(b^{-1}a)^{-1}\in H\implies bH\subseteq aH \\
\\
&\therefore\quad aH\cap bH\ne\varnothing\implies aH=bH
\end{align*}
$$

- in particular, the equality test is

$$
\begin{align*}
&aH=bH\implies b\in aH\implies b=ah\text{ for some }h\in H
\implies a^{-1}b\in H \\
\\
&a^{-1}b\in H\implies b\in aH\cap bH\implies aH=bH
\end{align*}
$$

- every $g\in G$ lies in $gH$ because $g=ge$ and $e\in H$. Thus the distinct left cosets partition $G$. Each has the same size as $H$ via the [bijection](/labyrinth/notes/math/cs1231s/function_relations)

$$
\begin{gather*}
H\longrightarrow aH,\quad h\longmapsto ah \\
\\
aH\longrightarrow H,\quad x\longmapsto a^{-1}x\qquad\text{(inverse)}
\end{gather*}
$$

- left and right cosets need not be equal. Cosets need not be subgroups: if $a\notin H$, then $e\notin aH$, so $aH$ is not a subgroup.

#### Lagrange's theorem
- the **index** $[G:H]$ is the number of distinct left cosets of $H$ in $G$. If $G$ is finite, choose one representative from each coset and put $k=[G:H]$.

$$
\begin{align*}
&G=a_1H\sqcup\cdots\sqcup a_kH\qquad\text{(coset partition)} \\
\\
&|a_iH|=|H|\qquad\text{(the bijection }h\mapsto a_ih\text{)} \\
\\
&|G|=\sum_{i=1}^{k}|a_iH|=k|H|=[G:H]|H| \\
\\
&\therefore\quad |H|\mid |G|
\end{align*}
$$

- the converse is false in general: a divisor of $|G|$ does not guarantee a subgroup of that size.

> (keep
### Application
Examples
$$
\begin{gather*}
(2\mathbb{Z},+) \leq (\mathbb{Z},+) \\
\\
(\mathbb{Q}^*, \cdot) \leq (\mathbb{R}^*, \cdot) \\
\\
G\leq G \\
\\
\{ e \}\leq G \\
\\
\{ 1,-1,i,-i \} \leq (\mathbb{C}^*, \cdot) \\
\\
\{ 0,2 \}\leq(\mathbb{Z}_{4},+)
\end{gather*}
$$

Cosets in $\mathbb Z_{12}$
- find all cosets of $H=\{0,4,8\}\le(\mathbb Z_{12},+)$, with addition modulo 12

$$
\begin{gather*}
0+H=\{0,4,8\},\qquad 1+H=\{1,5,9\} \\
\\
2+H=\{2,6,10\},\qquad 3+H=\{3,7,11\} \\
\\
\mathbb Z_{12}=(0+H)\sqcup(1+H)\sqcup(2+H)\sqcup(3+H) \\
[\mathbb Z_{12}:H]=4,\qquad 12=4\cdot3
\end{gather*}
$$

Testing $3\mathbb Z\le\mathbb Z$
- use the additive subgroup test: nonempty and closed under differences

$$
\begin{align*}
&H=3\mathbb Z=\{3m:m\in\mathbb Z\},\qquad 0\in H \\
\\
&a=3m,\quad b=3n\in H\implies a-b=3(m-n)\in H \\
\\
&\therefore\quad (3\mathbb Z,+)\le(\mathbb Z,+)
\end{align*}
$$

#### Possible subgroup sizes when $|G|=18$
Find the subgroup sizes allowed by Lagrange's theorem and their indices.

$$
\begin{gather*}
H\le G\implies |H|\mid18\implies |H|\in\{1,2,3,6,9,18\} \\
\\
\begin{array}{c|cccccc}
|H|&1&2&3&6&9&18\\\hline
[G:H]&18&9&6&3&2&1
\end{array}
\end{gather*}
$$

These are necessary possibilities; Lagrange alone does not establish existence for every listed size. The sizes $1$ and $18$ always occur, from $\{e\}$ and $G$.
