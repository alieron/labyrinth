---
tags:
  - cs2040s/chapter2
  - cs/data_structures
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/list_ADT
next: /labyrinth/notes/cs/cs2040s/stack_ADT

---
Succeeds: [lists](/labyrinth/notes/cs/cs1101s/lists)
### Summary
Singly linked list
- implements [list ADT](/labyrinth/notes/cs/cs2040s/list_ADT)

| Operation     | Method                                | Performance                                                                                                                                                                                      |
| ------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `get(i)`      | list traversal                        | - $O(1)$, first element<br>- $O(n)$, last element                                                                                                                                                |
| `search(v)`   | linear search                         | - $O(1)$, first element <br>- $O(n)$, last element/not found                                                                                                                                     |
| `insert(i,v)` | traverse the list and insert the node | - $O(1)$, insert at head, shift head pointer<br>- $O(1)$, insert into empty list, need to set the tail pointer<br>- $O(n)$, insert in between<br>- $O(1)$, insert after tail, shift tail pointer |
| `remove(i)`   | traverse the list and remove the node | - $O(1)$, remove at head<br>- $O(n)$, remove in between<br>- $O(n)$, remove at tail, traverse list to set tail pointer                                                                           |

Strengths
- fast insertion and extraction at the head
- fast insertion at the tail
- overcomes compact array's fixed size issue

Limitations
- indexing requires traversal
- slow extraction from tail
### Concept
Data structure
- series of nodes
- pointer to next node
- non-contiguous

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
\end{tikzpicture}
\end{document}
```
```java
class Node {
	Object data;
	Node next;
}
```
### Application
Leetcode: [Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)
- naive double traversal

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
public ListNode deleteMiddle(ListNode head) {
	int idx = Math.floorDiv(length(head, 1), 2); // O(n)
	removeNode(head, idx - 1); // O(n)
	if (idx == 0)
		return null;
	else
		return head;
}

public int length(ListNode node, int length) {
	if (node.next != null)
		return length(node.next, ++length);
	else
		return length;
}

public void removeNode(ListNode node, int idx) {
	if (idx > 0)
		removeNode(node.next, --idx);
	else if (node.next != null && node.next.next != null)
		node.next = node.next.next;
	else
		node.next = null;
}
```

- two pointer approach(slow and fast)

```java
public ListNode deleteMiddle(ListNode head) {
	if (head == null || head.next == null) return null; // empty or single item case
	ListNode slow = head, fast = head.next.next;
	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	slow.next = slow.next.next;
	return head;
}
```