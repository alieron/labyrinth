---
tags:
  - cs2103t/paradigms
  - cs/software_eng
  - lang/java
complete: true
next: /labyrinth/notes/cs/cs2103t/SDLC_process_models

---
### Summary
Classes

| Modifier    | Permissions                        |
| ----------- | ---------------------------------- |
| `public`    | accessible to any other class      |
| *`default`* | accessible within the same package |

Attributes, methods and constructors

| Modifier    | Permissions                                            |
| ----------- | ------------------------------------------------------ |
| `public`    | accessible to any other class                          |
| `private`   | accessible only within the class                       |
| *`default`* | accessible within the same package                     |
| `protected` | accessible only within the same package and subclasses |

Relationships

| Is-a                                              | Has-a                                                 | Can-do                                                       |
| ------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| - [inheritance](/labyrinth/notes/cs/cs2030s/inheritance)<br>- `extends` and `implements` | - composition<br>- instance attributes<br>- ownership | - [class abstraction](/labyrinth/notes/cs/cs2030s/class_abstraction)<br>- interfaces and abstract methods |

Associations

| Concept               | Core Idea                                    | Key Characteristics                                         | Example                             |
| --------------------- | -------------------------------------------- | ----------------------------------------------------------- | ----------------------------------- |
| **navigability**      | who can access whom in a relationship        | unidirectional or bidirectional; based on object references | `Person` -> `Cat` (owner knows pet) |
| **multiplicity**      | number of objects involved in an association | `0..1`, `1`, `1..*`; uses variables or collections          | one `Student` -> many `Course`s     |
| **dependency**        | temporary usage of another class             | no long-term link; no stored reference                      | method parameter usage              |
| **composition**       | strong whole–part relationship               | parts depend on whole; no independent existence             | `Email` -> `Subject`                |
| **aggregation**       | weak “has-a” relationship                    | parts can exist independently                               | `Team` -> `Person`                  |
| **association class** | relationship with its own data               | represented as a separate class                             | `Marriage` (with date)              |

### Concept
- programming paradigm
- way to reason about code

#### Objects
- emulate real objects
- have state and behaviour - encapsulation of data and related behaviour
- the world is a network of interacting objects - send messages between objects
- objects are an [abstraction](/labyrinth/notes/cs/cs2103t/software_design#Abstraction) mechanism

Classes
- contains instructions for creating objects
- generalization for a 'class' of objects
- class-level/static attributes and methods

#### Associations
- connections between objects
- can be dynamic
- can be generalized as associations between classes
- implemented as **instance level variables**

Navigability
- if we can navigate from one object to another
- one object knows about another

```java
// bidirectional, owner <-> pet
class Person {
    Cat pet;
    //...
}

class Cat {
    Person owner;
    //...
}

// two unidirectional, owner -> pet, but pet -> breeder
class Person {
    Cat pet;
    //...
}

class Cat{
    Person breeder;
    //...
}
```
> two unidirectional != one bidirectional

Multiplicity
- how many objects take part in each association
- optional or compulsory

Dependency
- object depends on another object without a direct association
- associations are implicit dependencies, this is just to highlight less obvious ones

```java
class Foo {
    int calculate(Bar bar) { // Foo depends on Bar, but doesn't have a direct association
        return bar.getValue();
    }
}

class Bar {
    int value;

    int getValue() {
        return value;
    }
}
```

Composition
- strong **whole-part** relationship
- the parts cannot exist without the whole
- no cyclical links
- depends on context
- cascading deletion != composition

Aggregation
- container-contained relationship
- weaker than composition
- part can exist even without the whole

```java
class Team {
    Person leader;
    ...
    void setLeader(Person p) {
        leader = p;
    }
}
```

Association classes
- additional information about an association

```java
class Transaction {
    // all fields are compulsory
    Person seller;
    Person buyer;
    Date date;
    String receiptNumber;

    Transaction(Person seller, Person buyer, Date date, String receiptNumber) {
        // set fields
    }
}
```

#### [Inheritance](/labyrinth/notes/cs/cs2030s/inheritance)
- is-a relationship

Overriding
- subclass changes the behaviour of the parent class
- dynamic binding - choose which implementation at runtime

Overloading
- multiple methods with the same name but accept different type signatures
- static binding - choose method at compile time

Interfaces
- behaviour specification

Abstract class
- class is just a representation of common data and behaviour among subclasses

Substitutability
- subclass instances are super class instances

#### [Polymorphism](/labyrinth/notes/cs/cs2030s/polymorphism)
- write code targetting super class
- when used on subclass objects, dynamic binding gives different results per subtype