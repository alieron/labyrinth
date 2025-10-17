---
tags:
  - cs2040s/chapter1
  - cs/algorithms
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/bubble_sort
next: /labyrinth/notes/cs/cs2040s/insertion_sort

---
### Summary
Selection sort
- comparison based
- iterative
- in-place
- not stable

Time complexity
- [all cases](https://visualgo.net/en/sorting?create=47,22,30,42,25,14,37,15&mode=Selection): $O(n^2)$ - each pass sorts 1 element

$$
T(n-1)+O(n)\implies O(n^2)
$$

Loop invariant
- at the kth pass, the **first k elements** will be sorted into their **final positions**
### Concept
Algorithm
1. start with the lower index at the first index
2. **select** the smallest value in the array, by comparison
3. swap it into the lowest index
4. increment the lowest index and repeat 2-3 to find the next smallest
5. repeat 2-3 until the lowest index is the last index

```java
for (int i = 0; i < N-1; ++i) { // N-1 iterations
  cur_min = i;  
  for (int j = i+1; j < n; ++j)  
    if (A[j] < A[cur_min])
      cur_min = j;  
  swap(A, i, cur_min);  
}
```
> "select" the current smallest