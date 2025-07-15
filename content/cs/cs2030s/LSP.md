---
tags:
- cs/fundamentals
- cs/oop
- cs2030s/chapter3
- lang/java
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs2030s/polymorphism)   [Next](/labyrinth/notes/cs/cs2030s/class_abstraction)
### Summary
A child class is substitutable for its parent if it does not violate any of the expected properties of its parent

Subclasses should be able to pass the same test cases that the parent class passes

Liskov substitution principle(LSP)
$$
Let \ \phi(x) \ be \ a \ property \ provable \ about \ objects \ x \ of \ type \ \verb|T|. \ Then \ \phi(y) \ should \ be \ true \ for \ objects \ y \ of \ type \ \verb|S| \ where \ \verb|S|<:\verb|T|.
$$

Restaurant analogy
- base restaurant should be open from 12pm to 10pm -> parent property
- lunch_restaurant closes at 2pm, violates LSP -> child property violates parent property
- 24h_restaurant is open at all times, does not violate LSP -> child property respects parent property
### Application
Rectangle and square
```java
public class Rectangle {
	private double width;
	private double height;
	
	public Rectangle(double width, double height) {
		this.width = width;
		this.height = height;
	}
	
	public double getArea() {
		return this.width * this.height;
	}
	
	@Override
	public String toString() {
		return "Width: " + this.width + " Height: " + this.height;
	}

	// one property of Rectangle is that u can modify height and width independently
	public void setHeight(double height) {
		this.height = height;
	}
	public void setWidth(double width) {
		this.width = width;
	}
}

public class Square extends Rectangle {
	public Square(double length) {
		super(length, length); // Square is a Rectangle where width == height
	}

	// to preserve the property of Square, if width or height is modified both must be modified, violating the property of Rectangle
	@Override
	public void setHeight(double height) {
		super.setHeight(height);
		super.setWidth(height);
	}
	@Override
	public void setWidth(double width) {
		super.setHeight(width);
		super.setWidth(width);
	}
}

// therefore it does not make sense for Square to inherit from Rectangle
```