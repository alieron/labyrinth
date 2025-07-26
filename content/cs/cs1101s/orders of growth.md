---
tags:
- cs/algorithms
- cs/fundamentals
- cs1101s/chapter1
- lang/js
complete: true
prev: /labyrinth/notes/cs/cs1101s/recursion
next: /labyrinth/notes/cs/cs1101s/higher_order_functions
---

   

### Summary
Common orders of growth
$$
\begin{align*}
& O(1) && \text{Constant time/space}\\
& O(\log n) \\
& O(n) && \text{Linear time/space} \\
& O(n\log n) \\
& O(n^2) \\
& O(n^3) \\
& O(2^n) && \text{Exponential time/space}
\end{align*}
$$

Adding orders of growth
$$
\begin{gather*}
\text{Larger takes precedence:} \\
\\
O(n) + O(\log n) \implies O(n)\\
O(n^2) + O(n) \implies O(n^2) \\
\\
\text{Constants don't matter:} \\
\\
100\times O(n) = O(100n)\implies O(n) \\
O(\log n^2) = O(2\log n) \implies O(\log n)
\end{gather*}
$$

See [recurrence relations](/labyrinth/notes/cs/cs1101s/recurrence_relations) for orders of growth in recursive functions

### Concept
Rough measure of resources(time and space) used by a computational process, with respect to the problem size
OOG is an abstraction technique, ignoring details that seem to be irrelevant/external to the program

Let n denote the size of the problem, and let r(n) denote the resource needed solving the problem of size n

##### Big Theta Notation $\Theta(n)$
describes **BOTH** the upper and lower bound of a function, sometimes referred to as the **average time complexity**
$$
k_{1} \cdot g(n) \leq r(n) \leq k_{2} \cdot g(n) \quad for \quad n > n_{0}
$$
![[theta_n.png]]

##### Big Omega Notation $\Omega(n)$
describe the **asymptotic lower bound** of an algorithm, or its best-case scenario
$$
0 \leq k \cdot g(n) \leq r(n)  \quad for \quad n > n_{0}
$$
![[omega_n.png]]

##### Big O Notation $O(n)$
describe the **asymptotic upper bound** of an algorithm, or its worst-case scenario
$$
0 \leq r(n) \leq k \cdot g(n) \quad for \quad n > n_{0}
$$
![[o_n.png]]
> Also minor terms, ie. in $O(n^2+4n+5)$, $4n$ and $5$ are not relevant since we can choose $n_0$ to overrule them

#

## Application
Recursive functions
```js
const f = x => x === 1 ? x : f(x - 1); // T(n-1) + O(1)
const f = x => x === 1 ? x : f(x / 2); // T(n/2) + O(1)
```

[Loops](/labyrinth/notes/cs/cs1101s/loops)
```js
for(let i = 0; i < n; i = i + 1) // T(n-1) + a
for(let i = 0; i < n; i = i * 2) // T(n/2) + a
for(let i = 0; i < 100 * n; i = i + n) // a
for(let i = 0; i< n * n; i = i + n) // T(n-1) + a
```