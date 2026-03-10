---
tags:
  - cs2106/lect7
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/synchronization_problems
next: /labyrinth/notes/cs/cs2106/contiguous_memory

---
### Concept
#### RAM
- array of bytes with unique **physical addresses**
- contiguous region: interval of consecutive addresses ^e3dfaf

Data
- transient - valid for limited time
- persistent - valid for the duration of the program
- both types can grow or shrink during execution

Role of the OS
1. allocate memory space to a new process
2. manage memory space for process
3. protect memory space of processes from each other
4. manage memory for internal use within the process

#### Physical addressing
- processes load and store from physical addresses
- direct addressing
- hard to run multiple processes, load and stores may clash
#### Relative addressing
Address relocation
- when loading the process into memory
- add an offset to all memory references
- slow -> need to calculate everything
- hard to distinguish memory refernce from other instructions

Base + Limit registers
- base register -> points to the start of the space allocated to the process
- limit register -> size of the space allocated to the process
- logical address:
	- at compile time, memory references are compiles as an offset from the base register
	- each process has a self-containted logical memory space
- need to compute `physical = base + offset` and check offset < limit` for every access