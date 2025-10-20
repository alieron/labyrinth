---
tags:
  - cs2100/chapter16
  - cs/low_level
  - lang/pgf-tikz
complete: true
prev: /labyrinth/notes/cs/cs2100/MSI_components
next: /labyrinth/notes/cs/cs2100/memory_circuits

---
### Summary
Characteristic tables
- SR flip-flop

| $S$ | $R$ | $Q+$ |  Action   |
| :-: | :-: | :--: | :-------: |
|  0  |  0  | $Q$  | No change |
|  0  |  1  |  0   |   Reset   |
|  1  |  0  |  1   |    Set    |
|  1  |  1  |      |  Invalid  |
- D flip-flop

| $D$ | $Q+$ | Action |
| :-: | :--: | :----: |
|  0  |  0   | Reset  |
|  1  |  1   |  Set   |
- JK flip-flop

| $J$ | $K$ | $Q+$ |  Action   |
| :-: | :-: | :--: | :-------: |
|  0  |  0  | $Q$  | No change |
|  0  |  1  |  0   |   Reset   |
|  1  |  0  |  1   |    Set    |
|  1  |  1  | $Q'$ |  Toggle   |
- T flip-flop

| $T$ | $Q+$ |  Action   |
| :-: | :--: | :-------: |
|  0  | $Q$  | No change |
|  1  | $Q'$ |  Toggle   |

Excitation tables
- SR flip-flop

| $Q$ | $Q+$ | $S$ | $R$ |
| :-: | :--: | :-: | :-: |
|  0  |  1   |  0  |  X  |
|  0  |  1   |  1  |  0  |
|  1  |  0   |  0  |  1  |
|  1  |  1   |  X  |  0  |
- D flip-flop

| $Q$ | $Q+$ | $D$ |
| :-: | :--: | :-: |
|  0  |  1   |  0  |
|  0  |  1   |  1  |
|  1  |  0   |  0  |
|  1  |  1   |  1  |
- JK flip-flop

| $Q$ | $Q+$ | $J$ | $K$ |
| :-: | :--: | :-: | :-: |
|  0  |  1   |  0  |  X  |
|  0  |  1   |  1  |  X  |
|  1  |  0   |  X  |  1  |
|  1  |  1   |  X  |  0  |
- T flip-flop

| $Q$ | $Q+$ | $T$ |
| :-: | :--: | :-: |
|  0  |  1   |  0  |
|  0  |  1   |  1  |
|  1  |  0   |  1  |
|  1  |  1   |  0  |
### Concept
Types of sequential circuits
- **synchronous**: outputs change at a specific time
- **asynchronous**: outputs can change at any time

Stable states
- bistable - 2 stable states
- monostable - 1 stable state
- astable - no stable states

Bistable logic devices
- latches -> pulse-triggered
- flip-flops -> edge-triggered, rising or falling edge
> flip-flops are just latches but triggered slightly differently

SR latch
- set and reset
- store current state otherwise
- has an invalid condition
![[sr_nor_latch.png]]
> an [active-low](/labyrinth/notes/cs/cs2100/MSI_components#^4e63c3) SR latch would have the NOR gates replaced with NAND

| $S$ | $R$ | $Q+$ |  Action   |
| :-: | :-: | :--: | :-------: |
|  0  |  0  | $Q$  | No change |
|  0  |  1  |  0   |   Reset   |
|  1  |  0  |  1   |    Set    |
|  1  |  1  |      |  Invalid  |
> the characteristic table shows the next state, based on the inputs and current state
$$
\begin{gather*}
Q+ = S + R'\cdot Q \\
S\cdot R = 0
\end{gather*}
$$

Gated SR latch
- SR latch with enable pin
- only changes if the enable pin is high
![[gated_sr_latch.png]]

Gated D latch
- change to $D$ if enabled
- removes the impossible condition

| $E$ | $D$ | $Q+$ |  Action   |
| :-: | :-: | :--: | :-------: |
|  1  |  0  |  0   |   Reset   |
|  1  |  1  |  1   |    Set    |
|  0  |  X  | $Q$  | No change |

JK flip-flop
- uses the impossible condition as a toggle

| $J$ | $K$ | $C$ | $Q+$ |  Action   |
| :-: | :-: | :-: | :--: | :-------: |
|  0  |  0  |  ↑  | $Q$  | No change |
|  0  |  1  |  ↑  |  0   |   Reset   |
|  1  |  0  |  ↑  |  1   |    Set    |
|  1  |  1  |  ↑  | $Q'$ |  Toggle   |

T flip-flop
- JK flip-flop without individual set and reset pins

| $T$ | $C$ | $Q+$ |  Action   |
| :-: | :-: | :--: | :-------: |
|  0  |  ↑  | $Q$  | No change |
|  1  |  ↑  | $Q'$ |  Toggle   |

Asynchronous inputs
- PRE and CLR to immediately set and reset
### Application
State diagram
$$
\begin{gather*}
\text{Compact state table:} \\
\\
\begin{array}{c|c|c|c|c}
 & x=0 & x=1 & x=0 & x=1 \\
AB & {A+}B+ & {A+}B+ & y & y \\
\hline 00 & 00 & 01 & 0 & 0 \\
01 & 00 & 11 & 1 & 0 \\
10 & 00 & 10 & 1 & 0 \\
11 & 00 & 10 & 1 & 0
\end{array}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[5][-]%
{
  \draw[#1]
    ($ (#2.#3) + {cos(#3)}*(0,{0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)},0) $)
    arc (180+#3-45:180+#3-45-270:\loopsize/2)
    node[midway, #4] {#5};
}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt,node distance=4cm]
\begin{document}
\begin{tikzpicture}[auto,thick]

  \node[vertex] (a) {00};
  \node[vertex,right of=a] (b) {01};
  \node[vertex,below of=a] (c) {10};
  \node[vertex,right of=c] (d) {11};

  \round[->]{a}{135}{}{0/0};  
  \draw[->, bend left=15] (a) to node[midway] {1/0} (b);
  
  \draw[->, bend left=15] (b) to node[midway] {0/1} (a);
  \draw[->, bend left=15] (b) to node[midway] {1/0} (d);

  \draw[->, bend left=15] (c) to node[midway] {0/1} (a);
  \round[->]{c}{-135}{}{1/0};  

  \draw[->, bend left=15] (d) to node[midway] {0/1} (a);
  \draw[->, bend left=15] (d) to node[midway] {1/0} (c);
\end{tikzpicture}
\end{document}
```
> a 4 state circuit requires 2 flip-flops, for extra unused states, fill with don't care terms

Circuit analysis
![[sr_practice.png]]
$$
\begin{gather*}
\text{Logical expressions for flip-flop inputs:} \\
\\
\begin{aligned}
S_{A} & = B\cdot x'\\
R_{A} & = B'\cdot x \\
S_{B} & = B'\cdot x' + B'\cdot A \\
R_{B} & = B\cdot A' + B\cdot x
\end{aligned} \\
\\
\text{State table:} \\
\\
\begin{array}{c|c|c|c|c|c}
A & B & x  \\
\hline 0 & 0 & 0 \\
0 & 0 & 1 \\
0 & 1 & 0 \\
0 & 1 & 1 \\
1 & 0 & 0 \\
1 & 0 & 1 \\
1 & 1 & 0 \\
1 & 1 & 1
\end{array} \qquad
\begin{array}{c|c|c|c|c|c}
S_{A} & R_{A} & S_{B} & R_{B}  \\
\hline 0 & 0 & 1 & 0  \\
0 & 1 & 0 & 0 \\
1 & 0 & 0 & 1 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 \\
1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1
\end{array}\\
\\
\text{Using the characteristic table of the SR latch:} \\
\\
\begin{array}{c|c|c|c|c|c}
A+ & B+ \\
\hline 0 & 1 \\
0 & 0 \\
1 & 0 \\
0 & 0 \\
1 & 1 \\
0 & 1 \\
1 & 1 \\
1 & 0
\end{array}
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[5][-]%
{
  \draw[#1]
    ($ (#2.#3) + {cos(#3)}*(0,{0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)},0) $)
    arc (180+#3-45:180+#3-45-270:\loopsize/2)
    node[midway, #4] {#5};
}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt,node distance=4cm]
\begin{document}
\begin{tikzpicture}[auto,thick]

  \node[vertex] (a) {00};
  \node[vertex,right of=a] (b) {01};
  \node[vertex,below of=a] (c) {10};
  \node[vertex,right of=c] (d) {11};

  \round[->]{a}{135}{}{1};
  \round[->]{d}{-45}{}{0};
  
  \draw[->, bend left=15] (a) to node[midway] {0} (b);
  \draw[->, bend left=15] (b) to node[midway] {1} (a);

  \draw[->, bend left=15] (b) to node[midway] {0} (c);
  \draw[->, bend left=15] (c) to node[midway] {1} (b);

  \draw[->, bend left=15] (c) to node[midway] {0} (d);
  \draw[->, bend left=15] (d) to node[midway] {1} (c);
\end{tikzpicture}
\end{document}
```

Constructing a sequential circuit
$$
\begin{gather*}
\begin{array}{c|c|c|c|c|c}
A & B & x & A+ & B+ & y \\
\hline 0 & 0 & 0 & 1 & 1 & 1 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
1 & 0 & 0 & 0 & 0 & 1 \\
1 & 0 & 1 & 1 & 1 & 0 \\
1 & 1 & 0 & 0 & 1 & 0 \\
1 & 1 & 1 & 1 & 0 & 1
\end{array} \\
\\
y = B'\cdot x' + A\cdot B\cdot x
\end{gather*}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[5][-]%
{
  \draw[#1]
    ($ (#2.#3) + {cos(#3)}*(0,{0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)},0) $)
    arc (180+#3-45:180+#3-45-270:\loopsize/2)
    node[midway, #4] {#5};
}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt,node distance=4cm]
\begin{document}
\begin{tikzpicture}[auto,thick]

  \node[vertex] (a) {00};
  \node[vertex,right of=a] (b) {01};
  \node[vertex,below of=a] (c) {10};
  \node[vertex,right of=c] (d) {11};
 
  \draw[->, bend left=15] (a) to node[midway] {0/1} (d);
  \round[->]{a}{135}{}{1/0};

  \draw[->, bend right=15] (b) to node[midway] {0/0} (c);
  \round[->]{b}{45}{}{1/0};

  \draw[->, bend left=15] (c) to node[midway] {0/1} (a);
  \draw[->, bend left=15] (c) to node[midway] {1/0} (d);

  \draw[->, bend right=15] (d) to node[midway] {0/0} (b);
  \draw[->, bend left=15] (d) to node[midway] {1/1} (c);

\end{tikzpicture}
\end{document}

```
$$
\begin{gather*}
\text{Using the excitation table of the T flip-flop:} \\
\\
\begin{array}{c|c|c|c|c|c}
A & B & x & A+ & B+ \\
\hline 0 & 0 & 0 & 1 & 1 \\
0 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 \\
1 & 0 & 1 & 1 & 1 \\
1 & 1 & 0 & 0 & 1 \\
1 & 1 & 1 & 1 & 0
\end{array} \qquad
\begin{array}{c|c|c|c|c|c}
T_{A} & T_{B} \\
\hline 1 & 1 \\
0 & 0 \\
1 & 1 \\
0 & 0 \\
1 & 0 \\
0 & 1 \\
1 & 0 \\
0 & 1
\end{array} \\
\\
\begin{aligned}
T_{A} & = x'\\
T_{B} & = A'\cdot x' + A\cdot x = (A \oplus x)'
\end{aligned} \\
\\
\text{Using the excitation table of the JK flip-flop:} \\
\\
\begin{array}{c|c|c|c|c|c}
A & B & x & A+ & B+ \\
\hline 0 & 0 & 0 & 1 & 1 \\
0 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 \\
1 & 0 & 1 & 1 & 1 \\
1 & 1 & 0 & 0 & 1 \\
1 & 1 & 1 & 1 & 0
\end{array} \qquad
\begin{array}{c|c|c|c|c|c}
J_{A} & K_{A} & J_{B} & K_{B} \\
\hline 1 & X & 1 & X \\
0 & X & 0 & X \\
1 & X & X & 1 \\
0 & X & X & 0 \\
X & 1 & 0 & X \\
X & 0 & 1 & X \\
X & 1 & X & 0 \\
X & 0 & X & 1
\end{array} \\
\\
\begin{aligned}
J_{A} & = x'\\
K_{A} & = x'\\
J_{B} & = A'\cdot x' + A\cdot x = (A \oplus x)' \\
K_{B} & = (A \oplus x)'
\end{aligned} \\
\\
\end{gather*}
$$
### Extra
Tikz template for state diagrams
```latex
\usepackage{tikz}
\usetikzlibrary{calc}
% https://tex.stackexchange.com/questions/354199/how-to-make-an-arrow-from-a-node-to-itself-have-a-nice-arc
\def\loopsize{6mm}
\newcommand\round[5][-]%
{
  \draw[#1]
    ($ (#2.#3) + {cos(#3)}*(0,{0.71*(\loopsize/2)}) - {sin(#3)}*({0.71*(\loopsize/2)},0) $)
    arc (180+#3-45:180+#3-45-270:\loopsize/2)
    node[midway, #4] {#5};
}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt,node distance=4cm]
\begin{document}
\begin{tikzpicture}[auto,thick]

  \node[vertex] (a) {00};
  \node[vertex,right of=a] (b) {01};
  \node[vertex,below of=a] (c) {10};
  \node[vertex,right of=c] (d) {11};

  \round[->]{a}{135}{}{0/0};  
  \draw[->, bend left=15] (a) to node[midway] {1/0} (b);
  
  \draw[->, bend left=15] (b) to node[midway] {0/1} (a);
  \draw[->, bend left=15] (b) to node[midway] {1/0} (d);

  \draw[->, bend left=15] (c) to node[midway] {0/1} (a);
  \round[->]{c}{-135}{}{1/0};  

  \draw[->, bend left=15] (d) to node[midway] {0/1} (a);
  \draw[->, bend left=15] (d) to node[midway] {1/0} (c);
\end{tikzpicture}
\end{document}
```