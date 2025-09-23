---
tags:
  - cs2040s/chapter1
  - cs/algorithms
  - lang/java
complete: false
---
### Summary
Greedy algorithms
- make **locally optimized** choices in order to find the **global optimum**
### Application
Leetcode: [Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=greedy)
- [two pointer approach](/labyrinth/notes/cs/cs2040s/two_pointer_approach) with greedy algorithm
- maximize the volume at each step

```java
int i = 0, j = height.length - 1;
int max = 0;
while (i < j) {
	max = Math.max(max, Math.min(height[i], height[j]) * (j - i)); // check if the local max is greater than the global max

	if (height[i] < height[j]) // keep the taller side, greedy part
		i++;
	else
		j--;
}

return max;
```

Leetcode: [Jump Game](https://leetcode.com/problems/jump-game/description/?envType=problem-list-v2&envId=greedy)
- elements in array denote the maximum jump distance, find if its possible to jump to the end
- greedy working from the back

```java
int target = nums.length - 1, dist = 1;

while (target > 0) {
	if (nums[target - 1] >= dist)
		dist = 1;
	else
		dist++;

	target--;
}

return dist == 1;
```
### Extra
Problems
- [greedy problems](https://leetcode.com/problem-list/greedy/)