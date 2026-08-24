---
tags:
  - cs2106/chapter7
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/synchronization_problems
next: /labyrinth/notes/cs/cs2106/contiguous_memory

---
### Summary
Memory abstraction methods

| Method                                                            | Core Idea                                                             | Blocks         | Fragmentation | Advantages                                                     | Disadvantages                                                     |
| ----------------------------------------------------------------- | --------------------------------------------------------------------- | -------------- | ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| **physical**                                                      | physical memory addresses                                             | dynamic        | -             | - simple<br>- no overhead                                      | - clashing load/store<br>- no protection                          |
| **address relocation**                                            | logical addresses + relocation register                               | dynamic        | -             | - programs can be loaded anywhere<br>- improves flexibility    | - limited protection<br>- still assumes contiguous allocation     |
| **base + limit**                                                  | logical address + base register, checked against limit for protection | dynamic        | -             | - memory protection                                            | - additional compute and check                                    |
| **[fixed partitioning](/labyrinth/notes/cs/cs2106/contiguous_memory#Fixed_partition)**     | process occupies one fixed partition                                  | fixed          | internal      | - easy to implement<br>- fast access                           | - partition need to contain large processes, some space is wasted |
| **[dynamic partitioning](/labyrinth/notes/cs/cs2106/contiguous_memory#Dynamic_partition)** | process occupies one partition of the exact size needed               | dynamic        | external      | - removes internal fragmentation<br>- flexible                 | - need size info in OS<br>- difficult memory allocation over time |
| **[buddy blocks](/labyrinth/notes/cs/cs2106/buddy_blocks)**                                              | memory split into power-of-two sized blocks                           | dynamic (`2ⁿ`) | both          | - efficient allocation/deallocation<br>- reduces fragmentation | - small blocks are not cost effective                             |

Disjoint memory schemes

| Method                                    | Core Idea                                                             | Blocks               | Fragmentation Type | Advantages                                                           | Disadvantages                                                      |
| ----------------------------------------- | --------------------------------------------------------------------- | -------------------- | ------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **[paging](/labyrinth/notes/cs/cs2106/paging_scheme)**             | memory split into fixed-size pages/frames, process divided into pages | fixed                | internal           | - simple allocation                                                  | - page table overhead, extra memory access (unless cached via TLB) |
| **[segmentation](/labyrinth/notes/cs/cs2106/segmentation_scheme)** | memory divided into logical segments                                  | dynamic              | external           | - segments are contiguous<br>- can be protected/shared independently | - more complex allocation                                          |
| **[segmentation + paging](/labyrinth/notes/cs/cs2106/segmentation_+_paging)**             | combines segmentation and paging                                      | fixed, dynmic number | both               | - reduces fragmentation<br>- dynamic growth                          | - high overhead (multiple lookups)                                 |
### Concept
#### RAM
- array of bytes with unique **physical addresses**
- contiguous region - interval of consecutive addresses ^e3dfaf

Data
- transient - valid for limited time
- persistent - valid for the duration of the program
- both types can grow or shrink during execution

Role of the OS
1. allocate memory space to a new process
2. manage memory space for process
3. protect memory space of processes from each other
4. provide [syscalls](/labyrinth/notes/cs/cs2106/syscalls) for processes to access memory
5. manage memory for internal use within the process

#### Physical addressing
- processes load and store from physical addresses
- direct addressing
- hard to run multiple processes
	- load and stores may clash
	- hard to protect memory space
#### Relative addressing
Logical address
- physical addressing is bad
- each process has a self-containted logical memory space
- OS manages the mapping from logical to physical memory

Address relocation
- when loading the process into memory
- add an offset to all memory references for a particular process
- slow -> need to calculate everything
- hard to distinguish memory refernce from other instructions

Base + Limit registers
- base register -> points to the start of the space allocated to the process
- limit register -> size of the space allocated to the process
- at compile time, memory references are compiled as an offset from the base register
- need to compute `physical = base + offset` and check `offset < limit` **for every access**