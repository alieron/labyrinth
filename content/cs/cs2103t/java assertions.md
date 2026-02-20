---
tags:
  - cs2103t/java
  - cs/software_eng
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2103t/refactoring
next: /labyrinth/notes/cs/cs2103t/uml_sequence_diagrams

---
### Concept
#### Assertions
- define assumptions about program state
- runtime verification that its true

```java
// basic
assert condition;

assert x != null;

// with expression, ususally treated as a message
assert condition : expression;

assert x != null : "x should not be null";
```
> use `java -ea` to enable assertions when running, they are disabled by default

Assertions vs [Exceptions](/labyrinth/notes/cs/cs2030s/java_exceptions)
- exception raised -> unusual condition created by the user
- assertions failure -> bug, programmer made a mistake in the code
#### Internal Invariants
- assumption to be checked
- with `else`:

```java
if (i % 3 == 0) {
	...
} else if (i % 3 == 1) {
	...
} else { 
	// We know (i % 3 == 2)
	assert i % 3 == 2 : i;
	...
}
```
- `switch`-`case` with no default

```java
switch(suit) {
case Suit.CLUBS:
	...
	break;

case Suit.DIAMONDS:
	...
	break;

case Suit.HEARTS:
	...
	break;

case Suit.SPADES:
	...
	break

default:
  assert false : suit;
}
```
#### Control-Flow Invariants
- a point of the code which should never be reached

```java
void foo() {
	for (...) {
		if (...)
			return;
	}
	assert false; // Execution should never reach this point!
}
```
#### Preconditions
- conditions that must be true when the method is invoked

```java
private void setRefreshInterval(int interval) {
	// Confirm adherence to precondition in nonpublic method
	assert interval > 0 && interval <= 1000/MAX_REFRESH_RATE : interval;
	
	... // Set the refresh interval
} 
```
> do not use on public methods, they have built in argument checks already
#### Postconditions
- conditions that must be true after the method completes successfully

```java
public BigInteger modInverse(BigInteger m) {
  if (m.signum <= 0)
    throw new ArithmeticException("Modulus not positive: " + m);
  ... // Do the computation
  assert this.multiply(result).mod(m).equals(ONE) : this;
  return result;
}
```
#### Class Invariants
- conditions that must be true about every instance of a class

```java
// Returns height if this tree is properly balanced, -1 otherwise
private int balanced() {
	int lHeight = this.left.balanced(); 
	int rHeight = this.right.balanced();
	if (lHeight == -1) return -1;
	if (rHeight == -1) return -1;
	if (Math.abs(lHeight - rHeight) > 1) return -1;
	return 1 + max(lHeight, rHeight); 
}

assert this.balanced() != -1;
```