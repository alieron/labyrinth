---
tags:
- cs/paradigm
- cs2030s/chapter11
- lang/java
complete: false
prev: /labyrinth/notes/cs/cs2030s/monads_and_functors
next: /labyrinth/notes/cs/cs2030s/async
---

   

### Summary
Embarrassingly parallel
- each element/task can be processed independently of the others

Performance
- creating a thread to run a task incurs overhead, which may outweigh the benefit of parallelization
- using more cores/processors will speed things up
- an unordered stream pipeline would be faster

Interference
- stream operation modifies the source of the stream during execution of the terminal operator
- throws `ConcurrentModificationException`, irregardless if its a parallel or sequential stream
```java
List<String> list = new ArrayList<>(List.of(1, 2, 3));
list.stream()
    .peek(i -> {
	    if (i == 3) {
	        list.add(4); // modifies the source list
	    }
    })
    .forEach(i -> {});
```

Stateful
- lambda's that capture a mutable variable and rely on it for output are stateful
- the variable might change during the execution of the stream
- need to ensure that state updates are visible to all parallel subtasks

[Side effects](/labyrinth/notes/cs/cs2030s/functional_interfaces#^cdd19a)
- modifications to non-thread-safe data structures such as `CopyOnWriteArrayList`
```java
List<Integer> list = new ArrayList<>(
    Arrays.asList(1,3,5,7,9,11,13,15,17,19));
List<Integer> result = new ArrayList<>();

list.parallelStream()
    .filter(x -> isPrime(x))
    .forEach(x -> result.add(x)); // ArrayList is non-thread-safe, if two threads try to add at the same time, it might return an incorrect result

// instead
list.parallelStream()
    .filter(x -> isPrime(x))
    .collect(Collectors.toList()) // Stream::collect

List<Integer> result = new CopyOnWriteArrayList<>(); // thread-safe list from java.util.concurrent
list.parallelStream()
    .filter(x -> isPrime(x))
    .forEach(x -> result.add(x));

list.parallelStream()
    .filter(x -> isPrime(x))
    .toList() // Stream::toList Java 21
```

Parallel reduce
- stream is broken up into chunks, that are reduced sequentially `accumulator` against `identity`
- the reduced "chunks" are then combined with the `combiner`
```java
Stream<T> {
<U> U reduce(U identity,
             BiFunction<U,? super T,U> accumulator,
             BinaryOperator<U> combiner)
} // if no combiner is provided, the accumulator is used as the combiner
```

Criteria for parallelization
- main idea -> we want the final value to be the same regardless of what order they are combined/accumulated
```java
(a + b) + (c + d) = (a + (b + c + d)) = ...
```

1. Nilpotence of identity
```java
combiner.apply(identity, u) <==> u
```
> identity is usually 0 when dealing with + and 1 when dealing with *

2. Combiner and accumulator must be associative
	- `combiner` may not be run in order, hence it has to be associative
	- `accumulator` will be run in order within a chunk, but any extra operations done to the accumulate(statefulness) would not be preserved between chunks, so it has to either be associative or non-accumulative, ie. counters(x -> x + 1)

3. Combiner and accumulator are compatible
```java
combiner.apply(u, accumulator.apply(identity, t)) <==> accumulator.apply(u, t)
```

Ordering in parallel streams
- `limit`, `skip` and `findFirst` are expensive on parallel ordered streams, need to coordinate between "chunks" to maintain encounter order
```java
// produce ordered streams
Stream::iterate 
List::stream // lists are ordered
Stream::of

// produce unordered streams
Stream::generate
Set::stream // sets are unordered
```

### Concept
Sequential
- step by step execution

Concurrent
- in order, but switching between tasks very fast
- different threads
![[concurrent.png|600]]

Parallel
- multiple processes running simultaneously
- requires multiple cores/precessors
- parallel programs are concurrent
![[parallel.png|600]]

Parallel [stream](/labyrinth/notes/cs/cs2030s/streams_II)
- operations must not interfere with data in the stream
- mostly stateless
- minimal side effects
```java
// intermediate operation
Stream::parallel
// lazily converts the stream pipeline into a parallel stream

Stream::sequential
// lazily converts the stream pipeline into a sequential stream
```
> last call gets the say for parallel/sequential

### Application
Measure performance using Instant and Duration
```java
Instant start = Instant.now();
long howMany = IntStream.range(2_000_000, 3_000_000)
                        .filter(x -> isPrime(x))
                        .parallel()
                        .count();
Instant stop = Instant.now();
System.out.println(howMany + " " + Duration.between(start,stop).toMillis() + " ms");
```

Checking for parallizable reduce
```java
stream.reduce(0, (x, y) -> x + 1, (x, y) -> x + y);
// 1. c(0, u) = 0 + u <==> u   identity=0 is nilpotent in combiner
// 2. combiner is associative, accumulator is a counter
// 3. c(u, a(0, t)) = u + (0 + 1) <==> a(u, t) = u + 1    combiner is compatible with accumulator

stream.reduce(0, (a, x) -> (2 * a) + x, (a1, a2) -> a1 + a2); 
// 1. c(0, u) = 0 + u <==> u    identity=0 is nilpotent
// 2. combiner is associative, accumulator is not associative
// 3. c(u, a(0, t)) = u + t <!=> a(u, t) = 2 * u + t    incompatible

stream.reduce(1, (x, y) -> x + y); // accumulator is used as combiner
// 1. c(1, u) = 1 + u <!=> u    identity=1 is not nilpotent
// 2. combiner and accumulator are associative
// 3. c(u, a(1, t)) = u + 1 + t <!=> a(u, t) = u + t    incompatible
```

Ordering in parallel streams
```java
// sequential
Stream.iterate(0, i -> i + 1)
	.limit(20) // first 20
	.forEach(i -> {System.out.print(i + " ");})
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 
// order is preserved in terminal operation

// parallel
Stream.iterate(0, i -> i + 1)
	.parallel()
	.limit(20) // limit respects the encounter order
	.forEach(i -> {System.out.print(i + " ");})
// 17 14 2 5 15 4 13 7 12 6 19 9 8 1 10 18 16 0 11 3 
// order is not preserved(not consistent), ordered by the thread which finishes first
	.forEachOrdered(i -> {System.out.print(i + " ");})
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 
// encounter order is preserved, not the same as sorting

// parallel unordered
Stream.iterate(0, i -> i + 1)
	.parallel()
	.unordered()
	.limit(20) // no longer constrained by order
	.forEach(i -> {System.out.print(i + " ");})
// 640 2304 641 2305 642 2306 643 2307 644 2308 645 2309 646 2310 647 2311 648 2312 649 2313 
// first 20 that finished first
	.forEachOrdered(i -> {System.out.print(i + " ");})
// 320 321 576 640 641 642 643 644 704 832 896 897 898 899 900 901 902 903 904 905 
// encounter order is preserved for the first 20 that finish
```

Preserving encounter order is not sorting
```java
Stream.iterate(0, i -> i - 1)
	.parallel() // parallel ordered
	.limit(20)
	.sorted() // sorts in ascending order, ie. reverses this stream
	.forEachOrdered(i -> {System.out.print(i + " ");})
// -19 -18 -17 -16 -15 -14 -13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 
```

###### Extra

$$
\verb|combiner.apply(identity, i)|\equiv \verb|i|
$$
```java
combiner.apply(u1, accumulator(u2, t)) <==> combiner.apply(accumulator(u1, t), u2)
```

