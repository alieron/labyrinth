---
prev: "[linear DP](/labyrinth/notes/cs/cs341/linear_DP)"
tags: []
complete: false
next: /labyrinth/notes/cs/cs341/alignment_DP

---
### Summary
Top-down
```
Solve(i, b):
    if (i, b) is a base state:
        return BASE(i, b)

    if Memo[i, b] != UNSEEN:
        return Memo[i, b]

    // Option 1: skip item i
    answer = Solve(i + 1, b)

    // Option 2: take item i
    if weight[i] <= b:
        candidate = TAKE(i, Solve(i + 1, b - weight[i]))
        answer = COMBINE(answer, candidate)

    Memo[i, b] = answer
    return answer

return Solve(1, B)
```

Bottom-up
```
for b = 0 to B:
    DP[n + 1, b] = BASE(n + 1, b)

for i = n down to 1:
    for b = 0 to B:
        DP[i, b] = DP[i + 1, b]       // skip

        if weight[i] <= b:             // take
            candidate = TAKE(i, DP[i + 1, b - weight[i]])
            DP[i, b] = COMBINE(DP[i, b], candidate)

return DP[1, B]
```
### Concept
#### Subset Sum
- pseudopolynomial time, $O(nk)$ is polynomial as long as $k$ is small relative to $n$
- knapsack DP

Problem
- input: $n$ positive integers $a_{1},\dots,a_{n}$ and a target $k$
- output: "Yes" if there is a subset of numbers that sum to $k$, "No" otherwise

| State    | Means                                                                  | Need                                                                                                      | Decision              | Combination                                                                              |
| -------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------- |
| $(i,k)$ | $S(i,k)$ says whether some subset of $A[i..n]$ sums to exactly $k$. | Feasibility without $A[i]$: $S(i+1,k)$; if $A[i]\le k$, feasibility after taking it: $S(i+1,k-A[i])$. | Skip or take $A[i]$. | $S(i,k)=S(i+1,k)\lor\bigl(A[i]\le k\land S(i+1,k-A[i])\bigr)$. Base: $S(n+1,k)=(k=0)$. |

Recursive
```
SubsetSum(i, l):
	if l == 0:
		return Yes
	if l < 0 or i > n:
		return No
	return SubsetSum(i + 1, l - a) or SubsetSum(i + 1, l)
	
SubsetSum(0, k)
```

Top-down
- 2d dp array

Bottom-up
- can be more space efficient

#### Knapsack
- knapsack DP

Problem
- input: $n$ items with weight $w_{1},\dots, w_{n}$ and value $v_{1},\dots,v_{n}$ and a weight threshold $W$
- output: maximum value $V$, the sum of the values of a subset, where the sum of all weights <= $W$

| State    | Means                                                                                          | Need                                               | Decision                                    | Combination                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| $(i,c)$ | $K(i,c)$ is the maximum value obtainable from items $i,\ldots,n$ with capacity at most $c$. | $K(i+1,c)$; if $w_i\le c$, also $K(i+1,c-w_i)$. | Skip item $i$, or take it once if it fits. | $K(i,c)=\max\{K(i+1,c),\,v_i+K(i+1,c-w_i)\}$, excluding take if it does not fit. Base: $K(n+1,c)=0$. |

Top-down
```
Knapsack(i, c):
    if i == 0:
        return 0
    if Memo[i, c] has been computed:
        return Memo[i, c]

    answer = Knapsack(i - 1, c)

    if w[i] <= c:
        answer = max(answer, v[i] + Knapsack(i - 1, c - w[i]))

    Memo[i, c] = answer
    return answer

return Knapsack(n, W)
```


Bottom-up

### Application
Leetcode: [Coin Change](https://leetcode.com/problems/coin-change)
- knapsack DP

```cpp
int dp[amount + 1];
dp[0] = 0;

sort(begin(coins), end(coins)); // sort first

for (int i = 1; i <= amount; i++) {
	dp[i] = INT_MAX;

	for (int c: coins) {
		if (c > i) break; // terminate if coin is larger than the current amount, possible since we sort first

		if (dp[i - c] != INT_MAX) dp[i] = min(dp[i], 1 + dp[i - c]); // check if the sub-problem has a solution and use it
		// this will result in the minimum coins to reach this current amount
	}
}
return dp[amount] == INT_MAX ? -1 : dp[amount];
```
