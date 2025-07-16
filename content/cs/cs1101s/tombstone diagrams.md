---
tags:
- cs/models
- cs1101s/chapter4
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs1101s/environment_model)   [Next](/labyrinth/notes/cs/cs1101s/streams)
### Summary
Essentially, adjacent blocks must have the same language, you can't jump from one language to another without a compiler/interpreter.

T-diagrams consist of combinations of the following four components:
- _Programs_ which are implemented in a particular language (i.e. `Java`, `python`, `c/c++`)
- Language **A** to language **B** _Interpreters_
- Language **A** to language **B** _Compilers_ which are implemented in a language **C**
- Physical _Machines_ implementing/running a particular language (i.e. x86-64, ARM-64)
<img src="/labyrinth/assets/tombstone_diag.png" alt="tombstone_diag.png" class="mx-auto" style="width:500px;">
### Concept
##### Interpreters
Program that executes another program, usually written in a lower level language compared to its target language
##### Compilers
Translates programs from one language to another, that can then be interpreted and run on a CPU via machine code
##### Check for correctness
https://nus-cs2030s.github.io/2122-s2/01-compiler.html
### Application
Example using NUSMODS:
<img src="/labyrinth/assets/tombstone_eg.png" alt="tombstone_eg.png" class="mx-auto" style="width:600px;">
