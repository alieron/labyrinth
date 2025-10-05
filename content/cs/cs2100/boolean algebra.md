---
tags:
  - cs2100/chapter11
  - math/logic
complete: true
prev: /labyrinth/notes/cs/cs2100/MIPS_control_path
next: /labyrinth/notes/cs/cs2100/standard_forms

---
Succeeds:  [propositions](/labyrinth/notes/math/cs1231s/propositions)
### Summary
Laws of boolean algebra
$$
\begin{align*}
&&& \text{AND} & \quad & \text{OR} \\
\\
\text{Identity:} &&& x \cdot 1 = x && x+0 = x \\
\text{One/Zero:} &&& x \cdot 0 = 0 && x+1 = 1 \\
\text{Negation:} &&& x \cdot x' = 0 && x+x' = 1 \\
\\
\text{Commutativity:} &&& x \cdot y = y \cdot x && x+y = y + x\\
\text{Associativity:} &&& x \cdot(y \cdot z) = (x \cdot y)\cdot z && x+(y+z) = (x+y)+z \\
\text{Distributivity:} &&& x + (y\cdot z) = (x+y)\cdot(x+z) && x \cdot(y + z) = (x \cdot y) + (x\cdot z)
\end{align*}
$$
> same as these [laws](/labyrinth/notes/math/cs1231s/propositions#^fad79a) but with different notation

Theorems
$$
\begin{align*}
&&& \text{AND} & \quad & \text{OR} \\
\\
\text{Idempotency:} &&& x \cdot x = x && x+x = x \\
\text{Involution:} &&& (x')' = x \\
\\
\text{Absorption:} &&& x\cdot(x + y) = x && x + x \cdot y = x \\
&&& x\cdot(x' + y) = x\cdot y && x + x' \cdot y = x+y \\
\\
\text{De Morgan's:} &&& (x\cdot y)' = x' + y' && (x+y)' = x'\cdot y' \\
\text{Concensus:} &&& (x+y)\cdot(x'+z)\cdot(y+z)=(x+y)\cdot(x'+z) && x\cdot y+x'\cdot z+y\cdot z = x\cdot y + x'\cdot z 
\end{align*}
$$
### Concept
Propositions
$$
\begin{align*}
\text{Negation (NOT):} &&& x' \\
\text{Logical Product (AND):} &&& x \cdot y \\
\text{Logical Sum (OR):} &&& x + y
\end{align*}
$$
> for #cs2100 the operator precedence is 1) `NOT`, 2) `AND` then 3) `OR`

Duality
- AND and OR operators can be interchanged and the equation will still remain valid

$$
\begin{align*}
\text{De Morgan's:}&&&(x+y+z)'=x'\cdot y'\cdot z' \iff (x\cdot y\cdot z)' = x'+y'+z'
\end{align*}
$$
> duality is not negation

Complement [functions](/labyrinth/notes/math/cs1231s/function_relations#^38c347)
- negation of the boolean function
### Application
Proof for absorption
$$
\begin{align*}
x + x \cdot y & = x\cdot 1 +x\cdot y && \text{(Identity)} \\
& = x \cdot(1+y) && \text{(Distributivity)} \\
& = x \cdot 1 && \text{(One element)} \\
& = x && \text{(Identity)}
\end{align*}
$$

Functions and complement functions
$$
\begin{gather*}
\begin{aligned}
F_{1} &= x\cdot y\cdot z' \\
F_{1}' &= (x\cdot y\cdot z')' \\
&= x' + y' + z
\end{aligned}\\
\\
\begin{array} {|c|c|c|c|c|}
\hline x & y & z & F_{1} & F_{1}' \\
\hline 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & 1 \\
0 & 1 & 0 & 0 & 1 \\
0 & 1 & 1 & 0 & 1 \\
1 & 0 & 0 & 0 & 1 \\
1 & 0 & 1 & 0 & 1 \\
1 & 1 & 0 & 1 & 0 \\
1 & 1 & 1 & 0 & 1 \\
\hline
\end{array}
\end{gather*}
$$
