---
tags:
  - cs2040s/chapter3
  - cs/abstract_data_types
complete: false
next: /labyrinth/notes/cs/cs2040s/queue_ADT
prev: /labyrinth/notes/cs/cs2040s/SLL

---
### Summary
Stack ADT
- last in first out(LIFO)

[Compact array](/labyrinth/notes/cs/cs2040s/compact_array) implementation

| Operation | Method            | Performance |
| --------- | ----------------- | ----------- |
| `push(v)` | insert after last | - $O(1)$    |
| `pop()`   | remove last       | - $O(1)$    |
| `peek()`  | get last          | - $O(1)$    |
Limitations
- fixed size issue

[SLL](/labyrinth/notes/cs/cs2040s/SLL) implementation

| Operation | Method           | Performance |
| --------- | ---------------- | ----------- |
| `push(v)` | insert at head   | - $O(1)$    |
| `pop()`   | remove from head | - $O(1)$    |
| `peek()`  | get head         | - $O(1)$    |
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=2em and 3.5em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here

  \node[draw,cell] (p1) {$a_1$};
  \node[draw,cell,right=of p1] (p2) {$a_2$};
  \node[right=of p2] (dots) {...};
  \node[draw,cell,right=of dots] (p3) {$a_n$};
  
  \draw[arrows={-Latex}] (p1)--(p2);  
  \draw[arrows={-Latex}] (p2)--(dots);     
  \draw[arrows={-Latex}] (dots)--(p3);     
  
  \node[below=of p1] (head) {head};
  \draw[arrows={-Latex}] (head.north)--(p1);  
  \node[below=of p3] (tail) {tail};
  \draw[arrows={-Latex}] (tail.north)--(p3);
  
  \node[above= of p1,xshift=-0.5cm] (in) {in};
  \draw[arrows={-Latex}] (in)--(p1);  
  \node[above= of p1,xshift=0.5cm] (out) {out};
  \draw[arrows={-Latex}] (p1)--(out);
\end{tikzpicture}
\end{document}
```

Stack classes
- [java.util.Stack](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html) -> compact array
- [java.util.LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) -> DLL
### Concept
Stack operations
- `push(v)`
	- push `v` onto the top of the stack
- `pop()`
	- get the item on top of the stack and remove it
- `peek()`
	- get the item on top of the stack without removing it

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[draw,cell] (0) {};
  \node[draw,cell,below=of 0] (1) {4};
  \node[draw,cell,below=of 1] (2) {3};
  \node[draw,cell,below=of 2] (3) {2};
  \node[draw,cell,below=of 3] (4) {1};
  
  \node[left=of 0] (in) {in};
  \draw[arrows={-Latex}] (in)--(0);  
  \node[right=of 0] (out) {out};
  \draw[arrows={-Latex}] (0)--(out);
\end{tikzpicture}
\end{document}
```

### Application
Library implementation
```java
import jafa.util.Stack;

Stack<Integer> S = new Stack<>();

// push(v)
S.push(2); // [2]
S.push(3); // [3, 2]

// pop()
s.pop(); // 3, [2]

// peek()
s.peek(); // 2, [2]
```

Postfix evaluation
```java
// 4 3 * -> 4 * 3 = 12
// 3 4 2 * 4 + - -> 3 - ((4 * 2) + 4) = -9

Stack<Integer> stack = new Stack<>();

for (String token : input.split(" ")) {
	// check if token is a number or operator
	if (token.matches("-?\\d+")) {  
			stack.push(Integer.parseInt(token));
	} else {
		// pop the 2 operands
		int val1 = stack.pop();
		int val2 = stack.pop();

		switch (token) {
			case "+":
				stack.push(val2 + val1);
				break;
			case "-":
				stack.push(val2 - val1);
				break;
			case "*":
				stack.push(val2 * val1);
				break;
			case "/":
				stack.push(val2 / val1);
				break;
		}
	}
}
return stack.pop(); // assuming the input is valid
```

Lisp evaluation