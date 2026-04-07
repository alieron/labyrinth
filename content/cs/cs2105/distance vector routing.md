---
tags:
  - cs2105/lect7
  - cs/networking
  - cs/algorithms
complete: false
next: /labyrinth/notes/cs/cs2105/RIP
prev: /labyrinth/notes/cs/cs2105/DHCP

---
### Concept
#### [Bellman-ford](/labyrinth/notes/cs/cs2040s/bellman-ford_algorithm)
- router can only know information about the local network
- rely on partial knowledge from neighbouring routers to see the big picture
- distributed computing, each router $O(N)$ where $N$ is the number of neighbours

$$
\begin{gather*}
\begin{aligned}
\text{Source:}&&&u \\
\text{Destination:}&&& v\\
\text{Neighbours of }u:&&& N \\
\end{aligned} \\
\\
D_{u}(v)=\text{min}_{n\in N} \{ c(u, n) +D_{n}(v)\}
\end{gather*}
$$

Network diameter
- longest distance between two points in the network