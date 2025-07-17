---
tags:
  - ma1522/chapter2
  - math/linear_algebra
complete: true
index:
---
[Previous](/labyrinth/notes/math/ma1522/matrix_transpose)   [Next](/labyrinth/notes/math/ma1522/inverse_of_square_matrices)

### Summary
Alternate representation of [linear systems](/labyrinth/notes/math/ma1522/linear_systems), as the product of a matrix and vector, and as a vector equation ^31d777
- $\mathbf{A}$ is the coefficient matrix
- $\mathbf{x}$ is the variable vector
- $\mathbf{b}$ is the constant vector

$$
\begin{gather*}
\mathbf{Ax}=\mathbf{b}\\
\\
\begin{pmatrix}
| & | &  & | \\
\mathbf{a}_{1} & \mathbf{a}_{2} & \dots & \mathbf{a}_{m} \\
| & | &  & |
\end{pmatrix}\begin{pmatrix}
x_{1} \\ x_{2} \\ \vdots \\ x_{m}
\end{pmatrix} =x_{1}\mathbf{a}_{1}+x_{2}\mathbf{a}_{2}+\dots+x_{m}\mathbf{a}_{m}= \mathbf{b}
\end{gather*}
$$

Row reduction of any matrix equation
- foundation for all reduction algorithms

$$
\begin{gather*}
\mathbf{Ax}=\mathbf{b}  & \text{(For a Vector Solution)}\\
\left(\begin{array}{c|c} \mathbf{A} & \mathbf{b} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{I} & \mathbf{x} \end{array}\right)\\
\\
\\
\mathbf{AX}=\mathbf{B} & \text{(Generalized for a Matrix Solution)}\\
\left(\begin{array}{c|c} \mathbf{A} & \mathbf{B} \end{array}\right)\xrightarrow{RREF}\left(\begin{array}{c|c} \mathbf{I} & \mathbf{X} \end{array}\right)
\end{gather*}
$$
> row reducing gives $\mathbf{B}$ as [multiples](/labyrinth/notes/math/ma1522/gaussian_elimination#^0aa696) of the columns of $\mathbf{A}$

### Concept
Homogeneous linear systems are always consistent
$$
\begin{gather*}
\mathbf{Ax}=\mathbf{0} & \qquad & \text{(homogeneous System)} \\
\mathbf{A 0}=\mathbf{0} \\
\\
\mathbf{x} = \mathbf{0}\text{ is a valid solution} && \text{(Trivial Solution)} \\
\therefore \text{consistent} \\
\\
\\
\mathbf{Ax}=\mathbf{0}\text{ has infinitely many solutions}\iff \exists \mathbf{u}\neq \mathbf{0} \ \mathbf{Au}=\mathbf{0} && \text{(Nontrivial Solutions)} \\
\\
\mathbf{Au} =\mathbf{0} \\
s(\mathbf{Au}) = s\mathbf{0}, \ \forall s\in \mathbb{R} \\
\mathbf{A}(s\mathbf{u}) = s\mathbf{0} = \mathbf{0} \\
\\
\therefore s\mathbf{u}\text{ is also a solution} 
\end{gather*}
$$
> visualise it as the origin/line formed by the [intersection of planes](/labyrinth/notes/math/ma1301/planes_in_R³#^90ce2c)(#) that passes through the origin ^db80b8

Combined augmented matrix
- $p$ linear systems on the same coefficient matrix $\mathbf{A}$

$$
\left(\begin{array}{cccc|c|c|c|c} \color{aqua}{a_{11}} & \color{aqua}{a_{12}} & \color{aqua}{\cdots} & \color{aqua}{a_{1n}} & \color{magenta}{b_{11}} & \color{magenta}{b_{12}} & & \color{magenta}{b_{1p}} \\ \color{aqua}{a_{21}} & \color{aqua}{a_{22}} & \color{aqua}{\cdots} & \color{aqua}{a_{2n}} & \color{magenta}{b_{21}} & \color{magenta}{b_{22}} & & \color{magenta}{b_{2p}} \\ \color{aqua}{\vdots} & \color{aqua}{\vdots} & \color{aqua}{\ddots} & \color{aqua}{\vdots} & \color{magenta}{\vdots} & \color{magenta}{\vdots} & \color{magenta}{\cdots} & \color{magenta}{\vdots} \\ \color{aqua}{a_{m1}} & \color{aqua}{a_{m2}} & \color{aqua}{\cdots} & \color{aqua}{a_{mn}} & \color{magenta}{b_{m1}} & \color{magenta}{b_{m2}} & & \color{magenta}{b_{mp}} \end{array}\right)=\left(\begin{array}{c|c|c|c|c} \color{aqua}{\mathbf{A}} & \color{magenta}{\mathbf{b}_{1}} & \color{magenta}{\mathbf{b}_{2}} & \color{magenta}{\dots}  & \color{magenta}{\mathbf{b}_{p}} \end{array}\right) 
$$

### Application
Homongenous solution with infinitely many solutions
$$
\begin{gather*}
\begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} x\\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \\
\\
\begin{pmatrix} 1 \\ 0 \end{pmatrix}\text{ is a nontrivial solution} \because \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1\\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \\
\\
s\begin{pmatrix} 1\\ 0 \end{pmatrix}=\begin{pmatrix} s\\ 0 \end{pmatrix}\text{ is also a solution} \\
\because \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} s\\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \\
\end{gather*}
$$

Relations between homogeneous and non-homogeneous systems ^e53cfd
$$
\begin{gather*}
\mathbf{v}\text{ is a particular solution to }\mathbf{Ax}=\mathbf{b}\text{, and } \mathbf{u}\text{ is a particular solution to }\mathbf{Ax}=\mathbf{0} \\
\mathbf{Av}=\mathbf{b}, \quad \mathbf{Au}=\mathbf{0} \\
\\
\mathbf{A}(\mathbf{v}+\mathbf{u}) = \mathbf{Av}+\mathbf{Au}=\mathbf{b}+ \mathbf{0} = \mathbf{b} \\
\\
\therefore (\mathbf{v}+\mathbf{u})\text{ is also a solution to }\mathbf{Ax}=\mathbf{b}
\end{gather*}
$$
> visualise a shifting of the plane to intersect the origin

Relationship between two non-homogeneous systems
$$
\begin{gather*}
\mathbf{v}_{1}\text{ and }\mathbf{v}_{2}\text{ are particular solutions to }\mathbf{Ax}=\mathbf{b} \\
\mathbf{Av}_{1}=\mathbf{b}, \quad \mathbf{Av}_{2}=\mathbf{b} \\
\\
\mathbf{A}(\mathbf{v}_{1}-\mathbf{v}_{2}) = \mathbf{Av}_{1}-\mathbf{Av}_{2}=\mathbf{b}- \mathbf{b} = \mathbf{0} \\
\\
\therefore (\mathbf{v}_{1}-\mathbf{v}_{2})\text{ is also a solution to }\mathbf{Ax}=\mathbf{0}
\end{gather*}
$$

On [graphs](/labyrinth/notes/math/cs1231s/graphs_of_relations), for modeling circuit/traffic flow problems
```tikz
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[4][-]%
  {
	\draw[#1] ($(#2.#3) + {cos(#3)}*(0, {0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)}, 0)$) arc (180+#3-45:180+#3-45-270:\loopsize/2) #4;
  }
\begin{document}
\begin{tikzpicture}[auto, node distance=2cm]

  \node (a) {$v_1$};
  \node (b) [above right of=a] {$v_2$};
  \node (c) [below right of=b] {$v_3$};
  \node (d) [below right of=a] {$v_4$};
  
  \draw[->] (a) edge node[midway] {$e_1$} (b);
  \draw[->] (b) edge node[midway] {$e_2$} (c);
  \draw[->] (d) edge node[midway] {$e_5$} (b);
  \draw[->] (c) edge node[midway] {$e_3$} (d);
  \draw[->] (d) edge node[midway] {$e_4$} (a);

\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
v_{n}\text{ is the voltage at a point, and }e_{n}\text{ is the difference in voltage across two points}\\
\\
\begin{pmatrix}
-1 & 1 & 0 & 0 \\
0 & -1 & 1 & 0 \\
0 & 0 & -1 & 1 \\
1 & 0 & 0 & -1 \\
0 & 1 & 0 & -1
\end{pmatrix}\begin{pmatrix}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{pmatrix}=\begin{pmatrix}
e_{1} \\
e_{2} \\
e_{3} \\
e_{4} \\
e_{5}
\end{pmatrix} \\
\\
\text{solving for when there is no current flow is akin to solving the homogeneous system} \\
\\
\begin{pmatrix}
-1 & 1 & 0 & 0 \\
0 & -1 & 1 & 0 \\
0 & 0 & -1 & 1 \\
1 & 0 & 0 & -1 \\
0 & 1 & 0 & -1
\end{pmatrix}\xrightarrow{RREF} \begin{pmatrix}
-1 & 1 & 0 & 0 \\
0 & -1 & 1 & 0 \\
0 & 0 & -1 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{pmatrix} \\
\\
\text{graph of the reduced matrix:}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[4][-]%
  {
	\draw[#1] ($(#2.#3) + {cos(#3)}*(0, {0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)}, 0)$) arc (180+#3-45:180+#3-45-270:\loopsize/2) #4;
  }
\begin{document}
\begin{tikzpicture}[auto, node distance=2cm]

  \node (a) {$v_1$};
  \node (b) [above right of=a] {$v_2$};
  \node (c) [below right of=b] {$v_3$};
  \node (d) [below right of=a] {$v_4$};
  
  \draw[->] (a) edge node[midway] {$e_1$} (b);
  \draw[->] (b) edge node[midway] {$e_2$} (c);
  \draw[->] (c) edge node[midway] {$e_3$} (d);

\end{tikzpicture}
\end{document}
```
> every connected graph reduces to a tree
> cycles lead to dependent rows -> zero rows