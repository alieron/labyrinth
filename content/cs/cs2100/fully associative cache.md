---
tags:
  - cs2100/chapter12
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/set_associative_cache

---
### Summary
Bit allocation
- block number is used directly as the tag

```tikz
\usetikzlibrary{positioning,arrows.meta}

\begin{document}
\begin{tikzpicture}[thick, every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  % Draw bits
  \node[label={above:{n-1 : 0}},draw,minimum width=3cm] (offset) at(6.5,0) {offset};
  \node[label={above:{... : n}},draw,minimum width=5cm] (block) at(2.5,0) {block number};  
  
  \node[label={above:{n-1 : 0}},draw,minimum width=3cm] (offset2) at(6.5,-2) {offset};
  \node[label={above:{... : n}},draw,minimum width=5cm] (tag) at(2.5,-2) {tag};
  
  \draw[->] (block.south west) -- (tag.north west);
  \draw[->] (block.south east) -- (tag.north east);
\end{tikzpicture}
\end{document}
```
### Concept
Fully associative cache
- blocks can be placed in any location in the cache
- need to search all locations during memory access

Capacity miss
- when the target is no longer in the cache because it was overwritten by another block
- cache has reached its maximum capacity