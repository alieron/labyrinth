---
tags:
  - cs2100/chapter18
  - cs/low_level
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/data_hazards

---
### Summary
Control dependency
- when one instruction determines whether another gets executed
- need to wait for branch decision

```mips
beq  $1, $3, A  # suppose branch is taken
and $12, $2, $5
or  $13, $6, $2
add $14, $2, $2
A:
lw  $4,  5($7)
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,decorations.pathreplacing}
\tikzset{
  stage/.style={
    draw, thick, minimum size=0.8cm, align=center
  },
  stall/.style={stage,fill=gray!30},
  flush/.style={stage,fill=red!25},
  nop/.style={draw=none,fill=white!0},
  IF/.style={stage,label=center:{IF}},
  ID/.style={stage,label=center:{ID}},
  EX/.style={stage,label=center:{EX}},
  MEM/.style={stage,label={[font=\tiny]center:{MEM}}},
  WB/.style={stage,label=center:{WB}},
}

% \pipeline{inst}{cycle}{stage list}
\newcommand{\pipeline}[3]{%
  \foreach [count=\i] \stage in {#3} {
    \node[\stage] at($(#2+\i-1,-#1)$) {};
  }
}

\begin{document}
\begin{tikzpicture}[thick]
% cols: instructions
\foreach [count=\i] \inst in {beq,and,or,add,lw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,ID,EX,MEM,WB}
\pipeline{4}{4}{IF,ID,EX,MEM,WB}
\pipeline{5}{5}{IF,ID,EX,MEM,WB}

\draw[decorate,decoration={brace,amplitude=5pt}] 
  (9,-1.5) -- (9,-4.5) node[midway,right=6pt] {Incorrect Execution};

\end{tikzpicture}
\end{document}
```
- solution: stalling
	- branch decision in MEM

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzset{
  stage/.style={
    draw, thick, minimum size=0.8cm, align=center
  },
  stall/.style={stage, fill=gray!30, label=center:{}},
  flush/.style={stage, fill=red!25, label=center:{}},
  nop/.style={draw=none, fill=white!0},
  IF/.style={stage},
  ID/.style={stage},
  EX/.style={stage},
  MEM/.style={stage, font=\tiny},
  WB/.style={stage},
}

% \pipeline{inst}{cycle}{stage list}
\newcommand{\pipeline}[3]{%
  \foreach [count=\i] \stage in {#3} {
    \node[\stage] at($(#2+\i-1,-#1)$) {\stage};
  }
}

\begin{document}
\begin{tikzpicture}[thick]
% cols: instructions
\foreach [count=\i] \inst in {beq,lw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{stall,stall,stall,IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```
> stalls will add up over time, around 20% of code is some kind of brancing

- solution: branch predition (guess branch-not-taken)
	- branch taken -> wrong guess
	- branch decision in ID

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzset{
  stage/.style={
    draw, thick, minimum size=0.8cm, align=center
  },
  stall/.style={stage,fill=gray!30},
  flush/.style={stage,fill=red!25},
  nop/.style={draw=none,fill=white!0},
  IF/.style={stage,label=center:{IF}},
  ID/.style={stage,label=center:{ID}},
  EX/.style={stage,label=center:{EX}},
  MEM/.style={stage,label={[font=\tiny]center:{MEM}}},
  WB/.style={stage,label=center:{WB}},
}

% \pipeline{inst}{cycle}{stage list}
\newcommand{\pipeline}[3]{%
  \foreach [count=\i] \stage in {#3} {
    \node[\stage] at($(#2+\i-1,-#1)$) {};
  }
}

\begin{document}
\begin{tikzpicture}[thick]
% cols: instructions
\foreach [count=\i] \inst in {beq,and,or,add,lw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,flush}
\pipeline{5}{3}{IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```
- solution: branch predition (guess branch-taken)
	- branch taken -> correct guess
	- branch decision in ID

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzset{
  stage/.style={
    draw, thick, minimum size=0.8cm, align=center
  },
  stall/.style={stage,fill=gray!30},
  flush/.style={stage,fill=red!25},
  nop/.style={draw=none,fill=white!0},
  IF/.style={stage,label=center:{IF}},
  ID/.style={stage,label=center:{ID}},
  EX/.style={stage,label=center:{EX}},
  MEM/.style={stage,label={[font=\tiny]center:{MEM}}},
  WB/.style={stage,label=center:{WB}},
}

% \pipeline{inst}{cycle}{stage list}
\newcommand{\pipeline}[3]{%
  \foreach [count=\i] \stage in {#3} {
    \node[\stage] at($(#2+\i-1,-#1)$) {};
  }
}

\begin{document}
\begin{tikzpicture}[thick]
% cols: instructions
\foreach [count=\i] \inst in {beq,lw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```

Delayed branch
- do something else while waiting for the branch decision

```mips
or  $8, $9, $10
add $1, $2, $3
sub $4, $5, $6
beq $1, $4, Exit # RAW with add, sub, but not with or
xor $10, $1, $11 
```
```mips
add $1, $2, $3
sub $4, $5, $6
beq $1, $4, Exit 
or  $8, $9, $10  # moved here since it gets executed regardless of branch decision
# if branch is taken, do it after the or
xor $10, $1, $11 
```
### Concept
Control hazard
- control dependencies between instructions
- during branching

Branch decision
- made during the [MEM stage](/labyrinth/notes/cs/cs2100/MIPS_pipelining#^f8d082)
- or with early resolution in the ID stage

Reducing branch penalty
- **early branch resolution**
	- move branch decision to an earlier stage
- **branch prediction**
	- guess an outcome
- **delayed branching**
	- do some other computation while waiting for the branch decision
### Application
Pipeline from MIPS code
```mips
lw $s2, 0($s1)    # suppose branch is taken
bne $s2, $s3, L1
sub $s0, $s4, $s5
L1:
add $s0, $s0, $s3
```
- branch-taken, decision at ID
	- correct guess

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzset{
  stage/.style={
    draw, thick, minimum size=0.8cm, align=center
  },
  stall/.style={stage,fill=gray!30},
  flush/.style={stage,fill=red!25},
  nop/.style={draw=none,fill=white!0},
  IF/.style={stage,label=center:{IF}},
  ID/.style={stage,label=center:{ID}},
  EX/.style={stage,label=center:{EX}},
  MEM/.style={stage,label={[font=\tiny]center:{MEM}}},
  WB/.style={stage,label=center:{WB}},
}

% \pipeline{inst}{cycle}{stage list}
\newcommand{\pipeline}[3]{%
  \foreach [count=\i] \stage in {#3} {
    \node[\stage] at($(#2+\i-1,-#1)$) {};
  }
}

\begin{document}
\begin{tikzpicture}[thick]
% cols: instructions
\foreach [count=\i] \inst in {lw,beq,add} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,stall,EX,MEM,WB}
\pipeline{3}{3}{IF,stall,ID,EX,MEM,WB}
\draw[->,orange] (4,-1) -- (5,-2);

\end{tikzpicture}
\end{document}
```
- branch-not-taken, decision at MEM
	- wrong guess

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzset{
  stage/.style={
    draw, thick, minimum size=0.8cm, align=center
  },
  stall/.style={stage,fill=gray!30},
  flush/.style={stage,fill=red!25},
  nop/.style={draw=none,fill=white!0},
  IF/.style={stage,label=center:{IF}},
  ID/.style={stage,label=center:{ID}},
  EX/.style={stage,label=center:{EX}},
  MEM/.style={stage,label={[font=\tiny]center:{MEM}}},
  WB/.style={stage,label=center:{WB}},
}

% \pipeline{inst}{cycle}{stage list}
\newcommand{\pipeline}[3]{%
  \foreach [count=\i] \stage in {#3} {
    \node[\stage] at($(#2+\i-1,-#1)$) {};
  }
}

\begin{document}
\begin{tikzpicture}[thick]
% cols: instructions
\foreach [count=\i] \inst in {lw,beq,sub,add,add} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,stall,EX,MEM,WB}
\pipeline{3}{3}{IF,stall,ID,EX,flush}
\pipeline{4}{5}{IF,ID,flush}
\pipeline{5}{7}{IF,ID,EX,MEM,WB}
\draw[->,orange] (4,-1) -- (5,-2);

\end{tikzpicture}
\end{document}
```
> we cant use the non branched `add` since it gets its value from `sub`, which could result in a different value