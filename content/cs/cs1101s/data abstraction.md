---
tags:
  - cs/data_structures
  - cs/models
  - cs1101s/chapter2
  - lang/js
complete: true
index:
---
[Previous](/labyrinth/notes/cs/cs1101s/higher_order_functions)   [Next](/labyrinth/notes/cs/cs1101s/searching)

### Summary
Pairs
```js
const x = pair(1, 2);
```

Box and pointer diagrams
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
    \node[draw,cell,xshift=\boxsize] (#2tail) at (#2) {#4};
  }
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (start) {$x$};
  \pair[right=of start]{p1}{1}{2}
  \draw[arrows={-Latex}] (start.east)--(p1);
\end{tikzpicture}
\end{document}
```

### Concept
Primitive form of data abstraction using pairs to store 2 values
Second value can be used to store another pair, into a chain of pairs
First value can also be a pair, to form a tree of pairs
```js
const p = pair(a, b) // -> [a, b]

head(p) // -> a
tail(p) // -> b
```

Further abstracted to [lists](/labyrinth/notes/cs/cs1101s/lists), [trees(cs)](/labyrinth/notes/cs/cs1101s/trees(cs)) and [arrays](/labyrinth/notes/cs/cs1101s/arrays)

Equality vs Identity
\=== -> Equal by identity
equal() -> Equal by value
```js
const a = pair(1, 2);
const b = a;
const c = pair(1, 2);

a === b; // -> true
a === c; // -> false

equal(a, b); // -> true
equal(a, c); // -> true
```
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
    \node[draw,cell,xshift=\boxsize] (#2tail) at (#2) {#4};
  }
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \pair{p1}{1}{2}
  \node[left=of p1,yshift=6pt] (start) {$a$};
  \node[left=of p1,yshift=-6pt] (start2) {$b$};
  \draw[arrows={-Latex}] (start.east)--(p1);
  \draw[arrows={-Latex}] (start2.east)--(p1);
  \node[right=of p1] (start3) {$c$};
  \pair[right=of start3]{p2}{1}{2}
  \draw[arrows={-Latex}] (start3.east)--(p2);
\end{tikzpicture}
\end{document}
```

###### Extra
Tikz template for box and pointer diagrams
```latex
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
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (start) {list};
  \pair[right=of start]{p1}{10}{}
  \pair[right=of p1]{p2}{}{}
  \pair[below=of p2]{p3}{40}{}
  \ptr{p1tail}{p2}
  \ptr{p2}{p3}
  \ptr{p2tail}{p3}
  \draw[arrows={-Latex}] (start.east)--(p1);
  \pnull{p3tail}
\end{tikzpicture}
\end{document}
```