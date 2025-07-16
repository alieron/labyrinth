---
tags:
- cs/algorithms
- cs/fundamentals
- cs1101s/chapter3
- lang/js
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs1101s/mutable_data)   [Next](/labyrinth/notes/cs/cs1101s/environment_model)
### Summary
For loops
$$
for(initialiser; \ condition; \ increment)
$$
```js
for(let i = 0; i <= 5; i = i + 1) {
	// body
}
```

While loops
$$
while(condition)
$$
```js
while(bool) {
	// body
}
```
### Concept
For loops
- For repeating a task x number of times
- Initialise an incrementer, check if condition is true, run the loop body, increment, check if the condition is still true, repeat

While loops
- For repeating a task until a condition is met
- Check if condition is true, run the loop body, check if condition is still true, repeat

> Beware infinite loops
### Application
Loops in [math](/labyrinth/notes/math/math_fundementals/summation_notation)
```js
let sum = 0;
for(i = 0; i <= 4; i = i + 1) {
	sum = sum + i; // summation
}
sum; // -> 10
```
$$
\sum_{i=0}^{4}i =0+1+2+3+4=10
$$
```js
let prod = 1;
for(i = 1; i <= 4; i = i + 1) {
	prod = prod * i;
}
prod; // -> 24
```
$$
\prod_{i=1}^{4}i = 1\times2\times 3 \times 4=24
$$