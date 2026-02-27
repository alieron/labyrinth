---
tags:
  - math/linear_algebra
  - math/topology
complete: false
---
### Summary
Properties
$$
\begin{align*}
\text{Conjugate Symmetry:} &&& \braket{ x | y } = \braket{ y | x }^* \\
\\
\text{Left Linearity:} &&& \begin{aligned}
\braket{ ax + by | z } & = \braket{ ax | z } +\braket{ by | z } \\ 
&= a\braket{ x | z } +b\braket{ y | z } \\
\end{aligned} \\
\\
\text{Right Conjugate-Linearity:} &&& 
\begin{aligned}
\braket{ x | ay+bz } &= \braket{ a^*x | y } +\braket{ b^*x | z } \\
&= a^*\braket{ x | y } +b^*\braket{ x | z }  
\end{aligned} \\
\\
\text{Positive-Definiteness:} &&& x\neq \mathbf{0} \implies \braket{ x | x } >0
\end{align*}
$$

Norm
$$
| | x |  | = \sqrt{ \braket{ x | x }  } 
$$

Orthogonality
$$
x \perp y \iff \braket{ x | y } = 0
$$
### Concept
#### Inner product
- generalisation of the [dot product](/labyrinth/notes/math/ma1301/dot_product)
- gives the notions of length(norm), angles and orthogonality

Axioms
$$
\begin{align*}
\text{Conjugate Symmetry:} &&& \braket{ x | y } = \braket{ y | x }^* \\
\\
\text{Left Linearity:} &&& \begin{aligned}
\braket{ ax + by | z } & = \braket{ ax | z } +\braket{ by | z } \\ 
&= a\braket{ x | z } +b\braket{ y | z } \\
\end{aligned} \\
\\
\text{Positive-Definiteness:} &&& \forall x \ \braket{ x | x } \geq0 \\
&&& \braket{ x | x } = 0 \iff x=\mathbf{0}
\end{align*}
$$
> in quantum mechanics right linearity is often used instead

Inner product space ^40f0f2
- [vector space](/labyrinth/notes/math/ma1522/vectors_in_Rⁿ#^f4d609) with defined inner product

$$
\begin{align*}
&&&V\text{ is an inner product space over field }F \iff \\
\\
1) &&& x,y\in V \implies \forall a,b \in F \ ax+by\in V & \text{(Vector Space)} \\
2) &&& \exists \braket{ \cdot | \cdot } : V\times V\to F \text{ is a valid inner product}
\end{align*}
$$

[Norm](#)
$$
\begin{align*}
& \text{Claim: }|| x || = \sqrt{ \braket{ x | x } }\text{ is the norm for an inner product space }V\text{ over a field }F \\
\\
& 1) \text{ Show that } \forall x \in V, \ ||x|| \geq 0 \\
& \quad\begin{split}
& \forall x \in V, \ \braket{ x | x } \geq 0 &\quad& \text{(Positive-Definiteness)} \\
& \therefore \sqrt{ \braket{ x | x } } \geq 0,\ ||x|| = 0 \\
\end{split} \\
\\
& 2) \text{ Show that } ||x|| = 0 \iff x = 0 \\
& \quad\begin{split}
& (\to) \text{ Suppose } ||x|| = 0\\
&\quad \begin{split}
& ||x|| = 0 \implies \braket{ x | x } = 0 \\
& \therefore x = 0 &\quad& \text{(Positive-Definiteness)} \\
\end{split} \\
\\
& (\leftarrow) \text{ Suppose }x=0 \\
&\quad \begin{split}
& x=0 \implies \braket{ x | x }=0 &\quad& \text{(Positive-Definiteness)} \\
& \therefore \sqrt{ \braket{ x | x } } \geq 0,\ ||x|| = 0 \\
\end{split} \\
\end{split} \\
\\
& 3) \text{ Show that } \forall \lambda \in K,\ x \in V,\ ||\lambda x|| = |\lambda|\ ||x|| \\
& \quad\begin{split}
& \begin{split}
& ||\lambda x||^{2}&&=\braket{ \lambda x | \lambda x } \\
&&&= \lambda \braket{ x | \lambda x } &\quad& \text{(Left Linearity)} \\ 
&&&= \lambda\lambda^* \braket{ x | x } && \text{(Right Conjugate-Linearity)} \\
&&&= |\lambda|^{2} \ ||x||^{2} \\
\end{split} \\
& \therefore ||\lambda x|| = |\lambda|\ ||x|| \\
\end{split} \\
\\
& 4) \text{ Show that } \forall x,y\in V,\ ||x+y|| \leq ||x|| + ||y|| \\
& \quad\begin{split}
& \text{Cauchy-Schwarz Inequality:} \\
& \begin{split}
|\braket{ x | y } | &\leq ||x||\ ||y|| \\
\text{Re}(z) &\leq |z| \\
\text{Re}(\braket{ x | y } )&\leq |\braket{ x | y } | \\
\therefore \text{Re}(\braket{ x | y } ) &\leq ||x||\ ||y||
\end{split} \\
\\
& \begin{split}
& ||x+y||^{2} &&= \braket{ x+y | x+y } \\
&&&= \braket{ x | x+y } + \braket{ y | x+y } \\
&&&= \braket{ x | x } + 2\text{Re}(\braket{ x | y } )+\braket{ y | y } \\
&&&\leq ||x||^{2} + 2||x||\ ||y|| + ||y||^{2} \\
&&&\leq (||x|| + ||y||)^2
\end{split} \\
\\
& \therefore ||x+y|| \leq ||x|| + ||y|| \\
\end{split} \\
\end{align*}
$$
> all inner product spaces are normed vector spaces

[Orthogonality](/labyrinth/notes/math/ma1522/orthogonality)
$$
x \perp y \iff \braket{ x | y } = 0
$$

[kronecker delta](/labyrinth/notes/math/abstract_algebra/kronecker_delta)

### Extra
Cauchy-Schwarz inequality