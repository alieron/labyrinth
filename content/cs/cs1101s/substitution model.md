---
tags:
- cs1101s/chapter1
- cs/fundamentals
- cs/models
- lang/js
complete: true
prev: /labyrinth/notes/cs/cs1101s/ternary_operator
next: /labyrinth/notes/cs/cs1101s/recursion

---
### Concept
Applicative Order Reduction
- evalutate arguments before function applications
- used by Source and most programming languages

```js
f(5)
-> sum_of_sqs(5 + 1, 5 * 2)
-> sum_of_sqs(6, 10) //evaluate args before next level of function applications
-> sq(6) + sq(10)
-> (6 * 6) + (10 * 10)
...
-> 136
```

Normal Order Reduction
- expand fully then reduce

```js
f(5)
-> sum_of_sqs(5 + 1, 5 * 2)
-> sq(5 + 1) + sq(5 * 2) // preserve the argument expressions
-> ((5 + 1) * (5 + 1)) + ((5 * 2) * (5 * 2))
...
-> 136
```
### Extra
Reference functions
```js
function sq(x) { return x * x ;}
function sum_of_sqs(x, y) { return sq(x) + sq(y); }
function f(a) { return sum_of_sqs(a + 1, a * 2); }
```