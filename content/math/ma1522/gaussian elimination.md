---
tags:
- lang/octave
- ma1522/chapter1
- math/linear_algebra
complete: true
prev: /labyrinth/notes/math/ma1522/linear_systems
next: /labyrinth/notes/math/ma1522/matrices
---

   

### Summary
Linear systems as augmented matrices
$$
\left(\begin{array}{c c c c | c}
a_{11} & a_{21} & \cdots & a_{n1} & b_{1} \\
a_{12} & a_{22} & \cdots & a_{n2} & b_{2}\\
\vdots & \vdots & \ddots & \vdots & \vdots\\
a_{1m} & a_{2m} & \cdots & a_{nm} & b_{m}
\end{array}\right) \quad
\begin{array}{}
R_{1} \\ R_{2} \\  \\ R_{m}
\end{array}
$$

Existence and Uniqueness Theorem
- A linear system is consistent iff the rightmost column is not a pivot column

$$
\text{No rows such that: }
\begin{pmatrix}
0 & 0 & \cdots & 0 & *
\end{pmatrix}, \ * \neq 0
$$

Number of parameters in general solution
$$
\begin{gather*}
\text{no. pivot cols} &=& \text{no. nonzero rows} &=& \text{no. basic variables} \\
\\
\text{total no. rows} &-& \text{no. pivot cols} &=& \text{no. of parameters}
\end{gather*}
$$
> for the matrix in RREF

### Concept
Elementary row operations(reversible) ^962797
- Interchanging, $R_{1}\leftrightarrow R_{2}$
- Scaling, $aR_{1}, \ r\neq0$
- Add multiple, $R_{1}+aR_{2}$

Gaussian elimination, reduce to [REF](/labyrinth/notes/math/ma1522/row_echelon_form#^17a789)
1. Begin with leftmost nonzero column, it is a pivot column
2. Interchange the top row if necessary, to bring a non-zero entry to the top of the column 
3. Add a multiple of the top row to the other rows to make the rest of the column 0
4. Repeat 1-3 on the next row below
Gauss-Jordan elimination, reduce to [RREF](/labyrinth/notes/math/ma1522/row_echelon_form#^259d40)
6. Scale each row such that their leading entry is a 1
7. Working back upwards, add multiples of lower rows to introduce 0s above the leading entries

Row equivalent matrices ^151bcb
$$
\mathbf{A}\to \mathbf{B} \implies \mathbf{A}\text{ is row equivalent to }\mathbf{B}
$$
> they have the same solution set 

Unknown constants in system
- Consider cases where the pivot entries(in REF) with unknowns = 0

Intuition for row reduction ^0aa696
- an expression of columns as <span style="color:rgb(255, 167, 40)">multiples of the first n columns</span>

###### Octave
```octave

# find the rref of a matrix
rref([1 2 3;
	  4 5 6;
	  7 8 9])

> ans =
>
>   1   0  -1
>   0   1   2
>   0   0   0
```

### Application
Row reduction
$$
\begin{gather*}
\begin{pmatrix}
3 & -9 & 12 & -9 & 6 & 15 \\
3 & -7 & 8 & -5 & 8 & 9 \\
0 & 3 & -6 & 6 & 4 & -5
\end{pmatrix} \\
\xrightarrow{ R_{2}-R_{1} }\begin{pmatrix}
3 & -9 & 12 & -9 & 6 & 15 \\
0 & 2 & -4 & 4 & 2 & -6 \\
0 & 3 & -6 & 6 & 4 & -5
\end{pmatrix} \\
\xrightarrow{ R_{3}-\frac{3}{2}R_{2} }\begin{pmatrix}
3 & -9 & 12 & -9 & 6 & 15 \\
0 & 2 & -4 & 4 & 2 & -6 \\
0 & 0 & 0 & 0 & 1 & 4
\end{pmatrix} \qquad & \text{(REF)}\\
\xrightarrow{ R_{2}-2R_{3} }\xrightarrow{ R_{1}-6R_{3} }\begin{pmatrix}
3 & -9 & 12 & -9 & 0 & -9 \\
0 & 2 & -4 & 4 & 0 & -14 \\
0 & 0 & 0 & 0 & 1 & 4
\end{pmatrix} \\
\xrightarrow{ \frac{1}{2}R_{2} }\begin{pmatrix}
3 & -9 & 12 & -9 & 0 & -9 \\
0 & 1 & -2 & 2 & 0 & -7 \\
0 & 0 & 0 & 0 & 1 & 4
\end{pmatrix} \\
\xrightarrow{ R_{1}+9R_{2} }\begin{pmatrix}
3 & 0 & -6 & 9 & 0 & -72 \\
0 & 1 & -2 & 2 & 0 & -7 \\
0 & 0 & 0 & 0 & 1 & 4
\end{pmatrix} \\
\xrightarrow{ \frac{1}{3}R_{1} }\begin{pmatrix}
1 & 0 & -2 & 3 & 0 & -24 \\
0 & 1 & -2 & 2 & 0 & -7 \\
0 & 0 & 0 & 0 & 1 & 4
\end{pmatrix} \qquad & \text{(RREF)} \\
\end{gather*}
$$

Consistent system (one solution)
$$
\begin{gather*}
\begin{array} {c c c c}
x_1 & − 2x_2 & + x_{3} & = & 0 \\
& 2x_2 & -8x_3 & = & 8 \\
-4x_1 & + 5x_{2} & + 9x_{3} & = & -9
\end{array} \\
\\
\left(\begin{array}{c c c | c}
1 & -2 & 1 & 0 \\
0 & 2 & -8 & 8 \\
-4 & 5 & 9 & -9
\end{array}\right) \\
\xrightarrow{ R_{3}+4R_{1} }\left(\begin{array}{c c c | c}
1 & -2 & 1 & 0 \\
0 & 2 & -8 & 8 \\
0 & -3 & 13 & -9
\end{array}\right) \\
\xrightarrow{ \frac{1}{2}R_{2} }\left(\begin{array}{c c c | c}
1 & -2 & 1 & 0 \\
0 & 1 & -4 & 4 \\
0 & -3 & 13 & -9
\end{array}\right) \\
\xrightarrow{ R_{3}+3R_{2} }\left(\begin{array}{c c c | c}
1 & -2 & 1 & 0 \\
0 & 1 & -4 & 4 \\
0 & 0 & 1 & 3
\end{array}\right) & \text{(Triangular form)} \\
\xrightarrow{ R_{2}+4R_{3} }\left(\begin{array}{c c c | c}
1 & -2 & 1 & 0 \\
0 & 1 & 0 & 16 \\
0 & 0 & 1 & 3
\end{array}\right) \
\xrightarrow{ R_{1}-R_{3} }\left(\begin{array}{c c c | c}
1 & -2 & 0 & -3 \\
0 & 1 & 0 & 16 \\
0 & 0 & 1 & 3
\end{array}\right) \\
\xrightarrow{ R_{1}+2R_{2} }\left(\begin{array}{c c c | c}
1 & 0 & 0 & 29 \\
0 & 1 & 0 & 16 \\
0 & 0 & 1 & 3
\end{array}\right) \\
\\
\therefore x_{1} = 29, \ x_{2}=16, \ x_{3}=3
\end{gather*}
$$

Consistent systems (infinite solutions), insert a parameter
$$
\begin{gather*}
\begin{array} {c c c c}
x_{1} &  & -5x_{3} & = & 1 \\
 & x_2 & +x_3 & = & 4 \\
\end{array} \\
\\
\left(\begin{array}{c c c | c}
1 & 0 & -5 & 1 \\
0 & 1 & 1 & 4 \\
\end{array}\right) \\
\\
\to\left(\begin{array}{c c c | c}
1 & 0 & -5 & 1 \\
0 & 1 & 1 & 4 \\
0 & 0 & 1 & s
\end{array}\right) && \text{(Assign }x_{3}\text{ to parameter }s\text{)} \\
\\
\xrightarrow{ R_{2}-R_{3} }\xrightarrow{ R_{1}+5R_{3} }\left(\begin{array}{c c c | c}
1 & 0 & 0 & 1 + 5s\\
0 & 1 & 0 & 4 -s \\
0 & 0 & 1 & s
\end{array}\right) \\
\\
\therefore x_{1} = 1+5s, \ x_{2}=4-x, \ x_{3}=s, \ s \in \mathbb{R}
\end{gather*}
$$

Inconsistent systems
$$
\begin{gather*}
\begin{array} {c c c c}
& x_2 & -4x_{3} & = & 8 \\
2x_{1} & -3x_2 & +2x_3 & = & 1 \\
5x_1 & -8x_{2} & +7x_{3} & = & 1
\end{array} \\
\\
\left(\begin{array}{c c c | c}
0 & 1 & -4 & 8 \\
2 & -3 & 2 & 1 \\
5 & -8 & 7 & 1
\end{array}\right) \\
\xrightarrow{ R_{1}\leftrightarrow R_{2} }\left(\begin{array}{c c c | c}
2 & -3 & 2 & 1 \\
0 & 1 & -4 & 8 \\
5 & -8 & 7 & 1
\end{array}\right) \\
\xrightarrow{ R_{3} -\frac{5}{2}R_{1} }\left(\begin{array}{c c c | c}
2 & -3 & 2 & 1 \\
0 & 1 & -4 & 8 \\
0 & -\frac{1}{2} & 2 & -\frac{3}{2}
\end{array}\right) \\
\xrightarrow{ R_{3} +\frac{1}{2}R_{2} }\left(\begin{array}{c c c | c}
2 & -3 & 2 & 1 \\
0 & 1 & -4 & 8 \\
0 & 0 & 0 & \frac{5}{2}
\end{array}\right) \\
\\
R_{3}: \quad 0=\frac{5}{2} \qquad \text{impossible} \because 0 \neq \frac{5}{2} \\
\therefore \text{system is inconsistent}
\end{gather*}
$$

Reduction with unknown constants
$$
\begin{gather*}
& \begin{array} {c c c c}
ax_1 & & + bx_{3} & = & 2 \\
ax_{1} & ax_2 & 4x_3 & = & 4 \\
& ax_{2} & + 2x_{3} & = & b
\end{array} \\
\\
& \left(\begin{array}{c c c | c}
a & 0 & b & 2 \\
a & a & 4 & 4 \\
0 & a & 2 & b
\end{array}\right)\xrightarrow{R_2-R_1}\xrightarrow{R_3-R_2}
\left(\begin{array}{c c c | c}
a & 0 & b & 2 \\
0 & a & 4-b & 2 \\
0 & 0 & b-2 & b-2
\end{array}\right) \\
\\
& \text{Cases to consider: }a=0 , \ b-2=0 \\
\\
\text{Case }b\neq2 : \\
& \left(\begin{array}{c c c | c}
a & 0 & b & 2 \\
0 & a & 4-b & 2 \\
0 & 0 & 1 & 1
\end{array}\right)\xrightarrow{R_1-bR_3}\xrightarrow{R_2-(4-b)R_3}\left(\begin{array}{c c c | c}
a & 0 & 0 & 2-b \\
0 & a & 0 & b-2 \\
0 & 0 & 1 & 1
\end{array}\right)  \\
\\
\qquad \text{Case }a=0: & \text{Inconsistent, }0\neq2-b , \ 0 \neq b-2 \\
\\
\qquad \text{Case }a\neq 0 : & \text{Unique Solution, }ax_{1}=2-b, \ ax_{2}=b-2 \\
\\
\text{Case } b=2: \\
& \left(\begin{array}{c c c | c}
a & 0 & 2 & 2 \\
0 & a & 2 & 2 \\
0 & 0 & 0 & 0
\end{array}\right) \\
\\
\qquad \text{Case }a=0: \\
& \left(\begin{array}{c c c | c}
0 & 0 & 2 & 2 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{array}\right) \\
& \text{Infinite Solutions, 2 non-pivot columns, only }x_{3}=1\text{ is known} \\
\\
\qquad\text{Case: } a\neq0: & \text{Infinite Solutions, 1 non-pivot column, }x_{3}=\frac{2-2s}{a}, \ x_{2}=\frac{2-2s}{a}
\end{gather*}
$$