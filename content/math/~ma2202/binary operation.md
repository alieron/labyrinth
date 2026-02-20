---
tags:
  - math/algebra
complete: false
next: /labyrinth/notes/math/~ma2202/groups

---
### Summary
Properties
$$
\begin{align*}
\text{Associative:} &&& \forall a,b,c \in G, \ (a*b)*c=a*(b*c) \\
\\
\text{Commutative/Abelian:} &&& \forall a,b \in G, \ a*b=b*a
\end{align*}
$$

Common binary operations
$$
\begin{array}{cl}
+: \mathbb{R}\times \mathbb{R} \to \mathbb{R} & +(a,b)=a+b\\
-: \mathbb{R}\times \mathbb{R} \to \mathbb{R} & -(a,b)=a-b\\
\times : \mathbb{R}\times \mathbb{R} \to \mathbb{R} & \times (a,b)=a\times b
\end{array}
$$
> division is not a binary operation in $\mathbb{R}$ since division by 0 is undefined

Multiplication set
- makes division a binary operation

$$
\begin{gather*}
\mathbb{R}^\times  = \mathbb{R}\setminus \{ 0 \} \\
\\
\times : \mathbb{R}\times \mathbb{R} \to \mathbb{R} & \times (a,b)=a\times b\\
\div : \mathbb{R}\div \mathbb{R} \to \mathbb{R} & \div (a,b)=a\div b
\end{gather*}
$$
> but addition and subtraction are no longer binary operations, since $0\not\in \mathbb{R}^\times$
### Concept
Binary operation
- binary function that maps any two elements in a set to another element in the same set
- implies a closure of the set under the operator

$$
\begin{gather*}
*:G\times G\to G \\
\\
\forall x,y\in G, \ *(x,y) = x*y \in G &\text{(Closure)}
\end{gather*}
$$

Multiplication table
- only possible for finite sets
- symmetry along the diagonal -> **abelian**

$$
\begin{array}{c|cccc}
x*y & y=a & b & c  \\
\hline x=a & a*a & a*b & a*c \\
b & b*a & b*b & b*c \\
c & c*a & c*b & c*c
\end{array}
$$

Identities
- neutral element
- operated alongside another element, the element is returned

$$
\begin{align*}
\text{Left Identity:} &&& \forall a \in G, \ e*a=a\\
\\
\text{Right Identity:} &&& \forall a \in G, \ a*e=a\\
\\
\text{Identity:}&&& \forall a \in G,\ e*a=a*e=a
\end{align*}
$$
### Application
Multiplication table
$$
\begin{gather*}
G = \{ 0,1,2 \} \\
a\star b = a \\
\\
(G, \star) \\
\\
\begin{array}{c|cccc}
\star & 0 & 1 & 2  \\
\hline 0 & 0 & 0 & 0 \\
1 & 1 & 1 & 1 \\
2 & 2 & 2 & 2
\end{array} \\
\\
\forall a,b\in G,\ a\star b=a\\
\therefore b\text{ is a right identity}\\
\\
\text{every element is a Right Identity}
\end{gather*}
$$

Associative but not abelian
$$
\begin{gather*}
&*:\mathbb{R}\times \mathbb{R}\to \mathbb{R}\\
&\forall a,b \in \mathbb{R},\ a*b = b \\
\\
\text{Associative:} & (a*b)*c=a*c=c\\
& a*(b*c) = a*c=c \\
& \therefore\text{associative} \\
\\
\text{Abelian:} & a*b = b\\
&b*a = a \\
&\therefore\text{not abelian}
\end{gather*}
$$

Abelian but not associative
$$
\begin{gather*}
&*:\mathbb{R}\times \mathbb{R}\to \mathbb{R}\\
&\forall a,b \in \mathbb{R},\ a*b = \frac{a+b}{2} \\
\\
\text{Associative:} & (a*b)*c=\frac{\frac{a+b}{2}+c}{2}\\
& a*(b*c) = \frac{a+\frac{b+c}{2}}{2} \\
& \therefore\text{not associative} \\
\\
\text{Abelian:} & a*b = \frac{a+b}{2}\\
&b*a = \frac{b+a}{2} \\
&\therefore\text{abelian}
\end{gather*}
$$

Identity
$$
\begin{gather*}
(\mathbb{R},+) \\
\\
0+a=a+0=a \\
e=0 & \text{(Identity)}\\
\\
(\mathbb{R},-) \\
\\
0-a=-a\neq a \\
a-0 = a\\
e=0 & \text{(Right Identity)}\\
\\
(\mathbb{R}^\times , \times )\\
\\
1\times a=a\times 1=a\\
e=1&\text{(Identity)}\\
\\
(\mathbb{R}^\times, \div )\\
\\
1\div a = \frac{1}{a} \neq a\\
a\div1 = \frac{a}{1}=a\\
e=1&\text{(Right Identity)}
\end{gather*}
$$