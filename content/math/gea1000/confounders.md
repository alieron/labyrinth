---
tags:
- gea1000/chapter2
- math/statistics
complete: true
index: null
---
[Previous](/labyrinth/notes/math/gea1000/rates)   [Next](/labyrinth/notes/math/gea1000/univariate_analysis)
### Summary
Third variable C associated with both A and B, A may not actually be associated with B
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}[column sep=small]
& C \arrow[dl, leftrightarrow] \arrow[dr, leftrightarrow] & \\
A \arrow[rr, leftrightarrow, "/" marking] & & B
\end{tikzcd}
\end{document}
```
$$
\begin{gather*}
rate(A|C)\neq rate(A|NC) \\
rate(B|C)\neq rate(B|NC)
\end{gather*}
$$
### Concept
Reduced by random sampling(distributing characteristics that may be confounders evenly between both groups) or slicing(in obervational studies)

Simpson's Paradox
- Trend/association between 2 variables appears in more than half of the sub-groups, but disappears or reverses when the groups are combined
- Proves the existence of a counfounder