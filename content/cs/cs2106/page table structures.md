---
tags:
  - cs2106/chapter9
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/virtual_memory
next: /labyrinth/notes/cs/cs2106/page_replacement

---
### Summary

### Concept
- modern logical memory space is massive -> huge number of pages
- each page must have an entry in the page table -> hueg page table
	- high overhead
	- page table might itself be fragmented

#### Direct paging
- keep all entries in a single table

$$
\begin{gather*}
\begin{aligned}
 2 ^p \text{pages} & \to p\text{ bits to specify a unique page} \\
& \to 2^p\text{ page table entries}
\end{aligned}\\
\\
\begin{array}{|c|c|}
\hline
\text{page }\# & \text{offset}  \\
p\text{-bits} & n\text{-bits} \\
\hline
\end{array}
\end{gather*}
$$


#### 2-level paging
- page table is broken up into smaller sub-tables
- generally, the sub-tables are the size of a page


$$
\begin{array}{|c|c|}
\hline
\text{page dir }\# & \text{page }\# & \text{offset}  \\
m\text{-bits} & (p-m)\text{-bits} & n\text{-bits} \\
\hline
\end{array}
$$

#### Inverted page table
- entries are indexed by frame number instead

![[inverted_page_table.png|600]]