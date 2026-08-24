---
tags:
  - cs2103t/paradigms
  - cs/software_eng
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2103t/activity_diagrams
next: /labyrinth/notes/cs/cs2103t/design_patterns

---
### Summary
Principles

| Principle                                 | Definition                                                              | Key Idea                                                                             |
| ----------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Single Responsibility Principle (SRP)** | A class should have only one reason to change.                          | Keep each class focused on a single responsibility.                                  |
| **Open-Closed Principle (OCP)**           | A module should be open for extension but closed for modification.      | Add new behavior in the implementation without changing existing code/specification. |
| **Liskov Substitution Principle (LSP)**   | Subclasses must be substitutable for their base classes.                | Subclasses should not break expected behavior.                                       |
| **Interface Segregation Principle (ISP)** | Clients should not depend on methods they do not use.                   | Use smaller, specific interfaces.                                                    |
| **Dependency Inversion Principle (DIP)**  | High-level modules should depend on abstractions, not concrete classes. | Reduce coupling via interfaces.                                                      |
| **SOLID Principles**                      | Acronym for SRP, OCP, LSP, ISP, DIP.                                    | Core object-oriented design guidelines.                                              |
| **Separation of Concerns (SoC)**          | Divide code into distinct sections, each handling a separate concern.   | Improve modularity and reduce ripple effects.                                        |
| **Law of Demeter (LoD)**                  | Objects should only interact with closely related objects.              | “Don’t talk to strangers.”                                                           |
| **YAGNI Principle**                       | Do not implement features until they are needed.                        | Avoid speculative development.                                                       |
| **DRY Principle**                         | Every piece of knowledge should have a single representation.           | Avoid duplication.                                                                   |
| **Brooks' Law**                           | Adding manpower to a late project makes it later.                       | Communication overhead increases with team size.                                     |

### Concept
#### Single Responsibility Principle(SRP)
- a class should only have one responsibility
- it should only change if there is a change to that responsibility
- that way when something needs to be changed, only one class needs to change

#### Open-Closed Principle(OCP)
- make a code entity easy to adapt and reuse
- reuable without having to modify the entity itself
- open for extension but closed for modification
- similar to the [command pattern](/labyrinth/notes/cs/cs2103t/design_patterns#Command_pattern), separate specification from implementation

#### Liskov Substitution Principle([LSP](/labyrinth/notes/cs/cs2030s/LSP))
- derived classes must be substitutable for their base classes
- subclass **should not** be more restrictive than the behaviour specified by the superclass

![[lsp_example.png|400]]

```
Staff#adjustMySalary - works with all +ve values
Admin#adjustMySalary - works with all -ve and +ve values
Academic#adjustMySalary - only works with 1..100
```

- `Admin` - follows LSP, substituting it for `Staff` will not break any functionality in `Payroll`
- `Academic` - violates LSP, will not work for some values that `Staff` allows

#### Interface Segregation Principle(ISP)
- no client should be forced to depende on methods it doesn't use
- interface that the client depends on should be as lightweight as possible

#### Dependency Inversion Principle(DIP)
1. high level modules should not depend on low level modules, both should depend on abstractions
2. abstractions should not depend on details, details should depend on abstrations
- neutral interface that the concrete class(details) can inherit from, and that the higher level module can depend on

#### SOLID Principles
- **S**RP
- **O**CP
- **L**SP
- **I**SP
- **D**IP

#### Separation of Concerns Principle(SoC)
- improve modularity by separating code into distinct sections
- each section addresses a separate concern
- *concerns* - set of info that affects the code of the program:
	- specific feature
	- specific aspect - eg. security
	- specific entity
- reduces functional overlaps among code sections
- limit ripple effect when changes are introduced
- higher cohesion with lower coupling

#### Law of Demeter(LoD)
- entity should have limited knowledge of other entities
- entity should only interact with objects that are closely related to it
- method `m` in object `O` should only know:
	- object `O`
	- objects passed as arguments to `m`
	- objects created in `m` (directly or indirectly)
	- objects from the direct association of `O`

```java
void foo(Bar b) {
    Goo g = b.getGoo(); // G is a stranger, not created by foo
    g.doSomething();
}
```

#### YAGNI Principle
- you aren't gonna need it!
- do not add code just because it might be useful later
- cannot predict what will be needed in the future, so no point doing extra work

#### DRY Principle
- don't repeat yourself
- every piece of knowledge must have a single unambiguous representation in a system
- don't duplicate information/functionality

#### Brooks' Law
- adding people to a late project will only make it later
- additional communication overhead will outweigh the benefits of adding extra manpower