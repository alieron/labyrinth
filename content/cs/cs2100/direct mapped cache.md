---
tags:
  - cs2100/chapter12
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/cache
next: /labyrinth/notes/cs/cs2100/set_associative_cache

---
### Summary
Bit allocation
- cache index - which cache block the block would get mapped to
- tag - used to match for the specific memory address when checking the cache

```tikz
\usetikzlibrary{positioning,arrows.meta}

\begin{document}
\begin{tikzpicture}[thick, every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  % Draw bits
  \node[label={above:{n-1 : 0}},draw,minimum width=3cm] (offset) at(6.5,0) {offset};
  \node[label={above:{... : n}},draw,minimum width=5cm] (block) at(2.5,0) {block number};  
  
  \node[label={above:{n-1 : 0}},draw,minimum width=3cm] (offset2) at(6.5,-2) {offset};
  \node[label={above:{n+m-1 : n}},draw,minimum width=3cm] (idx) at(3.5,-2) {cache index};
  \node[label={above:{... : n+m}},draw,minimum width=2cm] (tag) at(1,-2) {tag};
  
  \draw[->] (block.south west) -- (tag.north west);
  \draw[->] (block.south east) -- (idx.north east);
\end{tikzpicture}
\end{document}
```

Cache structure
- valid bit - indicate whether the block contains valid data

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}

\begin{document}
\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

\node[label=right:{00},frame,fill=red!50] (c0) at (0,-\frameh*0) {};
\node[label=right:{01},frame,fill=blue!50] (c1) at (0,-\frameh*1) {};
\node[label=right:{10},frame,fill=green!50] (c2) at (0,-\frameh*2) {};
\node[label=right:{11},frame,fill=yellow!50] (c3) at (0,-\frameh*3) {};

\node[frame,minimum width=2cm,left=2mm of c0] (t0) {};
\node[frame,minimum width=0.8cm,left=0 of t0] (v0) {};
\node[frame,minimum width=2cm,left=2mm of c1] (t1) {};
\node[frame,minimum width=0.8cm,left=0 of t1] (v1) {};
\node[frame,minimum width=2cm,left=2mm of c2] (t2) {};
\node[frame,minimum width=0.8cm,left=0 of t2] (v2) {};
\node[frame,minimum width=2cm,left=2mm of c3] (t3) {};
\node[frame,minimum width=0.8cm,left=0 of t3] (v3) {};

\node[above=0 of v0] {valid};
\node[above=0 of t0] {tag};
\node[above=0 of c0] {data};

\end{tikzpicture}
\end{document}
```
> when talking about the size of the cache, only the space for data is counted, the valid bit and tags are ignored
### Concept
Direct mapped cache
- each block is mapped to a corresponding block in cache
- [hash table](/labyrinth/notes/cs/cs2040s/hash_table) that can store a subset of memory
- has compulsory and conflict misses

```
cache_idx = block_num % num_cache_blocks
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}

\begin{document}
\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

\node[label=left:{...000$\color{red} 00$...},frame,fill=red!50] (m0) at (0,-\frameh*0) {};
\node[label=left:{...000$\color{red} 01$...},frame,fill=blue!50] (m1) at (0,-\frameh*1) {};
\node[label=left:{...000$\color{red} 10$...},frame,fill=green!50] (m2) at (0,-\frameh*2) {};
\node[label=left:{...000$\color{red} 11$...},frame,fill=yellow!50] (m3) at (0,-\frameh*3) {};
\node[label=left:{...001$\color{red} 00$...},frame,fill=red!50] (m4) at (0,-\frameh*4) {};
\node[label=left:{...001$\color{red} 01$...},frame,fill=blue!50] (m5) at (0,-\frameh*5) {};
\node[label=left:{...001$\color{red} 10$...},frame,fill=green!50] (m6) at (0,-\frameh*6) {};
\node[label=left:{...001$\color{red} 11$...},frame,fill=yellow!50] (m7) at (0,-\frameh*7) {};
\node[label=left:{...010$\color{red} 00$...},frame,fill=red!50] (m8) at (0,-\frameh*8) {};
\node[label=left:{...010$\color{red} 01$...},frame,fill=blue!50] (m9) at (0,-\frameh*9) {};

\node[label=right:{00},frame,fill=red!50] (c0) at (8,-\frameh*0) {};
\node[label=right:{01},frame,fill=blue!50] (c1) at (8,-\frameh*1) {};
\node[label=right:{10},frame,fill=green!50] (c2) at (8,-\frameh*2) {};
\node[label=right:{11},frame,fill=yellow!50] (c3) at (8,-\frameh*3) {};

\draw[->] (m0.east) -- (c0.west);
\draw[->] (m4.east) -- (c0.west);
\draw[->] (m8.east) -- (c0.west);
\draw[->] (m1.east) -- (c1.west);
\draw[->] (m5.east) -- (c1.west);
\draw[->] (m9.east) -- (c1.west);

\end{tikzpicture}
\end{document}
```

Compulsory/cold miss
- when the block is first accessed, it must be brought into a cache
- a miss that will happen regardless

Conflict miss
- when something else is currently occupying the cache block that the target was **previously cached to**
- collision
> if something else is occupying the cache block, but this is the first time accessing the address, its still a cold miss

Write miss
- when the target to be written to is not in the cache
- write allocate
	1. load block from memory into cache
	2. change the word in cache
	3. write to memory following [write policy](/labyrinth/notes/cs/cs2100/cache#^5d132a)
- write around
	- write directly to memory without loading to cache
### Application
Memory accesses
- 8 byte blocks -> 3 bit offset
- 4GB memory -> 2³² bytes -> 32-bit memory addresses
- 32B cache -> 2⁵ bytes -> 4 blocks -> 2 bit cache index

$$
\begin{gather*}
\text{Initial cache:}\\
\\
\begin{array}{r|c|c|c|c}
\text{Cache Index} & \text{Valid} & \text{Tag} & \text{Word0} & \text{Word1} \\
\hline 00 & 0  \\
01 & 0 \\
10 & 0 \\
11 & 0
\end{array}\\
\\
\text{Load 4 = 000100:} & \text{Compulsory Miss} \\
\\
\begin{array}{r|c|c|c|c}
\text{Cache Index} & \text{Valid} & \text{Tag} & \text{Word0} & \text{Word1} \\
\hline 00 & \cancel{ 0 } 1 & 0 & M[0] & {\color{aqua} M[4] } \\
01 & 0 \\
10 & 0 \\
11 & 0
\end{array}\\
\\
\text{Load 0 = 000000:} & \text{Hit} \\
\\
\begin{array}{r|c|c|c|c}
\text{Cache Index} & \text{Valid} & \text{Tag} & \text{Word0} & \text{Word1} \\
\hline 00 & 1 & 0 & {\color{aqua} M[0] } & M[4]  \\
01 & 0 \\
10 & 0 \\
11 & 0
\end{array}\\
\\
\text{Load 8 = 001000:} & \text{Compulsory Miss} \\
\\
\begin{array}{r|c|c|c|c}
\text{Cache Index} & \text{Valid} & \text{Tag} & \text{Word0} & \text{Word1} \\
\hline 00 & 1 & 0 & M[0] & M[4]  \\
01 & \cancel{ 0 }1 & 0 & {\color{aqua} M[8] } & M[12] \\
10 & 0 \\
11 & 0
\end{array}\\
\\
\text{Load 36 = 100100:} & \text{Compulsory Miss} \\
\\
\begin{array}{r|c|c|c|c}
\text{Cache Index} & \text{Valid} & \text{Tag} & \text{Word0} & \text{Word1} \\
\hline 00 & 1 & \cancel{ 0 }1 & \cancel{ M[0] }M[32] & \cancel{ M[4] }{\color{aqua} M[36] }  \\
01 & 1 & 0 & M[8] & M[12] \\
10 & 0 \\
11 & 0
\end{array}\\
\\
\text{Load 0 = 000000:} & \text{Conflict Miss} \\
\\
\begin{array}{r|c|c|c|c}
\text{Cache Index} & \text{Valid} & \text{Tag} & \text{Word0} & \text{Word1} \\
\hline 00 & 1 & \cancel{ 1 }0 & \cancel{ M[32] }{\color{aqua} M[0] } & \cancel{ M[36] } M[4] \\
01 & 1 & 0 & M[8] & M[12] \\
10 & 0 \\
11 & 0
\end{array}
\end{gather*}
$$