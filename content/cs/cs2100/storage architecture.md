---
tags:
  - cs2100/chapter4
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/ISA
next: /labyrinth/notes/cs/cs2100/memory_addressing

---
### Summary
Operations using different architectures
![[storage_architectures.png]]

`C = A + B`

| Stack                                    | Accumulator                      | Register-register                                                 | Memory-memory |
| ---------------------------------------- | -------------------------------- | ----------------------------------------------------------------- | ------------- |
| `push A`<br>`push B`<br>`add`<br>`pop C` | `load A`<br>`add B`<br>`store C` | `load r1, A`<br>`load r2, B`<br>`add r3, r1, r2`<br>`store C, r3` | `add C, A, B` |

### Concept
Storage architecture
- where are the operands stored so that we can perform operations on them?
- where is the result stored afterwards?
- how to specify the operands

Common storage architectures
- Stack architecture
	- operands are implicitly at the top of the stack
- Accumulator architecture
	- one operand is implicitly in the accumulater(special register)
- General-purpose register architecture
	- explicit operands
	- Register-memory architecture
		- operands in memory and registers
	- Register-register
		- operands in registers only
- Memory-memory
	- operands in memory only