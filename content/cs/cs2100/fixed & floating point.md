---
tags:
  - cs2100/chapter2
  - cs/low_level
  - lang/c
complete: true
prev: /labyrinth/notes/cs/cs2100/excess-n
next: /labyrinth/notes/cs/cs2100/pointers

---
### Summary
Representation of real numbers for more complex calculations

Fixed point
- fixed number of bits allocated to the integer and fraction parts
- limited range
- limited accuracy

```tikz
\usetikzlibrary{decorations.pathreplacing,positioning}

\begin{document}

\begin{tikzpicture}[every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  % Draw bits
  \node[fill=yellow!50, draw] (b7) {};
  \node[fill=yellow!50, right=0cm of b7, draw] (b6) {};
  \node[fill=yellow!50, right=0cm of b6, draw] (b5) {};
  \node[fill=yellow!50, right=0cm of b5, draw] (b4) {};
  \node[fill=yellow!50, right=0cm of b4, draw] (b3) {};
  \node[fill=green!40, right=0cm of b3, draw] (b2) {};
  \node[fill=green!40, right=0cm of b2, draw] (b1) {};
  
  % Braces for integer and fraction parts
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (b7.south west) -- (b3.south east) node[midway,below=6pt] {integer part};
  
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (b2.south west) -- (b1.south east) node[midway,below=6pt,xshift=8pt] {fraction part};
  
  % Arrow for binary point
  \draw[<-] (b3.south east) -- ++(0,-0.8) node[below] {assumed binary point};

\end{tikzpicture}

\end{document}
```

Floating point(IEEE 754)
- larger range
- single-precision(32 bits): 1 bit sign, 8 bit exponent in excess-127 and 23 bit mantissa
- double-precision(64 bits): 1 bit sign, 11 bit exponent in excess-1023 and 52 bit mantissa

```tikz
\usetikzlibrary{decorations.pathreplacing,positioning}

\begin{document}

\begin{tikzpicture}[every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  % Draw bits
  \node[fill=red!50, draw] (sign) {};
  \node[fill=blue!50, right=0cm of sign, draw, minimum width=4cm] (exponent) {};
  \node[fill=green!40, right=0cm of exponent, draw, minimum width=11.2cm] (mantissa) {};
  
  % Braces for sign, exponent and matissa
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (sign.south west) -- (sign.south east) node[midway,below=6pt] {sign};
  
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (exponent.south west) -- (exponent.south east) node[midway,below=6pt] {exponent};
    
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (mantissa.south west) -- (mantissa.south east) node[midway,below=6pt] {mantissa};

\end{tikzpicture}

\end{document}
```
> **excess-127** is used on 8 bits instead of **excess-256** to support more +ve exponents
### Application
Decimal to binary fixed point
- divide by 2 for integer part
- multiply by 2 for fraction part

$$
\begin{gather*}
& 12.5625_{10} \\
\\
\text{Integer Part: }& \begin{array}{c | l}
12  \\
\hline
6 & \text{rem } 0 \leftarrow \text{LSB} \\
\hline
3 & \text{rem } 0 \\
\hline
1 & \text{rem } 1 \\
\hline
0 & \text{rem } 1 \leftarrow \text{MSB}
\end{array} \\
\\
\text{Fraction Part: }& \begin{array}{r | l}
0.5625 \\
\hline
0.5625\times 2 = {\color{red}1}.125 & 1 \leftarrow \text{MSB} \\
\hline
0.125\times 2 = {\color{red}0}.25 & 0 \\
\hline
0.25\times 2 = {\color{red}0}.5 & 0 \\
\hline
0.5\times 2 = {\color{red}1} & 1 \leftarrow \text{LSB} \\
\end{array} \\
\\
& \therefore 12.5625_{10} = 1100.1001_{2} \\
\\
& \begin{array}{r c | c | c | c | c | c | c | c}
\text{binary:} & 1 & 1 & 0 & 0. & 1 & 0 & 0 & 1 \\
\hline
\text{weights:} & 2^3 & 2^2 & 2^1 & 2^0 & 2^{-1} & 2^{-2} & 2^{-3} & 2^{-4}
\end{array}
\end{gather*}
$$

Binary fixed point to floating point(single-precision)
$$
\begin{gather*}
& 1100.1001_{2} \\
\\
\text{Normalise: } & 1100.1001_{2} = (1.\underbrace{ 1001001 }_{ \text{mantissa} })_{2} \times \underbrace{ 2^{3} }_{ \text{exponent} } \\
\\
\text{Sign: } & + \to 0 \\
\\
\text{Exponent: } & 3 + 127 = 130 = 10000010_{2} \\
\\
\text{IEEE 754:} & \underbrace{ 0\ 100 }_{ 4 }\underbrace{ 0001 }_{ 1 }\underbrace{ 0 \ 100 }_{ 4 }\underbrace{ 1001 }_{ 9 }\underbrace{ 0000 }_{ 0 }\underbrace{ 0000 }_{ 0 }\underbrace{ 0000 }_{ 0 }\underbrace{ 0000 }_{ 0 } = 41490000_{16}
\end{gather*}
$$

Floating point to decimal
$$
\begin{gather*}
& 3bd80000_{16} \\
\\
\text{IEEE 754: } & \underbrace{ 3 }_{ 0\ \ 011 }\underbrace{ b }_{ 1\ \ 011 }\underbrace{ d }_{ 1\ \ 101 }\underbrace{ 8 }_{ 1\ \ 000 }0000 \\
\\
\text{Sign: } & 0 \to + \\
\\
\text{Exponent: } & \begin{split}
01110111_{2}=119 \\
119 - 127 = -8
\end{split} \\
\\
\text{Decimal: } & \begin{split}
 1.1011_{2} \times 2^{-8} & = 2^{-8} + 2^{-9} + 2^{-11} + 2^{-12} \\
 \text{or}\\
 & = (1 + 0.5 + 0.125 + 0.0625) \times 2 ^{-8} \\
 & =  0.006591796\dots
\end{split}
\end{gather*}
$$

Complements of fixed points
- ignore the decimal

$$
-0101.01_{2} = 1010.10_{1s} = 1010.11_{2s}
$$

Scientific notation
```c
float AVOGADRO = 6.022E23;
float GRAV = 6.6743e-11; // both E and e are fine

double COSMOLOGICAL = 1.089E-52;
```