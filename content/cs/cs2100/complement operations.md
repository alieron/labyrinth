---
tags:
  - cs2100/chapter1
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/signed_numbers
next: /labyrinth/notes/cs/cs2100/excess-n

---
### Summary
1s complement
- **add 1** to the result if there's a carry out on MSB

2s complement
- **ignore** the carry out on MSB
### Concept
Overflow
- result of operation exceeds the range of the signed number
- occurs when the carry in and carry out of the MSB is different
- eg.
	- +ve + +ve -> -ve, or
	- -ve + -ve -> +ve
### Application
1s complement(4-bit)
$$
\begin{gather*}
\begin{array}{cr}
 & 3 \\
+ & 4 \\
\hline & 7
\end{array} & \begin{array}{cr}
 & 0011_{1s} \\
+ & 0100_{1s} \\
\hline & 0111_{1s}
\end{array} & \text{No Overflow} \\
\\
\begin{array}{cr}
 & -5 \\
+ & -2 \\
\hline & -7 \\
\\ \\
\end{array} & \begin{array}{cr}
 & 1010_{1s} \\
+ & 1101_{1s} \\
\hline & {\color{red}1 }0111_{1s} \\
+ & 1_{1s} \\
\hline & 1000_{1s}
\end{array} & \text{No Overflow} \\
\\
\begin{array}{cr}
 & -3 \\
+ & -7 \\
\hline & -10 \\
\\ \\
\end{array} & \begin{array}{cr}
 & 1100_{1s} \\
+ & 1000_{1s} \\
\hline & {\color{red}1 }0100_{1s} \\
+ & 1_{1s} \\
\hline & 0101_{1s}
\end{array} & {\color{red}\text{Overflow } 0101_{1s}=5_{10}} \\
\\
\begin{array}{cr}
 & 4 \\
+ & 5 \\
\hline & 9
\end{array} & \begin{array}{cr}
 & 0100_{1s} \\
+ & 0101_{1s} \\
\hline & 1001_{1s}
\end{array} & {\color{red}\text{Overflow } 1001_{1s}=-6_{10}} \\
\end{gather*}
$$

2s complement(4-bit)
$$
\begin{gather*}
\begin{array}{cr}
 & 3 \\
+ & 4 \\
\hline & 7
\end{array} & \begin{array}{cr}
 & 0011_{2s} \\
+ & 0100_{1s} \\
\hline & 0111_{2s} \\
\end{array} & \text{No Overflow} \\
\\
\begin{array}{cr}
 & -5 \\
+ & -2 \\
\hline & -7
\end{array} & \begin{array}{cr}
 & 1011_{2s} \\
+ & 1110_{2s} \\
\hline & {\color{red}1 }1001_{2s}
\end{array} & \text{No Overflow} \\
\\
\begin{array}{cr}
 & -3 \\
+ & -7 \\
\hline & -10
\end{array} & \begin{array}{cr}
 & 1101_{2s} \\
+ & 1001_{2s} \\
\hline & {\color{red}1 }0110_{2s}
\end{array} & {\color{red}\text{Overflow } 0110_{2s}=6_{10}} \\
\\
\begin{array}{cr}
 & 4 \\
+ & 5 \\
\hline & 9
\end{array} & \begin{array}{cr}
 & 0100_{2s} \\
+ & 0101_{2s} \\
\hline & 1001_{2s}
\end{array} & {\color{red}\text{Overflow } 1001_{2s}=-7_{10}} \\
\end{gather*}
$$