---
tags:
  - cs341/chapter1
  - cs/algorithms
complete: false
prev: /labyrinth/notes/cs/cs341/master_theorem
next: /labyrinth/notes/cs/cs341/BFS_II

---
### Concept
#### Divide and Conquer
- divide into smaller sub-problems
- solve sub-problems recursively
- merge the solutions

#### Counting Inversions
- pair of indices $i<j$ such that $A[i]>A[j]$, basically out of order pairs
- [merge sort](/labyrinth/notes/cs/cs2040s/merge_sort) adjacent

```
CountInv(A): // returns (sorted copy of A, number of inversions in A)
    if length(A) <= 1:
        return (A, 0)

    split A into consecutive halves AL and AR

    (L, leftCount)  = CountInv(AL)
    (R, rightCount) = CountInv(AR)

    i = 0
    j = 0
    crossCount = 0
    S = empty list

    while i < length(L) and j < length(R): // just have to check inversions between the two sorted halves, O(n), since sorted
        if L[i] <= R[j]:
            append L[i] to S
            i = i + 1
        else:
            append R[j] to S
            crossCount = crossCount + (length(L) - i)
            j = j + 1

    append remaining elements of L to S
    append remaining elements of R to S

    return (S, leftCount + rightCount + crossCount)
```

Lemma
$$
\begin{align*}
L[i]>R[j] \implies L[i],L[i+1],\ldots,L[|L|-1]>R[j] \implies |L| - i \text{ inversions for }R[j]
\end{align*}
$$

Invariant
- 
TODO

Correctness
- induction iwht base case of 1


Runtime
$$
T(n)=2T(n/2)+\Theta(n)=\Theta(n\log n)
$$

#### Maximum Subarray
- subarray can be, in either half, or span the boundary
- how to find subarrays that cross the divide?

```
MaxSubarray(A, lo, hi): // returns (start, end, sum)
    if lo == hi:
        return (lo, hi, A[lo])

    m = floor((lo + hi) / 2)

    L = MaxSubarray(A, lo, m)
    R = MaxSubarray(A, m + 1, hi)

		// search for subarray starting from the middle/boundary, O(n)
    sum = 0
    bestLeftSum = -infinity

    for i = m down to lo:
        sum = sum + A[i]
        if sum > bestLeftSum:
            bestLeftSum = sum
            bestLeftIndex = i

    sum = 0
    bestRightSum = -infinity

    for j = m + 1 to hi:
        sum = sum + A[j]
        if sum > bestRightSum:
            bestRightSum = sum
            bestRightIndex = j

    C = (bestLeftIndex, bestRightIndex,
         bestLeftSum + bestRightSum)

    return the tuple among L, R, C with largest sum
```

$$
\text{crossing subarray: }[?,m]\dots[m+1, ?]
$$


Crossing lemma
- the two halves can be maximized separately

$$
\text{for crossing subarray }[i,j]\text{: }\sum_{k=i}^{j}A[k]
=
\sum_{k=i}^{m}A[k]
+
\sum_{k=m+1}^{j}A[k].
$$

Correctness
- induction from base cas of 1

Runtime
$$
T(n)=2T(n/2)+\Theta(n)=\Theta(n\log n)
$$
#### Find Median/Select rank
- [quick sort](/labyrinth/notes/cs/cs2040s/quick_sort) adjacent

```
Select(A, k):
    choose pivot p

		// partitioning, O(n)
    L = elements of A smaller than p
    E = elements of A equal to p
    R = elements of A greater than p

    if k <= length(L):
        return Select(L, k)

    if k <= length(L) + length(E):
        return p

    return Select(R, k - length(L) - length(E))
```

Partition lemma
$$
\begin{gather*}
L=\{x:x<p\},\qquad E=\{x:x=p\},\qquad R=\{x:x>p\} \\
\\
\text{pivot ranks: }|L|+1,\ldots,|L|+|E|
\end{gather*}
$$

Recursive contract
- when recursing right

$$
k' = k - |L| - |E|
$$

Correctness
- induction on array size, base case 1

- in L, recurse with rank k
- in E, return p
- in R, recurse with rank k - |L| - |E|

Runtime
$$
\Theta(n), \ O(n^{2})
$$


#### Median of Medians
- more deterministic, version of above

```
// ranks start at 1
Select(A, k): // returns 
    if length(A) <= 5:
        sort A
        return A[k]

		// constant time to sort a small array, n/5 times, O(n)
    divide A into groups of at most 5
    M = list of the groups' medians
    p = Select(M, ceil(length(M) / 2)) // find the median of medians

		// partitioning, O(n)
    L = elements of A smaller than p
    E = elements of A equal to p
    R = elements of A greater than p

    if k <= length(L):
        return Select(L, k)

    if k <= length(L) + length(E):
        return p

    return Select(R, k - length(L) - length(E))
```

Pivot quality lemma

Runtime
$$
\Theta(n)
$$

#### Closest Pair
- yea wtf

TODO

#### Integer Multiplication
- [karatsuba algorithm](/labyrinth/notes/cs/cs341/karatsuba_algorithm)

#### Matrix Multiplication
- [strassen algorithm](/labyrinth/notes/cs/cs341/strassen_algorithm)

### Application
$\left\lfloor  \frac{n}{3}  \right\rfloor$th smallest number in unsorted list
- median of medians

```
Select(A, k):                     // ranks start at 1
    if length(A) <= 5:
        sort A
        return A[k]

    divide A into groups of at most 5
    M = list of the groups' medians
    p = Select(M, ceil(length(M) / 2))

    L = elements of A smaller than p
    E = elements of A equal to p
    R = elements of A greater than p

    if k <= length(L):
        return Select(L, k)

    if k <= length(L) + length(E):
        return p

    return Select(R, k - length(L) - length(E))
```

Majority element
- majority if it appears $>\frac{n}{2}$ times

```
Candidate(A, L, R): // returns (candidate, weight)
    if L == R:
        return (A[L], 1)

    M = floor((L + R) / 2)
    (x, p) = Candidate(A, L, M)
    (y, q) = Candidate(A, M + 1, R)

    if p == 0: // no majority in Left
        return (y, q)

    if q == 0: // no majority in Right
        return (x, p)

    if x == y: // same candidate, add weights
        return (x, p + q)

    if p > q: // Left majority dominates
        return (x, p - q)

    if q > p: // Right majority dominates
        return (y, q - p)

    return (NONE, 0) // different majority but equal weight on both sides


Majority(A):
    if A is empty:
        return "No Majority"

    (x, weight) = Candidate(A, 1, length(A))

    if weight == 0:
        return "No Majority"

    count = number of occurrences of x in A

    if count > floor(length(A) / 2):
        return x

    return "No Majority"
```
- lemma

$$
\begin{gather*}
x \text{ occurs }m > \frac{n}{2}\text{ times} \\
\\
\text{remove an unequal pair, removes at most 1 }x: \qquad m-1 > \frac{n}{2}-1 = \frac{n-2}{2} \\
\\
x\text{ is still a majority}
\end{gather*}
$$

- consider
$$
L=[a,a,a,b,b],\qquad R=[b,b,b,a,a]
$$

- correctness
	- induction on array size, base case 1
- runtime
$$
T(n)=T(\lfloor n/2\rfloor)+T(\lceil n/2\rceil)+\Theta(1)=\Theta(n)
$$