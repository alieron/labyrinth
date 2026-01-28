---
tags:
  - cs2106/chapter2
  - cs/low_level
  - lang/c
complete: false
prev: /labyrinth/notes/cs/cs2106/stack_memory
next: /labyrinth/notes/cs/cs2106/exceptions_&_interrupts

---
### Summary
Syscalls

| Syscall                  | Description                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `getpid()`               | returns the pid of the current process                                             |
| `write(fd, buff, count)` | writes a buffer to a file descriptor                                               |
| `fork()`                 | duplicates the current process<br>returns `0` in the child and `pid` in the parent |
### Concept
#### System calls
- API to the OS
- provides a way of calling services in the kernel
- change to kernel mode
- UNIX:
	- POSIX standards
	- ~100 calls
- Windows:
	- Win API
	- ~1000 calls

Invocation
- function wraper
	- library provides a version with the same name and parameters
	- passes parameters to syscall
- function adapter
	- library provides a more user friendly version
	- handles more complicated setup for the syscall

```c
char msg[] = "Hello world!";

#include <unistd.h>
write(1, msg, 13); // 1 refers to stdout

#include <stdio.h>
printf(msg); // other parameters are handled by the function
```
> note that `printf` makes a syscall since IO is handled by the OS, use `strace` on the binary to see the syscalls

Mechanism
- user mode: program sets syscall register
- kernel mode: dispatcher checks the value and calls the corresponding handler
- user mode: return to program
### Application
Forking
```c
#include <unistd.h>
#include <stdio.h>

int main()
{
	int result;

	result = fork(); // A
	if (result==0) 
		fork(); // B
	else {
		fork(); // C
		fork(); // D
	}

	printf("Hello\n"); //how many? 6
	return 0;
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node [vertex] (0){$p_0$}
  child {
    node [vertex, label={fork=pid}] (1) {$p_0$}
    child {
      node [vertex] (2) {$p_0$}
      child {
        node [vertex] (3) {$p_0$}
      }
      child {
        node [vertex] {$p_4$}
      }
    }
    child {
      node [vertex] {$p_2$}
      child {node [vertex] {$p_2$}}
      child {node [vertex] {$p_5$}}
    }
  }
  child {
    node [vertex, label={fork=0}] {$p_1$}
    child {
      node [vertex,] {$p_1$}
    }
    child {
      node [vertex] {$p_3$}
    }
  };
  
	\coordinate (ref) at ($(3)+(-2,0)$);
  \node at (ref |- 0) {A};
	\node at (ref |- 1) (h1) {B};
	\node at (ref |- 2) (h2) {C};
	\node at (ref |- 3) (h3) {D};
\end{tikzpicture}
\end{document}
```