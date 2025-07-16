---
tags:
- cs/algorithms
- cs1101s/chapter2
complete: false
index: null
---
[Previous](/labyrinth/notes/cs/cs1101s/searching)   [Next](/labyrinth/notes/cs/cs1101s/mutable_data)
### Summary
$$
\begin{align*}
\begin{array}{c | c | c | c}
Insertion \ Sort & \Omega(n) & \Theta(n^2) & O(n^2) \\
Selection \ Sort & & \Theta(n^2) & \\
Merge \ Sort & & \Theta(n\log n) & \\
Quick \ Sort & \Omega(n\log n) & \Theta(n\log n) & O(n^2)
\end{array}
\end{align*}
$$
### Concept
Insertion sort
- Sort tail recursively, insert head into sorted tail

Selection sort
- Remove the smallest, sort the rest recursively

Merge sort ^98f7dd
- Split in half, sort each half recursively

Quick sort
- Choose a random pivot, split into values larger and smaller than pivot, sort each set recursively
### Application
$$

$$

