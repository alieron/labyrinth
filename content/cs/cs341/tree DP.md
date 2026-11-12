---
tags:
  - cs341/chapter4
  - cs/dynamic_programming
  - cs/graphs
  - cs/algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/alignment_DP
next: /labyrinth/notes/cs/cs341/graph_DP

---
### Concept
#### Largest Independent Set in Trees

I(v) = size of largest independent set of the subtree rooted at v

base cases
fo leaf l, I(l) = 1

option 1
v in largest independent set

if v is included, then its children cannot, we must sum the grandchildren

val_1 = 1 + $\sum_{w\text{ grandchild of }v} I(w)$

option 2
v not in largest independent set

if v is not included, then we can sum the children

val_2 = $\sum_{w\text{ child of }v} I(w)$

combine
I(v) = max{val_1, val_2}


Time complexity
$O(n)$


#### Optimal Binary Search Tree
Problem
- input: $n$ keys $k_{1},\dots,k_{n}$ with frequencies $f_{1},\dots,f_{n}$
- output: [BST](/labyrinth/notes/cs/cs2040s/BST) $T$ that minimizes $\sum_{i=1}^{n}f_{i}\cdot \operatorname{depth}_{T}(k_{i})$

Example
$$
\begin{gather*}
k_{1}\leq k_{2}\leq k_{3}\leq k_{4}\leq k_{5} \\
\\
f_{1} = 0.1, \quad f_{2} = 0.2, \quad f_{3}=0.25, \quad f_{4} = 0.05, \quad f_{5} = 0.4
\end{gather*}
$$

Greedy approach
- doesn't work



```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] at(0,0) (5) {$k_5$};
\node[vertex] at(-2,-1) (3) {$k_3$};
\node[vertex] at(-1,-2) (4) {$k_4$};
\node[vertex] at(-3,-2) (2) {$k_2$};
\node[vertex] at(-4,-3) (1) {$k_1$};

\draw [-, thick] (5) to (3);
\draw [-, thick] (3) to (4);
\draw [-, thick] (3) to (2);
\draw [-, thick] (2) to (1);
\end{tikzpicture}
\end{document}
```
$$
0.1\times 4+0.2 \times 3 + 0.25\times 2 + 0.05 \times  3 + 0.4 \times 1 = 2.05
$$

C(i, j) = objective value of the best BST for keys $k_{i},\dots, k_{j}$

base case
C(i, i) = f_i


combine
pick a vertex l to be the root
$$
\begin{align*}
C(i, j) &= \min_{i<l<j}\left\{ \underbrace{ C(i,l-1)+\sum_{m=i}^{l-1}f_{m} }_{ \text{left subtree} } + \underbrace{ f_{l} }_{ \text{root} } + \underbrace{ C(i+1, j) + \sum_{m=l+1}^{j} f_{m} }_{ \text{right subtree} } \right\} \\
\\
&= \min_{i<l<j}\left\{ C(i,l-1)+\underbrace{ \sum_{m=i}^{l-1}f_{m} + f_{l} + \sum_{m=l+1}^{j} f_{m}  }_{ \sum_{m=i}^{j} f_{m} }+ C(i+1, j) \right\} \\
\\
&= \sum_{m=i}^{j} f_{m} + \min_{i<l<j}\left\{ C(i,l-1)+ C(i+1, j) \right\}
\end{align*}
$$


Bottom-up
increasing order of j-i


Time complexity
$O(n^{3})$
