---
tags:
  - cs2106/chapter2
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/processes
next: /labyrinth/notes/cs/cs2106/unix_syscalls

---
### Concept
#### Call [stack](/labyrinth/notes/cs/cs2040s/stack)
- occupies stack memory
- deallocated implicitly when the function returns

Frame pointer
- stack pointer might change as local variable are declared
- frame pointer points to a fixed lication in a stack frame

Saved registers
- general purpose registers(GPRs) are limited and mmight be exhausted
- **register spilling**:
	- use memory to store the GPR value temporarily
	- GPR is freed up for other purposes and restored later