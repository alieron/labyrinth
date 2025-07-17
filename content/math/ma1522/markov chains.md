---
tags:
  - lang/octave
  - ma1522/chapter6
  - math/linear_algebra
complete: false
index:
---
[Previous](/labyrinth/notes/math/ma1522/orthogonal_diagonalization)   [Next](/labyrinth/notes/math/ma1522/singular_value_decomposition)

### Summary
Algorithm to find the equilibrium vector/eigenvector associated to 1
$$
\begin{gather*}
(\mathbf{I}-\mathbf{P})\mathbf{x}=\mathbf{0} \\
\\
\left(\begin{array}{c|c} \mathbf{P}-\mathbf{I}_{n} & \begin{matrix}
0 \\
0 \\
\vdots \\
0
\end{matrix} \\
\begin{matrix}
1 & 1 & \dots & 1
\end{matrix}  & 1 \end{array}\right) \to \left(\begin{array}{c|c} \mathbf{R} & \mathbf{x} \end{array}\right)
\end{gather*}
$$
> the normal [algorithm for eigenvectors](/labyrinth/notes/math/ma1522/eigenvectors#^8e6feb) would work as well

Adjacency matrix
$$
a_{ij}=\begin{cases}
1&\text{if site }j\text{ has an outgoing link to site }i\\0&\text{if site }j\text{ does not have an outgoing link to site }i
\end{cases}
$$
> convert into a probability transition matrix by scaling each column such that the total is 1

### Concept
Probability vector
- all entries are nonnegative and sum to 1

$$
\mathbf{v}=(v_{i})_{n}\quad \sum_{i=1}^{n} v_{i}=1
$$
> different from unit vectors

(Left) stochastic matrix
- columns are probability vectors

Markov chain, cumulative probability
- sequence of probability vectors(state vectors), that represents the probability of diffferent outcomes 
- alongside a stochastic matrix, which transforms the current state vector to the subsequent state vector

$$
\begin{gather*}
\mathbf{x}_{k}\in \mathbb{R}^n \quad \text{is the probability of }n\text{ outcomes after }k\text{ experiments}\\
\\
\mathbf{x}_{1}=\mathbf{Px}_{0}, \quad \mathbf{x}_{2}=\mathbf{Px}_{1}, \quad \dots \ , \quad \mathbf{x}_{k}=\mathbf{Px}_{k-1} \\
\\
\mathbf{x}_{k}=\mathbf{P}^k\mathbf{x}_{0}
\end{gather*}
$$

1 is always an eigenvalue of a stochastic matrix
$$
\begin{align*}
& \text{Suppose }\mathbf{A}\text{ is a column stochastic matrix}\\
& \text{then }\mathbf{A}^T\text{ is a row stochastic matrix}\\
& \text{let }\mathbf{v}=\begin{pmatrix}
1 \\
1 \\
\vdots \\
1
\end{pmatrix} \\
& \mathbf{A}^T\mathbf{v}=\begin{pmatrix}
\sum_{i=1}^{n} a_{1i} \\
\sum_{i=1}^{n} a_{2i} \\
\vdots \\
\sum_{i=1}^{n} a_{ni}  
\end{pmatrix}=\begin{pmatrix}
1 \\
1 \\
\vdots \\
1
\end{pmatrix}=\mathbf{v} \\
\\
& \therefore 1\text{ is an eigenvalue of }\mathbf{A}^T \\
\\
& \therefore 1\text{ is an eigenvalue of }\mathbf{A} &&\text{(Eigenvalues are invariant with Transpose)}
\end{align*}
$$

Steady-state vector/equilibrium vector
- a state vector that remains the same regardless of how many experiments
- is the eigenvector associsated to the eigenvalue 1
- if the Markov chain converges, it will converge to this equilibrium vector
 
Regular stochastic matrix
- there is a power where all the entries are more than 0
- every state can reach every state

$$
\exists k \in \mathbb{N} \ \mathbf{P}^k=(a_{ij})_{n\times n} \land \forall i,j \in \{ 1,2,\dots,n \} \ a_{ij}>0
$$
> recall the [product of triangular matrices](/labyrinth/notes/math/ma1522/LU_factorization#^919bbb) is also triangular, ie. a triangular stochastic matrix is not regular

Markov chain with regular stochastic matrix
- will converge to the <span style="color:rgb(255, 69, 0)">unique</span> equilibrium vector

#

##### Octave
```octave

# Finding the equilibrium vector of a converging markov chain
rref([P-eye(3), [0; 0; 0]; 1 1 1 1])
```

### Application
Probability
- Sheldon only patronizes three stalls in the school canteen, the mixed rice, noodle, and mala hotpot stall for lunch everyday. He never buys from same stall two days in a row. If he buys from the mixed rice stall on a certain day, there is a 40% chance he will patronize the noodles stall the next day. If he buys from the noodle stall on a certain day, there is a 50% chance he will eat mala hotpot the next day. If he eats mala hotpot on a certain day, there is a 60% chance he will patronize the mixed rice the next day. 

$$
\begin{gather*}
\mathbf{x}_{k} = \begin{pmatrix}
r_{k} \\
n_{k} \\
m_{k}
\end{pmatrix}\\
\\
\text{Mixed Rice: }\begin{pmatrix}
0 \\
0.4 \\
0.6
\end{pmatrix} = \mathbf{P}\begin{pmatrix}
1 \\
0 \\
0
\end{pmatrix} \quad \text{Noodles: }\begin{pmatrix}
0.5 \\
0 \\
0.5
\end{pmatrix} = \mathbf{P}\begin{pmatrix}
0 \\
1 \\
0
\end{pmatrix} \quad \text{Mala Hotpot: }\begin{pmatrix}
0.6 \\
0.4 \\
0
\end{pmatrix} = \mathbf{P}\begin{pmatrix}
0 \\
0 \\
1
\end{pmatrix} \\
\\
\therefore \mathbf{P}=\begin{pmatrix}
0 & 0.5 & 0.6 \\
0.4 & 0 & 0.4 \\
0.6 & 0.5 & 0
\end{pmatrix} \\
\\
\begin{split}
\det(x\mathbf{I}-\mathbf{A})& =\det\begin{pmatrix}
x & -0.5 & -0.6 \\
-0.4 & x & -0.4 \\
-0.6 & -0.5 & x
\end{pmatrix} \\
& = x(x^{2}-0.2)-(-0.5(-0.4x-0.24))+(-0.6(0.2+0.6x)) \\
& = x^{3}-0.2x-(0.2x+0.12)-(0.12+0.36x) \\
& = x^{3}-0.76x-0.24 \\
& = (x-1)(x+0.6)(x+0.4)
\end{split} \\
\\
\mathbf{P}=\begin{pmatrix}
1 & -1 & 1 \\
0.8 & 0 & -2 \\
1 & 1 & 1
\end{pmatrix}\begin{pmatrix}
1 & 0 & 0 \\
0 & -0.6 & 0 \\
0 & 0 & -0.4
\end{pmatrix}\begin{pmatrix}
1 & -1 & 1 \\
0.8 & 0 & -2 \\
1 & 1 & 1
\end{pmatrix}^{-1} &&\text{(Diagonalization)} \\
\\
\therefore\mathbf{P}^k=\begin{pmatrix}
1 & -1 & 1 \\
0.8 & 0 & -2 \\
1 & 1 & 1
\end{pmatrix}\begin{pmatrix}
1^k & 0 & 0 \\
0 & -0.6^k & 0 \\
0 & 0 & -0.4^k
\end{pmatrix}\begin{pmatrix}
1 & -1 & 1 \\
0.8 & 0 & -2 \\
1 & 1 & 1
\end{pmatrix}^{-1} \\
\\
k\to \infty \quad |r|<1 \implies r^k \to 0 \\
\\
\begin{split}
\mathbf{x}_{\infty}& =\begin{pmatrix}
1 & -1 & 1 \\
0.8 & 0 & -2 \\
1 & 1 & 1
\end{pmatrix}\begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}\begin{pmatrix}
1 & -1 & 1 \\
0.8 & 0 & -2 \\
1 & 1 & 1
\end{pmatrix}^{-1}\mathbf{x_{0}} \\
& = \frac{1}{14}\begin{pmatrix}
5 \\
4 \\
5
\end{pmatrix}
\end{split} \\
\\
\text{Notice that } \frac{1}{14}\begin{pmatrix}
5 \\
4 \\
5
\end{pmatrix}\in E_{1}=\operatorname{span}\left\{ \begin{pmatrix}
1 \\
0.8 \\
1
\end{pmatrix} \right\} \implies \frac{1}{14}\begin{pmatrix}
5 \\
4 \\
5
\end{pmatrix}\text{ is an eigenvector associated to 1}
\end{gather*}
$$

Outgoing connections on adjacency matrix, on a [graph](/labyrinth/notes/math/cs1231s/graphs_of_relations)
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

  \node (a) {$s_1$};
  \node (b) [above right of=a] {$s_2$};
  \node (c) [below right of=b] {$s_3$};
  \node (d) [below right of=a] {$s_4$};
  
  \draw[->] (a) edge node[midway] {} (b);
  \draw[->] (a) edge node[midway] {} (c);
  \draw[->] (a) edge node[midway] {} (d);
  \draw[->] (b) edge node[midway] {} (d);
  \draw[->] (c) edge node[midway] {} (a);
  \draw[->] (c) edge node[midway] {} (d);
  \draw[->] (d) edge node[midway] {} (a);
  \draw[->] (d) edge node[midway] {} (c);

\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix}
0 & 0 & 1 & 1 \\
1 & 0 & 0 & 0 \\
1 & 0 & 0 & 1 \\
1 & 1 & 1 & 0
\end{pmatrix} & \text{the columns are the connection each site has} \\
\\
\mathbf{P}=\begin{pmatrix}
0 & 0 & \frac{1}{2} & \frac{1}{2} \\
\frac{1}{3} & 0 & 0 & 0 \\
\frac{1}{3} & 0 & 0 & \frac{1}{2} \\
\frac{1}{3} & 1 & \frac{1}{2} & 0
\end{pmatrix} & \text{divide each column by its sum}
\end{gather*}
$$


