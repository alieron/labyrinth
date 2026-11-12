---
prev: "[dynamic programming](/labyrinth/notes/cs/cs341/dynamic_programming)"
tags: []
complete: false
next: /labyrinth/notes/cs/cs341/knapsack_DP

---
### Summary
Top-down
```
Solve(i):
    if i is a base state:
        return BASE(i)

    if Memo[i] != UNSEEN:
        return Memo[i]

    answer = IDENTITY

    for each option o in OPTIONS(i):
        j = NEXT(i, o)                 // j > i
        candidate = STEP(i, o, Solve(j))
        answer = COMBINE(answer, candidate)

    Memo[i] = answer
    return answer
```

Botton-up
```
Initialize base states in DP

for i = n down to 1:
    DP[i] = IDENTITY

    for each option o in OPTIONS(i):
        j = NEXT(i, o)
        candidate = STEP(i, o, DP[j])
        DP[i] = COMBINE(DP[i], candidate)

return DP[target]
```
### Concept
#### Linear DP



#### Weighted Interval Scheduling
- maximize the weights of the selected intervals
- [greedy scheduling](/labyrinth/notes/cs/cs341/greedy_scheduling) fails when weights are included
- linear DP

|State|Means|Need|Decision|Combination|
|---|---|---|---|---|
|$i$|$OPT(i)$ is the maximum weight of compatible intervals chosen from $i,\ldots,n$.|Best value after skipping $i$, and best value after taking $i$: $OPT(i+1)$, $OPT(Next(i))$.|Skip interval $i$, or take it and jump to the first compatible interval.|$OPT(i)=\max\{OPT(i+1),\,w_i+OPT(Next(i))\}$. Base: $OPT(n+1)=0$.|

Top-down
```
WIS()
	sort intervals by start time s_i
	for i = 1...n
		visited[i] <- false
		answer[i] <- unknown
		next[i] <- min{j > i : s_j > f_i} // binary search, O(log n)
	return opt(1)
	
opt(k)
	if visited[k] return answer[k]
	visited[k] <- true
	answer[k] <- max{w_k + opt(next[k]), opt(k+1)}
	return answer[k]
```

Bottom-up
```
WISBottomUp()
	opt[n + 1] <- 0
	next <-
	
	for k = n...1
		opt[
```


#### Longest Increasing Subsequence (LIS)

Problem
- input: $n$ integers $a_{1},\dots,a_{n}$
- output: length $k$ of the longest increasing subsequence of $a_{1},\dots, a_{n}$
- LIS definition: max $k$ for some $i_{1}<i_{2}<\dots< i_{k}$ such that $a_{i_{1}} < a_{i_{2}} < \dots < a_{i_{k}}$

#### Naive

Recursive
- length of LIS that starts at index $i$
```
L(i):
	out <- 0
	for j = i+1 ... n:
		if a[j] > a[i]:
			out <- max(out, L(j))
	
	return 1 + out
```

| State | Means                                                                           | Need                                        | Decision                                                         | Combination                                                                                |
| ----- | ------------------------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| $i$  | $L(i)$ is the length of a longest increasing subsequence **starting at $i$**. | $L(j)$ for every $j>i$ with $A[j]>A[i]$. | Stop at $A[i]$, or choose which valid position $j$ comes next. | $L(i)=\max\bigl(\{1\}\cup\{1+L(j):j>i,\ A[j]>A[i]\}\bigr)$. Final answer: $\max_i L(i)$. |
Bottom-up
```
for i = n down to 1:
    D[i] = 1
    next[i] = NIL

    for j = i+1 to n:
        if A[j] > A[i] and 1 + D[j] > D[i]:
            D[i] = 1 + D[j]
            next[i] = j

return max D[i]          // return 0 if input is empty
```

Correctness

Time complexity


#### Improved

pos[l] = index of largest a_i for which L(i) = l



Claim: a[pos[1]] > a[pos[2]] > a[pos[3]] > ... > a[pos[m]]

so we can do binary search, yippee

### Application
Codeforces: [Vacations](https://codeforces.com/contest/699/problem/C)
- linear DP
- tabulate the max number of active days if either resting, contest or sport

```tikz
\usepackage{tikz}
\usetikzlibrary{calc}

\definecolor{aqua}{RGB}{0,180,180}

% states:
% column 0 = rest
% column 1 = contest
% column 2 = gym

% \cell{row}{col}{value}
\newcommand{\cell}[3]{
  \node at ($(#2,-#1)$) {#3};
}

% \arrow[color]{r1}{c1}{r2}{c2}
\newcommand{\arrow}[5][red]{
  \draw[->,#1,shorten <=6pt,shorten >=6pt]
    ($(#3,-#2)$) -- ($(#5,-#4)$);
}

\begin{document}
\begin{tikzpicture}[thick]

\node at (0,1) {$R$};
\node at (1,1) {$C$};
\node at (2,1) {$G$};

\node at (-1,-1) {$1$};
\node at (-1,-2) {$3$};
\node at (-1,-3) {$2$};
\node at (-1,-4) {$0$};

\cell{0}{0}{0}
\cell{0}{1}{0}
\cell{0}{2}{0}

% day 1: contest available

\cell{1}{0}{0}
\cell{1}{1}{1}
\cell{1}{2}{1}

\arrow[aqua]{0}{0}{1}{0}
\arrow[gray]{0}{1}{1}{0}
\arrow[gray]{0}{2}{1}{0}

\arrow[red]{0}{0}{1}{1}
\arrow[gray]{0}{2}{1}{1}

\arrow[pink]{1}{1}{1}{2}

% day 2: contest and gym available

\cell{2}{0}{1}
\cell{2}{1}{1}
\cell{2}{2}{2}

\arrow[gray]{1}{0}{2}{0}
\arrow[aqua]{1}{1}{2}{0}
\arrow[gray]{1}{2}{2}{0}

\arrow[red]{1}{0}{2}{1}
\arrow[gray]{1}{2}{2}{1}

\arrow[gray]{1}{0}{2}{2}
\arrow[red]{1}{1}{2}{2}

% day 3: gym available

\cell{3}{0}{2}
\cell{3}{1}{2}
\cell{3}{2}{2}

\arrow[gray]{2}{0}{3}{0}
\arrow[gray]{2}{1}{3}{0}
\arrow[aqua]{2}{2}{3}{0}

\arrow[gray]{2}{0}{3}{2}
\arrow[red]{2}{1}{3}{2}

\arrow[pink]{3}{0}{3}{1}

% day 4: no activity available

\cell{4}{0}{2}
\cell{4}{1}{2}
\cell{4}{2}{2}

\arrow[gray]{3}{0}{4}{0}
\arrow[gray]{3}{1}{4}{0}
\arrow[aqua]{3}{2}{4}{0}

\arrow[pink]{4}{0}{4}{1}
\arrow[pink]{4}{0}{4}{2}

\end{tikzpicture}
\end{document}
```

```cpp
vector<array<int, 3>> dp(n + 1, {0, 0, 0}); // number of active days after i days, if
                                            // on the ith day, rest, contest or sport
for (i = 1; i <= n; i++) {
	const auto &prev = dp[i - 1];
	// 1st col is max of previous row
	dp[i][0] = max(prev[0], max(prev[1], prev[2]));
	// 2nd col is max of previous row, or +1 if contest can be done and not consequtive
	dp[i][1] = a[i - 1] & 1 ? max(prev[0] + 1, prev[2] + 1) : dp[i][0];
	// 3rd col is max of previous row, or +1 if sport can be done and not consequtive
	dp[i][2] = a[i - 1] & 2 ? max(prev[0] + 1, prev[1] + 1) : dp[i][0];
}

cout << n - max(dp[n][0], max(dp[n][1], dp[n][2])) << "\n";

return 0;
```
