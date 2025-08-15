---
tags:
- cs1101s/chapter3
- cs/data_structures
- cs/fundamentals
- lang/js
complete: true
---
### Summary
Concept of a buffer
```js
// initialisation
const x = [1, 2, 3];
// indexing
const a = x[1];
// assignment
x[4] = 4;
// length
array_length(x); // 5
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=1em and 3.5em}}
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
  \node (start) {$x$};
  \node[draw,cell,right=of start] (0) {1};
  \node[draw,cell,xshift=\boxsize] (1) at (0) {2};
  \node[draw,cell,xshift=\boxsize] (2) at (1) {3};
  \node[draw,cell,xshift=\boxsize] (3) at (2) {};
  \node[draw,cell,xshift=\boxsize] (4) at (3) {4};
  \node[yshift=2*\boxsize] (x0) at (0) {$x[0]$};
  \node[yshift=2*\boxsize] (x4) at (4) {$x[4]$};
  \node[yshift=-2*\boxsize] (a) at (1) {$a$};
  \draw[arrows={-Latex}] (start.east)--(0);
  \draw[arrows={-Latex}] (x0.south)--(0);
  \draw[arrows={-Latex}] (x4.south)--(4);  
  \draw[arrows={-Latex}] (a.north)--(1);  
\end{tikzpicture}
\end{document}
```
### Concept
An array is a sequence of elements
Elements in the array can be initialised, [assigned](/labyrinth/notes/cs/cs1101s/mutable_data) or indexed

Random access -> constant time read and write, except if writing to an index larger than array length
$$
i\geq \text{array\_length(A)}, \ \Theta(i-\text{array\_length(A)})
$$
### Application
Array processing functions
Main idea:
- iterate through the elements in the array
```js
function map_array(f, arr) {
	const len = array_length(arr);     
	function iter(i) {         
		if (i < len) {             
			arr[i] = f(arr[i]);             
			iter(i + 1);
		}    
	}     
	iter(0); 
}
const seq = [3, 1, 5]; 
map_array(x => 2 * x, seq); 
seq; // -> [6, 2, 10];  destructive operation 

function array_1_to_n(n) {     
	const a = [];     
	function iter(i) {         
		if (i < n) {             
			a[i] = i + 1;             
			iter(i + 1);         
		}     
	}     
	iter(0);     
	return a; 
} 
array_1_to_n(3);  // -> [1, 2, 3] 
```

[Matricies](/labyrinth/notes/math/ma1522/matrices) as 2d arrays, 3 by 4 matrix ^0bd712
$$
\begin{pmatrix}
1 & 2 & 3 & 4 \\
5 & 6 & 7 & 8 \\
9 & 10 & 11 & 12
\end{pmatrix}
$$
```js
const matrix = [[1,  2,  3,  4],
				[5,  6,  7,  8],
				[9, 10, 11, 12]]
```
###### Note
Some programming languages, ie. Python, do not allow assignment to indexes out of the range of the array
In Source/JS, the value is assigned regardless if the index is already initialised, any in-between indices are left as undefined