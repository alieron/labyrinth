---
tags:
  - cs341/chapter4
  - cs/dynamic_programming
  - cs/algorithms
complete: false
next: /labyrinth/notes/cs/cs341/tree_DP
prev: /labyrinth/notes/cs/cs341/knapsack_DP

---
### Summary
Top-down
```
Solve(i, j):
    if i == n + 1 or j == m + 1:
        return BASE(i, j)

    if Memo[i, j] != UNSEEN:
        return Memo[i, j]

    answer = IDENTITY

    for each option o in OPTIONS(i, j):
        (ni, nj) = NEXT(i, j, o)
        candidate = STEP(i, j, o, Solve(ni, nj))
        answer = COMBINE(answer, candidate)

    Memo[i, j] = answer
    return answer

return Solve(1, 1)
```

Bottom-up
```
Initialize DP[n + 1, j] and DP[i, m + 1]

for i = n down to 1:
    for j = m down to 1:
        DP[i, j] = IDENTITY

        for each option o in OPTIONS(i, j):
            (ni, nj) = NEXT(i, j, o)
            candidate = STEP(i, j, o, DP[ni, nj])
            DP[i, j] = COMBINE(DP[i, j], candidate)

return DP[1, 1]
```
### Concept
#### Longest Common Subsequence

| State     | Means                                                                 | Need                                                                      | Decision                                              | Combination                                                                                                                 |
| --------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| $(i,j)$ | $C(i,j)$ is the LCS length of suffixes $A[i..n]$ and $B[j..m]$. | $C(i+1,j)$, $C(i,j+1)$, and $C(i+1,j+1)$ when the characters match. | Skip $A[i]$, skip $B[j]$, or match them if equal. | Take the maximum of $C(i+1,j)$, $C(i,j+1)$, and $1+C(i+1,j+1)$ if equal. Base: either suffix empty $\Rightarrow 0$. |

base cases

option 1
take a_i and b_j

if equal
else

option 2
ignore a_i

val_2 = C(i+1, j)

option 3
ignore b_j

val_3 = C(i, j+1)

combine
C(i, j) = max{val_1, val_2, val_3}


#### Edit Distance
- or [levenshtein distance](/labyrinth/notes/cs/nlp/levenshtein_distance)

| State    | Means                                                                       | Need                                         | Decision                                                                         | Combination                                                                                                                               |
| -------- | --------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| $(i,j)$ | $E(i,j)$ is the minimum edit cost to transform $A[i..n]$ into $B[j..m]$. | $E(i+1,j)$, $E(i,j+1)$, and $E(i+1,j+1)$. | Delete $A[i]$, insert $B[j]$, or pair the characters by matching/substituting. | $E(i,j)=\min\{1+E(i+1,j),\,1+E(i,j+1),\,[A[i]\ne B[j]]+E(i+1,j+1)\}$. Base: if either suffix is empty, return the other suffix’s length. |

D(i, j) = edit distance between a_i,...,a_n and b_j,...,b_m

base cases
D(i, m + 1) - end of 2nd string = n - i + 1
D(n + 1, j) - end of 1st string = m - j + 1

option 1
align a_i and b_j

val_1 = D(i + 1, j + 1) if a_i = b_j else D(i + 1, j + 1) + 1

option 2
delete a_i

val_2 = D(i + 1, j) + 1

option 3
add b_j

val_2 = D(i, j + 1) + 1

combine
D(i, j) = min{val_1, val_2, val_3}


