---
tags:
- cs1231s
- math/number_theory
complete: false
---
### Summary
Basic properties
$$
\begin{align*}
\forall& x,y,z \in \mathbb{Z} \\
\\
\text{Closure :} &\qquad x+y \in \mathbb{Z} \qquad xy\in \mathbb{Z}\\
\\
\text{Commutativity :} &\qquad x+y=y+x \qquad xy=yx\\
\\
\text{Associativity :} &\qquad x+y+z=(x+y)+z=x+(y+z) \qquad xyz=(xy)z=x(yz)\\
\\
\text{Distributivity :} &\qquad x(y+z)=xy+xz \qquad (y+z)x=yx+zx\\
\\
\text{Trichotomy :} &\qquad x=y, \ or \ x<y, \ or \ x>y \qquad \text{(Exactly one is true)}  \\
\end{align*}
$$
### Concept
Basic properties
- closure -> product and sum are integers
- commutativity -> result of addition or multiplication is the same regardless of order of the operands
- associativity -> result of multiple operations is the same regardless of order of the operations
- distributivity -> multiplication is distributive over addition, but not the opposite
- trichotomy -> two integers are exclusively either equal to, less than or more than each other

> The $\mathbb{Z}$ comes from the German word for numbers "zahlen"

Odd and even integers ^ec72bc
$$
\begin{align*}
n \ is \ even & \iff \exists k \in \mathbb{Z} \ n = 2k\\
n \ is \ odd & \iff \exists k \in \mathbb{Z} \ n = 2k + 1
\end{align*}
$$
> assumption 1: Every integer is either odd or even, but not both

Divisibility ^e55bde
- n is a multiple of d

$$
d \mid n \iff\exists k\in \mathbb{Z} \ n=dk
$$

Fraction in lowest term ^7979a0
$$
\frac{a}{b}, b\neq 0\iff \text{gcd}(a,b) = 1
$$
> assumption 2: every [rational](/labyrinth/notes/math/cs1231s/special_sets#^9f1e5d) number can be reduced to a faction in its lowest term