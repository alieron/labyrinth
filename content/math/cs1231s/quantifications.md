---
tags:
- cs1231s/chapter1
- math/logic
complete: true
index: null
---
[Previous](/labyrinth/notes/math/cs1231s/conditionals)   [Next](/labyrinth/notes/math/cs1231s/fundemental_methods_of_proof)
### Summary
Universal statements
- true iff $Q(x)$  is true for every $x$ in $D$
- false iff $Q(x)$  is false for one or more $x$ in $D$
- disprove by counterexample

$$
\forall x \in D \ Q(x)
$$

Existential statements
- true iff $Q(x)$  is true for one or more $x$ in $D$
- - false iff $Q(x)$  is false for every $x$ in $D$
- prove by example

$$
\exists x \in D \ Q(x)
$$

Negation
- if $Q(x)$ is false for all values of $x$, then there exists one or more $x$ where $Q(x)$ is false
- if there does not exists one or more $x$ where $Q(x)$ is true, then $Q(x)$ is false for all values of $x$

$$
\begin{gather*}
\sim(\forall x \in D \ Q(x)) \equiv \exists x \in D \ \sim Q(x)\\
\\
\sim(\exists x \in D \ Q(x)) \equiv \forall x \in D \ \sim Q(x)\\
\end{gather*}
$$
### Concept
Universal quantification(for all) -> $\forall$
Existential quantification(there exists) -> $\exists$

Domain -> $D$
Predicate -> $Q(x)$

Sensitive to [domain](/labyrinth/notes/math/cs1231s/sets), which may be a [number set](/labyrinth/notes/math/cs1231s/special_sets)

Composed quantified statements
$$
\forall x\in D \ \underbrace{ \forall y \in R \ P(x, y) }_{ Q(x) }
$$

Expanding quantification
$$
\begin{gather*}
\forall x∈D \ Q(x) \equiv Q(x_1​)\land Q(x_2​)\land …\land Q(x_n​) \\
\\
\exists x∈D \ Q(x) \equiv Q(x_1​)\lor Q(x_2​)\lor …\lor Q(x_n​)
\end{gather*}
$$

Universal conditional statements
$$
\begin{gather*}
\forall x\in D \ P(x)\to Q(x) \\
\\
\forall x\in P \ Q(x) \ where \ P \ is \ the \ truth \ set \ of \ P(x), \ P = \{ x\in D\ |\ P(x) \}
\end{gather*}
$$
### Application
Universal statement
- prove for all values

$$
\begin{gather*}
&\forall x\in \{ 0,1,2 \} \ x=1\leftrightarrow x^2=1 \\
\\
Q(0) & Q(1) & Q(2) \\
\underbrace{ \underbrace{ 0=1 }_{ false }\leftrightarrow \underbrace{ 0^2=1 }_{ false } }_{ true } & \underbrace{ \underbrace{ 1=1 }_{ true }\leftrightarrow \underbrace{ 1^2=1 }_{ true } }_{ true } & \underbrace{ \underbrace{ 2=1 }_{ false }\leftrightarrow \underbrace{ 2^2=1 }_{ false } }_{ true } \\
\\
& \therefore true \ for \ all \ x \in \{ 0,1,2 \}
\end{gather*}
$$
- disprove by counterexample

$$
\begin{gather*}
\forall x\in \{ -1,0,1 \} \ x=1\leftrightarrow x^2=1 \\
\\
Q(-1) \\
\underbrace{ \underbrace{ -1=1 }_{ false }\leftrightarrow \underbrace{ (-1)^2=1 }_{ true } }_{ false } \\
\\
\therefore false \ for \ x = -1
\end{gather*}
$$

Existential statement
- prove by example

$$
\begin{gather*}
\exists x\in \{ -2, -1,0,1 \} \ (x<1)\land(x^2>1) \\
\\
Q(-2) \\
\underbrace{ \underbrace{ (-2<1) }_{ true }\land\underbrace{ ((-2)^2>1) }_{ true } }_{ true } \\
\\
\therefore true \ for \ x = -1
\end{gather*}
$$
- disprove for all values

$$
\begin{gather*}
& \exists x\in \{ -1,0,1 \} \ (x<1)\land(x^2>1) \\
\\
Q(-1) & Q(0) & Q(1) \\
\underbrace{ \underbrace{ (-1<1) }_{ true }\land\underbrace{ ((-1)^2>1) }_{ false } }_{ false } & \underbrace{ \underbrace{ (0<1) }_{ true }\land\underbrace{ (0^2>1) }_{ false } }_{ false } & \underbrace{ \underbrace{ (1<1) }_{ false }\land\underbrace{ (1^2>1) }_{ false } }_{ false } \\
\\
& \therefore false \ for \ all \ x \in \{ -1,0,1 \}
\end{gather*}
$$

Negation of composite statements
$$
\begin{align*}
\sim(\forall x\in \mathbb{Z} \ \exists y\in \mathbb{Z} \ (x\geq 0) \to (x+y \leq 0)) & \equiv \exists x\in \mathbb{Z} \ \sim(\exists y\in \mathbb{Z} \ (x\geq 0) \to (x+y \leq 0)) \\
& \equiv \exists x\in \mathbb{Z} \ \forall y\in \mathbb{Z} \ \sim((x\geq 0) \to (x+y \leq 0)) \\
& \equiv \exists x\in \mathbb{Z} \ \forall y\in \mathbb{Z} \ \sim(\sim(x\geq 0) \lor (x+y \leq 0)) && \text{(Definition of}\to\text{)} \\
& \equiv \exists x\in \mathbb{Z} \ \forall y\in \mathbb{Z} \ \sim(\sim(x\geq 0)) \land \sim(x+y \leq 0)) && \text{(De Morgan's Law)} \\
& \equiv \exists x\in \mathbb{Z} \ \forall y\in \mathbb{Z} \ (x\geq 0) \land \sim(x+y \leq 0)) && \text{(Double negative)} \\
& \equiv \exists x\in \mathbb{Z} \ \forall y\in \mathbb{Z} \ (x\geq 0) \land (x+y \geq 0)) \\
\end{align*}
$$