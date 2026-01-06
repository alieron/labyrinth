---
tags:
  - cs2040s/chapter1
  - cs/algorithms
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/asymptotics
next: /labyrinth/notes/cs/cs2040s/bubble_sort

---
Succeeds: [sorting](/labyrinth/notes/cs/cs1101s/sorting)
### Summary
Sorting algorithms

|                           | Comparison based? | In-place?                 | Stable?                                |
| ------------------------- | ----------------- | ------------------------- | -------------------------------------- |
| optimized [bubble sort](/labyrinth/notes/cs/cs2040s/bubble_sort) | Y                 | Y                         | Y                                      |
| [selection sort](/labyrinth/notes/cs/cs2040s/selection_sort)        | Y                 | Y                         | ==N==                                  |
| [insertion sort](/labyrinth/notes/cs/cs2040s/insertion_sort)        | Y                 | Y                         | Y                                      |
| [merge sort](/labyrinth/notes/cs/cs2040s/merge_sort)            | Y                 | ==N==, $O(n)$ extra space | Y                                      |
| [quick sort](/labyrinth/notes/cs/cs2040s/quick_sort)            | Y                 | Y                         | depends on partitioning strategy       |
| [counting sort](/labyrinth/notes/cs/cs2040s/counting_sort)         | N                 | ==N==, $O(k)$ extra space | depends on implementation              |
| [radix sort](/labyrinth/notes/cs/cs2040s/radix_sort)            | N                 | ==N==, $O(n)$ extra space | depends on per-digit sorting algorithm |

Performance
- with different input arrays
- to sort in non-decreasing(ascending but allowing for duplicates) order

|                       | Random        | Sorted Non-decreasing | Sorted Non-increasing | Almost Sorted Non-decreasing | Almost Sorted Non-increasing | Many Duplicates |
| --------------------- | ------------- | --------------------- | --------------------- | ---------------------------- | ---------------------------- | --------------- |
| optimized bubble sort | $O(n^2)$      | $O(n)$                | $O(n^2)$              | ${\color{red} O(n)}$         | $O(n^2)$                     | $O(n^2)$        |
| selection sort        | $O(n^2)$      | $O(n^2)$              | $O(n^2)$              | $O(n^2)$                     | $O(n^2)$                     | $O(n^2)$        |
| insertion sort        | $O(n^2)$      | $O(n)$                | $O(n^2)$              | ${\color{red} O(n)}$         | $O(n^2)$                     | $O(n^2)$        |
| merge sort            | $O(n \log n)$ | $O(n \log n)$         | $O(n \log n)$         | $O(n \log n)$                | $O(n \log n)$                | $O(n \log n)$   |
| quick sort            | $O(n \log n)$ | $O(n^2)$              | $O(n^2)$              | $O(n^2)$                     | $O(n^2)$                     | $O(n^2)$        |
| randomized quick sort | $O(n \log n)$ | $O(n \log n)$         | $O(n \log n)$         | $O(n \log n)$                | $O(n \log n)$                | $O(n \log n)$   |
| counting sort         | $O(n)$        | $O(n)$                | $O(n)$                | $O(n)$                       | $O(n)$                       | $O(n)$          |
> bubble and insertion sort are not entirely useless; if we know that the array will already be mostly sorted, they may be faster then merge/quick sort
### Concept
Swap
- exchange two elements
- temporary storage uses only $O(1)$ space regardless of how many swaps are done

```java
void swap(int a[], int i, int j) { // swap array elements i and j
	int temp = a[i]; // O(1) space
	a[i] = a[j];
	a[j] = temp;
}
```

Minimum swaps to sort an array
- each cycle of `n` elements takes `n - 1` swaps

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}[>=Latex]
	% Nodes
  \node[draw,cell] (0) {1};
  \node[draw,cell,right=of 0] (1) {3};
  \node[draw,cell,right=of 1] (2) {5};
  \node[draw,cell,right=of 2] (3) {2};
  \node[draw,cell,right=of 3] (4) {4};
  \node[draw,cell,right=of 4] (5) {7};
  \node[draw,cell,right=of 5] (6) {6};
  
  % Arrows
  \draw[->, red] (1.north) to[bend left=60] (2.north); 
  \draw[->, red] (2.south) to[bend right=60] (4.south);
  \draw[->, red] (4.north) to[bend right=60] (3.north);  
  \draw[->, red] (3.south) to[bend left=60] (1.south);
  
  \draw[->, green] (5.north) to[bend left=60] (6.north);
  \draw[->, green] (6.south) to[bend left=60] (5.south);
  
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\text{3 cycles:} & (1), (3,5,2,4), (7,6) \\
\\
\text{swaps:} & (1-1) + (4-1) + (2-1) = 4\text{ swaps}
\end{gather*}
$$

In-place sorting
- only require $O(1)$ extra space
- exclusively using swap

Stable sorting
- relative order of elements with the same value is preserved
- using `<` instead of `<=` when determining when a swap should occur

Unsorted vs Sorted arrays
- sorting makes the array easier to work with

|                                             | Unsorted                                                              | Sorted                                                                                         |
| ------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| search                                      | linear search, $O(n)$                                                 | [binary search](/labyrinth/notes/cs/cs1101s/searching#^e5eb03), $O(\log n)$                                              |
| min/max                                     | linear search, $O(n)$                                                 | first and last index, $O(1)$                                                                   |
| kth smallest/largest                        | linear search, $O(kn)$<br>[quickselect](/labyrinth/notes/cs/cs2040s/quick_sort#^1d8c60), $O(n)$ | k or (last - k) index, $O(1)$                                                                  |
| duplicates                                  | nested loops, $O(n^2)$                                                | duplicates are adjacent, $O(n)$                                                                |
| counting repititons                         | [hash table](/labyrinth/notes/cs/cs2040s/hash_table)                                                        | duplicates are adjacent, $O(n)$                                                                |
| set intersection/union (without repitition) | nested linear search, $O(n\times m)$                                  | nested binary search, $O(n \log m)$<br>[merge](/labyrinth/notes/cs/cs2040s/merge_sort#^12175e) from merge sort, $O(n+m)$ |
| two sum                                     | nested loops, $O(n^2)$                                                | two pointer approach, $O(n)$                                                                   |
| count within range                          | [hash table](/labyrinth/notes/cs/cs2040s/hash_table)                                                        | two pointer approach, $O(n)$                                                                   |
### Application
Search
![[array_search.png|600]]
> sorting is not necessarily the best solution in all cases

Java blackbox sorting
- [Collections.sort()](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#sort-java.util.List-)
	- modified merge sort(tim sort)
- [Arrays.sort()](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#sort-java.lang.Object:A-)
	- modified merge sort(tim sort) for objects
	- dual-pivot quick sort for primitive types

Leetcode: [Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) ^d90749
- naive sort then check

```java
int len = nums.length;
int[] sorted = Arrays.copyOf(nums, len);

Arrays.sort(sorted); // O(n log n)

int l = len, r = 0;

for (int i = 0; i < len; i++) { // O(n)
	if (nums[i] != sorted[i]) {
		l = Math.min(l, i);
		r = Math.max(r, i);
	}
}

return r - l >= 0 ? r - l + 1 : 0;
```