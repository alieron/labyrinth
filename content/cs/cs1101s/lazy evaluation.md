---
tags:
- cs/functional_programming
- cs/paradigm
- cs1101s/chapter1
- lang/js
complete: true
index: null
---
### Summary
Control flow
```js
function recur(x) {
	return x || recur(true); // Iterative Process
}

recur(true);  // -> True : immediately returns true
recur(false); // -> True : function is called once recursively, since x if false the first time
```

Infinte/circular [streams](/labyrinth/notes/cs/cs1101s/streams)
```js
const ones = pair(1, () => ones);

head(ones); // -> 1
head(streamm_tail(ones)); // -> 1
```
### Concept
Call-by-need
Evaluation of an expression is delayed until its value is needed

Allows for:
- Control flow as abstractions instead of primitives
- Defining potentially infinite data structures
- Partly define data structures, in which some elements may be errors