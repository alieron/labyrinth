---
tags:
  - math235/chapter4
  - math/linear_algebra
complete: false
pred: "[orthogonality](/labyrinth/notes/math/ma1522/orthogonality)"
prev: /labyrinth/notes/math/math235/inner_product
next: /labyrinth/notes/math/math235/norm

---
### Concept
#### Orthogonality
$$
\left\langle \vec{v},\vec{w} \right\rangle = 0 \iff \vec{v} \perp \vec{w} 
$$

Orthogonality commutes
$$
\begin{gather*}
&\text{Claim: }\vec{v} \perp \vec{w} \iff \vec{w} \perp \vec{v} \\
\\
&\quad \begin{aligned}[t]
\vec{v} \perp \vec{w} &\iff \left\langle \vec{v}, \vec{w} \right\rangle = 0 \\
&\iff \left\langle \vec{w},\vec{v} \right\rangle = \overline{0} = 0 &&\text{(Conjuate Symmetry)} \\
&\iff \vec{w} \perp \vec{v}
\end{aligned} \\
&& \square
\end{gather*}
$$

Pythagorean theorem
- (Proposition 4.2.3)

$$
\begin{align*}
&\text{Claim: }\vec{v} \perp \vec{w} \implies \left\lVert \vec{v} + \vec{w} \right\rVert^{2} = \left\lVert \vec{v} \right\rVert^{2} + \left\lVert \vec{w} \right\rVert^{2} \\
\\
&\text{Suppose }\vec{v} \perp \vec{w}\text{ then }\left\langle \vec{v},\vec{w} \right\rangle = \left\langle \vec{w},\vec{v} \right\rangle = 0 \\
&\quad \begin{aligned}[t]
\left\lVert \vec{v}+\vec{w} \right\rVert^{2} &= \left\langle \vec{v}+\vec{w},\vec{v}+\vec{w} \right\rangle \\
&= \left\langle \vec{v},\vec{v}+\vec{w} \right\rangle + \left\langle \vec{w},\vec{v}+\vec{w} \right\rangle \\
&= \left\langle \vec{v},\vec{v} \right\rangle+\underbrace{ \left\langle \vec{v},\vec{w} \right\rangle }_{ 0 }+\underbrace{ \left\langle \vec{w},\vec{v} \right\rangle }_{ 0 }+\left\langle \vec{w},\vec{w} \right\rangle \\
&= \left\lVert \vec{v} \right\rVert^{2} + \left\lVert \vec{w} \right\rVert^{2}
\end{aligned} \\
&& \square
\end{align*}
$$

#### Projection
- closest point in a one-dimensional subspace

$$
\begin{gather*}
\operatorname{proj}_{\vec{v}} (\vec{x})=\frac{\langle \vec{x},\vec{v}\rangle}{\langle \vec{v},\vec{v}\rangle}\vec{v} \\
\\
\operatorname{perp}_{\vec{v}}(\vec{x}) = \vec{x} - \operatorname{proj}_{\vec{v}} (\vec{x})
\end{gather*}
$$

Properties
$$
\operatorname{proj}_{\vec{x}}(\lambda\vec{y}) =\lambda (\operatorname{proj}_{\vec{x}}(\vec{y})) \\
\\
\operatorname{proj}_{\vec{x}}(\vec{y}+\vec{z}) = \operatorname{proj}_{\vec{x}}(\vec{y})+ \operatorname{proj}_{\vec{x}}(\vec{z}) \\
\\
\text{proj}_{\lambda\vec{x}}(\vec{ y}) = \frac{\langle\vec{y}, \lambda\vec{x}\rangle}{\|\lambda\vec{x}\|^2}\lambda\vec{x} = \bar\lambda\lambda\frac{\langle\vec{y}, \vec{x}\rangle}{|\lambda|^2\|\vec{x}\|^2}\vec{x} = \text{proj}_{\vec{x}}(\vec{ y})
$$

Linearity of projection
$$
\begin{align*}
&\text{Claim: }\operatorname{proj}_{\vec{x}}(\vec{y}+a\vec{z}) = \operatorname{proj}_{\vec{x}}(\vec{y})+ a\operatorname{proj}_{\vec{x}}(\vec{z}) \\
\\
&\quad\begin{aligned}
\frac{\langle \vec{y}+a\vec{z},\vec{x}\rangle}{\langle \vec{x},\vec{x}\rangle}\vec{x} &= \frac{\langle \vec{y},\vec{x}\rangle + a\langle \vec{z},\vec{x}\rangle}{\langle \vec{x},\vec{x}\rangle}\vec{x} \\
&= \frac{\langle \vec{y},\vec{x}\rangle}{\langle \vec{x},\vec{x}\rangle}\vec{x} + a\frac{\langle \vec{z},\vec{x}\rangle}{\langle \vec{x},\vec{x}\rangle}\vec{x} \\
&= \operatorname{proj}_{\vec{x}}(\vec{y})+ a\operatorname{proj}_{\vec{x}}(\vec{z})
\end{aligned} \\
&&\square
\end{align*}
$$


Perp is orthogonal to the projection vector
- (Lemma 4.2.4)

$$
\begin{align*}
&\text{Claim: }\vec{w} \neq \vec{0} \implies \vec{w} \perp \operatorname{perp}_{\vec{w}}(\vec{v}) \\
\\
& \text{Suppose }\vec{w} \neq \vec{0} \\
\\
&\quad \begin{aligned}[t]
\left\langle \operatorname{perp}_{\vec{w}}(\vec{v}),\vec{w} \right\rangle &= \left\langle \vec{v} - \frac{\left\langle \vec{v},\vec{w} \right\rangle}{\left\langle \vec{w},\vec{w} \right\rangle}\vec{w},\vec{w} \right\rangle \\
&= \left\langle \vec{v}, \vec{w}\right\rangle - \frac{\left\langle \vec{v},\vec{w} \right\rangle}{\left\langle \vec{w},\vec{w} \right\rangle}\left\langle \vec{w},\vec{w} \right\rangle &&\text{(Linearity)} \\
&= \left\langle \vec{v}, \vec{w}\right\rangle - \left\langle \vec{v}, \vec{w}\right\rangle \\
&= 0
\end{aligned} \\
&& \square
\end{align*}
$$



#### Cauchy-Schwarz Inequality
- (Theorem 4.2.5)

$$
|\langle \vec{v},\vec{w}\rangle|\le\|\vec{v}\|\|\vec{w}\|
$$
$$
\begin{align*}
&\text{Claim: }|\langle \vec{v},\vec{w}\rangle|\le\left\lVert \vec{v} \right\rVert \left\lVert \vec{w} \right\rVert \\
\\
&\text{Case 1: }\vec{w} = \vec{0} \qquad \text{ (WLOG)} \\
\\
&\quad \begin{aligned}
\left\lvert \left\langle \vec{v}, \vec{w}\right\rangle \right\rvert = \left\lVert \vec{v} \right\rVert\left\lVert \vec{w} \right\rVert = 0
\end{aligned} \\
\\
&\text{Case 2: }\vec{w} \neq \vec{0} \qquad \text{ (WLOG)} \\
\\
&\quad \begin{aligned}
\left\lVert \vec{v} \right\rVert^{2} &= \left\lVert \vec{v} - \frac{\left\langle \vec{v},\vec{w} \right\rangle}{\left\langle \vec{w},\vec{w} \right\rangle} \vec{w} + \frac{\left\langle \vec{v},\vec{w} \right\rangle}{\left\langle \vec{w},\vec{w} \right\rangle} \vec{w} \right\rVert^{2} \\
&= \left\lVert \vec{v} - \frac{\left\langle \vec{v},\vec{w} \right\rangle}{\left\langle \vec{w},\vec{w} \right\rangle} \vec{w} \right\rVert^{2} + \left\lVert  \frac{\left\langle \vec{v},\vec{w} \right\rangle}{\left\langle \vec{w},\vec{w} \right\rangle} \vec{w} \right\rVert^{2} && \text{(Lemma 4.2.4 \& Pythagorean Theorem)} \\
&\geq 0 + \left\lVert  \frac{\left\langle \vec{v},\vec{w} \right\rangle}{\left\langle \vec{w},\vec{w} \right\rangle} \vec{w} \right\rVert^{2} \\
&= \dfrac{\left\lvert \left\langle \vec{v}, \vec{w}\right\rangle \right\rvert^2}{\left\lVert \vec{w} \right\rVert^4} \left\lVert \vec{w} \right\rVert^2 \\
&= \dfrac{\left\lvert \left\langle \vec{v}, \vec{w}\right\rangle \right\rvert^2}{\left\lVert \vec{w} \right\rVert^2}
\end{aligned} \\
\\
&\quad \begin{aligned}
\left\lVert \vec{w} \right\rVert^{2} > 0 &\implies \left\lVert \vec{v} \right\rVert^{2} \left\lVert \vec{w} \right\rVert^{2} \geq |\left\langle \vec{v},\vec{w} \right\rangle|^{2} \\
&\implies \left\lVert \vec{v} \right\rVert \left\lVert \vec{w} \right\rVert \geq |\left\langle \vec{v},\vec{w} \right\rangle|
\end{aligned} \\
&& \square \\
\\
& \begin{aligned}
|\langle \vec{v},\vec{w}\rangle| = \left\lVert \vec{v} \right\rVert \left\lVert \vec{w} \right\rVert &\iff \left\lVert \vec{v} - \dfrac{\left\langle \vec{v}, \vec{w}\right\rangle}{\left\langle \vec{w}, \vec{w}\right\rangle}\vec{w} \right\rVert^2 = \left\langle \vec{v} - \dfrac{\left\langle \vec{v}, \vec{w}\right\rangle}{\left\langle \vec{w}, \vec{w}\right\rangle}\vec{w}, \vec{v} - \dfrac{\left\langle \vec{v}, \vec{w}\right\rangle}{\left\langle \vec{w}, \vec{w}\right\rangle}\vec{w}\right\rangle = 0 \\
&\iff \vec{v} - \dfrac{\left\langle \vec{v}, \vec{w}\right\rangle}{\left\langle \vec{w}, \vec{w}\right\rangle}\vec{w} = \vec{0}
\end{aligned}

\end{align*}
$$
> equality only when the two vectors are parallel

Angle between vectors
- abstract idea for how different they are

$$
\cos \theta = \dfrac{\left\langle \vec{v}, \vec{w}\right\rangle}{\left\lVert \vec{v} \right\rVert\left\lVert \vec{w} \right\rVert} \in [-1,1]
$$


#### Orthonormal systems
- Compare Gram-Schmidt, QR factorization, and numerical loss of orthogonality
- Study Bessel inequality and Parseval equality
- Connect Fourier coefficients to projections in [hilbert space](/labyrinth/notes/math/higher_dimensions/hilbert_space)


### Application
![[Pasted image 20261028020648.png]]

Finding a perpendicular vector
$$
\text{using: }\langle p,q \rangle =\int_0^1 p(x) q(x) \ dx \text{ on }\mathcal{P}_{2}(\mathbb{R})\\
\\
p(x) = x \\
\\
\text{find }q(x), \ q(x)\perp p(x) \\
\\
\text{let }q(x) = a+bx+cx^{2} \\
\\
\begin{aligned}
\langle p,q \rangle &=\int_0^1 x(a+bx+cx^{2}) \ dx \\
&=\int_0^1 ax+bx^{2}+cx^{3} \ dx \\
&=\left[ \frac{a}{2}x^{2}+\frac{b}{3}x^{3}+\frac{c}{4}x^4 \right] _{0}^1 \\
&=\frac{a}{2}+\frac{b}{3}+\frac{c}{4} = 0
\end{aligned}\\
\\
\text{by inspection: }a = 2, \ b = -3, \ c=0 \text{ is a solution} \\
\\
q(x) = 2-3x \\
\\
\text{by inspection: }a = 2, \ b=0, \ c = -4 \text{ is a solution} \\
\\
q(x) = 2-4x^{2}
$$

Linear transform of projection
$$
T(\vec{x}) = \operatorname{proj}_{\vec{v}}(\vec{x}) \\
\\
\begin{aligned}
&\text{Claim: }T^{2} = T \\
\\
&\quad\begin{aligned}
T^{2}(\vec{x}) &= \frac{\left\langle T(\vec{x}),\vec{v} \right\rangle}{\left\langle \vec{v},\vec{v} \right\rangle}\vec{v} \\
&= \frac{\left\langle \frac{\left\langle \vec{x},\vec{v} \right\rangle}{\left\langle \vec{v},\vec{v} \right\rangle}\vec{v},\vec{v} \right\rangle}{\left\langle \vec{v},\vec{v} \right\rangle}\vec{v} \\
&= \frac{\left\langle \vec{x},\vec{v} \right\rangle}{\left\langle \vec{v},\vec{v} \right\rangle}\cancelto{ 1 }{ \frac{\left\langle \vec{v},\vec{v} \right\rangle}{\left\langle \vec{v},\vec{v} \right\rangle} }\vec{v} \\
&=\frac{\left\langle \vec{x},\vec{v} \right\rangle}{\left\langle \vec{v},\vec{v} \right\rangle}\vec{v} = T(\vec{x})
\end{aligned}
\end{aligned}
$$

Kernel of perpendicular
$$
S(\vec{x})=\operatorname{perp}_{\vec{v}}(\vec{x}) = \vec{x} - \operatorname{proj}_{\vec{v}}(\vec{x}) \\
\\
\begin{aligned}
\vec{x} \in \operatorname{Ker}(S) &\iff S(\vec{x}) = \vec{0} \\
&\iff \vec{x} - \operatorname{proj}_{\vec{v}}(\vec{x}) = \vec{0} \\
&\iff \vec{x} = \operatorname{proj}_{\vec{v}}(\vec{x}) \\
&\iff \vec{x} \in \operatorname{span}\{ \vec{v} \}
\end{aligned} \\
\\
\therefore \{\vec{v}\}\text{ is a basis for }\operatorname{Ker}(S)
$$

