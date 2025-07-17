---
tags:
  - cs/models
  - cs1101s/chapter4
complete: true
index:
---
[Previous](/labyrinth/notes/cs/cs1101s/memoization)

### Summary
1. Symbol initialization - variables are noted, temporarily "unassigned"
2. Value assignment - values are assigned to the symbols

Frames and environments
- Nested in lists

### Concept
Self-compiling languages
- Running JS/Source programmes using a programme written in JS/Source itself 

Tagged list
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=2em and 3.5em}}
\newcommand\ptr[2]%
  {
    \draw[arrows={-Latex}] (#1.center)--(#2);
  }
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }
\newcommand\pair[4][]%
  {
    \node[draw,cell,#1] (#2) {#3};
    \node[draw,cell,anchor=west] (#2tail) at (#2.east) {#4};
  }
% 
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \pair{p1}{\ "tag" \ }{}
  \node[right=of p1tail] (p2) {"info"};
  \ptr{p1tail}{p2}
\end{tikzpicture}
\end{document}
```