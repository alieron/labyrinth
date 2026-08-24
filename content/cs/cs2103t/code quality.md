---
tags:
  - cs2103t/implementation
  - cs/software_eng
complete: false
prev: /labyrinth/notes/cs/cs2103t/object_diagrams
next: /labyrinth/notes/cs/cs2103t/requirements

---
### Concept
#### Readability
- code needs to be of high quality
- future developers(and yourself) need to understand and modify it later

| Guideline                          | Key Idea                                 | Example / Implication                                |
| ---------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| Avoid Long Methods                 | Keep methods short (≈ ≤30 LoC)           | Smaller methods are easier to understand and debug   |
| Avoid Deep Nesting                 | Limit indentation levels (≤3)            | Use early returns or guard clauses to simplify logic |
| Avoid Complicated Expressions      | Break complex logic into steps           | Use intermediate variables for clarity               |
| Avoid Magic Numbers                | Replace literals with named constants    | `MAX_SIZE` is clearer than `10`                      |
| Make Code Obvious                  | Prefer explicit, clear constructs        | Use enums instead of numeric states                  |
| Structure Code Logically           | Organize code like a story               | Group related statements with spacing                |
| Don’t “Trip Up” Reader             | Avoid confusing or inconsistent patterns | No unused params, no misleading similarities         |
| Practice KISS                      | Keep it simple, stupid                   | Avoid unnecessary complexity or “clever” tricks      |
| Avoid Premature Optimization       | Optimize only when necessary             | Focus on correctness before performance              |
| SLAP (Single Level of Abstraction) | Keep same abstraction level per function | Avoid mixing high-level steps with low-level details |
| Make Happy Path Prominent          | Highlight main logic flow                | Use guard clauses to handle edge cases early         |

Coding standards
- follow a consistent style
- make entire codebase look like its written by one person
- [IDE](/labyrinth/notes/cs/cs2103t/IDE) can help with style

#### Naming

| Guideline                  | Key Idea                                      | Example / Implication                |
| -------------------------- | --------------------------------------------- | ------------------------------------ |
| Use Nouns & Verbs Properly | Nouns for data, verbs for actions            | `calculateTotal()` vs `total()`     |
| Use Standard Words         | Avoid slang, abbreviations, or obscure terms | Use clear, common terminology       |
| Use Names to Explain       | Names should convey purpose                  | `removeWhitespace()` vs `process()` |
| Proper Length Names        | Not too short, not too long                  | Avoid cryptic abbreviations         |
| Avoid Misleading Names     | Ensure consistency and clarity               | Similar names → similar purposes    |

#### Avoid unsafe shortcuts

| Guideline                | Key Idea                                                     | Example / Implication                     |
| ------------------------ | ------------------------------------------------------------ | ----------------------------------------- |
| Use Default Branch       | Handle all cases explicitly                                 | Use `else` for true default/error cases  |
| Don’t Recycle Variables  | One variable = one purpose                                  | Avoid reusing parameters as locals       |
| Avoid Empty Catch Blocks | Don’t ignore errors silently                                | At least log or explain why ignored      |
| Delete Dead Code         | Remove unused code promptly                                 | Version control can recover it if needed |
| Minimize Scope           | Limit variable visibility                                   | Prefer local over global variables       |
| Minimize Duplication     | Avoid repeated logic ([DRY](/labyrinth/notes/cs/cs2103t/SE_principles#DRY_Principle)) | Refactor common code into functions      |

#### Code comments

| Guideline                          | Key Idea                                | Example / Implication                    |
| ---------------------------------- | --------------------------------------- | ---------------------------------------- |
| Comment Minimally but Sufficiently | Code should be mostly self-explanatory | Improve code instead of over-commenting |
| Don’t Repeat the Obvious           | Avoid redundant comments               | `x++` doesn’t need “increment x”        |
| Write for the Reader               | Comments should help others understand | Use clear, professional explanations    |
| Explain WHAT & WHY                 | Focus on intent and rationale          | Avoid explaining HOW if code is clear   |