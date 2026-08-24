---
tags:
  - cs2106/chapter11
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2106/linked_list_allocation
next: /labyrinth/notes/cs/cs2106/file_system_backend

---
### Concept
#### Indexed allocation
- each file has an index block
- array of disk blocks

![[indexed_allocation.png|600]]

#### Increasing file size
Linked scheme
- linked list of index blocks

Multi-level index
- similar to [2-level paging](/labyrinth/notes/cs/cs2106/page_table_structures#2-level_paging)
- entries of index block point to other index blocks

Combined scheme
- direct indexing + multi-level index scheme