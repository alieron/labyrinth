---
tags:
  - cs2106/lect4
  - cs/parallel
complete: false
prev: /labyrinth/notes/cs/cs2106/pipes
next: /labyrinth/notes/cs/cs2106/threads

---
### Summary
POSIX signals

| Signal    | Meaning                           | Default Action               |
| --------- | --------------------------------- | ---------------------------- |
| `SIGINT`  | interrupt from keyboard (ctrl+c)  | terminate                    |
| `SIGTERM` | termination request               | terminate                    |
| `SIGKILL` | immediate kill                    | terminate (cannot be caught) |
| `SIGSTOP` | stop process                      | stop (cannot be caught)      |
| `SIGCONT` | continue stopped process          | continue                     |
| `SIGALRM` | timer expired                     | terminate                    |
| `SIGCHLD` | child process state change        | ignore by default            |
| `SIGSEGV` | illegal memory access (seg fault) | terminate, dump core         |

POSIX syscalls for signals

| Syscall                | Include      | Function                                                         |
| ---------------------- | ------------ | ---------------------------------------------------------------- |
| `kill(pid, sig)`       | `<signal.h>` | sends a signal to a process or process group                     |
| `signal(sig, handler)` | `<signal.h>` | installs a simple signal handler for a signal                    |
| `raise(sig)`           | `<signal.h>` | sends a signal to the calling/current process                    |
| `pause()`              | `<unistd.h>` | suspends the process until a signal is received                  |
| `alarm(time)`          | `<unistd.h>` | schedules a `SIGALRM` signal after a specified number of seconds |
### Concept
- asynchronous notification regarding an event
- a software [interrupt](/labyrinth/notes/cs/cs2106/exceptions_&_interrupts#Interrupts) sent to a process
- handling:
	- default handler
	- user supplied handler
- sent by:
	- another process
	- OS
	- the same process

```c
#include <stdio.h>
#include <signal.h>
#include <unistd.h>

void myOwnHandler(int signo) {
	if (signo == SIGSEGV){
		printf("Memory access blows up!\n");
		exit(1);     
	}
}

int main() {
	int *ip = NULL;
	if (signal(SIGSEGV, myOwnHandler) == SIG_ERR) // replace the default handler
		printf("Failed to register handler\n");
	
	*ip = 123; // causes seg fault
	
	return 0;
} 
```