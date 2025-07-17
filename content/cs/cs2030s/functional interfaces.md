---
tags:
- cs/functional_programming
- cs2030s/chapter8
- lang/java
complete: false
index: null
---
[Previous](/labyrinth/notes/cs/cs2030s/nested_classes)   [Next](/labyrinth/notes/cs/cs2030s/monads_and_functors)

### Summary
Functional interfaces
- interface with a single method, no ambiguity about which function is being implemented
- acts as templates for lambda functions
- [java.util.function](https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html) are some base functional interfaces
```java
@FunctionalInterface
interface Producer<T> {
	T produce();
}

class A<T> {
	T get(Producer<? extends T> prod) { // method that accepts and evaluates a producer
		return prod.produce(); // prod is not a function, but an implementation of the functional interface
	}
}

A<Integer> a = A<>();
Integer i = a.get(() -> 2); // nullary lambda function
i; // 2
```

Method reference
```java
class A {
	A() {
		// constructor
	}

	static int foo() {
		// static method
		return 1;
	}

	int boo() {
		return 2;
	}

	int hoo(int x) {
		return x + 2;
	}
}

// reference to constructor
A::new // Supplier<A> () -> new A();

// reference to static method
A::foo // Supplier<Integer> () -> A.foo();

// reference to instance method of instance
A a = new A();
a::boo // Supplier<Integer> () -> a.boo(); captures local variable a
a::hoo // Function<Integer, Integer> x -> a.hoo(x);

// reference to instance method of arbitrary object of specific type
A::boo // Function<A, Integer> a -> a.boo();
A::hoo // BiFunction<A, Integer, Integer> (a, x) -> a.hoo(x);
```

[Currying](/labyrinth/notes/cs/cs1101s/higher_order_functions#^3ffd84)
```java
int add(int x, int y) {
	return x + y;
}
add(x, y);

// BiFunction implementation
BiFunction<Integer, Integer, Integer> add = (x, y) -> x + y;
add.apply(x, y);

// Curried Function implementation
Function<Integer, Function<Integer, Integer>> add = x -> y -> x + y;
add.apply(x).apply(y);
```
> useful for lazy evaluation, inner lambda can be evaluated later

 add stack and heap

### Concept
Pure functions
1. does not depend on anything extrinsic of the function
2. function has a deterministic return value, that only depends on the input, ie. `void` functions are non-pure
3. function has no side-effects, ie. throwing exceptions or printing

Side effects ^cdd19a
- print
- write to files
- throw exceptions
- change variables
- modify values of the arguments

[Lambda functions](/labyrinth/notes/cs/cs1101s/higher_order_functions#^dec713)
- cross barrier state manipulators
```java
() -> code // Nullary

x -> code // Single parameter

(x, y) -> code // Multiple parameters

x -> { code; return code; } // Multiline
```

[Anonymous classes](/labyrinth/notes/cs/cs2030s/nested_classes#^85781f) of a functional interface
```java
Supplier<Integer> s = () -> 1; // is the same as
Supplier<Integer> s = new Supplier<>() { public Integer get() { return 1; } };
```

[Lazy evaluation](/labyrinth/notes/cs/cs1101s/lazy_evaluation)
- lambdas as closure, stores the surrounding local variables, allowing for delayed computation
- procastinate to compute only if absolutely necessary
- memoize to avoid recomputing, pure functions should return the same value everytime

Comparable and sort
```java
// implements Comparable<T>
int compare(T o1, T o2) // returns -ve if o1 < o2

// from List<T>
list::sort(Comparator<T> cmp) // sorts the list in ascending order wrt to comparator
```

### Application
Square
```java
// Anonymous class
Transformer<Integer, Integer> sq = new Transformer<>() {
	@Override
	public Integer transform(Integer x) {
		return x * x;
	}
};

// Lambda
Transformer<Integer, Integer> sq = x -> x * x;
```

Pure functions
```java
int square(int i) {
  return i * i;
}

int add(int i, int j) {
  return i + j;  // overflow is not an error in Java
}
```

Non-pure functions
```java
int div(int i, int j) {
  return i / j;  // may throw an exception
}

int incrCount(int i) {
  return this.count + i; // assume that count is not final.
                         // this may give diff results for the same i.
}

void incrCount(int i) {
  this.count += i; // does not return a value
                   // and has side effects on count
}

int addToQueue(Queue<Integer> queue, int i) {
  queue.enq(i);  // has side effects on queue
}
```

Producer, Consumer, Transformer, BooleanCondition, Combiner