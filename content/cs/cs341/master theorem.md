---
tags:
  - cs341/chapter1
  - cs/algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/recurrence_relations
next: /labyrinth/notes/cs/cs341/divide_&_conquer

---
### Summary
Master theorem
$$
\begin{gather*}
T(n) = a T\left( \frac{n}{b} \right) + n^c \\
\\
T(n) = \begin{cases}
O(n^c) & c > \log_{b} a , \ b^c > a\\
O(n^c\log n) & c = \log_{b}a , \ b^c = a \\
O(n^{\log_{b}a}) & c < \log_{b}a , \ b^c < a
\end{cases}
\end{gather*}
$$

### Concept
#### Master Theorem
- generalizes the runtime of a class of [recurrence relations](/labyrinth/notes/cs/cs341/recurrence_relations)

$$
T(n) = a T\left( \frac{n}{b} \right) + n^c\qquad\text{where }a,b,c\text{ are constants}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[
    draw,
    rounded corners,
    minimum width=65pt,
    minimum height=27pt,
    align=center,
    inner sep=2pt
]

\begin{document}
\begin{tikzpicture}[thick]

% Root
\node[vertex] at (0,0) (root)
    {$T(n)$\\$n^c$ work};

% Level 1: a distinct subproblems
\node[vertex] at (-4,-2) (a1)
    {$T(n/b)$\\$(n/b)^c$ work};

\node at (0,-2) (adots)
    {$\cdots$};

\node[vertex] at (4,-2) (a2)
    {$T(n/b)$\\$(n/b)^c$ work};

% Level 2: distinct children of the left subtree
\node[vertex] at (-5.5,-4) (b1)
    {$T(n/b^2)$\\$(n/b^2)^c$ work};

\node at (-4,-4) (bdots1)
    {$\cdots$};

\node[vertex] at (-2.5,-4) (b2)
    {$T(n/b^2)$\\$(n/b^2)^c$ work};

% Level 2: distinct children of the right subtree
\node[vertex] at (2.5,-4) (b3)
    {$T(n/b^2)$\\$(n/b^2)^c$ work};

\node at (4,-4) (bdots2)
    {$\cdots$};

\node[vertex] at (5.5,-4) (b4)
    {$T(n/b^2)$\\$(n/b^2)^c$ work};

% Vertical dots
\node at (-5.5,-5.5) (c1) {$\vdots$};
\node at (-2.5,-5.5) (c2) {$\vdots$};
\node at (2.5,-5.5) (c3) {$\vdots$};
\node at (5.5,-5.5) (c4) {$\vdots$};

% Leaf level
\node[vertex] at (-5.5,-7) (l1) {$T(1)$};
\node[vertex] at (-3.5,-7) (l2) {$T(1)$};
\node at (-1.7,-7) (ldots1) {$\cdots$};
\node[vertex] at (0,-7) (l3) {$T(1)$};
\node at (1.7,-7) (ldots2) {$\cdots$};
\node[vertex] at (3.5,-7) (l4) {$T(1)$};
\node[vertex] at (5.5,-7) (l5) {$T(1)$};

% Edges from root
\draw [-,thick] (root) to (a1);
\draw [-,thick] (root) to (adots);
\draw [-,thick] (root) to (a2);

% Left subtree edges
\draw [-,thick] (a1) to (b1);
\draw [-,thick] (a1) to (bdots1);
\draw [-,thick] (a1) to (b2);

% Right subtree edges
\draw [-,thick] (a2) to (b3);
\draw [-,thick] (a2) to (bdots2);
\draw [-,thick] (a2) to (b4);

% Continuing recursion
\draw [-,thick] (b1) to (c1);
\draw [-,thick] (b2) to (c2);
\draw [-,thick] (b3) to (c3);
\draw [-,thick] (b4) to (c4);

% Level labels on the left
\coordinate (leftref) at (-7.5,0);

\node[anchor=east] at (leftref |- root)
    {level $0$};

\node[anchor=east] at (leftref |- a1)
    {level $1$};

\node[anchor=east] at (leftref |- b1)
    {level $2$};

\node[anchor=east] at (leftref |- c1)
    {$\vdots$};

\node[anchor=east] at (leftref |- l1)
    {level $\log_b n$};

% Node counts on the right
\coordinate (rightref) at (7.5,0);

\node[anchor=west] at (rightref |- root)
    {$1$ node};

\node[anchor=west] at (rightref |- a1)
    {$a$ nodes};

\node[anchor=west] at (rightref |- b1)
    {$a^2$ nodes};

\node[anchor=west] at (rightref |- c1)
    {$\vdots$};

\node[anchor=west] at (rightref |- l1)
    {$a^{\log_b n}=n^{\log_b a}$ leaves};

% Height
\draw[<->,thick] (-6.7,0) -- (-6.7,-7);

\node[rotate=90] at (-7,-3.5)
    {height $=\log_b n$};

% General level information
\node[align=center] at (0,-8.7)
{
    At level $k$:
    $a^k$ nodes,
    each with work
    $\left(\frac{n}{b^k}\right)^c$.
    \\[5pt]
    Total work at level $k$:
    $a^k\left(\frac{n}{b^k}\right)^c
    =
    n^c\left(\frac{a}{b^c}\right)^k$.
};
\end{tikzpicture}
\end{document}
```

### Application
$$
\begin{gather*}
T(n) = 5T\left( \frac{n}{3} \right) + n^6 \\
\\
T(n) = \Theta(n^6) \\
\\
\\
T(n) = 8T\left( \frac{n}{2} \right) + n^3 \\
\\
T(n) = \Theta(n^3 \log n)
\end{gather*}
$$