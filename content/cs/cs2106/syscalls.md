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
POSIX syscalls for spawning processes

| Syscall               | Include      | Function                                                                                                                   |
| --------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `fork()`              | `<unistd.h>` | duplicates the current process<br>returns `0` in the child and child's pid in the parent                                   |
| `execl(path, arg...)` | `<unistd.h>` | replace the current process image with a new one<br>returns `-1` only if error                                             |
| `exit(status)`        | `<unistd.h>` | terminate the current process<br>does not return, passes `status` to the parent process                                    |
| `wait(status)`        | `<unistd.h>` | wait for **one** child process to terminate and stores it's status<br>returns the pid of the child process that terminates |
| `getpid()`            | `<unistd.h>` | returns the pid of the current process                                                                                     |
### Concept
#### System calls
- API to the OS
- calling services in the kernel
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
	- passes parameters 1-to-1 to the syscall
- function adapter
	- library provides a more user friendly version
	- handles more complicated setup for the syscall
```c
char msg[] = "Hello world!";
// wrapper
write(1, msg, 13); // 1 is the fd for stdout
// adapter
printf(msg); // other parameters are handled by the function
```
> use `strace` on the binary to see the syscalls made by adapters

Mechanism
- user mode: program sets syscall register
- kernel mode: dispatcher checks the value and calls the corresponding handler
- user mode: return to program
#### Process hierachy
Master process
- `init` process
- `pid = 1`
- spawns all other processes via `fork()` + `exec()`

Zombie processes
- process that has terminated
- hold onto process data until `wait()` in the parent
- parent terminates before child -> `init` becomes parent, `init` calls `wait()`
- child terminates but parent doesn't call `wait()` -> child remains a zombie
![[zombie.png|500]]
### Application
Forking ^52e85c
```c
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
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]
\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node [vertex] (0){$p_0$}
  child {
    node [vertex, label={fork=c\_pid}] (1) {$p_0$}
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

Waiting
- assuming that wait doesn't block when there are no child processes

```c
int main() {
	// This is process P
	if (fork() == 0) {
		// This is process Q
		if (fork() == 0) {
			// This is process R
			......
			return 0;
		}
		<Point α>
	}
	<Point β>
	return 0;
}
// breaking down into processes
// process P
if (fork() == 0) // parent, so skip
<Point β>
// process Q
if (fork() == 0) { // child, so enter
	if (fork() == 0) // parent, so skip
	<Point α>
}
<Point β>
// process R
if (fork() == 0) { // child, so enter
	if (fork() == 0) { // child, so enter
		......
		return 0; // exit
```

| Point α      | Point β      | Behaviour                             |
| ------------ | ------------ | ------------------------------------- |
|              | `wait(NULL)` | P waits for Q<br>Q waits for R        |
| `wait(NULL)` |              | P doesn't wait<br>Q waits for R       |
| `wait(NULL)` | `wait(NULL)` | P waits for Q<br>Q waits for R        |
| `execl(...)` | `wait(NULL)` | P waits for Q<br>Q may no longer wait |
| `wait(NULL)` | `execl(...)` | P may no longer wait<br>Q waits for R |
> `execl()` replaces the process image, so any original code after it is replaced

Forking factorial
- scope is irrelevant, whole process is duplicated

```c
int factorial(int n) {
	if (n == 0) {
		fork();       // forked up, only on the last iteration
		return 1;
	}
	return factorial(n‐1) * n;
}
int main() {
	printf("fac(2) = %d\n", factorial(2));
	return 0;
}
// output
// fac(2) = 2
// fac(2) = 2
```