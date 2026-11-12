---
tags:
  - math/group_theory
  - to_review
complete: false
prev: /labyrinth/notes/math/~ma2202/cyclic_groups
next: /labyrinth/notes/math/~ma2202/group_isomorphisms

---
### Summary
Operation preservation
$$
\begin{gather*}
\phi:G\to H,\qquad\phi(ab)=\phi(a)\phi(b)
\end{gather*}
$$

For a homomorphism $\phi:G\to H$:
$$
\begin{gather*}
\phi(e_G)=e_H,\quad\phi(a^{-1})=\phi(a)^{-1},\quad
\phi(a^n)=\phi(a)^n\ (n\in\mathbb Z)
\end{gather*}
$$

Kernel and image; injectivity and surjectivity
$$
\begin{gather*}
\ker\phi=\{g\in G:\phi(g)=e_H\}\trianglelefteq G,\qquad
\operatorname{im}\phi=\{\phi(g):g\in G\}\le H \\
\phi\text{ injective}\iff\ker\phi=\{e_G\},\qquad
\phi\text{ surjective}\iff\operatorname{im}\phi=H
\end{gather*}
$$

First Isomorphism Theorem
$$
\begin{gather*}
G/\ker\phi\cong\operatorname{im}\phi,\qquad
|G|=|\ker\phi|\,|\operatorname{im}\phi|\quad(|G|<\infty)
\end{gather*}
$$

> (keep
### Concept
#### Homomorphism
- structure/operation preserving map

$$
\begin{gather*}
f:G\to H \\
\\
\forall a,b \in G, \quad f(a*_{G}b) = f(a)*_{H}f(b)
\end{gather*}
$$

> keep)

#### Automatic properties
- [cancellation](/labyrinth/notes/math/~ma2202/groups) gives identity preservation; products give inverses and integer powers.

$$
\begin{gather*}
\phi(e_G)=\phi(e_Ge_G)=\phi(e_G)\phi(e_G)
\implies\phi(e_G)=e_H \\
\\
e_H=\phi(aa^{-1})=\phi(a)\phi(a^{-1})
\implies\phi(a^{-1})=\phi(a)^{-1} \\
\\
\phi(a^{n+1})=\phi(a^n)\phi(a)
\implies\phi(a^n)=\phi(a)^n\quad(n\ge0) \\
\phi(a^{-n})=\phi((a^{-1})^n)=\phi(a)^{-n}\quad(n>0)
\end{gather*}
$$

#### Kernel, image and fibres
- use the [one-step subgroup test](/labyrinth/notes/math/~ma2202/subgroups#Subgroup_test); the kernel is also normal.

$$
\begin{gather*}
K=\ker\phi,\quad I=\operatorname{im}\phi,\quad e_G\in K,\ e_H\in I \\
\\
a,b\in K\implies\phi(ab^{-1})=e_He_H^{-1}=e_H\implies ab^{-1}\in K \\
x=\phi(a),\ y=\phi(b)\in I\implies xy^{-1}=\phi(ab^{-1})\in I \\
\therefore\quad K\le G,\qquad I\le H \\
\\
g\in G,\ k\in K\implies
\phi(gkg^{-1})=\phi(g)e_H\phi(g)^{-1}=e_H \\
\therefore\quad K\trianglelefteq G
\end{gather*}
$$

Fibres, injectivity and counting
- each nonempty fibre is a [coset](/labyrinth/notes/math/~ma2202/subgroups#Cosets) of the kernel, with the same size as the kernel.

$$
\begin{gather*}
\phi(a)=\phi(b)\iff\phi(b^{-1}a)=e_H\iff b^{-1}a\in K\iff a\in bK \\
\\
\phi\text{ injective}\implies\phi(k)=\phi(e_G)\implies k=e_G\quad(k\in K) \\
K=\{e_G\},\ \phi(a)=\phi(b)\implies b^{-1}a=e_G\implies a=b \\
\therefore\quad\phi\text{ injective}\iff K=\{e_G\} \\
\\
\phi^{-1}(\{\phi(b)\})=bK,\qquad K\to bK,\ k\mapsto bk\text{ bijective} \\
|G|<\infty\implies
|G|=\sum_{y\in I}|\phi^{-1}(\{y\})|=|I|\,|K|
\end{gather*}
$$

#### First Isomorphism Theorem
- the quotient identifies inputs with the same output; normality makes coset multiplication well-defined.

$$
\begin{gather*}
K=\ker\phi\trianglelefteq G,\qquad
G/K=\{gK:g\in G\},\quad(aK)(bK)=abK \\
\\
\overline\phi:G/K\to\operatorname{im}\phi,\qquad
\overline\phi(gK)=\phi(g) \\
aK=bK\iff b^{-1}a\in K\iff\phi(a)=\phi(b)
\quad\text{(well-defined and injective)} \\
\\
\overline\phi((aK)(bK))=\phi(ab)=\phi(a)\phi(b)
=\overline\phi(aK)\overline\phi(bK) \\
\operatorname{im}\overline\phi=\operatorname{im}\phi
\implies\overline\phi\text{ bijective homomorphism} \\
\therefore\quad G/\ker\phi\cong\operatorname{im}\phi
\end{gather*}
$$

> (keep
### Application
Parity group
$$
\begin{gather*}
\text{parity group over addition, }P:\qquad\begin{array}{c| c c}
+ & e & o  \\
 \hline
e & e & o \\
o & o & e
\end{array} \\
\\
f: \mathbb{Z} \to P\\
f(m)=\begin{cases}
e & \text{if }m\text{ is even} \\
o & \text{if }m\text{ is odd}
\end{cases} \\
\\
\text{check: }f(m+_{\mathbb{Z}} n) = f(m) +_{P} f(n) \\
\\
\begin{aligned}
\text{both even: }&&&f(2k+2j) = f(2(k+j)) = e &&=&& e+e = f(2k) + f(2j)\\
\\
\text{both odd: }&&&f(2k+1+2j+1) = f(2(k+k+1)) = e &&=&& o + o  = f(2k+1) + f(2j+1)\\
\\
\text{WLOG odd and even: }&&&f(2k+2j+1) =f(2(k+j)+1) = o &&=&& e+o = f(2k) + f(2j+1)\\
\end{aligned} \\
\\
\therefore f\text{ is a homomorphism}
\end{gather*}
$$

> keep)

#### Test three maps
- which maps preserve their operations?

$$
\begin{gather*}
\phi:(\mathbb Z,+)\to(\mathbb Z,+),\quad\phi(x)=3x \\
\phi(x+y)=3(x+y)=3x+3y=\phi(x)+\phi(y)
\implies\phi\text{ homomorphism} \\
\\
\psi:(\mathbb R,+)\to(\mathbb R_{>0},\times),\quad\psi(x)=2^x \\
\psi(x+y)=2^{x+y}=2^x2^y=\psi(x)\psi(y)
\implies\psi\text{ homomorphism} \\
\\
f:(\mathbb Z,+)\to(\mathbb Z,+),\quad f(x)=x+1 \\
f(0)=1\ne0\implies f\text{ not a homomorphism}
\end{gather*}
$$

#### A map between residue-class groups
- check $\phi:\mathbb Z_{12}\to\mathbb Z_8$, $\phi([x]_{12})=[2x]_8$, and find its kernel and image.

$$
\begin{gather*}
x'=x+12r\implies2x'-2x=24r\equiv0\pmod8
\quad\text{(well-defined)} \\
\phi([x+y]_{12})=[2x+2y]_8=\phi([x]_{12})+\phi([y]_{12}) \\
\\
\phi([x]_{12})=[0]_8\iff8\mid2x\iff4\mid x \\
\ker\phi=\{[0]_{12},[4]_{12},[8]_{12}\},\qquad
\operatorname{im}\phi=\{[0]_8,[2]_8,[4]_8,[6]_8\} \\
\\
12=3\cdot4,\qquad\mathbb Z_{12}/\ker\phi\cong\operatorname{im}\phi
\end{gather*}
$$

#### Power map on a cyclic group
- find the kernel and image of $\phi:G\to G$, $\phi(x)=x^6$, where $G=\langle g\rangle$ has order $24$.

$$
\begin{gather*}
G\text{ abelian}\implies\phi(xy)=(xy)^6=x^6y^6=\phi(x)\phi(y) \\
\\
\phi(g^k)=g^{6k}=e\iff24\mid6k\iff4\mid k \\
\ker\phi=\langle g^4\rangle=\{e,g^4,g^8,g^{12},g^{16},g^{20}\} \\
\operatorname{im}\phi=\langle g^6\rangle=\{e,g^6,g^{12},g^{18}\} \\
\\
24=6\cdot4,\qquad G/\langle g^4\rangle\cong\langle g^6\rangle
\end{gather*}
$$

#### Reduction and exponentiation
- find the kernel and image of the standard maps from $\mathbb Z$.

$$
\begin{gather*}
\rho:(\mathbb Z,+)\to(\mathbb Z_n,+),\quad\rho(k)=[k]_n,\quad n\ge1 \\
\rho(a+b)=[a+b]_n=\rho(a)+\rho(b) \\
\ker\rho=n\mathbb Z,\quad\operatorname{im}\rho=\mathbb Z_n,
\quad\mathbb Z/n\mathbb Z\cong\mathbb Z_n \\
\\
\eta:(\mathbb Z,+)\to(G,\cdot),\quad\eta(k)=g^k \\
\eta(a+b)=g^{a+b}=\eta(a)\eta(b),\quad\operatorname{im}\eta=\langle g\rangle \\
\ker\eta=\begin{cases}t\mathbb Z&\operatorname{ord}(g)=t<\infty\\\{0\}&\operatorname{ord}(g)=\infty\end{cases}
\end{gather*}
$$

#### Determinant and a finite-image count
- identify the determinant's domain, kernel and image; count an image when $|G|=60$ and $|\ker\phi|=12$.

$$
\begin{gather*}
\det:\mathrm{GL}_n(\mathbb R)\to\mathbb R^*,\quad n\ge1,\qquad
\det(AB)=\det(A)\det(B) \\
\\
\ker(\det)=\mathrm{SL}_n(\mathbb R),\qquad
\det(\operatorname{diag}(r,1,\ldots,1))=r\quad(r\ne0) \\
\operatorname{im}(\det)=\mathbb R^*,\qquad
\mathrm{GL}_n(\mathbb R)/\mathrm{SL}_n(\mathbb R)\cong\mathbb R^* \\
\\
\phi:G\to H,\quad |G|=60,\quad|\ker\phi|=12
\implies|\operatorname{im}\phi|=\frac{60}{12}=5
\end{gather*}
$$
