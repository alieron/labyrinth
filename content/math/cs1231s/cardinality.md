---
tags:
  - cs1231s/chapter3
  - math/number_theory
complete: false
index:
---
[Previous](/labyrinth/notes/math/cs1231s/function_relations)   [Next](/labyrinth/notes/math/cs1231s/infinite_sets)
### Summary
Cardinality ^695995
$$
X\text{ and }Y\text{ have the same cardinality} \leftrightarrow \exists f:X\to Y \land f\text{ is bijective}
$$

Finite sets ^a41c4b
$$
\begin{gather*}
X\text{ is finite}\leftrightarrow X=\varnothing\lor \exists n \in \mathbb{Z}^+ \ | X | =| \{ 1,2,\dots,n \} |  
\end{gather*}
$$
### Concept
Function relations over sized sets (Theorem 3.1)
$$
\begin{align*}
& \text{for some }X=\{ x_{1},\dots,x_{n} \}\text{ and }Y=\{ y_{1},\dots,y_{k} \} \\
\\
& \begin{aligned}
\text{Claims: } &(a) \ n>k \to \text{there is no }f:X\to Y\text{ that is 1-1}\\
&(b) \ n<k \to \text{there is no }g:X\to Y\text{ that is onto}\\
&(c) \ n=k \leftrightarrow \text{there is }h:X\to Y\text{ that is bijective}\\
\end{aligned} \\
\\
&(a) \\
&\quad\begin{split}
&\text{let }n\text{ cards }x_{1},\dots,x_{n}\text{ and }k\text{ boxes }y_{1},\dots,y_{k} \\
&\text{any }f:X\to Y\text{ distributes }n\text{ cards into }k\text{ boxes} \\
&\text{there is a box with at more than 1 card} & \text{(Pigeonhole Principle)} \\
&\text{so }f(x_{i})=y_{j}= f(x_{i}')\text{ and }x_{i}\neq x_{i}' \\
&\therefore f\text{ is not 1-1}
\end{split}\\
\\
&(b) \\
&\quad\begin{split}
&| X | =n \\
&\text{then }| \operatorname{range}(g) |\leq n <k \\
&\text{so }\operatorname{range}(g)\subsetneq Y \\
&\exists y\in Y \ y\not\in \operatorname{range}(g)\\
&\therefore g\text{ is not onto}
\end{split} \\
\\
&(c) \\
&\quad\begin{split}
&(\to) \ \text{Suppose }n=k, \ X = \{ x_{1},\dots x_{n} \}, \ Y = \{ y_{1},\dots,y_{n} \} \\
&\quad\begin{split}
&\text{let }h:X\to Y\text{ be }y_{i}=h(x_{i}) \\
&h\text{ is 1-1 and onto} \\
&\therefore h\text{ is bijective}
\end{split}
\end{split} \\
\\
&\quad\begin{split}
&(\gets) \ \text{Suppose there is a bijection }h:X\to Y \\
\\
&(a): \ f\text{ is 1-1}\to n\leq k &&\text{(Contrapositive)} \\
&(b): \ g\text{ is onto}\to n\geq k &&\text{(Contrapositive)} \\
\\
&\quad\begin{split}
&h\text{ is 1-1}\land h\text{ is onto} \\
&\text{so }n\leq k\land n\geq k \\
& \therefore n = k
\end{split}
\end{split}\\
&&\square
\end{align*}
$$

Cardinality between countably infinite sets (Theorem 3.2)
$$
\begin{align*}
& \text{Claim: } \mathbb{N}\text{ and }\mathbb{Z}\text{ have the same cardinality} \\
\\
& \text{let }f:\mathbb{N}\to \mathbb{Z} \\
& f(n)=\begin{cases}
\frac{n}{2} & n\text{ is even} \\
-\frac{n+1}{2} & n\text{ is odd}
\end{cases} \\
\\
& \text{Show that }f\text{ is bijective} \\
& \text{(onto) Consider any }k\in \mathbb{Z} \\
&\quad\begin{split}
&\text{Case }k\geq 0: \\
& \text{then }x=2k\geq 0\text{ so }x\in \mathbb{N}\\
& x\text{ is even} \\
& f(x)=\frac{2k}{2}=k \\
\\
& \text{Case }k<0: \\
& \text{then }2k<0 \\
& 2k\leq-1 \\
& 0\leq -(2k+1)=x\\
&\text{so }x\in \mathbb{N} \\
& x\text{ is odd} \\
& f(x) = -\frac{-(2k+1)+1}{2}=k \\
\\
& \exists x \in \mathbb{N} \ f(x)=k \\
& \therefore f\text{ is onto}
\end{split} \\
\\
& \text{(1-1) Suppose }f(b)=f(c) \\
&\quad\begin{split}
&\text{Case }k\geq 0: \\
&\text{then }b\text{ and }c\text{ are even} \\
& f(b)=f(c) \to \frac{b}{2}=\frac{c}{2} \to b=c \\
\\
& \text{Case }k<0: \\
& \text{then }b \text{ and }c\text{ are odd} \\
& f(b)=f(c)\to-\frac{b+1}{2}=-\frac{c+1}{2}\to b=c \\
\\
& f(b)=f(c) \to b=c \\
& \therefore f\text{ is 1-1}
\end{split} \\
&&\square
\end{align*}
$$
```tikz
\usepackage{tikz,amsfonts}
\usetikzlibrary{calc}
\newcommand\numline[3]% start, start val, end val
  {
	\draw[->] (#1,#2-0.5) {} -- (#1,#3+0.5) {};
	%\foreach \y in {#2,...,#3}
	%\node at (#1,\y) {a};
	%\draw[-, shift={(#1,\y)}] (3pt,0pt) -- (-3pt,0pt);
  }
\newcommand\marker[4][left]% left/right, coord, label
  {
	%\node[#1] at (#2) {};
	%\draw[shift=(0,1)] (3pt,0pt) {} -- (-3pt,0pt) {};
	\node[label=#1:\small#3] (#4#3) at (#2) {};
	\draw ($(3pt,0)+(#2)$) -- ($(-3pt,0)+(#2)$);
  }
\begin{document}
 \begin{tikzpicture}[short/.style={shorten <=2pt,shorten >=2pt}]
  \node (X) at (0,4) {$\mathbb{N}$};
  \node (R) at (2,4) {$f$};
  \node (Y) at (4,4) {$\mathbb{Z}$};
  
  \numline{0}{0}{3}
  \numline{4}{0}{3}
  
  \marker{0,1}{0}{x}
  \marker{0,1.5}{1}{x}
  \marker{0,2}{2}{x}
  \marker{0,2.5}{3}{x}
  \marker{0,3}{4}{x}
  \marker[right]{4,0}{-2}{y}
  \marker[right]{4,0.5}{-1}{y}
  \marker[right]{4,1}{0}{y}
  \marker[right]{4,1.5}{1}{y}
  \marker[right]{4,2}{2}{y}

  \draw[->, short] (x0) -- (y0);
  \draw[->, short] (x1) -- (y-1);
  \draw[->, short] (x2) -- (y1);
  \draw[->, short] (x3) -- (y-2);
  \draw[->, short] (x4) -- (y2);
  \end{tikzpicture}
\end{document} 
```
> [pigeonhole principle](/labyrinth/notes/math/cs1231s/fundemental_methods_of_proof#^f49094)
### Application
$$

$$
