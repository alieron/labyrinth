---
tags:
  - cs2040s/chapter2
  - cs/algorithms
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/counting_sort
next: /labyrinth/notes/cs/cs2040s/list_ADT

---
### Summary
Radix sort
- non-comparison based
- sorts numbers digit by digit (e.g. least significant to most significant)
- relies on a stable sorting algorithm (usually counting sort) for each digit
- works well for fixed-length integers/strings

Time complexity
- d digits, each pass $O(n+k)$ with counting sort

$$
O(d(n+k))
$$

### Concept
Algorithm (LSD version)
1. For digit = least significant to most significant:
    - Stable sort numbers by that digit (using counting sort).
2. After d passes, array is sorted

```
method radixSort(array A, integer N, integer d, integer k)
  for digit in [0..d-1] // d passes
    stableCountingSort(A, N, k, digit)
```
```java
private static void radixSort(int a[], int N, int d, int k) {
    for (int exp = 1; exp <= Math.pow(10, d-1); exp *= 10)
        countingSortByDigit(a, N, k, exp); // stable counting sort on digit
}
```
> counting sort as a stable subroutine, repeated for each digit