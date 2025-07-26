---
tags:
- cs1231s/chapter1
- math/logic
complete: true
prev: /labyrinth/notes/math/cs1231s/propositions
next: /labyrinth/notes/math/cs1231s/quantifications
---

   

### Summary
Implication(IF...THEN) ^8a163c
- $p$ implies $q$/if $p$ then $q$
- $p$ only if $q$/$p$ is a sufficient condition for $q$

$$
p\to q \equiv \sim p \lor q \qquad \text{(Definition of }\to\text{)}
$$
> vacuously true -> true by virtue of the hypothesis $p$ being false

| $p$ | $q$ | LHS:$p \to q$ | RHS:$\sim p\lor q$ |                |
| --- | --- | ------------- | ------------------ | -------------- |
| T   | T   | ==T==         | ==T==              |                |
| T   | F   | F             | F                  |                |
| F   | T   | ==T==         | ==T==              | Vacuously True |
| F   | F   | ==T==         | ==T==              | Vacuously True |

Biconditional(IFF) ^a1e708
- $p$ if and only if $q$/$p$ is a necessary and sufficient condition for $q$

$$
p\leftrightarrow q \equiv (p\to q) \land(q\to p)
$$

| $p$ | $q$ | LHS:$p \leftrightarrow q$ | $p\to q$ | $q\to p$ | RHS:$(p\to q) \land(q\to p)$ |
| --- | --- | ------------------------- | -------- | -------- | ---------------------------- |
| T   | T   | ==T==                     | T        | T        | ==T==                        |
| T   | F   | F                         | F        | T        | F                            |
| F   | T   | F                         | T        | F        | F                            |
| F   | F   | ==T==                     | T        | T        | ==T==                        |

### Concept
Contrapositive
$$
p \to q \equiv {\sim q} \to {\sim p}
$$

Converse
$$
p\to q \not\equiv q\to p
$$

Inverse
$$
p\to q \not\equiv {\sim p} \to {\sim q}
$$

Converse-inverse relationship, swapped terms from contrapositive
$$
q\to p \equiv {\sim p} \to {\sim q}
$$

Arguments
- Valid iff in every case where all the premises are true, the conclusion is true

- Sound argument -> iff it's valid and all its premises are true
- Unsound argument -> may be valid, but it has a false premise

Syllogism -> an argument with 2 premises and a conclusion, ie. modus ponens and modus tollens

[Modus ponens](/labyrinth/notes/math/cs1231s/rules_of_inference#^c19fcd)
- Fundemental argument for most proofs

$$
\begin{align*}
& p\to q \\
& p \\
\hline
\bullet \ &q
\end{align*}
$$

[Modus tollens](/labyrinth/notes/math/cs1231s/rules_of_inference#^84d8f9)
- Used in proof by contradiction

$$
\begin{align*}
& p\to q \\
& \sim q \\
\hline
\bullet \ & \sim p
\end{align*}
$$

Other [rules of inference](/labyrinth/notes/math/cs1231s/rules_of_inference)

### Application
Vacuously true, example
$$
\underbrace{ \underbrace{ 0=1 }_{ false } \to \underbrace{ 1=2 }_{ false } }_{ true }
$$

Proof for the contrapositive
$$
\begin{align*}
p \to q & \equiv {\sim p} \lor q & \quad & \text{(Definition of }\to\text{)} \\
& \equiv q \lor {\sim p} && \text{(Commutativity)} \\
& \equiv {\sim (\sim q)} \lor {\sim p} && \text{(Double Negative)} \\
& \equiv {\sim q} \to {\sim p} && \text{(Definition of }\to\text{)}
\end{align*}
$$

Example for contrapositive, and converse and inverse errors
$$
\begin{align*}
\text{Base:} & \quad && x\geq1 \to x^2\geq 1 \equiv {\color{aqua} \mathbf{t}} \\
\\
\text{Converse Error:} &&& x^2 \geq 1 \to x\geq1 \not \equiv {\color{aqua} \mathbf{t}} && \text{counter-example: } x^2=4, \ x = -2 \\
\\
\text{Inverse Error:} &&& x<1 \to x^2<1 \not \equiv {\color{aqua} \mathbf{t}} && \text{counter-example: } x=-2, \ x^2=4 \\
\\
\text{Contrapositive:} &&& x^2<1 \to x<1 \equiv {\color{aqua} \mathbf{t}} && \text{example: } x^2 = 0.25, \ x=0.5  \\
\end{align*}
$$

Negation of biconditonal
$$
\begin{align*}
\sim (p \leftrightarrow  q) & \equiv {\sim((p\to q)\land(q\to p))} & \quad & \text{(Definition of}\leftrightarrow\text{)} \\
& \equiv {\sim((\sim p\lor q)\land(\sim q\lor p))} && \text{(Definition of}\to\text{)} \\
& \equiv {\sim(\sim p\lor q)\lor {\sim(\sim q\lor p)}} && \text{(De Morgan's Law)} \\
& \equiv (\sim(\sim p)\land \sim q)\lor (\sim(\sim q)\land \sim p) && \text{(De Morgan's Law)} \\
& \equiv (p\land {\sim q})\lor (q \land {\sim p}) && \text{(Double Negative)} \\
& \equiv ((p\land {\sim q})\lor q) \land ((p\land {\sim q})\lor {\sim p}) && \text{(Distributivity)} \\
& \equiv ((p\lor q )\land ({\sim q}\lor q)) \land ((p\lor {\sim p})\land ({\sim q}\lor {\sim p})) && \text{(Distributivity)} \\
& \equiv ((p\lor q )\land {\color{aqua} \mathbf{t}} ) \land ({\color{aqua} \mathbf{t}} \land ({\sim q}\lor {\sim p})) && \text{(Negation)} \\
& \equiv (p\lor q ) \land  ({\sim q}\lor {\sim p}) && \text{(Identity)} \\
& \equiv (\sim p\to q) \land (q\to {\sim p}) && \text{(Definition of}\to\text{)} \\
& \equiv {\sim p} \leftrightarrow q && \text{(Definition of}\leftrightarrow\text{)}
\end{align*}
$$