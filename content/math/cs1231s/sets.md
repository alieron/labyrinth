---
tags:
- cs1231s/chapter2
- math/set_theory
complete: true
prev: /labyrinth/notes/math/cs1231s/proof_by_induction
next: /labyrinth/notes/math/cs1231s/n-ary_relations
---

   

### Summary
Set builder for infinite sets, similar to [quantifications](/labyrinth/notes/math/cs1231s/quantifications)
- for all x in the domain which fulfills the predicate

$$
A = \{\begin{array}{c|c} x\in D & Q(x) \end{array}\}
$$

Rules of set operators, corollary of the [laws of boolean algebra](/labyrinth/notes/math/cs1231s/propositions#^fad79a)
$$
\newcommand{\mybar}[3]{\mathrlap{\hspace{#2}\overline{\scalebox{#1}[1]{\phantom{\ensuremath{#3}}}}}\ensuremath{#3}}
\begin{align*}
& \quad && \text{Intersection} & \quad & \text{Union} \\
\\
\text{Commutativity:} &&& A \cap B = B \cap A && A \cup B = B \cup A \\
\text{Associativity:} &&& (A\cap B)\cap C = A\cap (B\cap C) && (A\cup B)\cup C = A\cup (B\cup C) \\
\text{Distributivity:} &&& A\cup(B\cap C)=(A\cup B)\cap(A\cup C) && A\cap(B\cup C)=(A\cap B)\cup(A\cap C)) \\
\\
\text{Identity:} &&& A \cap {\color{aqua} U} =A, \quad A\cap {\color{orangered} \varnothing} = {\color{orangered} \varnothing} && A \cup {\color{aqua} U} ={\color{aqua} U} , \quad A\cup {\color{orangered} \varnothing} = A \\
\text{Complement:} &&& A\cap \overline{A} = {\color{orangered} \varnothing} && A\cup \overline{A} = {\color{aqua} U}\\
&&& \overline{\overline{A}}= A && \overline{{\color{aqua} U}}= {\color{orangered} \varnothing}\\
\text{Indempotent:} &&& A\cap A = A && A\cup A=A \\
\\
\text{De Morgan's Law:} &&& \overline{A\cap B}=\overline{A}\cup \overline{B} && \overline{A\cup B}=\overline{A}\cap \overline{B} \\
\text{Absorption:} &&& A\cup(A\cap B) = A\cap(A\cup B) = A
\end{align*}
$$

Subset and proper subset ^ca7c0d
$$
\begin{gather*}
A\subseteq B \iff \forall x \in A \ x \in B \iff \forall x \in U \ x \in A \to x \in B \\
\\
A = B \iff (A\subseteq B) \land (B\subseteq A)  \iff \forall x \in U \ x \in A \leftrightarrow  x \in B \\
\\
A\subsetneq B \iff A\subseteq B \land A \neq B \equiv A\subseteq B \land (\exists x \in B \ x \not\in A)
\end{gather*}
$$

### Concept
Properties of sets
- no ordering
- no repetition

Set notation and operations ^490492
$$
\begin{align*}
\text{Member:} &&& x \in A && x\text{ is a member of }A\\
\\
\text{Size:} &&& |A| && \text{number of elements in }A \\
\\
\text{Union:} &&& A \cup B = \{\begin{array}{c|c} x \in U & x \in A \lor x \in B \end{array}\} \\
\\
\text{Intersection:} &&& A \cap B = \{\begin{array}{c|c} x \in U & x \in A \land x \in B \end{array}\} \\
\\
\text{Difference:} &&& A - B = \{\begin{array}{c|c} x \in U & x \in A \land x \not\in B \end{array}\} \\
\\
\text{Complement:} &&& \overline{A} = \{\begin{array}{c|c} x \in U & x \not\in A \end{array}\}
\end{align*}
$$

Domain expansion (Theorem 2.1)
$$
\forall x \in A \ Q(x) \leftrightarrow \forall x \in U \ x \in A \to Q(x)
$$

Empty set
- there is nothing in the empty set

$$
\begin{gather*}
\forall x \in U \ \sim(x\in \varnothing) \\
\\
\varnothing = \{  \} \\
\\
|\varnothing| = 0
\end{gather*}
$$

The empty set is a subset of every set (Corollary 2.2)
$$
\begin{align*}
& \text{Claim: } \forall S \in U \ \varnothing \subseteq S \\
\\
& \text{Assume }\sim (\varnothing \subseteq S) \text{ is true} \\
&\quad \begin{split}
\sim (\varnothing \subseteq S) & \equiv \sim (\forall x \in \varnothing \ x \in S) \\
& \equiv \exists x \in \varnothing \ x \not\in S
\end{split} \\
\\
&\quad \text{Contradicts definition of }\varnothing \\
\\
&& \square
\end{align*}
$$
> cont. there is a unique empty set (Corollary 2.3)

Power set
- set of all the possible subsets of its input

$$
\begin{gather*}
P(A) = \{\begin{array}{c|c} \forall S \in U & S\subseteq A \leftrightarrow S \in P(A) \end{array}\} \\
\\
|P(A)| = 2^{|A|}
\end{gather*}
$$
> a set can be an element of another set, similar to [nested arrays](/labyrinth/notes/cs/cs1101s/arrays#^0bd712)

### Application
Set statements
$$
\begin{align*}
\{ 1,2,4 \} = \{ 4,1,2 \} &\quad&& \text{is true}\\
\\
\{ 5, \varnothing \} = \{ 5 \} &&& \text{is false, }\varnothing\subseteq \{ 5 \} \text{ but } \varnothing \not\in \{ 5 \}
\end{align*}
$$

Power sets
- the empty set is always an element of the power set
- use the size formula to check

$$
\begin{align*}
P(\{ 0,1 \}) & = \{ \varnothing, \{ 0 \}, \{ 1 \}, \{ 0,1 \} \} \\
\\
P(\varnothing) & = \{ \varnothing \} \\
\\
P(P(\varnothing)) & = \{ \varnothing, \{ \varnothing \} \} \\
\\
P(P(P(\varnothing))) & = \{ \varnothing, \{ \varnothing \},\{ \{ \varnothing \} \} ,\{ \varnothing, \{ \varnothing \} \} \} 
\end{align*}
$$