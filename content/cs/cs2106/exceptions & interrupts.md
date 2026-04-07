---
tags:
  - cs2106/chapter2
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/syscalls
next: /labyrinth/notes/cs/cs2106/process_scheduling

---
### Concept
#### Exceptions
- might occur when executing machine level instructions
- arithmetic errors:
	- overflow, underflow, divide by zero
- memory errors:
	- illegal mem address, mis-aligned memory access
- synchronous, occurs due to program execution
- program is terminated and exception handler is executed automatically
#### Interrupts
- external events that interrupt the program execution
- e.g. timer, mouse movement, keyboard input
- program is suspended and interrupt handler is executed automatically
> `ctrl + c` to interrupt programs in the terminal
#### Handlers
1. save register and CPU state
2. perform handler routine
3. restore register and CPU
4. return
- control is transferred to the handler automatically on exception/interrupt

### Application
Program that cannot be interrupted by `ctrl + c`