---
tags:
  - cs1101s/chapter2
  - cs/algorithms
complete: true
prev: /labyrinth/notes/cs/cs1101s/data_abstraction
next: /labyrinth/notes/cs/cs1101s/sorting

---
### Summary
$$
\begin{align*}
\begin{array}{c | c}
\text{Linear Search} & \Theta(n) \\
\text{Binary Search} & \Theta(\log n)
\end{array}
\end{align*}
$$
### Concept
Linear search
- $\Theta(n)$
- searching through unsorted lists/arrays
- check every element
- eliminate 1 element from search space each time

Binary search ^e5eb03
- $\Theta(\log n)$ 
- searching through [sorted](/labyrinth/notes/cs/cs1101s/sorting) lists/arrays or binary search [trees](/labyrinth/notes/cs/cs1101s/trees)
- check if value is larger or smaller than the head node, check the half that the value should be in
- cut search space in half each time