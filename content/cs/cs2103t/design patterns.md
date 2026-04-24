---
tags:
  - cs2103t/design
  - cs/software_eng
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2103t/SE_principles
next: /labyrinth/notes/cs/cs2103t/test_case_design

---
### Summary
| Pattern                     | Category      | Intent                                                               | Key Idea                                                                               | Pros                                                | Cons                                                          |
| --------------------------- | ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------- |
| Singleton                   | Creational    | Ensure a class has only one instance and provide global access to it | A single shared instance is controlled via a static access method                      | Controlled access, saves resources                  | Hard to test, global state can lead to tight coupling         |
| Abstraction-Occurrence      | Structural    | Separate different instances of a concept from a single abstraction  | One abstract object represents shared data, while occurrences represent specific cases | Reduces duplication, improves consistency           | Can add complexity, harder to understand initially            |
| Facade                      | Structural    | Provide a simplified interface to a complex subsystem                | A wrapper class hides complexity and exposes a unified interface                       | Easier to use, reduces dependencies                 | Can become a “god object” if overused                         |
| MVC (Model-View-Controller) | Architectural | Separate application into Model, View, and Controller components     | Model = data, View = UI, Controller = logic handling input/output                      | Clear separation of concerns, easier maintenance    | Can be overkill for small apps, added complexity              |
| Observer                    | Behavioral    | Define a one-to-many dependency so observers update automatically    | Subject notifies all registered observers when its state changes                       | Decouples components, supports event-driven systems | Can cause performance issues or unexpected updates if misused |

### Concept
#### Software design patterns
- elegant reusable solution to a commonly recurring problem
- patterns refined over time
- provide a high-level vocabulary to talk about design

Structure
- **context** - situation where the initial problem was encountered
- **problem** - difficulty to be resolved
- **solution** - core solution
- **anti-patterns** - incorrect/inferior alternatives
- **consequences** - pros and cons of the pattern

Difference with design [principles](/labyrinth/notes/cs/cs2103t/SE_principles)
- principles have varying degree of formality -> **rules, opinions, rules of thumb, observations, and axioms**
- principles are more general and have wider applicability, but with greater overlap

#### Singleton pattern
- **context** - some classes should only have one instance
- **problem** - normally classes can be instantiated multiple times with the constructor
- **solution** - make the constructor private, public static method is used to access the *sole instance*

![[singleton_pattern.png]]
```java
class Logic {
	private static Logic theOne = null;

	private Logic() {
		...
	}

	public static Logic getInstance() {
		if (theOne == null) {
			theOne = new Logic();
		}
		return theOne;
	}
}
```

- **pros**
	- easy to apply
	- effective with minimal extra work
- **cons**
	- singleton object acts like a global variable -> increases coupling
	- difficult to replace with [stubs](/labyrinth/notes/cs/cs2103t/testing#^e74171) when testing
	- carries data across tests, even when aiming for independence
> so only use the singleton pattern when there are real negative consequences to creating multiple instances

#### Abstraction Occurance pattern
- **context** - alot of similar entries that appear to be occurences/copies, share alot of common information, but differ in significant way
- **problem** - using a single class would lead to data duplication by all instances -> inconsistencies if duplicates are not updated consistently

![[abs_occ_problem.png|400]]
- **anti-pattern** - make subclasses with the data hard-coded into the class -> alot of classes, one for each variant

![[abs_occ_anti-pattern.png|400]]
- **solution** - separate into 2 objects, representing the shared information and unique information

![[abs_occ_solution.png|400]]
- general pattern

![[abs_occ_class_diag.png|400]]

#### Facade pattern
- **context** - need to access functionality deep inside some other component
- **problem** - access should be provided without exposing internal details (abstraction)
- **solution** - façade class that handles all accesses to the component internals

![[facade_pattern.png|400]]

#### Command pattern
- **context** - system might need to execute a number of commands, each doing different tasks
- **problem** - some part of the code should execute the commands without having to know each command type
- **solution** - general `Command` class that can be executed without knowledge of its type

![[command_pattern.png|400]]

#### Model View Controller(MVC) pattern
- **context** - applications support storage/retrieval of into, display of info and changing the stored information based on inputs
- **problem** - high coupling can result from the interlinked features
- **solution** - 3 part solution to decouple data, presentation and control logic
	- view - display and interacting with the user, pulls data from model
	- controller - detect UI events and performs the follow up action, updates model/view
	- model - store and maintain data, update view if needed

![[mvc_pattern.png|400]]

> a simple app might combine view and controller into one UI class

#### Observer pattern
- **context** - objects may be interested in observing another object for changes
- **problem** - the observed object doesn't want to be coupled to objects observing it, ie. the observed object shouldn't have to call `Observer.update()` for each observer
- **solution** - couple to an observer interface, observable object is only dependant on the interface and not each observer

![[observer_pattern.png|400]]

```java
// Observable
public void addObserver(Observer o) {
	observerList.add(o);
}

private void notifyObservers() {
	// for each observer in the list
	for (Observer o: observerList) {
		o.update();
	}
}
```

#### Combining design patterns
- patterns are usually embedded in a larger design
- remember to maintain the purposes of each pattern when combining

Other patterns
- **creational**: about object creation, separating the operation of an application from how its objects are created
    - Abstract Factory, Builder, Factory Method, Prototype, Singleton
- **structural**: about the composition of objects into larger structures while catering for future extension in structure
    - Adapter, Bridge, Composite, Decorator, Façade, Flyweight, Proxy
- **behavioral**: define how objects interact and how responsibility is distributed among them
    - Chain of Responsibility, Command, Interpreter, Template Method, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor