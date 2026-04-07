---
tags:
- cs2030s/chapter2
- cs/oop
- lang/java
complete: true
prev: /labyrinth/notes/cs/cs2030s/classes
next: /labyrinth/notes/cs/cs2030s/polymorphism
---
   
### Summary
Subtype relationship
- child class is a [subtype](/labyrinth/notes/cs/cs2030s/types#^078dcb) of the parent
```java
class P {
}

class Q extends P {
}

class R extends Q {
}
```
$$
\verb|R|<:\verb|Q|<:\verb|P|
$$

Super
- calls the constructor of the parent class
- access methods in the parent class, that may have been overridden
```java
class Parent {
	Parent() {
	}
}

class Child extends Parent {
	Child() {
		super(); // construct the parent class
	}
}
```

Final
- prevents user from inheriting from the class
```java
final class Parent {
}

class Child extends Parent { // not possible to inherit
}
```

Protected
- child class cannot access private fields in the parent class
- protected allows this
- avoid using protected for `cs2030s`
```java
class Parent {
	private int a; // cannot be accessed outside Parent
	protected int b; //
}

class Child extends Parent { // not possible to inherit
}
```
### Concept
Every class in java extends from the base [java.lang.Object](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html) class

Creating a subclass of another class
- 'is-a' relationship
- that has the same base functionality as the parent with more added
- ie. the Square and Circle classes can be the child class of the Shape class

Type casting ^1f8d90
- to mimick a narrowing type conversion, mainly at run-time
- succeeds at compile-time when the CTT of the variable is related to type its being cast to
- succeeds at run-time when the RTT of the variable is a subtype of the type its being cast to
### Application
Run-time errors when type casting, see [casting to interfaces](/labyrinth/notes/cs/cs2030s/class_abstraction#^db9022)
```java
interface A { }
abstract class B implements A { }
interface C { }
class D extends B implements C { }
class E implements A { }

A a = new E();
B b = new D();
C c = new D();
D d = new D();
E e = new E();

a = d;      // widening type conversion, D <: A

a = (B) d;  // compiles: CTT(d) = D is related to B, runs: RTT(d) = D <: B

a = (B) a;  // compiles: CTT(a) = A is related to B, run-time error: RTT(a) = E </: B

c = (C) e;  // compiles: see interfaces. run-time error: RTT(e) = E </: C

b = (A) e;  // compile-time error on "=": CTT((A) e) = A </: B, invalid narrowing type conversion

b = (D) e;  // compile-time error: CTT(e) = E is not related to D

b = (D) a;  // compiles: CTT(a) = A is related to D, run-time error: RTT(a) = E </: D

// # 1
b = (B) a;  // compiles: CTT(a) = A is related to B, run-time error: RTT(a) = E </: B
// # 2
b = (B) e;  // compile-time error: CTT(e) = E is not related to B
// # 3
b = (D) b;  // compiles: CTT(b) = B is related to D, runs: RTT(b) = D <: D
// # 4
b = (B) d;  // compiles: CTT(d) = D is related to B, runs: RTT(d) = D <: B
```
> from examples 1 & 2, we see that the compile time check only checks the declared type
> from examples 3 & 4, we see that the compile time check only checks if the types are related

3D and 2D point
```java
class Point2D {
	private double x;
	private double y;

	public Point2D(double x, double y) {
		this.x = x;
		this.y = y;
	}

	public double distanceTo(Point2D p) {
		double hori = this.x - p.x;
	    double vert = this.y - p.y;
	    return Math.sqrt((hori * hori) + (vert * vert));
}

class Point3D extends Point2D {
	private double z;

	public Point3D(double x, double y, double z) {
		super(x, y); // construct the parent 2D point
		this.z = z;
	}

	public double flatDistance(Point3D p) {
		return super.distanceTo(p); // works since Point3D <: Point2D
	}
}
```