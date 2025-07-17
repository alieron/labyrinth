---
tags:
- cs1231s/chapter2
- math/set_theory
complete: true
index: null
---
[Previous](/labyrinth/notes/math/cs1231s/sets)   [Next](/labyrinth/notes/math/cs1231s/binary_relations)

### Summary
n-ary relation
- set of n-tuples over n sets where the predicate is true

$$
\begin{gather*}
R = \{\begin{array}{c|c}(a_{1}, \dots, a_{n}) \in A_{1}\times \dots \times A_{n} & Q(a_{1}, \dots, a_{n}) \end{array}\} \\
\\
R \subseteq A_{1}\times \dots \times A_{n}
\end{gather*}
$$

### Concept
Tuples ^81cdfc
- ordered lists

$$
(a_{1}, a_{2}, \dots, a_{n})
$$

Cartesian product of sets
- the set of all the combinations of values from all sets as n-tuples

$$
\begin{gather*}
A_{1}\times \dots \times A_{n} = \{\begin{array}{c|c} (a_{1},\dots,a_{n}) & a_{1}\in A_{1} \land \dots \land a_{n}\in A_{n} \end{array}\} \\
\\
A_{1} =\dots = A_{n} = A \to A_{1}\times \dots \times A_{n} = A^n
\end{gather*}
$$
 similar idea to [Rⁿ](/labyrinth/notes/math/ma1522/vectors_in_Rⁿ)

### Application
Cartesian product
$$
\begin{align*}
\{ 0,1 \} \times \{ a,b,c \} & = \{ (0,a),(0,b),(0,c),(1,a),(1,b),(1,c) \} \\
\\
\{ 0,1 \}^3 & = \{ (0,0,0),(0,0,1),(0,1,0),(0,1,1),(1,0,0),(1,0,1),(1,1,0),(1,1,1) \} \\
\\
\varnothing \times \{ a,b,c \} & = \varnothing
\end{align*}
$$

Some n-ary relations
$$
\begin{align*}
S = \{\begin{array}{c|c} (n,y)\in \mathbb{Z}^+ \times \mathbb{R} & n=y^2 \end{array}\} &\quad&& (9,3)\in S \quad (3,\sqrt{ 3 })\in S \quad (3,1)\not\in S \quad (0.01, 0.1)\not\in S \\
\\
F = \{\begin{array}{c|c} (n,a,b,c)\in(Z^+)^4 & a^n + b^n=c^n \end{array}\} &&& (1, 2, 3, 5) \in F \quad (1, 2, 3, 4) \not\in F \quad (2, 3, 4, 5) \in F
\end{align*}
$$