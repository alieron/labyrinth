---
tags:
  - cs2100/chapter12
  - cs/low_level
complete: true
next: /labyrinth/notes/cs/cs2100/direct_mapped_cache
prev: /labyrinth/notes/cs/cs2100/control_hazards

---
### Summary
Locality
- temporal locality
	- data tends to be referenced again soon
	- ie. counter for loops
- spatial locality
	- nearby data tends to be referenced soon
	- ie. items in arrays

Average access time
- hit -> when data is found in cache
- miss -> when data is not found in cache, need to look in memory

$$
t_{avg} = \underbrace{ {\color{green} h\times t_{c} } }_{ \text{hits} } + \underbrace{ {\color{red} (1-h)\times (t_{m} + t_{c}) } }_{ \text{misses} }
$$

Cache block
- unit of transfer between memory and cache
- usually in words
- larger block sizes can improve spatial locality at the cost of more latency

```tikz
\usetikzlibrary{positioning}

\begin{document}
\begin{tikzpicture}[thick, every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  % Draw bits
  \node[label={above:{n-1 : 0}},draw,minimum width=3cm] (offset) at(6.5,0) {offset};
  \node[label={above:{... : n}},draw,minimum width=5cm] (block) at(2.5,0) {block number};  
\end{tikzpicture}
\end{document}
```
> like how with 4-byte blocks(words), we can ignore the last memory address bits, unless we desire a particular byte within that word

Memory sizes

| Size | Number of bytes |
| ---- | --------------- |
| 1KB  | 2¹⁰             |
| 1MB  | 2²⁰             |
| 1GB  | 2³⁰             |
| 1TB  | 2⁴⁰             |

Cache types

|                  | [Direct mapped](/labyrinth/notes/cs/cs2100/direct_mapped_cache) | [set associative](/labyrinth/notes/cs/cs2100/set_associative_cache) | [Fully associative](/labyrinth/notes/cs/cs2100/fully_associative_cache) |
| ---------------- | -------------------------------------- | ------------------------------------------ | ---------------------------------------------- |
| Block placement  | one block per index                    | n blocks per index                         | any cache block                                |
| Block search     | check tag at corresponding block       | search tag within set                      | search tag in whole cache                      |
| Blok replacement | overwrite                              | choose by replacement policy               | choose by replacement policy                   |
### Concept
Types of memory

| Dynamic RAM                          | Static RAM                           |
| ------------------------------------ | ------------------------------------ |
| High density - 1 transistor per cell | Low density - 6 transistors per cell |
| Slow access - 50-70ns                | Fast access - 0.5-5ns                |
| Cheaper                              | More expensive                       |
Principle of lcaility
- program only accesses a small portion of the memory address space within a small time interval
- keep frequently/recently used data in a smaller but faster memory(cache)

Working set
- set of memory locations accessed during a time period
- the goal of cache is to capture the working set to reduce latency

Write policy ^5d132a
- write-through
	- write to both cache and memory
	- delayed by main memory, reduce latency with a write buffer
- write-back
	- write to cache, write to memory when cache block is replaced
	- additional bit to track write state, write to memory if bit is 1