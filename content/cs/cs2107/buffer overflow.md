---
tags:
  - cs2107/chapter8
  - cs/security
  - cs/pwn
  - lang/c
  - lang/python
complete: false
prev: /labyrinth/notes/cs/cs2107/format_string_vulnerability
next: /labyrinth/notes/cs/cs2107/integer_overflow

---
### Summary
Premise
- user can input more data into a fixed sized buffer than it can hold
- vulnerable functions with no bounds checks, eg. `strcpy`, `gets`

Attack
- send oversized input to overwrite adjacent memory: local variables, saved frame pointer, return address on stack, function pointers on heap.
- overwrite return address to execute another function

Attacker’s goals    
- arbitrary code execution/remote shell -> execution integrity
- leak data from memory -> confidientiality
- crash service -> execution integrity
  
Defense
- functions with bouds checks, eg. `strncpy`, `snprintf`
- compiler protections, eg. stack canaries, ASLR, NX/DEP
- ese high-level languages or memory-safe techniques
- detecting implementation bugs: code audits, fuzz testing, and runtime sanitizers
### Concept
Buffer overflow
- exploit implementation bugs
- unsafe functions
- involves [strings](/labyrinth/notes/cs/cs2100/strings_in_C)
> pay attention to the null terminating character

Canary
- detect stack smashing
- secret inserted at selected memory locations at runtime
- checks to ensure that these values are not modified

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
\node at(f1) {parameters};
\node at(f2) {ra};
\node at(f3) {fp};
\node[right=of f3] (rbp) {$\$$rbp};
\draw[->] (rbp) -- (f3);
\node[red] at(f4) {canary};
\node at(f5) {local variables};
\node[right=of f5] (rsp) {$\$$rsp};
\draw[->] (rsp) -- (f5);

\end{tikzpicture}
\end{document}
```

ASLR
- address space layout randomization
- ensure that data and instructions are not always stored in the same memory locations
- eg. PIE -> position independent executables
> usually the offsets for the instructions within a program remain unchanged
### Application
Overflow local variables
```c
int win() {
	char* argv[3] = {"/bin/cat", "flag.txt", NULL};
	printf("Good job!\n");
	execve("/bin/cat", argv, NULL);
}

int vuln() {
	char secret[0x10] = "[REDACTED]"; // 16 bytes
	char buf[0x20] = "";              // 32 bytes

	printf("Welcome to the bad stack, what would you like to input today?\n");
	printf("Input whatever:\n");
	gets(buf); // vulnerable to buffer overflow
	
	if (!strncmp(buf, secret, 0x10)) {
		printf("You found the secret activation!\n");
		printf("Fine, here's the flag...\n");
		win();
		exit(0);
	}

	printf("Echo: %s", buf);
}

int main() {
	vuln();
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
\foreach \i in {0,...,8} {
    \node[frame] (f\i) at (0,\frameh*\i) {};
}

\node at(f0) {...};
\node at(f1) {ra};
\node at(f2) {fp};
\node[right=of f2] (rbp) {$\$$rbp};
\draw[->] (rbp) -- (f2);
\node at(f3) {secret[8-15]};
\node at(f4) {secret[0-7]};
\node at(f5) {buf[24-31]};
\node at(f6) {buf[16-23]};
\node at(f7) {buf[8-15]};
\node at(f8) {buf[0-7]};
\node[right=of f8] (rsp) {$\$$rsp};
\draw[->] (rsp) -- (f8);

\end{tikzpicture}
\end{document}
```

Overflow with canary and ASLR


### Extra
Python pwntools basic template
```python

```