---
tags:
- cs/functional_programming
- cs/models
- cs1101s/chapter3
- lang/js
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs1101s/loops)   [Next](/labyrinth/notes/cs/cs1101s/tombstone_diagrams)

### Summary
```js
function f(x) {
    const b = x + 1;
    return b;
}
let a = 1;
a = f(a);
```
<img src="/labyrinth/assets/env_model.png" alt="env_model.png" class="mx-auto object-fill" style="" />

### Concept
Replaces the [substitution model](/labyrinth/notes/cs/cs1101s/substitution_model), which no longer works, with [mutable data](/labyrinth/notes/cs/cs1101s/mutable_data)

CSE - Control, Stash and Evaluate