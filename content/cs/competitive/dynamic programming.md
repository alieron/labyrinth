---
tags:
  - cs/competitive
  - cs/paradigm
complete: false
pred:
  - "[recursion](/labyrinth/notes/cs/cs1101s/recursion)"
  - "[memoization](/labyrinth/notes/cs/cs1101s/memoization)"
---
### Summary
DP fundementals
- state - where you are currently
- means - what we have solved upto this point
- need - what is needed to solve the current state
- decision - decision to make at the current state
- combination - how to compute the current state from previous states

DP patterns

| Pattern   | State                                | Means          | Need (sub-problem)                           | Decision                 | Combination                             |
| --------- | ------------------------------------ | -------------- | -------------------------------------------- | ------------------------ | --------------------------------------- |
| Linear    | index `i`                            | `dp[i]`        | previous entries                             | best predecessor         | `dp[i] = op(dp[i-1], ...)`              |
| Grid      | cell at `(r,c)`                      | `dp[r][c]`     | previous sub-grid                            | direction to arrive from | `dp[r][c] = op(dp[r-1][c], dp[r][c-1]`  |
| Knapsack  | index `i` and remaining capacity     | `dp[i][rem]`   | `dp[i-1][rem]`, `dp[i-1][rem-weight[i]]`     | include or exclude `i`   | `dp[i][rem] = op(dp[i-1][rem],dp[i-1][` |
| Alignment | indices `i` and `j` in two sequences | `dp[i][j]`     | two sequences and sub-sequence excluding `i` | match                    |                                         |
| Interval  | subrange bounded by `(l,r)`          | `dp[l][right]` | sub-intervals within the current interval    |                          |                                         |

![[DP_patterns.png]]
> otherwise tery [tree DP](/labyrinth/notes/cs/competitive/tree_DP) or [bitmask DP](/labyrinth/notes/cs/competitive/bitmask_DP)

### Concept
#### Dynamic programming(DP)
- generic problem solving method
- properties of DP problems:
	1. overlapping subproblems
	2. optimal substructure
- avoid repeated calculations, solve sub-problems first
- reduce exponential runtime recursive functions using [memoization](/labyrinth/notes/cs/cs1101s/memoization)

Recursion tree
- way of modeling recursive functions
- recursive calls that depend on other recursive calls/the base case(s)
- `fib(5)`, $O(\phi^n)$

```cpp
int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return f(n - 1) + f(n - 2);
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1},edge from parent/.style={<-,draw}]
\node [vertex] {5}
  child {
    node [vertex] {4}
    child {
      node [vertex] {3}
	    child {
	      node [vertex] {2}
	      child {node [vertex] {1}}
	      child {node [vertex] {0}}
	    }
	    child {
	      node [vertex] {1}
	    }
    }
    child {
      node [vertex] {2}
			child {node [vertex] {1}}
			child {node [vertex] {0}}
    }
  }
  child {
    node [vertex] {3}
    child {
      node [vertex] {2}
      child {node [vertex] {1}}
      child {node [vertex] {0}}
    }
    child {
      node [vertex] {1}
    }
  };
\end{tikzpicture}
\end{document}
```

Recursion DAG
- recursive function + [memoization](/labyrinth/notes/cs/cs1101s/memoization)
- `fib(5)` with memoization, $O(n)$

```cpp
const int MAXN = 100;
bool found[MAXN];
int memo[MAXN];

int fib(int n) {
    if (found[n]) return memo[n];
    if (n == 0) return 0;
    if (n == 1) return 1;

    found[n] = true;
    return memo[n] = f(n - 1) + f(n - 2);
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,node distance=2]
\node[vertex] (0) {0};
\node[vertex,below right=of 0] (1) {1};
\node[vertex,above right=of 1] (2) {2};
\node[vertex,below right=of 2] (3) {3};
\node[vertex,above right=of 3] (4) {4};
\node[vertex,below right=of 4] (5) {5};

\draw[<-] (5) -- (4);
\draw[<-] (5) -- (3);
\draw[<-] (4) -- (3);
\draw[<-] (4) -- (2);
\draw[<-] (3) -- (2);
\draw[<-] (3) -- (1);
\draw[<-] (2) -- (1);
\draw[<-] (2) -- (0);
\end{tikzpicture}
\end{document}
```

#### Bottom-up DP
- start with the basecase
- uses tabulation instead of memoization
- possibly reduce space complexity, but values need to be relaculated every function call

```cpp
const int MAX_SAVE = 3; // only the previous, O(1) space
int fib[MAX_SAVE];

int f(int n) {
    fib[0] = 0;
    fib[1] = 1;
    for (int i = 2; i <= n; i++)
        fib[i % MAX_SAVE] = fib[(i - 1) % MAX_SAVE] + fib[(i - 2) % MAX_SAVE];

    return fib[n % MAX_SAVE];
}
```

#### Overlapping subproblems
- when solutions to the same subproblems are needed repeatedly
- store computed solutions to avoid re-computation
- DP cannot help if the subproblems are not overlapping, use *divide-and-conquer* instead

#### Optimal substructure
- the most optimal solution of the problem can be built using the opmital solutions of smaller subproblems
- solve small parts optimally, then combine them to get the final optimal answer
- eg. bellman-ford for SSSP
### Application
Leetcode: [Coin Change](https://leetcode.com/problems/coin-change/solutions/778548/c-dp-solution-explained-100-time-100-spa-yjm8/)
- knapsack

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

Codeforces: [Vacations](https://codeforces.com/contest/699/problem/C)
- linear
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

Leetcode: [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/description/)
- alignment

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,calc}

\definecolor{aqua}{RGB}{0,180,180}

% \cell{row}{col}{val}
\newcommand{\cell}[3]{%
  \node at ($(#2,-#1)$) {#3};
}

% \arrow[color]{r1}{c1}{r2}{c2}
\newcommand{\arrow}[5][red]{%
  \draw[->,#1,shorten <=6pt,shorten >=6pt] ($(#3,-#2)$) -- ($(#5,-#4)$);
}

\begin{document}
\begin{tikzpicture}[thick]

% labels
\foreach \ch [count=\i from 1] in {a,b,c,d,e} {
  \node at (-1,-\i) {\ch};
}
\foreach \ch [count=\i from 1] in {a,c,e} {
  \node at (\i,1) {\ch};
}

\cell{0}{0}{0}
\cell{0}{1}{0}
\cell{0}{2}{0}
\cell{0}{3}{0}

\cell{1}{0}{0}
\cell{2}{0}{0}
\cell{3}{0}{0}
\cell{4}{0}{0}
\cell{5}{0}{0}

%----------------------------------------------------

\cell{1}{1}{1}
\cell{1}{2}{1}
\cell{1}{3}{1}

% (1,1)
\arrow[red]{0}{0}{1}{1}

% (1,2)
\arrow[aqua]{1}{1}{1}{2}
\arrow[gray]{0}{2}{1}{2}

% (1,3)
\arrow[aqua]{1}{2}{1}{3}
\arrow[gray]{0}{3}{1}{3}

%----------------------------------------------------

\cell{2}{1}{1}
\cell{2}{2}{1}
\cell{2}{3}{1}

% (2,1)
\arrow[aqua]{1}{1}{2}{1}
\arrow[gray]{2}{0}{2}{1}

% (2,2)
\arrow[aqua]{1}{2}{2}{2}
\arrow[gray]{2}{1}{2}{2}

% (2,3)
\arrow[aqua]{1}{3}{2}{3}
\arrow[gray]{2}{2}{2}{3}

%----------------------------------------------------

\cell{3}{1}{1}
\cell{3}{2}{2}
\cell{3}{3}{2}

% (3,1)
\arrow[aqua]{2}{1}{3}{1}
\arrow[gray]{3}{0}{3}{1}

% (3,2)
\arrow[red]{2}{1}{3}{2}

% (3,3)
\arrow[aqua]{3}{2}{3}{3}
\arrow[gray]{2}{3}{3}{3}

%----------------------------------------------------

\cell{4}{1}{1}
\cell{4}{2}{2}
\cell{4}{3}{2}

% (4,1)
\arrow[aqua]{3}{1}{4}{1}
\arrow[gray]{4}{0}{4}{1}

% (4,2)
\arrow[aqua]{3}{2}{4}{2}
\arrow[gray]{4}{1}{4}{2}

% (4,3)
\arrow[aqua]{3}{3}{4}{3}
\arrow[gray]{4}{2}{4}{3}

%----------------------------------------------------

\cell{5}{1}{1}
\cell{5}{2}{2}
\cell{5}{3}{3}

% (5,1)
\arrow[aqua]{4}{1}{5}{1}
\arrow[gray]{5}{0}{5}{1}

% (5,2)
\arrow[aqua]{4}{2}{5}{2}
\arrow[gray]{5}{1}{5}{2}

% (5,3)
\arrow[red]{4}{2}{5}{3}

\end{tikzpicture}
\end{document}
```

```cpp
int n = text1.size(), m = text2.size();
vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

for (int i = 1; i <= n; i++) {
	for (int j = 1; j <= m; j++) {
		if (text1[i - 1] == text2[j - 1]) {
			// if same char increment from the diagonal
			dp[i][j] = dp[i - 1][j - 1] + 1;
		} else {
			// else choose the longest subsequence from 
			dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
		}
	}
}

return dp[n][m];
```

- space saving - only two columns

### Sources
- [5 patterns of DP](https://www.youtube.com/watch?v=rRRFvQezcSM)
- [Algorithms for CP](https://cp-algorithms.com/dynamic_programming/intro-to-dp.html)