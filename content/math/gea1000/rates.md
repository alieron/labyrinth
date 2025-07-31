---
tags:
- gea1000/chapter2
- math/statistics
complete: true
prev: /labyrinth/notes/math/gea1000/design_of_experiments
next: /labyrinth/notes/math/gea1000/confounders

---
### Summary
$$
\begin{gather*}
rate(A|B) = \frac{rate(A \& B)}{rate(B)} \\
\\
rate(A) + rate(NA) = 1
\end{gather*}
$$

Independent/no association
$$
rate(A|B) = rate(A|NB)
$$

Positive association, rate of A occuring in B is greater than the rate of A occuring in not B
$$
\begin{gather*}
rate(A|B) > rate(A|NB) \\
rate(B|A) > rate(B|NA) \\
rate(NA|NB) > rate(NA|B) \\
rate(NB|NA) > rate(NB|A) \\
\end{gather*}
$$

Negative association, rate of A occuring in B is lower than the rate of A occuring in not B
$$
rate(A|B) < rate(A|NB)
$$
### Concept
Basic Rules
$$
\begin{align*}
1. \quad & rate(A|B) = rate(A|NB) = rate(A) &\qquad \text{(Independance)}\\
2. \quad & rate(A) \ \text{is in between} \ rate(A|B) \ \& \ rate(A|NB)\\
3. \quad & if \ rate(B) = 0.5, \ rate(A) \ \text{is exactly in between} \ rate(A|B) \ \& \ rate(A|NB)\\
4. \quad & if \ rate(B) \approx 1, \ rate(A) \ \text{is closer to} \ rate(A|B) &\qquad \text{(Majority)}\\
\end{align*}
$$
```tikz
\usepackage{tikz}
\begin{document}
  \begin{tikzpicture}
    % draw horizontal line   
    \draw (0,0) -- (8,0);

    % draw vertical lines
    \foreach \x in {0,4,8}
      \draw (\x cm,3pt) -- (\x cm,-3pt);

    % draw nodes
    \draw (0,0) node[below=3pt] {$ $} node[above=3pt] {$ rate(A|B) $};
    \draw (4,0) node[below=3pt] {$ rate(B) = 0.5 $} node[above=3pt] {$ rate(A) $};
    \draw (8,0) node[below=3pt] {$ $} node[above=3pt] {$ rate(A|NB) $};
  \end{tikzpicture}
\end{document}
```
```tikz
\usepackage{tikz}
\begin{document}
  \begin{tikzpicture}
    % draw horizontal line   
    \draw (0,0) -- (8,0);

    % draw vertical lines
    \foreach \x in {0,2,8}
      \draw (\x cm,3pt) -- (\x cm,-3pt);

    % draw nodes
    \draw (0,0) node[below=3pt] {$ $} node[above=3pt] {$ rate(A|B) $};
    \draw (2,0) node[below=3pt] {$ rate(B) \approx 1 $} node[above=3pt] {$ rate(A) $};
    \draw (8,0) node[below=3pt] {$ $} node[above=3pt] {$ rate(A|NB) $};
  \end{tikzpicture}
\end{document}
```

Symmetry Rule
$$
rate(A|B) > rate(A|NB) \iff rate(B|A) > rate(B|NA)
$$
### Application
$$
\begin{gather*}
\begin{array}{c | c | c | c }
& A & NA & total \\
\hline
B & 100 & 50 & 150 \\
\hline
NB & 70 & 180 & 250 \\
\hline
total & 170 & 230 & 400
\end{array} 
\\ \\
rate(A) = \frac{170}{400} \\
rate(A|B) = \frac{100}{150} \\
rate(A\&B) = \frac{100}{400}
\end{gather*}
$$
### Extra
$rate(A|B)$ -> proportion of B with A / proportion with A among B
$rate(A\&B)$ -> proportion with A and B among total

> $NA$ represents $\bar{A}$ from conventional [set notation](/labyrinth/notes/math/cs1231s/sets#^490492)
> $A\&B$ represents $A\cap B$