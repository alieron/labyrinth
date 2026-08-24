---
tags:
  - cs2106/chapter11
  - cs/low_level
complete: true
next: /labyrinth/notes/cs/cs2106/indexed_allocation
prev: /labyrinth/notes/cs/cs2106/disk_organization

---
### Concept
#### Linked allocation
- linked list of blocks
- blocks store file data and pointer to the next disk block
- file info stores first and last block

![[linked_list_allocation.png|600]]

#### File Allocation Table(FAT)
- extension of the [linked allocation](/labyrinth/notes/cs/cs2106/disk_organization#Linked_allocation)
- store block pointers into a table
- FAT usually in memory

![[fat_allocation.png|600]]