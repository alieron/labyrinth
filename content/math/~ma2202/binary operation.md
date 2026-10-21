---
tags:
  - math/group_theory
  - to_review
complete: false
next: /labyrinth/notes/math/~ma2202/groups

---
### Summary
Binary operation
$$
\begin{gather*}
*\colon S\times S\to S
\end{gather*}
$$

Structural laws
$$
\begin{gather*}
\text{Associative: }(a*b)*c=a*(b*c) \\
\text{Commutative: }a*b=b*a
\end{gather*}
$$

### Concept
#### Binary operation
- aka dyadic operation
- combines two elements of a [set](/labyrinth/notes/math/cs1231s/sets) and returns another element of that set

$$
*\colon S\times S\to S
$$

Properties
- that a binary operation can have

$$
\begin{align*}
1) && \text{Commutativity:} &&& a * b = b * a \\
\\
2) && \text{Associativity:} &&& (a*b)*c = a*(b*c) \\
\\
3) && \text{Identity:} &&& a * e = a = e* a \\
\\
4) && \text{Inverse:} &&& a ^{-1} * a = e = a * a ^{-1}
\end{align*}
$$

#### Closure, domain and finite operations
- closure is encoded in the codomain $S$
- distinguish total operations from partial operations as [functions](/labyrinth/notes/math/cs1231s/function_relations)
- check whether changing the carrier set repairs a failed closure property
- a Cayley table specifies a finite binary operation
- closure and commutativity are visible directly in the table
- associativity requires global triple constraints or a structural representation

### Application
Checking closure
- is subtraction a binary operation on $\mathbb N_0$ or $\mathbb Z$?

$$
\begin{gather*}
0,1\in\mathbb N_0,\qquad 0-1=-1\notin\mathbb N_0 \\
\therefore \text{subtraction is not a binary operation on }\mathbb N_0 \\
\\
a,b\in\mathbb Z\implies a-b\in\mathbb Z \\
\therefore \text{subtraction is a binary operation on }\mathbb Z
\end{gather*}
$$

### Sources
- [Dummit and Foote Abstract Algebra](https://www.wiley.com/en-us/Abstract+Algebra%2C+3rd+Edition-p-9780471433347)
- [Judson Abstract Algebra](http://abstract.ups.edu/aata/)
- [Encyclopedia of Mathematics binary operation](https://encyclopediaofmath.org/wiki/Binary_operation)
