---
tags:
  - cs2040s/chapter3
  - cs/abstract_data_types
complete: false
next: /labyrinth/notes/cs/cs2040s/priority_queue_ADT
prev: /labyrinth/notes/cs/cs2040s/DLL

---
### Summary
Circular array implementation - [arrays](/labyrinth/notes/cs/cs1101s/arrays)

|     |     |
| --- | --- |
|     |     |

[DLL](/labyrinth/notes/cs/cs2040s/DLL) implementation

|     |     |
| --- | --- |
|     |     |

[java.util.Dequeue](https://docs.oracle.com/javase/8/docs/api/java/util/Dequeue.html) interface
- [java.util.ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html) -> circular array 
- [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) -> DLL
### Concept

### Application
Kattis: [backspace](https://open.kattis.com/problems/backspace)
- stack behaviour for backspace
- queue behaviour for printing

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
PrintWriter pw = new PrintWriter(System.out);

Deque<Character> dq = new ArrayDeque<>();

for (char c : br.readLine().toCharArray()) // we need LIFO
	if (c == '<') 
		dq.removeFirst();
	else
		dq.addFirst(c);

while (!dq.isEmpty())
	pw.append(dq.removeLast()); // we need FIFO

pw.println();
pw.close();
```

Kattis: [integerlist](https://open.kattis.com/problems/integerlists)
- reversible queue

```java
ArrayDeque<Integer> dq = new ArrayDeque<>();

for (int j = 0; j < n; j++)
	dq.add(Integer.parseInt(numArr[j])); // add normally

boolean reversed = false;
for (char c : prog.toCharArray()) {
	if (c == 'R') {
		reversed = !reversed;
	} else {
		if (!dq.isEmpty()) {
			if (reversed) { // take from head or tail depending on reversed state
				dq.pollLast();
			} else {
				dq.pollFirst();
			}
		}
	}
}

StringJoiner sj = new StringJoiner(",", "[", "]");
while (!dq.isEmpty()) {
	int next = 0;
	if (reversed) {
		next = dq.pollLast();
	} else {
		next = dq.pollFirst();
	}
	sj.add(String.format("%d", next));
}
pw.println(sj.toString());

pw.close();
```
> use [StringJoiner](/labyrinth/notes/cs/cs2040s/utility_classes#^35facb) to handle the joining of strings separated by a delimter
