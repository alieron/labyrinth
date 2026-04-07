---
tags:
  - cs2106/chapter7
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/memory_abstraction
next: /labyrinth/notes/cs/cs2106/buddy_blocks

---
### Concept
- [load-store](/labyrinth/notes/cs/cs2100/storage_architecture#^36a992) memory model
- assumes:
	- each process occupies a [contiguous](/labyrinth/notes/cs/cs2106/memory_abstraction#^e3dfaf) region
	- physical memory is large enough to containe 1 or more processes with complete memory space
#### Memory partitioning
Fixed-size partition
- fixed number of partitions
- each process occupies one partition
- easy to manage and allocate
- partition needs to be large enough to contain the largest of the processes
	- smaller processes will lead to wasted memory space -> **internal fragmentation**

Variable-size partition
- partition based on actual size of process
- OS needs to keep track of occupied and free spaces(holes)
- flexible
- leads to large number of holes
	- smaller holes cannot accommodate larger processes -> **external fragmentation**
> internal fragmentation -> wasted memory inside the partition, external fragmentation -> wasted memory outside the partition

#### Allocation algorithms
First-fit
- take the first hole that is large enough
Best-fit
- take the smallest hole that is large enough
- lead to small holes, hard to fit other processes
Worst-fit
- take the largest hole
- created holes are larger, hopefully other processes can fit

Merge
- join adjacent holes if possible

Compaction
- move the occupied partitions arround to consolidate holes
- less frequently used
	- time consuming -> OS will take up CPU time
	- moved processes have to pause

| Process      | Performance                                         |
| ------------ | --------------------------------------------------- |
| Allocation   | $O(n)$                                              |
| Deallocation | $O(n)$ or $O(1)$ if base register is tracked in PCB |
| Merging      | $O(1)$                                              |
