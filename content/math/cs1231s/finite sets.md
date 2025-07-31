---
tags:
- cs1231s/chapter3
- math/set_theory
complete: false
prev: /labyrinth/notes/math/cs1231s/infinite_sets
next: /labyrinth/notes/math/cs1231s/permutations_&_combinations
---
   
### Summary
$$
\begin{align*}

\end{align*}
$$
### Concept
Addition rule
$$
A\text{ is finite}\land B\text{ is finite}\land A\cap B=\varnothing \to A\cup B\text{ is finite}\land| A\cup B |=| A | +| B |  
$$

Multiplication rule
$$
|A\times B| = |A||B|
$$
> relavant to [counting cartesian products](/labyrinth/notes/math/cs1231s/infinite_sets#^e8a882)

General addition/subtraction rule (Lemma 3.9)
$$
\begin{align*}
&\text{for a finite set }Y \\
\\
& \text{Claims: } \begin{split}
&(a) \ X\text{ is finite} \to X\cup Y\text{ is finite}\\
&(b) \ X\subseteq Y\to | Y-X | =| Y | -| X |
\end{split} \\
\\
&\begin{aligned}
X\cap(Y-X)& =X\cap(Y\cap \overline{X})\\
& =Y\cap X\cap \overline{X} \\
& = Y\cap \varnothing = \varnothing 
\\
X\cup(Y-X)&=X\cup(Y\cap \overline{X})\\
&=(X\cup Y)\cap(X\cup \overline{X}) \\
& = (X\cup Y)\cap U = (X\cup Y)
\end{aligned} \\
\\
&(a) \ \text{Suppose }X\text{ is finite} \\
&\quad\begin{aligned}
&\text{then }Y-X\subseteq Y \text{ is finite} \\
&X\cap(Y-X)=\varnothing \\
&\text{so }X\cup(Y-X)\text{ is finite} &\text{(Addition Rule)}\\
&\therefore X\cup Y\text{ is finite}
\end{aligned} \\
\\
&(b) \ \text{Suppose }X\subseteq Y \\
&\quad\begin{aligned}
&\text{then }X\cup(Y-X)=Y \\
&|X\cup(Y-X)| = | X |+| Y-X |=| Y | &\text{(Addition Rule)} \\
&\therefore | Y-X |=| Y |-| X |
\end{aligned} \\
&&\square
\end{align*}
$$

Finite union of finite sets (Theorem 3.10)
$$

$$

Inclusion/exclusion rule (Theorem 3.11)
$$

$$

Extension of multiplication rule (Theorem 3.12)
$$

$$
> applies only to a finite $n$
### Application
$$

$$

### Extra

