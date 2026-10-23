---
tags:
  - co250/chapter2
  - math/optimization
  - math/geometry
  - math/higher_dimensions
complete: false
prev: /labyrinth/notes/math/co250/simplex_algorithm
next: /labyrinth/notes/math/co250/shortest_path_duality

---
### Summary
Extreme points
$$
\bar x\text{ is extreme}\iff\operatorname{rank}(\bar A)=n
$$

### Concept
#### Feasible region
- set of all feasible solutions to an LP

Polyhedron
- technically polytropes, for generalizing to $n$ dimensions
- region bounded by constraints

$$
P \subseteq \mathbb{R}^n\text{ is a polyhedron if } P = \{\begin{array}{c|c} x & Ax \leq b \end{array}\}
$$
> polyhedra cannot have "dents" or "holes"

Feasible region of LP is a polyhedron
TODO

#### Hyperplane
- set of solutions to a linear equation

$$
\{\begin{array}{c|c} x & a^Tx = \beta \end{array}\}
$$

Dimension of hyperplanes
- the hyperplane passing through 0 is a [vector space](/labyrinth/notes/math/math235/vector_spaces)

$$
\begin{gather*}
H_{0} = \{\begin{array}{c|c} x & a^T x = 0 \end{array}\} \\
\\
\operatorname{dim}(H_{0}) = n - \operatorname{rank}(a) = n-1
\end{gather*}
$$
> one linear constraint removes one degree of freedom

#### Halfspace
- set of solutions to a linear inequality

$$
\{\begin{array}{c|c} x & a^Tx \leq \beta \end{array}\}
$$
> a polyhedron is the intersection of a finite set of halfspaces



![[Pasted image 20261020221306.png]]

#### Translate
$$
\begin{gather*}
S, S' \subseteq \mathbb{R}^n \\
\\
\exists p \in \mathbb{R}^n, \ S' = \{\begin{array}{c|c} s + p & s \in S \end{array}\} \implies S'\text{ is a translate of }S
\end{gather*}
$$

![[translate_hyperplane.png|600]]
> translate all the elements of a set

Translate of [hyperplanes](/labyrinth/notes/math/co250/feasible_regions#Hyperplane)
$$
\begin{gather*}
\begin{aligned}
H &= \{\begin{array}{c|c} x & a^Tx = \beta \end{array}\} \\
H_{0} &= \{\begin{array}{c|c} x & a^Tx = 0 \end{array}\}
\end{aligned} \\
\\
H\text{ is a translate of }H_{0} \\
\\
\begin{aligned}
&\text{Claim: }x \in H_{0} \iff x+p \in H \\
\\
&\text{Suppose }x \in H_{0}, p \in H  \\
\\
&\text{then }\begin{aligned}[t]
x \in H_{0} &\iff a^Tx = 0\\
&\iff a^T x + a^Tp = 0 + a^T p \\
&\iff a^T (x+p) = \beta \\
&\iff x+p \in H
\end{aligned}
\end{aligned} \\
&\square
\end{gather*}
$$

Translate of [halfspaces](/labyrinth/notes/math/co250/feasible_regions#Halfspace)
TODO
similar to above


#### Convexity
- no "dents" and no "holes"

Line through two points
$$
x_{1},x_{2} \in \mathbb{R}^n, \quad L = \{\begin{array}{c|c} x = \lambda x_{1} + (1-\lambda)x_{2} & \lambda \in R \end{array}\}
$$

Line segment between two points
- aka convex combination

$$
x_{1},x_{2} \in \mathbb{R}^n, \quad L = \{\begin{array}{c|c} x = \lambda x_{1} + (1-\lambda)x_{2} & 0 \leq \lambda \leq 1 \end{array}\}
$$

Convexity of a set
$$
S \subseteq \mathbb{R}^n\text{ is convex if }\forall x_{1}, x_{2} \in S\text{, the line segment between }x_{1}\text{ and }x_{2}\text{ is in }S
$$

$$
\begin{gather*}
A,B\text{ are convex} \\
\\
A \cup B \text{ is not neccesarily convex} \\
A\cap B \text{ is convex}
\end{gather*}
$$

Intersection remains convex
TODO
Linesegment in A and in B so in A $\cap$ B

[Halfspaces](/labyrinth/notes/math/co250/feasible_regions#Halfspace) are convex
$$
\begin{align*}
&\text{Claim: }H = \{\begin{array}{c|c} x & a^Tx \leq \beta \end{array}\} \\
\\
&\text{Suppose }x_{1},x_{2} \in H\text{ and }\bar{x}\text{ in the line segment between }x_{1}\text{ and }x_{2} \\
\\
&\text{then }\begin{aligned}[t]
a^T\bar{x} &= a^T(\lambda x_{1} + (1-\lambda)x_{2}), \quad \lambda \in [0,1] \\
&= \underbrace{ \lambda }_{ \geq 0 } \underbrace{ a^Tx_{1} }_{ \leq \beta } + \underbrace{ (1-\lambda) }_{ \geq 0 } \underbrace{ a^T x_{2} }_{ \leq \beta } \\
&\leq \lambda \beta + (1-\lambda)\beta \\
&\leq \beta
\end{aligned} \\
\\
&\therefore \bar{x} \in H \\
&& \square
\end{align*}
$$

Polyhedra are convex
TODO
P is intersection of halfspaces
halfspaces are convex
intersection of conves is convex

> feasible region of LP is convex, which is what makes it relatively easy to solve

#### Extreme points
- basically the verticies of the polyhedron

Properly contained
- point on the line segment that is not the endpoints

Non-extreme points
$$
\bar{x}\text{ is not an extreme point if there is a line segment }L \subseteq S\text{ where }L\text{ properly contains }\bar{x}
$$

Convex set may have no extreme points (halfspace)
or infinite extreme points (circle/n-sphere)

Tight constraints
- constraint that is satisfied with equality

$$
\text{set of tight constraints }\bar{A}x = \bar{b}
$$

A point is extreme iff it has $n$ tight constraints
$$
\begin{align*}
&\text{Claim: }\operatorname{rank}(\bar A)=n  \implies \bar x\text{ is extreme}\\
\\
&\text{Suppose not, that }\bar{x}\text{ is not extreme but }\operatorname{rank}(\bar{A}) = n \\
\\
&\text{then }\begin{aligned}[t]
&\bar{x}\text{ is properly contained in a line segment with enpoints }x_{1},x_{2} \in P \\
\\
&\text{so }\bar{x} \neq x_{1},x_{2}\text{ and }0<\lambda<1,\ \bar{x} = \lambda x_{1} + (1-\lambda)x_{2} \\
\\
&\begin{aligned}
\bar{b} &= \bar{A}\bar{x} \\
&= \bar{A}(\lambda x_{1} + (1-\lambda)x_{2}) \\
&= \lambda \underbrace{ \bar{A}x_{1} }_{ \leq \bar{b} } + (1-\lambda)\underbrace{ \bar{A}x_{2} }_{ \leq \bar{b} }
\end{aligned} \\
\\
& \bar{b} = \bar{A}x_{1} = \bar{A}x_{2} \\
\\
& \operatorname{rank}(\bar{A}) = n \implies x_{1} = x_{2}
\end{aligned} \\
\\
&\text{Contradiction, if }x_{1}=x_{2}\text{ then }\bar{x}\text{ cannot exist}\\
&&\square
\end{align*}
$$
> extreme points have $n$ tight constraints

Deficient rank
$$
\begin{align*}
&\text{Claim: }\operatorname{rank}(\bar A)<n  \implies\bar x\text{ is not extreme} \\
\\
&\text{Suppose }\operatorname{rank}(\bar A)<n  \\
\\
&\text{then }\begin{aligned}[t]
&\exists d \in \mathbb{R}^n, \ \bar{A}d = 0 \\
\\
&\text{pick small }\epsilon >0 \\
\\
&\begin{aligned}
x_{1} &= \bar{x} + \epsilon d \\
x_{2} &= \bar{x} - \epsilon d
\end{aligned} \\
\\
& (a)\ \bar{x}\text{ is properly contained in the line segment }x_{1}\text{ to }x_{2} \\
\\
&\quad\begin{aligned}
&\begin{aligned}
\frac{1}{2}x_{1} + \frac{1}{2}x_{2} &= \frac{1}{2}(\bar{x}+\epsilon d)+\frac{1}{2}(\bar{x}-\epsilon d) \\
&= \bar{x}
\end{aligned}\\
\\
&\bar{x} \neq x_{1} \\
&\bar{x} \neq x_{2} \\
\\
&\therefore \bar{x} \text{ is properly contained}
\end{aligned} \\
\\
& (b)\ x_{1},x_{2} \in P\text{ (sufficient to show for }x_{1}\text{)} \\
\\
&\quad\begin{aligned}
&\text{tight constraints: }\bar{A}x \leq \bar{b} \\
&\quad\begin{aligned}
\bar{A}x_{1} &= \bar{A}(\bar{x} + \epsilon d) \\
&= \underbrace{ \bar{A}\bar{x} }_{ \bar{b} } + \epsilon \underbrace{ \bar{A}d }_{ 0 } \\
& = \bar{b}
\end{aligned}\\
\\
&\text{non-tight constraints: }a^Tx \leq \beta \\
&\quad\begin{aligned}
a^Tx_{1} &= a^T(\bar{x} + \epsilon d) \\
&= \underbrace{ a^T\bar{x} }_{ < \beta } + \epsilon \underbrace{ a^T d }_{ ??? } \\
&< \beta \quad \text{for small enough }\epsilon
\end{aligned}\\
\end{aligned}
\end{aligned} \\
\\
&&\square
\end{align*}
$$

Extreme points are basic feasible solutions
- [simplex algorithm](/labyrinth/notes/math/co250/simplex_algorithm) is walking along extreme points

TODO


#### Problems with slack variables
- are [isomorphic](/labyrinth/notes/math/~ma2202/group_isomorphisms)
- slack variables do not provide additional information

$$
\begin{gather*}
\begin{aligned}
\text{without slack variables:}&&&P = \{\begin{array}{c|c} x\geq 0 & Ax \leq b \end{array}\} \\
\text{with slack variables:}&&&Q = \{\begin{array}{c|c} (x,s) \geq 0 & Ax + s = b \end{array}\}
\end{aligned} \\
\\
s = b - Ax \\
\\
f: P\to Q,\quad f(x) = (x,b-Ax) \\
f^{-1}(x,s) = x \\
\\
f\text{ is a bijection} \\
\\
\\
\begin{aligned}
&\text{Claim: }x\text{ is extreme}\iff f(x)\text{ is extreme} \\
\\
&\text{Show: }x\text{ is not extreme}\iff f(x)\text{ is not extreme} \\
\\
&(\implies) \ \begin{aligned}[t]
&\text{Suppose }\bar{x} \in P\text{ is not extreme} \\
\\
&\text{then }\begin{aligned}[t]
&\bar{x} = \lambda x_{1} + (1-\lambda)x_{2} \\
\\
&\begin{aligned}
f(\bar{x})&= (\bar{x},b-A\bar{x}) \\
&= (\lambda x_{1} + (1-\lambda)x_{2} , b- A(\lambda x_{1} + (1-\lambda)x_{2} )) \\
&= (\lambda x_{1} + (1-\lambda)x_{2} , b- \lambda Ax_{1} + (1-\lambda)Ax_{2} ) \\
&= (\lambda x_{1} + (1-\lambda)x_{2} , \lambda b + (1-\lambda)b - \lambda Ax_{1} + (1-\lambda)Ax_{2} ) \\
&= (\lambda x_{1} + (1-\lambda)x_{2} , \lambda (b-Ax_{1}) + (1-\lambda)(b-Ax_{2}) ) \\
&= \lambda(x_{1},b-Ax_{1}) + (1-\lambda)(x_{2},b-Ax_{2}) \\
&= \lambda f(x_{1}) + (1-\lambda)f(x_{2})
\end{aligned}
\end{aligned} \\
\\
&\therefore f(\bar{x})\in Q\text{ is not extreme}
\end{aligned} \\
\\
&(\impliedby) \ \begin{aligned}[t]
&\text{Suppose }f(\bar{x}) \in Q\text{ is not extreme} \\
\\
&\text{then }\begin{aligned}[t]
&(x_{1},s_{1}),(x_{2},s_{2})\text{ are distinct points }\in Q \\
&f(\bar{x}) = \lambda (x_{1},s_{1}) + (1-\lambda)(x_{2},s_{2}) \\
\\
&\bar{x} = \lambda x_{1} + (1-\lambda)x_{2} \\
\\
&\begin{aligned}
s_{1} &= b - Ax_{1} \\
s_{2} &= b - Ax_{2}
\end{aligned} \\
\\
&\text{Now, suppose }x_{1} = x_{2} \\
&\quad\begin{aligned}
&\implies s_{1} = s_{2} \\
&\implies (x_{1},s_{1}) = (x_{2},s_{2})
\end{aligned} \\
\\
&\text{Contradiction}
\end{aligned} \\
\\
&\therefore \bar{x}\in P \text{ is not extreme}
\end{aligned} \\
\\
&\therefore x\text{ is extreme}\iff f(x)\text{ is extreme} \\
&&\square
\end{aligned}
\end{gather*}
$$
> this allows us to simplify things to "less dimensions" to better visualize the extreme points

### Application
[SEF](/labyrinth/notes/math/co250/standard_equality_form) to polyhedron form
$$
\begin{gather*}
\begin{array}{ll}
\max & \begin{pmatrix}
1 & 3 & 2
\end{pmatrix}x\\
\text{s.t.} \\
& \begin{pmatrix}
1 & 2 & -1 \\
3 & 4 & 5
\end{pmatrix}x = \begin{pmatrix}
2 \\
12
\end{pmatrix} \\
& x \geq 0
\end{array}\\
\\
\\
\begin{pmatrix}
1 & 2 & -1 \\
-1 & -2 & 1 \\
3 & 4 & 5 \\
-3 & -4 & -5 \\
-1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -1
\end{pmatrix}x \leq \begin{pmatrix}
2 \\
-2 \\
12 \\
-12 \\
0 \\
0 \\
0
\end{pmatrix}
\end{gather*}
$$

Extreme points of a LP
$$
P = \left\{\begin{array}{c|c} x & \begin{pmatrix}
1 & 1 \\
1 & 0 \\
0 & 1
\end{pmatrix} x \leq \begin{pmatrix}
3 \\
2 \\
2
\end{pmatrix} \begin{array} {c}
{\color{blue} (1)} \\
{\color{green} (2)} \\
{\color{red} (3)}
\end{array}\end{array} \right\}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[
    x=1.5cm, y=1.5cm,
    >=Stealth,
    dot/.style={circle, fill=black, inner sep=1pt},
    every node/.style={font=\small}
]

% Shaded region: x_1 <= 2, x_2 <= 2, x_1 + x_2 <= 3
% Left and bottom edges are clipped for display.
\fill[gray!0.5]
    (-0.38,-0.38) --
    (2,-0.38) --
    (2,1) --
    (1,2) --
    (-0.38,2) -- cycle;

% Constraint lines
\draw[blue!70!black, thick]
    (0.65,2.35) -- (3.25,-0.25)
    node[pos=0.83, above right] {\scriptsize (1)};

\draw[green!65!black, thick]
    (2,-0.38) -- (2,2.43)
    node[pos=0.96, right] {\scriptsize (2)};

\draw[red!75!black, thick]
    (-0.38,2) -- (3.05,2)
    node[pos=0.95, above] {\scriptsize (3)};

% Axes
\draw[->] (-0.25,0) -- (3.5,0)
    node[above left] {$x_1$};

\draw[->] (0,-0.25) -- (0,2.48)
    node[right] {$x_2$};

% Points and labels on horizontal axis
\foreach \x in {1,2,3} {
    \node[dot] at (\x,0) {};
    \node[below=3pt] at (\x,0) {$\x$};
}

% Points and labels on vertical axis
\foreach \y in {1,2} {
    \node[dot] at (0,\y) {};
    \node[left=3pt] at (0,\y) {$\y$};
}

% Origin
\node[dot] at (0,0) {};
\node[above left] at (0,0) {$0$};

% Highlighted point
\node[circle, draw=black, fill=cyan,
      inner sep=2pt] at (1,2) {};
\node[above right] at (1,2) {$f$};
\node[circle, draw=black, fill=cyan,
      inner sep=2pt] at (2,1) {};
\node[above right] at (2,1) {$g$};
\node[circle, draw=black, fill=violet,
      inner sep=2pt] at (2,0) {};
\node[above right] at (2,0) {$h$};
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\text{consider }f: \\
\\
\bar{A} = \begin{pmatrix}
1 & 1 \\
0 & 1
\end{pmatrix} \\
\\
\operatorname{rank}(\bar{A}) = 2 \\
\\
\therefore f\text{ is an extreme point} \\
\\
\\
\text{consider }g: \\
\\
\bar{A} = \begin{pmatrix}
1 & 1 \\
1 & 0
\end{pmatrix} \\
\\
\operatorname{rank}(\bar{A}) = 2 \\
\\
\therefore g\text{ is an extreme point} \\
\\
\\
\text{consider }h: \\
\\
\bar{A} = \begin{pmatrix}
1 & 0
\end{pmatrix} \\
\\
\operatorname{rank}(\bar{A}) = 1 \\
\\
\therefore h\text{ is not an extreme point}
\end{gather*}
$$

Checking for extreme points
$$
\begin{gather*}
P = \left\{\begin{array}{c|c} x \geq 0 & \begin{pmatrix}
1 & 0 & -1 \\
0 & 1 & 3
\end{pmatrix}x = \begin{pmatrix}
2 \\
4
\end{pmatrix} \end{array}\right\} \\
\\
\begin{pmatrix}
2 & 4 & 0
\end{pmatrix}^T\text{ is a basic solution} \\
\\
\text{is it an extreme point?} \\
\\
P = \left\{\begin{array}{c|c} x & \begin{pmatrix}
1 & 0 & -1 \\
-1 & 0 & 1 \\
0 & 1 & 3 \\
0 & -1 & -3 \\
-1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -1
\end{pmatrix}x \leq \begin{pmatrix}
2 \\
-2 \\
4 \\
-4 \\
0 \\
0 \\
0
\end{pmatrix} \end{array}\right\} \\
\\
\bar{A} = \begin{pmatrix}
1 & 0 & -1 \\
-1 & 0 & 1 \\
0 & 1 & 3 \\
0 & -1 & -3 \\
0 & 0 & -1
\end{pmatrix} \\
\\
\operatorname{rank}(\bar{A}) = 3 \implies \begin{pmatrix}
2 & 4 & 0
\end{pmatrix}^T\text{ is an extreme point}
\end{gather*}
$$

Slack variabls and extreme points
$$
\begin{gather*}
\text{without slack variables: }
0 \leq x \leq 4 \\
\\
\text{extreme points: }0, 4 \\
\\
\\
\text{with slack variables: }
x + s = 4 \\
\\
\text{extreme points: }(0,4), (4,0)
\end{gather*}
$$

### Extra
Helpful aside for proving the extreme point theorem
$$
\begin{align*}
&\text{Claim: }a = \frac{1}{2}b + \frac{1}{2}c \land b\leq a \land c \leq a \implies a = b = c \\
\\
&\quad\begin{aligned}
a = \frac{1}{2}\underbrace{ b }_{ \leq a } + \frac{1}{2}\underbrace{ c }_{ \leq a } &\leq \frac{1}{2}a + \frac{1}{2}a = a \\
\\
\frac{1}{2}b + \frac{1}{2}c &= \frac{1}{2}a + \frac{1}{2}a
\end{aligned} \\
\\
&\therefore a = b = c \\
&&\square
\end{align*}
$$

Generalization for line segment form
$$
\begin{align*}
&\text{Claim: }0<\lambda <1,\quad a = \lambda b + (1-\lambda) c \land b\leq a \land c \leq a \implies a = b = c \\
\\
&\quad\begin{aligned}
a = \lambda\underbrace{ b }_{ \leq a } + (1-\lambda)\underbrace{ c }_{ \leq a } &\leq \lambda a + (1-\lambda)a = a \\
\\
\lambda b + (1-\lambda)c &= \lambda a + (1-\lambda)a
\end{aligned} \\
\\
&\therefore a = b = c \\
&&\square
\end{align*}
$$

Generalization to vector
TODO
$$
a,b,c \in \mathbb{R}^n
$$