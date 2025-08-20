---
tags:
  - cs2100/chapter1
  - cs/low_level
  - lang/pgf-tikz
complete: true
prev: /labyrinth/notes/cs/cs2100/number_systems
next: /labyrinth/notes/cs/cs2100/complement_operations

---
### Summary
Sign-and-magnitude
- negate by inverting the sign bit
$$
\begin{array}{rc}
\text{Largest:} & 0111 1111_{sm}=127_{10} \\
\text{Smallest:} & 1111 1111_{sm}=-127_{10} \\
\text{Zeros:} & 0000 0000_{sm}=0_{10} \\
 & 1000 0000_{sm}=-0_{10} \\
\text{Range(8-bit):} & [-127_{10}, 127_{10}] \\
\text{Range(n-bit):} & [-(2^{n-1}-1), 2^{n-1}-1] 
\end{array}
$$

1s complement
- negate by inverting all the bits
$$
\begin{array}{rc}
\text{Largest:} & 0111 1111_{sm}=127_{10} \\
\text{Smallest:} & 1000 0000_{sm}=-128_{10} \\
\text{Zeros:} & 0000 0000_{sm}=0_{10} \\
 & 1111 1111_{sm}=-0_{10} \\
\text{Range(8-bit):} & [-127_{10}, 127_{10}] \\
\text{Range(n-bit):} & [-(2^{n-1}-1), 2^{n-1}-1]
\end{array}
$$

2s complement ^bc6f6a
- negate by inverting all the bits then add 1(cpu method)
- or from LSB, preserve 0s and first 1, invert everything else
$$
\begin{array}{rc}
\text{Largest:} & 0111 1111_{sm}=127_{10} \\
\text{Smallest:} & 1111 1111_{sm}=-127_{10} \\
\text{Zero:} & 0000 0000_{sm}=0_{10} \\
\text{Range(8-bit):} & [-128_{10}, 127_{10}] \\
\text{Range(n-bit):} & [-2^{n-1}, 2^{n-1}-1]
\end{array}
$$
> Note the ranges of [C primitive types](/labyrinth/notes/cs/cs2100/data_representation#^9f8289), indicating that C uses 2s complement for -ve numbers
### Concept
Sign-and-magnitude
- 1 bit sign, remaining bits magnitude
- 0 for +ve, 1 for -ve
```tikz
\usetikzlibrary{decorations.pathreplacing,positioning}

\begin{document}

\begin{tikzpicture}[every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  % Draw bits
  \node[fill=red!50, draw] (sign) {};
  \node[fill=yellow!50, right=0cm of sign, draw, minimum width=5.6cm] (magnitude) {};
  
  % Braces for sign, exponent and matissa
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (sign.south west) -- (sign.south east) node[midway,below=6pt] {sign};
  
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (magnitude.south west) -- (magnitude.south east) node[midway,below=6pt] {magnitude};

\end{tikzpicture}

\end{document}
```

1s complement
- better for arithmetic
$$
-x = 2^n-x-1
$$

2s complement
- removes duplicate 0
$$
-x=2^n-x
$$
### Application
Sign-and-magnitude
$$
\begin{gather*}
{\color{red}0}0110100_{sm} = 0110100_{2} = 52_{10}\\
\\
{\color{red}1}0010011_{sm} = -10011_{2}=-19_{10}
\end{gather*}
$$

Complements(8-bit)
$$
\begin{gather*}
+100 1101_{2} = 0100 1101_{sm}=0100 1101_{1s}=0100 1101_{2s} \\
\\
-100 1101_{2} = 1100 1101_{sm}=1011 0010_{1s}=1011 0011_{2s}
\end{gather*}
$$
> Number is unchanged regardless of representation when +ve

Sum to 0
$$
\begin{gather*}
& 0101 1010_{2} = 0101 1010_{1s} = 0101 1010_{2s} \\
\text{Negation: } & 1010 0101_{1s} = 1010 0110_{2s} \\
\\
& \begin{array}{cr}
 & 0101 1010_{1s} \\
+ & 1010 0101_{1s} \\
\hline
 & 1111 1111_{1s}
\end{array} & 1111 1111_{1s} = -0_{10} \\
\\
& \begin{array}{cr}
 & 0101 1010_{2s} \\
+ & 1010 0110_{2s} \\
\hline
 & {\color{red}1 }0000 0000_{1s}
\end{array} & 0000 0000_{1s} = 0_{10}
\end{gather*}
$$
> number + complement = 0
### Extra
Tikz template for bit box diagrams
```latex
\usetikzlibrary{decorations.pathreplacing,positioning}

\begin{document}

\begin{tikzpicture}[every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  % Draw bits
  \node[fill=red!50, draw] (sign) {};
  \node[fill=yellow!50, right=0cm of sign, draw, minimum width=5.6cm] (magnitude) {};
  
  % Braces for sign, exponent and matissa
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (sign.south west) -- (sign.south east) node[midway,below=6pt] {sign};
  
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (magnitude.south west) -- (magnitude.south east) node[midway,below=6pt] {magnitude};

\end{tikzpicture}

\end{document}
```