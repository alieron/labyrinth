---
tags:
  - cs2106/chapter3
  - cs/low_level
prev: /labyrinth/notes/cs/cs2106/stack_memory
complete: false
---
### Concept
#### Dynamically allocated memory
- region of memory allocated only at runtime
- deallocated explicitly by the program

```c
int *z;
z = (int *) malloc(sizeof(int)); // malloc returns (void *) representing a generic data type, cast it to the one we need
```