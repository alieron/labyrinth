---
tags:
  - cs2103t/requirements
  - cs/software_eng
complete: true
prev: /labyrinth/notes/cs/cs2103t/code_quality
next: /labyrinth/notes/cs/cs2103t/specifying_requirements

---
### Concept
- specifies a need to be fulfilled by the software
- comes from stakeholders

#### Functional Requirements
- must be:
	- unambiguous
	- testable (verifiable)
	- clear (concise, terse, simple, precise)
	- correct
	- understandable
	- feasible (realistic, possible)
	- independent
	- atomic
	- necessary
	- implementation-free (i.e., abstract)
	
	- **consistent**
	- **non-redundant**
	- **complete**

Prioritization
- based on importance and urgency
- keep in mind other constraints
- discard 'out of scope' requirements

#### Non-Functional Requirements(NFR)
- specify constraints under which the system is developed and operated
- deal with:
	- data requirements
	- env requirements - eg. OS
	- accessibility
	- performance/scalability
	- security

#### Gathering requirements
Brainstorming
- group discussion
- generate ideas - there are no bad ideas

User surveys
- get opinions from largen number of stakeholders

Observation
- observe user in natural work environment
- observing the use of an existing system -> make a better replacement

Interviews
- interview stakeholders
- interview domain experts

Focus groups
- informal interview with stakeholders
- potential users or [beta testers](/labyrinth/notes/cs/cs2103t/testing#Beta_Testing)

Prototyping
- mock up/partial system
- get users' feedback
- validate technical concept
- preview of system
- compare alternative implementations
- field testing

Product surveys
- studying existing products
- look at [documentation](/labyrinth/notes/cs/cs2103t/documentation) or manuals