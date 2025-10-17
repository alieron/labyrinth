---
tags:
  - cs2040s/chapter2
  - cs/abstract_data_types
  - lang/java
complete: false
next: /labyrinth/notes/cs/cs2040s/queue_ADT
prev: /labyrinth/notes/cs/cs2040s/SLL

---
### Summary
Stack ADT
- last in first out(LIFO)

[Compact array](/labyrinth/notes/cs/cs2040s/compact_array) implementation
- fixed size issue

| Operation | Method            | Performance |
| --------- | ----------------- | ----------- |
| `push(v)` | insert after last | - $O(1)$    |
| `pop()`   | remove last       | - $O(1)$    |
| `peek()`  | get last          | - $O(1)$    |
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[draw,cell] (0) {$a_1$};
  \node[draw,cell,right=of 0] (1) {$a_2$};
  \node[draw,cell,right=of 1,minimum width=2cm] (2){...};
  \node[draw,cell,right=of 2] (3) {$a_n$};
  
  \node[below=of 3] (head) {head};
  \draw[arrows={-Latex}] (head.north)--(3);  
  \node[below=of 0] (tail) {tail};
  \draw[arrows={-Latex}] (tail.north)--(0);
  
  \node[above= of 3,xshift=-0.5cm] (in) {in};
  \draw[arrows={-Latex}] (in)--(3);  
  \node[above= of 3,xshift=0.5cm] (out) {out};
  \draw[arrows={-Latex}] (3)--(out);
\end{tikzpicture}
\end{document}
```

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

Library implementation
```java
import java.util.Stack;

Stack<Integer> st = new Stack<>();
// or

// push(v)
st.push(2); // [2]
st.push(3); // [3, 2]

// pop()
st.pop(); // 3, [2]

// peek()
st.peek(); // 2, [2]

// check if stack is empty
st.empty(); // false

// number of elements in the stack
st.size(); // 1
```
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

Monotonic stack
- preserve sorting order when pushing and poping

```java
// monotonic increasing stack
while (!st.empty() && st.peek() > e) // pop the top if its larger 
	st.pop();
	
st.push(e);

// or
if (e > st.peek()) // push only if larger
	st.push(e);
```
### Application
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
- parse tokens into a stack
- when a closing bracket is encountered, pop operands and operator until opening bracket

Leetcode: [Max Chunks To Make Sorted II](https://leetcode.com/problems/max-chunks-to-make-sorted-ii)
- monotonic increasing stack
- [greedy](/labyrinth/notes/cs/cs2040s/greedy_algorithms) maximum

```java
// test inputs: [5,4,3,2,1], [2,1,3,4,4], [0,0,1,1,1], [1,0,1,3,2], [1,1,0,0,1]
Stack<Integer> st = new Stack<>();

for (int i = 0; i < arr.length; i++) {
	int max = arr[i];

	while (!st.empty() && st.peek() > arr[i]) // monotonic increasing stack
		max = Math.max(max, st.pop()); // greedy: keep track of the max

	st.push(max);
}
// resulting stacks: [5], [4,4,3,2], [1,1,1,0,0], [1,1,3], [1,1]
return st.size();
```

Leetcode: [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums)
- monotonic increasing stack

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta,decorations.pathreplacing}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[draw,cell] (0) {8};
  \node[draw,cell,right=of 0] (1) {3};
  \node[draw,cell,right=of 1] (2) {9};
  \node[draw,cell,right=of 2] (3) {5};
  \node[draw,cell,right=of 3] (4) {4};
  \node[draw,cell,right=of 4] (5) {6};
  \node[draw,cell,right=of 5] (6) {2};
  
  \node[below=0.5cm of 1] (x) {};
  \draw[->] (x) -- (1); 
  
	\draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (0.south west) -- (0.south east) node[midway,below=6pt] {1 + 1};
	\draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (2.south west) -- (5.south east) node[midway,below=6pt] {4 + 1};
    
  \node[draw,cell,below=2cm of 0] (10) {8};
  \node[draw,cell,right=of 10] (11) {3};
  \node[draw,cell,right=of 11] (12) {9};
  \node[draw,cell,right=of 12] (13) {5};
  \node[draw,cell,right=of 13] (14) {4};
  \node[draw,cell,right=of 14] (15) {6};
  \node[draw,cell,right=of 15] (16) {2};
  
  \node[below=0.5cm of 14] (x) {};
  \draw[->] (x) -- (14); 
  
	\draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (12.south west) -- (13.south east) node[midway,below=6pt] {2 + 1};
	\draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (15.south west) -- (15.south east) node[midway,below=6pt] {1 + 1};
\end{tikzpicture}
\end{document}
```
```java
// test input: [8,3,9,5,4,6,2]
// arrays with 3 as the minimum: (1+1) * (4+1) = 10
// [8,3,9,5,4,6]
// [8,3,9,5,4]
// [8,3,9,5]
// [8,3,9]
// [8,3]
//   [3,9,5,4,6]
//   [3,9,5,4]
//   [3,9,5]
//   [3,9]
//   [3]
//
// arrays with 4 as the minimum: (2+1) * (1+1) = 6
// [9,5,4,6]
// [9,5,4]
//   [5,4,6]
//   [5,4]
//     [4,6]
//     [4]

int n = arr.length;
int[] prev = new int[n], next = new int[n];

Stack<Integer> st = new Stack<>();

// for every element, find the first element to the left that is smaller or equal
for (int i = 0; i < n; i++) {
	while (!st.empty() && arr[st.peek()] > arr[i])
		st.pop();
	prev[i] = st.empty() ? i + 1 : i - st.peek();
	st.push(i);
}

st.clear();

// for every element, find the first element to the right that is smaller
for (int i = n - 1; i >= 0; i--) {
	while(!st.empty() && arr[st.peek()] >= arr[i])
		st.pop();
	next[i] = st.empty() ? n - i : st.peek() - i;
	st.push(i);
}

int mod = (int) 1e9 + 7;
long sum = 0;

for (int i = 0; i < n; i++) {
	sum += (long) (prev[i] * next[i]) % mod * arr[i] % mod;
	sum %= mod;
}

return (int) sum;
```