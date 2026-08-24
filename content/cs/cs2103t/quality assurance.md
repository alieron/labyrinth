---
tags:
  - cs2103t/qa
  - cs/software_eng
complete: true
prev: /labyrinth/notes/cs/cs2103t/code_quality
next: /labyrinth/notes/cs/cs2103t/refactoring

---
### Concept
#### Quality Assurance
- ensuring that the software has the required levels of quality
- [testing](/labyrinth/notes/cs/cs2103t/testing)
- QA = Validation + Verification

Validation
- are you building the right system?
- are the [requirements](/labyrinth/notes/cs/cs2103t/requirements) correct?

Verification
- are you building the system right?
- are the requirements implemented correctly

#### Code Reviews
- systematic examination of code
- find where improvements can be made
- methods:
	- PR reviews
	- pair programming
	- formal inspection
- pros:
	- verify incomplete features
	- detect [code quality](/labyrinth/notes/cs/cs2103t/code_quality) violations
- cons:
	- error prone - manul process

#### Static Analysis
- analysis of code without actually executing it
- identify unused variables, unhandled exceptions, style errors and stats
- linters - clean up code style

#### Formal Verification
- using mathematical techniques to prove correctness of a program
- prove the absence of errors, whereas [testing](/labyrinth/notes/cs/cs2103t/testing) can only prove the presence of errors
- expensive to administer - only used in safety critical software