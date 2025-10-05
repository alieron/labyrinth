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
- at each partition, the **pivot** is moved to its **final position**

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
		// log n depth
		quickSort(a, L, p-1);
		quickSort(a, p+1, R);
	}
}
```
> fast in practice, but worst-case needs mitigation (random pivot or median-of-3)

Partitioning
```java
private static int partition(int a[], int i, int j) {
	int p = a[i]; // first element is the pivot
	int m = i;
	for (int k = i+1; k <= j; ++k) {
		if (a[k] < p) { // swap smaller elements into the left of the moving pivot
			++m;
			swap(a, k, m);
		} // notice that we do nothing when a[k] > p, because the swap handles it for us
	}
	swap(a, i, m); // swap pivot into its final position
	return m; // return the index of pivot, to be used by Quick Sort
}
```

Randomized quick sort
- randomized pivot selection, handle sorted/nearly sorted
- randomized duplicate handling, handle many duplicates

```java
private static int partition(int a[], int i, int j) {
	// choose a random element to be the pivot
	Random rand = new Random();
	int r = i + rand.nextInt(j-i+1); // a random index between [i..j]
	swap(a, i, r);

	int p = a[i];
	int m = i;
	for (int k = i+1; k <= j; ++k) {
		if ((a[k] < p) || ((a[k] == p) && (rand.nextInt(2) == 0))) { // if equal to pivot, randomly decide if it goes left or right
			++m;
			swap(a, k, m);
		} 
	}
	swap(a, i, m); // swap pivot into its final position
	return m; // return the index of pivot, to be used by Quick Sort
}
```

Quickselect ^1d8c60
- rely on the loop invariant property of quick sort
- look into the half that we expect the target value to be sorted into
- abit like [binary search](/labyrinth/notes/cs/cs1101s/searching#^e5eb03) that can be applied to an unsorted array
### Application
Leetcode: [kth-largest-element-in-an-array](https://leetcode.com/problems/kth-largest-element-in-an-array/?envType=study-plan-v2&envId=leetcode-75)
- use quickselect

```java
public static int quickselect(int[] nums, int k, int lo, int hi) {
	int partition = partition(nums, lo, hi);

	if (partition == nums.length - k) 
		return nums[partition];
	else if (partition > nums.length - k)
		return quickselect(nums, k, lo, partition - 1);
	else
		return quickselect(nums, k, partition + 1, hi);
}
```
```tikz

```