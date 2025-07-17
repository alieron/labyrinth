---
tags:
  - cs/data_structures
  - cs1101s/chapter2
  - lang/js
complete: true
index:
---

### Summary
Tree of numbers
```js
const tree = list(list(1,2), 3, list(4));

// Box notation: [1, [2, null](#), [3, [[4, null], null]]]
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
% 
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (start) {tree};
  \pair[right=of start]{p1}{}{}
  \pair[below=of p1]{p2}{1}{}
  \pair[right=of p2]{p3}{2}{}
  \pair[right=of p1]{p4}{3}{}
  \pair[right=of p4]{p5}{}{}
  \pair[below=of p5]{p6}{4}{}
  \draw[arrows={-Latex}] (start.east)--(p1);
  \ptr{p1}{p2}
  \ptr{p2tail}{p3}
  \ptr{p1tail}{p4}
  \ptr{p4tail}{p5}
  \ptr{p5}{p6}
  \pnull{p3tail}
  \pnull{p5tail}
  \pnull{p6tail}
\end{tikzpicture}
\end{document}
```

### Concept
A tree of data type T is either:
- *null*
- or a pair,
	- whose tail is a tree of type T
	- and whose head is type T or a tree of type T

Every tree is a list, made up only of data type T and _null_

### Application
Tree processing functions
Main idea:
- if tree/list is empty return base case
- if not empty, process the head and tail of the tree
```js
function count_data_items(tree) {
	return is_null(tree)            
		   ? 0            
		   : (is_list(head(tree))               
			   ? count_data_items(head(tree))                
			   : 1 ) +
			 count_data_items(tail(tree));
}

function map_tree(f, tree) {     
	return map(sub_tree => !is_list(sub_tree) // check if not a list
						   ? f(sub_tree)      // if it is a number, apply the function              
						   : map_tree(f, sub_tree), // apply map_tree on the head as well
			   tree);
} 