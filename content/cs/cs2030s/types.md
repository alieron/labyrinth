---
tags:
- cs/fundamentals
- cs2030s/chapter1
- lang/java
complete: true
next: /labyrinth/notes/cs/cs2030s/classes
---



### Summary
Subtype ^078dcb
$$
\begin{gather*}
\verb|A|<:\verb|B| \\
\verb|A|\text{ is a subtype of }\verb|B| \\
\verb|B|\text{ is a supertype of }\verb|B| \\
\end{gather*}
$$

Primitive types
- stores a copy of its value

| kind           | type      | size(bits) | value range                          |
| -------------- | --------- | ---------- | ------------------------------------ |
| booleans       | `boolean` | 1          | $\{ 0, 1 \}$                         |
| strings        | `char`    | 16         | $[0, 2^{16}-1]$                      |
| integral       | `byte`    | 8          | $[0, 2^8-1]$                         |
|                | `short`   | 16         | $[-2^{15}, 2^{15}-1]$                |
|                | `int`     | 32         | $[-2^{31}, 2^{31}-1]$                |
|                | `long`    | 64         | $[-2^{63}, 2^{63} - 1]$              |
| floating-point | `float`   | 32         | up to 38-digit, but not every number |
|                | `double`  | 64         |                                      |
```java
int i = 5;
int j = i;
// both i and j store their own copy of the value 5
```

Reference types ^e9a435
- stores a pointer to the object in memory
- is a reference the instance of the object
```java
Object i = new Object();
Object j = i;
// both i and j store the same pointer to the intance of object in memory
```

### Concept
Dynamically typed languages
- Same variable can hold data of any data type

Statically typed languages
- Variable can hold data of the type the variable was declared with and its subtypes

Strong typed
- Type-safety, type-checking to reduce runtime-errors

Weak typed
- No type-checking

Rules of subtype notation
$$
\begin{align*}
\text{Reflexive:}&\quad \verb|S|<:\verb|S|, \ for \ any \ type \ \verb|S| \\
\text{Transitive:}& \quad if \ \verb|S|<:\verb|T| \ and \ \verb|T|<:\verb|U|, \ then \ \verb|S|<:\verb|U| \\
\text{Anti-symmetry:}& \quad if \ \verb|S|<:\verb|T| \ and \ \verb|T|<:\verb|S|, \ then \ \verb|S| \ is \ the \ same \ type \ as \ \verb|T|
\end{align*}
$$

Widening and narrowing
- Java allows for a variable of type T to hold a value fron type S, if S<:T

### Application
Java primitive type hierachy
$$
\begin{gather*}
\verb|byte|<:\verb|short|<:\verb|int|<:\verb|long|<:\verb|float|<:\verb|double| \\
\\
\verb|char|<: \verb|int|
\end{gather*}
$$

Compile time type checking
```java
double d = 5.0;
int i = 5;
d = i; // ok, since int is a subtype of double
i = d; // error
```