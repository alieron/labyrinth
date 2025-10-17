---
tags:
  - cs2040s/chapter1
  - cs/algorithms
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/selection_sort
next: /labyrinth/notes/cs/cs2040s/merge_sort

---
### Summary
Insertion sort
- comparison based
- iterative
- in-place
- stable

Time complexity
- [best case](https://visualgo.net/en/sorting?create=5,8,12,23,26,27,34,37&mode=Insertion): $O(n)$ - array already sorted, inner loop runs in $O(1)$
- [worse case](https://visualgo.net/en/sorting?create=37,34,27,26,23,12,8,5&mode=Insertion): $O(n^2)$ - array is sorted in reverse, inner loop runs in $O(n)$
- every iteration of the outer loop sorts 1 element

$$
\begin{gather*}
\text{best case:} & T(n-1)+O(1)\implies O(n) \\
\\
\text{worse case:} & T(n-1)+O(n)\implies O(n^2)
\end{gather*}
$$

Loop invariant
- at the kth pass, the **first k elements** are **in order**, but not necessarily at their final positions
### Concept
Algorithm
1. start with a "sorted" array of the first element
2. pick the next element
3. **insert** it into the sorted part in the proper order(**compare**)
4. repeat 2-3 for the rest of the elements

```java
for (i = 1; i <= N; ++i) { // N-1 times
  e = A[i]; j = i;  
  while (j > 0) {  
    if (A[j-1] > e)  
      A[j] = A[j-1];  
    else  
      break;  
    j--;  
  }  
  A[j] = e;  
}
```
> build a sorted array, "insert" each new element into the sorted part