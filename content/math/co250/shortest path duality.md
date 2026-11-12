---
tags:
  - co250/chapter3
  - math/optimization
  - to_review
complete: false
pred: "[shortest path IP](/labyrinth/notes/math/co250/shortest_path_IP)"
prev: /labyrinth/notes/math/co250/weak_duality
next: /labyrinth/notes/math/co250/strong_duality

---
### Concept

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,on grid,node distance=2cm and 2cm]
\node[vertex] (s) {s};
\node[vertex,below right=of s] (j) {j};
\node[vertex,above right=of s] (a) {a};
\node[vertex,below right=of a] (h) {h};
\node[vertex,below=of h] (i) {i};
\node[vertex,above=of h] (b) {b};
\node[vertex,above right=of h] (c) {c};
\node[vertex,below right=of h] (g) {g};
\node[vertex,below right=of c] (t) {t};
\node[vertex,above=of t] (d) {d};

\draw[-] (s) -- (a);
\draw[-] (s) -- (j);
\draw[-] (a) -- (b);
\draw[-] (c) -- (b);
\draw[-] (a) -- (h);
\draw[-] (j) -- (i);
\draw[-] (h) -- (i);
\draw[-] (g) -- (i);
\draw[-] (h) -- (c);
\draw[-] (d) -- (c);
\draw[-] (d) -- (t);
\draw[-] (g) -- (t);

\end{tikzpicture}
\end{document}
```


#### Width assignment
- values assigned to s,t-cuts
- minimum "toll" to cross a boundary defined by an s,t-cut


Slack
- leftover cost if an edge were to be relaxed by the width assignment 

$$
\operatorname{slack}_y(e) = c_e - \sum(y_U \,:\,\delta(U) \, s,t\text{-cut} \land e \in \delta(U))
$$

Dual LP
- maximize width assignments instead


Relaxing integrality in [shortest path IP](/labyrinth/notes/math/co250/shortest_path_IP) gives a primal LP. Its dual assigns nonnegative widths $y_S$ to $s,t$-cuts:
$$\max\sum_Sy_S\quad\text{s.t.}\quad\sum_{S:e\in\delta(S)}y_S\le c_e\ (e\in E),\quad y\ge0.$$
Any path crosses every cut, so feasible widths lower-bound every path length. Algebraically this is weak duality for
$$\min\{c^Tx:Ax\ge\mathbf1,x\ge0\},\qquad \max\{\mathbf1^Ty:A^Ty\le c,y\ge0\}.$$
A path and width assignment of equal value certify mutual optimality. The edge slack is $c_e-\sum_{S:e\in\delta(S)}y_S$; zero-slack edges are equality edges.


The primal-dual shortest-path algorithm grows reachable vertices through equality edges while raising one cut width.



Invariants: $y$ stays dual feasible; every arc is tight; active cuts have no entering arc; every vertex in $U$ has a directed path from $s$; arcs have both ends in $U$ after expansion. At least one vertex enters per iteration. The output path uses equality edges and crosses each active cut exactly once, so its length equals $\sum_Sy_S$. It is shortest, and the cut LP has an integral optimum.


#### Primal-dual shortest path algorithm
- similar to [BFS](/labyrinth/notes/cs/cs2040s/BFS) but works on weighted edges with [bellman-ford](/labyrinth/notes/cs/cs2040s/bellman-ford_algorithm) edge relaxation

```
y <- 0
U <- {s}
while t ∉ U:
  choose edge ab with minimum slack among edges in δ(U), a ∈ U, b ∉ U
  y_U <- slack_y(ab)
  U = U + {b}
  make ab directed
return the directed s,t path and y
```

- example graph

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,backgrounds}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick,on grid,node distance=2cm and 2cm]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,right=of a] (b) {b};
\node[vertex,below left=of a] (s) {s};
\node[vertex,right=of s] (c) {c};
\node[vertex,below=of c] (d) {d};

\uwedge{s}{a}{2};
\uwedge[green]{s}{c}{1};
\uwedge{s}{d}{3};
\uwedge{a}{b}{1};
\uwedge{c}{b}{2};
\uwedge[green]{c}{d}{1};
\uwedge[green]{d}{t}{2};
\uwedge{c}{t}{4};
\uwedge{b}{t}{4};

\end{tikzpicture}
\end{document}
```

- step 1: start with 0 for all width assignments

$$
\begin{gather*}
U = \{ s \} \\
\\
\delta(U) = \{ sa,sc,sd \}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,backgrounds}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
% Usage: \cutset{s,c,a}
% For 3+ vertices: counterclockwise boundary order.
\newcommand{\cutset}[1]{%
  \foreach \p [count=\i] in {#1}{%
    \expandafter\xdef\csname cutvertex\i\endcsname{\p}%
    \xdef\cutcount{\i}%
  }%
  \def\cutvertex##1{\csname cutvertex##1\endcsname}%
  \begin{scope}[on background layer]
    \ifnum\cutcount=1
      \draw[cyan,thick,dashed]
        (\cutvertex{1}.center) circle[radius=14pt];
    \else
      \ifnum\cutcount=2
        % Rounded rectangle aligned with the two vertices.
        \pgfmathanglebetweenpoints
          {\pgfpointanchor{\cutvertex{1}}{center}}
          {\pgfpointanchor{\cutvertex{2}}{center}}%
        \let\cutangle\pgfmathresult
        \coordinate (cutstart) at
          ($(\cutvertex{1}.center)+( \cutangle+180:14pt)$);
        \coordinate (cutend) at
          ($(\cutvertex{2}.center)+( \cutangle:14pt)$);
        \draw[cyan,thick,dashed,rounded corners=10pt]
          ($(cutstart)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle-90:14pt)$) --
          ($(cutstart)+(\cutangle-90:14pt)$) -- cycle;
      \else
        % Offset each polygon corner outward.
        \foreach \i in {1,...,\cutcount}{%
          \pgfmathtruncatemacro{\prev}{mod(\i-2+\cutcount,\cutcount)+1}%
          \pgfmathtruncatemacro{\next}{mod(\i,\cutcount)+1}%

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\prev}}{center}}
            {\pgfpointanchor{\cutvertex{\i}}{center}}%
          \let\incoming\pgfmathresult

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\i}}{center}}
            {\pgfpointanchor{\cutvertex{\next}}{center}}%
          \let\outgoing\pgfmathresult

          \pgfmathsetmacro{\turn}{mod(\outgoing-\incoming+540,360)-180}%
          \pgfmathsetmacro{\direction}{\incoming-90+\turn/2}%
          \pgfmathsetmacro{\padding}{18/cos(\turn/2)}%

          \coordinate (cutcorner\i) at
            ($(\cutvertex{\i}.center)+(\direction:\padding pt)$);
        }%
        \def\cutpath{(cutcorner1)}%
        \foreach \i in {2,...,\cutcount}{%
          \xdef\cutpath{\cutpath -- (cutcorner\i)}%
        }%
        \draw[cyan,thick,dashed,rounded corners=6pt]
          \cutpath -- cycle;
      \fi
    \fi
  \end{scope}
}
\begin{document}
\begin{tikzpicture}[thick,on grid,node distance=2cm and 2cm]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,right=of a] (b) {b};
\node[vertex,below left=of a] (s) {s};
\node[vertex,right=of s] (c) {c};
\node[vertex,below=of c] (d) {d};

\uwedge[red]{s}{a}{2};
\uwedge[red]{s}{c}{1};
\uwedge[red]{s}{d}{3};
\uwedge{a}{b}{1};
\uwedge{c}{b}{2};
\uwedge{c}{d}{1};
\uwedge{d}{t}{2};
\uwedge{c}{t}{4};
\uwedge{b}{t}{4};

\cutset{s}       % Set {s}
% \cutset{s,a}   % Set {s,a}
% \cutset{s,a,c} % Set {s,a,c}

\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\begin{aligned}
\operatorname{slack}_{y}(sa) &= 2 \\
\operatorname{slack}_{y}(sc) &= 1 &&\text{(minimum)} \\
\operatorname{slack}_{y}(sd) &= 3 \\
\end{aligned} \\
\\
y_{\{ s \}} = 1 \\
\\
\begin{aligned}
\operatorname{slack}_{y}(sa) &= 2 - 1 = 1 \\
\operatorname{slack}_{y}(sc) &= 1 - 1 = 0 &&\text{(picked)} \\
\operatorname{slack}_{y}(sd) &= 3 - 1 = 2 \\
\end{aligned}
\end{gather*}
$$

- step 2: relax vertex c

$$
\begin{gather*}
U = \{ s,c \} \\
\\
\delta(U) = \{ sa,sd,cb,cd,ct \}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,fit,backgrounds}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
% Usage: \cutset{s,c,a}
% For 3+ vertices: counterclockwise boundary order.
\newcommand{\cutset}[1]{%
  \foreach \p [count=\i] in {#1}{%
    \expandafter\xdef\csname cutvertex\i\endcsname{\p}%
    \xdef\cutcount{\i}%
  }%
  \def\cutvertex##1{\csname cutvertex##1\endcsname}%
  \begin{scope}[on background layer]
    \ifnum\cutcount=1
      \draw[cyan,thick,dashed]
        (\cutvertex{1}.center) circle[radius=14pt];
    \else
      \ifnum\cutcount=2
        % Rounded rectangle aligned with the two vertices.
        \pgfmathanglebetweenpoints
          {\pgfpointanchor{\cutvertex{1}}{center}}
          {\pgfpointanchor{\cutvertex{2}}{center}}%
        \let\cutangle\pgfmathresult
        \coordinate (cutstart) at
          ($(\cutvertex{1}.center)+( \cutangle+180:14pt)$);
        \coordinate (cutend) at
          ($(\cutvertex{2}.center)+( \cutangle:14pt)$);
        \draw[cyan,thick,dashed,rounded corners=10pt]
          ($(cutstart)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle-90:14pt)$) --
          ($(cutstart)+(\cutangle-90:14pt)$) -- cycle;
      \else
        % Offset each polygon corner outward.
        \foreach \i in {1,...,\cutcount}{%
          \pgfmathtruncatemacro{\prev}{mod(\i-2+\cutcount,\cutcount)+1}%
          \pgfmathtruncatemacro{\next}{mod(\i,\cutcount)+1}%

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\prev}}{center}}
            {\pgfpointanchor{\cutvertex{\i}}{center}}%
          \let\incoming\pgfmathresult

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\i}}{center}}
            {\pgfpointanchor{\cutvertex{\next}}{center}}%
          \let\outgoing\pgfmathresult

          \pgfmathsetmacro{\turn}{mod(\outgoing-\incoming+540,360)-180}%
          \pgfmathsetmacro{\direction}{\incoming-90+\turn/2}%
          \pgfmathsetmacro{\padding}{18/cos(\turn/2)}%

          \coordinate (cutcorner\i) at
            ($(\cutvertex{\i}.center)+(\direction:\padding pt)$);
        }%
        \def\cutpath{(cutcorner1)}%
        \foreach \i in {2,...,\cutcount}{%
          \xdef\cutpath{\cutpath -- (cutcorner\i)}%
        }%
        \draw[cyan,thick,dashed,rounded corners=6pt]
          \cutpath -- cycle;
      \fi
    \fi
  \end{scope}
}
\begin{document}
\begin{tikzpicture}[thick,on grid,node distance=2cm and 2cm]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,right=of a] (b) {b};
\node[vertex,below left=of a] (s) {s};
\node[vertex,right=of s] (c) {c};
\node[vertex,below=of c] (d) {d};

\uwedge[red]{s}{a}{2};
\uwedge[->,blue]{s}{c}{1};
\uwedge[red]{s}{d}{3};
\uwedge{a}{b}{1};
\uwedge[red]{c}{b}{2};
\uwedge[red]{c}{d}{1};
\uwedge{d}{t}{2};
\uwedge[red]{c}{t}{4};
\uwedge{b}{t}{4};

\cutset{s,c}

\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\begin{aligned}
\operatorname{slack}_{y}(sa) &= 1 && \text{(minimum)} \\
\operatorname{slack}_{y}(sd) &= 2 \\
\operatorname{slack}_{y}(cb) &= 2 \\
\operatorname{slack}_{y}(cd) &= 1 && \text{(minimum)}\\
\operatorname{slack}_{y}(ct) &= 4 \\
\end{aligned} \\
\\
y_{\{ s,c \}} = 1 \\
\\
\begin{aligned}
\operatorname{slack}_{y}(sa) &= 1 - 1 = 0 && \text{(picked)} \\
\operatorname{slack}_{y}(sd) &= 2 - 1 = 1 \\
\operatorname{slack}_{y}(cb) &= 2 - 1 = 1 \\
\operatorname{slack}_{y}(cd) &= 1 - 1 = 0 \\
\operatorname{slack}_{y}(ct) &= 4 - 1 = 3 \\
\end{aligned}
\end{gather*}
$$
> remeber previous relaxations made to the edges
> when there are multiple completely relaxed edges, just pick one

- step 3: relax vertex a

$$
\begin{gather*}
U = \{ s,c,a \} \\
\\
\delta(U) = \{ sd,ab,cb,cd,ct \}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,fit,backgrounds}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
% Usage: \cutset{s,c,a}
% For 3+ vertices: counterclockwise boundary order.
\newcommand{\cutset}[1]{%
  \foreach \p [count=\i] in {#1}{%
    \expandafter\xdef\csname cutvertex\i\endcsname{\p}%
    \xdef\cutcount{\i}%
  }%
  \def\cutvertex##1{\csname cutvertex##1\endcsname}%
  \begin{scope}[on background layer]
    \ifnum\cutcount=1
      \draw[cyan,thick,dashed]
        (\cutvertex{1}.center) circle[radius=14pt];
    \else
      \ifnum\cutcount=2
        % Rounded rectangle aligned with the two vertices.
        \pgfmathanglebetweenpoints
          {\pgfpointanchor{\cutvertex{1}}{center}}
          {\pgfpointanchor{\cutvertex{2}}{center}}%
        \let\cutangle\pgfmathresult
        \coordinate (cutstart) at
          ($(\cutvertex{1}.center)+( \cutangle+180:14pt)$);
        \coordinate (cutend) at
          ($(\cutvertex{2}.center)+( \cutangle:14pt)$);
        \draw[cyan,thick,dashed,rounded corners=10pt]
          ($(cutstart)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle-90:14pt)$) --
          ($(cutstart)+(\cutangle-90:14pt)$) -- cycle;
      \else
        % Offset each polygon corner outward.
        \foreach \i in {1,...,\cutcount}{%
          \pgfmathtruncatemacro{\prev}{mod(\i-2+\cutcount,\cutcount)+1}%
          \pgfmathtruncatemacro{\next}{mod(\i,\cutcount)+1}%

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\prev}}{center}}
            {\pgfpointanchor{\cutvertex{\i}}{center}}%
          \let\incoming\pgfmathresult

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\i}}{center}}
            {\pgfpointanchor{\cutvertex{\next}}{center}}%
          \let\outgoing\pgfmathresult

          \pgfmathsetmacro{\turn}{mod(\outgoing-\incoming+540,360)-180}%
          \pgfmathsetmacro{\direction}{\incoming-90+\turn/2}%
          \pgfmathsetmacro{\padding}{18/cos(\turn/2)}%

          \coordinate (cutcorner\i) at
            ($(\cutvertex{\i}.center)+(\direction:\padding pt)$);
        }%
        \def\cutpath{(cutcorner1)}%
        \foreach \i in {2,...,\cutcount}{%
          \xdef\cutpath{\cutpath -- (cutcorner\i)}%
        }%
        \draw[cyan,thick,dashed,rounded corners=14pt]
          \cutpath -- cycle;
      \fi
    \fi
  \end{scope}
}
\begin{document}
\begin{tikzpicture}[thick,on grid,node distance=2cm and 2cm]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,right=of a] (b) {b};
\node[vertex,below left=of a] (s) {s};
\node[vertex,right=of s] (c) {c};
\node[vertex,below=of c] (d) {d};

\uwedge[->,blue]{s}{a}{2};
\uwedge[->,blue]{s}{c}{1};
\uwedge[red]{s}{d}{3};
\uwedge[red]{a}{b}{1};
\uwedge[red]{c}{b}{2};
\uwedge[red]{c}{d}{1};
\uwedge{d}{t}{2};
\uwedge[red]{c}{t}{4};
\uwedge{b}{t}{4};

\cutset{s,c,a}

\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\begin{aligned}
\operatorname{slack}_{y}(sd) &= 1 \\
\operatorname{slack}_{y}(ab) &= 1 \\
\operatorname{slack}_{y}(cb) &= 1 \\
\operatorname{slack}_{y}(cd) &= 0 && \text{(minimum)}\\
\operatorname{slack}_{y}(ct) &= 3 \\
\end{aligned} \\
\\
y_{\{ s,c,a \}} = 0 \\
\\
\begin{aligned}
\operatorname{slack}_{y}(sd) &= 1-0=1 \\
\operatorname{slack}_{y}(ab) &= 1-0=1 \\
\operatorname{slack}_{y}(cb) &= 1-0=1 \\
\operatorname{slack}_{y}(cd) &= 0-0=1 && \text{(picked)}\\
\operatorname{slack}_{y}(ct) &= 3-0=3 \\
\end{aligned}
\end{gather*}
$$

- step 4: relax vertex d

$$
\begin{gather*}
U = \{ s,c,a,d \} \\
\\
\delta(U) = \{ ab,cb,ct,dt \}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,fit,backgrounds}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
% Usage: \cutset{s,c,a}
% For 3+ vertices: counterclockwise boundary order.
\newcommand{\cutset}[1]{%
  \foreach \p [count=\i] in {#1}{%
    \expandafter\xdef\csname cutvertex\i\endcsname{\p}%
    \xdef\cutcount{\i}%
  }%
  \def\cutvertex##1{\csname cutvertex##1\endcsname}%
  \begin{scope}[on background layer]
    \ifnum\cutcount=1
      \draw[cyan,thick,dashed]
        (\cutvertex{1}.center) circle[radius=14pt];
    \else
      \ifnum\cutcount=2
        % Rounded rectangle aligned with the two vertices.
        \pgfmathanglebetweenpoints
          {\pgfpointanchor{\cutvertex{1}}{center}}
          {\pgfpointanchor{\cutvertex{2}}{center}}%
        \let\cutangle\pgfmathresult
        \coordinate (cutstart) at
          ($(\cutvertex{1}.center)+( \cutangle+180:14pt)$);
        \coordinate (cutend) at
          ($(\cutvertex{2}.center)+( \cutangle:14pt)$);
        \draw[cyan,thick,dashed,rounded corners=10pt]
          ($(cutstart)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle-90:14pt)$) --
          ($(cutstart)+(\cutangle-90:14pt)$) -- cycle;
      \else
        % Offset each polygon corner outward.
        \foreach \i in {1,...,\cutcount}{%
          \pgfmathtruncatemacro{\prev}{mod(\i-2+\cutcount,\cutcount)+1}%
          \pgfmathtruncatemacro{\next}{mod(\i,\cutcount)+1}%

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\prev}}{center}}
            {\pgfpointanchor{\cutvertex{\i}}{center}}%
          \let\incoming\pgfmathresult

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\i}}{center}}
            {\pgfpointanchor{\cutvertex{\next}}{center}}%
          \let\outgoing\pgfmathresult

          \pgfmathsetmacro{\turn}{mod(\outgoing-\incoming+540,360)-180}%
          \pgfmathsetmacro{\direction}{\incoming-90+\turn/2}%
          \pgfmathsetmacro{\padding}{18/cos(\turn/2)}%

          \coordinate (cutcorner\i) at
            ($(\cutvertex{\i}.center)+(\direction:\padding pt)$);
        }%
        \def\cutpath{(cutcorner1)}%
        \foreach \i in {2,...,\cutcount}{%
          \xdef\cutpath{\cutpath -- (cutcorner\i)}%
        }%
        \draw[cyan,thick,dashed,rounded corners=14pt]
          \cutpath -- cycle;
      \fi
    \fi
  \end{scope}
}
\begin{document}
\begin{tikzpicture}[thick,on grid,node distance=2cm and 2cm]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,right=of a] (b) {b};
\node[vertex,below left=of a] (s) {s};
\node[vertex,right=of s] (c) {c};
\node[vertex,below=of c] (d) {d};

\uwedge[->,blue]{s}{a}{2};
\uwedge[->,blue]{s}{c}{1};
\uwedge[gray]{s}{d}{3};
\uwedge[red]{a}{b}{1};
\uwedge[red]{c}{b}{2};
\uwedge[->,blue]{c}{d}{1};
\uwedge[red]{d}{t}{2};
\uwedge[red]{c}{t}{4};
\uwedge{b}{t}{4};

\cutset{s,d,c,a}

\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\begin{aligned}
\operatorname{slack}_{y}(ab) &= 1 &&\text{(minimum)} \\
\operatorname{slack}_{y}(cb) &= 1 &&\text{(minimum)} \\
\operatorname{slack}_{y}(ct) &= 3 \\
\operatorname{slack}_{y}(dt) &= 2 \\
\end{aligned} \\
\\
y_{\{ s,c,a,d \}} = 1 \\
\\
\begin{aligned}
\operatorname{slack}_{y}(ab) &= 1-1=0 &&\text{(picked)} \\
\operatorname{slack}_{y}(cb) &= 1-1=0 \\
\operatorname{slack}_{y}(ct) &= 3-1= 2 \\
\operatorname{slack}_{y}(dt) &= 2-1= 1 \\
\end{aligned}
\end{gather*}
$$

- step 5: relax vertex b

$$
\begin{gather*}
U = \{ s,c,a,d,b \} \\
\\
\delta(U) = \{ bt,ct,dt \}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,fit,backgrounds}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
% Usage: \cutset{s,c,a}
% For 3+ vertices: counterclockwise boundary order.
\newcommand{\cutset}[1]{%
  \foreach \p [count=\i] in {#1}{%
    \expandafter\xdef\csname cutvertex\i\endcsname{\p}%
    \xdef\cutcount{\i}%
  }%
  \def\cutvertex##1{\csname cutvertex##1\endcsname}%
  \begin{scope}[on background layer]
    \ifnum\cutcount=1
      \draw[cyan,thick,dashed]
        (\cutvertex{1}.center) circle[radius=14pt];
    \else
      \ifnum\cutcount=2
        % Rounded rectangle aligned with the two vertices.
        \pgfmathanglebetweenpoints
          {\pgfpointanchor{\cutvertex{1}}{center}}
          {\pgfpointanchor{\cutvertex{2}}{center}}%
        \let\cutangle\pgfmathresult
        \coordinate (cutstart) at
          ($(\cutvertex{1}.center)+( \cutangle+180:14pt)$);
        \coordinate (cutend) at
          ($(\cutvertex{2}.center)+( \cutangle:14pt)$);
        \draw[cyan,thick,dashed,rounded corners=10pt]
          ($(cutstart)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle-90:14pt)$) --
          ($(cutstart)+(\cutangle-90:14pt)$) -- cycle;
      \else
        % Offset each polygon corner outward.
        \foreach \i in {1,...,\cutcount}{%
          \pgfmathtruncatemacro{\prev}{mod(\i-2+\cutcount,\cutcount)+1}%
          \pgfmathtruncatemacro{\next}{mod(\i,\cutcount)+1}%

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\prev}}{center}}
            {\pgfpointanchor{\cutvertex{\i}}{center}}%
          \let\incoming\pgfmathresult

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\i}}{center}}
            {\pgfpointanchor{\cutvertex{\next}}{center}}%
          \let\outgoing\pgfmathresult

          \pgfmathsetmacro{\turn}{mod(\outgoing-\incoming+540,360)-180}%
          \pgfmathsetmacro{\direction}{\incoming-90+\turn/2}%
          \pgfmathsetmacro{\padding}{18/cos(\turn/2)}%

          \coordinate (cutcorner\i) at
            ($(\cutvertex{\i}.center)+(\direction:\padding pt)$);
        }%
        \def\cutpath{(cutcorner1)}%
        \foreach \i in {2,...,\cutcount}{%
          \xdef\cutpath{\cutpath -- (cutcorner\i)}%
        }%
        \draw[cyan,thick,dashed,rounded corners=14pt]
          \cutpath -- cycle;
      \fi
    \fi
  \end{scope}
}
\begin{document}
\begin{tikzpicture}[thick,on grid,node distance=2cm and 2cm]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,right=of a] (b) {b};
\node[vertex,below left=of a] (s) {s};
\node[vertex,right=of s] (c) {c};
\node[vertex,below=of c] (d) {d};

\uwedge[->,blue]{s}{a}{2};
\uwedge[->,blue]{s}{c}{1};
\uwedge[gray]{s}{d}{3};
\uwedge[->,blue]{a}{b}{1};
\uwedge[gray]{c}{b}{2};
\uwedge[->,blue]{c}{d}{1};
\uwedge[red]{d}{t}{2};
\uwedge[red]{c}{t}{4};
\uwedge[red]{b}{t}{4};

\cutset{s,d,c,b,a}

\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\begin{aligned}
\operatorname{slack}_{y}(bt) &= 4 \\
\operatorname{slack}_{y}(ct) &= 2 \\
\operatorname{slack}_{y}(dt) &= 1 &&\text{(minimum)}\\
\end{aligned} \\
\\
y_{\{ s,c,a,d,b \}} = 1 \\
\\
\begin{aligned}
\operatorname{slack}_{y}(bt) &= 4-1= 3 \\
\operatorname{slack}_{y}(ct) &= 2-1= 1 \\
\operatorname{slack}_{y}(dt) &= 1-1= 0 &&\text{(picked)} \\
\end{aligned}
\end{gather*}
$$

- step 5: relax vertex t, return directed path

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,fit,backgrounds}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
% Usage: \cutset{s,c,a}
% For 3+ vertices: counterclockwise boundary order.
\newcommand{\cutset}[1]{%
  \foreach \p [count=\i] in {#1}{%
    \expandafter\xdef\csname cutvertex\i\endcsname{\p}%
    \xdef\cutcount{\i}%
  }%
  \def\cutvertex##1{\csname cutvertex##1\endcsname}%
  \begin{scope}[on background layer]
    \ifnum\cutcount=1
      \draw[cyan,thick,dashed]
        (\cutvertex{1}.center) circle[radius=14pt];
    \else
      \ifnum\cutcount=2
        % Rounded rectangle aligned with the two vertices.
        \pgfmathanglebetweenpoints
          {\pgfpointanchor{\cutvertex{1}}{center}}
          {\pgfpointanchor{\cutvertex{2}}{center}}%
        \let\cutangle\pgfmathresult
        \coordinate (cutstart) at
          ($(\cutvertex{1}.center)+( \cutangle+180:14pt)$);
        \coordinate (cutend) at
          ($(\cutvertex{2}.center)+( \cutangle:14pt)$);
        \draw[cyan,thick,dashed,rounded corners=10pt]
          ($(cutstart)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle+90:14pt)$) --
          ($(cutend)+(\cutangle-90:14pt)$) --
          ($(cutstart)+(\cutangle-90:14pt)$) -- cycle;
      \else
        % Offset each polygon corner outward.
        \foreach \i in {1,...,\cutcount}{%
          \pgfmathtruncatemacro{\prev}{mod(\i-2+\cutcount,\cutcount)+1}%
          \pgfmathtruncatemacro{\next}{mod(\i,\cutcount)+1}%

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\prev}}{center}}
            {\pgfpointanchor{\cutvertex{\i}}{center}}%
          \let\incoming\pgfmathresult

          \pgfmathanglebetweenpoints
            {\pgfpointanchor{\cutvertex{\i}}{center}}
            {\pgfpointanchor{\cutvertex{\next}}{center}}%
          \let\outgoing\pgfmathresult

          \pgfmathsetmacro{\turn}{mod(\outgoing-\incoming+540,360)-180}%
          \pgfmathsetmacro{\direction}{\incoming-90+\turn/2}%
          \pgfmathsetmacro{\padding}{18/cos(\turn/2)}%

          \coordinate (cutcorner\i) at
            ($(\cutvertex{\i}.center)+(\direction:\padding pt)$);
        }%
        \def\cutpath{(cutcorner1)}%
        \foreach \i in {2,...,\cutcount}{%
          \xdef\cutpath{\cutpath -- (cutcorner\i)}%
        }%
        \draw[cyan,thick,dashed,rounded corners=14pt]
          \cutpath -- cycle;
      \fi
    \fi
  \end{scope}
}
\begin{document}
\begin{tikzpicture}[thick,on grid,node distance=2cm and 2cm]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,right=of a] (b) {b};
\node[vertex,below left=of a] (s) {s};
\node[vertex,right=of s] (c) {c};
\node[vertex,below=of c] (d) {d};

\uwedge[->,blue]{s}{a}{2};
\uwedge[->,green]{s}{c}{1};
\uwedge[gray]{s}{d}{3};
\uwedge[->,blue]{a}{b}{1};
\uwedge[gray]{c}{b}{2};
\uwedge[->,green]{c}{d}{1};
\uwedge[->,green]{d}{t}{2};
\uwedge[gray]{c}{t}{4};
\uwedge[gray]{b}{t}{4};

\end{tikzpicture}
\end{document}
```
$$
y_{\{ s \}} = y _{\{ s,c \}} = y_{\{ s,c,a,d \}} = y_{\{ s,c,a,d,b \}} = 1, \quad\text{otherwise } y_{U} = 0
$$

### Application
Dual of the [shortest path example](/labyrinth/notes/math/co250/shortest_path_IP#^155c51) ^b6846b
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\newcommand\uwedge[4][]{
  \draw[#1] (#2) to node[auto] {#4} (#3);
}
\begin{document}
\begin{tikzpicture}[thick]

\node[vertex] (a) {a};
\node[vertex,below right=of a] (t) {t};
\node[vertex,below left=of a] (s) {s};
\node[vertex,below right=of s] (b) {b};

\uwedge[green]{s}{a}{3};
\uwedge{b}{s}{4};
\uwedge{a}{b}{1};
\uwedge[green]{a}{t}{2};
\uwedge{t}{b}{2};

\end{tikzpicture}
\end{document}
```
$$
\begin{array}{rl}
\min & (3,4,1,2,2)x \\[4pt]
& \hspace{20pt} \\
\text{s.t.} &
\begin{array}{@{}l@{\quad}c@{\;}l}
  &
  \begin{array}{ccccc}
    sa & sb & ab & at & bt
  \end{array}
  & \\[-3pt]
  \begin{array}{l}
    \{s\}\\
    \{s,a\}\\
    \{s,b\}\\
    \{s,a,b\}
  \end{array}
  &
  \left(
  \begin{array}{ccccc}
    1 & 1 & 0 & 0 & 0\\
    0 & 1 & 1 & 1 & 0\\
    1 & 0 & 1 & 0 & 1\\
    0 & 0 & 0 & 1 & 1
  \end{array}
  \right)
  & x \ge \mathbb{1}
\end{array} \\[10pt]
& x \ge \mathbb{0},\quad \cancel{ x\text{ integer} }
\end{array}\tag P
$$
> we can relax the integrality constraints without changing the optimal values for this IP
> note: this is not true for all IPs

$$
\begin{gather*}
\begin{array}{rl}
\max & \mathbb{1}^T y \\[4pt]
& \hspace{20pt} \\
\text{s.t.} &
\begin{array}{l} \phantom{sa} \\ sa \\ sb \\ ab \\ at \\ bt \end{array} \begin{array} {r} \begin{array} {c} \phantom{\text{ }} \end{array} \\ \left( \begin{array} \phantom{\text{ }} \\ \phantom{\text{ }} \\ \phantom{\text{ }} \\ \phantom{\text{ }} \\ \phantom{\text{ }} \end{array} \right. \end{array} \begin{array} {c} \{s\}\phantom{\text{ }} \\ 1 \\ 1 \\ 0 \\ 0 \\ 0 \end{array} \begin{array} {c} \phantom{\text{ }}\{s,a\}\phantom{\text{ }} \\ 0 \\ 1 \\ 1 \\ 1 \\ 0 \end{array} \begin{array} {c} \phantom{\text{ }}\{s,b\}\phantom{\text{ }} \\ 1 \\ 0 \\ 1 \\ 0 \\ 1 \end{array} \begin{array} {c} \phantom{\text{ }}\{s,a,b\} \\ 0 \\ 0 \\ 0 \\ 1 \\ 1 \end{array} \begin{array} {l} \begin{array} {c} \phantom{\text{ }} \end{array} \\ \left. \begin{array} {l} \phantom{\text{ }} \\ \phantom{\text{ }} \\ \phantom{\text{ }} \\ \phantom{\text{ }} \\ \phantom{\text{ }} \end{array} \right) y \leq \left(\begin{array} {c} 3 \\ 4 \\ 1 \\ 2 \\ 2 \end{array}\right)\end{array} \\[10pt]
& y \ge \mathbb{0}
\end{array}\tag D
\end{gather*}
$$