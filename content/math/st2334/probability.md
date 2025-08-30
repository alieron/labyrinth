---
tags:
  - st2334/chapter1
  - math/probability
complete: false
prev: /labyrinth/notes/math/st2334/counting_II
next: /labyrinth/notes/math/st2334/conditional_probability

---
### Summary
Axioms
$$
\begin{gather*}
0\leq P(A) \leq 1 \\
\\
P(S) = 1 \\
\\
P(A\cup B) = P(A) + P(B)
\end{gather*}
$$

Properties
$$
\begin{gather*}
P(\varnothing) = 0 \\
\\
P(A') = 1 - P(A) \\
\\
P(A) = P(A \cap B) + P(A \cap B') \\
\\
P(A\cup B) = P(A) + P(B) - P(A\cap B) \\
\\
A \subset B \to P(A) \leq P(B)
\end{gather*}
$$

Independence
$$
A \perp B \iff P(A\cap B) = P(A)P(B)
$$
### Concept
Relative frequency
$$
\begin{gather*}
n\text{ repetitions of an experiment} \\
n_{A}\text{ is the number of times event }A\text{ occurs} \\
\\
f_{A}=\frac{n_{A}}{n} \\
\\
n\to \infty, \ f_{A} \to P(A)
\end{gather*}
$$
> if we perform the experiment infinitely many times, then the **relative frequency** will approach the **probability**
### Application
Monty hall problem
$$

$$

[Counting](/labyrinth/notes/math/st2334/counting_II) related
- A class contains 7 boys and 8 girls. The teacher selects 3 of the children at random and without replacement. Calculate the probability that the number of boys selected exceeds the number of girls selected.

$$
\begin{gather*}
\text{Outcomes where }B>G: & bbb, bbg \\
\\
\text{Counting:} & 
\begin{gathered}
bbb = \binom{7}{3}\times \binom{8}{0} = 35\times 1 = 35 \\
+ \\
bbg = \binom{7}{2}\times \binom{8}{1} = 21\times 8 = 168 \\
= \\
203
\end{gathered} \\
\\
\text{Total outcomes:} & \binom{15}{3} = 455 \\
\\
\text{Probability:} & P(B>G) = \frac{203}{455}
\end{gather*}
$$