---
tags:
  - cs2100/chapter4
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/instruction_encoding
next: /labyrinth/notes/cs/cs2100/storage_architecture

---
### Summary
Creating fixed-length instructions
- balance: code size <-> speed/performance <-> design complexity
- number of registers
- number of [addressing modes](/labyrinth/notes/cs/cs2100/memory_addressing#^d52034)
- number of operands

Creating an instruction set
- instructions of different types can have different number of operands
- fixed-length opcode

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta,decorations.pathreplacing}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (a) {Type-A};
  \node[draw,cell,right=1cm of a,minimum width=1.8cm] (a0) {x bits};
  \node[draw,cell,right=of a0,minimum width=1.5cm] (a1) {? bits};
  \node[draw,cell,right=of a1,minimum width=1.5cm] (a2){? bits};
  
  \node[yshift=\boxsize] (x0) at (a0) {opcode};
  \node[yshift=\boxsize] (x1) at (a1) {operand};
  \node[yshift=\boxsize] (xn) at (a2) {operand};
  
	\node[below=1cm of a] (b) {Type-B};
  \node[draw,cell,right=1cm of b,minimum width=1.8cm] (b0) {x bits};
  \node[draw,cell,right=of b0,minimum width=1.5cm] (b1) {? bits};
  \node[draw,cell,right=of b1,minimum width=1.5cm] (b2){y bits};
  
  \node[yshift=\boxsize] (x0) at (b0) {opcode};
  \node[yshift=\boxsize] (x1) at (b1) {operand};
  \node[yshift=\boxsize] (xn) at (b2) {unused};

\end{tikzpicture}
\end{document}
```
$$
2^x\text{ instructions shared between Type-A and Type-B}
$$
> wasted bits in Type-B

- expanding opcode

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta,decorations.pathreplacing}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (a) {Type-A};
  \node[draw,cell,right=1cm of a,minimum width=1.8cm] (a0) {x bits};
  \node[draw,cell,right=of a0,minimum width=1.5cm] (a1) {? bits};
  \node[draw,cell,right=of a1,minimum width=1.5cm] (a2){? bits};
  
  \node[yshift=\boxsize] (x0) at (a0) {opcode};
  \node[yshift=\boxsize] (x1) at (a1) {operand};
  \node[yshift=\boxsize] (xn) at (a2) {operand};
  
	\node[below=1cm of a] (b) {Type-B};
  \node[draw,cell,right=1cm of b,minimum width=3.3cm] (b0) {x+y bits};
  \node[draw,cell,right=of b0,minimum width=1.5cm] (b1) {? bits};
  
  \node[yshift=\boxsize] (x0) at (b0) {opcode};
  \node[yshift=\boxsize] (x1) at (b1) {operand};

\end{tikzpicture}
\end{document}
```
> think of the `x+y` as the `opcode` and `funct` in MIPS [R-type](/labyrinth/notes/cs/cs2100/instruction_encoding#^393b46) instructions

- maximise Type-A

$$
\begin{gather*}
\text{Reserve x-bit prefix for Type-B:} & 1111\dots11 \\
\\
\text{Remaining x-bit opccodes for Type-A:} & \begin{gathered}
0000\dots00 \\
\vdots \\
1111\dots10
\end{gathered} & 2^x - 1 \\
\\
\text{x+y-bit opcodes for Type-B:} & \underbrace{ 1111\dots11 }_{ \text{x-bits} }\underbrace{ \left\{\begin{gathered}
0000\dots00 \\
\vdots \\
1111\dots11
\end{gathered}\right.}_{ \text{y-bits} } & 2^y \\
\\
\text{Total instructions:} & 2^x-1 + 2^y
\end{gather*}
$$

- minimise Type-B

$$
\begin{gather*}
\text{Reserve x-bit opcode for Type-A:} & 1111\dots11 & 1 \\
\\
\text{Remaining x-bit prefixes for Type-B:} & \begin{gathered}
0000\dots00 \\
\vdots \\
1111\dots10
\end{gathered} & 2^x - 1 \\
\\
\text{x+y-bit opcodes for Type-B:} & \underbrace{ \begin{gathered}
0000\dots00 \\
\vdots \\
1111\dots10
\end{gathered} }_{ \text{x-bits} }\underbrace{ \left\{\begin{gathered}
0000\dots00 \\
\vdots \\
1111\dots11
\end{gathered}\right.}_{ \text{y-bits} } & (2^x-1)2^y \\
\\
\text{Total instructions:} & 1 + (2^x-1)2^y
\end{gather*}
$$
> maximise instructions -> give more instructions to the type with longer opcode
> minimise instructions -> give more instructions to the type with shorter opcode
### Concept
Complex Instruction Set Computer(CISC)
- single instruction perform complex operation
- smaller program size -> reduce memory use
- complex implementation -> no room for hardware optimization
- eg. x86-32, VAX

Reduced Instruction Set Computer(RISC)
- keep the instruction set small and simple
- software has to combine simpler operations to implement complex ones
- simple implementation -> can optimize hardware
- eg. MIPS, ARM

Instruction formats
- Fixed-length
	- easy to fetch and decode
	- used in most RISC
- Variable-length
	- multi-step fetch and decode, need to see how long the instruction is
	- more flexible(but complex) and compact instruction set
- Hybrid
	- mix of both
### Applcation
Instruction set
- Design an expanding opcode for the following to be encoded in a 36-bit instruction format. An address takes up 15 bits and a register number 3 bits
	- 7 instructions with two addresses and one register number
	- 500 instructions with one address and one register number
	- 50 instructions with no address or register

$$
\begin{gather*}
\text{Type-A} & \begin{array}{c|c|c}
\text{opcode} & \text{address} & \text{address} & \text{register no.} \\
\hline
\begin{gathered}
000 \\
\vdots \\
110
\end{gathered} & \text{15 bits} & \text{15 bits} & \text{3 bits}
\end{array} & 2^3 - 1 = 7 \\
\\
\text{Type-C} & \begin{array}{c|c|c}
\text{prefix} & \text{opcode} & \text{unused} \\
\hline
111 & \begin{gathered}
000000 \\
\vdots \\
111110
\end{gathered} & \text{27 bits}
\end{array} & 2^6 - 1 = 63 \\
\\
\text{Type-B} & \begin{array}{c|c|c}
\text{prefix} & \text{prefix} & \text{opcode} & \text{address} & \text{register no.} \\
\hline
111 & 111111 & \begin{gathered}
000000000 \\
\vdots \\
111111111
\end{gathered} & \text{15 bits} & \text{3 bits}
\end{array} & 2^9 = 512
\end{gather*}
$$
> start with the most restrictive type