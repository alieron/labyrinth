---
tags:
  - cs/fundamentals
complete: false
---
Succeeds: [recursion](/labyrinth/notes/cs/cs1101s/recursion)
### Summary
Recursion tree
- way of modeling recursive functions
- recursive calls that depend on other recursive calls/the base case(s)
- `fib(5)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1},edge from parent/.style={<-,draw}]
\node [vertex] {5}
  child {
    node [vertex] {4}
    child {
      node [vertex] {3}
	    child {
	      node [vertex] {2}
	      child {node [vertex] {1}}
	      child {node [vertex] {0}}
	    }
	    child {
	      node [vertex] {1}
	    }
    }
    child {
      node [vertex] {2}
			child {node [vertex] {1}}
			child {node [vertex] {0}}
    }
  }
  child {
    node [vertex] {3}
    child {
      node [vertex] {2}
      child {node [vertex] {1}}
      child {node [vertex] {0}}
    }
    child {
      node [vertex] {1}
    }
  };
\end{tikzpicture}
\end{document}
```

Recursion DAG
- recursive function + [memoization](/labyrinth/notes/cs/cs1101s/memoization)
- `fib(5)`, with memoization

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\node[vertex] (0) {0};
\node[vertex,below right=of 0] (1) {1};
\node[vertex,above right=of 1] (2) {2};
\node[vertex,below right=of 2] (3) {3};
\node[vertex,above right=of 3] (4) {4};
\node[vertex,below right=of 4] (5) {5};

\draw[<-] (5) -- (4);
\draw[<-] (5) -- (3);
\draw[<-] (4) -- (3);
\draw[<-] (4) -- (2);
\draw[<-] (3) -- (2);
\draw[<-] (3) -- (1);
\draw[<-] (2) -- (1);
\draw[<-] (2) -- (0);
\end{tikzpicture}
\end{document}
```
> see that modelling recursion this way is similar to [dynamic programming](/labyrinth/notes/cs/cs2040s/dynamic_programming), we have to solve the smaller problems first
### Application
