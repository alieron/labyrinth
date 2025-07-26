---
tags:
- cs/oop
- cs2030s/chapter3
- lang/java
complete: true
prev: /labyrinth/notes/cs/cs2030s/LSP
next: /labyrinth/notes/cs/cs2030s/wrapper_classes
---

   

### Summary
Abstract classes/methods
- "is-a" relationship - Circle is a Shape
- cannont be instantiated
- can have both concrete fields and methods, and abstract methods
- abstract methods are left to the child class to implement
```java
abstract class A {
	private int a; // concrete field

	public void funcA () { ... // comvrete method and implementation

	public abstract int funcB(); // abstract method, declared but not implemented
}

class B extends A { // has to implement all the methods declared in the parent
	@Override
	public abstract int funcB() { ... // implementation of the abstract method
}
```

Interfaces
- "can-do" relationship - Circle can do get area
- \*-able
- nothing concrete, except fields
- methods are public by default, ie. must be overridden with explicitly declared public methods
```java
interface C {
	void funcC(); // abstract method, is public abstract by default
}

interface D {
	double funcD(); // abstract method
}

class E extends A implements C, D { // only can extend one parent class, but can implement multiple interfaces
	@Override
	public int funcB() { ...
    
	@Override
	public void funcC() { ...
	
	@Override
	public double funcD() { ...
}
```
$$
\verb|E|<:\verb|A|, \quad \verb|E|<:\verb|C|, \quad \verb|E|<:\verb|D|
$$
> a type can have multiple direct supertypes

![[abstractclass_interfaces.png]]

### Concept
Why?
- grouping subclasses into categories
- denoting that a class has a certain feature

Casting to interfaces ^db9022
- a class can be cast to any interface, even if it does not implement it
- compiler trusts the programmer and does not give any warnings
```java
interface I {
	...
}

class A {
	...
}

class B implements I {
	...
}

I i1 = new B();     // widening type conversion
I i2 = (I) new A(); // allowed despite A </: I
```
> the java compiler prevents the type cast when its provable that it will not work, as in [casting between classes](/labyrinth/notes/cs/cs2030s/inheritance#^1f8d90)
> for interfaces, its possible that a subclass implements the interface
```java
class AI extends A implements I {
	...
}
```

Impure interfaces
- interface can provide a default implementation of methods
- classes that implement the impure interfaces will use the default implementation, unless they override the method
- compatibility with evolving code
```java
interface I {
	default void show() { // default implementation, acts as the declaration as well
		System.out.println("Default");
	}
}

class A implements I { // need not override
}

class B implements I {
	@Override
	void show() {
		System.out.println("Overridden");
	}
}

new A().show(); // => "Default"
new B().show(); // => "Overridden"
```
> java 8+

### Application
Compile-time type checking
```java
public interface Shape {
	public double getArea();
}

public interface Printable {
	public void print();
}

class Circle implements Shape, Printable { // can implement more than one interface
	...
}

Circle c = new Circle(new Point(0,0), 10);
Shape s = c;
Printable p = c;

s.print(); // Fails: Shape doesn't have print()
p.print(); // Works
s.getArea(); // Works
p.getArea(); // Fails: Printable doesn't have getArea()
```