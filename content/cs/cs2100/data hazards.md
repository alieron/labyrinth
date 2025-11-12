---
tags:
  - cs2100/chapter11
  - cs/low_level
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/structural_hazards
next: /labyrinth/notes/cs/cs2100/control_hazards

---
### Summary
RAW dependency
- when a subsequent instruction reads from the destination register, written to by a previous instruction
- if read before written -> **stale result**, not the latest value

```mips
# looking at $2
sub $2, $1, $3    #1
and $12, $2, $5   #2
or $13, $6, $2    #3
add $14, $2, $2   #4
sw  $15, 100($2)  #5 
```
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
\foreach [count=\i] \inst in {sub,add,or,add,sw} {
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
\draw[->,red] (5,-1) -- (3,-2);
\draw[->,red] (5,-1) -- (4,-3);
\draw[->,green] (5,-1) -- (5,-4);
\draw[->,green] (5,-1) -- (6,-5);

\end{tikzpicture}
\end{document}
```
- solution: stalling

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
\foreach [count=\i] \inst in {sub,add,or,add,sw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,stall,stall,ID,EX,MEM,WB}
\pipeline{3}{5}{IF,ID,EX,MEM,WB}
\pipeline{4}{6}{IF,ID,EX,MEM,WB}
\pipeline{5}{7}{IF,ID,EX,MEM,WB}
\end{tikzpicture}
\end{document}
```
- solution: forwarding - forward the result from pipeline register, instead of waiting for WB

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
\foreach [count=\i] \inst in {sub,add,or,add,sw} {
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
\draw[->,orange] (3,-1) -- (4,-2);
\draw[->,orange] (4,-1) -- (5,-3);

\end{tikzpicture}
\end{document}
```
> recall that [MEM/WB](/labyrinth/notes/cs/cs2100/MIPS_pipelining#^8849f3) also stores the ALU result, and take forwarded data from the previous cycle only

Load word
- requires memory access
- value is only available after MEM

```mips
lw $2,  20($3)
and $12, $2, $5
or $13, $6, $2
add $14, $2, $2 
sw  $15, 100($2) 
```
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
\foreach [count=\i] \inst in {lw,and,or,add,sw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,stall,stall,ID,EX,MEM,WB}
\pipeline{3}{5}{IF,ID,EX,MEM,WB}
\pipeline{4}{6}{IF,ID,EX,MEM,WB}
\pipeline{5}{7}{IF,ID,EX,MEM,WB}
\draw[->,orange] (4,-1) -- (5,-2);

\end{tikzpicture}
\end{document}
```
### Concept
Data hazards
- data dependencies between instructions
- RAW - read after write
	- most important
	- can cause delay
- WAR - write after read
	- inconsequential in MIPS
- WAW - write after write
	- inconsequential in MIPS

Forwarding
- forward the result to any subsequent instruction before WB
- can come from EX/MEM or MEM/WB registers(for `lw` only from MEM/WB)
- go to the subsequent instruction's EX stage
### Application
Pipeline from MIPS code
```mips
lw $2, 0($1)    #1
lw $1, 100($6)  #2
sub $6, $1, $2  #3
add $6, $2, $6  #4
and $3, $6, $0  #5
sw $6, 50($1)   #6
```
- without forwarding

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
\foreach [count=\i] \inst in {lw,lw,sub,add,and,sw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,stall,stall,ID,EX,MEM,WB}
\pipeline{4}{6}{IF,stall,stall,ID,EX,MEM,WB}
\pipeline{5}{9}{IF,stall,stall,ID,EX,MEM,WB}
\pipeline{6}{12}{IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```
- with forwarding

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
\foreach [count=\i] \inst in {lw,lw,sub,add,and,sw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,ID,stall,EX,MEM,WB}
\pipeline{4}{4}{IF,stall,ID,EX,MEM,WB}
\pipeline{5}{6}{IF,ID,EX,MEM,WB}
\pipeline{6}{7}{IF,ID,EX,MEM,WB}
\draw[->,orange] (5,-2) -- (6,-3);
\draw[->,orange] (4,-1) -- (5,-3);
\draw[->,orange] (6,-3) -- (7,-4);
\draw[->,orange] (7,-4) -- (8,-5);
\draw[->,orange] (8,-4) -- (9,-6);

\end{tikzpicture}
\end{document}
```
- alternate forwarding

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
\foreach [count=\i] \inst in {lw,lw,sub,add,and,sw} {
	\node[align=right] at(0,-\i) {\inst};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,stall,ID,EX,MEM,WB}
\pipeline{4}{5}{IF,ID,EX,MEM,WB}
\pipeline{5}{6}{IF,ID,EX,MEM,WB}
\pipeline{6}{7}{IF,ID,EX,MEM,WB}
\draw[->,orange] (5,-2) -- (6,-3);
\draw[->,orange] (6,-3) -- (7,-4);
\draw[->,orange] (7,-4) -- (8,-5);
\draw[->,orange] (8,-4) -- (9,-6);

\end{tikzpicture}
\end{document}
```
> there is no more "correct" method, although the first one is more aligned with the examples in the slide