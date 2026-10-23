---
tags:
  - math/group_theory
  - to_review
complete: false
prev: /labyrinth/notes/math/~ma2202/group_homomorphisms
next: /labyrinth/notes/math/~ma2202/quotien_groups

---
### Summary
Isomorphism criterion
$$
\begin{gather*}
G\cong H\iff\exists\text{ bijective homomorphism }\phi:G\to H
\end{gather*}
$$

For an isomorphism $\phi:G\to H$:
$$
\begin{gather*}
\operatorname{ord}(\phi(g))=\operatorname{ord}(g),\quad |G|=|H| \\
G\text{ abelian}\iff H\text{ abelian},\qquad
G\text{ cyclic}\iff H\text{ cyclic}
\end{gather*}
$$

Equal-size homomorphisms; independently, let $\phi:G\to H$ be any homomorphism between finite groups of equal order:
$$
\begin{gather*}
|G|=|H|<\infty:\quad
\phi\text{ injective}\iff\phi\text{ surjective}\iff\phi\text{ isomorphism}
\quad(\phi\text{ a homomorphism})
\end{gather*}
$$

Classification of cyclic groups
$$
\begin{gather*}
G=\langle g\rangle:\quad
G\cong\begin{cases}\mathbb Z_n&|G|=n<\infty\\\mathbb Z&|G|=\infty\end{cases}
\end{gather*}
$$

### Concept
#### Inverse map and isomorphism invariants
- a bijective [homomorphism](/labyrinth/notes/math/~ma2202/group_homomorphisms) has a homomorphic inverse.

$$
\begin{gather*}
\phi:G\to H\text{ isomorphism},\quad x=\phi(a),\ y=\phi(b) \\
\\
\phi^{-1}(xy)=\phi^{-1}(\phi(ab))=ab=\phi^{-1}(x)\phi^{-1}(y)
\end{gather*}
$$

Isomorphism invariants
- compare group order, element orders, commutativity, cyclicity and [subgroup structure](/labyrinth/notes/math/~ma2202/subgroups).
- a differing invariant rules out isomorphism; matching invariants alone need not prove it.

For an isomorphism $\phi:G\to H$
$$
\begin{gather*}
m\in\mathbb Z:\quad
\phi(g)^m=e_H\iff\phi(g^m)=\phi(e_G)\iff g^m=e_G \\
\therefore\quad\operatorname{ord}(\phi(g))=\operatorname{ord}(g)
\quad\text{(including infinite order)}
\end{gather*}
$$

$$
\begin{gather*}
xy=\phi(a)\phi(b)=\phi(ab)=\phi(ba)=yx\quad\text{if }G\text{ abelian} \\
\phi(\langle g\rangle)=\langle\phi(g)\rangle
\end{gather*}
$$

$$
\begin{gather*}
A\le G\longmapsto\phi(A)\le H,\qquad
B\le H\longmapsto\phi^{-1}(B)\le G \\
A\le C\iff\phi(A)\le\phi(C),\qquad A\cong\phi(A)
\end{gather*}
$$

#### Classification of cyclic groups
- finite [cyclic groups](/labyrinth/notes/math/~ma2202/cyclic_groups) are classified by their order; all infinite cyclic groups are isomorphic.

$$
\begin{gather*}
G=\langle g\rangle,\quad |G|=n<\infty,\qquad
\phi:\mathbb Z_n\to G,\quad\phi([k]_n)=g^k \\
\\
[a]_n=[b]_n\iff g^a=g^b
\quad\text{(well-defined and injective)} \\
\phi([a]_n+[b]_n)=g^{a+b}=g^ag^b,\qquad
\operatorname{im}\phi=G \\
\therefore\quad\mathbb Z_n\cong G \\
\\
|G|=\infty:\quad\psi:\mathbb Z\to G,\quad\psi(k)=g^k \\
g^a=g^b\iff a=b,\quad\psi(a+b)=\psi(a)\psi(b),\quad\operatorname{im}\psi=G \\
\therefore\quad\mathbb Z\cong G
\end{gather*}
$$

### Application
#### Construct an isomorphism from $\mathbb Z_6$ to $\mathbb Z_2\times\mathbb Z_3$
$$
\begin{gather*}
\phi:\mathbb Z_6\to\mathbb Z_2\times\mathbb Z_3,\qquad
\phi([x]_6)=([x]_2,[x]_3) \\
\\
6\mid(x-y)\implies2\mid(x-y),\ 3\mid(x-y)
\quad\text{(well-defined)} \\
\phi([x+y]_6)=([x+y]_2,[x+y]_3)=\phi([x]_6)+\phi([y]_6) \\
\\
\phi([x]_6)=(0,0)\iff2\mid x\text{ and }3\mid x\iff6\mid x \\
\ker\phi=\{[0]_6\},\quad6=2\cdot3
\implies\phi\text{ bijective}\implies\mathbb Z_6\cong\mathbb Z_2\times\mathbb Z_3
\end{gather*}
$$

#### Distinguish groups of the same size
- are $\mathbb Z_8$ and $\mathbb Z_4\times\mathbb Z_2$ isomorphic?

$$
\begin{gather*}
\operatorname{ord}([1]_8)=8 \\
\\
\forall(a,b)\in\mathbb Z_4\times\mathbb Z_2,\quad4(a,b)=(0,0)
\implies\operatorname{ord}((a,b))\mid4 \\
\therefore\quad\mathbb Z_8\not\cong\mathbb Z_4\times\mathbb Z_2 \\
\\
\operatorname{ord}([1]_4)=4,\quad
2(a,b)=(0,0)\text{ in }\mathbb Z_2\times\mathbb Z_2
\implies\mathbb Z_4\not\cong\mathbb Z_2\times\mathbb Z_2
\end{gather*}
$$

#### Classify the units modulo 10
- is $\mathbb Z_{10}^*$ isomorphic to $\mathbb Z_4$?

$$
\begin{gather*}
\mathbb Z_{10}^*=\{1,3,7,9\},\qquad
3^0,3^1,3^2,3^3,3^4\equiv1,3,9,7,1\pmod{10} \\
\\
\operatorname{ord}(3)=4,\qquad\mathbb Z_{10}^*=\langle3\rangle \\
\phi:\mathbb Z_4\to\mathbb Z_{10}^*,\qquad\phi([k]_4)=[3^k]_{10} \\
\therefore\quad\mathbb Z_{10}^*\cong\mathbb Z_4
\end{gather*}
$$

#### All isomorphisms between cyclic groups of order 15
- let $G=\langle g\rangle$ and $H=\langle h\rangle$, both of order $15$.

$$
\begin{gather*}
\phi(g)=h^k\implies\phi(g^a)=h^{ka},\qquad
\phi_k:G\to H,\quad\phi_k(g^a)=h^{ka} \\
\\
a\equiv b\pmod{15}\implies ka\equiv kb\pmod{15}
\quad\text{(well-defined)} \\
\phi_k(g^ag^b)=h^{k(a+b)}=\phi_k(g^a)\phi_k(g^b) \\
\\
\phi_k\text{ isomorphism}\iff h^k\text{ generates }H\iff\gcd(k,15)=1 \\
\therefore\quad k\in\{1,2,4,7,8,11,13,14\}\pmod{15},\qquad
\#\text{isomorphisms}=\varphi(15)=8
\end{gather*}
$$

#### An equal-size homomorphism with trivial kernel
- suppose $\phi:G\to H$ is a homomorphism, $|G|=|H|=35$ and $\ker\phi=\{e_G\}$.

$$
\begin{gather*}
\ker\phi=\{e_G\}\implies\phi\text{ injective} \\
\\
|\operatorname{im}\phi|=|G|=35=|H|\implies\operatorname{im}\phi=H \\
\therefore\quad\phi\text{ isomorphism},\qquad G\cong H
\end{gather*}
$$
