---
tags:
- gea1000/chapter4
- math/statistics
complete: true
prev: /labyrinth/notes/math/gea1000/ecological_correlation
next: /labyrinth/notes/math/gea1000/confidence_intervals

---
### Summary
$$
\begin{gather*}
P(A\cup B)=P(A) + P(B) - P(A\cap B)\\
\\
P(A|B)=\frac{P(A\cap B)}{P(B)}
\end{gather*}
$$

Mutually exclusive, A and B will never occur together
$$
\begin{gather*}
P(A\cap B) = 0\\
\therefore P(A\cup B)=P(A) + P(B)
\end{gather*}
$$

Independent events, A occurs equally regardless of B or NB
$$
\begin{gather*}
P(A) = P(A|B) = P(A|NB)\\
\therefore P(A\cap B) = P(A) \times P(B)
\end{gather*}
$$

Conditional independence, A and B are conditionally independent given C
$$
P(A\cap B|C) = P(A|C) \times P(B|C)
$$

Sensitivity and Specificity of a test
$$
\begin{align*}
Sensitivity: & \qquad P(+ve|true) \qquad \text{(True Positive)}\\
Specificity: & \qquad P(-ve|false) \qquad \text{(True Negative)}
\end{align*}
$$
### Concept
Base rate/persecutor fallacy
$$
P(A|B)\neq P(B|A)
$$

Conjunction fallacy, assuming that the probability of 2 events occuring together is higher than just 1 occuring
$$
P(A\cap B) \leq P(A) \ or \ P(B)
$$

Law of Total Probability
- related to [binomial theorem](/labyrinth/notes/math/ma1301/binomial_theorem)
$$
\begin{align*}
P(A) & = P(A|B_{1})\times P(B_{1}) + \dots + P(A|B_{n})\times P(B_{n}) \\
& = \sum_{i=1}^{n}P(A|B_{i})\times P(B_{i})  \\
\\
& = P(A\cap B) + P(A\cap NB)
\end{align*}
$$
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}[row sep=tiny, column sep=huge]
& & A \\
& B \ar[ur, "P(A|B)"] \ar[dr, "P(NA|B)" below left] & \\
& & NA \\
\ar[uur, "P(B)"] \ar[ddr, "P(NB)" below left] & &\\
& & A \\
& NB \ar[ur, "P(A|NB)"] \ar[dr, "P(NA|NB)" below left] & \\
& & NA \\
\end{tikzcd}
\end{document}
```

Probability experiment, e.g. fair dice
- repeatable
- precise set of outcomes
### Application
Sensitivity and Specifivity of a test
$$
\begin{gather*}
\begin{array}{c | c | c | c }
& Sick & Not \ Sick & total \\
\hline
+ve & 195 & 1 & 196 \\
\hline 
-ve & 5 & 199 & 204 \\
\hline
total & 200 & 200 & 400
\end{array} \\
\\
Sensitivity:  \qquad P(+ve|Sick) = \frac{195}{200}\\
Specificity:  \qquad P(-ve|Not\ Sick) = \frac{199}{200}
\end{gather*}
$$