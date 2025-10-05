---
tags:
  - cs2040s/chapter2
  - cs/algorithms
  - lang/java
complete: false
next: /labyrinth/notes/cs/cs2040s/quick_sort
prev: /labyrinth/notes/cs/cs2040s/insertion_sort

---
### Summary
Merge sort
- comparison based
- divide-and-conquer
- not in-place (requires $O(n)$ extra space)
- stable
- recursive

Time complexity
- splits array in half each recursion -> $\log n$ depth
- merging each level takes $O(n)$
- [all cases](https://visualgo.net/en/sorting?create=47,22,30,42,25,14,37,15&mode=Merge): $O(n \log n)$ - array is always split in half

$$
T(n) = 2T\left( \frac{n}{2} \right) + O(n) \implies O(n \log n)
$$

Blackbox sorting
- [Collections.sort()](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#sort-java.util.List-)
	- modified merge sort(tim sort)
- [Arrays.sort()](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#sort-java.lang.Object:A-)
	- modified merge sort(tim sort) for objects
### Concept
Algorithm
1. if array has 0 or 1 element, it is sorted
2. divide array into two halves
3. recursively sort each half
4. merge the two sorted halves

```java
private static void mergeSort(int a[], int low, int high) {
	// the array to be sorted is a[low..high]
	if (low < high) { // base case: low >= high (0 or 1 item)
		int mid = (low + high) / 2; 
		mergeSort(a, low, mid); // sort the first half O(n/2 log n/2)
		mergeSort(a, mid + 1, high); // sort the second half
		merge(a, low, mid, high); // conquer: the merge routine O(n)
	}
}
```
> recursive split + merge, handling [odd number of elements](https://visualgo.net/en/sorting?create=47,22,30&mode=Merge): larger "half" on the left

Merge subroutine ^12175e
- joining two already sorted arrays
- choose smallest between the two arrays

```java
private static void merge(int a[], int low, int mid, int high) {
	// subarray1 = a[low..mid], subarray2 = a[mid+1..high], both sorted
	int N = high-low+1;
	int[] b = new int[N]; // temporary array O(n) space
	int left = low, right = mid+1, bIdx = 0;
	while (left <= mid && right <= high) // the merging
		b[bIdx++] = (a[left] <= a[right]) ? a[left++] : a[right++];
	while (left <= mid) b[bIdx++] = a[left++]; // leftover, if any
	while (right <= high) b[bIdx++] = a[right++]; // leftover, if any
	for (int k = 0; k < N; ++k) a[low+k] = b[k]; // copy back
}
```

Divide and conquer paradigm
- breakdown the problem into smaller subproblems
- divide until the subproblem is trivial
### Application
Kattis: [classfieldtrip](https://open.kattis.com/problems/classfieldtrip)
- merge two sorted strings

```java
Scanner sc = new Scanner(System.in);

// get the two strings
String a = sc.nextLine();
String b = sc.nextLine();

String out = "";

boolean finished = false;

while (a.length() != 0 && b.length() != 0) {
	// compare the first elements of both strings
	if (a.charAt(0) < b.charAt(0)) { // if a[0] < b[0]
		out += a.charAt(0); // merge a[0] into our sorted array
		a = a.substring(1); // remove
	} else {
		out += b.charAt(0);
		b = b.substring(1);
	}
}

// one string might be longer, so add all the leftovers
out += a;
out += b;

System.out.println(out);
```
> can also be done using two pointers, one for each string, to reduce the overhead of string slicing

