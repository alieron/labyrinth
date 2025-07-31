---
tags:
- cs1231s/chapter1
- math/logic
complete: true
---
### Summary
Modus ponens ^c19fcd
$$
\begin{align*}
& p\to q \\
& p \\
\hline
\bullet \ &q
\end{align*}
$$

| $p$ | $q$ | Premise 1:$p \to q$ | Premise 2:$p$ | Conclusion:$q$ |
| --- | --- | ------------------- | ------------- | -------------- |
| T   | T   | ==T==               | ==T==         | ==T==          |
| T   | F   | F                   | T             |                |
| F   | T   | T                   | F             |                |
| F   | F   | T                   | F             |                |

Modus tollens ^84d8f9
$$
\begin{align*}
& p\to q \\
& \sim q \\
\hline
\bullet \ & \sim p
\end{align*}
$$

| $p$ | $q$ | Premise 1:$p \to q$ | Premise 2:$\sim q$ | Conclusion:$\sim p$ |
| --- | --- | ------------------- | ------------------ | ------------------- |
| T   | T   | T                   | F                  |                     |
| T   | F   | F                   | T                  |                     |
| F   | T   | T                   | F                  |                     |
| F   | F   | ==T==                   | ==T==                  | ==T==                   |

Generalisation
Either or
$$
\begin{align*}
\begin{split}
& p \\
\hline
\bullet \ & p \lor q
\end{split} \quad or \quad
\begin{split}
& q \\
\hline
\bullet \ & p \lor q
\end{split}
\end{align*}
$$

| $p$ | $q$ | Premise:$p$ | Conclusion:$p\lor q$ |
| --- | --- | ----------- | -------------------- |
| T   | T   | ==T==       | ==T==                    |
| T   | F   | ==T==           | ==T==                    |
| F   | T   | F           |                      |
| F   | F   | F           |                      |

Specialisation
Discard extra info
$$
\begin{align*}
\begin{split}
& p \land q \\
\hline
\bullet \ & p
\end{split} \quad or \quad
\begin{split}
& p\land q \\
\hline
\bullet \ & q
\end{split}
\end{align*}
$$

| $p$ | $q$ | Premise:$p \land q$ | Conclusion:$p$ |
| --- | --- | ------------------- | -------------- |
| T   | T   | ==T==               | ==T==          |
| T   | F   | F                   |                |
| F   | T   | F                   |                |
| F   | F   | F                   |                |

[Conjunction](/labyrinth/notes/math/cs1231s/propositions#^024351)
If both premises are true, their conjuction is true
$$
\begin{align*}
& p \\
& q \\
\hline
\bullet \ & p \land q
\end{align*}
$$

| $p$   | $q$   | Conclusion:$p\land q$ |
| ----- | ----- | --------------------- |
| ==T== | ==T== | ==T==                 |
| T     | F     |                       |
| F     | T     |                       |
| F     | F     |                       |

Elimination
Ruling out one possibility
$$
\begin{align*}
\begin{split}
& p \lor q \\
& \sim q \\
\hline
\bullet \ & p
\end{split} \quad or \quad
\begin{split}
& p \lor q \\
& \sim p \\
\hline
\bullet \ & q
\end{split}
\end{align*}
$$

| $p$ | $q$ | Premise 1:$p \lor q$ | Premise 2:$\sim q$ | Conclusion:$p$ |
| --- | --- | -------------------- | ------------------ | -------------- |
| T   | T   | T                    | F                  |                |
| T   | F   | ==T==                    | ==T==                  | ==T==              |
| F   | T   | T                    | F                  |                |
| F   | F   | F                    | T                  |                |

Transitivity
When $p\to q$ and $q\to r$, then $p\to r$
$$
\begin{align*}
& p\to q \\
& q\to r \\
\hline
\bullet \ &p\to r
\end{align*}
$$

| $p$ | $q$ | $r$ | Premise 1:$p \to q$ | Premise 2:$q\to r$ | Conclusion:$p\to r$ |
| --- | --- | --- | ------------------- | ------------------ | ------------------- |
| T   | T   | T   | ==T==               | ==T==              | ==T==               |
| T   | T   | F   | T                   | F                  |                     |
| T   | F   | T   | F                   | T                  |                     |
| T   | F   | F   | F                   | T                  |                     |
| F   | T   | T   | ==T==               | ==T==              | ==T==               |
| F   | T   | F   | T                   | F                  |                     |
| F   | F   | T   | ==T==                   | ==T==                  | ==T==                   |
| F   | F   | F   | ==T==                   | ==T==                  | ==T==                   |

Proof by division into cases
If at least one of the cases is true, and all cases leads to a certain conclusion, then the conclusion is also true
$$
\begin{align*}
& p\lor q \\
& p\to r \\
& q\to r \\
\hline
\bullet \ & r
\end{align*}
$$

| $p$ | $q$ | $r$ | Premise 1:$p\lor q$ | Premise 2:$p \to r$ | Premise 3:$q\to r$ | Conclusion:$r$ |
| --- | --- | --- | ------------------- | ------------------- | ------------------ | -------------- |
| T   | T   | T   | ==T==               | ==T==               | ==T==              | ==T==          |
| T   | T   | F   | T                   | F                   | F                  |                |
| T   | F   | T   | ==T==               | ==T==               | ==T==              | ==T==          |
| T   | F   | F   | T                   | F                   | T                  |                |
| F   | T   | T   | ==T==               | ==T==               | ==T==              | ==T==          |
| F   | T   | F   | T                   | T                   | F                  |                |
| F   | F   | T   | F                   | T                   | T                  |                |
| F   | F   | F   | F                   | T                   | T                  |                |

Contradiction rule
If not $p$ implies false, then $p$ must be true
$$
\begin{align*}
& \sim p\to {\color{orangered} \mathbf{c}}  \\
\hline
\bullet \ & p
\end{align*}
$$

| $p$ | Premise:$\sim p\to {\color{orangered} \mathbf{c}}$ | Conclusion:$p$ |
| --- | -------------------------------------------------- | -------------- |
| T   | ==T==                                                  | ==T==              |
| F   | F                                                  |                |
