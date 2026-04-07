---
tags:
  - cs2106/chapter9
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/segmentation_+_paging
next: /labyrinth/notes/cs/cs2106/page_table_structures

---
### Concept
- secondary storage is usually larger than memory
- extension of the [paging scheme](/labyrinth/notes/cs/cs2106/paging_scheme), some pages can be stores on the secondary storage
- OS required to manage the virtual memory
- like a second layer of [caching](/labyrinth/notes/cs/cs2100/cache)

#### Page fault
- pages can only be accessed when in memory, CPU cannot read data from secondary storage
- when CPU tries to access a non-memory resident page
- triggers the **OS** to bring the page into physical memory

Thrasing ^1696b8
- if memory access results in page faults most of the time
- accessing secondary storage is very slow, so this can slow down the system

[Locality](/labyrinth/notes/cs/cs2100/cache#^f20615)
- larger page size -> exploit spatial locality
#### Demand paging
- process starts with no **memory resident pages**
- pages are only allocated when there is a page fault
- pros:
	- fast startup time
	- small memory footprint
- cons:
	- process may be sluggish at the start
	- page faults may have cascading effect on other processes, thrashing