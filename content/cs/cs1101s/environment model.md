---
tags:
- cs1101s/chapter3
- cs/functional_programming
- cs/models
- lang/js
complete: true
prev: /labyrinth/notes/cs/cs1101s/loops
next: /labyrinth/notes/cs/cs1101s/tombstone_diagrams
---
   
### Summary
```js
function f(x) {
    const b = x + 1;
    return b;
}
let a = 1;
a = f(a);
```
![[env_model.png]]
### Concept
Replaces the [substitution model](/labyrinth/notes/cs/cs1101s/substitution_model), which no longer works, with [mutable data](/labyrinth/notes/cs/cs1101s/mutable_data)

CSE - Control, Stash and Evaluate