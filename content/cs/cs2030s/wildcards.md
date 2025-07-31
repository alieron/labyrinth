---
tags:
- cs2030s/chapter6
- cs/oop
- lang/java
complete: true
prev: /labyrinth/notes/cs/cs2030s/generics
next: /labyrinth/notes/cs/cs2030s/immutable_classes
---
   
### Summary
PECS
- *producer extends; consumer super*
- when to use the upper/lower bounded wildcards
- producer can produce `T` so it can produce any subtype, since the base information is still there
- consumer can store `T` so it can store any supertype, 

Upper-bounded wildcard
- `?` can be substituted for a subtype of `T`
- mimicking covariance
```java
L<? extends A>
```
$$
\begin{gather*}
& \verb|L<A>| <: \verb|L<? extends A>| \\
\\
\text{Covariance:} \quad & \verb|B|<:\verb|A| \\
& \verb|L<B>|<:\verb|L<? extends B>| <: \verb|L<? extends A>| \\
\\
& \verb|L<B>| <: \verb|L<? extends A>| & \verb|B|\text{ can replace }\verb|?|\\
& \verb|L<A>| \centernot{<:} \verb|L<? extends B>| & \verb|A|\text{ cannot replace }\verb|?|
\end{gather*}
$$
![[extends.png]]

Lower-bounded wildcard
- `?` can be substituted for a supertype of `T`
- mimicking contravariance
```java
A<? super T>
```
$$
\begin{gather*}
& \verb|L<A>| <: \verb|A<? super T>| \\
\\
\text{Contravariance:} \quad & \verb|B|<:\verb|A| \\
& \verb|L<T>|<:\verb|L<? super A>| <: \verb|L<? super B>| \\
\\
& \verb|L<A>| <: \verb|L<? super B>| & \verb|A|\text{ can replace }\verb|?|\\
& \verb|L<B>| \centernot{<:} \verb|L<? super A>| & \verb|B|\text{ cannot replace }\verb|?|
\end{gather*}
$$
![[super.png]]
### Concept
Java generics classes are [invariant](/labyrinth/notes/cs/cs2030s/wrapper_classes#^f8f5bb)
$$
\verb|L<A>| \centernot{<:} \verb|L<B>| \quad \text{and} \quad \verb|L<B>| \centernot{<:} \verb|L<A>|
$$

Unbounded wildcard
- `?` can be substituted for any type
```java
L<?>
```
$$
\begin{gather*}
\verb|L<A>|<:\verb|L<?>| \\
\\
\verb|L<? extends A>|<:\verb|L<?>| \\
\verb|L<? super A>|<:\verb|L<?>| \\
\end{gather*}
$$

Diamond operator
- not a [rawtype](/labyrinth/notes/cs/cs2030s/generics#^790451), has angled brackets
- makes code less verbose
- Java will figure out what types to put in
```java
L<A> a = new L<>();
```

Type inference
- infer type argument automatically
- if there are multiple, pick the most [specific](/labyrinth/notes/cs/cs2030s/polymorphism#^cc9566) one
### Application
Sequence, copying
```java
class Seq<T> {
	...

	public void copyFrom(Seq<? extends T> src) { // accepts all Seq<S> where S<:T
		int len = Math.min(this.array.length, src.arracy.length);
		for (int i = 0; i < len; i++ ) {
			this.set(i, src.get(i)); // src is used to produce, hence extends
		}
	}

	public void copyTo(Seq<? super T> dest) { // accepts all Seq<S> where T<:S
		int len = Math.min(this.array.length, src.arracy.length);
		for (int i = 0; i < len; i++ ) {
			dest.set(i, this.get(i)); // something is done to dest, dest consumes, hence super
		}
	}
}

// Circle <: Shape
Seq<Shape> shapes = new Seq<>(1);
Seq<Circle> circles = new Seq<>(1);

shapes.copyFrom(circles); // works, Seq<Circle> <: Seq<? extends Shape>
shapes.copyTo(circles);   // error, Seq<Circle> </: Seq<? super Shape>

circles.copyFrom(shapes); // error, Seq<Shape> </: Seq<? extends Circle>
circles.copyTo(shapes);   // works, Seq<Shape> <: Seq<? super Circle>
```

Type inference, solve for constrains on `T`
```java
...<T>
... boolean contains(T[] seq, T obj)

A.contains(stringArray, 123); // String[], Integer
```
$$
\begin{align*}
1. &&& \verb|T|<:\verb|Object| && \text{(Unbounded type argument }\verb|T|\text{)} \\
2. &&& \verb|String[]| <: \verb|T[]| && \text{(Method invocation, arg 1)} \\
&& \therefore \ & \verb|String|<: \verb|T| && \text{(Covariance)} \\
3. &&& \verb|Integer| <: \verb|T| && \text{(Method invocation, arg 2)} \\
\\
&&& \verb|String|<:\verb|T|<:\verb|Object|, \ \verb|Integer|<:\verb|T|<:\verb|Object| \\
&&& \verb|T|: \ \verb|Object|
\end{align*}
$$

```java
... <T extends GetAreable>
... T findLargest(Seq<? extends T> seq)

Shape s = A.findLergest(new Seq<Circle>(0));
```
$$
\begin{align*}
\text{Known:} &&& \verb|Shape| <: \verb|GetAreable| \\
\\
1. &&& \verb|T|<:\verb|Shape| && \text{(Target typing)} \\
2. &&& \verb|T| <: \verb|GetAreable| && \text{(Bounded type argument }\verb|T|\text{)} \\
3. &&& \verb|Seq<Circle>| <: \verb|Seq<? extends T>| && \text{(Method invocation, arg 1)} \\
&& \therefore \ & \verb|Circle|<: \verb|T| && \text{(Upper-bounded wildcard)} \\
\\
&&& \verb|Circle|<:\verb|T|<:\verb|Shape|<:\verb|GetAreable| \\
&&& \verb|T|: \ \verb|Circle|
\end{align*}
$$

```java
... <T extends GetAreable>
... T findLargest(Seq<? extends T> seq)

ColoredCircle s = A.findLergest(new Seq<Circle>(0));
```
$$
\begin{align*}
\text{Known:} &&& \verb|ColoredCircle|<: \verb|Circle|<:\verb|Shape| <: \verb|GetAreable| \\
\\
1. &&& \verb|T|<:\verb|ColoredCircle| && \text{(Target typing)} \\
2. &&& \verb|T| <: \verb|GetAreable| && \text{(Bounded type argument }\verb|T|\text{)} \\
3. &&& \verb|Seq<Circle>| <: \verb|Seq<? extends T>| && \text{(Method invocation, arg 1)} \\
&& \therefore \ & \verb|Circle|<: \verb|T| && \text{(Upper-bounded wildcard)} \\
\\
&&& \verb|Circle|<:\verb|T|, \ \verb|T| <: \verb|ColoredCircle| <: \verb|Circle|<:\verb|Shape|<:\verb|GetAreable| \\
&&& \verb|T|: \ error
\end{align*}
$$

```java
... <S>
... boolean contains(Seq<? extends S> seq, S obj)

A.contains(shapeSeq, "Hello"); // Seq<Shape>, String
```
$$
\begin{align*}
1. &&& \verb|S|<:\verb|Object| && \text{(Unbounded type argument }\verb|T|\text{)} \\
2. &&& \verb|Seq<Shape>| <: \verb|Seq<? extends S>| && \text{(Method invocation, arg 1)} \\
&& \therefore \ & \verb|Shape|<: \verb|S| && \text{(Upper-bounded wildcard)} \\
3. &&& \verb|String| <: \verb|S| && \text{(Method invocation, arg 2)} \\
\\
&&& \verb|Shape|<:\verb|S|<:\verb|Object|, \ \verb|String|<:\verb|S|<:\verb|Object| \\
&&& \verb|S|: \ \verb|Object|
\end{align*}
$$