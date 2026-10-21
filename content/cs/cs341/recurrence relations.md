---
tags:
  - cs341/chapter1
  - cs/algorithms
complete: false
pred:
  - "[simple recurrence relations](/labyrinth/notes/cs/cs1101s/simple_recurrence_relations)"
next: /labyrinth/notes/cs/cs341/master_theorem
prev: /labyrinth/notes/cs/cs341/proving_algorithms

---
### Concept
Proving merge sort

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[
    draw,
    rounded corners,
    minimum width=55pt,
    minimum height=25pt,
    align=center,
    inner sep=2pt
]

\begin{document}
\begin{tikzpicture}[thick]

% Root
\node[vertex] at (0,0) (root)
    {$T(n)$\\$n$ work};

% Level 1
\node[vertex] at (-3,-2) (a)
    {$T(n/2)$\\$n/2$ work};

\node[vertex] at (3,-2) (b)
    {$T(n/2)$\\$n/2$ work};

% Level 2
\node[vertex] at (-4.5,-4) (c)
    {$T(n/4)$\\$n/4$ work};

\node[vertex] at (-1.5,-4) (d)
    {$T(n/4)$\\$n/4$ work};

\node[vertex] at (1.5,-4) (e)
    {$T(n/4)$\\$n/4$ work};

\node[vertex] at (4.5,-4) (f)
    {$T(n/4)$\\$n/4$ work};

% Dots
\node at (-4.5,-5.5) (g) {$\vdots$};
\node at (-1.5,-5.5) (h) {$\vdots$};
\node at (1.5,-5.5) (i) {$\vdots$};
\node at (4.5,-5.5) (j) {$\vdots$};

% Leaves
\node[vertex] at (-4.5,-7) (l1) {$T(1)$};
\node[vertex] at (-2.7,-7) (l2) {$T(1)$};
\node at (-1.35,-7) (ld1) {$\cdots$};
\node[vertex] at (0,-7) (l3) {$T(1)$};
\node at (1.35,-7) (ld2) {$\cdots$};
\node[vertex] at (2.7,-7) (l4) {$T(1)$};
\node[vertex] at (4.5,-7) (l5) {$T(1)$};

% Edges
\draw [-,thick] (root) to (a);
\draw [-,thick] (root) to (b);

\draw [-,thick] (a) to (c);
\draw [-,thick] (a) to (d);
\draw [-,thick] (b) to (e);
\draw [-,thick] (b) to (f);

\draw [-,thick] (c) to (g);
\draw [-,thick] (d) to (h);
\draw [-,thick] (e) to (i);
\draw [-,thick] (f) to (j);

% Labels on the left
\coordinate (leftref) at (-6.5,0);

\node[anchor=east] at (leftref |- root)
    {level $0$};

\node[anchor=east] at (leftref |- a)
    {level $1$};

\node[anchor=east] at (leftref |- c)
    {level $2$};

\node[anchor=east] at (leftref |- g)
    {$\vdots$};

\node[anchor=east] at (leftref |- l1)
    {level $\log_2 n$};

% Number of nodes on the right
\coordinate (rightref) at (6.5,0);

\node[anchor=west] at (rightref |- root)
    {$1$ node};

\node[anchor=west] at (rightref |- a)
    {$2$ nodes};

\node[anchor=west] at (rightref |- c)
    {$2^2=4$ nodes};

\node[anchor=west] at (rightref |- g)
    {$\vdots$};

\node[anchor=west] at (rightref |- l1)
    {$2^{\log_2 n}=n$ leaves};

% Height
\draw[<->,thick] (-5.7,0) -- (-5.7,-7);

\node[rotate=90] at (-6,-3.5)
    {height $=\log_2 n$};

% Summary
\node[align=center] at (0,-8.5)
{
    At level $k$:
    $2^k$ nodes,
    each with work $\frac{n}{2^k}$.
    \\[4pt]
    Total work per level:
    $2^k\frac{n}{2^k}=n$.
    \\[4pt]
    Therefore $T(n)=\Theta(n\log n)$.
};

\end{tikzpicture}
\end{document}
```

### Application
$$
\begin{gather*}
T(n) = nT(n-1) + 1 \\
\\
\begin{aligned}
T(n) &= 1 + n + n(n-1) + \dots + n! \\
n! \leq T(n) &= \sum_{i=1}^{n} \frac{n!}{i!} \leq n! \sum_{i=1}^{\infty} \frac{1}{k!} = cn!
\end{aligned} \\
\\
T(n) = \Theta(n) \\
\\
\\
T(n) = \sqrt{ n } T(\sqrt{ n }) + n \\
\\
\begin{aligned}
T(n) &= n + n^{\frac{1}{2}}n^{\frac{1}{2}} + n^{\frac{3}{4}}n^{\frac{1}{4}} + n^{\frac{7}{8}}n^{\frac{1}{8}} + \dots \\
&=n + n + n + \dots
\end{aligned}\\
\\
\begin{aligned}
\text{levels: }\qquad n^{\frac{1}{2^h}}&\leq c \\
\frac{\log_{c} n}{2^h} &\leq 1 \\
\log_{c} n &\leq 2^h \\
\log_{2}\log_{c} n &\leq h \\
\end{aligned} \\
\\
T(n) = \Theta(n\log \log n)
\end{gather*}
$$

### Extra
Swapping base and power
- using the [rules of logarithms](/labyrinth/notes/math/math_fundementals/rules_of_logarithms)

$$
\begin{align*}
b^{\log_{b} x} & = x \\
\\
a^{\log_{b} c} &= b^{\log_{b}(a^{\log_{b} c})} \\
&= b^{(\log_{b} c)(\log_{b}a)} \\
&= b^{(\log_{b} a)(\log_{b}c)} \\
&= b^{\log_{b}(c^{\log_{b} a})} \\
&= c^{\log_{b} a}
\end{align*}
$$
