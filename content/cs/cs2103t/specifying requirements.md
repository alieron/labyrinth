---
tags:
  - cs2103t/requirements
  - cs/software_eng
complete: true
prev: /labyrinth/notes/cs/cs2103t/requirements
next: /labyrinth/notes/cs/cs2103t/refactoring

---
### Concept
#### Feature list
- list of features
- groupd according to some aspect, like aspect/priority/order of delivery

#### User stories
- short descriptsions of a feature
- told from the perspective of the user
- convenient for scoping, estimation and [scheduling](/labyrinth/notes/cs/cs2103t/project_management#Project_planning)

```
As a {user type/role} I can {function} so that {benefit}
```
> `{benefit}` can be omitted if its obvious

#### Use cases
- sequence of actions that a system performs to yield an observable result of value to an actor
- *functional* requirements
- describe **externally visible behaviour**, not internal details
- steps give the intention of the user, not the mechanics
	- omit UI details
- includes variants

Main Success Scenario(MSS)
- most straightforward interaction for given use case
- assuming nothing goes wrong
- extensions - add-ons that describe exceptional/alternative flow
- preconditions - state the system should be in before the use case starts
- guarantees - specify the result of the use case

#### Glossary
- ensure all stakeholders have a common understanding of noteworthy terms
- if a term may have multiple meanings
- if a term has specific meaning within the software