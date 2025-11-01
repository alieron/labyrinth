---
tags:
  - cs2107/chapter7
  - cs/low_level
  - cs/pwn
  - lang/c
  - lang/pgf-tikz
complete: true
prev: /labyrinth/notes/cs/cs2107/SSL_renegotiation
next: /labyrinth/notes/cs/cs2107/format_string_vulnerability

---
### Summary
Attacks
- overwrite existing **portion of code**

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}
\begin{document}

\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

% Stack frames (grows downward)
\foreach \i [evaluate=\i as \label using int(1002+\i)] in {0,...,7} {
    \node[label=left:{\label},frame] (f\i) at (0,-\frameh*\i) {};
}

\node at(f2) {branch to 1008};
\node at(f6) {normal code};
\node at(f7) {normal code};

\draw[->,cyan] (f0.east) to[bend left=75] (f1.east);
\draw[->,cyan] (f1.east) to[bend left=75] (f2.east);
\draw[->,cyan] (f2.east) to[bend left=75] (f6.east);
\draw[->,cyan] (f6.east) to[bend left=75] (f7.east);

\foreach \i [evaluate=\i as \label using int(1002+\i)] in {0,...,7} {
    \node[label=left:{\label},frame] (ff\i) at (8,-\frameh*\i) {};
}

\node at(ff2) {branch to 1008};
\node[red] at(ff6) {malicious code};
\node[red] at(ff7) {malicious code};

\draw[->,cyan] (ff0.east) to[bend left=75] (ff1.east);
\draw[->,cyan] (ff1.east) to[bend left=75] (ff2.east);
\draw[->,cyan] (ff2.east) to[bend left=75] (ff6.east);
\draw[->,cyan] (ff6.east) to[bend left=75] (ff7.east);

\end{tikzpicture}
\end{document}
```
- replace **memory location** used by direct jump

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}
\begin{document}

\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

% Stack frames (grows downward)
\foreach \i [evaluate=\i as \label using int(1002+\i)] in {0,...,4} {
    \node[label=left:{\label},frame] (f\i) at (0,-\frameh*\i) {};
}
\node[label=left:{...},frame] (f5) at (0,-\frameh*5) {};
\node[label=left:{6000},frame] (f6) at (0,-\frameh*6) {};

\node at(f2) {branch to $\color{red}{6000}$};
\node at(f6) {other code};

\draw[->,cyan] (f0.east) to[bend left=75] (f1.east);
\draw[->,cyan] (f1.east) to[bend left=75] (f2.east);
\draw[->,cyan] (f2.east) to[bend left=75] (f6.east);

\end{tikzpicture}
\end{document}
```
- replace **memory location** used by indirect jump

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}
\begin{document}

\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

% Stack frames (grows downward)
\foreach \i [evaluate=\i as \label using int(1002+\i)] in {0,...,4} {
    \node[label=left:{\label},frame] (f\i) at (0,-\frameh*\i) {};
}
\node[label=left:{...},frame] (f5) at (0,-\frameh*5) {};
\node[label=left:{3000},frame] (f6) at (0,-\frameh*6) {};
\node[label=left:{...},frame] (f7) at (0,-\frameh*7) {};
\node[label=left:{6000},frame] (f8) at (0,-\frameh*8) {};

\node at(f2) {branch to (3000)};
\node[red] at(f6) {6000};
\node at(f8) {other code};

\draw[->,cyan] (f0.east) to[bend left=75] (f1.east);
\draw[->,cyan] (f1.east) to[bend left=75] (f2.east);
\draw[->,cyan] (f2.east) to[bend left=75] (f8.east);

\end{tikzpicture}
\end{document}
```
> hijacking indirect jumps is called stack smashing

Attacker's goals
- compromise execution integrity
- run malicious code
### Concept
Control flow
- incrementation of the [program counter](/labyrinth/notes/cs/cs2100/MIPS_datapath#^cfdb07)(PC)
- **direct branch** - PC replaced by a constant value specified in the instruction, ie. branch or jump
- **indirect branch** - PC replaced by a value fetched from memory

Call [stack](/labyrinth/notes/cs/cs2040s/stack_ADT)
- LIFO
- exists in memory
- stack pointer(`$rsp`) indexes the top of the stack

Calling functions
- elements pushed onto the stack
	1. parameters
	2. *return address*, value of PC during the call instruction
	3. previous frame pointer
	4. local variables
- jump to function and execute
- pop all the elements
- jump to *return address*

```c
int foo(int a) {
	int b = 253;
	int c = 254;
}

int main() {
	foo(3);
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}
\begin{document}

\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

% Stack frames (grows downward)
\foreach \i in {0,...,5} {
    \node[frame] (f\i) at (0,\frameh*\i) {};
}

\node at(f0) {...};
\node at(f1) {a = 3};
\node at(f2) {ra};
\node at(f3) {fp};
\node[right=of f3] (rbp) {$\$$rbp};
\draw[->] (rbp) -- (f3);
\node at(f4) {b = 253};
\node at(f5) {c = 254};
\node[right=of f5] (rsp) {$\$$rsp};
\draw[->] (rsp) -- (f5);

\end{tikzpicture}
\end{document}
```
> similar to the stack in the [environment model](/labyrinth/notes/cs/cs1101s/environment_model)
### Extra
Tikz template for drawing memory frames
```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}
\begin{document}

\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

% Stack frames (grows downward)
\foreach \i [evaluate=\i as \label using int(1002+\i)] in {0,...,4} {
    \node[label=left:{\label},frame] (f\i) at (0,-\frameh*\i) {};
}

\node[frame] (f5) at (0,-\frameh*5) {};
\node[left=0.5 of f5] {...};
\node[frame] (f6) at (0,-\frameh*6) {};
\node[left=0.5 of f6] {6000};

\node at(f2) {branch to $\color{red}{6000}$};
\node at(f6) {other code};

\draw[->,cyan] (f0.east) to[bend left=75] (f1.east);
\draw[->,cyan] (f1.east) to[bend left=75] (f2.east);
\draw[->,cyan] (f2.east) to[bend left=75] (f6.east);

\end{tikzpicture}
\end{document}
```

Tikz template for drawing stack frames
```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}
\begin{document}

\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

% Stack frames (grows downward)
\foreach \i in {0,...,5} {
    \node[frame] (f\i) at (0,\frameh*\i) {};
}

\node at(f0) {...};
\node at(f1) {a = 3};
\node at(f2) {ra};
\node at(f3) {fp};
\node[right=of f3] (rbp) {$\$$rbp};
\draw[->] (rbp) -- (f3);
\node at(f4) {b = 253};
\node at(f5) {c = 254};
\node[right=of f5] (rsp) {$\$$rsp};
\draw[->] (rsp) -- (f5);

\end{tikzpicture}
\end{document}
```