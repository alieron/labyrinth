---
tags:
  - cs341/chapter4
  - cs/algorithms
  - cs/dynamic_programming
complete: false
prev: /labyrinth/notes/cs/cs341/MST_II
next: /labyrinth/notes/cs/cs341/linear_DP

---
### Summary
Top-down/memoization
```
Memo = empty table

Solve(state):
    if state is a base case:
        return base value

    if Memo[state] has been computed:
        return Memo[state]

    answer = initial value

    for each valid choice:
        candidate = combine(
            contribution of choice,
            Solve(smaller state determined by choice)
        )
        answer = update(answer, candidate)

    Memo[state] = answer
    return answer

return Solve(target state)
```

Bottom-up/tabulation
```
create table DP
initialize base cases

for each non-base state in dependency order:
    DP[state] = initial value

    for each valid choice:
        candidate = combine(
            contribution of choice,
            DP[smaller state determined by choice]
        )
        DP[state] = update(DP[state], candidate)

return DP[target state]
```
> dependency order is an important thing to take note of

### Concept
#### Dynamic programming


#### Fibonacci numbers
- toy example
- linear DP

[Recursive fibonacci](/labyrinth/notes/cs/cs1101s/recursion#^ede420)
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

Fibonacci by DP

| State | Means                                      | Need                       | Decision                            | Combination                                         |
| ----- | ------------------------------------------ | -------------------------- | ----------------------------------- | --------------------------------------------------- |
| $i$ | $F(i)$ is the $i$-th Fibonacci number. | $F(i-1)$ and $F(i-2)$. | no choice: both values are required | $F(i)=F(i-1)+F(i-2)$. Bases: $F(0)=0,\ F(1)=1$. |

Top-down fibonacci
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

Correctness
- induction

Time complexity
- $O(n)$ additions
> an aside, not covered in `cs341`, since the size of the numbers grows $\phi^n$, addition becomes significant

Bottom-up fibonacci
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

