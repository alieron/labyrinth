---
tags:
  - cs2040s/chapter1
  - cs/algorithms
  - lang/java
complete: true
next: /labyrinth/notes/cs/cs2040s/selection_sort
prev: /labyrinth/notes/cs/cs2040s/sorting_II

---
### Summary
Bubble sort
- comparison based
- iterative
- in-place
- stable

Time complexity
- [average case](https://visualgo.net/en/sorting?create=47,22,30,42,25,14,37,15&mode=Bubble&run=true): $O(n^2)$ - each pass sorts 1 element

$$
T(n-1)+O(n)\implies O(n^2)
$$

- early termination
- [best case](https://visualgo.net/en/sorting?create=5,8,12,23,26,27,34,37&mode=Bubble&run=true): $O(n)$ - one pass to check that no swaps are needed

$$
\begin{gather*}
\text{already sorted:} & \text{1 pass to check} \implies O(n)
\\
\text{almost sorted:} & k\text{ elements are out of place } \implies O((k+1)n) \implies O(n)
\end{gather*}
$$
> assuming `k` is very small compared to `n`

Loop invariant
- at the `kth` pass, the **last `k` elements** will be sorted into their **final positions**
> loop invariant is a property that holds true before and after each iteration
### Concept
Algorithm
1. **compare** pairs of adjacent items
2. swap the two if they are out of order
3. go to the next pair
4. repeat 1-3 until the end of the array, the last element will be in its final position
5. repeat 1-4 reducing the size of the array by one each time

```java
for (int j = 0; j < N-1; ++j) // N-1 iterations
	for (int i = 0; i < N-1; ++i) // except the last, O(N)
		if (A[i] > A[i+1]) // comparison
			swap(A, i, i+1); // swap in O(1)
```
> the largest elements "bubble" to the back

Early termination
- keep track of whether any swaps are made in one pass
- no swaps implies that the array is sorted

```java
boolean swapped = false;

for (int j = 0; j < N-1; ++j) {
	swapped = false;
	for (int i = 0; i < N-1; ++i) // except the last, O(N)
		if (A[i] > A[i+1]) {
			swap(A, i, i+1); // swap in O(1)
			swapped = true;
		}
	if (!swapped) // inner loop ran without making any swaps, therefore its sorted
		break;	
}
// or
j = 0;
do {
  swapped = false; ++j;
  for (int i = 0; i < N-j; ++i)
    if (A[i] > A[i+1]) {
      swap(A[i], A[i+1]);
      swapped = true;
    }
} while (swapped);
```
### Application
Largest k elements
```java
// k is the number of elements we want
for (int j = 0; j < k; ++j) // k passes
	for (int i = 0; i < N-1; ++i)
		if (A[i] > A[i+1])
			swap(A, i, i+1);
```

Kattis: [mjehuric](https://open.kattis.com/problems/mjehuric)
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
PrintWriter pw = new PrintWriter(System.out);

StringTokenizer st = new StringTokenizer(br.readLine(), " ");

int N = 5, n = N;

int[] nums = new int[N];
for (int i = 0; i < N; i++) 
	nums[i] = Integer.parseInt(st.nextToken());

// bubble sort
for (; n > 0; n--)
	for (int i = 0; i < n - 1; i++)
		if (nums[i] > nums[i + 1]) {
			// swap
			int tmp = nums[i];
			nums[i] = nums[i+1];
			nums[i+1] = tmp;

			for (int j = 0; j < N; j++)
				pw.print(String.format("%d ", nums[j]));
			pw.println();
		}

pw.close();
```
> make use of [BufferedReader](/labyrinth/notes/cs/cs2040s/utility_classes#^fecb85) and [PrintWriter](/labyrinth/notes/cs/cs2040s/utility_classes#^6d9f10) for faster IO