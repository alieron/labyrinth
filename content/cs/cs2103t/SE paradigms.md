---
tags:
  - cs2103t/java
  - cs/software_eng
complete: false
next: /labyrinth/notes/cs/cs2103t/git

---
### Concept
#### OOP
Is-A
- [inheritance](/labyrinth/notes/cs/cs2030s/inheritance)
- `extends` and `implements`

Has-A
- composition
- instance attributes
- ownership

Can-Do
- [class abstraction](/labyrinth/notes/cs/cs2030s/class_abstraction)
- interfaces and abstract methods
#### Java access modifiers
Classes

| Modifier  | Permissions                        |
| --------- | ---------------------------------- |
| `public`  | accessible to any other class      |
| *default* | accessible within the same package |

Attributes, methods and constructors

| Modifier    | Permissions                                            |
| ----------- | ------------------------------------------------------ |
| `public`    | accessible to any other class                          |
| `private`   | accessible only within the class                       |
| *default*   | accessible within the same package                     |
| `protected` | accessible only within the same package and subclasses |
#### Software development lifecycle(SDLC)
- brownfield: builds upon existing software
- greenfield: new software from scratch

Sequential model
- linear process
- specify requirements -> design -> implement -> test -> deploy

Iterative breadth-first
- each iteration is a working product
- all components are improved

Iterative depth-first
- each iteration implements new functionality
- iterations may not produce a working product

#### CI/CD
Continuous integration
- integration, building and testing happens automatically after each code change

Continuous deployment
- also deployed to end users