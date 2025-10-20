---
tags:
  - cs2030s/chapter9
  - cs/functional_programming
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2030s/monads_and_functors
next: /labyrinth/notes/cs/cs2030s/parallelism
---
   

Succeeds: [streams](/labyrinth/notes/cs/cs1101s/streams)
### Summary
Terminal -> triggers the evaluation
Intermediate -> returns another `Stream`
Stateful -> stores information, might need to processes the whole stream before producing an output
Bounded -> only works on finite streams

Streams
- [java.util.Stream](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Stream.html)
- can only be operated once, even by intermediate operations
- best to use a single pipeline
```java
Stream<Integer> s = Stream.iterate(0, x -> x + 1);
s.map(x -> x * 2);
s.map(x -> x + x); // error, IllegalStateException
```

Reduce
- evaluates left-to-right, unlike [accumulate](/labyrinth/notes/cs/cs1101s/lists) from `cs1101s`
```java
Stream.iterate(1, i -> i + 1).limit(5).reduce(0, (x, y) -> 2 * x + y)
// 57 = 2(2(2(2(2(0)+1)+2)+3)+4)+5
```

Filter
- lazily keeps entries for which the predicate returns true

Map/flatMap
- lazily applies a function to all entries
- for flatMap the resulting stream is flattened into the current stream
### Concept
Factory methods
```java
Stream.generate(Supplier<T> s)
Stream.iterate(seed, Function<T, T> next)
Stream.empty()
Stream.of(T...)
Stream.concat(Stream<? extends T> a, Stream<? extends T> b)
```

Terminal operations
```java
Stream::head
Stream::tail

Stream::reduce
Stream::count
Stream::forEach
Stream::toList

// bounded, fails on infinite streams
Stream::anyMatch
Stream::noneMatch
Stream::allMatch
```

Intermediate operations
```java
Stream::filter
Stream::map
Stream::flatMap
Stream::peek

// truncating/short-circuiting
Stream::limit
Stream::takeWhile
Stream::skip

// bounded, fails on infinite streams
Stream::sorted 
Stream::distinct
```
### Application
isPrime
```java
// method implementation
boolean isPrime(int x) {
	for (int i = 2; i <= x - 1; i++) {
		if (x % i == 0) { // check if every integer in the range [2, x) is a multiple
			return false;
		}
	}
	return true;
}

boolean isPrime(int x) {
	return IntStream.range(2, x) // range from 2 to x-1
		.noneMatch(i -> x % i == 0);
}
```

InfiniteList
```java
package cs2030s.fp;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

public class InfiniteList<T> {

  private final Lazy<Maybe<T>> head;
  private final Lazy<InfiniteList<T>> tail;

  private static final InfiniteList<?> SENTINEL = new Sentinel();

  private InfiniteList() {
    this.head = null;
    this.tail = null;
  }

  // generates the head lazily
  public static <T> InfiniteList<T> generate(Producer<T> producer) {
    return new InfiniteList<>(
        Lazy.of(() -> Maybe.some(producer.produce())),
        Lazy.of(() -> InfiniteList.generate(producer)));
  }

  // generates the head eagerly
  public static <T> InfiniteList<T> iterate(T seed, Transformer<T, T> next) {
    return new InfiniteList<>(seed, () -> InfiniteList.iterate(next.transform(seed), next));
  }

  private InfiniteList(T head, Producer<InfiniteList<T>> tail) {
    this.head = Lazy.of(Maybe.some(head));
    this.tail = Lazy.of(tail);
  }

  private InfiniteList(Lazy<Maybe<T>> head, Lazy<InfiniteList<T>> tail) {
    this.head = head;
    this.tail = tail;
  }

  public T head() {
    // doesn't work since the arg is evaluated first, we only want it to evaluate if its Maybe.None
    // return this.head.get().orElse(this.tail.get().head());
    return this.head.get().orElseGet(() -> this.tail.get().head());
  }

  public InfiniteList<T> tail() {
    // funny thing to ensure that head has been evaluated first
    return this.head.get().map(x -> this.tail.get()).orElseGet(() -> this.tail.get().tail());
  }

  public <R> InfiniteList<R> map(Transformer<? super T, ? extends R> mapper) {
    return new InfiniteList<>(this.head.map(m -> m.map(mapper)), this.tail.map(i -> i.map(mapper)));
  }

  public InfiniteList<T> filter(BooleanCondition<? super T> predicate) {
    return new InfiniteList<>(
        this.head.map(m -> m.filter(predicate)), this.tail.map(i -> i.filter(predicate)));
  }

  private static final class Sentinel extends InfiniteList<Object> {
    // protected Sentinel() {
    //  super(Lazy.of(() -> Maybe.none()),
    //        Lazy.of(() -> InfiniteList.sentinel()));
    // }

    @Override
    public String toString() {
      return "-";
    }

    @Override
    public boolean isSentinel() {
      return true;
    }

    @Override
    public Object head() {
      throw new NoSuchElementException();
    }

    @Override
    public InfiniteList<Object> tail() {
      throw new NoSuchElementException();
    }

    @Override
    public <U> InfiniteList<U> map(Transformer<? super Object, ? extends U> mapper) {
      return InfiniteList.sentinel();
    }

    @Override
    public InfiniteList<Object> filter(BooleanCondition<? super Object> predicate) {
      return this;
    }

    @Override
    public InfiniteList<Object> limit(long n) {
      return this;
    }

    @Override
    public List<Object> toList() {
      return List.of();
    }

    @Override
    public InfiniteList<Object> takeWhile(BooleanCondition<? super Object> predicate) {
      return this;
    }

    @Override
    public <U> U reduce(U identity, Combiner<U, ? super Object, U> accumulator) {
      return identity;
    }
  }

  public static <T> InfiniteList<T> sentinel() {
    // SENTINEL, which is InfiniteList<?> can be cast to InfiniteList<T>
    @SuppressWarnings("unchecked")
    InfiniteList<T> out = (InfiniteList<T>) SENTINEL;
    return out;
  }

  public InfiniteList<T> limit(long n) {
    return n <= 0
        ? InfiniteList.sentinel()
        : new InfiniteList<>(
            this.head,
            Lazy.of(() -> this.tail.get().limit(this.head.get().map(v -> n - 1).orElse(n))));
  }

  public InfiniteList<T> takeWhile(BooleanCondition<? super T> predicate) {
    // true if predicate evaluates to true or is a filtered out element
    Lazy<Boolean> check = Lazy.of(() -> this.head.get().map(v -> predicate.test(v)).orElse(true));
    return new InfiniteList<>(
        Lazy.of(() -> check.get() ? this.head.get() : Maybe.none()),
        Lazy.of(
            () -> check.get() ? this.tail.get().takeWhile(predicate) : InfiniteList.sentinel()));
  }

  public boolean isSentinel() {
    return false;
  }

  public <U> U reduce(U identity, Combiner<U, ? super T, U> accumulator) {
    return this.tail
        .get()
        .reduce(
            this.head.get().map(v -> accumulator.combine(identity, v)).orElse(identity),
            accumulator);
  }

  public long count() {
    return this.reduce(0L, (x, y) -> x + 1L);
  }

  public List<T> toList() {
    List<T> list = new ArrayList<>();
    InfiniteList<T> inf = this;
    while (!inf.isSentinel()) {
      // System.out.println(inf.head());
      inf.head.get().ifPresent(list::add);
      inf = inf.tail.get();
    }

    return list;
  }

  public String toString() {
    return "[" + this.head + " " + this.tail + "]";
  }
}
```