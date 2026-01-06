---
tags:
- cs1101s/chapter1
- cs/fundamentals
- lang/js
complete: true
next: /labyrinth/notes/cs/cs1101s/substitution_model

---
### Concept
Conditional statement:
- based on the predicate, either the consequent or alternative is returned [lazily](/labyrinth/notes/cs/cs1101s/lazy_evaluation)
- 3 parameters/operands:
	- boolean predicate
	- consequent
	- alternative
```js
predicate ? consequent : alternative;

true ? 1 : 0;
// output: 1

false ? 1 : 0;
// output: 0
```
### Application
Absolute function
$$
\begin{align*}
f(x) = |x| = 
\left\{
\begin{array}{ll}
x  & x \geq 0\\
-x & x < 0
\end{array}
\right.
\end{align*}
$$
```js
function abs(x) {
	return x >= 0 ? x : -x;
}

abs(5);
// output: 5

abs(-8);
// output: 8
```

Implementing boolean operators
```js
a || b // a or b
// is equivalent to
a ? true : b // if a, return true, else return b

a && b // a and b
// is equivalent to
a ? b : false // if a, return b, else return false
```