---
tags:
- cs1101s/chapter3
- cs/data_structures
- lang/js
complete: true
prev: /labyrinth/notes/cs/cs1101s/sorting
next: /labyrinth/notes/cs/cs1101s/loops

---
### Concept
Reassigning a new value to an already in use symbol
```js
let x = 0; // initial value
x = 5; // new value
```
### Application
Destructive list functions
```js
set_head(p, x);
set_tail(p, x);
```

[Array](/labyrinth/notes/cs/cs1101s/arrays) assignment
```js
A[i] = x;
```

Circular list
```js
set_tail(p, p);
```