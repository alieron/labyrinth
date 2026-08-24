---
tags:
  - cs2106/chapter11
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2106/indexed_allocation
next: /labyrinth/notes/cs/cs2106/microsoft_FAT

---
### Summary
Free space management

| Feature                       | Bitmap                                     | Linked List                      |
| ----------------------------- | ------------------------------------------ | -------------------------------- |
| **Storage Overhead**          | 1 bit per block                            | 1 pointer per free block         |
| **Ease of Finding Space**     | easy to scan for free or contiguous blocks | must traverse list               |
| **Finding Contiguous Blocks** | efficient (scan for sequence of 0s)        | difficult                        |
| **Allocation Speed**          | moderate (may need to scan bitmap)         | fast (take from head)            |
| **Deallocation Speed**        | fast (flip bit)                            | fast (add block to list)         |
| **Memory Usage**              | compact and predictable                    | depends on number of free blocks |
| **Disk Locality Awareness**   | good (can choose nearby blocks)            | poor (no global view)            |

### Concept
#### Free space management
- need to know which blocks are free
- stored in the partition details

Bitmap
- each block is represented as a bit
- `0` for occupied and `1` for free
- pros:
	- good set of manipulations
- cons:
	- need to keep in memory for efficiency

Linked list
- [SLL](/labyrinth/notes/cs/cs2040s/SLL) with number of free blocks in this hole, pointer to next hole
- pros:
	- easy to locate free block
	- only first pointer stored in memory
- cons:
	- high overhead

#### Directory structure
- map file name to file info
- keep track of files in directories

Linear list
- directory is a list of files
- each file entry is a pointer to file info
- requires linear search - can be spead up by caching last searches

[Hash table](/labyrinth/notes/cs/cs2040s/hash_table)
- hash by file name
- fast lookup
- needs a good hash function

#### File operations
File creation
1. locate parent dir in directory structure
2. find free disk blocks
3. add entry in parent dir with file info

File open
1. locate file in directory structure
2. load file into system-wide table
3. create entry in process table to the entry in the system-wide table
4. return pointer to this entry