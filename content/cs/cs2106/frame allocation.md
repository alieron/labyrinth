---
tags:
  - cs2106/chapter9
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/page_replacement
next: /labyrinth/notes/cs/cs2106/file_system

---
### Concept
- how to allocated phycical memory frames among processes
- simple approaches:
	- equal allocation
	- proportional allocation - by the size of the process in relation to all the processes

[Page replacement](/labyrinth/notes/cs/cs2106/page_replacement) across processes
- local replacement
	- select victim page within the same process, using the process's page table
	- pros:
		- frames allocated to a process remain constant -> stable performance between runs
	- cons:
		- less flexible, if insufficient frames are allocated -> process will be hindered
- global replacement
	- victim page can be chosen across all physical frames
	- pros:
		- self-adjustment, processes that need more can get more
	- cons:
		- malicious processes can get more frames
		- inconsistent frame allocation across runs

[Thrasing](/labyrinth/notes/cs/cs2106/virtual_memory#^1696b8) with frame allocation
- IO needed to bring data from secondary storage into RAM
- with global replacement
	- thrashing process can steal pages from other processes
	- causing other processes to thrash also, cascading thrashing
- with local replacement
	- limited to one process
	- but that process can block the IO

#### Working Set model
- a locality, a region of code that accesses the same set of pages
- transient - working set changing size
- stable - working set is about the same for a period of time

$$
W(t, \Delta)
$$

- working set window -> time interval
- if $\Delta$ is too small, may miss pages in currently locality
- if $\Delta$ is too big, may contain pages from another locality