---
tags:
  - cs2106/chapter8
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/buddy_blocks
next: /labyrinth/notes/cs/cs2106/segmentation_scheme

---
### Concept
- logical space is contiguous
- physical space can be disjoint
- have a lookup table to map between the two

> [memory context](/labyrinth/notes/cs/cs2106/processes#^73664d) is essentially this page table, not the full memory space used by the process


#### Page sharing
Data sharing
- what [shared memory](/labyrinth/notes/cs/cs2106/shared_memory) can do
- logical pages from two processes can be mapped to the same physical frame

Copy-on-write
- [fork](/labyrinth/notes/cs/cs2106/syscalls#^52e85c) doesn't duplicate all the process memory, it uses page sharing, since both processes are identical
- only when there is a write, then the frame is copied to differentiate the two processes
#### Translation Look-aside Buffer(TLB)
- [cache](/labyrinth/notes/cs/cs2100/cache) of a few page table entries
- TLB-hit:
	- frame number is retrieved to generate physical address
- TLB-miss:
	- access full page table in memory
	- retrieve frame number to generate physical address and update TLB
- TLB has to be flushed during context switching

![[translation_lookaside_buffer.png|600]]

Access-right bits
- [access control](/labyrinth/notes/cs/cs2107/access_control) probabily links to this

Valid bit
- indicates whether the page is valid to access
- visiting an unused/out-of-range page will trigger an exception
> segmentation fault

