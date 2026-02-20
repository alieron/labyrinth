---
tags:
  - cs2103t/java
  - cs/oop
  - lang/java
complete: true
---
### Concept
#### Enumerations
- fixed set of values considered as a data [type](/labyrinth/notes/cs/cs2030s/types)
- prevents invalid values to be assigned to it

```java
public enum Day {
	SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
	THURSDAY, FRIDAY, SATURDAY
}
```
#### Attributes
- constants are instances

```java
enum Status {
	SUCCESS(200), // instantiation using the constructor, Status object with code = 200
	ERROR(500);

	private final int code;

	Status(int code) {
		this.code = code;
	}
}
```
#### Subclasses
- enum constants can be an [anonymous subclass](/labyrinth/notes/cs/cs2030s/java_nested_classes#^85781f) of the base enum class

```java
enum Op {
    ADD { int apply(int a, int b) { return a + b; } },
    SUB { int apply(int a, int b) { return a - b; } };

    abstract int apply(int a, int b);
}
```
> enum is a class (possibly abstract), enum constants are instances and constants with bodies are anonymous subclasses
#### Lookup method
- **factory method** to instantiate an enum from a primitive type

```java
enum Status {
    SUCCESS(200),
    ERROR(500);

    private final int code;

    Status(int code) {
        this.code = code;
    }

    public static Status fromCode(int code) {
        for (Status s : values()) {
            if (s.code == code) {
                return s;
            }
        }
        // if not a valid enum type
        throw new IllegalArgumentException("Unknown code: " + code);
    }
}
```
### Application
Mixing "bodied" constants
```java
enum HttpMethod {
    GET,
    POST,
    PUT,
    DELETE {
        @Override
        boolean hasRequestBody() {
            return false;
        }
    };

    boolean hasRequestBody() {
        return true; // default
    }
}
```

Abstract method
- requires constants to all be anonymous classes

```java
enum Status {
    OK { void log() {} },
    ERROR; // compile-time error, log is not implemented

    abstract void log();
}
```