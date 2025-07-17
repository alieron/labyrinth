---
tags:
- cs/oop
- cs2030s/chapter4
- lang/java
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs2030s/class_abstraction)   [Next](/labyrinth/notes/cs/cs2030s/exceptions)

### Summary
Reference types for primitives
- using primitive types as reference types
- allows primitive types to have OOP properties
```java
Integer i = Integer.valueOf(4); // reference type Integer
int j = i.intValue();           // primitive type int
```

Auto-boxing/unboxing
- pre-compilation
```java
Integer i = 4; // boxed into -> Integer.valueOf(4)
int j = i;     // unboxed from -> i.intValue()
```

### Concept
A [reference type](/labyrinth/notes/cs/cs2030s/types#^e9a435) equivalent of the java primitive types
- primitive wrapper classes are final

Variance of complex [types](/labyrinth/notes/cs/cs2030s/types) ^f8f5bb
$$
\begin{align*}
\text{Covariant:} &&& \verb|S|<:\verb|T| \implies \verb|C(S)| <:\verb|C(T)| \\
\\
\text{Contravariant:} &&& \verb|S|<:\verb|T| \implies \verb|C(T)|<:\verb|C(S)| \\
\\
\text{Invariant:} &&& neither
\end{align*}
$$
> `Integer[]` is covariant, but `int[]` is invariant

Arrays are covariant
```java
Integer[] ints;
Object[] objects;
objects = ints; // Compiles as Integer[] <: Object[]
ints = objects; // Error
```

Dangers of covariance of arrays
- runtime error
- mismatch of types within arrays
```java
Object[] objs = new Integer[] { 1, 2 }; // CTT(objs) -> Object[], RTT(objs) -> Integer[]
objs[0] = "String"; // compiler allows String to be added to Object[], type mismatch occurs in runtime
```

### Application
Iterating with wrapper classes
```java
for (Integer i = 2030; i <= 2040; i += 1) {
	// new instance of Integer is created for every iteration
}
```

Double and Integer
```java
double a = 1.0; // works
double b = 1;   // casting int to double, works since int <: double

int c = 1;   // works
int d = 1.0; // casting double to int, fails since narrowing type conversion

Double e = 1.0; // works
Double f = 1;   // cannot autobox int to Double, additionally Integer </: Double
```