---
tags:
  - cs2030s/chapter7
  - cs/oop
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2030s/immutable_classes
next: /labyrinth/notes/cs/cs2030s/functional_interfaces
---
   
### Summary
Inner class
- requires an instance of the outer class
```java
class A {
	private int x;
	static int y;
	
	class B {
		private int x;
		
		void foo() {
			x = 1;        // instance field from B
			this.x = 1;
			
			y = 1;        // static field from A
			A.y = 1; 
			
			A.this.x = 1; // instance field from A
		}
	}
}

A a = new A();
A.B b = a.new B();
```

Static nested class
- does not require an instance
```java
class A {
	private int x;
	static int y;
	
	static class C {
		void bar() {
		    x = 1; // cannot access instance field from A
		    y = 1; // can access static field from A
	    }
	}
}

A.C c = new A.C();
```

Local class
- class declared within a method
```java
class A {
	int x = 1;
	
	void f() {
		int y = 1;
		
		class B {
			void g() {
				x = y; // accessing x and y is OK.
			}
		}
		
		new B().g();
	}
}

// in B...
// A.this
```

Anonymous class ^85781f
- single use local class
- either extends from a class or implements an interface
```java
new X(arguments) { body }

// X is a class that the anonymous class extends, or the interface it implements
// arguments are supplied to the constructor, like using super()
// override methods or implement them in the body, no constructor
```
### Concept
Fully qualified name
```java
class A {
	int x = 0;
	
	int f() {
		int x = 3;
		return x; // x is potentially ambiguous, use this.x to refer to outer x
	}
}	
```

Accessing enclosing class (Inner classes)
- inner class has a reference to the outer class instance

Variable capture (Local classes)
- only capture variables that are used in the local class
- only allowed for variables that are final or effectively final, ie. cannot be reassigned after initialization
- get around this using mutable reference types, sus though
```java
interface C {
	void g();
}

class A {
	int x = 1;
	
	C f() {
		int y = 1; // alone, this would be effectively final
		y = 2; // not effectively final, no reassignment even if before the local class is declared
		
		class B implements C {
			void g() {
				x = y; // accessing x and y is OK.
			}
		}
		
		y = 2; // not effectively final
		B b = new B();
		return b;
	}
}
```
### Application
Hiding inner classes
```java
class A {
	private class B {
		public void buz() { 
		}
	}
	B foo() {
		return new B();
	}
}

A a = new A();
a.foo();         // works, return an instance of A.B is OK
A.B b = a.foo(); // error, type A.B is private
a.foo().buz();   // error, A.B::buz is defined in a private nested class
```

Comparator
```java
Comparator<String> cmp = new Comparator<String>() { // implements comparator
	public int compare(String s1, String s2) {
		return s1.length() - s2.length();
	}
};

names.sort(cmp);
```

Inner class captures outer instance
```java
class A {
	int x = 1;
	class B {
		void go() { System.out.println(x); } // A.this.x works also
	}
	void bo() {
		new B().go();
	}
}

A a = new A();
a.bo();
```
![[inner_class.png]]

Local class only captures variables that are used internally
```java
class A {
	int x = 1;
	
	void bo() {
		int y = 1;
		int i = 2;
		
		class B {
			void go() { 
				System.out.println(x); // A.this.x works also
				System.out.println(y); 
			} 
		}
		new B().go();
	}
}

A a = new A();
a.bo();
```
![[local_class.png]]
> this way `x` must be effectively final for use within `B` but `i` can still be modified

Scope and effectively final
```java
class E {
	int w;
	
	void doTask() {
		int x;
		
		class F {
			int y;
			
			F() {
				w = 1; // comes from E.this.w
				x = 1; // error: not effectively final
				y = 1; // class field
				z = 1; // error: scope
			}
		}
		
		F f = new F();
	}
	
	class G {
		int z;
	}
}
```
### Extra
Check for correctness
https://thisisadi.yoga/Programming/Tools/StackHeap/ - A good stack and heap diagram visualizer
> It uses a slightly different naming convention - the `$` follow java's internal naming convention for nested classes