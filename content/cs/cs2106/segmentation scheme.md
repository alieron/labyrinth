---
tags:
  - cs2106/chapter8
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2106/paging_scheme
next: /labyrinth/notes/cs/cs2106/segmentation_+_paging

---
### Concept
- break up the [memory regions](/labyrinth/notes/cs/cs2106/processes#^dc8bb0) into segments
	- code
	- data(static variables)
	- heap
	- stack
- segments have different usage
- allow the stack and heap to grow during execution
- segments map to a [contiguous](/labyrinth/notes/cs/cs2106/contiguous_memory) physical region

![[segmentation_scheme.png|600]]
> now that blocks are dynamic, need to check that accesses are within the block's limit