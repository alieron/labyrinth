---
tags:
  - cs2040s/chapter1
  - cs/algorithms
  - lang/java
complete: false
---
### Summary
Two pointer approach
- mainly used with linear data structures
- keep track of two pointers to various elements

Opposite ends
- one pointer at each end
- ends when they meet in the middle

```java
int left = 0, right = arr.length - 1;

while (left < right) { // determine whether we should overlap in the middle or not
	left++; // increment left pointer based on condition
	
	right--; // decrement right pointer based on condition
}
```

Sliding window ^01a391
- start the two pointers at the start
- update the property when adding a new element/removing the last one
- increment each pointer based on properties of the enclosed window

Slow and fast
- two pointers move at different rates

```java
int slow = 0, fast = 0;

while (fast < arr.length) {
	slow += 1;
	fast += 2; // increment the fast pointer at a higher rate
}
```

### Application
Leetcode: [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/?envType=problem-list-v2&envId=sliding-window) ^6cde58
- sliding window

```java
if (nums.length < 2)
	return false;

// naive O(n^2) approach
for (int l = 0; l < nums.length - 1; l++) {
	for (int i = 1; i <= k; i++) { // check within the sliding 
		if (l + i >= nums.length)
			break;
		if (nums[l] == nums[l + i])
			return true;
	}
}

return false;
```

Leetcode: [Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)
- improves upon the [naive solution](/labyrinth/notes/cs/cs2040s/sorting_II#^d90749)
- use the opposite ends approach with [greedy](/labyrinth/notes/cs/cs2040s/greedy_algorithms) max and min

```java
int n = nums.length, max = nums[0], min = nums[n - 1], end = -1, beg = 0;
for (int i = 1; i < n; i++) { // O(n)
	if (nums[i] >= max) { // largest index which is less than the max on the left
		max = nums[i];
	} else {
		end = i;
	}

	if (nums[n - 1 - i] <= min) { // smallest index which is more than the min on the right
		min = nums[n - 1 - i];
	} else {
		beg = n - 1 - i;
	}
}

return end - beg + 1;
```
### Extra
Problems
- [two pointer problems](https://leetcode.com/problem-list/two-pointers/)
- [sliding window problems](https://leetcode.com/problem-list/sliding-window/)