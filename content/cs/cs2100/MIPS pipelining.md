---
tags:
  - cs2100/chapter17
  - cs/low_level
  - lang/pgf-tikz
complete: true
prev: /labyrinth/notes/cs/cs2100/sequential_circuits
next: /labyrinth/notes/cs/cs2100/structural_hazards

---
### Summary
Pipelined [datapath](/labyrinth/notes/cs/cs2100/MIPS_datapath)

![[pipeline_datapath.png]]

Pipeline registers
1. IF/ID
	- instruction(32-bit)
	- `PC + 4`
2. ID/EX
	- values read from registers
	- 32-bit immediate(after sign extension)
	- `PC + 4`
	- WR
3. EX/MEM
	- `PC + 4` or `(PC + 4) + (imm × 4)`
	- ALU result
	- isZero
	- RD2(used for `lw` and `sw`) 
	- WR
4. MEM/WB ^8849f3
	- ALU result
	- memory read data
	- WR

Pipeline [control path](/labyrinth/notes/cs/cs2100/MIPS_control_path)^f8d082

![[pipeline_control.png]] 
### Concept
Instruction pipelining
- keep every part of processor busy at all time
- different processor units are working in parallel
- **sequential execution** - execute each instruction one after the other

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
\foreach \i in {1,...,3} {
	\node[align=right] at(0,-\i) {\i};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{6}{IF,ID,EX,MEM,WB}
\pipeline{3}{11}{IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```
- **pipelined execution** - start the next instruction once the first stage of the previous is done

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
\foreach \i in {1,...,3} {
	\node[align=right] at(0,-\i) {\i};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{2}{IF,ID,EX,MEM,WB}
\pipeline{3}{3}{IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```

Perfect pipelining
- each subsequent instruction is only delayed by one clock cycle

$$
\begin{gather*}
\text{Clock cycles:}&C = I + N - 1 \\
\\
\text{Speed Up:}&\begin{aligned}
\frac{T_{\text{seq}}}{T_{\text{pipeline}}} &= \frac{I\times \sum_{i=1}^{N}t_{i} }{(I+N-1)\times (max(t_{i})+t_{\text{overhead}})} \\
\\
&\text{assume: } \forall i \ t_{i} = t \text{ and }t_{\text{overhead}} = 0 \\
\\
&= \frac{I\times N\times t}{(I+N-1)\times t} \\
\\
&\approx \frac{I\times N\times t}{I\times t} = N\text{, if }I \gg N
\end{aligned}
\end{gather*}
$$
### Extra
Tikz template for drawing pipeline tables
```latex
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
\foreach \i in {1,...,3} {
	\node[align=right] at(0,-\i) {\i};
}
% rows: cycles
\foreach \i in {1,...,16} {
		\node at(\i,0) {\i};
}

\pipeline{1}{1}{IF,ID,EX,MEM,WB}
\pipeline{2}{6}{IF,ID,EX,MEM,WB}
\pipeline{3}{11}{IF,ID,EX,MEM,WB}

\end{tikzpicture}
\end{document}
```