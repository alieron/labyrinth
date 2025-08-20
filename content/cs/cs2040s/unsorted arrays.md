---
tags:
  - cs2040s/chapter1
  - cs/data_structures
complete: false
prev: /labyrinth/notes/cs/cs2040s/compact_array

---
### Summary

### Concept

### Application
Finding min and max, $O(N)$
```java
int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
for (int x : A) {
    if (x < min) min = x;
    if (x > max) max = x;
}
System.out.println("Min = " + min + ", Max = " + max);
```

Naive duplicate detection, $O(N^2)$
```java
boolean hasDuplicate = false;

for (int i = 0; i < A.size(); i++) {
	for (int j = i + 1; j < A.size(); j++) {
		if (A.get(i).equals(A.get(j))) {
				hasDuplicate = true;
				System.out.println("Duplicate found: " + A.get(i));
		}
	}
}

if (!hasDuplicate) {
	System.out.println("No duplicates found.");
}
```