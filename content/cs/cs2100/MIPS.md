---
tags:
  - cs2100/chapter3
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/structs
next: /labyrinth/notes/cs/cs2100/arithmetic_instructions

---
### Summary
MIPS registers ^44e5a0
- 32 32-bit registers
- no data type, just a number

| Name         | Number    | Use                                                                               |
| ------------ | --------- | --------------------------------------------------------------------------------- |
| `$zero`      | 0         | Constant value 0, **cannot be overridden**                                        |
| **`$at`**    | **1**     | **Reserved for the assembler**                                                    |
| `$v0-$v1`    | 2-3       | Values for results and expression evaluation                                      |
| `$a0-$a3`    | 4-7       | Arguments                                                                         |
| `$t0-t7`     | 8-15      | Temporaries                                                                       |
| `$s0-s7`     | 16-23     | Program variables                                                                 |
| `$t8-t9`     | 24-25     | Temporaries                                                                       |
| **`$k0-k1`** | **26-27** | **Reserved for the operating system**                                             |
| `$gp`        | 28        | Global pointer                                                                    |
| `$sp`        | 29        | Stack pointer, the stack is where the program's instructions are stored in memory |
| `$fp`        | 30        | Frame pointer                                                                     |
| `$ra`        | 31        | Return address                                                                    |
### Concept
Instruction Set Architecture([ISA](/labyrinth/notes/cs/cs2100/ISA))
- abstraction on the interface between hardware and low-level software
- tells the programmer about the processor's functionality
- specification of the processor's supported instructions and registers

Assembly
- human-readable
- provide **pseudo-instructions**, which are converted into real instructions before being assembled into machine code

Machine code
- instructions in binary format

Processor and memory(load-store model)
- code and data reside in **memory**
- during execution, each instruction is sent to the **processor** via the **bus**
- accessing memory is slow, the **processor** provides registers for temporary storage(load) of values
- we can perform operations on the values in the registers quickly
- post-computation, the value can be sent back to memory(store)

![[processor_bus_memory.png|800]]