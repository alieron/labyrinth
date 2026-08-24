---
tags:
  - cs2106/chapter9
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2106/virtual_memory
next: /labyrinth/notes/cs/cs2106/page_replacement

---
### Summary
Page table structures

| Method                  | Core Idea                                              | Lookup Steps                      | Advantages                                                                              | Disadvantages                                       |
| ----------------------- | ------------------------------------------------------ | --------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **direct paging**       | single-level page table indexed by virtual page number | 1 lookup                          | - fast lookup                                                                           | - wastes memory for large address spaces            |
| **2-level paging**      | page table split into smaller sub tables               | 2 lookups (outer → inner → frame) | - saves memory, less overhead when not all pages are used                               | - slower without TLB, more complex                  |
| **inverted page table** | one entry per physical frame                           | search (or hash) over entries     | -1 table for all processes<br>- huge memory savings, good for very large virtual spaces | - slower lookup, needs hashing, harder to implement |

### Concept
- modern logical memory space is massive -> huge number of pages
- each page must have an entry in the page table -> hueg page table
	- high overhead
	- page table might itself be fragmented

#### Direct paging
- per process
- keep all entries in a single table

$$
\begin{align*}
 2 ^p \text{ pages} & \to p\text{ bits to specify a unique page} \\
& \to 2^p\text{ page table entries}
\end{align*}
$$
```tikz
\usetikzlibrary{decorations.pathreplacing,positioning}

\begin{document}

\begin{tikzpicture}[every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  \node[fill=red!50, draw, minimum width=3cm] (p) {P};
  \node[fill=blue!50, right=0cm of p, draw, minimum width=3cm] (d) {D};
  
  \draw[decorate,decoration={brace,amplitude=5pt}] 
    (p.north west) -- (p.north east) node[midway,above=6pt] {$p$ bits};
  
  \draw[decorate,decoration={brace,amplitude=5pt}] 
    (d.north west) -- (d.north east) node[midway,above=6pt] {$n$ bits};
  
\end{tikzpicture}

\end{document}
```

#### 2-level paging
- per process
- page table is broken up into smaller sub-tables
- generally, the sub-tables are the size of a page

```tikz
\usetikzlibrary{decorations.pathreplacing,positioning}

\begin{document}

\begin{tikzpicture}[every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  \node[fill=red!40, draw, minimum width=1cm] (pd) {dir \#};
  \node[fill=red!50, right=0cm of pd, draw, minimum width=2cm] (p) {P};
  \node[fill=blue!50, right=0cm of p, draw, minimum width=3cm] (d) {D};
  
  \draw[decorate,decoration={brace,amplitude=5pt}] 
    (pd.north west) -- (pd.north east) node[midway,above=6pt] {$m$ bits};

  \draw[decorate,decoration={brace,amplitude=5pt}] 
    (p.north west) -- (p.north east) node[midway,above=6pt] {$(p-m)$ bits};
  
  \draw[decorate,decoration={brace,amplitude=5pt}] 
    (d.north west) -- (d.north east) node[midway,above=6pt] {$n$ bits};
  
\end{tikzpicture}

\end{document}
```

#### Inverted page table
- consolidated over all processes
- entries are indexed by frame number instead
- search for the `PID` and page number in the inverted page table

![[inverted_page_table.png|600]]

### Application
Multi-level paging
$$
\begin{gather*}
\begin{aligned}
\text{Address size:}&&&\text{48 bits}\\
\text{Page size:}&&&\text{4KiB}=2^{12}\text{B}\\
\text{Page table entry:}&&&\text{8B}
\end{aligned}\\
\\
\text{Single-level page table:} \\
\\
\text{Size}=\frac{2^{48}}{2^{12}}\times 8 = 2^{39}\text{B}\\
\\
\\
\text{Max levels:}\\
\\
\text{Page can point to:  } \frac{2^{12}}{8} = 2^9\text{ pages}\\
\\
\begin{array}{|c|c|}
\hline
\text{Root Level} & \text{Second Level} & \text{Third Level} & \text{Last Level} & \text{Page Offset} \\
\hline
\text{9 bits} & \text{9 bits} & \text{9 bits} & \text{9 bits} & \text{12 bits} \\
\hline
\end{array}\\
\\
\text{Max}=\text{4 levels}\\
\\
\\
\begin{aligned}
\text{Store:}&&&\text{1GiB} = 2^{30}\text{B}\\
\text{Starting Address:}&&&\text{0x7F9B55226010}&\text{(misaligned)}
\end{aligned}\\
\\
\text{Total pages}= \frac{2^{30}}{2^{12}}+1=2^{18} + 1\\
\\
\begin{array}{c|c}
 & \text{First} & \text{Second} & \text{Third} & \text{Last} & \text{Data Pages} \\
\text{Pages}  & 1 & 1 & 2^0+1 = 2  & 2^9 + 1  & 2^{18} + 1\\
\hline
\text{PTEs} & 1 & 2 & 2^9+1 & 2^{18}+1
\end{array}
\end{gather*}
$$