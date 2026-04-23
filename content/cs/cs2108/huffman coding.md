---
tags:
  - cs2108/chapter8
  - cs/compression
complete: false
next: /labyrinth/notes/cs/cs2108/LZW_compression
prev: /labyrinth/notes/cs/cs2108/DCT

---
### Concept
#### Huffman coding
- lossless compression
- high frequency symbols are given the shortest length code
- prefix code, symbols can have different length codes
- need to provide dictionary (overhead)
- used in:
	- PNG
	- JPEG (end)

Algorithm
1. sort the symbols by frequency
2. join the two smallest groups together, add the total frequency
	- a group is either:
		- a symbol
		- a pair of groups
3. repeat step 2 until there is only one group encompassing all the symbols
4. form the huffman tree
5. form the dictionary
<br>
```
abaabc
```

- frequency table

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,decorations.pathreplacing}
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}

% Table nodes  
\node[draw,cell] (a) {a};
\node[draw,cell,right=of a] (an) {3};
\node[draw,cell,below=of a] (b) {b};
\node[draw,cell,right=of b] (bn) {2};
\node[draw,cell,below=of b] (c) {c};
\node[draw,cell,right=of c] (cn) {1};

% Braces for first merge (b and c)  
\draw[decorate,decoration={brace,amplitude=5pt}] (bn.north east) -- (cn.south east)
node[midway,right=5pt]{N1/3};

% Braces for second merge (a and combined bc)  
\draw[decorate,decoration={brace,amplitude=5pt}] ([xshift=1.5cm]an.north east) -- ([xshift=1.5cm]cn.south east)
node[midway,right=5pt]{N2/6};

\end{tikzpicture}
\end{document}
```

- huffman tree

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw, rectangle, minimum width=1cm, align=center]

\begin{document}
\begin{tikzpicture}
% Root  
\node (root) {N2} % total frequency  
	% Left child  
	child { node [vertex] {a} edge from parent node[above left]{0} }  
	% Right child  
	child { node {N1}
		child { node [vertex] {b} edge from parent node[above left]{0} }  
		child { node [vertex] {c} edge from parent node[above right]{1} } 
		edge from parent node[above right]{1}
	};
\end{tikzpicture}
\end{document}
```
> huffman trees defer from [prefix trees](#) since only the leaf nodes 

- dictionary
$$
\begin{array}{|c|c|}
\hline
0 & \text{a} \\
\hline
10 & \text{b} \\
\hline
11 & \text{c} \\
\hline
\end{array}
$$
> the code is a prefix code, so no prefix of any code is another code that encodes a symbol

```
  abaabc -> 0 10 0 0 10 11
6×8 bits    9 bits + dict
```
### Application
Encoding text (short)

```
this is an example for huffman encoding
```

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,decorations.pathreplacing}
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}

% Table nodes  
\node[draw,cell] (a) {a};
\node[draw,cell,right=of a] (an) {3};
\node[draw,cell,below=of a] (b) {b};
\node[draw,cell,right=of b] (bn) {2};
\node[draw,cell,below=of b] (c) {c};
\node[draw,cell,right=of c] (cn) {1};

% Braces for first merge (b and c)  
\draw[decorate,decoration={brace,amplitude=5pt}] (bn.north east) -- (cn.south east)
node[midway,right=5pt]{N1/3};

% Braces for second merge (a and combined bc)  
\draw[decorate,decoration={brace,amplitude=5pt}] ([xshift=1.5cm]an.north east) -- ([xshift=1.5cm]cn.south east)
node[midway,right=5pt]{N2/6};

\end{tikzpicture}
\end{document}
```

| space | 6   |
| ----- | --- |
| N     | 4   |
| A     | 3   |
| E     | 3   |
| F     | 3   |
| I     | 3   |
| H     | 2   |
| M     | 2   |
| O     | 2   |
| S     | 2   |
| C     | 1   |
| D     | 1   |
| G     | 1   |
| L     | 1   |
| P     | 1   |
| R     | 1   |
| T     | 1   |
| U     | 1   |
| X     | 1   |

Encoding text (long)
```
data compression is the process of encoding information using fewer bits than the original representation compression can be either lossy or lossless
```

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,decorations.pathreplacing}
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}

% Table nodes  
\node[draw,cell] (a) {a};
\node[draw,cell,right=of a] (an) {3};
\node[draw,cell,below=of a] (b) {b};
\node[draw,cell,right=of b] (bn) {2};
\node[draw,cell,below=of b] (c) {c};
\node[draw,cell,right=of c] (cn) {1};

% Braces for first merge (b and c)  
\draw[decorate,decoration={brace,amplitude=5pt}] (bn.north east) -- (cn.south east)
node[midway,right=5pt]{N1/3};

% Braces for second merge (a and combined bc)  
\draw[decorate,decoration={brace,amplitude=5pt}] ([xshift=1.5cm]an.north east) -- ([xshift=1.5cm]cn.south east)
node[midway,right=5pt]{N2/6};

\end{tikzpicture}
\end{document}
```

| space | 21  |
| ----- | --- |
| S     | 16  |
| E     | 15  |
| O     | 14  |
| I     | 12  |
| N     | 12  |
| R     | 10  |
| T     | 9   |
| A     | 7   |
| C     | 5   |
| H     | 4   |
| L     | 4   |
| P     | 4   |
| F     | 3   |
| G     | 3   |
| M     | 3   |
| B     | 2   |
| D     | 2   |
| U     | 1   |
| W     | 1   |
| Y     | 1   |