---
tags:
  - cs2107/chapter8
  - cs/security
  - cs/pwn
  - lang/c
complete: false
prev: /labyrinth/notes/cs/cs2107/format_string_vulnerability

---
### Summary

### Concept

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

ret2win

### Extra
