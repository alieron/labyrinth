---
tags:
  - st2334/chapter1
  - math/set_theory
complete: true
prev: /labyrinth/notes/math/st2334/events
next: /labyrinth/notes/math/st2334/probability

---
Succeeds: [counting](/labyrinth/notes/math/cs1231s/counting)
### Summary
Counting methods
![[counting_methods.png|800]]
### Concept
Multiplication principle
- counting the number of outcomes from experiments performed sequentially

Addition principle
- counting the number of independent outcome types

Permutation ^efad71
- number of ways to arrange $r$ objects out of $n$

$$
P^n_{r}=\frac{n!}{(n-r)!}
$$

Combination
- number of ways to choose $r$ objects out of $n$

$$
\binom{n}{r}=\frac{n!}{r!(n-r)!}
$$

### Application
Forming odd 3-digit numbers without repetition
$$
\begin{gather*}
\text{Given:} & 2,3,4,5,6 \\
\\
\text{Consider:} & eeo, eoo, oeo &\text{(only max 2 odd digits)} \\
\\
\text{Counting:} & 
\begin{gathered}
eeo = \binom{3}{1}\times \binom{2}{1}\times \binom{2}{1}=3\times 2\times 2 = 12 \\
+ \\
eoo = \binom{3}{1}\times \binom{2}{1}\times \binom{1}{1}=3\times 2\times 1 = 6 \\
+ \\
oeo = \binom{2}{1}\times \binom{3}{1}\times \binom{1}{1}=2\times 3\times 1 = 6 \\
= \\
24
\end{gathered}
\end{gather*}
$$
> multiply within a group of outcomes, add between groups

Divide into smaller problems
- How many ways can 6 persons line up to get on a bus, if 3 persons insist on following one other?

$$
\begin{gather*}
\text{People:} & a,b,c,d,e,f \\
\\
\text{3 together in a group:} & G = \{ a,b,c \} \\
\\
\text{4 entities to be lined up:} & G,d,e,f \\
\\
& 4! \text{ ways to arrange the 4 entities} \\
& 3! \text{ ways to arrange the 3 members of the group} \\
\\
& \therefore \text{total}=4!\times 3! = 144
\end{gather*}
$$

- Consider the digits 0,1,2,3,4,5 and 6. If each digit can be used at most once, how many 3-digit numbers, which are equal to or greater than 301, can be formed

$$
\begin{gather*}
\text{4,5 or 6 in the hundreds place:} & \binom{3}{1}\times \binom{6}{1}\times \binom{5}{1} = 3\times 6\times 5=90 \\
&+ \\
\text{3 in hundreds, not 0 in tens:} & \binom{1}{1}\times \binom{5}{1}\times \binom{5}{1} = 1\times 5\times 5 = 25 \\
&+ \\
\text{3 in hundreds, 0 in tens:} & \binom{1}{1}\times \binom{1}{1}\times \binom{5}{1} = 1\times 1\times 5 = 5 \\
& = \\
& 120
\end{gather*}
$$

- How many ways can 4 men and 3 women sit in a row if no two women are allowed to sit together? 

$$
\begin{gather*}
& \_\ m\ \_\ m\ \_\ m\ \_\ m\ \_ \\
\\
\text{ways to arrange 4 men} & 4! \\
& \times \\
\text{ways choose 3 slots out of 5} & \binom{5}{3} \\
& \times \\
\text{ways to arrange 3 women in the 3 slots} & 3! \\
& = \\
& 1440
\end{gather*}
$$

Two dice(unordered)
$$
\begin{gather*}
\text{2 different values:} & \binom{6}{2} = 15\\
&+ \\
\text{both the same:} & \binom{6}{1}\times \binom{1}{1} = 6 \\
& = \\
& 21
\end{gather*}
$$