---
tags:
- cs/oop
- cs2030s/chapter3
- lang/java
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs2030s/inheritance)   [Next](/labyrinth/notes/cs/cs2030s/LSP)
### Summary
Dynamic type checking
- check if the run-time type of x is a subtype of y
```java
x instanceof y
```
true if $\verb|x|<:\verb|y|$

Final
- prevents user from overriding a method
```java
class Parent {
	final void func() { ...
	}
}

class Child extends Parent {
	@Override
	void func() { ... // not possible to override
	}
}
```

Specific ^cc9566
- method M is more specific than a method N if the arguments to M can be passed to N without compilation error
### Concept
Overriding
- replacing parent methods, <span style="color:red">with the same method signature</span>, in the child class
- return type of the overriding method should be a subtype of the return type of the overridden method
- `@Override` pre-processor statement allows javac to check that the function actually overrides something

Overloading
- multiple functions with the same name but different [method signatures](/labyrinth/notes/cs/cs2030s/classes#^4e342d)
- when invoked the most specific implementation is used

Overriding allows for run-time polymorphism 
Overloading allows for compile-time polymorphism

Dynamic binding ^8d8849
- find most specific method descriptor based on CTT
- invoke the method, with the same descriptor based on RTT
- class methods do not support dynamic binding
```java
class {
	boolean contains(Object[] array, Object obj) {
	  for (Object curr : array) { // compile-time curr is Object
	    if (curr.equals(obj)) { // invokes the equal function based on the run-time type of curr
	      return true;
	    }
	  }
	  return false;
	}
}
```
1. at compile-time, CTT(`curr`) = Object, search for the most specific `Object.equals()` method that accepts CTT(`obj`) = Object, store the method descriptor -> `Object::equals(Object)`
2. at run-time, determine RTT(`curr`), look for the first accessible method that matches the descriptor, traverse up the class hierachy until found
### Application
Object methods that are usually overriden
`String toString()`
- what's printed upon instantiation in jshell

`boolean equal(Object obj)`
- what it means for another object to be equal to this one
- one of the only places where type casting is acceptable

3D and 2D point
```java
class Point2D {
	private double x;
	private double y;

	public Point2D(double x, double y) {
		this.x = x;
		this.y = y;
	}

	public Point2D(Point2D p) { // overloaded constructor
		this.x = p.x;
		this.y = p.y;
	}

	@Override
	public String toString() { // overriding the base Object toString method
		return "x=" + this.x + ", y=" + this.y;
    }

	public boolean equal(Object obj) {
		if (obj instanceof Point2D) {
			Point2D p = (Point2D) obj; // typecast after checking
			return this.x == p.x && this.y == p.y;
		} else {
			return false;
		}
	}
}

class Point3D extends Point2D {
	private double z;

	public Point3D(double x, double y, double z) {
		super(x, y); // construct the parent 2D point
		this.z = z;
	}

	public Point3D(Point2D p, double z) { // overloaded constructor
		super(p);
		this.z = z;
	}

	@Override
	public String toString() { // overriding the parent toString method
		return super.toString() + ", z=" + this.z; // invoking the parent toString method
	}

	@Override
	public boolean equal(Object obj) {
		if (obj instanceof Point3D) { // check subtype first
			Point3D p = (Point3D) obj; // type cast after checking
			return super.equal(p) && this.z == p.z; // works since 
		} else if (obj instanceof Point2D) {
			Point2D p = (Point2D) obj;
			return super.equal(p) && this.z == 0;
		} else {
		    return false;
		}
	}
}
```

Runtime type check
```java
class A {}
class B extends A {}

A a = new A();
B b = new B();
A ab = new B();

b instanceof A // true RTT(b) = B <: A
b instanceof B // true RTT(b) = B <: B

a instanceof A // true RTT(a) = A <: A
a instanceof B // false RTT(a) = A </: B

ab instanceof A // true RTT(ab) = B <: A
ab instanceof B // true RTT(ab) = B <: B
```

Dynamic binding
```java
public class Point {
	private double x;
	private double y;
	
	public Point(double x, double y) {
		this.x = x;
		this.y = y;
	}
	
	public boolean equals(Point p) {
	    return this.x == p.x && this.y == p.y;
	}
}
public class Circle {
	private Point centre;
	private int radius;
	
	public Circle(Point centre, int radius) {
		this.centre = centre;
		this.radius = radius;
	}
	
	@Override
	public boolean equals(Object obj) {
		System.out.println("equals(Object) called");
		if (obj == this) {
			return true;
		}
		if (obj instanceof Circle) {
			Circle circle = (Circle) obj;
			return (circle.centre.equals(centre) && circle.radius == radius);
		} else {
			return false;
		}
	}
	
	public boolean equals(Circle circle) {
		System.out.println("equals(Circle) called");
		return circle.centre.equals(centre) && circle.radius == radius;
	}
}

Circle c1 = new Circle(new Point(0, 0), 10);
Circle c2 = new Circle(new Point(0, 0), 10);
Object o1 = c1;
Object o2 = c2;

o1.equals(o2);               //  compile-time: looks for Object::equal(Object), run-time: finds Circle.equal(Object), passes o2
o1.equals((Circle) o2);      //* compile time: since Circle<:Object, looks for Object::equal(Object), run-time: finds Circle.equal(Object), passes (Circle) o2
o1.equals(c2);               //  compile time: since Circle<:Object, looks for Object::equal(Object), run-time: finds Circle.equal(Object), passes c2
c1.equals(o2);               //  compile-time: looks for Circle::equal(Object), run-time: finds Circle.equal(Object), passes o2
c1.equals((Circle) o2);      //* compile-time: looks for Circle::equal(Circle), run-time: finds Circle.equal(Circle), passes (Circle) o2
c1.equals(c2);               //  compile time: looks for Circle::equal(Circle), run-time: finds Circle.equal(Circle), passes c2
```