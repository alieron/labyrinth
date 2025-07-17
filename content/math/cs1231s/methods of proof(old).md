---
tags:
- cs1231s/chapter0
- math/number_theory
complete: false
index: null
---
[[#|Previous]]   [[#|Next]]

### Summary
without loss of generality -> WLOG

- Concise -> No irrelevant details
- Polished -> Final draft
- Argument -> Follow a logical progression

### Concept
Types of proofs
- Direct proof
- Proof by construction
- Disproof by counter-example
- Proof by exhaustion
- Proof by contradiction
- Proof by contraposition
- Proof by mathematical induction
- Combinatorial proof

### Application
Direct proof
[Definition of odd and even integers](/labyrinth/notes/math/cs1231s/properties_of_integers#^ec72bc)
$$
\text{Prove that the product of two consequtive odd numbers is always odd.}
$$
$$
\begin{flalign*}
&\text{1. Let } a \text{ and } b \text{ be the two consqeutive odd numbers.} \\
&\quad \text{1.1 WLOG, assume that }a<b\text{, hence }b=a+2. \\
&\quad \text{1.2 Now, }a=2k+1\text{ for some integer }k\text{ (by definition of odd numbers)} \\
&\quad \text{1.3 Similarly, }b=a+2=2k+3. \\
&\quad \text{1.4 Therefore, }ab=(2k+1)(2k+3)\\
&\qquad =4k^2+8k+3=4k^2+8k+2+1\\
&\qquad =2(2k^2+4k+1)+1\text{ (by basic algebra)}\\
&\quad \text{1.5 Let, }m=(2k^2+4k+1)\text{ which is an integer} \\
&\qquad \text{(by closure of integers under }\times\text{ and +)}\\
&\quad \text{1.6 Then }ab=2m+1\text{, which is odd. (by definition of odd numbers)}\\
&\text{2. Therefore, the product of two consequtive odd numbers is always odd.}
\end{flalign*}
$$

Proof by construction, statment has $\exists$
$$
\text{Prove that }\exists x\in \mathbb{Z} \ \mathrm{s.t.}\ x>2 \text{ and } x^2-5x+6>0
$$
$$
\begin{flalign*}
&\text{1. Let }x=17 \\
&\quad \text{1.1 Note that }17\in \mathbb{Z}\text{ and }17>2 \\
&\quad \text{1.2 And, } x^2-5x+6=17^2-5(17)+6=210>0 \\
&\text{2. Therefore, the statement is true}
\end{flalign*}
$$

Disproof by counter-example, one is enough to prove that the statement is not always true
[Different base rule](/labyrinth/notes/math/math_fundementals/rules_of_indices)
$$
\text{Prove that the product of two irrational numbers is always irrational.}
$$
$$
\begin{flalign*}
&\text{1. Let the two irrational numbers be }\sqrt{ 2 }\text{ and }\sqrt{ 8 }\\
&\quad\text{1.1 Then }\sqrt{ 2 }\times \sqrt{ 8 }=\sqrt{ 2\times8 }=\sqrt{ 16 }=4\text{ (by basic algebra)} \\
&\text{2. Therefore, the statement is not true.}
\end{flalign*}
$$

Proof by exhaustion, small/finite number of possible cases
[Definition of divisibility](/labyrinth/notes/math/cs1231s/properties_of_integers#^e55bde)
$$
\text{Prove that }6a\text{ is not divisible by 5 for an integer }a\text{ between 1 and 4 inclusive.}
$$
$$
\begin{flalign*}
&\text{1. Let }a\text{ be an integer between 1 and 4 inclusive.} \\
&\quad\text{1.1 If }a=1\text{, then }6a=6\text{ but }5\nmid 6 \\
&\quad\text{1.2 If }a=2\text{, then }6a=12\text{ but }5\nmid 12 \\
&\quad\text{1.3 If }a=3\text{, then }6a=18\text{ but }5\nmid 18 \\
&\quad\text{1.4 If }a=4\text{, then }6a=24\text{ but }5\nmid 24 \\
&\text{2. Therefore, }6a\text{ is not divisible by 5 for an integer }a\text{ between 1 and 4 inclusive.} \\
\end{flalign*}
$$

Proof by deduction, general solution/infinite number of cases
$$
\text{Prove that the difference of two consequtive squares is always odd.}
$$
$$
\begin{flalign*}
&\text{1. Let the two consqeutive numbers be }n\text{ and }n+1 \\
&\quad\text{1.1 The difference between the two squares would be, } \\
&\qquad (n+1)^2-n^2=n^2+2n+1-n^2=2n-1\text{ (by basic algebra)}\\
&\quad\text{1.2 }2n+1\text{ is odd. (by definition of odd numbers)} \\
&\text{2. Therefore, the difference of two consequtive squares is odd.}
\end{flalign*}
$$

Proof by contradiction, form/definition is absent, assume the opposite is true
[Definition of rational and irrational numbers](/labyrinth/notes/math/cs1231s/special_sets#^9f1e5d)
[Definition of fractions in its lowest term](/labyrinth/notes/math/cs1231s/properties_of_integers#^7979a0)
$$
\text{Prove the Theorem 4.7.1: }\sqrt{ 2 }\text{ is irrational.}
$$
$$
\begin{flalign*}
&\text{1. Suppose not, that is, }\sqrt{ 2 }\text{ is rational.} \\
&\quad\text{1.1 Then }\exists a,b\in \mathbb{Z},b\neq0 \ \mathrm{s.t.}\ \sqrt{ 2 }=\frac{a}{b}\text{ (by definition of rational numbers)} \\
&\quad\text{1.2 Convert } \frac{a}{b}\text{ to its lowest term } \frac{m}{n} \\
&\quad\text{1.3 }2n^2=m^2\text{ (by basic algebra)} \\
&\quad\text{1.4 Hence }m^2\text{ is even. (by definition of even numbers, since }n^2\text{ is an integer by closure)} \\
&\quad\text{1.5 Hence }m\text{ is even. (by Proposition 4.6.4: }\forall n\in \mathbb{Z}\text{, if }n^2\text{ is even, }n\text{ is even)} \\
&\quad\text{1.6 Let }m=2k\text{, substituting into 1.3: }4k^2=2n^2, n^2 = 2k^2 \\
&\quad\text{1.7 Hence }n^2\text{ is even. (by definition of even numbers)} \\
&\quad\text{1.8 Hence }n\text{ is even. (by Proposition 4.6.4)} \\
&\quad\text{1.9 So both }m\text{ and }n\text{ are even, which contradicts that } \frac{m}{n}\text{ is in its lowest term.} \\
&\text{2. Therefore, the assumption that }\sqrt{ 2 }\text{ is rational is false.} \\
&\text{3. Hence }\sqrt{ 2 }\text{ is irrational.} \\
\end{flalign*}
$$



