---
tags:
  - cs2106/chapter11
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2106/file_system
next: /labyrinth/notes/cs/cs2106/linked_list_allocation

---
### Summary
File block allocation

| Method                                                                    | Core Idea                                                          | Access Type         | Storage Overhead         | Advantages                                                                                            | Disadvantages                                                                                |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **contiguous allocation**                                                 | file stored in consecutive blocks                                  | sequential + random | minimal (start + length) | - simple file tracking<br>- fast access                                                               | - external fragmentation<br>- hard to grow files                                             |
| **[linked list allocation](/labyrinth/notes/cs/cs2106/linked_list_allocation)**                                            | each block points to the next block                                | sequential          | pointer per block        | - no external fragmentation<br>- easy file growth                                                     | - slow random access<br>- pointer overhead<br>- reliability issues if pointer lost/incorrect |
| **[FAT allocation](/labyrinth/notes/cs/cs2106/linked_list_allocation#File_Allocation_Table(FAT))** | links stored in a central FAT                                      | sequential          | FAT                      | - faster random access<br>- easier traversal                                                          | - FAT can be large                                                                           |
| **[indexed allocation](/labyrinth/notes/cs/cs2106/indexed_allocation)**                                                | each file has an index block containing pointers to all its blocks | random + sequential | index block per file     | - fast direct access<br>- less memory overhead, only index block of opened file needs to be in memory | - index block overhead<br>- waste for small files<br>- multi-level index for large files     |

### Concept
- disk - 1D array of logical blocks
- logical blocks are mapped into disk sectors

Master Boot Record(MBR)
- at sector 0
- has a partition table
- followed by one or more partitions
- contains:
	- OS boot-up info

Partition
- contain the actual files
- contains:
	- partition details - number of blocks
	- directory structure
	- file info
	- file data

![[disk_org.png|600]]

Allocating files
- files are a set of logical blocks
- implementation needs to:
	- keep track of logical blocks
	- allow efficient access
	- effectively use disk space
- using fixed blocks -> always has internal fragmentation

#### Contiguous allocation
- allocate consecutive blocks to each file
- file info stores first block and size

![[contiguous_allocation.png|600]]
