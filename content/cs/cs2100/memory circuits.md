---
tags:
  - cs2100/chapter16
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2100/sequential_circuits

---
### Summary
Random access memory(RAM)
- static RAM -> use flip-flops
- dynamic RAM -> use capacitor charges

Memory unit
- combined in an array to form larger units

![[mem_unit.png]]

Memory arrays
- uses a [decoder](/labyrinth/notes/cs/cs2100/MSI_components#^c776bf) on the more significant bits of the address to index the appropriate cell for the next level

![[4k_8bit_ram.png]]
### Concept
States
- each flip-flop is responsible for 1 bit

$$
m\text{ flip-flops} \implies 2^m\text{ states}
$$

Memory properties
- compromise between
	- fast excess
	- large capacity
	- economical cost
	- non-volatile

Data transfer
- how the CPU indexes and reads from/writes to memory

![[cpu_mem.png]]