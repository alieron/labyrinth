---
tags:
- cs1231s/chapter2
- math/set_theory
- lang/pgf-tikz
complete: false
prev: /labyrinth/notes/math/cs1231s/ordering
next: /labyrinth/notes/math/cs1231s/cardinality
---
   
### Summary
Properties of a function
$$
\begin{align*}
&&& f: X\to Y \leftrightarrow  f\subseteq X\times Y \text{ satisfies} && \text{function/mapping from }X\text{ to }Y \\
\\
\text{(F1)} &&& \forall x \in X \ \exists y \in Y \ (x,y)\in f \\
\\
\text{(F2)} &&& \forall x \in X \ \forall y \in Y \ \forall y' \in Y \ (x,y) \in f \land (x,y')\in f \to y = y' 
\end{align*}
$$
> F1 -> every x has an arrow
> F2 -> no x has more than one arrow
> function -> every x has only one out going arrow

Identity function
$$
i_{X} : X\to X \leftrightarrow \forall x \in X \ i_{X}(x) = x
$$
```tikz
\usepackage{tikz}
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
  \node (X) at (0,2) {X};
  \node (R) at (2,2) {$i_x$};
  \node (Y) at (4,2) {X};
  
  \numline{0}{0}{1}
  \numline{4}{0}{1}
   
  \marker{0,0}{-1}{}
  \marker{0,0.5}{0}{}
  \marker{0,1}{1}{}
  \marker[right]{4,0}{-1}{}
  \marker[right]{4,0.5}{0}{}
  \marker[right]{4,1}{1}{}
  
  \draw[->, short] (0,0) -- (4,0);
  \draw[->, short] (0,0.5) -- (4,0.5);
  \draw[->, short] (0,1) -- (4,1);
  \end{tikzpicture}
\end{document} 
```

Existence of the inverse
$$
\begin{align*}
\text{(onto)} &&& \forall y \in Y \ \exists x \in X \ y=f(x) && \text{(F}^{-1}\text{1)} \\
\\
\text{(1-1)} &&& \forall x \in X \ \forall x' \in X \ f(x) = f(x')\to x=x' && \text{(F}^{-1}\text{2)} 
\end{align*}
$$
> onto (surjective) -> every y has at least one incoming arrow
> 1-1 (injective) -> no y has more than one incoming arrow
> bijective -> both 1-1 and onto, every y has only one incoming arrow

Boolean functions
$$
\begin{align*}
&\text{for some }n \in \mathbb{Z}^+\\
& \qquad f:\{ T,F \}^n\to \{ T,F \} && \text{boolean function of }n\text{ propositions}
\end{align*}
$$

Proving properties
$$
\begin{align*}
\text{onto:} &&& \forall y \in Y && {\color{royalblue}\text{let }x=\dots}\xrightarrow{show} {\color{limegreen}\exists x \in X \ y=f(x)}\\
\\
\text{1-1:} &&& \forall x \in X \ \forall x' \in X && {\color{royalblue}f(x)=f(x')} \xrightarrow{show} {\color{limegreen}x=x'} && \text{contrapositive: }{\color{royalblue}x\neq x'} \xrightarrow{show} {\color{limegreen}f(x)\neq f(x')} \\
\\
\text{F1:} &&& \forall x \in X && {\color{royalblue}\text{let }y=\dots} \xrightarrow{show} {\color{limegreen}\exists y \in Y \ (x,y)\in f} \\
\\
\text{F2:} &&& \forall x \in X \ \forall y \in Y \ \forall y' \in Y && {\color{royalblue}(x,y)\in f\land (x, y')\in f} \xrightarrow{show} {\color{limegreen}y=y'}
\end{align*}
$$
### Concept
Image and range ^803f4f
- typical notation for [functions](/labyrinth/notes/math/ma1521/functions)

$$
\begin{align*}
&\text{for some } f : X \to Y \\
\\
& y=f(x)\equiv (x,y)\in f && f(x)\text{ is the image of }x\text{ under }f \\
\\
& \operatorname{range}(f)=\left\{\begin{array}{c|c} y \in Y & \exists x \in X \ y = f(x) \end{array}\right\}\subseteq Y && \text{set of all images under }f
\end{align*}
$$

Equality between functions (Theorem 2.7)
$$
\begin{align*}
& \text{for any }f:X\to Y\text{ and }g:X\to Y \\
\\
& \text{Claim: } f=g \leftrightarrow \forall x \in X \ f(x)=g(x) \\
\\
& (\to) \text{ Suppose }f=g \\
&\quad \begin{split}
& \text{Consider any }x \in X\\
& \text{then }(x,y)\in f\text{ for some }y \in Y &\quad& \text{(F1)} \\
& y=f(x) \\
& (x,y)\in g \to y = g(x) \\
& \therefore \forall x \in X \ f(x)=g(x)
\end{split} \\
\\
& (\leftarrow) \text{ Suppose }\forall x \in X \ f(x)=g(x) \\
&\quad \begin{split}
& (x,y)\in f&&\leftrightarrow y=f(x)\\
&&&\leftrightarrow y = g(x)\\
&&&\leftrightarrow (x,y) \in g\\
& \therefore f=g
\end{split} \\
\\
&& \square
\end{align*}
$$

The [composition](/labyrinth/notes/math/cs1231s/binary_relations#^d7e453) of two functions is a function (Theorem 2.8)
- intersecting codomain and domain must be the same/subset

$$
\begin{align*}
& \text{for any }f:X\to Y\text{ and }g:Y\to Z \\
\\
& \text{Claim: } g\circ f : X\to Z \land \forall x \in X \ g\circ f(x)=g(f(x)) \\
\\
& g\circ f \subseteq X\times Z\\
\\
& 1) \text{ Show that } g \circ f\text{ is a function} \\
& \quad\begin{split}
& \text{(F1) Consider any }x \in X \\
& \quad\begin{split}
& \text{then } \exists y \in Y \ (x,y)\in f &\quad& \text{(}f\text{ satisfies F1)} \\
& \text{and then } \exists z \in Z \ (y,z)\in g && \text{(}g\text{ satisfies F1)} \\
& \text{so }(x,z)\in g\circ f \to g\circ f\text{ satisfies F1} \\
& \therefore g\circ f\text{ satisfies F1}
\end{split} \\
\\
& \text{(F2) Suppose }(x,z)\in g\circ f \land (x,z')\in g\circ f \\
& \quad\begin{split}
& \text{then }(\exists y \in Y \ (x,y)\in f \land (y,z)\in g) \land (\exists y' \in Y \ (x,y')\in f \land (y',z')\in g) &\quad& \text{(Definition of Composition)} \\
& y = y' && \text{(}f\text{ satisifies F2)} \\
& \text{so }(y, z') \in g \\
& z = z' && \text{(}g\text{ satisifies F2)}\\
& \therefore g\circ f\text{ satisfies F1}
\end{split}
\end{split} \\
\\
& 2) \text{ Show that }\forall x \in X \ g\circ f(x)=g(f(x)) \\
& \quad\begin{split}
& \text{Let }g\circ f(x) =z\text{ for some }x \in X\\
& \text{then }(x,z)\in g\circ f \\
& \text{so }\exists y \in Y \ (x,y)\in f \land (y,z)\in g &\quad& \text{(Definition of Composition)} \\
& y = f(x) \land z = g(y) && \text{(Function Mapping)} \\
& z = g(f(x)) \\
& \therefore g\circ f(x)=g(f(x))
\end{split} \\
&&\square
\end{align*}
$$

Composition with identity (Corollary 2.9)
$$
\begin{align*}
& \text{for any }f:X\to Y  \\
\\
& \text{Claim: } i_{Y} \circ f = f \land f\circ i_{X}=f \\
\\
& \begin{split}
i_{Y}\circ f: X \to Y \land f\circ i_{x}: X \to Y &\quad& \text{(Theorem 2.8)}
\end{split} \\
\\
& \text{Consider any }x \in X \\
& \quad\begin{split}
& \text{then }i_{Y}\circ f(x) = i_{y}(f(x)) = f(x) &\quad& \text{(Identity Function)} \\
& \therefore i_{y}\circ f = f && \text{(Theorem 2.7)}
\end{split} \\
\\
& \text{Consider any }x \in X \\
& \quad\begin{split}
& \text{then }f\circ i_{x}(x) = f(i_{y}(x)) = f(x) &\quad& \text{(Identity Function)} \\
& \therefore f\circ i_{x} = f && \text{(Theorem 2.7)} \\
\end{split} \\
&& \square
\end{align*}
$$

Exisitence of an [inverse](/labyrinth/notes/math/cs1231s/binary_relations#^713f40) function ^3e4c90
$$
\begin{align*}
& \text{for any function }f: X\to Y\text{ its inverse is }f^{-1}: Y\to X \\
\\
& f^{-1}\text{ is a function iff it satisfies F1 and F2} \\
\\
&\text{Suppose }f^{-1}\text{ satisfies (F1)} \\
&\quad\begin{split}
& {\color{orange} \forall y \in Y \ \exists x \in X} \ && (y,x)\in f^{-1} \\
&&& (x,y)\in f \\
&&& {\color{orange}y=f(x)}
\end{split} && {\color{orange}\text{(Becomes F}^{-1}\text{1)}} \\
\\
&\text{Suppose }f^{-1}\text{ satisfies (F2)} \\
&\quad\begin{split}
& \forall y \in Y \ {\color{orange} \forall x \in X \ \forall x' \in X } \ && (y,x) \in f^{-1} \land (y,x')\in f^{-1} {\color{orange} \to x = x' } \\
&&& (x,y) \in f \land (x',y)\in f \\
&&& y=f(x) \land y=f(x') \\
&&& {\color{orange}f(x)=f(x')}
\end{split} && {\color{orange}\text{(Becomes F}^{-1}\text{2)}} \\
\end{align*}
$$
> the inverse is well defined iff the function is a bijection

Inverse of a bijectve function is bijective (Theorem 2.10)
$$
\begin{align*}
& \text{Claim: }f:X\to Y\text{ is bijective} \to f^{-1}:Y\to X\text{ is bijective} \\
\\
& 1) \text{ Show that } f^{-1}\text{ is a function} \\
& \quad\begin{split}
& \text{(F1) Consider any }y \in Y \\
& \quad\begin{split}
& \text{then }\exists x \in X \ && y=f(x) &\quad& \text{(}f\text{ is onto)} \\
&&& (x,y)\in f \\
&&& (y,x)\in f^{-1} \\
& \therefore g\circ f\text{ satisfies F1}
\end{split} \\
\\
& \text{(F2) Suppose } (y,x)\in f^{-1} \land (y, x')\in f^{-1}\\
& \quad\begin{split}

\end{split} \\
\end{split} \\
\\
& 2) \text{ Show that } f^{-1}\text{ is bijective} \\
& \quad\begin{split}
& \text{(onto) Consider any }x \in X \\
& \quad\begin{split}

\end{split} \\
\\
& \text{(1-1) Suppose } f^{-1}(y)=f^{-1}(y') = x\\
& \quad\begin{split}

\end{split} \\
\end{split} \\
\end{align*}
$$


Composition with inverse is identity (Corollary 2.11)
$$
\begin{align*}
& \text{Claim: }f:X\to Y\text{ is a bijection}\to f^{-1}\circ f = i_{X}\land f\circ f^{-1}=i_{Y} \\
\\
& \begin{split}
& f^{-1}: Y \to X &\quad& \text{(Theorem 2.10)} \\
& f^{-1}\circ f : X\to X \land f\circ f^{-1}:Y\to Y && \text{(Theorem 2.8)}
\end{split} \\
\\

\end{align*}
$$

Composition preserves onto, 1-1 and bijectivity (Theorem 2.12)
$$
\begin{align*}
& \text{for any }f:X\to Y\text{ and }g:Y\to Z \\
\\
& \begin{aligned}
\text{Claims: } &(a) \ f\text{ is onto}\land g\text{ is onto} \to g\circ f\text{ is onto}\\
&(b) \ f\text{ is 1-1}\land g\text{ is 1-1} \to g\circ f\text{ is 1-1}\\
&(c) \ f\text{ is bijective}\land g\text{ is bijective} \to g\circ f\text{ is bijective}\land (g\circ f)^{-1}=f^{-1}\circ g^{-1}\\
\end{aligned}
\end{align*}
$$
### Application
Identifying funtions
$$
\begin{gather*}
f_{1}=\left\{\begin{array}{c|c} (x,y) \in \mathbb{R}^{2} & y = x^2 \end{array}\right\} \\
\text{fulfils F1 and F2}\\
\therefore f_{1}\text{ is a function, range}(f)=\mathbb{R}^+ \cup \{ 0 \} \\
\\
f_{2}=\left\{\begin{array}{c|c} (x,y) \in \mathbb{R}^2 & y^2 = x \end{array}\right\} \\
\text{violates F1: }f_{2}(-1)=\sqrt{ -1 }\not\in \mathbb{R} \\
\text{violates F2: }(1,1)\in f_{2}\land(1,-1)\in f_{2}\text{ but } 1\neq -1 \\
\therefore f_{2}\text{ is not a function} \\
\\
f_{3}=\left\{\begin{array}{c|c} (x,y)\in \mathbb{N}^2 & y=x^{2} \end{array}\right\} \\
\text{fulfils F1 and F2}\\
\therefore f_{3}\text{ is a function, range}(f_{3})=\{ 0, 1, 4, 9, 16, \dots \} \\
\\
f_{4}=\left\{\begin{array}{c|c} (x,y)\in \mathbb{N}^2 & y^{2}=x \end{array}\right\} \\
\text{violates F1: }f_{4}(3)=\sqrt{ 3 }\not\in \mathbb{N} \\
\therefore f_{4}\text{ is not a function} \\
\end{gather*}
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
  \node (X) at (0,3) {$\mathbb{N}$};
  \node (R) at (2,3) {$f_3$};
  \node (Y) at (4,3) {$\mathbb{N}$};
  
  \numline{0}{0}{2}
  \numline{4}{0}{2}
  
  \marker{0,0}{0}{x}
  \marker{0,0.5}{1}{x}
  \marker{0,1}{2}{x}
  \marker{0,1.5}{3}{x}
  \marker{0,2}{4}{x}
  \marker[right]{4,0}{0}{y}
  \marker[right]{4,0.5}{1}{y}
  \marker[right]{4,1}{2}{y}
  \marker[right]{4,1.5}{3}{y}
  \marker[right]{4,2}{4}{y}

  \draw[->, short] (x0) -- (y0);
  \draw[->, short] (x1) -- (y1);
  \draw[->, short] (x2) -- (y4);
  \draw[->, short] (x3) -- (1,2.25);
  \draw[->, short] (x4) -- (0.5,2.75);
  \end{tikzpicture}
\end{document} 
```

Definition of [sequences](/labyrinth/notes/math/ma1521/sequences) as functions ^86d994
$$
\begin{gather*}
for \ f: \mathbb{R} \to \mathbb{R} \\
\\
\text{Sequence on }f: \quad \begin{split}
 \{ f(n) \}_{n=1}^\infty & = \left\{\begin{array}{c|c} (n,m) \in \mathbb{Z}^+\times \mathbb{R} & m=f(n) \end{array}\right\} \\
 & = f \circ i_{\mathbb{Z}^+}
\end{split} \\
\\
\text{is a restriction of the domain to }\mathbb{Z}^+
\end{gather*}
$$

### Extra
Tikz template for arrow diagram between number lines
```latex
\usepackage{tikz}
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
  \node (X) at (0,2.5) {X};
  \node (R) at (2,2.5) {$i_x$};
  \node (Y) at (4,2.5) {X};
  
  \numline{0}{-1}{1}
  \numline{4}{-1}{1}
  
  \marker{0,-1}{-1}
  \marker{0,0}{0}
  \marker{0,1}{1}
  \marker[right]{4,-1}{-1}
  \marker[right]{4,0}{0}
  \marker[right]{4,1}{1}

  \draw[->, short] (0,-1) -- (4,-1);
  \draw[->, short] (0,0) -- (4,0);
  \draw[->, short] (0,1) -- (4,1);
  \end{tikzpicture}
\end{document} 
```

