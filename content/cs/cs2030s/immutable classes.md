---
tags:
- cs/oop
- cs2030s/chapter7
- lang/java
complete: true
prev: /labyrinth/notes/cs/cs2030s/wildcards
next: /labyrinth/notes/cs/cs2030s/nested_classes
---

   

### Summary
Factory methods
- private constructors

No visible changes from outside the abstraction barrier, there can be changes internally

### Concept
Nature of [reference types](/labyrinth/notes/cs/cs2030s/types#^e9a435) and aliasing
- mutable, change can occur on the inside, without reflecting outside
- we can have multiple references to the same object(aliasing)

Steps
- class final, prevent us from redeclaring mutable shadows
- fields final (not strictly necessary)
- mutating methods, that typically modify the instance, instead return a new instance of the object, with the modification
- ensure that any encapsulated classes/objects are also immutable

Why immutable?
- make classes behave like primitive types
- enable sharing of internals/shared origin
- enable sharing of objects
- enable safe concurrent execution

### Application
Circle and Point
```java
// mutable implementation
class Point {
	private double x;
	private double y;
    
	public void moveTo(double x, double y) {
	    this.x = x;
	    this.y = y;
	}
}

class Circle {
	private Point c;
	private double r;

	public Circle (Point c, double r) {
	    this.c = c;
	    this.r = r;
	}

	public void moveTo(double x, double y) {
	    c.moveTo(x, y);
	}
}

Point p = new Point(0, 0);
Circle c = new Circle(p, 1);

p.moveTo(1, 1); // will not only move p, but c as well, even thouch c.moveTo() is not called

// immutable implementation
final class Point {
	private final double x;
	private final double y;

	public Point(double x, double y) {
	    this.x = x;
	    this.y = y;
	}

	public Point moveTo(double x, double y) {
	    return new Point(x, y); // return a new point, that can be 
	}
}

final class Circle {
	private final Point c;
	private final double r;

	public Circle (Point c, double r) {
	    this.c = c;
	    this.r = r;
	}

	public Circle moveTo(double x, double y) {
	    return new Circle(c.moveTo(x, y), r);
	}
}

Point p = new Point(0, 0);
Circle c = new Circle(p, 1);

p = p.moveTo(1, 1); // now in order to move p, we reassign
```

Immutable sequence
```java
final class ImmutableSeq<T> {
  private final T[] array;

  // Only items of type T goes into the array.
  @SafeVarargs
  public static <T> ImmutableSeq<T> of(T... items) {
    // We need to copy to ensure that it is truly immutable
    @SuppressWarnings("unchecked");
    T[] arr = (T[]) new Object[items.length];
    for (int i = 0; i < items.length; i++) {
      arr[i] = items[i];
    }
    return new ImmutableSeq<>(arr);
  }

  private ImmutableSeq(T[] a) {
    this.array = a;
  }

  public T get(int index) {
    return this.array[index];
  }
}
```