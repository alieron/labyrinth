---
tags:
- cs1101s/chapter4
- cs/models
complete: true
prev: /labyrinth/notes/cs/cs1101s/memoization

---
### Concept
Abstraction for "tokenizing" the syntax of a programming language and handling its evaluation

Self-compiling languages
- running JS/Source programmes using a program written in JS/Source itself 

Abstrations
1. Symbol(variable) initialization - variables are noted, temporarily "unassigned"
2. Value assignment - values are assigned to the symbols
3. Frames and environments - handle how variables can be accessed

Tagged list
- general purpose [lists](/labyrinth/notes/cs/cs1101s/lists) for storing information and its context(tag)

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