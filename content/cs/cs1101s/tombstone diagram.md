---
tags:
  - cs1101s/chapter4
  - cs/models
complete: true
prev: /labyrinth/notes/cs/cs1101s/environment_model
next: /labyrinth/notes/cs/cs1101s/streams

---
### Concept
T-diagrams consist of combinations of the following four components:
- **_Programs_** which are implemented in a particular language (i.e. `Java`, `Python`, `C/C++`)
- Language **A** to language **B** **_Interpreters_**
- Language **A** to language **B** **_Compilers_** which are implemented in a language **C**
- Physical **_Machines_** implementing/running a particular language (i.e. `x86-64`, `ARM-64`)

Adjacent blocks must have the same language, you can't jump from one language to another without a compiler/interpreter
![[tombstone_diag.png|500]]
> https://nus-cs2030s.github.io/2122-s2/01-compiler.html - for more details about tombstone diagrams

Interpreters
Program that executes another program, usually written in a lower level language compared to its target language

Compilers
Translates programs from one language to another, that can then be interpreted and run on a CPU via machine code
### Application
NUSMODS
![[tombstone_eg.png|600]]