---
tags:
- lang/octave
- ma1522/chapter6
- math/linear_algebra
complete: false
index: null
---
[Previous](/labyrinth/notes/math/ma1522/markov_chains)   [Next](/labyrinth/notes/math/ma1522/linear_transformation)

### Summary
SVD
$$
\begin{gather*}
\text{Full Expression:}&\begin{gathered}
\mathbf{A}& = &\mathbf{U}&\mathbf{\Sigma}&\mathbf{V}^T \\
({\color{royalblue}{m}} \times {\color{orangered}{n}})&&({\color{royalblue}{m}}\times{\color{royalblue}{m}})&({\color{royalblue}{m}}\times{\color{orangered}{n}})&({\color{orangered}{n}}\times{\color{orangered}{n}}) \\
\text{Singular}&&\text{Orthogonal}&\text{Diagonal with 0s}&\text{Orthogonal Transpose}
\end{gathered} \\
\\
&\mathbf{\Sigma}=\begin{pmatrix} \mathbf{D}&\mathbf{0}_{r\times(n-r)}\\\mathbf{0}_{(m-r)\times r}&\mathbf{0}_{(m-r)\times(n-r)} \end{pmatrix}_{m\times n}, \quad r = \operatorname{rank}(\mathbf{A}) \\
\\
\text{Essentially:}&\begin{gathered}
\mathbf{A}& = &\mathbf{U}&\mathbf{\mathbf{D}}&\mathbf{V}^T \\
({\color{royalblue}{m}} \times {\color{orangered}{n}})&&({\color{royalblue}{m}}\times{\color{violet}{r}})&({\color{violet}{r}}\times{\color{violet}{r}})&({\color{violet}{r}}\times{\color{orangered}{n}}) \\
\text{Singular}&&\text{Orthogonal}&\text{Diagonal}&\text{Orthogonal Transpose}
\end{gathered} & \text{Since the extra cols/rows become 0}
\end{gather*}
$$
> be careful of the number of rows and cols

Process
$$
\begin{align*}
1)&&& \text{determine the eigenvalues }\mu\text{ for }\mathbf{A}^T\mathbf{A}\text{, sort them in descending order} \\
\\
2)&&& \text{obtain }\mathbf{V}\text{ from the bases of the eigenspaces of }\mathbf{A}^T\mathbf{A} \\
\\
3)&&& \text{obtain }\mathbf{\Sigma}\text{ from the square roots of the eigenvalues, } \sigma\text{ fill with 0s} \\
\\
4)&&& \text{obtain the columns }\mathbf{u}_{i} = \frac{1}{\sigma_{i}}\mathbf{A}\mathbf{v}_{i} \\
\\
5)&&& \text{if needed, find "ghost" eigenvectors in }\operatorname{Null}(\begin{pmatrix}
\mathbf{u}_{1}&\dots&\mathbf{u}_{r}
\end{pmatrix}^T)\text{, orthogonalize after}
\end{align*}
$$

### Concept
Singular matrices
- transformation that may add or remove dimensions

Singular value decomposition
- diagonalization of non-square(and singular) matrcies
- using the product with transpose to create a symmetric matrix, on which [orthogonal diagonalization](/labyrinth/notes/math/ma1522/orthogonal_diagonalization) can be done

$$
\begin{gather*}
\text{Main Idea:}& \begin{gathered}
\mathbf{A}&\mathbf{v}_{i}&=&\sigma_{i} &\mathbf{u}_{i} \\
({\color{royalblue}{m}} \times {\color{orangered}{n}})&({\color{orangered}{n}}\times 1)&&&({\color{royalblue}{m}} \times 1)
\end{gathered} & \text{some dimension gets lost }m<n\text{, or added }m>n\\
\\
& r=\operatorname{rank}(\mathbf{A})\leq \min(m,n) \\
\\
\text{Let}& \{\mathbf{v}_{1},\dots,\mathbf{v}_{r},\dots \mathbf{v}_{n} \}\text{ be an Orthogonal basis for }\mathbb{R}^n\text{ and,} & \text{output space}\\
& \{ \mathbf{u}_{1},\dots,\mathbf{u}_{r},\dots \mathbf{\mathbf{u}}_{m} \}\text{ be an Orthogonal basis for }\operatorname{Col}(\mathbf{A}) & \text{input space} \\
\\
\text{then}& \mathbf{A}\mathbf{v}_{1}=\sigma_{1}\mathbf{u}_{1} \\
& \mathbf{A}\mathbf{v}_{2}=\sigma_{2}\mathbf{u}_{2} \\
& \vdots \\
& \mathbf{A}\mathbf{v}_{r}=\sigma_{r}\mathbf{u}_{r} \\
& r<n \implies 
\begin{gathered}
\mathbf{A}\mathbf{v}_{r+1}=\mathbf{0} \\
\vdots \\
\mathbf{A}\mathbf{v}_{n}=\mathbf{0}
\end{gathered} \implies \sigma=0 & \begin{gathered}
0\text{ eigenvalue of singular matrices} \\
\text{(Statements of Invertibility)}
\end{gathered} \\
\\
\text{Matrix form:}& \sigma_{1}\geq\sigma_{2}\geq\dots\geq\sigma_{r}>0=\sigma_{r+1}=\dots=\sigma_{n} \\
\\
& \mathbf{A}\begin{pmatrix}
| & & | & & | \\
\mathbf{v}_{1} & \dots & \mathbf{v}_{r} & \dots & \mathbf{v}_{n} \\
| & & | & & |
\end{pmatrix}=\begin{pmatrix}
| & & | & & | \\
\mathbf{u}_{1} & \dots & \mathbf{u}_{r} & \dots & \mathbf{u}_{m} \\
| & & | & & |
\end{pmatrix}\operatorname{diag}(\sigma_{1},\dots,\sigma_{r},0,\dots,0) \\
\\
\text{SVD}&\begin{aligned}
\mathbf{A}\mathbf{V}& =\mathbf{U}\mathbf{\Sigma} \\
\mathbf{A}& =\mathbf{U\Sigma V}^{-1} \\
& = \mathbf{U\Sigma V}^{T} & \text{(Inverse of Orthogonal Matrix)}
\end{aligned} \\
\\
\text{Finding }\mathbf{V}:& \begin{aligned}
\mathbf{A}^T\mathbf{A}& =(\mathbf{U\Sigma V}^{T})^T\mathbf{U\Sigma V}^{T} \\
& = \mathbf{V\Sigma}^T(\mathbf{U}^T\mathbf{U})\mathbf{\Sigma V}^{T} \\
& = \mathbf{V}(\mathbf{\Sigma}^T\mathbf{\Sigma})\mathbf{V}^{T} && \text{(Inverse of Orthogonal Matrix)}\\
& = \mathbf{V\Sigma}^{2}\mathbf{V}^T && \text{(Product of Diagonal matrices)}
\end{aligned} \\
\\
\text{Essentially:}& \mathbf{A}^T\mathbf{A}\text{ is symmetric} \implies \mathbf{V\Sigma}^{2}\mathbf{V}^T\text{ is an orthogonal diagonalization} \\
\\
&\therefore\mathbf{A}^T\mathbf{A}=\mathbf{V}\operatorname{diag}((\sigma_{1})^{2},\dots,(\sigma_{n})^{2})\mathbf{V}^T & \mathbf{V}\text{ and the eigenvalues can be found} \\
\\
\text{Similarly for }\mathbf{U}:& \mathbf{AA}^T = \mathbf{U\Sigma}^{2}\mathbf{U}^T \\
\\
\text{or}& \begin{aligned}
\mathbf{A}\mathbf{v}_{i} & =\sigma_{i}\mathbf{u}_{i} \\
\mathbf{u}_{i}& = \frac{1}{\sigma_{i}}\mathbf{A}\mathbf{v}_{i}
\end{aligned} & \mathbf{u}_{1},\dots,\mathbf{u}_{r}\text{ can be found} \\
\\
\mathbf{u}_{r+1},\dots,\mathbf{u}_{m}\text{ if }m>r & \text{try to find other orthogonal basis vectors of }\mathbb{R}^m & \text{"ghost" eigenvectors} \\
& \text{look at }\operatorname{Col}(\mathbf{A})^\perp=\operatorname{Null}(\begin{pmatrix}
\mathbf{u}_{1}&\dots&\mathbf{u}_{r}
\end{pmatrix}^T) \\
\\
& \text{perform Gram-Schmidt on the result}
\end{gather*}
$$
> we want $\mathbf{u}_{i}$ to be like the psuedo-eigenvectors of $\mathbf{A}$

Relation to polar decomposition
$$
\begin{gather*}
\text{Polar Decomposition:}& \begin{gathered}
\mathbf{A} & = & \mathbf{S}&\mathbf{Q} \\
&& \text{Symmetric} & \text{Orthogonal}
\end{gathered} \\
\\
\text{From SVD:}&\begin{aligned}
\mathbf{A} & =\mathbf{U\Sigma V}^{T} \\
& =\underbrace{ (\mathbf{U\Sigma U}^T) }_{ \text{Orthogonal Diagonlization} }(\mathbf{UV}^T)
\end{aligned}
\end{gather*}
$$

#

##### Octave
```octave

# Finding the SVD of matrix A
[U, S, V] = svd(A)
```

### Application
SVD by transpose product
$$
\begin{gather*}
\mathbf{A}=\begin{pmatrix}
4 & 11 & 14 \\
8 & 7 & -2
\end{pmatrix} \\
\\
\mathbf{A}^T\mathbf{A}=\begin{pmatrix}
4 & 8 \\
11 & 7 \\
14 & -2
\end{pmatrix}\begin{pmatrix}
4 & 11 & 14 \\
8 & 7 & -2
\end{pmatrix} = \begin{pmatrix}
80 & 100 & 72 \\
100 & 170 & 168 \\
72 & 168 & 200
\end{pmatrix} \\
\\
\det(x\mathbf{I}-\mathbf{A}^T\mathbf{A})=\det\begin{pmatrix}
x-80 & -100 & -40 \\
-100 & x-170 & -140 \\
-40 & -140 & x-200
\end{pmatrix}=x(x-90)(x-360), \quad \mu=0,90,360 \\
\\
\sigma_{1}=\sqrt{ 360 }=6\sqrt{ 10 },\quad \sigma_{2}=\sqrt{ 90 }=3\sqrt{ 10 },\quad \sigma_{3}=0 & \text{descending order}\\
\\
\therefore \mathbf{\Sigma}=\begin{pmatrix}
6\sqrt{ 10 } & 0 & 0 \\
0 & 3\sqrt{ 10 } & 0
\end{pmatrix} \\
\\
\begin{split}
360\mathbf{I}-\mathbf{A}^T\mathbf{A}& = \begin{pmatrix}
280 & -100 & -40 \\
-100 & 190 & -140 \\
-40 & -140 & 160
\end{pmatrix}\to \begin{pmatrix}
1 & 0 & -\frac{1}{2} \\
0 & 1 & -1 \\
0 & 0 & 0 
\end{pmatrix} &\quad& \mathbf{e}_{360}=\begin{pmatrix} \frac{1}{2} \\1 \\1\end{pmatrix} &\quad& \mathbf{v}_{1}=\frac{\mathbf{e}_{360}}{\| \mathbf{e}_{360} \| }=\begin{pmatrix}
\frac{1}{3} \\
\frac{2}{3} \\
\frac{2}{3}
\end{pmatrix}
\\
90\mathbf{I}-\mathbf{A}^T\mathbf{A}& = \begin{pmatrix}
10 & -100 & -40 \\
-100 & -80 & -140 \\
-40 & -140 & -110
\end{pmatrix}\to \begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & \frac{1}{2} \\
0 & 0 & 0 
\end{pmatrix} && \mathbf{e}_{90}= \begin{pmatrix} -1 \\ -\frac{1}{2} \\1\end{pmatrix} && \mathbf{v}_{2}=\frac{\mathbf{e}_{90}}{\| \mathbf{e}_{90} \| }=\begin{pmatrix}
-\frac{2}{3} \\
-\frac{1}{3} \\
\frac{2}{3}
\end{pmatrix} \\
0\mathbf{I}-\mathbf{A}^T\mathbf{A}& = \begin{pmatrix}
-80 & -100 & -40 \\
-100 & -170 & -140 \\
-40 & -140 & -200
\end{pmatrix}\to \begin{pmatrix}
1 & 0 & -2 \\
0 & 1 & 2 \\
0 & 0 & 0 
\end{pmatrix} && \mathbf{e}_{0}= \begin{pmatrix} 2 \\ -2 \\1\end{pmatrix} && \mathbf{v}_{3}=\frac{\mathbf{e}_{0}}{\| \mathbf{e}_{0} \| }=\begin{pmatrix}
\frac{2}{3} \\
-\frac{2}{3} \\
\frac{1}{3}
\end{pmatrix} \\
\end{split} \\
\\
\therefore \mathbf{V}=\begin{pmatrix}
\frac{1}{3} & -\frac{2}{3} & \frac{2}{3} \\
\frac{2}{3} & -\frac{1}{3} & -\frac{2}{3} \\
\frac{2}{3} & \frac{2}{3} & \frac{1}{3}
\end{pmatrix} \\
\\
\begin{split}
\mathbf{u}_{1}=\frac{1}{6\sqrt{ 10 }}\mathbf{Av}_{1}=\frac{1}{6\sqrt{ 10 }}\begin{pmatrix}
4 & 11 & 14 \\
8 & 7 & -2
\end{pmatrix}\begin{pmatrix}
\frac{1}{3} \\
\frac{2}{3} \\
\frac{2}{3}
\end{pmatrix}=\frac{1}{6\sqrt{ 10 }}\begin{pmatrix}
18 \\
6
\end{pmatrix}=\begin{pmatrix}
\frac{3}{\sqrt{ 10 }} \\
\frac{1}{\sqrt{ 10 }}
\end{pmatrix} \\
\mathbf{u}_{2}=\frac{1}{3\sqrt{ 10 }}\mathbf{Av}_{2}=\frac{1}{3\sqrt{ 10 }}\begin{pmatrix}
4 & 11 & 14 \\
8 & 7 & -2
\end{pmatrix}\begin{pmatrix}
-\frac{2}{3} \\
-\frac{1}{3} \\
\frac{2}{3}
\end{pmatrix}=\frac{1}{3\sqrt{ 10 }}\begin{pmatrix}
3 \\
-9
\end{pmatrix}=\begin{pmatrix}
\frac{1}{\sqrt{ 10 }} \\
-\frac{3}{\sqrt{ 10 }}
\end{pmatrix}
\end{split} \\
\\
\therefore\mathbf{U}=\begin{pmatrix}
\frac{3}{\sqrt{ 10 }} & \frac{1}{\sqrt{ 10 }} \\
\frac{1}{\sqrt{ 10 }} & -\frac{3}{\sqrt{ 10 }}
\end{pmatrix} \\
\\
\begin{pmatrix}
4 & 11 & 14 \\
8 & 7 & -2
\end{pmatrix}=\begin{pmatrix}
\frac{3}{\sqrt{ 10 }} & \frac{1}{\sqrt{ 10 }} \\
\frac{1}{\sqrt{ 10 }} & -\frac{3}{\sqrt{ 10 }}
\end{pmatrix}\begin{pmatrix}
6\sqrt{ 10 } & 0 & 0 \\
0 & 3\sqrt{ 10 } & 0
\end{pmatrix}\begin{pmatrix}
\frac{1}{3} & -\frac{2}{3} & \frac{2}{3} \\
\frac{2}{3} & -\frac{1}{3} & -\frac{2}{3} \\
\frac{2}{3} & \frac{2}{3} & \frac{1}{3}
\end{pmatrix}^T
\end{gather*}
$$
> pain


