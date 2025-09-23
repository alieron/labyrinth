---
tags:
  - cs2040s/chapter1
  - cs/data_structures
  - lang/java
complete: true
next: /labyrinth/notes/cs/cs2040s/asymptotics

---
Succeeds: [arrays](/labyrinth/notes/cs/cs1101s/arrays)
### Summary
Compact array
- implements [list ADT](/labyrinth/notes/cs/cs2040s/list_ADT)

| Operation      | Method                                           | Performance                                                                               |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `get(i)`       | direct access                                    | - $O(1)$, any element                                                                     |
| `search(v)`    | linear search                                    | - $O(1)$, first element <br>- $O(n)$, last element/not found                              |
| `insert(i, v)` | shift elements `[i,n−1]` right, place `v` at `i` | - $O(1)$, append to last<br>- $O(n)$, insert at index `0`, shift the other elements       |
| `remove(i)`    | shift elements `[i+1,n−1]` left                  | - $O(1)$, remove last element<br>- $O(n)$, remove first element, shift the other elements |

Strengths
- direct indexing $O(1)$, elements are [contiguous](/labyrinth/notes/cs/cs2100/arrays_in_C)
- good if the maximum $m$ is known

Limitations
- **fixed size issue** (if $m$ too small → overflow, too large → wasted space)
- inefficient when the maximum $m$ is unknown and if `insert` and `remove` are used often
### Concept
Data structure
- contiguous storage with no gaps
- operations must maintain **compactness**(no empty slots in between)

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta,decorations.pathreplacing}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[draw,cell] (0) {$a_1$};
  \node[draw,cell,right=of 0] (1) {$a_2$};
  \node[draw,cell,right=of 1,minimum width=2cm] (2){...};
  \node[draw,cell,right=of 2] (3) {$a_n$};
  \node[draw,cell,right=of 3] (4) {};
  \node[draw,cell,right=of 4,minimum width=2cm] (5) {...};
  \node[draw,cell,right=of 5] (6) {};
  
  \node[yshift=-\boxsize] (x0) {0};
  \node[yshift=-\boxsize] (x1) at (1) {1};
  \node[yshift=-\boxsize] (xn) at (3) {n-1};
  \node[yshift=-\boxsize] (xn1) at (4) {n};
  \node[yshift=-\boxsize] (xm) at (6) {m-1};
  
	\draw[decorate,decoration={brace,amplitude=5pt}] 
    (0.north west) -- (3.north east) node[midway,above=6pt] {n elements};
\end{tikzpicture}
\end{document}
```

Variable-sized arrays
- overcomes issues with fixed-sized arrays
- once full, allocate a new array(2× larger), copy elements
- eg. `std::vector` (C++), `list` (Python), `ArrayList` (Java)
> the copying of elements into the new array is an amortized $O(n)$ operation, it happens so infrequently(ideally) that we can consider it as $O(1)$
### Application
Finding min and max
```java
List<Integer> A = new ArrayList<>();

...

int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
for (int x : A) { // n times
    if (x < min) min = x;
    if (x > max) max = x;
}
System.out.println("Min = " + min + ", Max = " + max);
```

Naive duplicate detection
```java
List<Integer> A = new ArrayList<>();

...

boolean hasDuplicate = false;

for (int i = 0; i < A.size(); i++) { // n times
	for (int j = i + 1; j < A.size(); j++) { // n times
		if (A.get(i).equals(A.get(j))) {
				hasDuplicate = true;
				System.out.println("Duplicate found: " + A.get(i));
		}
	}
}

if (!hasDuplicate) {
	System.out.println("No duplicates found.");
}
```