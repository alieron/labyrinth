---
tags:
  - cs2106/chapter10
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/frame_allocation
next: /labyrinth/notes/cs/cs2106/disk_organization

---
### Summary
Directory structures

| Structure          | Core Idea                                                  | Sharing | Advantages                                        | Disadvantages                                                         |
| ------------------ | ---------------------------------------------------------- | ------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| **single-level**   | one directory for all files                                | ❌       | - easy to implement<br>- no path traversal needed | - name conflicts<br>- no organization<br>- not scalable               |
| **tree-structure** | hierarchical directories with a single root                | ❌       | - good organization<br>- scalable<br>- intuitive  | - no direct sharing (files duplicated if needed)                      |
| **DAG**            | files/directories can have multiple parents (shared nodes) | ✅       | - efficient sharing, no duplication               | - must prevent cycles                                                 |
| **general graph**  | allows cycles in directory structure                       | ✅       | - maximum flexibility in sharing                  | - complex traversal, risk of infinite loops, requires cycle detection |

Hard and symbolic links

| Structure         | Core Idea                          | Advantages                                   | Disadvantages                                   |
| ----------------- | ---------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| **hard link**     | separate pointers to the same file | - low overhead                               | - deletion problem, original directory is owner |
| **symbolic link** | store a pathname in a special file | - simple deletion, only delete the link file | - larger overhead, link file occupies space     |

### Concept
- [memory](/labyrinth/notes/cs/cs2106/memory_abstraction) is volatile, secondary storage is persistent
- file system is an abstraction over the physical storage
- high level resource management
- protect and share between processes and users
- criteria:
	- self-contained - info stored on the disk is enough to describe the organization
	- persistent - last beyond the lifetime of the OS and processes
	- efficient - minimum overhead for bookkeeping

#### File
- locgial unit of information created by process
- abstact data type, with a set of operations with several implementations
- contains:
	- data - structured in some way, program must know how to read it
	- metadata/attributes - information associated with the file
- types:
	- regular files - [ASCII](/labyrinth/notes/cs/cs2100/ASCII) files or binary files
	- directories
	- special files

File metadata
- name - human readable reference
- identifier - unique id used by the file system
- type - indicates the use of the file, 
- size - size in bytes
- protection - access permissions
- time - creation/modification time
- owner - owner user id
- table of content - information for the file system to determin how to access the file

#### File protection
- controlled access to the information stored in a file
- restrict access based on user identity

| Type of access | Description                                |
| -------------- | ------------------------------------------ |
| read           | see the contents of the file               |
| write          | write to/rewrite the file                  |
| execute        | load into memory and execute               |
| append         | add new information to the end of the file |
| delete         | remove file from file system               |
| list           | read metadata                              |

Access control list([ACL](/labyrinth/notes/cs/cs2107/access_control#^d93cc3))
- list of user identity -> allowed access types
- pros - very customizable
- cons - too much info for one file

Minimal ACL
- [access control bits](/labyrinth/notes/cs/cs2107/access_control#^5cf9bb), in UNIX
- users are owner, group and universe

#### File access
Sequential access
- read data in order
- cannot skip but can be rewound

Random access
- read in any order
- read an offset

Direct access
- file containing fixed-length records
- random access to any record

#### File operations
- OS provides [syscalls](/labyrinth/notes/cs/cs2106/syscalls) for file management
- OS maintains:
	- file pointer - current location in the file
	- disk location - file location on disk
	- open count - number of processes that have the file open

| Type of access | Description                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| create         | new file is created with no data                                                                       |
| open           | performed before further operations<br>to prepare the necessary information for file operations later  |
| read           | read data from file, usually starting from current position                                            |
| write          | write data to file, usually starting from current position                                             |
| reposition     | also known as seek<br>move the current position to a new location<br>no actual read/write is performed |
| truncate       | removes data between specified position to end of file                                                 |

System-wide open-file table
- one entry per unique file

Per-process open-file table
- one entry per file used in the process
- each entry points to the system-wide table

#### Directory
- provides logical grouping of files
- keep track of files

Single-level
- all files in one single root directory

Tree-structure
- sub-directories
- absolute pathname
	- path all the way from root
- relative pathname
	- following the current working directory(CWD)

Directed acyclic graph([DAG](/labyrinth/notes/cs/cs2040s/graph_DS#^0d292d))
- files/sub-directories can be shared
- hard link
	- `ln`
	- to a file in another directory
	- two pointers to the actual file on disk
- symbolic link
	- `ln -s`
	- to a file or directory
	- special link file with the pathname

General graph
- hard to traverse - prevent infinite looping
- hard to manage when moving files/directories