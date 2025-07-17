---
tags:
  - cs/data_structures
  - cs1101s/chapter2
  - lang/js
complete: true
index:
---

### Summary
Concept of linked lists, data & ptr to next node
```js
const x = pair(1, pair(null, pair(2, null)));
// or
const x = list(1, null, 2);

// Box notation: [1, [2, [3, null]]]
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=2em and 3.5em}}
\newcommand\ptr[2]%
  {
    \draw[arrows={-Latex}] (#1.center)--(#2);
  }
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }
\newcommand\pair[4][]%
  {
    \node[draw,cell,#1] (#2) {#3};
    \node[draw,cell,anchor=west] (#2tail) at (#2.east) {#4};
  }
% 
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (start) {$x$};
  \pair[right=of start]{p1}{1}{}
  \pair[right=of p1]{p2}{}{}
  \pair[right=of p2]{p3}{2}{}
  \ptr{p1tail}{p2}
  \ptr{p2tail}{p3}
  \draw[arrows={-Latex}] (start.east)--(p1);
  \pnull{p2}
  \pnull{p3tail}
\end{tikzpicture}
\end{document}
```

Shortcuts
```js
map(f, null) => null
map(f, list(null)) => list(f(null))

append(null, null) => null
append(list(a), null) => list(a)

enum_list(0, n-1) => list(0,...,n-1) : length = n
enum_list(1, n) => list(1,...,n) : length = n
build_list(f, n) => list(f(0),...f(n-1)) : length = n

for_each(f, xs) // like map but doesn't return a list
filer(pred, xs) // preserves true only
accumulate(f, initial, null) => initial
accumulate(f, initial, list(a)) => f(a, initial)
```

### Concept
A list is either:
- _null_ 
- or a pair, whose tail is a list(ie. tail can be null also)

Think of it as a linked list, where each "node" contains the value(any type) of at the current index, and the pointer to the next node

| Example                         | is_list |
| ------------------------------- | ------- |
| null                            | true    |
| pair(1, null)                   | true    |
| pair(1, pair(2, null))          | true    |
| pair(1, pair(2, 3))             | false   |
| pair(pair(1, 2), pair(3, null)) | true    |
| pair(null, pair(null, null))    | true    |
Can be created using the list function
list(1, 2, 3) is the same as 

### Application
List Processing Summary Functions

| Function                   | Action                                                                                                                                                           | Visualise                            | Examples                                                                 |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| pair(x, y)                 | Makes a pair from `x` and `y`.                                                                                                                                   |                                      |                                                                          |
| head(p)                    | Returns the head (first component) of the pair `p`.                                                                                                              |                                      | head(pair(a,b)) -> a                                                     |
| tail(p)                    | Returns the tail (second component) of the pair `p`.                                                                                                             |                                      | head(pair(a,b)) -> b                                                     |
| is_null(xs)                | Returns true if `xs` is the empty list null, and false otherwise.                                                                                                |                                      | is_null(null) -> true, is_null(pair(1, null)) -> false                   |
| list(x1, x2,..., xn)       | Returns a list with n elements. The first element is `x1`, the second `x2`, etc.                                                                                 |                                      |                                                                          |
| length(xs)                 | Returns the length of the list `xs`.                                                                                                                             |                                      | length(list(1, 2)) -> 2                                                  |
| list_ref(xs, n)            | Returns the element of list `xs` at position `n`. (List indexing)                                                                                                |                                      | list_ref(list(1, 2), 0) -> 1                                             |
| append(xs, ys)             | Returns a list that results from appending the list `ys` to the list `xs`.                                                                                       |                                      | append(list(1, 2), list(3, 4)) -> list(1, 2, 3, 4)                       |
| reverse(xs)                | Returns new list containing the elements of `xs` in reverse order.                                                                                               |                                      | reverse(list(1, 2, 3)) -> list(3, 2, 1)                                  |
| map(f, xs)                 | Returns a list where unary function `f` is applied to each element in the list `xs`.                                                                             | list(f(x1), f(x2), ... f(xn))        | map(x => x * x, list(1, 2, 3)) -> lisr(1, 4, 9)<br>(Square each Element) |
| filter(pred, xs)           | Returns a list of the elements from `xs` that the unary function pred returns true from.                                                                         |                                      | filter(x => x % 2 === 0, list(1, 2, 3, 4)) -> list(2, 4)<br>(Even Only)  |
| accumulate(f, initial, xs) | Applies the binary function `f` to the nth element and `initial`, then to the (n-1)th<br>element and the previous result, etc, up until the 1st element of `xs`. | f(x1, f(x2, ... f(xn, initial) ... ) | accumulate((h, t) => h + t, 0, list(1, 2, 3)) -> 6<br>(Sum)              |
List processing functions
```js
function length(xs) { 
	return is_null(xs)            
		   ? 0             
		   : 1 + length(tail(xs));
}

function append(xs, ys) {     
	return is_null(xs)            
		   ? ys            
		   : pair(head(xs), append2(tail(xs), ys));
}

function reverse(xs) {
	function rev(xs, reversed) {
		return is_null(xs)
			   ? null
			   : rev(tail(xs),
				     pair(head(xs), reversed)));
	}
	return rev(xs, null);
}
```
Higher order list processing functions
```js
function map(f, xs) {
	return is_null(xs)            
		   ? null            
		   : pair(f(head(xs)), map(f, tail(xs)));
}

function filter(pred, xs) {
	return is_null(xs)
		   ? null            
		   : pred(head(xs))            
		   ? pair(head(xs), filter(pred, tail(xs)))            
		   : filter(pred, tail(xs));
} 

function accumulate(op, initial, xs) {     
	return is_null(xs)            
		   ? initial            
		   : op(head(xs),                  
				accumulate(op, initial, tail(xs)));
} 
```
Bonus
```js
function zip(xs, ys) {
	return is_null(xs) || is_null(ys)
		   ? null
		   : pair(pair(head(xs), head(ys)),
				  zip(tail(xs), tail(ys)));
}
```