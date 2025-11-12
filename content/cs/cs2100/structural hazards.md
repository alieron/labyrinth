---
tags:
  - cs2100/chapter11
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/MIPS_pipelining
next: /labyrinth/notes/cs/cs2100/data_hazards

---
### Summary
Single memory module
- both instruction fetching and data fetching/writing uses memory
- conflict when trying to read instructions and data from memory simultaneously

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
\foreach \i in {1,...,4} {
	\node[align=right] at(0,-\i) {\i};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,ID,EX,MEM,WB}
\pipeline{4}{4}{IF,ID,EX,MEM,WB}
\node[MEM,fill=red!80] at(4,-1) {};
\node[IF,fill=red!80] at(4,-4) {};

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
\foreach \i in {1,...,4} {
	\node[align=right] at(0,-\i) {\i};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,ID,EX,MEM,WB}
\pipeline{4}{4}{stall,IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```
> but now it conflicts with 2nd instruction, so this will result in a 3 cycle stall in the end, stalling is inefficient

- solution: split - instruction memory and data memory

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
\foreach \i in {1,...,4} {
	\node[align=right] at(0,-\i) {\i};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,ID,EX,MEM,WB}
\pipeline{4}{4}{IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```

Shared register file
- both instruction decode and write back

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
\foreach \i in {1,...,4} {
	\node[align=right] at(0,-\i) {\i};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,ID,EX,MEM,WB}
\pipeline{4}{4}{IF,ID,EX,MEM,WB}
\node[WB,fill=red!80] at(5,-1) {};
\node[ID,fill=red!80] at(5,-4) {};

\end{tikzpicture}
\end{document}
```
- solution: half cycles - write to reg file in first half, read in second
### Concept
Structural hazards
- simultaneous use of hardware resources
- shared memory module or shared register file

Stalling
- delaying the pipeline by one or more clock cycles