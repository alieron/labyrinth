---
tags:
  - cs2106/chapter2
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2106/OS
next: /labyrinth/notes/cs/cs2106/stack_memory

---
### Concept
#### Process abstraction
- dynamic abstraction for a executing programs
- stores information required to describe the running program

| Memory context                                             | Hardware context                                                                                                                           | OS context                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| - code/machine code<br>- data<br>- **stack**<br>- **heap** | - [registers](/labyrinth/notes/cs/cs2100/mips#^44e5a0)<br>- [program counter](/labyrinth/notes/cs/cs2100/mips_datapath#^cfdb07)<br>- return PC<br>- **stack pointer**<br>- **frame pointer** | - process properties<br>- resources used<br>- **pid**<br>- **process state** |
#### Memory regions
Text
- stores the instructions of the program
- usually machine code

Data
- stores the data used by the program
- filled at **compile time**

[Stack](/labyrinth/notes/cs/cs2106/stack_memory)
- stores data associated with function calls
- allocated when needed and deallocated when function returns

[Heap](/labyrinth/notes/cs/cs2106/heap_memory)
- stores dynamic data
- allocated only at runtime
- no definite deallocation timing

#### 5 state process model
- create: spawn new process
- admit: process becomes ready to run
- switch(scheduled): process is selected to be run
- switch(release): process gives up CPU, either voluntarily or by scheduler
- event wait: process requests service that is unavailable or in progress, ie. I/O, user input, network request
- event occurs: request is fulfilled and process can continue

![[5-state_model.png]]

Queuing model
- global view from the OS's perspective
- 1 CPU can only run <= 1 process at a time

![[queuing-model.png]]

#### Process control block(PCB)
- entry in the process table
- contains the whole context required to describe one process