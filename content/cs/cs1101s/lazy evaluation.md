---
tags:
- cs1101s/chapter1
- cs/functional_programming
- cs/paradigm
- lang/js
complete: true
---
### Concept
Call-by-need - evaluation of an expression is delayed until its value is needed

Allows for:
- control flow as abstractions instead of primitives
- defining potentially infinite data structures([streams](/labyrinth/notes/cs/cs1101s/streams))
- partly define data structures, in which some elements may be errors
### Application
Control flow
```js
function recur(x) {
	return x || recur(true); // Iterative Process
}

recur(true);  // -> True : immediately returns true
recur(false); // -> True : function is called once recursively, since x if false the first time
```

Infinte/circular stream
```js
const ones = pair(1, () => ones);

head(ones); // -> 1
head(streamm_tail(ones)); // -> 1
```