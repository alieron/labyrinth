---
tags:
- cs/functional_programming
- cs1101s/chapter1
- lang/js
complete: true
prev: /labyrinth/notes/cs/cs1101s/orders_of_growth
next: /labyrinth/notes/cs/cs1101s/data_abstraction
---

   

### Summary
HOFs
```js
// Accepts function as an argument
function apply(f) {
	return f(1);
}
apply(x => x + 1); // -> 2

// Returns a function
function applied(x) {
	return () => x + 1;
}
applied(1)(); // -> 2
```

Lambda functions ^dec713
```js
// Unary lambda functions
const identity = x => x;
identity(1); // -> 1

const increment = x => x + 1;
increment(1); // -> 2

// Binary lambda functions
const add = (x, y) => x + y;
add(1, 2); // -> 3

// Nullary lambda functions
const one = () => 1;
one(); // -> 1
```

### Concept
Higher order functions, either:
- accepts a function as an argument
- returns a function

The idea of functions as variables

Scopes
- look for the closest surrounding name declaration
- if not declared within current scope/block, look one level up

Lambda function is declared, but never initialised until function application
```js
const f = x => y;            // 1. Declaration of lambda function f, read rest of program  // 6. f called wth arg 2, y was initialiesd as 1, return 1
const y = 1;                 // 2. Declaration of y, y initialised as 1, read rest
const g = y => f(y);         // 3. Declaration of lambda function g, read rest             // 5. g called with arg 2, apply f with arg 2               // 7. f returned 1, return 1
g(2)                         // 4. Apply g with arg 2                                      // 8. return 1
```

#

## Application
Nesting vs Chaining
```js
const twice = f => x => f(f(x));
const thrice = f => x => f(f(f(x)));

// let f be an arbitrary unary function
// let x be an arbitrary variable that f accepts

// Nesting
thrice(twice(f))(x);
// -> thrice(f(f(x)))(x);
// -> (f(f( f(f( f(f(x)) )) )))(x);
// -> f(f( f(f( f(f(x)) )) )); f is applied 6 times
```
$$
f^{\circ2\times3} = f^{\circ6}
$$
```js
// Chaining
thrice(twice)(f)(x);
// -> (twice(twice(twice(f))))(x);
// -> (twice(twice( f(f(x)) )))(x);
// -> (twice( f(f( f(f(x)) )) ))(x);
// -> ( f(f( f(f( f(f( f(f(x)) )) )) )) )(x); f is applied 8 times
```
$$
f^{\circ2^3} = f^{\circ8}
$$

Function currying ^3ffd84
$$
\begin{align*}
&(x,y) \mapsto x + y \quad && (addition)\\
&x \mapsto (y \mapsto x+y) \quad && (curried \ addition)
\end{align*}
$$
```js
const add = (x, Y) => x+y;
add(1, 2); // -> 3

const curried_add = x => y => x + y;
curried_add(1)(2); // -> 3
```