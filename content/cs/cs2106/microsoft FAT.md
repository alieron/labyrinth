---
tags:
  - cs2106/chapter12
  - cs/low_level
complete: false
next: /labyrinth/notes/cs/cs2106/ext2
prev: /labyrinth/notes/cs/cs2106/file_system_backend

---
### Concept
- uses [FAT allocation](/labyrinth/notes/cs/cs2106/linked_list_allocation#File_Allocation_Table(FAT))
- free space management - handled by the FAT

![[ms_fat.png|600]]

Special FAT
- next block number
- FREE code
- EOF code - last block in file
- BAD code - bad block on the physical storage

#### Directory
- special type of file
- root dir stored in fixed loation
- other files/sub-directories are directory entries

![[fat_dir_entry.png|600]]

#### Variants
- support larger disks as a single partition
- disk cluster - group of contiguous disk blocks
	- larger clusters -> larger partition for same FAT size
	- larger clusters -> more internal fragmentation
- FAT size - determines the number of blocks/clusters

FAT12
- $2^{12}$ clusters

FAT16
- $2^{16}$ clusters

FAT32
- $2^{32}$ clusters

VFAT
- support for long fine name
- use multiple directory entries to store the full filename
- 8-3 naming for backward compatibility