---
tags:
- cs1101s/chapter4
- cs/data_structures
- cs/functional_programming
- lang/js
complete: true
prev: /labyrinth/notes/cs/cs1101s/environment_model
next: /labyrinth/notes/cs/cs1101s/memoization
---
   
### Summary
Integer stream
```js
const integers = pair(1, () => stream_map(x => x+1, integers); // delayed by 1
```
$$
\begin{array}{c c | c c c c}
\text{integer + 1} \to \quad & & 1+1 & 2+1 & 3+1 & \dots\\
\hline
\text{integer} \to \quad & 1 & 2 & 3 & \dots
\end{array} \quad \to \infty
$$

Fibonacci stream
```js
const fib = pair(0, () => pair(1, () => add_stream(stream_tail(fib), fib))); // delayed by 2
```
$$
\begin{array}{c c c | c c c c c c} 
\text{stream\_tail(fib)} \to \quad & & & 1 & 1 & 2 & 3 & 5 & \dots\\
\text{fib} \to \quad & & + & 0 & 1 & 1 & 2 & 3 & 5 &\dots\\
\hline
\text{fib} \to \quad & 0 & 1 & 1 & 2 & 3 & 5 & 8 & \dots
\end{array} \quad \to \infty
$$

Alternating stream
```js
const alt = pair(1, () => stream_map(x => -x, alt)); // delayed by 1
```
$$
\begin{array}{c c | c c c c c c} 
\text{-alt} \to \quad & & -1 & 1 & -1 & 1 & -1 & 1 & \dots\\
\hline
\text{alt} \to \quad & 1 & -1 & 1 & -1 & 1 & -1 & \dots
\end{array} \quad \to \infty
$$

Indexing
```js
stream_ref(s, n) => elem at index n, processes n+1 elems
eval_stream => list of index 0 to n: length = n
```
### Concept
A stream is either:
- *null*
- or a pair whose tail is a nullary function that returns a stream

[Lazy evaluation](/labyrinth/notes/cs/cs1101s/lazy_evaluation) -> next element is only evaluated when needed/called upon
### Application
Alternate integers
```js
const psum = s => pair(head(s), () => add_stream(stream_tail(s), psum(s))); // delayed by 1 recursively

const integers = psum(ones);
```
$$
\begin{array}{c c | c c c c c c} 
\text{psum(ones)}_{4} \to \quad & & & & & 1 & 2 & \dots\\
\text{stream\_tail(ones)}_{4} \to \quad & + & &  &  & 1 & 1 & \dots\\
\hline\
\text{psum(ones)}_{3} \to \quad & & & & 1 & 2 & 3 & \dots\\
\text{stream\_tail(ones)}_{3} \to \quad & + & &  & 1 & 1 & 1 & \dots\\
\hline
\text{psum(ones)}_{2} \to \quad & & & 1  & 2 & 3 & 4 & \dots\\
\text{stream\_tail(ones)}_{2} \to \quad & + & & 1 & 1 & 1 & 1 & \dots\\
\hline
\text{psum(ones)}_{1} \to \quad & & 1 & 2 & 3 & 4 & 5 & \dots \\
\text{stream\_tail(ones)}_{1} \to \quad & + & 1 & 1 & 1 & 1 & 1 &  \dots\\
\hline
\text{integers} \to \quad & 1 & 2 & 3 & 4 & 5 & 6 & \dots
\end{array} \quad \to \infty
$$
Creates $O(n^2)$ addition operations

Zip streams
```js
const zip = (s1, s2) => pair(head(s1), () => zip(s2, stream_tail(s1))); // alternate between the streams

const out = zip(alt, integers);
```
$$
\begin{array}{c | c c c c c c} 
\text{s1} \to \quad & \boxed{1} & -1\to & \boxed{-1} & 1\to & \boxed{1} & -1 \to & \dots \\
\text{s2} \to \quad & 1\to & \boxed{1} & 2\to & \boxed{2} & 3\to & \boxed{3} &  \dots\\
\hline
\text{out} \to \quad & 1 & 1 & -1 & 2 & 1 & 3 & \dots
\end{array} \quad \to \infty
$$