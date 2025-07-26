---
tags:
- cs1231s/chapter2
- math/set_theory
complete: true
prev: /labyrinth/notes/math/cs1231s/equivalence_relations
next: /labyrinth/notes/math/cs1231s/function_relations
---

   

### Summary
Additional properties of binary relations
$$
\begin{align*}
\text{Antisymmetric:} &&& \forall x \in X \ \forall y \in X \ (xRy) \land (yRx) \leftrightarrow  x=y \\
\\
\text{Totality:} &&& \forall x \in X \ \forall y \in X \ xRy \lor yRx
\end{align*}
$$
> antisymmetric -> the only two-way relations are self-loops
> totality -> every element is related to every other element in at least one way

Partial order
- a relation that is reflexive, antisymmetric and transitive

Total order
- a partial order that is total

### Concept
Bounded below
$$
\begin{gather*}
\forall Y \subseteq \mathbb{R} \ \forall b \in \mathbb{R} \ Y \text{ is bounded below by } b  \iff \forall x \in Y \ b\leq x
\end{gather*}
$$

Well-ordering principle for integers ^deafe6
- basis for [proof by induction](/labyrinth/notes/math/cs1231s/proof_by_induction)
- in a totally ordered set, that is bounded below by some integer, there is a smallest integer

$$
\begin{align*}
& \text{for some } S \subseteq \mathbb{Z} \\
\\
& \qquad S\neq \varnothing  \land S\text{ is bounded below by an integer}\to S\text{ contains a smallest integer}
\end{align*}
$$

Proving properties
$$
\begin{align*}
\text{Antiymmetric:} &&& \forall x \in X \ \forall y \in X && {\color{royalblue}xRy \land yRz} \to Q(x,y)\land Q(y,x)\xrightarrow{show} {\color{limegreen}x=y} \\
\\
\text{Reflexive:} &&& \forall x \in X \ \forall y \in X && {\color{royalblue}xRy \lor yRx} \to Q(x,y)\lor Q(y,x)\xrightarrow{show} {\color{limegreen}\text{is always true}} \\
\end{align*}
$$

### Application
Well-ordering does not apply to all sets
$$
\begin{align*}
& \text{Consider: }S =\left\{  1, \frac{1}{2}, \frac{1}{3}, \dots  \right\}=\left\{\begin{array}{c|c} \frac{1}{2} & m \in \mathbb{Z}^+ \end{array}\right\}\subseteq \mathbb{Q}\text{, and }S \neq \varnothing \\
\\
& \qquad S\text{ is bounded below by }0 \in \mathbb{Q}\text{, but }S\text{ has no smallest rational number}
\end{align*}
$$