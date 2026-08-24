---
tags:
  - cs2106/chapter12
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/microsoft_FAT

---
### Concept
- blocks are grouped into block groups
- uses [indexed allocation](/labyrinth/notes/cs/cs2106/indexed_allocation), files/directories use i-nodes
	- contain file metadata and data block address
- fast access for small files + flexibility for huge files

![[ext2_fs.png|600]]

Superblock
- one for whole file system, duplicated in each block group for redundancy
- describes the whole file system
	- total number of i-nodes
	- i-nodes per group
	- total number of blocks
	- blocks per group

Group descriptors
- number of free blocks/i-nodes
- location of the bitmaps

Block bitmap
- keep track of free blocks in the group
- `1` - occupied, `0` - free

i-node bitmap
- keep track of i-nodes in the group
- `1` - occupied, `0` - free

i-node table
- array of i-nodes for this group
- stores the file metadata
- i-nodes:
	- fixed size
	- 12 pointers - direct pointers, block with actual file data
	- 13th - single indirect, block with direct pointers (2-level)
	- 14th - double indirect, block with single indirect pointers (3-level)
	- 15th - triple indirect, block with double indirect pointers (4-level)

#### Directory
- directory's **data block** -> linked list of directory entries
- contains:
	- i-node number - look up the file in the i-node table
	- pointer to next entry/size of this entry
	- length of file/sub-directory name
	- type - file or directory
	- file/sub-directory name - 255 characters

![[ext2_dir_entry.png|600]]

#### Linking
Hard link
- two directory entries point to the same i-node
- i-node keeps track of reference count
- data is only deleted when reference count is 0

Symbolic link
- entry has its own i-node that points to the other directory entry
- only pathname is stored, need to search for the target i-node
- can delete original file -> dangling pointer