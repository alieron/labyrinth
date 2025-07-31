---
tags:
- cs1231s
- math/number_theory
complete: false
---
\[\[special sets|Previous]]   \[\[logical operators|Next]]
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
Basic Properties
- Closure -> Product and sum are integers
- Commutativity -> Result of addition or multiplication is the same regardless of order of the operands
- Associativity -> Result of multiple operations is the same regardless of order of the operations
- Distributivity -> Multiplication is distributive over addition, but not the opposite
- Trichotomy -> Two integers are exclusively either equal to, less than or more than each other

> The $\mathbb{Z}$ comes from the German word for numbers "zahlen"
### Application
Definition of odd and even integers ^ec72bc
$$
\begin{align*}
n \ is \ even & \iff \exists k \in \mathbb{Z} \ \mathrm{s.t.}\ n = 2k\\
n \ is \ odd & \iff \exists k \in \mathbb{Z} \ \mathrm{s.t.}\ n = 2k + 1
\end{align*}
$$
> Assumption 1: Every integer is either odd or even, but not both

Definition of divisibility, d divides n if d is a factor of n ^e55bde
$$
d \mid n \iff\exists k\in \mathbb{Z} \ \mathrm{s.t.}\ n=dk
$$

Definiton of fraction in lowest term,  ^7979a0
$$
\frac{a}{b}, b\neq 0\iff gcd(a,b) = 1
$$
> Assumption 2: Every [rational](/labyrinth/notes/math/cs1231s/special_sets#^9f1e5d) number can be reduced to a faction in its lowest term

Definition of colorful for #cs1231s
$$
n\text{ is colorful} \iff \exists k \ \mathrm{s.t.}\ n=3k \iff 3 \mid n
$$