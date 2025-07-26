---
tags:
- gea1000/chapter3
- math/statistics
complete: true
prev: /labyrinth/notes/math/gea1000/univariate_analysis
next: /labyrinth/notes/math/gea1000/ecological_correlation
---

   

### Summary
**Graph of y on x**
Correlation != Causation

Magnitude of r, strength/how close the points are to the line of best-fit
$$
\begin{gather*}
|r| \leq 1 \\
0 \leq |r|< 0.3 \to Weak\\
0.3 \leq |r|\leq 0.7 \to Moderate\\
0.7 < |r| \leq 1 \to Strong
\end{gather*}
$$

Line of best-fit, y on x
- Passes through the average
- Can only predict y from known x
- Can only predict within the range of the points
$$
\begin{gather*}
m_{yx} = \frac{SD_{y}}{SD_{x}}r_{yx} \\
\\
r_{yx} = r_{xy}
\end{gather*}
$$

### Concept
Correlation coefficient
$$
r = \frac{1}{n-1}\sum_{i=1}^{n}\left(\frac{x_{i}-\bar{x}}{SD_{x}}\right)\left(\frac{y_{i}-\bar{y}}{SD_{y}}\right)
$$

Standard units
$$
SU_{x}= \frac{x_{i}-\bar{x}}{SD_{x}}, \quad SU_{y}=\frac{y_{i}-\bar{y}}{SD_{y}}
$$

Exponential to linear
$$
\begin{align*}
y & =cb^x \\
\ln y & = \ln cb^x = \ln c+x\ln b \\
\\
plot &\  \ln y \ vs \ x
\end{align*}
$$

###### Note
Always use independent(x) to predict dependent(y)