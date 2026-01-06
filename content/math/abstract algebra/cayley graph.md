---
tags:
  - math/group_theory
  - math/number_theory
complete: false
---
### Summary
$$
\begin{align*}

\end{align*}
$$
### Concept
Cayley graph
- like a [state diagram](/labyrinth/notes/cs/cs2100/sequential_circuits#^54fb5e)
- shows how actions(or a sequence of actions) lead to a certain state


```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\begin{document}

% A square macro with numbered corners
\newcommand{\sq}[4]{%
\begin{tikzpicture}[scale=0.4]
  \draw (0,1) -- (1,1) -- (1,0) -- (0,0) -- cycle;
  \node at (0,1.2){#1};
  \node at (1,1.2){#2};
  \node at (1,-0.2){#3};
  \node at (0,-0.2){#4};
\end{tikzpicture}
}

\begin{tikzpicture}[>=stealth, node distance=3cm]

% Nodes as labeled squares
\node (e)  {\sq{1}{2}{3}{4}};
\node (h)  [right=of e] {\sq{2}{1}{4}{3}}; % horizontal flip
\node (v)  [below=of e] {\sq{4}{3}{2}{1}}; % vertical flip
\node (hv) [right=of v] {\sq{3}{4}{1}{2}}; % both flips

% Edges for flips
\draw[red,thick]  (e) -- node[above]{h} (h);
\draw[red,thick]  (v) -- node[below]{h} (hv);

\draw[blue,thick] (e) -- node[left]{v} (v);
\draw[blue,thick] (h) -- node[right]{v} (hv);

\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick,node distance=2]

% Nodes positioned as a square
\node[vertex] (e)  at (0,2) {$e$};
\node[vertex] (h)  at (2,2) {$h$};
\node[vertex] (v)  at (0,0) {$v$};
\node[vertex] (hv) at (2,0) {$hv$};

% Edges for horizontal flip h (red)
\draw[red, thick] (e) -- (h);
\draw[red, thick] (v) -- (hv);

% Edges for vertical flip v (blue)
\draw[blue, thick] (e) -- (v);
\draw[blue, thick] (h) -- (hv);

\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\begin{document}

% Triangle macro with numbered corners
\newcommand{\tri}[3]{%
\begin{tikzpicture}[scale=0.45]
  \coordinate (A) at (90:1);
  \coordinate (B) at (210:1);
  \coordinate (C) at (330:1);

  \draw (A)--(B)--(C)--cycle;

  \node at ($(A)+(0,0.25)$){#1};
  \node at ($(B)+(-0.25,-0.15)$){#2};
  \node at ($(C)+(0.25,-0.15)$){#3};
\end{tikzpicture}
}

\begin{tikzpicture}[>=stealth, node distance=2.8cm]

% Group elements
\node (e)    {\tri{1}{2}{3}};
\node (r)    [right=of e] {\tri{3}{1}{2}};     % rotate
\node (r2)   [right=of r] {\tri{2}{3}{1}};     % rotate^2

\node (s)    [below=of e]    {\tri{1}{3}{2}};  % reflect
\node (sr)   [below=of r]    {\tri{2}{1}{3}};
\node (sr2)  [below=of r2]   {\tri{3}{2}{1}};

% Rotation edges
\draw[red, thick] (e) -- node[above]{r} (r);
\draw[red, thick] (r) -- node[above]{r} (r2);
\draw[red, thick] (r2) -- node[right]{r} (e);

% Reflection edges
\draw[blue, thick] (e) -- node[left]{s} (s);
\draw[blue, thick] (r) -- node[left]{s} (sr);
\draw[blue, thick] (r2) -- node[right]{s} (sr2);

\draw[blue, thick] (s) -- node[below]{r} (sr);
\draw[blue, thick] (sr) -- node[below]{r} (sr2);
\draw[blue, thick] (sr2) -- node[right]{r} (s);

\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick,node distance=2]

% Positions of hexagon vertices
\node[vertex] (e)    at (90:2)   {$e$};
\node[vertex] (r)    at (30:2)   {$r$};
\node[vertex] (r2)   at (330:2)  {$r^2$};
\node[vertex] (sr2)  at (270:2)  {$sr^2$};
\node[vertex] (sr)   at (210:2)  {$sr$};
\node[vertex] (s)    at (150:2)  {$s$};

% Rotation edges (r generator): red
\draw[red, thick] (e) -- (r);
\draw[red, thick] (r) -- (r2);
\draw[red, thick] (r2) -- (e);

% Reflection edges (s generator): blue
\draw[blue, thick] (e) -- (s);
\draw[blue, thick] (r) -- (sr);
\draw[blue, thick] (r2) -- (sr2);

\draw[blue, thick] (s) -- (sr);
\draw[blue, thick] (sr) -- (sr2);
\draw[blue, thick] (sr2) -- (s);

\end{tikzpicture}
\end{document}
```

Cayley table
### Application



### Extra
