---
tags:
  - cs1231s/chapter2
  - math/set_theory
complete: true
index:
---
[Previous](/labyrinth/notes/math/cs1231s/binary_relations)   [Next](/labyrinth/notes/math/cs1231s/ordering)
### Summary
Equivalance relation
- a relation that is reflexive, symmetric and transitive

Partitions
- set of nonempty, pairwise disjoint subsets

$$
\begin{align*}
&&&\{ A_{1}, A_{2}, \dots \}\text{ is a partition of X} \leftrightarrow  \\
\\
1) &&& A_{1}, A_{2}, \dots \neq \varnothing && \text{(Nonempty)} \\
2) &&& A_{1} \cup A_{2} \cup \dots = X && \text{(Complete Union)} \\
3) &&& A_{i}\neq A_{j} \to A_{i}\cap A_{j}=\varnothing && \text{(Pairwise Disjoint)}
\end{align*}
$$
> pairwise disjont -> for every subset, compared to every other subset, they do not intersect

Equivalence classes
- a subset of the equivalence relation

$$
\begin{align*}
& \text{for some } b\in X\\
\\
& \qquad
\begin{split}
[b]_{R} & = \{\begin{array}{c|c} y\in X & yRb \end{array}\} &\qquad& \text{equivalence class of }b\text{ under }R \\
& = \{\begin{array}{c|c} a\in A_{1} & A_{i}\subseteq X \land b\in A_{i} \end{array}\} && \text{a subset of }X\text{ that contains }b
\end{split} \\
\\
& \text{for some }c \in X\\
\\
& \qquad bRc \to [b]_{R}=[c]_{R}
\end{align*}
$$
### Concept
Partition induced by an equivalence relation (Theorem 2.6)
$$
\begin{align*}
& \text{Claim: } \Pi = \{\begin{array}{c|c} [b]_{R}\in P(X) & b\in X \end{array}\} \text{ is a partition of }X \\
\\
& 1) \text{ Consider }[b]_{R}\in\Pi \\
&\quad \begin{split}
&\text{Given that }R\text{ is an equivalence relation on }X\\
&R\text{ is reflexive} \\
&bRb\to b\in[b]_{R} &\quad& \text{(Definition of Equivalence Class)}\\
&\therefore [b]_{R}\neq \varnothing && \text{(Definition of }\varnothing\text{)}
\end{split} \\
\\
& 2)\text{ Show that }\bigcup_{b\in X}[b]_{R}= X \\
&\quad \begin{split}
&(\subseteq)\text{ Consider }y\in\bigcup_{b\in X}[b]_{R} \\
&\quad \begin{split}
&\text{Then }y\in[b]_{R}\text{ for some }b \\
&y\in X &\quad&\text{(Definition of Equivalence Class)} \\
&[b]_{R}\subseteq X&& \text{(Definition of Subset)} \\
&\therefore\bigcup_{b\in X}[b]_{R}\subseteq X
\end{split} \\
\\
&(\supseteq)\text{ Consider }y\in X \\
&\quad \begin{split}
&\text{Then }yRy\to y\in[y]_{R} &\quad& \text{(Reflexive)}\\
&y\in\bigcup_{b\in X}[b]_{R} \\
&\therefore X\subseteq\bigcup_{b\in X}[b]_{R} && \text{(Defnition of Subset)}
\end{split}
\end{split} \\
\\
& 3) \text{ Show that }A_{i}\neq A_{j} \to A_{i}\cap A_{j}=\varnothing \\
&\quad \begin{split}
&\text{contrapositive: }A_{i}\cap A_{j}\neq\varnothing\to A_{i}= A_{j} \\
\\
&\text{Suppose }[b]_R\cap[c]_{R}\neq \varnothing \\
& [b]_R\cap[c]_{R}=\{\begin{array}{c|c} x\in X & x\in[b]_{R}\land x\in[c]_{R} \end{array}\}\neq \varnothing &\quad& \text{(Definition of Intersection)} \\
&\exists x\in X \ x\in[b]R\land x\in[c]_{R} && \text{(Nonempty Set)} \\
& \therefore xRb \land xRc \\
& bRx \land xRc&& \text{(Symmetric)} \\
& bRc && \text{(Transitive)} \\
& \therefore [b]_{R}=[c]_{R} && \text{(Definition of Equivalence Class)}
\end{split} \\\\
&& \square
\end{align*}
$$
### Application
Partitions/eqquivalence classes of $R_{4}$
- undirected graph since its symmetric
- each node has a loop since its reflexive
- all nodes are interconnected within its subset since its transitive

$$
\begin{gather*}
({\color{royalblue}{\{ 1,2,3,4,5,6,7,8,9,10,11,12,13 \}}},\ {\color{violet}{R_{4}}}) \\
\\
[1]_{R_{4}} = [5]_{R_{4}} =\dots = \{ 1,5,9,13 \} \\
[2]_{R_{4}} = [6]_{R_{4}} =\dots = \{ 2,6,10 \} \\
[3]_{R_{4}} = [7]_{R_{4}} =\dots = \{ 3,7,11 \} \\
[4]_{R_{4}} = [8]_{R_{4}} =\dots = \{ 4,8,12 \} \\
\end{gather*}
$$
```tikz
\usepackage{tikz,amssymb}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[4][-]%
  {
	\draw[#1] ($(#2.#3) + {cos(#3)}*(0, {0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)}, 0)$) arc (180+#3-45:180+#3-45-270:\loopsize/2) #4;
  }
\begin{document}
\begin{tikzpicture}[auto, node distance=1.6cm]

  \node (1) {1};
  \node (9) [below left of=1] {9};
  \node (5) [below right of=1] {5};
  \node (13) [below right of=9] {13};

  \round{1}{90}{};
  \round{9}{180}{};
  \round{5}{0}{};
  \round{13}{270}{};
  
  \draw[-] (1) edge (5);
  \draw[-] (1) edge (9);
  \draw[-] (1) edge (13);
  \draw[-] (9) edge (5);
  \draw[-] (9) edge (13);
  \draw[-] (5) edge (13);


  \node (6) [right of=5] {6};
  \node (2) [above right of=6] {2};
  \node (10) [below right of=2] {10};

  \round{2}{90}{};
  \round{6}{225}{};
  \round{10}{315}{};
  
  \draw[-] (2) edge (6);
  \draw[-] (2) edge (10);
  \draw[-] (6) edge (10);
  

  \node (7) [right of=10] {7};
  \node (3) [above right of=7] {3};
  \node (11) [below right of=3] {11};

  \round{3}{90}{};
  \round{7}{225}{};
  \round{11}{315}{};
  
  \draw[-] (3) edge (7);
  \draw[-] (3) edge (11);
  \draw[-] (7) edge (11);


  \node (8) [right of=11] {8};
  \node (4) [above right of=8] {4};
  \node (12) [below right of=4] {12};

  \round{4}{90}{};
  \round{8}{225}{};
  \round{12}{315}{};
  
  \draw[-] (4) edge (8);
  \draw[-] (4) edge (12);
  \draw[-] (8) edge (12);

\end{tikzpicture}
\end{document}
```
> $R_{4}$ is a [congruence modulo](/labyrinth/notes/math/others/modulo#^3013a5) 4 relation