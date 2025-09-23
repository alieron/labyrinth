---
tags:
  - cs2040s/chapter4
  - cs/data_structures
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/priority_queue_ADT
next: /labyrinth/notes/cs/cs2040s/table_ADT

---
Implements: [priority queue ADT](/labyrinth/notes/cs/cs2040s/priority_queue_ADT)
### Summary

### Concept
Binary heap
- abstraction as a complete binary tree

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[very thick,level/.style={sibling distance=70mm/#1}]
\node [vertex] (r){1}
  child {
    node [vertex] (a) {2}
    child {
      node [vertex] {4}
      child {
        node [vertex] {8}
        child {node [vertex] {16}}
        child {node [vertex] {17}}
      }
      child {
        node [vertex] {9}
      }
    }
    child {
      node [vertex] {5}
      child {node [vertex] {10}}
      child {node [vertex] {11}}
    }
  }
  child {
    node [vertex] {3}
    child {
      node [vertex] {6}
      child {node [vertex] {12}}
      child {node [vertex] {13}}
    }
    child {
      node [vertex] {7}
      child {node [vertex] {14}}
      child {node [vertex] {15}}
    }
  };
\end{tikzpicture}
\end{document}
```

- concrete implementation as a [compact array](/labyrinth/notes/cs/cs2040s/compact_array), with 1-based indexing
```tikz
```
### Application

### Extra
