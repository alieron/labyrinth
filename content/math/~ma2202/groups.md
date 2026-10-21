---
tags:
  - math/group_theory
  - to_review
complete: false
prev: /labyrinth/notes/math/~ma2202/binary_operation
next: /labyrinth/notes/math/~ma2202/subgroups

---
### Summary
Inverse identities
$$
\begin{gather*}
(ab)^{-1}=b^{-1}a^{-1},\qquad (a^{-1})^{-1}=a
\end{gather*}
$$

Cancellation and solving equations
$$
\begin{gather*}
ab=ac\implies b=c,\qquad ba=ca\implies b=c \\
\\
axb=c\iff x=a^{-1}cb^{-1}
\end{gather*}
$$

Power laws
$$
\begin{gather*}
g^ag^b=g^{a+b},\qquad (g^a)^b=g^{ab}\quad(a,b\in\mathbb Z)
\end{gather*}
$$

### Concept

#### Group
- a set with a [binary operation](/labyrinth/notes/math/~ma2202/binary_operation)
- is a group when the axioms hold

$$
\text{a set }G\text{ with operation }*: G \times  G \to G
$$
> the definition implies closure under the group operation

Axioms
$$
\begin{align*}
%1) && \text{Commutativity:} &&& \forall a,b \in G, \quad a * b = b * a \\
\\
1) && \text{Associativity:} &&& \forall a,b,c \in G, \quad (a*b)*c = a*(b*c) \\
\\
2) && \text{Identity:} &&& \exists e \in G, \quad \forall a \in G, \ a * e = a = e* a \\
\\
3) && \text{Inverse:} &&& \forall a \in G , \quad \exists a^{-1} \in G, \ a ^{-1} * a = e = a * a ^{-1}
\end{align*}
$$
> usually the group operation is implied and the $*$ is not written

Abelian
- additional property groups can have
- when the group operation is also commutative

$$
\text{Commutativity:} \qquad \forall a,b \in G, \quad a * b = b * a \\
$$

Uniqueness of identity

$$
\begin{align*}
& \text{Claim: } e_{1}, e_{2} \text{ are identity elements in }G \implies e_{1} =e_{2}\\
\\
& \text{Suppose }\forall a\in G, e_{1}a = a\land ae_{2} = a\\
\\
&\text{so }\\
&\quad\begin{aligned}[t]
e_{2} = e_{1}e_{2} = e_{1}e_{2} = e_{1} \\
\end{aligned}\\
\\
&\therefore e_{1} = e_{2}
\end{align*}
$$


Uniqueness of inverse

$$
\begin{align*}
& \text{Claim: } b, c \text{ are inverse elements of }a \implies b=c\\
\\
& \text{Suppose }\forall a\in G, ab = e\land ca = e\\
\\
&\text{so }\\
&\quad\begin{aligned}[t]
c = ce=c(ab) = (ca)b = eb = b \\
\end{aligned}\\
\\
&\therefore b =c
\end{align*}
$$

Cancellation

$$
\begin{align*}
& \text{Claim: } ab = ac \implies b = c\\
\\
& \text{Suppose }ab = ac\\
\\
&\text{so },\ \exists a^{-1} \in G, \quad a^{-1} a = e\\
&\quad\begin{aligned}[t]
&b = eb = a^{-1}(ab) = a^{-1}(ac) = ec = c\\
\end{aligned}\\
\\
&\therefore b = c
\end{align*}
$$
> can multiply and "divide" on both sides of the equation

#### Exponentiation
- nicer notation to represent the group operation done $n$ times

$$
a^n =\underbrace{  a*a*\dots*a }_{ n\text{ times} }
$$
### Application
Flipping the inverse
$$
\begin{gather*}
ab(ab)^{-1} = e = aea^{-1} = a(bb^{-1})a^{-1} \\
\\
(ab)^{-1} = b^{-1} a^{-1}
\end{gather*}
$$

Inverse is a source of commutativity
$$
\begin{align*}
& \text{Claim: } ab = e \implies ba = e\\
\\
& \text{Suppose }ab = e\\
\\
&\text{so },\ b = a^{-1}\\
&\quad\begin{aligned}[t]
&ba = a^{-1} a = e\\
\end{aligned}\\
\\
&\therefore ba = e
\end{align*}
$$

Respecting order of operations
- solve $axb=c$ for $x$

$$
\begin{align*}
axb&=c \\
\cancel{ a^{-1}a } x b = xb &= a^{-1}c \\
x \cancel{ b b^{-1} } = x &= a^{-1} c b^{-1}
\end{align*}
$$

Exponentiation commutes
$$
\begin{gather*}
(g^a)^b=(g^b)^a \\
\\
(g^a)^b
=\underbrace{
(\underbrace{g\cdots g}_{a\text{ factors}})
\cdots
(\underbrace{g\cdots g}_{a\text{ factors}})
}_{b\text{ blocks}}
=g^{ab} & \text{(Associativity)}\\
\\
\text{similarly,}\qquad(g^b)^a=g^{ba} \\
\\
ab = ba\text{ for integers} \\
\\
\therefore (g^a)^b=(g^b)^a
\end{gather*}
$$

### Sources
- [Judson Abstract Algebra](http://abstract.ups.edu/aata/)
- [Dummit and Foote Abstract Algebra](https://www.wiley.com/en-us/Abstract+Algebra%2C+3rd+Edition-p-9780471433347)
- [Rotman Introduction to Group Theory](https://link.springer.com/book/10.1007/978-1-4612-4176-8)
