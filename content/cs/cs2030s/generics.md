---
tags:
- cs/oop
- cs2030s/chapter5
- lang/java
complete: true
index: null
---
[Previous](/labyrinth/notes/cs/cs2030s/exceptions)   [Next](/labyrinth/notes/cs/cs2030s/wildcards)
### Summary
Type parameters
- scopes with method level declaration
```java
class A<T> { // generic class with type parameter T
	public T funcA() { ... // non-generic method that returns type T
	}
	
	public <T> T funcB() { ... // generic method with type parameter T, different from T in the outer scope
	}
	
	public <S> T funcC() { ... // generic method with type parameters T and S
	}
}
```

Instantiating generic classes/calling generc methods
```java
A<Integer> a = new A<Integer>(); // after symbol, before parameters

a.<String>funcB(); // after '.', before symbol
```

Type erasure
- pre-compilation after type checking
- Erasure -> Compilation -> Run-time
```java
class A<T> { // unbounded type parameter
	private T obj;

	public T func() { ...
	}
}

A<String> a = new A<String>();
String s = a.func();

// After type erasure
class A {
	private Object obj;

	public Object func() { ...
	}
}

A a = new A();
String s = (String) a.func(); // added type cast
```

Bounding
- the type parameter has to be a subtype of a certain reference type
```java
class A<S, T extends Number> {
	public S funcA() { ...
	}
	public T funcA() { ...
	}
}

A<String, Integer> a = new A<String, Integer>();
String s = a.funcA();
Integer i = a.funcB();

// After type erasure
class A {
	public Object funcA() { ... // <- type parameter's replaced by bound
	}
	public Number funcA() { ...
	}
}

A a = new A();
String s = (String) a.funcA(); // <- added type cast whenever its methods are invoked
Integer i = (Integer) a.funcB();

// Restrictions at compile-time
new A<String, String>(); // compile-time error: String </: Number

new A<String, Integer>(); // works: Integer <: Number
```

Multiple bounds
- declare as first type, any methods from the other type is used, do a cast to that type
```java
class A {
	public void funcA();
}
interface B {
	public void funcB();
}

class C<T extends A & B> { // similar to extending classes/interfaces, one class but multiple interfaces
	public void funcC(T t) {
		t.funcA();
		t.funcB();
	}
}

// After type erasure
class C {
	public void funcC(A t) {
		t.funcA();
		((B) t).funcB(); // cast to B when B functions are called
	}
}
```

Unchecked warning
- arises when casting to a generic type parameter
- to get around this, instantiate `Object` or the lower bound of the type parameter
- run-time errors may still occur
```java
class A<T> {
	private T obj;
    private T[] array;

    public A(int size) {
    	// typical use case, since we cannot instantiate generic types
	    this.obj = (T) new Object();         // unchecked warning 
		this.array = (T[]) new Object[size]; // unchecked warning
    }

	// Warning suppressed
	public A(int size) {
		// this.obj private so it cannot be set outside of the class
		// we ensure that any internal methods that set this.obj is type safe
		// so its safe to cast Object to T
		@SuppressWarnings("unchecked")
	    T obj = (T) new Object();
	    this.obj = obj;
		
		// ...
		// so its safe to cast Object[] to T[]
		@SuppressWarnings("unchecked")
		T[] array = (T[]) new Object[size];
		this.array = array;
    }
}
```
> `@SuppressWarnings` can only apply to the declaration and not the assignment, it should be used in the *most limited* scope

Rawtype warning ^790451
- arises when declaring a raw generic type
```java
class A<T> {
}

class B {
	public void funcA() {
		@SuppressWarning("rawtypes")
		A a = new A<Integer>(); // rawtype warning
	}
	
	@SuppressWarning("rawtypes")
	public void funcB(A a) { ... // rawtype warning
	}
}
```
### Concept
Make classes more flexible
- a framework for compiler type checks(code sharing)
- parametric polymorphism

Instantiating generics
- cannot instantiate an array of generics/generic classes
- cannot use primitive types
- can use interfaces
```java
new Pair<String,Integer>[2]; // error
new Pair<S,T>[2]; // error
new T[2]; // error
new Pair<int>(); // error 
```

Bridge methods
- preserves overriding when inheriting methods from a declared generic class
- created for run-time consistency with [dynamic binding](/labyrinth/notes/cs/cs2030s/polymorphism#^8d8849), ensures overriding rather than overloading
- inserted by the compiler after type erasure, before compilation
- view added bridge methods in the jvm bytcode with https://godbolt.org/
```java
class A<T> {
	public void func(T t) { ...
	}
}

class B extends A<String> {
	public void func(String s) { ... // appears to override before type erasure
	}

	public void func(Integer i) { ... // appears to overload before type erasure
	}
}

// After type erasure
class A {
	public void func(Object t) { ...
	}
}

class B extends A {
	public void func(String s) { ... // overloads after type erasure
	}

	public void func(Integer i) { ... // overloads implicitly
	}
	
	public void func(Object o) { // overrides A::func(Object) and calls B::func(String)
		this.func((String) o); 
	}
}
```

Generic static
- generic types is only associated with the instance
- but non-generic statics are still associated with the raw class, regardless of type `T`
```java
class B<T> {
	T x; // instance field, works
	
	static T y; // class field, error
}

B<Integer> = new B<Integer>();
B<Double> = new B<Double>();
// no way to know what T will be
```
### Application
Pair
```java
// Object implementation, weak type checking
class Pair {
  private Object first;
  private Object second;

  public Pair(Object first, Object second) {
    this.first = first;
    this.second = second;
  }

  public Object getFirst() {
    return this.first;
  }

  public Object getSecond() {
    return this.second;
  }
}

// Generic implementation, leverages the compiler to type check
class Pair<S,T> {
  private S first;
  private T second;

  public Pair(S first, T second) {
    this.first = first;
    this.second = second;
  }

  public S getFirst() {
    return this.first;
  }

  public T getSecond() {
    return this.second;
  }
}
```

Sequence
```java
class Seq<T> {
	private T[] array;

	Seq(int size) {
	  // The only way we can put an object into 
	  // array is through the method set() and we 
	  // only put object of type T inside.
	  // So it is safe to cast `Object[]` to `T[]`.
	  @SuppressWarnings("unchecked")
	  T[] temp = (T[]) new Object[size];
	  this.array = temp;
	}
	
	public void set(int index, T item) {
	    this.array[index] = item;
	}
	
	public T get(int index) {
		return this.array[index];
	}
	
	public T[] getArray() {
		return this.array;
	}
}
```

Suppressing both unchecked and rwatypes warnings
```java
class Seq<T extends Comparable<T>> {
	private T[] seq;

	public Seq(int size) {
		// New objects of type T can only be added to the array
		// via set() which is type safe
		@SuppressWarnings("rawtypes")
		Comparable[] arr1 = (Comparable[]) new Comparable[size];
		
		@SuppressWarnings("unchecked")
		Comparable<T>[] arr2 = (Comparable<T>[]) arr1;
		
		@SuppressWarnings("unchecked")
		T[] seq = (T[]) arr2;
		this.seq = seq;
	}

	// Combined suppress warnings
	public Seq(int size) {
		@SuppressWarnings({"rawtypes", "unchecked"})
		T[] seq = (T[]) new Comparable[size];
		this.seq = seq;
	}
}
```

Bridge methods
- overriding use `this`, else use `super`
```java
class A<T> {
	public void fun(T x) {
		System.out.println("A");
	}
}
// After type erasure
class A {
	public void fun(Object x) {
		System.out.println("A");
	}
}

// (i)
class B extends A<String> {
	public void fun(String i) { // appears to override, but actually overloads
		System.out.println("B");
	}
} 
// After type erasure
class B extends A {
	public void fun(String i) {
		System.out.println("B");
	}
	
	public void fun(Object o) { // bridge method, preserves the idea of overriding
		this.fun((String) o);
	}
}
//
A<String> a = new B();
a.fun("2"); // CTT(a) = A, use A::fun(Object) -> RTT(a) = B, invoke B::fun(Object) -> B::fun(String) is called by bride method -> prints "B"

// (ii)
class B extends A<String> {
	public void fun(Object i) {
		System.out.println("B");
	}
}
// After type erasure
class B extends A {
	public void fun(Object i) {
		System.out.println("B");
	}
	
	public void fun(Object o) { // bridge method, compile-time error: 2 methods with same signature
		...
	}
}
//
A<String> a = new B();
a.fun("2"); // fails to compile

// (iii)
class B extends A<String> {
	public void fun(Integer i) {
		System.out.println("B");
	}
}
// After type erasure
class B extends A {
	public void fun(Integer i) { // does not override
		System.out.println("B");
	}

	// bridge method not needed for overloading, but include it in the thought process
	public void fun(Object o) { // bridge method, forwarding to super type/up the type hierachy
		super.fun((String) o);
	}
}
//
A<String> a = new B();
a.fun("2"); // CTT(a) = A, use A::fun(Object) -> RTT(a) = B, look for B::fun(Object) -> invokes A::fun(Object) -> prints "A"
```

Overloading with type erasure
```java
class T1 {}
class T2 extends T1 {}
class T3 extends T2 {}
class T4 extends T3 {}

class A<T extends T1> {
	void fun(T x) {
		System.out.println(1);
	}
	<T extends T3> void fun(T x) { 
		System.out.println(2);
	}
}

// After type erasure
class A {
	void fun(T1 x) {
		System.out.println(1);
	}
	void fun(T3 x) {
		System.out.println(2);
	}
}
//

class Main {
  public static void main(String[] args) {
    A<T1> a = new A<>();
    a.fun(new T2()); // CTT(new T2()) = T2, use A::fun(T1) prints 1
    a.fun(new T3()); // CTT(new T3()) = T3, use A::fun(T3) -> prints 2
    a.fun(new T4()); // CTT(new T3()) = T4, use A::fun(T3) -> prints 2
  }
}
```

Comparable
```java
class A implements Comparable<A> {
	@Override
	public int compareTo(A o) { ... // applies the concept of bridging methods to preserve overriding
	}
}
```