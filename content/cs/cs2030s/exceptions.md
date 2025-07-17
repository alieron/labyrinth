---
tags:
- cs/fundamentals
- cs2030s/chapter4
- lang/java
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs2030s/wrapper_classes)   [Next](/labyrinth/notes/cs/cs2030s/generics)

### Summary
Try-catch-finally
```java
try {
	// do something that might throw and exception
} catch (Exception e) { // catches any subtype
	// handle exception, runs if exception is thrown in the try block
} finally {
	// clean up, runs regardless of exception or not
}
```

Throw
```java
void func() throws Exception {
	...
	throw new Exception(); // use new to instantiate an exception
}
```

### Concept
Checked exceptions
- extends [java.lang.Exception](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Exception.html)
- errors that can be anticipated and recovered from
- checked by compiler
- handled using try-catch and must be defined using throws keyword

Unchecked exceptions(run-time exceptions)
- extends [java.lang.RuntimeException](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/RuntimeException.html)
- errors that cannot be recovered from, caused by programmer error
- no need to specify in method declaration
- eg. divide by 0, only happens when running

### Application
NullPointerException, runtime error
```java
A a; // reference type declared but not instantiated
a.funcA(); // => Exception java.lang.NullPointerException
```

Custom exception
```java
class OutOfStockException extends Exception {
  public OutOfStockException() {
    super("Not enough stock"); // passes error message string to super class
  }
}
```