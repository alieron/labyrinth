---
tags:
  - math235/chapter1
  - math/linear_algebra
complete: false
next: /labyrinth/notes/math/math235/subspaces_II

---
### Summary
Vector space disqualifiers
$$
\begin{gather*}
1\cdot \vec{v} = \vec{v} \\
\\
0 \cdot \vec{v} = \vec{0} \\
\\
a\cdot(\vec{u} + \vec{v}) = a\cdot \vec{u} + a \cdot \vec{v}
\end{gather*}
$$

### Concept
#### Vector spaces
$$
\begin{gather*}
\text{a set }V\text{ with operations }\\
+:V\times V\to V\text{ and } \cdot:\mathbb{F}\times V\to V\\
\text{ is a vector space}\iff   \\
\\
\begin{aligned}
1) &&& \forall \vec{x}, \vec{y} \in V, \ \vec{x}+\vec{y}\in V && \text{(Closure in addition)} \\
2) &&& \forall \vec{x}\in V, \ \forall s \in \mathbb{F}, \ s\cdot \vec{x} \in V  && \text{(Closure in scalar multiplication)}
\end{aligned}
\end{gather*}
$$

Axioms
$$
\begin{align*}
1) && \text{Associativity +:} &&& \forall \vec{x}, \vec{y}, \vec{z} \in V, \quad(\vec{x} + \vec{y}) + \vec{z} = \vec{x} + (\vec{y} + \vec{z}) \\
\\
2) && \text{Zero Vector (Identity +):} &&& \exists  \vec{0} \in V, \quad \forall \vec{x} \in V, \ \vec{0} + \vec{x} = \vec{x} + \vec{0} = \vec{x} \\
\\
3) && \text{Inverse +:} &&& \forall \vec{x} \in V, \quad \exists-\vec{x} \in V, \ \vec{x} + (-\vec{x}) = (-\vec{x}) + \vec{x} = \vec{0} \\
\\
4) && \text{Commutativity +:} &&& \forall \vec{x}, \vec{y} \in V, \quad \vec{x} + \vec{y} = \vec{y} + \vec{x} \\
\\
5) && \text{Compatibility }\cdot\text{:} &&& \forall \vec{x} \in V, \ \forall s,t \in \mathbb{F}, \quad s\cdot (t\cdot \vec{x}) = (st) \cdot \vec{x} \\
\\
6) && \text{Distributivity } \cdot\text{:} &&& \forall \vec{x} \in V, \ \forall s,t \in \mathbb{F} , \quad (s+t)\cdot \vec{x} = s\cdot \vec{x} + t\cdot \vec{y} \\
\\
7) && \text{Distributivity } +\text{:} &&& \forall \vec{x}, \vec{y} \in V, \ \forall s \in \mathbb{F}, \quad s \cdot (\vec{x} + \vec{y}) = s \cdot \vec{x} + s\cdot \vec{y} \\
\\
8) && \text{Identity }\cdot\text{:} &&&  \forall \vec{x} \in V, \quad 1 \cdot \vec{x} = \vec{x}
\end{align*}
$$

Scalar multiplication with 0
$$
\begin{align*}
&\text{Claim: }\forall \vec{x}\in V, \ 0 \cdot \vec{x} = \vec{0} \\
\\
&\quad\begin{aligned}[t]
0\cdot \vec{x} &= (0+0)\cdot \vec{x} \\
&= 0\cdot \vec{x} + 0 \cdot \vec{x} && \text{(Distributivity }\cdot\text{)} \\
0\cdot \vec{x} + (-(0\cdot \vec{x}))&= 0\cdot \vec{x} + 0 \cdot \vec{x} + (-(0\cdot \vec{x})) && \text{(Inverse }+\text{)} \\
\vec{0} &= 0 \cdot \vec{x} + \vec{0} \\
&= 0\cdot \vec{x} && \text{(Zero Vector)} \\
\end{aligned} \\
\\
&\therefore 0 \cdot \vec{x} = \vec{0} \\
&&\square
\end{align*}
$$
> this gives an easy way calculate the zero vector

Additive inverse by scalar multiplication with -1
$$
\begin{align*}
&\text{Claim: }\forall \vec{x} \in V, \ (-1)\cdot \vec{x} = -\vec{x} \\
\\
&\quad \begin{aligned}[t]
0\cdot \vec{x} &= (1+(-1))\cdot \vec{x} \\
&= 1\cdot \vec{x} + (-1) \cdot \vec{x} \\
\vec{0} &= \vec{x}+ (-1) \cdot \vec{x} && \text{(Scalar Mult with 0, Identity }\cdot\text{)} \\
&= \vec{x} + (-\vec{x}) && \text{(Inverse +)}
\end{aligned} \\
\\
&\therefore (-1)\cdot \vec{x} = -\vec{x} \\
&&\square
\end{align*}
$$

Scaling the zero vector
$$
\begin{align*}
&\text{Claim: }\forall s \in \mathbb{F}, \ s\cdot\vec{0} = \vec{0} \\
\\
&\quad\begin{aligned}[t]
s\cdot\vec{0} &= s\cdot(0\cdot \vec{0}) && \text{(Scalar Mult with 0)} \\
&= (s\cdot 0)\cdot  \vec{0} && \text{(Compatibility)} \\
&= 0 \cdot  \vec{0} \\
&= \vec{0} && \text{(Scalar Mult with 0)}
\end{aligned} \\
\\
&\therefore s\cdot\vec{0} = \vec{0} \\
&& \square
\end{align*}
$$

Uniqueness
$$
\begin{align*}
&&&\text{uniqueness of }\vec{0} \\
&&&\text{uniqueness of additive inverse}
\end{align*}
$$
![[Pasted image 20261106111346.png]]

### Application
Unconventional vector spaces
$$
\begin{gather*}
V=\{(a,b) : a,b\in \mathbb{R}\} \\
\\
(a,b)\oplus(c,d)=(a+c-1,b+d-1) \\
\lambda \odot(a,b)=(\lambda a-\lambda+1, \lambda b-\lambda+1) \\
\\
\begin{aligned}
\vec{0} &= 0 \odot(a,b) \\
&= (1,1)
\end{aligned} \\
\\
\begin{aligned}
-(a,b) &= (-1) \odot(a,b) \\
&= (-a-(-1)+1,-b -(-1)+1) \\
&= (2-a, 2-b)
\end{aligned}
\end{gather*}
$$