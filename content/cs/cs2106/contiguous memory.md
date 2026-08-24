---
tags:
  - cs2106/chapter7
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/memory_abstraction
next: /labyrinth/notes/cs/cs2106/buddy_blocks

---
### Summary
Contiguous partitioning

| Feature                | Fixed Partitioning                        | Dynamic Partitioning                      |
| ---------------------- | ----------------------------------------- | ----------------------------------------- |
| Partition size         | Predefined, equal (or fixed set of sizes) | Created dynamically based on process size |
| Memory allocation      | One process per partition                 | Process gets exactly what it needs        |
| Fragmentation type     | Internal fragmentation                    | External fragmentation                    |
| Flexibility            | Low                                       | High                                      |
| Complexity             | Simple                                    | More complex                              |
| Utilization efficiency | Poor (wasted space inside partitions)     | Better, but degrades over time            |

Allocation algorithms

| Algorithm     | Core Idea                                        | Search Strategy                       | Speed | Fragmentation Behavior                             | Advantages                                  | Disadvantages                                          |
| ------------- | ------------------------------------------------ | ------------------------------------- | ----- | -------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------ |
| **first-fit** | allocate the first hole that is large enough     | scan from beginning, pick first match | fast  | moderate external fragmentation                    | - low overhead<br>- quick allocation        | - small holes near the beginning                       |
| **best-fit**  | allocate the smallest hole that fits the request | search entire list                    | slow  | high external fragmentation (many tiny holes)      | - minimizes wasted space per allocation     | - expensive search<br>- unusable small fragments       |
| **worst-fit** | allocate the largest available hole              | search entire list                    | slow  | lower fragmentation initially, but inefficient use | - leaves large holes for future allocations | - poor overall utilization<br>- can waste large blocks |

### Concept
- [load-store](/labyrinth/notes/cs/cs2100/storage_architecture#^36a992) memory model
- assumes:
	- each process occupies a [contiguous](/labyrinth/notes/cs/cs2106/memory_abstraction#^e3dfaf) region
	- physical memory is large enough to containe 1 or more processes with complete memory space

#### Fixed partition
- fixed number of partitions
- each process occupies one partition
- easy to manage and allocate
- partition needs to be large enough to contain the largest of the processes
	- smaller processes will lead to wasted memory space -> **internal fragmentation**

Internal fragmentation
- wasted memory **inside** the pertition

#### Dynamic partition
- partition based on actual size of process
- OS needs to keep track of occupied and free spaces(holes)
- flexible
- leads to large number of holes
	- smaller holes cannot accommodate larger processes -> **external fragmentation**

External fragmentation
- wasted memory **outside** the partition
- holes that are too small

Partition info
- linked list
- store the starting physical address and the size of the partition

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=2em and 3.5em}}

\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }

\begin{document}
\begin{tikzpicture}
% draw diagram here

	\node[text width=3cm,align=right] (init) {Initial:};
	\node[text width=3cm,align=right,below=of init] (alloc) {Run A \& B:};
	\node[text width=3cm,align=right,below=of alloc] (free) {Free A:};

  \node[draw,cell,right=of init] (s) {F};
  \node[draw,cell,minimum width=1cm,right=0 of s] (sa) {256};
  \node[draw,cell,minimum width=1cm,right=0 of sa] (sl) {3840};
  \node[draw,cell,right=0 of sl] (sp) {};
  \pnull{sp};
  
  \node[draw,cell,right=of alloc] (s1) {T};
  \node[draw,cell,minimum width=1cm,right=0 of s1] (sa1) {256};
  \node[draw,cell,minimum width=1cm,right=0 of sa1] (sl1) {512};
  \node[draw,cell,right=0 of sl1] (sp1) {};
  
  \node[draw,cell,right=of sp1] (s2) {T};
  \node[draw,cell,minimum width=1cm,right=0 of s2] (sa2) {768};
  \node[draw,cell,minimum width=1cm,right=0 of sa2] (sl2) {1024};
  \node[draw,cell,right=0 of sl2] (sp2) {};
  
  \node[draw,cell,right=of sp2] (s3) {F};
  \node[draw,cell,minimum width=1cm,right=0 of s3] (sa3) {1792};
  \node[draw,cell,minimum width=1cm,right=0 of sa3] (sl3) {2304};
  \node[draw,cell,right=0 of sl3] (sp3) {};
  \pnull{sp3};
  
  \draw[arrows={-Latex}] (sp1.center)--(s2);    
  \draw[arrows={-Latex}] (sp2.center)--(s3);    
  
	\node[draw,cell,right=of free] (s1) {F};
  \node[draw,cell,minimum width=1cm,right=0 of s1] (sa1) {256};
  \node[draw,cell,minimum width=1cm,right=0 of sa1] (sl1) {512};
  \node[draw,cell,right=0 of sl1] (sp1) {};
  
  \node[draw,cell,right=of sp1] (s2) {T};
  \node[draw,cell,minimum width=1cm,right=0 of s2] (sa2) {768};
  \node[draw,cell,minimum width=1cm,right=0 of sa2] (sl2) {1024};
  \node[draw,cell,right=0 of sl2] (sp2) {};
  
  \node[draw,cell,right=of sp2] (s3) {F};
  \node[draw,cell,minimum width=1cm,right=0 of s3] (sa3) {1792};
  \node[draw,cell,minimum width=1cm,right=0 of sa3] (sl3) {2304};
  \node[draw,cell,right=0 of sl3] (sp3) {};
  \pnull{sp3};
  
  \draw[arrows={-Latex}] (sp1.center)--(s2);    
  \draw[arrows={-Latex}] (sp2.center)--(s3);   
  
\end{tikzpicture}
\end{document}
```
> `T` - true for occupied, `F` - false for not occupied

#### Allocation algorithms
First-fit
- take the first hole that is large enough
Best-fit
- take the smallest hole that is large enough
- lead to small holes, hard to fit other processes
Worst-fit
- take the largest hole
- created holes are larger, hopefully other processes can fit

Merge
- join adjacent holes if possible

Compaction
- move the occupied partitions arround to consolidate holes
- less frequently used
	- time consuming -> OS will take up CPU time
	- moved processes have to pause

| Process      | Performance                                         |
| ------------ | --------------------------------------------------- |
| Allocation   | $O(n)$                                              |
| Deallocation | $O(n)$ or $O(1)$ if base register is tracked in PCB |
| Merging      | $O(1)$                                              |
