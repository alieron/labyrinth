---
tags:
  - cs2040s/chapter3
  - cs/data_structures
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/union-find_disjoint_sets
next: /labyrinth/notes/cs/cs2040s/balanced_BST

---
Succeeds: [trees(cs)](/labyrinth/notes/cs/cs1101s/trees(cs))
### Summary
Binary search tree(BST)
- implements [table ADT](/labyrinth/notes/cs/cs2040s/table_ADT)

| Operation   | Method         | Performance   |
| ----------- | -------------- | ------------- |
| `search(v)` | tree traversal | - $O(h)=O(n)$ |
| `insert(v)` | tree traversal | - $O(h)=O(n)$ |
| `remove(v)` | tree traversal | - $O(h)=O(n)$ |
- implements [priority queue ADT](/labyrinth/notes/cs/cs2040s/priority_queue_ADT)
- acts as both a max and min heap simultaneously

| Operation    | Method                    | Performance   |
| ------------ | ------------------------- | ------------- |
| `enqueue(v)` | insert into the tree      | - $O(h)=O(n)$ |
| `dequeue()`  | remove max/min, rebalance | - $O(h)=O(n)$ |

Inorder traversal
- left -> self -> right
- flattening into a sorted array
- BST sort

```java
void inOrder(TreeNode node) {
	if (node == null) return;
	inOrder(node.left);
	// visit the current node
	inOrder(node.right);
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex,label={[text=red]6}] at(0,0) (57) {57};
\node[vertex,label={[text=red]4}] at(-2,-1) (38) {38};
\node[vertex,label={[text=red]5}] at(-1,-2) (54) {54};
\node[vertex,label={[text=red]2}] at(-4,-2) (5) {5};
\node[vertex,label={[text=red]3}] at(-3,-3) (37) {37};
\node[vertex,label={[text=red]1}] at(-5,-3) (1) {1};
\node[vertex,label={[text=red]9}] at(3,-1) (86) {86};
\node[vertex,label={[text=red]10}] at(4,-2) (90) {90};
\node[vertex,label={[text=red]7}] at(1,-2) (71) {71};
\node[vertex,label={[text=red]8}] at(2,-3) (83) {83};

\draw [-, thick] (38) to (57);
\draw [-, thick] (86) to (57);
\draw [-, thick] (5) to (38);
\draw [-, thick] (54) to (38);
\draw [-, thick] (1) to (5);
\draw [-, thick] (37) to (5);
\draw [-, thick] (71) to (86);
\draw [-, thick] (90) to (86);
\draw [-, thick] (83) to (71);
\end{tikzpicture}
\end{document}
```

Preorder traversal
- self -> left -> right

```java
void preOrder(TreeNode node) {
	if (node == null) return;
	// visit the current node
	preOrder(node.left);
	preOrder(node.right);
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex,label={[text=red]1}] at(0,0) (57) {57};
\node[vertex,label={[text=red]2}] at(-2,-1) (38) {38};
\node[vertex,label={[text=red]6}] at(-1,-2) (54) {54};
\node[vertex,label={[text=red]3}] at(-4,-2) (5) {5};
\node[vertex,label={[text=red]5}] at(-3,-3) (37) {37};
\node[vertex,label={[text=red]4}] at(-5,-3) (1) {1};
\node[vertex,label={[text=red]7}] at(3,-1) (86) {86};
\node[vertex,label={[text=red]10}] at(4,-2) (90) {90};
\node[vertex,label={[text=red]8}] at(1,-2) (71) {71};
\node[vertex,label={[text=red]9}] at(2,-3) (83) {83};

\draw [-, thick] (38) to (57);
\draw [-, thick] (86) to (57);
\draw [-, thick] (5) to (38);
\draw [-, thick] (54) to (38);
\draw [-, thick] (1) to (5);
\draw [-, thick] (37) to (5);
\draw [-, thick] (71) to (86);
\draw [-, thick] (90) to (86);
\draw [-, thick] (83) to (71);
\end{tikzpicture}
\end{document}
```

Postorder traversal
- left -> right -> self

```java
void postOrder(TreeNode node) {
	if (node == null) return;
	postOrder(node.left);
	postOrder(node.right);
	// visit the current node
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex,label={[text=red]10}] at(0,0) (57) {57};
\node[vertex,label={[text=red]5}] at(-2,-1) (38) {38};
\node[vertex,label={[text=red]4}] at(-1,-2) (54) {54};
\node[vertex,label={[text=red]3}] at(-4,-2) (5) {5};
\node[vertex,label={[text=red]2}] at(-3,-3) (37) {37};
\node[vertex,label={[text=red]1}] at(-5,-3) (1) {1};
\node[vertex,label={[text=red]9}] at(3,-1) (86) {86};
\node[vertex,label={[text=red]8}] at(4,-2) (90) {90};
\node[vertex,label={[text=red]7}] at(1,-2) (71) {71};
\node[vertex,label={[text=red]6}] at(2,-3) (83) {83};

\draw [-, thick] (38) to (57);
\draw [-, thick] (86) to (57);
\draw [-, thick] (5) to (38);
\draw [-, thick] (54) to (38);
\draw [-, thick] (1) to (5);
\draw [-, thick] (37) to (5);
\draw [-, thick] (71) to (86);
\draw [-, thick] (90) to (86);
\draw [-, thick] (83) to (71);
\end{tikzpicture}
\end{document}
```
### Concept
Abstraction
- **BST property** ^867efa
	- nodes on the left are strictly smaller than the root
	- nodes on the right are strictly larger than the root
	- [3 high BST](https://visualgo.net/en/bst?mode=BST&create=57,38,86,5,54,71,90,1,37,83)

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] at(0,0) (57) {57};
\node[vertex] at(-2,-1) (38) {38};
\node[vertex] at(-1,-2) (54) {54};
\node[vertex] at(-4,-2) (5) {5};
\node[vertex] at(-3,-3) (37) {37};
\node[vertex] at(-5,-3) (1) {1};
\node[vertex] at(3,-1) (86) {86};
\node[vertex] at(4,-2) (90) {90};
\node[vertex] at(1,-2) (71) {71};
\node[vertex] at(2,-3) (83) {83};

\draw [-, thick] (38) to (57);
\draw [-, thick] (86) to (57);
\draw [-, thick] (5) to (38);
\draw [-, thick] (54) to (38);
\draw [-, thick] (1) to (5);
\draw [-, thick] (37) to (5);
\draw [-, thick] (71) to (86);
\draw [-, thick] (90) to (86);
\draw [-, thick] (83) to (71);
\end{tikzpicture}
\end{document}
```
> VisuAlgo's implementation has support for duplicates by storing the count alongside the value

Data structure
- pointer to the right and left children
- (sometimes) pointer to the parent

```java
class TreeNode {
	Object data;
	TreeNode left;
	TreeNode right;
}
```

Catalan number
- number of unique (unbalanced) tree structures with $n$ nodes

$$
C_{n} = \frac{(2n)!}{(n+1)!\cdot n!}
$$

Max/min
- max is the rightmost node
- min is the leftmost node
- BSTs can act as both a max and min heap simultaneously

Successor/predecessor
- [with child](https://visualgo.net/en/bst?mode=BST&create=6,3,23,19,11,8,13,12,17): `successor(6)`
- min (leftmost) of right subtree

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] at(0,0) (6) {6};
\node[vertex] at(-1,-1) (3) {3};
\node[vertex] at(7,-1) (23) {23};
\node[vertex] at(6,-2) (19) {19};
\node[vertex] at(5,-5) (17) {17};
\node[vertex] at(3,-5) (12) {12};
\node[vertex] at(4,-4) (13) {13};
\node[vertex] at(2,-3) (11) {11};
\node[vertex,green] at(1,-4) (8) {8};

\draw [-, thick] (6) to (3);
\draw [-, thick] (6) to (23);
\draw [-, thick] (23) to (19);
\draw [-, thick] (19) to (11);
\draw [-, thick] (11) to (13);
\draw [-, thick] (13) to (17);
\draw [-, thick] (13) to (12);
\draw [-, thick] (11) to (8);

\draw[->,red] (6) to[bend left=30] (23);
\draw[->,red] (23) to[bend right=45] (19);
\draw[->,red] (19) to[bend right=30] (11);
\draw[->,red] (11) to[bend right=45] (8);
\end{tikzpicture}
\end{document}
```
- [no children](https://visualgo.net/en/bst?mode=BST&create=6,3,23,19,11,8,13,12,17): `successor(17)`
- find the parent of the left subtree that the node is in

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] at(0,0) (6) {6};
\node[vertex] at(-1,-1) (3) {3};
\node[vertex] at(7,-1) (23) {23};
\node[vertex,green] at(6,-2) (19) {19};
\node[vertex] at(5,-5) (17) {17};
\node[vertex] at(3,-5) (12) {12};
\node[vertex] at(4,-4) (13) {13};
\node[vertex] at(2,-3) (11) {11};
\node[vertex] at(1,-4) (8) {8};

\draw [-, thick] (6) to (3);
\draw [-, thick] (6) to (23);
\draw [-, thick] (23) to (19);
\draw [-, thick] (19) to (11);
\draw [-, thick] (11) to (13);
\draw [-, thick] (13) to (12);
\draw [-, thick] (13) to (17);
\draw [-, thick] (11) to (8);

\draw[->,red] (17) to[bend right=45] (13);
\draw[->,red] (13) to[bend right=20] (11);
\draw[->,red] (11) to[bend left=30] (19);
\end{tikzpicture}
\end{document}
```

Removal
- [no children](https://visualgo.net/en/bst?mode=BST&create=6,3,23,19,11,8,13,12,17): `remove(8)`
- simple deletion

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] at(0,0) (6) {6};
\node[vertex] at(-1,-1) (3) {3};
\node[vertex] at(7,-1) (23) {23};
\node[vertex] at(6,-2) (19) {19};
\node[vertex] at(5,-5) (17) {17};
\node[vertex] at(3,-5) (12) {12};
\node[vertex] at(4,-4) (13) {13};
\node[vertex] at(2,-3) (11) {11};
\node[vertex,red] at(1,-4) (8) {8};

\draw [-, thick] (6) to (3);
\draw [-, thick] (6) to (23);
\draw [-, thick] (23) to (19);
\draw [-, thick] (19) to (11);
\draw [-, thick] (11) to (13);
\draw [-, thick] (13) to (12);
\draw [-, thick] (13) to (17);
\draw [-, thick] (11) to (8);
\end{tikzpicture}
\end{document}
```
- [one child](https://visualgo.net/en/bst?mode=BST&create=6,3,23,19,11,8,13,12,17): `remove(19)`
- child takes over

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] at(0,0) (6) {6};
\node[vertex] at(-1,-1) (3) {3};
\node[vertex] at(7,-1) (23) {23};
\node[vertex,red] at(6,-2) (19) {19};
\node[vertex] at(5,-5) (17) {17};
\node[vertex] at(3,-5) (12) {12};
\node[vertex] at(4,-4) (13) {13};
\node[vertex] at(2,-3) (11) {11};
\node[vertex] at(1,-4) (8) {8};

\draw [-, thick] (6) to (3);
\draw [-, thick] (6) to (23);
\draw [-, thick] (23) to (19);
\draw [-, thick] (19) to (11);
\draw [-, thick] (11) to (13);
\draw [-, thick] (13) to (12);
\draw [-, thick] (13) to (17);
\draw [-, thick] (11) to (8);

\draw[->,green] (11) to[bend left=15] (23);

\node[vertex] at(13,0) (a6) {6};
\node[vertex] at(12,-1) (a3) {3};
\node[vertex] at(19,-1) (a23) {23};
\node[vertex] at(18,-4) (a17) {17};
\node[vertex] at(16,-4) (a12) {12};
\node[vertex] at(17,-3) (a13) {13};
\node[vertex] at(15,-2) (a11) {11};
\node[vertex] at(14,-3) (a8) {8};

\draw [-, thick] (a6) to (a3);
\draw [-, thick] (a6) to (a23);
\draw [-, thick] (a23) to (a11);
\draw [-, thick] (a12) to (a13);
\draw [-, thick] (a11) to (a8);
\draw [-, thick] (a11) to (a13);
\draw [-, thick] (a13) to (a17);
\draw [-, thick] (a13) to (a12);
\end{tikzpicture}
\end{document}
```
- [two children](https://visualgo.net/en/bst?mode=BST&create=6,3,23,19,11,8,13,12,17): `remove(11)`
- replace with successor/predecessor

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] at(0,0) (6) {6};
\node[vertex] at(-1,-1) (3) {3};
\node[vertex] at(7,-1) (23) {23};
\node[vertex] at(6,-2) (19) {19};
\node[vertex] at(5,-5) (17) {17};
\node[vertex,green] at(3,-5) (12) {12};
\node[vertex] at(4,-4) (13) {13};
\node[vertex,red] at(2,-3) (11) {11};
\node[vertex] at(1,-4) (8) {8};

\draw [-, thick] (6) to (3);
\draw [-, thick] (6) to (23);
\draw [-, thick] (23) to (19);
\draw [-, thick] (19) to (11);
\draw [-, thick] (11) to (13);
\draw [-, thick] (13) to (12);
\draw [-, thick] (13) to (17);
\draw [-, thick] (11) to (8);

\draw[->,red] (11) to[bend left=20] (13);
\draw[->,red] (13) to[bend right=30] (12);
\draw[->,green] (12) to[bend right=30] (19);
\draw[->,green] (8) to[bend right=15] (12);

\node[vertex] at(13,0) (a6) {6};
\node[vertex] at(12,-1) (a3) {3};
\node[vertex] at(19,-1) (a23) {23};
\node[vertex] at(18,-2) (a19) {19};
\node[vertex] at(17,-5) (a17) {17};
\node[vertex] at(16,-4) (a13) {13};
\node[vertex,green] at(15,-3) (a12) {12};
\node[vertex] at(14,-4) (a8) {8};

\draw [-, thick] (a6) to (a3);
\draw [-, thick] (a6) to (a23);
\draw [-, thick] (a23) to (a19);
\draw [-, thick] (a19) to (a12);
\draw [-, thick] (a12) to (a13);
\draw [-, thick] (a12) to (a8);
\draw [-, thick] (a13) to (a17);
\end{tikzpicture}
\end{document}
```
> conventionally using the successor

Formal definition of height
$$
\begin{gather*}
\text{Height of empty tree:} & h = -1 \\
\text{Height formula:} & h = max(h_{L},h_{R}) + 1 \\
\\
\text{Height of the trivial tree(1 node):} & h = max(-1,-1) + 1 = 0 
\end{gather*}
$$

Tall trees
- [skewed](https://visualgo.net/en/bst?mode=BST&create=1,2,3,4,5,6,7,8)
- [zigzag](https://visualgo.net/en/bst?mode=BST&create=1,8,2,7,3,6,4,5)

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
%\draw [help lines, color=green] (-10,-8) grid (10,0);
\node[vertex] at(1,0) (1) {1};
\node[vertex] at(8,-1) (8) {8};
\node[vertex] at(2,-2) (2) {2};
\node[vertex] at(7,-3) (7) {7};
\node[vertex] at(3,-4) (3) {3};
\node[vertex] at(6,-5) (6) {6};
\node[vertex] at(4,-6) (4) {4};
\node[vertex] at(5,-7) (5) {5};

\draw [-, thick] (1) to (8);
\draw [-, thick] (8) to (2);
\draw [-, thick] (2) to (7);
\draw [-, thick] (7) to (3);
\draw [-, thick] (3) to (6);
\draw [-, thick] (6) to (4);
\draw [-, thick] (4) to (5);

\coordinate (ref) at (-1,0);
\node at (ref |- 1) {$h=7$};
\node at (ref |- 8) (h1) {$h=6$};
\node at (ref |- 2) (h2) {$h=5$};
\node at (ref |- 7) (h3) {$h=4$};
\node at (ref |- 3) (h4) {$h=3$};
\node at (ref |- 6) (h5) {$h=2$};
\node at (ref |- 4) (h6) {$h=1$};
\node at (ref |- 5) (h7) {$h=0$};
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
h = n-1 \\
O(h) = O(n)
\end{gather*}
$$
> this makes (unbalanced) BSTs not more useful than a linear data structure
### Application
Leetcode: [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/description/)
```java
public TreeNode searchBST(TreeNode root, int val) {
	if (root == null)
		return null;
	if (root.val == val)
		return root;
	else if (root.val > val)
		return searchBST(root.left, val);
	else
		return searchBST(root.right, val);
}
```

Leetcode: [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/)
- inorder traversal

```java
int prev = -1, min = Integer.MAX_VALUE;

public void inOrder(TreeNode root) {
	if (root == null) return;
	inOrder(root.left);
	
	// visit the current node
	if (prev != -1) 
		min = Math.min(min, root.val - prev);
	prev = root.val;
	
	inOrder(root.right);
}

public int getMinimumDifference(TreeNode root) {
	inOrder(root);
	return min;
}
```

Leetcode: [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)
- build the tree using preorder traversal
- for each subtree, slice the inorder array to build its left and right subtrees

```java
int i = 0;
Map<Integer, Integer> mp = new HashMap<>();
int[] pre;

public TreeNode build(int s, int e) {
	if (s > e)
		return null;
	
	int val = pre[i++];
	TreeNode root = new TreeNode(val);

	int idx = mp.get(val);
	root.left = build(s, idx - 1);
	root.right = build(idx + 1, e);
	
	return root;
}

public TreeNode buildTree(int[] preorder, int[] inorder) {
	pre = preorder;
	for (int i = 0; i < inorder.length; i++)
		mp.put(inorder[i], i);

	return build(0, inorder.length - 1);
}
```

Leetcode: [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/description/)
```java
public TreeNode deleteNode(TreeNode root, int key) {
	if (root == null)
		return null;
	if (root.val == key) { // found the target
		if (root.left == null && root.right == null) // if no children, just delete it
			return null;
		else if (root.left != null && root.right == null) // has left child only
			return root.left;
		else if (root.left == null && root.right != null) // has right child only
			return root.right;
		else {
			TreeNode succ = root.right; // find the successor of the current node, predecessor will work too
			while (succ.left != null) 
				succ = succ.left;
			root.val = succ.val; // replace the current value with the successor
			root.right = deleteNode(root.right, succ.val); // delete the successor recursively
			return root;
		}
	} else if (root.val > key) {
		root.left = deleteNode(root.left, key);
		return root;
	} else {
		root.right = deleteNode(root.right, key);
		return root;
	}
}
```