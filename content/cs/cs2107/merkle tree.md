---
tags:
  - cs2107/chapter3
  - cs/data_structures
  - cs/cryptography
complete: true
---
### Summary
Merkle tree
- [tree](/labyrinth/notes/cs/cs1101s/trees(cs)) structure

| Operation      | Method                                                                      | Performance              |
| -------------- | --------------------------------------------------------------------------- | ------------------------ |
| `insert(f)`    | propagate hash up to the root, add new subtree if full                      | - $O(\log n)$, amortized |
| `verify(i,j)`  | retrieve $h_{i-1}$ and $h_{j}$, calculate $h_{j}'$ and check $h_{j}'=h_{j}$ | - $O(\log n)$            |
| `update(i, f)` | propagate hash up to the root                                               | - $O(\log n)$            |
### Concept
Data structure
- complete binary tree - unfilled leaves are usually 0
- abit like divide-and-conquer

$$
\begin{align*}
\text{Leaves:}&& h_{i} &= H(f_{i})\\
\\
\text{Internal Nodes:}&&h_{i\dots j} &= H(h_{i\dots k}||h_{k+1\dots j})
\end{align*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node (18) {$h_{12345678}$}
  child {
    node (14) {$h_{1234}$}
    child {
      node (12) {$h_{12}$}
      child {
        node {$h_1$}
      }
      child {
        node {$h_2$}
      }
    }
    child {
      node {$h_{34}$}
      child {node {$h_3$}}
      child {node {$h_4$}}
    }
  }
  child {
    node {$h_{5678}$}
    child {
      node {$h_{56}$}
      child {node {$h_5$}}
      child {node {$h_6$}}
    }
    child {
      node {$h_{78}$}
      child {node {$h_7$}}
      child {node {$h_8$}}
    }
  };

\node[left=of 18] {$H(h_{1234}||h_{5678})=$};
\node[left=of 14] {$H(h_{12}||h_{34})=$};
\node[left=of 12] {$H(h_1||h_2)=$};
\end{tikzpicture}
\end{document}
```
### Application
Querying
- `query(1,4)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node (18) {$h_{12345678}$}
  child {
    node[red] (14) {$h_{1234}$}
    child {
      node (12) {$h_{12}$}
      child {
        node {$h_1$}
      }
      child {
        node {$h_2$}
      }
    }
    child {
      node {$h_{34}$}
      child {node {$h_3$}}
      child {node {$h_4$}}
    }
  }
  child {
    node {$h_{5678}$}
    child {
      node {$h_{56}$}
      child {node {$h_5$}}
      child {node {$h_6$}}
    }
    child {
      node {$h_{78}$}
      child {node {$h_7$}}
      child {node {$h_8$}}
    }
  };
\end{tikzpicture}
\end{document}
```
$$
\begin{align*}
\text{Retrieve:}&&& h_{1234} \\
\\
\text{Calculate:}&&& h_{1234}'\text{ from plaintext} \\
\\
\text{Verify:}&&& h_{1234}' = h_{1234}
\end{align*}
$$
- `query(1,3)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node (18) {$h_{12345678}$}
  child {
    node (14) {$h_{1234}$}
    child {
      node[red] (12) {$h_{12}$}
      child {
        node {$h_1$}
      }
      child {
        node {$h_2$}
      }
    }
    child {
      node {$h_{34}$}
      child {node[red] {$h_3$}}
      child {node {$h_4$}}
    }
  }
  child {
    node {$h_{5678}$}
    child {
      node {$h_{56}$}
      child {node {$h_5$}}
      child {node {$h_6$}}
    }
    child {
      node {$h_{78}$}
      child {node {$h_7$}}
      child {node {$h_8$}}
    }
  };
\end{tikzpicture}
\end{document}
```
$$
\begin{align*}
\text{Retrieve:}&&& h_{12},h_{3}\ \\
\\
\text{Calculate:}&&& h_{12}',\ h_{3}'\text{ from plaintext} \\
\\
\text{Verify:}&&& h_{12}' = h_{12} \\
&&& h_{3}' = h_{3}
\end{align*}
$$