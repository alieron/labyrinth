---
tags:
- cs1231s/chapter1
- math/logic
complete: true
prev: /labyrinth/notes/math/cs1231s/mathematical_terminology
next: /labyrinth/notes/math/cs1231s/conditionals
---
   
### Summary
Negation(NOT)
$$
\sim p \ is \ \begin{cases}
true & if \ p \ is \ false \\ false & otherwise
\end{cases}
$$

| $p$ | $\sim p$ |
| --- | -------- |
| T   | T        |
| F   | T        |

Conjunction(AND) ^024351
$$
p \land q \ is \ \begin{cases}
true & if \ p \ is \ true \ and \ q \ is \ true \\ false & otherwise
\end{cases}
$$

| $p$ | $q$ | $p \land q$ |
| --- | --- | ----------- |
| T   | T   | T           |
| T   | F   | F           |
| F   | T   | F           |
| F   | F   | F           |

Disjunction(OR)
$$
p \lor q \ is \ \begin{cases}
true & if \ p \ is \ true \ or \ q \ is \ true \ (or \ both) \\ false & otherwise
\end{cases}
$$

| $p$ | $q$ | $p \lor q$ |
| --- | --- | ---------- |
| T   | T   | T          |
| T   | F   | T          |
| F   | T   | T          |
| F   | F   | F          |

Laws of boolean algebra ^fad79a
$$
\begin{align*}
&&& AND & \quad & OR \\
\\
\text{Commutativity:} &&& p \land q \equiv q \land p && p \lor q \equiv q \lor p \\
\text{Associativity:} &&& p \land q \land r \equiv(p \land q) \land r \equiv p \land (q \land r) && p \lor q \lor r \equiv(p \lor q) \lor r \equiv p \lor (q \lor r) \\
\text{Distributivity:} &&& p \lor (q \land r) \equiv(p \lor q) \land (p \lor r) && p \land (q \lor r) \equiv(p \land q) \lor (p \land r)\\
\\
\text{Identity:} &&& p \land {\color{aqua} \mathbf{t}} \equiv p, \quad p \land {\color{orangered} \mathbf{c}} \equiv {\color{orangered} \mathbf{c}} && p \lor {\color{orangered} \mathbf{c}} \equiv p, \quad p \lor {\color{aqua} \mathbf{t}} \equiv {\color{aqua} \mathbf{t}} \\
\text{Negation:} &&& p \land {\sim p} \equiv {\color{orangered} \mathbf{c}} && p \lor {\sim p} \equiv {\color{aqua} \mathbf{t}} \\
\text{Double Negative:} &&& \sim(\sim p) \equiv p \\
\text{Indempotent:} &&& p \land p \equiv p && p \lor p \equiv p \\
\\
\text{De Morgan's Law:} &&& \sim (p \land q) \equiv {\sim p} \lor {\sim q} && \sim (p \lor q) \equiv {\sim p} \land {\sim q} \\
\text{Absorption:} &&& p \lor (p\land q) \equiv p \land (p \lor q) \equiv p
\end{align*}
$$
### Concept
$p$ and $q$ represent statements -> can either true or false

Order of operations -> $\sim$ first then $\land$ $\lor$ are equal, use parentheses to reduce ambiguity

Tautology
$$
{\color{aqua} \mathbf{t}}, \ is \ always \ true
$$

Contradiction
$$
{\color{orangered} \mathbf{c}}, \ is \ always \ false
$$
### Application
Logical equivalance
- solve via truth table
- LHS and RHS have the same truth values for **all** choices of truth values of the variables

$$
Verify: \ (p \lor q) \land r\not\equiv p \lor (q \land r)
$$
> only one row of the truth table is required to disprove logical equivalance

| $p$ | $q$ | $r$ | $p \lor q$ | LHS:$(p \lor q) \land r$ | $q \land r$ | RHS:$p \lor (q \land r)$ |
| --- | --- | --- | ---------- | ------------------------ | ----------- | ------------------------ |
| T   | T   | T   | T          | ==T==                    | T           | ==T==                    |
| T   | T   | F   | T          | F                        | F           | ==T==                    |
Solving via boolean algebra
$$
Verify: \ \sim({\sim p} \land q) \land (p\lor q) \equiv p
$$
$$
\begin{align*}
\sim({\sim p} \land q) \land (p \lor q) & \equiv ({\sim(\sim p)} \lor {\sim q}) \land (p \lor q) & \quad & \text{(De Morgan's Law)} \\
& \equiv (p \lor {\sim q}) \land (p \lor q) && \text{(Double Negative)} \\
& \equiv p \lor ({\sim q} \land q) && \text{(Distributivity)} \\
& \equiv p \lor {\color{orangered} \mathbf{c}} && \text{(Negation)} \\
& \equiv p && \text{(Identity)}
\end{align*}
$$

Exclusive-OR([XOR](/labyrinth/notes/cs/XOR)) ^211e52
- true iff only one of the variables are true

$$
p \oplus q \equiv (p \lor q) \land \sim(p\land q)
$$

| $p$ | $q$ | LHS:$p \oplus q$ | $p \lor q$ | $p\land q$ | $\sim(p\land q)$ | RHS:$(p \lor q) \land \sim(p\land q)$ |
| --- | --- | ---------------- | ---------- | ---------- | ---------------- | ------------------------------------- |
| T   | T   | F                | T          | T          | F                | F                                     |
| T   | F   | ==T==                | T          | F          | T                | ==T==                                 |
| F   | T   | ==T==                | T          | F          | T                | ==T==                                 |
| F   | F   | F                | F          | F          | T                | F                                     |
