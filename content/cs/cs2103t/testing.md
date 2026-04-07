---
tags:
  - cs2103t/qa
  - cs/software_eng
complete: true
next: /labyrinth/notes/cs/cs2103t/javadoc
prev: /labyrinth/notes/cs/cs2103t/IDEs

---
### Concept
- operating a system under spedified conditons and observing/recording the results
- execute a set of test cases
	- specifies input to software under test(SUT) and the expected behaviour
	- test case falure: **potential** defect or bug

Testability
- indication of how easy it is to test a SUT

Scripted testing
- write test cases based on expected behaviour of SUT
- test using that set of test cases

Exploratory testing
- devise test cases on the fly
- create new test cases based on results of past test cases
- aka: **_reactive testing, error guessing technique, attack-based testing,_ and _bug hunting_**

#### Regression Testing
- regression: modifications may result in some unintended/undesirable effects on the system
- retest to detect regressions
- should be done frequently, better automated

#### Developer Testing
- testing done by developers along the way during development
- delaying testing is bad:
	- harder to locate root cause as more code is added
	- bug might require major rework
	- delivery of product might be delayed
	- one bug may hide other bugs

#### Unit Testing
- testing individual units, ie. classes/methods
- relevant for OOP code

Stubs ^e74171
- isolate the unit from its dependencies
- simplified implementation of a component it replaces, so that it is unlikely to have bugs
- gives the functionality of the dependency
- typically hardcoded

#### Integration Testing
- testing whether different parts of the SUT work together
- not just replacing stubs with the actual 

Unit then Integration
- class `Car` uses classes `Engine` and `Wheel`

1. unit test `Engine` and `Wheel`
2. unit test `Car` in isolation of `Engine` and `Wheel`, ==using stubs for `Engine` and `Wheel`==
3. do an integration test for `Car` by using it together with the `Engine` and `Wheel` classes to ensure that `Car` integrates properly with the `Engine` and the `Wheel`

Hybrid Unit+Integration
1. unit test `Engine` and `Wheel`
2. do an integration test for `Car` by using it together with the `Engine` and `Wheel` classes to ensure that `Car` integrates properly with the `Engine` and the `Wheel`
> no need stubs for `Engine` and `Wheel`, there is a risk that their bugs affect `Car`, but unlikely since they are unit tested first

#### System Testing
- take the whole system and test it against the system specification
- based on external behaviour of the system

- examples:
	- _Performance testing_ – to ensure the system responds quickly.
	- _Load testing_ (also called _stress testing_ or _scalability testing_) – to ensure the system can work under heavy load.
	- _Security testing_ – to test how secure the system is.
	- _Compatibility testing, interoperability testing_ – to check whether the system can work with other systems.
	- _Usability testing_ – to test how easy it is to use the system.
	- _Portability testing_ – to test whether the system works on different platforms.

#### Alpha Testing
- user performed under controlled conditions set by developer

#### Beta Testing
- performed by subset of target users in the natural work setting

#### Dogfooding
- creator uses their own product
- related to [developer testing](#Developer Testing), but the developer becomes the end-user
- longer term, more consistent and authentic use of the software

#### Acceptance Testing
- aka: user acceptance testing
- test the system to ensure it meets the user requirements
- assurance to the customer that the system does what its intended to do

Acceptance vs System Testing

|System Testing|Acceptance Testing|
|---|---|
|Done against the system specification|Done against the requirements specification|
|Done by testers of the project team|Done by a team that represents the customer|
|Done on the development environment or a test bed|Done on the deployment site or on a close simulation of the deployment site|
|Both negative and positive test cases|More focus on positive test cases|
equirement specification vs system specification
- can be different

| System specification                                                                                                  | Requirements specification                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| can also include details on how it will fail gracefully when pushed beyond limits, how to recover, etc. specification | limited to how the system behaves in normal working conditions                                          |
| written in terms of how the system solves those problems (e.g., explain the email search feature)                     | written in terms of problems that need to be solved (e.g., provide a method to locate an email quickly) |
| could contain additional APIs not available for end-users (for the use of developers/testers)                         | specifies the interface available for intended end-users                                                |

#### Test Automation
- test cases that can be run programatically
- the result can be determined programatically

Test driver
- code that invokes the SUT with the test inputs
- does the verification for expected behaviour

#### Test Coverage
- metric for the extent of the code covered by tests


| Type                         | Description                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **method coverage**          | - based on functions executed e.g., testing executed 90 out of 100 functions                                                                                                                                                                                                                                                                                                                                   |
| **statement coverage**       | - based on the number of lines of code executed e.g., testing executed 23k out of 25k LOC                                                                                                                                                                                                                                                                                                                      |
| **decision/branch coverage** | - based on the decision points exercised e.g., an `if` statement evaluated to both `true` and `false` with separate test cases during testing is considered 'covered'                                                                                                                                                                                                                                          |
| **condition coverage**       | - each boolean sub-expression of a decision point is evaluated to both true and false at least once<br>- condition coverage is not the same as the decision coverage                                                                                                                                                                                                                                           |
| **path coverage**            | - measures coverage in terms of possible paths through a given part of the code executed<br>- 100% path coverage means all possible paths have been executed<br>- a commonly used notation for path analysis is called the _Control Flow Graph (CFG)_.                                                                                                                                                         |
| **entry/exit coverage**      | - measures coverage in terms of possible _calls to_ and _exits_ from the operations in the SUT<br>- _Entry points_ refer to all places from which the method is called from the rest of the code i.e., all places where the control is handed over to the method in concern<br>- _Exit points_ refer to points at which the control is returned to the caller e.g., return statements, throwing of exceptions. |

Decision vs Condition Coverage
- `if(x > 2 && x < 44)` is considered one decision point but two conditions.

- for 100% branch or decision coverage, two test cases are required:
	- `(x > 2 && x < 44) == true` : e.g., `x == 4`
	- `(x > 2 && x < 44) == false` : e.g., `x == 100`

- for 100% condition coverage, three test cases are required:
	- `(x > 2) == true` , `(x < 44) == true` : e.g., `x == 4`
	- `(x < 44) == false` : e.g., `x == 100`
	- `(x > 2) == false` : e.g., `x == 0`

#### Dependency Injection
- injecting objects to replace current dependencies with a different object
- normally to inject [stubs](#^e74171) to isolate SUT
- can be implemented with [polymorphism](/labyrinth/notes/cs/cs2030s/polymorphism)
	- stub class can extend the dependency it intends to replace
	- implement a more limited class using overriding

#### Test-Driven Development(TDD)
- write tests before writing SUT
- evolve functionality and test in small increments
1. decide what behaviour to implement
2. write/modify test case to test that behaviour
3. run test cases and see it fail
4. implement the behaviour
5. run the tests and modify until all pass
6. refactor code to improve [quality](/labyrinth/notes/cs/cs2103t/code_quality)
7. repeat for each unit of behaviour

Rules
1. you are not allowed to write any production code unless it is to make a failing unit test pass
2. you are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures
3. you are not allowed to write any more production code than is sufficient to pass the one failing unit test