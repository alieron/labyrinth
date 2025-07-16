---
tags:
  - cs1231s/chapter2
  - math/set_theory
complete: false
index:
---
[Previous](/labyrinth/notes/math/cs1231s/n-ary_relations)   [Next](/labyrinth/notes/math/cs1231s/equivalence_relations)
### Summary
Relations as both a set of tuples and an operator
$$
\begin{gather*}
R = \{\begin{array}{c|c} (x,y)\in X\times Y & Q(x,y) \end{array}\} \quad \text{relation of }X\text{ to }Y \\
\\
R = \left\{\begin{array}{c|c} (x,y)\in X^2 & Q(x,y) \end{array}\right\} \quad \text{relation on }X \\
\\
\\
(x,y)\in R \equiv xRy \leftrightarrow Q(x,y)
\end{gather*}
$$

Properties of binary relations
$$
\begin{align*}
\text{Reflexive:} &&& \forall x \in X \ xRx \\
\\
\text{Symmetric:} &&& \forall x \in X \ \forall y \in X \ xRy \to yRx \\
\\
\text{Transitive:} &&& \forall x \in X \ \forall y \in X \ \forall z \in X \ (xRy) \land (yRz) \to xRz
\end{align*}
$$
> reflexive -> every element has a self-loop
> symmetric -> every relation is two-way
> transitive -> every relation that can be made in two steps can be made in one

Proving properties
$$
\begin{align*}
\text{Reflexive:} &&& \forall x \in X && {\color{royalblue}xRx} \to Q(x,x)\xrightarrow{show} {\color{limegreen}\text{is always true}}\\
\\
\text{Symmetric:} &&& \forall x \in X \ \forall y \in X && {\color{royalblue}xRy} \to Q(x,y) \xrightarrow{show} Q(y,x) \to {\color{limegreen}yRx} \\
\\
\text{Trasitive:} &&& \forall x \in X \ \forall y \in X \ \forall z \in X && {\color{royalblue}xRy \land yRz} \to Q(x,y)\land Q(y,z)\xrightarrow{show} Q(x,z) \to {\color{limegreen}xRz}
\end{align*}
$$
> note the number of variables needed(for proving/disproving)
### Concept
Binary relation and its inverse ^713f40
- same predicate, flipped tuple

$$
\begin{gather*}
R = \{\begin{array}{c|c} (x,y)\in X\times Y & Q(x,y) \end{array}\} \\
\\
R^{-1}=\{\begin{array}{c|c} (y,x)\in Y\times X & (x,y)\in R \end{array}\}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,fit,shapes}

\begin{document}
 \begin{tikzpicture}[ele/.style={fill=black,circle,minimum width=.8pt,inner sep=1pt},every fit/.style={ellipse,draw,inner sep=-2pt,minimum width=1.4cm,minimum height=1.8cm}]
  \node (X) at (0,5) {X};
  \node (Y) at (3,5) {Y};
  
  \node[ele,label=left:$x$] (x) at (0,3) {};
  \node[ele,label=right:$y$] (y) at (3,3) {};

  \node[draw,fit=(x)] {};
  \node[draw,fit=(y)] {};  
  \draw[->,shorten <=2pt,shorten >=2pt, bend left] (x) to node[above] {$R$} (y);
  \draw[->,shorten <=2pt,shorten >=2pt, bend left] (y) to node[above] {$R^{-1}$} (x);
 \end{tikzpicture}
\end{document}
```

Composition ^d7e453
$$
S\circ R = \{\begin{array}{c|c} (x,z)\in X\times Z & \exists y\in Y \ (x,y)\in R \land (y,z) \in S \end{array}\}
$$

Inverse of composition (Theorem 2.4)
$$
\begin{align*}
&\text{Claim: } (S \circ R)^{-1}=R^{-1}\circ S^{-1} \\
\\
&\begin{split}
(z,x)\in(S\circ R)^{-1} & \leftrightarrow (x,z)\in S\circ R && \text{(Definition of Inverse)} \\
& \leftrightarrow \exists y \in Y \ (x,y)\in R\land (y,z)\in S && \text{(Definition of Composition)} \\
& \leftrightarrow \exists y \in Y \ (y,x)\in R^{-1}\land (z,y)\in S^{-1} \\
& \leftrightarrow \exists y \in Y \ (z,y)\in S^{-1}\land (y,x)\in R^{-1} \\
& \leftrightarrow (z,x)\in R^{-1}\circ S^{-1} \\
\end{split} \\
&& \square
\end{align*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,fit,shapes}

\begin{document}
 \begin{tikzpicture}[ele/.style={fill=black,circle,minimum width=.8pt,inner sep=1pt},every fit/.style={ellipse,draw,inner sep=-2pt,minimum width=1.4cm,minimum height=1.8cm}]
  \node (X) at (0,5) {X};
  \node (Y) at (2,5) {Y};
  \node (Z) at (4,5) {Z};
  
  \node[ele,label=left:$x$] (x) at (0,3) {};
  \node[ele,label=above:$y$] (y) at (2,3) {};
  \node[ele,label=right:$z$] (z) at (4,3) {};

  \node[draw,fit=(x)] {};
  \node[draw,fit=(y)] {};  
  \node[draw,fit=(z)] {};  
  \draw[->,shorten <=2pt,shorten >=2pt] (x) to node[above] {$R$} (y);
  \draw[->,shorten <=2pt,shorten >=2pt] (y) to node[above] {$S$} (z);
  \draw[->,shorten <=2pt,shorten >=2pt, bend left=65] (x) to node[above] {$S\circ R$} (z);
  \draw[->,shorten <=2pt,shorten >=2pt, bend left=65] (z) to node[below] {$(S \circ R)^{-1}=R^{-1}\circ S^{-1}$} (x);
 \end{tikzpicture}
\end{document}
```

Transitivity and composition (Theorem 2.5)
$$
\begin{align*}
& \text{Claim: } R\text{ is transitive} \leftrightarrow  R \circ R \subseteq R \text{ for any binary relation }R\text{ on set }X \\
\\
& (\to) \text{ Suppose }R\text{ is transitive} \\
&\quad \begin{split}
& \text{For any }(x,z)\in R\circ R\text{, there is }y\in X\text{ such that,} \\
& (xRy) \land (yRz) \to xRz \\
& (x,z)\in R \\
& \therefore R\circ R \subseteq R
\end{split} \\
\\
& (\leftarrow) \text{ Suppose }R\circ R \subseteq R \\
&\quad \begin{split}
& \text{For some } y, \ (x,y)\in R \land (y,z)\in R \\
& (x,z)\in R\circ R \\
& (x,z)\in R \\
& xRz \\
& \therefore R\text{ is transitive}
\end{split} \\
\\
&& \square
\end{align*}
$$

A relation on a set can be represented by a undirected/directed [graph](/labyrinth/notes/math/cs1231s/graphs_of_relations)
### Application
Directed graph for [subsets](/labyrinth/notes/math/cs1231s/sets#^ca7c0d)
- binary operators can be binary relations

$$
\begin{gather*}
({\color{royalblue}{P(\{ a, b \})}},\ {\color{violet}{\subseteq}}) \\
\\
({\color{royalblue}{\{ \varnothing, \{ a \}, \{ b \}, \{ a,b \} \}}},\ {\color{violet}{\{\begin{array}{c|c} (A,\ B) \in V \times V & A\subseteq B \end{array}\}}})
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
\begin{tikzpicture}[auto, node distance=2cm]

  \node (e) {$\varnothing$};
  \node (a) [below left of=e] {\{a\}};
  \node (b) [below right of=e] {\{b\}};
  \node (ab) [below right of=a] {\{a, b\}};

  \round[->]{e}{90}{};
  \round[->]{a}{180}{};
  \round[->]{b}{0}{};
  \round[->]{ab}{270}{};
  
  \draw[->] (e) edge (a);
  \draw[->] (e) edge (b);
  \draw[->] (e) edge (ab);
  \draw[->] (a) edge (ab);
  \draw[->] (b) edge (ab);

\end{tikzpicture}
\end{document}
```

Some relations
$$
\begin{array}{c | c | c | c} 
& \text{Reflexive} & \text{Symmetric} & \text{Transitive} & \text{Antisymmetric} \\
\hline
R_{div} = \{\begin{array}{c|c} (m,n)\in(Z^+)^2 & m|n \end{array}\} & {\color{green}Y} & {\color{red}N} & {\color{green}Y} & {\color{green}Y} \\
\hline 
R_{4}=\{\begin{array}{c|c} (m,n)\in(Z^+)^2 & 4|(m-n) \end{array}\} & {\color{green}Y} & {\color{green}Y} & {\color{green}Y} & {\color{red}N} \\
\hline
R_{even}=\{\begin{array}{c|c} (m,n)\in(Z^+)^2 & mn \ is \ even \end{array}\} & {\color{red}N} & {\color{green}Y} & {\color{red}N} & {\color{red}N}
\end{array}
$$
> the key lies in the predicate
###### Extra
Tikz template for arrow diagram between sets
```latex
\usepackage{tikz}
\usetikzlibrary{arrows,fit,shapes}

\begin{document}
 \begin{tikzpicture}[ele/.style={fill=black,circle,minimum width=.8pt,inner sep=1pt},every fit/.style={ellipse,draw,inner sep=-2pt,minimum width=1.4cm,minimum height=1.8cm}]
  \node (X) at (0,5) {X};
  \node (Y) at (4,5) {Y};
  
  \node[ele,label=left:$a$] (a1) at (0,4) {};    
  \node[ele,label=left:$b$] (a2) at (0,3) {};    
  \node[ele,label=left:$c$] (a3) at (0,2) {};
  \node[ele,label=left:$d$] (a4) at (0,1) {};

  \node[ele,,label=right:$1$] (b1) at (4,4) {};
  \node[ele,,label=right:$2$] (b2) at (4,3) {};
  \node[ele,,label=right:$3$] (b3) at (4,2) {};
  \node[ele,,label=right:$4$] (b4) at (4,1) {};

  \node[draw,fit= (a1) (a2) (a3) (a4)] {} ;
  \node[draw,fit= (b1) (b2) (b3) (b4)] {} ;  
  \draw[->,shorten <=2pt,shorten >=2pt] (a1) -- (b4);
  \draw[->,shorten <=2pt,shorten >=2] (a2) -- (b2);
  \draw[->,shorten <=2pt,shorten >=2] (a3) -- (b1);
  \draw[->,shorten <=2pt,shorten >=2] (a4) -- (b3);
 \end{tikzpicture}
\end{document} 
```