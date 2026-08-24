---
tags:
  - cs2103t/design
  - cs/software_eng
complete: true
prev: /labyrinth/notes/cs/cs2103t/logging
next: /labyrinth/notes/cs/cs2103t/software_integration

---
### Concept
Product design
- external design
- the behaviour of the product to meet the user's [requirements](/labyrinth/notes/cs/cs2103t/requirements)

Implementation design
- internal design
- how the product will be implemented to meet the required external behaviour

#### Abstraction
- technique for dealing with complexity
- only the details that are relevant to the current task need to be considered
- undelying implementation should be suppressed
- can be applied repeatedly to have progressively higher levels of abstraction, like in [N-tier architecture](/labyrinth/notes/cs/cs2103t/architecture_styles#N-tier_architecture)

Data sbtraction
- abstract away lower level data
- think in terms of bigger entities

Control abstraction
- abstract away details of the actual control flow
- focus on tasks at a higher level

#### Coupling
- degree of dependence between components
- high coupling is undesirable:
	- harder maintenance - change in one module can cause a ripple effect in other modules
	- [integration](/labyrinth/notes/cs/cs2103t/software_integration) is harder - components have to be integrated at the same time
	- [testing](/labyrinth/notes/cs/cs2103t/testing) and [reuse](/labyrinth/notes/cs/cs2103t/reuse) is harder - have to include more dependencies

Types of coupling
- **content coupling** - one module directly uses/modifies another’s internals (worst type)
- **common (global) coupling** - Modules share global data
- **control coupling** - one module tells another what to do (e.g., flags)
- **cata coupling** - modules interact by passing only needed data (good practice)
- **external coupling** - modules depend on shared external formats/protocols
- **subclass coupling** - child class depends on parent class (inheritance)
- **temporal coupling** - things grouped together just because they happen at the same time

#### Cohesion
- measure of how strongly-related and focus the various responsibilities of a component
- high cohesion -> component keeps related functionalities while keeping out unrelated things
- related to [SRP](/labyrinth/notes/cs/cs2103t/SE_principles#Single_Responsibility_Principle(SRP))
- cohesion in:
	- concept - class handles everything related to an entity
	- temporal - code usually run at the same time
	- data - code that manipulates the same data structure

#### Multi-level design
- system with multiple layers of abstraction

Top-down approach
- design high level first
- flesh out lower levels layer
- useful when designing big and new systems, high level needs to be stable before designing the lower level

Bottom-up approach
- design lower level first
- put them together to make the higher level system
- not scalable, useful for reusing existing components

Mixed
- top-down for higher levels
- bottom-up for lower levels

#### Agile design
- not defined up front
- initial modeling is subject to change during development
- similar to the [agile process model](/labyrinth/notes/cs/cs2103t/SDLC_process_models#Agile_model)