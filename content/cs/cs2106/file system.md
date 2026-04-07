---
tags:
  - cs2106/chapter10
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/frame_allocation

---
### Concept

#### File
- locgial unit of information created by process
- abstact data type, with a set of operations with several implementations
- contains:
	- data - structured in some way, program must know how to read it
	- metadata/attributes - information associated with the file
- types:
	- regular files
	- directories
	- special files

File metadata
- name - human readable reference
- identifier - unique id used by the file system
- type - indicates the use of the file
- size - size in bytes
- protection - access permissions
- time - creation/modification time
- owner - owner user id
- table of content - information for the file system to determin how to access the file

File protection
- controlled access to the information stored in a file

| Type of access | Description                                |
| -------------- | ------------------------------------------ |
| read           | see the contents of the file               |
| write          | write to/rewrite the file                  |
| execute        | load into memory and execute               |
| append         | add new information to the end of the file |
| delete         | remove file from file system               |
| list           | read metadata                              |
