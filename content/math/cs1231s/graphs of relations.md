---
tags:
  - cs1231s/chapter2
  - math/set_theory
  - lang/pgf-tikz
complete: true
index:
---

### Summary
Undirected graph
- no arrows, edges are like arrows in both directions
- symmetric/two-way relations
- uses sets

$$
\begin{gather*}
(V, \ E) \ where \ V \ is \ set \ of \ verticies \ and \ E \ is \ the \ set \ of \ edges \\
\\
({\color{royalblue}\{ a,b,c,d \}}, \ {\color{violet} \{ \{ a \}, \{ a,b \},\{ a,c \},\{ d \} \}})
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[4][-]%
  {
	\draw[#1] ($(#2.#3) + {cos(#3)}*(0, {0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)}, 0)$) arc (180+#3-45:180+#3-45-270:\loopsize/2) #4;
  }
\begin{document}
\begin{tikzpicture}[auto, node distance=2cm]

  \node (a) {a};
  \node (b) [below left of=a] {b};
  \node (c) [below right of=a] {c};
  \node (d) [below right of=b] {d};

  \round{a}{90}{};
  
  \draw[-] (a) edge (b);
  \draw[-] (a) edge (c);
  
  \round{d}{270}{};

\end{tikzpicture}
\end{document}
```

Directed graph
- with arrows
- one-way relations
- uses tuples

$$
\begin{gather*}
(V, \ D) \ where \ V \ is \ set \ of \ verticies \ and \ D \ is \ binary \ relation \ on \ V \\
\\
({\color{royalblue}\{ a,b,c,d \}}, \ {\color{violet} \{ (a, \ a), (a,\ b), (a,\ c), (c, a), (d,\ d) \}})
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[4][-]%
  {
	\draw[#1] ($(#2.#3) + {cos(#3)}*(0, {0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)}, 0)$) arc (180+#3-45:180+#3-45-270:\loopsize/2) #4;
  }
\begin{document}
\begin{tikzpicture}[auto, node distance=2cm]

  \node (a) {a};
  \node (b) [below left of=a] {b};
  \node (c) [below right of=a] {c};
  \node (d) [below right of=b] {d};

  \round[->]{a}{90}{};
  
  \draw[->] (a) edge (b);
  \draw[->] (a) edge[bend left] node[midway] {(a,c)} (c);
  \draw[->] (c) edge[bend left] node[midway] {(c,a)} (a);

  \round[->]{d}{270}{};

\end{tikzpicture}
\end{document}
```

###### Extra
Tikz template for directed/undirected graphs
```latex
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[4][-]%
  {
	\draw[#1] ($(#2.#3) + {cos(#3)}*(0, {0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)}, 0)$) arc (180+#3-45:180+#3-45-270:\loopsize/2) #4;
  }
\begin{document}
\begin{tikzpicture}[auto, node distance=2cm]

  \node (a) {a};
  \node (b) [below left of=a] {b};
  \node (c) [below right of=a] {c};
  \node (d) [below of=a] {d};

  \loop[-]{a}{45}
  
  \draw[-] (a) edge (b);

\end{tikzpicture}
\end{document}
```
