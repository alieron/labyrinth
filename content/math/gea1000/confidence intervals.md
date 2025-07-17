---
tags:
- gea1000/chapter4
- math/statistics
complete: true
index: null
---
[Previous](/labyrinth/notes/math/gea1000/statistical_probability)   [Next](/labyrinth/notes/math/gea1000/hypothesis_tests)

### Summary
Confidence intervals(CI)
- % confidence that the population parameter lies within the interval
- % of randomly chosen samples(with the same sample size) that would have the population parameter within its CI

Confidence != [Probability](/labyrinth/notes/math/gea1000/statistical_probability)

CI for population parameter
$$
\begin{gather*}
p \pm z^*\sqrt{ \frac{p(1-p)}{n} } \\
\\
common \ z^* \ values\\
\begin{array}{| c | c |}
\hline
90\% & 1.645 \\
\hline
95\% & 1.960 \\
\hline
99\% & 2.576 \\
\hline
\end{array}
\end{gather*}
$$

CI for population mean
$$
\bar{x}\pm t^*\frac{SD_{x}}{\sqrt{ n }}
$$

### Concept
Statistical inference
- check if a sample statistic is relevant to the target population
- census is not always possible
$$
sample \ statistic = population \ parameter +bias + random \ error
$$