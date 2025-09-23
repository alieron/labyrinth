---
tags:
  - cs2040s/chapter2
  - cs/algorithms
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/quick_sort
next: /labyrinth/notes/cs/cs2040s/radix_sort

---
### Summary
Counting sort
- non-comparison based
- uses **frequency counting** of elements
- works only for integers in bounded range $[0,k]$
- stable if implemented carefully
- requires $O(n+k)$ time and $O(k)$ extra space

Time complexity
- counting: $O(n)$ - single pass
- reconstructing: $O(n+k)$ -  
$$
O(n+k)
$$
### Concept
Algorithm
1. initialize count array of size $k$
2. for each element in input, increment `C[value]`
3. compute prefix sums in C to determine positions
4. place each element into output array based on count

```
method countingSort(array A, integer N, integer k)
  let C[0..k] = 0
  for i in [0..N-1]
    C[A[i]]++
  for j in [1..k]
    C[j] = C[j] + C[j-1] // prefix sums
  for i in [N-1..0] // stable placement
    output[C[A[i]]] = A[i]
    C[A[i]]--
```
```java
private static void countingSort(int a[], int N, int k) {
    int[] count = new int[k+1];
    int[] output = new int[N];
    for (int i = 0; i < N; i++)
        count[a[i]]++;
    for (int j = 1; j <= k; j++)
        count[j] += count[j-1];
    for (int i = N-1; i >= 0; i--) {
        output[count[a[i]]-1] = a[i];
        count[a[i]]--;
    }
    System.arraycopy(output, 0, a, 0, N);
}
```
### Application
Dutch flag problem, [sort-colors](https://leetcode.com/problems/sort-colors/description/?envType=study-plan-v2&envId=top-100-liked)
```java
public void sortColors(int[] nums) {
	int[] qty = new int[] {0, 0, 0}; // k = 3

	for (int i = 0; i < nums.length; i++) {
		qty[nums[i]]++;
	}

	int idx = 0;
	for (int i = 0; i < nums.length; i++) {
		while (qty[idx] == 0)
			idx++;

		nums[i] = idx;
		qty[idx]--;
	}
}
```