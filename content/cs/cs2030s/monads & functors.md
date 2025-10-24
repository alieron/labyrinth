---
tags:
  - cs2030s/chapter10
  - cs/oop
  - cs/paradigm
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2030s/functional_interfaces
next: /labyrinth/notes/cs/cs2030s/streams_II
---
   
### Summary
Monad laws
1. Left identity law
	- `of` doesn't modify or add side info
```java
Monad.of(x).flatMap(f) <==> f(x)
```
> remember that f and x -> f(x) are not functions, call apply()

2. Right identity law
	- `flatMap` assists in conveying/concatenating the side info
```java
monad.flatMap(x -> Monad.of(x)) <==> monad
```
> the right and left identity laws are bicondtional

3. Associative law
	- only concerns `flatMap`
```java
monad.flatMap(f).flatMap(g) <==> monad.flatMap(x -> f(x).flatMap(g))
```

Functor laws
1. Identity
	- `map` conveys the side info
```java
functor.map(x -> x) <==> functor
```

2. Composition
	- `map` only applies the lambda and nothing else
```java
functor.map(f).map(g) <==> functor.map(x -> g(f(x)))
```
### Concept
Monad
- a box that stores data and its side-effects
- boxing with a factory method `of`
- data can be modified through `flatMap`

Functor
- a box that stores data and without side-effects
- boxing with a factory method `of`
- data can be modified through `map`
### Application
Equivalence of monad/functors statements
```java
m.map(x -> f(x)).map(x -> g(x)) <==> m.flatMap(x -> Monad.of(f(x))).flatMap(x -> Monad.of(g(x))) // implementation of map as flatMap(x -> Monad.of(f.transform(x)))
                                <==> m.flatMap(x -> Monad.of(f(x)).flatMap(x -> Monad.of(g(x)))) // associative law
                                <==> m.flatMap(x -> Monad.of(g(f(x))) // left identity law
                                <==> m.map(x -> g(f(x))) // implementation of map
```

Implementations of flatMap
```java
class IntMonad {
	private int v; 
	
	private IntMonad(int v) { 
		this.v = v; 
	} 
	
	static IntMonad of(int v) { 
		return new IntMonad(v); 
	} 
	
	IntMonad flatMap(Function<Integer, IntMonad> map) { 
		.. 
	} 
}

// (a) 
return IntMonad.of(this.v); // flatMap ignores the function passed to it
// Left Identity(violated)
IntMonad.of(i).flatMap(f)                    IntMonad.of(i) // doesn't apply the function
f.apply(i)

// Right Identity(holds)
monad.flatMap(x -> IntMonad.of(x))           monad
monad

// Associative Law(holds)
monad.flatMap(f).flatMap(g)                  monad
monad.flatMap(x -> f.apply(x).flatMap(g))    monad

// (b) 
return map.apply(Math.max(0, this.v)); // funky when v < 0
// Left Identity(violated)
IntMonad.of(i).flatMap(f)                    f.apply(Math.max(0, i)) // violated when i < 0
f.apply(i)

// Right Identity(violated)
monad.flatMap(x -> IntMonad.of(x))           IntMonad.of(Math.max(0, monad.v)) // violated when v < 0
monad

// Associative Law(holds)
monad.flatMap(f).flatMap(g)                  g.apply(Math.max(0, f.apply(Math.max(0, monad.v)).v)) // g(f(0)) when v < 0
monad.flatMap(x -> f.apply(x).flatMap(g))    g.apply(Math.max(0, f.apply(Math.max(0, monad.v)).v))

// (c) 
return IntMonad.of(2 * map.apply(this.v).v);
// Left Identity(violated)
IntMonad.of(i).flatMap(f)                    IntMonad.of(2 * f.apply(i).v)    2f(i)
f.apply(i)                                                                    f(i)

// Right Identity(violated)
monad.flatMap(x -> IntMonad.of(x))           IntMonad.of(2 * IntMonad.of(monad.v).v)
monad

// Associative Law(violated)
monad.flatMap(f).flatMap(g)                  IntMonad.of(2 * f.apply(monad.v).v).flatMap(g) ==> IntMonad.of(2 * g.apply(IntMonad.of(2 * f.apply(monad.v).v).v).v)    2g(2f(i))
monad.flatMap(x -> f.apply(x).flatMap(g))    IntMonad.of(2 * f.apply(monad.v).flatMap(g).v) ==> IntMonad.of(2 * IntMonad.of(2 * g.apply(f.apply(monad.v).v).v).v)    2(2f(g(i)))
```

Testing monad
```java
class FlatMapCount<T>{
	private T value; 
	private int count; 
	
	public FlatMapCount(T value, int count) { 
		this.value = value; 
		this.count = count; 
	} 
	
	public static <S> FlatMapCount<S> of(S value) { 
		return new FlatMapCount<>(value, 0); 
	} 
	
	public FlatMapCount<T> flatMap(Transformer<T, FlatMapCount<T>> map) { 
		FlatMapCount<T> tempFMC = map.transform(this.value); 
		return new FlatMapCount<>(tempFMC.value, tempFMC.count + this.count + 1); 
	} 
	
	public String toString() { 
		return "[" + this.value + ", " + this.count + "]"; 
	} 
}

Transformer<Integer, FlatMapCount<Integer>> mapper1 = x -> new FlatMapCount<>(x + 1, 1); 
Transformer<Integer, FlatMapCount<Integer>> mapper2 = x -> new FlatMapCount<>(2 * x, 1); 

with monad = FlatMapCount.of(2)

// Left Identity(violated)                                                                                 mapper1       mapper2
FlatMapCount.of(i).flatMap(mapper)        new FlatMapCount<>(mapper.transform(i).value, .count + 0 + 1)    (i + 1, 2)    (2 * i, 2)
mapper.transform(i)                                                                                        (i + 1, 1)    (2 * i, 1)

// Right Identity(violated)
monad.flatMap(x -> FlatMapCount.of(x))    new FlatMapCount<>(FlatMapCount.of(monad.value).value, .count + monad.count + 1)    (2, 2)
monad                                                                                                                         (2, 1)

// Associative Law(holds)
monad.flatMap(mapper1).flatMap(mapper2)                      (2, 0) -> (3, 2) -> (6, 4)
monad.flatMap(x -> mapper1.transform(x).flatMap(mapper2))    (2, 0) -> ((3, 1) -> (6,3)) -> (6, 4)
```

Loggable
```java
class Loggable<T> {
	private final T value;
	private final String log;
	
	private Loggable(T value, String log) {
	    this.value = value;
	    this.log = log;
	}
	
	public static <T> Loggable<T> of(T value) {
	    return new Loggable<>(value, ""); // satisfies left identity law
	    return new Loggable<>(value, "Logging starts: "); // violates left identity law
	    // left identity law
	    Monad.of(x)
	    Loggable.of(1)                            1 "Logging starts: "
	    ".flatMap(x -> new A(x + 1, "add 1;"))    2 "Logging starts: add 1;"
		
		f(x)
		new A(1 + 1, "add 1;")                    2 "add 1;" // not same
	}
	
	public <R> Loggable<R> flatMap(Transformer<? super T, ? extends Loggable<? extends R>> transformer) {
	    Loggable<? extends R> logger = transformer.transform(this.value);
	    return new Loggable<>(logger.value, logger.log + this.log); // satisfies right identity law
	    return new Loggable<>(logger.value, logger.log + this.log + "\n"); // violates right identity law
	    // right identity law
	    monad
	    Loggable.of(1).flatMap(x -> new A(x + 1, "add 1;"))    2 "add 1;\n"
		
		flatMap(x -> Monad.of(x))
	    Loggable.of(2)                                         2 ""
	    monad.flatMap(x -> Loggable.of(2))                     2 "add 1;\n\n" // not same
	}
	
	public String toString() {
	    return "value: " + this.value + ", log: " + this.log;
	}
}
```

Box
```java
/**
 * A generic box storing an item.
 * CS2030S Exercise 4
 * AY23/24 Semester 2
 *
 * @author Sebastien Leib (10L)
 */
class Box<T> {
  private static final Box<?> EMPTY_BOX = new Box<>(null);
  private final T item;

  private Box(T item) {
    this.item = item;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj instanceof Box<?>) {
      // obj can be safely cast to Box<T>
      @SuppressWarnings("unchecked")
      Box<T> b = (Box<T>) obj;
      if (this.isPresent()) {
        return this.item.equals(b.item);
      } else {
        return b.item == null;
      }
    } else {
      return false;
    }
  }

  @Override
  public String toString() {
    return String.format("[%s]", this.item != null ? this.item.toString() : "");
  }

  public static <T> Box<T> of(T item) {
    if (item == null) {
      return null;
    } else {
      return new Box<T>(item);
    }
  }

  public static <T> Box<T> empty() {
    // Box<?> with null can be safely cast to Box<T>
    @SuppressWarnings("unchecked")
    Box<T> empty = (Box<T>) Box.EMPTY_BOX;
    return empty;
  }

  public boolean isPresent() {
    return this.item != null;
  }

  public static <T> Box<T> ofNullable(T item) {
    if (item == null) {
      return Box.empty();
    } else {
      return Box.of(item);
    }
  }

  public Box<T> filter(BooleanCondition<? super T> condition) {
    if (!this.isPresent() || condition.test(this.item)) {
      // if empty or test passes return itself
      return this;
    } else {
      return Box.<T>empty();
    }
  }

  public <U> Box<U> map(Transformer<? super T, U> transformer) {
    if (this.isPresent()) {
      return new Box<U>(transformer.transform(this.item));
    } else {
      return Box.<U>empty();
    }
  }
}
```

Maybe
```java
/**
 * CS2030S Lab 5
 * AY23/24 Semester 2
 *
 * @author Sebastien Leib (10L)
 */
package cs2030s.fp;

import java.util.NoSuchElementException;

public abstract class Maybe<T> {
  private static final Maybe<?> none = new None();

  private static class None extends Maybe<Object> {
    @Override
    public String toString() {
      return "[]";
    }

    @Override
    public boolean equals(Object obj) {
      return obj instanceof Maybe.None;
    }

    @Override
    protected Object get() {
      throw new NoSuchElementException();
    }

    @Override
    public Maybe<Object> filter(BooleanCondition<? super Object> cond) {
      return Maybe.<Object>none();
    }

    @Override
    public <U> Maybe<U> map(Transformer<? super Object, ? extends U> trfrmer) {
      return Maybe.<U>none();
    }

    @Override
    public <U> Maybe<U> flatMap(Transformer<? super Object, ? extends Maybe<? extends U>> trfrmer) {
      return Maybe.<U>none();
    }

    @Override
    public Object orElse(Object t) {
      return t;
    }

    @Override
    public Object orElseGet(Producer<? extends Object> p) {
      return p.produce();
    }

    @Override
    public void ifPresent(Consumer<? super Object> c) {
      return;
    }
  }

  private static final class Some<T> extends Maybe<T> {
    private final T t;

    Some(T t) {
      this.t = t;
    }

    @Override
    public String toString() {
      return "[" + this.t + "]";
    }

    @Override
    public boolean equals(Object obj) {
      if (obj instanceof Maybe.Some<?>) {
        // Safe to type cast obj to Maybe.Some<?>
        @SuppressWarnings("unchecked")
        Maybe.Some<?> o = (Maybe.Some<?>) obj;
        if (this.t == null) {
          return o.t == null;
        }
        return this.t.equals(o.t);
      }
      return false;
    }

    @Override
    protected T get() {
      return this.t;
    }

    @Override
    public Maybe<T> filter(BooleanCondition<? super T> cond) {
      if (this.t != null && !cond.test(this.t)) {
        return Maybe.<T>none();
      }
      return this;
    }

    @Override
    public <U> Maybe<U> map(Transformer<? super T, ? extends U> trfrmer) {
      return Maybe.<U>some(trfrmer.transform(this.t));
    }

    @Override
    public <U> Maybe<U> flatMap(Transformer<? super T, ? extends Maybe<? extends U>> trfrmer) {
      // trfrmer would return Maybe<? extends U> which can be cast to Maybe<U>
      @SuppressWarnings("unchecked")
      Maybe<U> out = (Maybe<U>) trfrmer.transform(this.t);
      return out;
    }

    @Override
    public T orElse(T t) {
      return this.t;
    }

    @Override
    public T orElseGet(Producer<? extends T> p) {
      return this.t;
    }

    @Override
    public void ifPresent(Consumer<? super T> c) {
      c.consume(this.t);
    }
  }

  public static <T> Maybe<T> none() {
    // none, which is Maybe<?> can be cast to Maybe<T>
    @SuppressWarnings("unchecked")
    Maybe<T> out = (Maybe<T>) Maybe.none;
    return out;
  }

  public static <T> Maybe<T> some(T t) {
    return new Maybe.Some<T>(t);
  }

  public static <T> Maybe<T> of(T t) {
    if (t == null) {
      return Maybe.<T>none();
    }
    return Maybe.<T>some(t);
  }

  protected abstract T get();

  public abstract Maybe<T> filter(BooleanCondition<? super T> cond);

  public abstract <U> Maybe<U> map(Transformer<? super T, ? extends U> trfrmer);

  public abstract <U> Maybe<U> flatMap(
      Transformer<? super T, ? extends Maybe<? extends U>> trfrmer);

  public abstract T orElse(T t);

  public abstract T orElseGet(Producer<? extends T> p);

  public abstract void ifPresent(Consumer<? super T> c);
}
```