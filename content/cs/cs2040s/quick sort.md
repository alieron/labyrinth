---
tags:
  - cs2040s/chapter2
  - cs/algorithms
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/merge_sort
next: /labyrinth/notes/cs/cs2040s/counting_sort

---
### Summary
Quick sort
- comparison based
- divide-and-conquer
- in-place (partitioning in array)
- not stable (depends on partition strategy)
- recursive

Time complexity
- [average case](https://visualgo.net/en/sorting?create=47,22,30,42,25,14,37,15&mode=Quick): $O(n \log n)$ - array is split roughly in half
- [already sorted](https://visualgo.net/en/sorting?create=5,8,12,23,26,27,34,37&mode=Quick): $O(n^2)$ - bad pivot choice, pivot is max/min
- [many duplicates](https://visualgo.net/en/sorting?create=5,5,5,5,5,5,5,5&mode=Quick): $O(n^2)$ - duplicates skew more elements to the right of the pivot

$$
\begin{gather*}
\text{average-case:} & T(n) = 2T\left( \frac{n}{2} \right) + O(n) \implies O(n \log n) \\
\\
\text{worse-case:} & T(n) = T( n-1) + O(n) \implies O(n^2)
\end{gather*}
$$

- randomized

$$
T(n) = 2T\left( \frac{n}{2} \right) + O(n) \implies O(n \log n)
$$

Loop invariant
- at the kth-partition, the **pivot** is moved to its **final position**

Blackbox sort
- [Arrays.sort()](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#sort-java.lang.Object:A-)
	- dual-pivot quick sort for primitive types
### Concept
Algorithm
1. choose a **pivot** element
2. partition the array so elements smaller than pivot go left, larger go right
3. recursively quicksort the left and right partitions

```java
private static void quickSort(int a[], int L, int R) { // ideally log N times, but might be N times
    if (L < R) {
        int p = partition(a, L, R); // O(n)
        quickSort(a, L, p-1);
        quickSort(a, p+1, R);
    }
}
```
> fast in practice, but worst-case needs mitigation (random pivot or median-of-3)

Partitioning

Randomized pivot selection

Randomized partitioning for duplicates

Quickselect ^1d8c60