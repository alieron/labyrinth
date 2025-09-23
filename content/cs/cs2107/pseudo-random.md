---
tags: []
complete: false
---
### Summary

### Concept
Randomness
- nothing is truly random
- the pseudo-random generators are deterministic
- we can replicate its output if we know the seed

```c
#include <time.h>
#include <stdlib.h>  
      
srand(time(NULL)); // use the system's current time 
int r = rand();
```
### Application
