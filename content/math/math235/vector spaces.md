---
tags:
  - math235/chapter1
  - math/linear_algebra
complete: false
next: /labyrinth/notes/math/math235/subspaces_II

---
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
7) && \text{Distributivity } \cdot\text{:} &&& \forall \vec{x}, \vec{y} \in V, \ \forall s \in \mathbb{F}, \quad s \cdot (\vec{x} + \vec{y}) = s \cdot \vec{x} + s\cdot \vec{y} \\
\\
8) && \text{Identity }\cdot\text{:} &&&  \forall \vec{x} \in V, \quad 1 \cdot \vec{x} = \vec{x}
\end{align*}
$$

### Application
Proving other properties
$$
\begin{align*}
&&&\forall s \in \mathbb{F}, \ s\cdot\vec{0} = \vec{0} \\
&&&\forall \vec{x} \in V, \ (-1)\cdot \vec{x} = -\vec{x} \\
&&&\forall \vec{x} 0 \cdot \vec{x} = \vec{0} \\
&&&\text{uniqueness of }\vec{0} \\
&&&\text{uniqueness of additive inverse}
\end{align*}
$$