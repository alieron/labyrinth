---
tags:
  - cs2106/chapter9
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/page_table_structures
next: /labyrinth/notes/cs/cs2106/frame_allocation

---
### Concept
- if no free physical memory frames during a [page fault](/labyrinth/notes/cs/cs2106/virtual_memory#Page_fault) -> need to evict a page
- clean page -> page is not modified
- dirty page -> page is modified, need to write back to secondary storage

Access time
- similar to [access time in cache](/labyrinth/notes/cs/cs2100/cache#^affa8d)

$$
T_{avg} = \underbrace{ {\color{green} (1-p)\times T_{\text{mem}} } }_{ \text{hit} } + \underbrace{ {\color{red} p\times T_{\text{page\_fault}} } }_{ \text{page fault} }
$$
#### Optimum (OPT)
- replace the page that **will not** be reused for the longest period of time
- guarantees minimum page faults
- impossible, needs future knowledge
- used as a basis for comparison
#### FIFO
- evict the page that has been in memory for the longest time
- OS maintains a [queue](/labyrinth/notes/cs/cs2040s/queue) of resident(in-memory) pages
- doesn't exploit temporal locality, can lead to Belady's anomaly
- can be implemented in OS, keep track of page faults

Belady's anomaly
- increase frames -> increases page fault rate
#### Least recently used (LRU)
- evict the page that has not been used for the longest time
- makes use of temporal locality
- if have not been used for a long time -> likely will not be used again
- won't suffer from Belady's anomaly
- need hardware support -> accessing in-memory pages is only handled by OS

Counter implementation
- counter incremented fro every memory reference
- page table entries have a "time-of-use" field
- issues:
	- need to search all pages for smallest tou
	- tou is always increasing -> can overflow

Stack implementation
- stack of page numbers
- issues:
	- not a pure stack: entries can be removed from any where in the stack
	- hard to implement in hardware
#### Second-chance
- modified FIFO to give a second change to pages that are accessed
- give a second chance based on a reference bit, 1 -> give second chance
- reference bit starts at 0, incremented to 1 only if re-accessed
- issue:
	- degrades to FIFO if all reference bits are 1


### Application
Belady's anomaly with FIFO
```
3 frames
page requests: 3  2  1  0	 3  2  4  3  2  1  0  4
newest:        3f 2f 1f 0f 3f 2f 4f 4  4  1f 0f 0
                  3  2  1  0  3  2  2  2  4  1  1
oldest:	             3  2  1  0  3  3  3  2  4  4

4 frames
page requests: 3  2  1  0  3  2  4  3  2  1  0  4
newest:        3f 2f 1f	0f 0  0  4f 3f 2f 1f 0f 4f
                  3  2  1  1  1  0  4  3  2  1  0
                     3  2  2  2  1  0  4  3  2  1
oldest:                 3  3  3  2  1  0  4  3  2
```
