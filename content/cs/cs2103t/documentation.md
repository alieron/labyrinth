---
tags:
  - cs2103t/implementation
  - cs/software_eng
complete: true
prev: /labyrinth/notes/cs/cs2103t/testing
next: /labyrinth/notes/cs/cs2103t/modeling

---
### Concept
Documentation for different audience

| Type                        | Purpose                                 | Examples            |
| --------------------------- | --------------------------------------- | ------------------- |
| **Developer-as-user**       | explain how to use components/APIs      | API docs, tutorials |
| **Developer-as-maintainer** | explain design, implementation, testing | developer guides    |

Documentation guidelines

| Guideline                  | Key Idea                          | Implication                                  |
| -------------------------- | --------------------------------- | -------------------------------------------- |
| **Top-down approach**      | start high-level, then drill down | readers can navigate to needed detail easily |
| **Comprehensibility**      | make docs easy to understand      | use diagrams, examples, simple language      |
| **Minimal but sufficient** | avoid unnecessary documentation   | focus on info not obvious from code          |

#### JavaDoc
- tool for generating **API documentation** from code comments
- used for:
    - method descriptions (`@param`, `@return`, `@throws`)
    - Class descriptions
- **[IDE](/labyrinth/notes/cs/cs2103t/IDE) tooltips**