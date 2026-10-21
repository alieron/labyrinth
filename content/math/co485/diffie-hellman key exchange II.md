---
tags:
  - co485/chapter1
  - math/number_theory
complete: false
prev:
next: /labyrinth/notes/math/co485/square-and-multiply

---
### Concept
#### Diffie-Hellman Key Exchange
- generalized to some [group](/labyrinth/notes/math/~ma2202/groups) $G$

```tikz
\usepackage{tikz}
\usepackage{amsfonts}
\usetikzlibrary{positioning,calc}
\begin{document}
\begin{tikzpicture}
  % Public parameter:
  \node[draw=none,fill=none,align=center] (public) at (0,1) {Public parameter:\\$g, p$};
  
  % Alice
  \node[draw] (Alice) at (-2,0) {Alice}; 
  \draw[thick] (Alice) -- ++(0, -4);
    
  % Calculations of Alice
  \node[draw=none,fill=none,anchor=east] (asecret) at ($(Alice) + (0,-1)$) {Randomly select $a \in \mathbb{Z}$};
  \node[draw=none,fill=none,anchor=east] (Apublic) at ($(Alice) + (0,-2)$) {$A = g^{a}$};
  \node[draw=none,fill=none,anchor=east,align=left] (akey) at ($(Alice) + (0,-3.5)$) {$S = B^a = (g^b)^a$\\ output $CS^{-1} = M$};
    
  % Bob
  \node[draw] (Bob) at (2,0) {Bob}; 
  \draw[thick] (Bob) -- ++(0, -4);
   
  % Calculations of Bob
  \node[draw=none,fill=none,anchor=west] (bsecret) at ($(Bob) + (0,-1)$) {Randomly select $b \in \mathbb{Z}$};
  \node[draw=none,fill=none,anchor=west,align=left] (Bpublic) at ($(Bob) + (0,-2.5)$) {$S = A^b = (g^a)^b$\\ $B = g^{b}$, Embed $m$ in $M$, $C = A^bM$};
   
  % Messages
  \draw[->,thick] ($(Alice)+(0,-2)$) -- ($(Bob)+(0,-2.5)$) node [pos=0.5,above,font=\footnotesize] {A};
  \draw[->,thick] ($(Bob)+(0,-3)$) -- ($(Alice)+(0,-3.5)$) node [pos=0.5,above,font=\footnotesize] {B,C};
    
\end{tikzpicture}
\end{document}
```

Essential properties of group $G$
1. [DLOG](/labyrinth/notes/math/co485/discrete_logarithm) should be hard for the [CDH assumption](/labyrinth/notes/cs/cs2107/diffie-hellman_key_exchange#Computational_Diffie-Hellman(CDH)_assumption) to hold
	- prevent eavesdroppers from recovering $a$ from $A = g^a$
	- that way they cannot compute $S = B^a$

2. elements should have compact bitstring representations
	- they need to be stored and sent over a channel efficiently

3. multiplication and inversion should be efficient
	- naively computing the exponent for large values might be computationally infeasible
	- efficient with [square-and-multiply](/labyrinth/notes/math/co485/square-and-multiply)

4. a large-order element should be available
	- to prevent brute force attacks, $ord(g) \geq 2^{128}$

5. messages must be embedded into $G$
	- or a KEM/DEM construction should avoid direct embedding

> only [multiplicative modular group](/labyrinth/notes/math/co485/multiplicative_modular_group) and [elliptic curve groups](/labyrinth/notes/math/co485/elliptic_curve_groups) work

#### Discrete Log (Definition 2.3.6)

$$
\text{For generator }g\in \mathbb{Z}_{p}^*, \ \operatorname{DLOG}_g(h)\text{ is the unique }x \in \mathbb{Z}_{p-1}\text{ such that }h = g^x
$$
