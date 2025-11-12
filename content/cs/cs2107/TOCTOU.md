---
tags:
  - cs2107/chapter8
  - cs/security
complete: true
prev: /labyrinth/notes/cs/cs2107/script_injection
next: /labyrinth/notes/cs/cs2107/access_control

---
### Summary
Premise
- system performs a check (e.g., file permission) and later acts on the resource assuming the check still holds
- attacker can act between check and use
- shared resources and non-atomic sequences on multi-process/multi-threaded systems

Attack
- once a program checks access to file, attacker quickly replaces it with a symlink(pointer) to another file before the program opens it
- program acts on attacker-controlled target with original privileges
- requires careful timing or multiple threads/processes
- requires code excution on the target machine

Attacker’s goals
- access sensitive files -> coonfidentiality
- escalate privileges, alter program behavior, or cause corruption.

Defense
- use atomic operations 
- minimize privileged windows between check and use, which the attacker could use to run the replacement
- run with least privilege and validate after use if possible
### Concept
Race conditions
- when multiple [parallel](/labyrinth/notes/cs/cs2030s/parallelism) processes access shared data
- the order in which they access the shared data can lead to different outcomes

TOCTOU
- time-of-check-time-of-use
- race condition
- exploits the delay between time of check and time of use

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta, positioning}

\begin{document}
\begin{tikzpicture}[
  >=Latex,
  process/.style={font=\bfseries,anchor=east},
  event/.style={draw, rounded corners, fill=blue!70, align=center, minimum width=2cm, minimum height=0.8cm, font=\small},
  attack/.style={draw, rounded corners, fill=red!70, align=center, minimum width=2cm, minimum height=0.8cm, font=\small},
  timeline/.style={thick, -{Latex[length=3mm]}}
]

% Processes
\node[process] (victimlabel) at (0,0) {Victim process};
\node[process, below=1.5cm of victimlabel] (attackerlabel) {Attacker process};

% Timelines
\draw[timeline] (0,-3.5) -- (12,-3.5);

% Victim actions
\node[event] (check) at (2,0) {Check file\\permissions};
\node[event] (use) at (10,0) {Open file\\for writing};

\draw[->, thick] (check.east) -- node[above, font=\footnotesize] {time gap} (use.west);

% Attacker actions
\node[attack] (replace) at (6,-1.8) {Replace file\\with symlink};
\node[attack, right=3cm of replace] (gain) {Gain access\\to target file};

% Time labels
\node[font=\small] at (2,-4) {t1: Check(TOC)};
\node[font=\small] at (6,-4) {t2: Replace};
\node[font=\small] at (10,-4) {t3: Use(TOU)};

\end{tikzpicture}

\end{document}
```