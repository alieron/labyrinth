---
tags:
  - cs2040s/chapter3
  - cs/data_structures
  - lang/java
complete: false
prev: /labyrinth/notes/cs/cs2040s/table_ADT
next: /labyrinth/notes/cs/cs2040s/union-find_disjoint_sets

---
### Summary
Hash table
- implements [table ADT](/labyrinth/notes/cs/cs2040s/table_ADT)

| Operation   | Method                              | Performance |
| ----------- | ----------------------------------- | ----------- |
| `search(v)` | check if the index `h(v)` is filled | - $O(1)$    |
| `insert(v)` | fill index `h(v)`                   | - $O(1)$    |
| `remove(v)` | empty index `h(v)`                  | - $O(1)$    |
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[label=left:{0},draw,cell] (0) {};
  \node[label=left:{1},draw,cell,below=of 0] (1) {};
  \node[label=left:{2},draw,cell,below=of 1] (2) {};
  \node[label=left:{3},draw,cell,below=of 2] (3) {};
  \node[draw,cell,below=of 3] (4) {$\vdots$};
  \node[label=left:{m},draw,cell,below=of 4] (m) {};
   
	\pnull{1}
	\pnull{2}
	
	\node[right=of 0] (v0) {$v_0$};
	\node[right=of 3] (v3) {$v_3$};
	\node[right=of m] (vm) {$v_m$};
	
	\draw[->] (0.center) -> (v0);
	\draw[->] (3.center) -> (v3);
	\draw[->] (m.center) -> (vm);
	
  \node[left=2cm of 2.south west,circle] (h) {$h(v)$};
	\draw[->,shorten >=0.5cm] (h) -> (0);
	\draw[->,shorten >=0.5cm] (h) -> (1);
	\draw[->,shorten >=0.5cm] (h) -> (2);
	\draw[->,shorten >=0.5cm] (h) -> (3);
	\draw[->,shorten >=0.5cm] (h) -> (m);
\end{tikzpicture}
\end{document}
```
> identical to [DAT](/labyrinth/notes/cs/cs2040s/table_ADT#^c3b281), just using the hash of the value as the index 

Separate chaining
- closed addressing
- usually [DLL](/labyrinth/notes/cs/cs2040s/DLL) for each "bucket"
- can have $\alpha > 1$

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[label=left:{0},draw,cell] (0) {};
  \node[label=left:{1},draw,cell,below=of 0] (1) {};
  \node[label=left:{2},draw,cell,below=of 1] (2) {};
  \node[label=left:{3},draw,cell,below=of 2] (3) {};
  \node[draw,cell,below=of 3] (4) {$\vdots$};
  \node[label=left:{m},draw,cell,below=of 4] (m) {};
   
	\pnull{1}
	\pnull{2}
	
  \node[draw,cell,right=1cm of 0] (v0) {$v_1$};
  \node[draw,cell,right=1cm of v0] (v01) {$v_2$};
  \node[right=of v01] (v02) {...};
  \draw[->] (v0) to[bend left=15] (v01);  
  \draw[->] (v01) to[bend left=15] (v02);     
  \draw[->] (v01) to[bend left=15] (v0);
  \draw[->] (v02) to[bend left=15] (v01);
  
  \node[draw,cell,right=1cm of 3] (v3) {$v_3$};
  \node[right=of v3] (v31) {...};
  \draw[->] (v3) to[bend left=15] (v31);     
  \draw[->] (v31) to[bend left=15] (v3);
  
	\node[draw,cell,right=1cm of m] (vm) {$v_k$};
  \node[draw,cell,right=1cm of vm] (vm1) {$v_n$};
  \node[right=of vm1] (vm2) {...};
  \draw[->] (vm) to[bend left=15] (vm1);  
  \draw[->] (vm1) to[bend left=15] (vm2);     
  \draw[->] (vm1) to[bend left=15] (vm);
  \draw[->] (vm2) to[bend left=15] (vm1);
	
	\draw[->] (0.center) -> (v0);
	\draw[->] (3.center) -> (v3);
	\draw[->] (m.center) -> (vm);
\end{tikzpicture}
\end{document}
```
> worse case is $O(n)$ to traverse the bucket, a good hash function will prevent this

Linear probing
- open addressing
- forms undesirable **primary clusters**

```
(h(v) + step++) % m

1, 2, 3, 4, 5, ...
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=70mm/#1}]
\node[vertex,label=below:{0}] (0) {};
\node[vertex,label=below:{1},right=of 0] (1) {};
\node[vertex,label=below:{2},right=of 1] (2) {};
\node[vertex,label=below:{3},right=of 2] (3) {};
\node[vertex,label=below:{4},right=of 3] (4) {};
\node[right=of 4] (5) {$\dots$};
\node[vertex,label=below:{m},right=of 5] (m) {};

\node[below=of 0] (b) {base address};
\draw[->,red] (0) to[bend left] (1);
\draw[->,red] (0) to[bend left] (2);
\draw[->,red] (0) to[bend left] (3);
\draw[->,red] (0) to[bend left] (4);
\end{tikzpicture}
\end{document}
```

Quadratic probing
- open addressing
- forms **secondary clusters**
- $\alpha<0.5$ and $m>3$ and is a prime, then quadratic probing will always find an empty slot

```
(h(v) + (step * step++)) % m

1, 4, 9, 16, 25, ...
```
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick]
\node[vertex,label=below:{0}] (0) {};
\node[vertex,label=below:{1},right=of 0] (1) {};
\node[vertex,label=below:{2},right=of 1] (2) {};
\node[vertex,label=below:{3},right=of 2] (3) {};
\node[vertex,label=below:{4},right=of 3] (4) {};
\node[right=of 4] (5) {$\dots$};
\node[vertex,label=below:{m},right=of 5] (m) {};

\node[below=of 0] (b) {base address};
\draw[->,red] (0) to[bend left] (1);
\draw[->,red] (0) to[bend left] (4);
\end{tikzpicture}
\end{document}
```

Double hashing
- open addressing
- secondary hash adds variation to the jump

```
(h(v) + (step++ * h2(v))) % m
```

Hash table classes
- [java.util.HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) - separate chaining
- [java.util.HashSet](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html) - separate chaining
### Concept
Hashing
- map some large range of values(might be non-integers, ie. strings) to integer keys
- prone to collisions due to the [pigeonhole principle](/labyrinth/notes/math/cs1231s/fundemental_methods_of_proof#^f49094)
- must be **deterministic**

Perfect hash function
- a [bijective](/labyrinth/notes/math/cs1231s/function_relations) function -> all keys are mapped 1-1 to a value
- no collisions
- no wasted space

Load factor
$$
\alpha = \frac{n}{m} = \frac{\text{number of values}}{\text{number of slots}}
$$
> usually the hash table is rehashed when $\alpha \geq 0.5$ for open addressing

Collision resolution
- closed addressing
	- multiple values stored in a bucket
- open addressing
	- at most one value in each slot
	- maintain a `DEL` indicator to avoid breaking probing
- goals:
	- find an empty slot if it exists
### Application
Leetcode: [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/?envType=problem-list-v2&envId=sliding-window)
- [sliding window](/labyrinth/notes/cs/cs2040s/two_pointer_approach#^01a391) with hash map
- improvement over [naive approach](/labyrinth/notes/cs/cs2040s/two_pointer_approach#^6cde58)

```java
if (nums.length < 2) // ignore trivial case
	return false;

Map<Integer, Integer> mp = new HashMap<>();

for (int i = 0; i < nums.length; i++) {
	int num = nums[i];
	if (mp.containsKey(num)) 
		if (i - mp.get(num) <= k) 
			return true;

	mp.put(num, i); // add the most recent index of the number to the map
}

return false;
```

Leetcode: [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1778966652/?envType=problem-list-v2&envId=sliding-window)
- [sliding window](/labyrinth/notes/cs/cs2040s/two_pointer_approach#^01a391) with hash map

```java
Map<Character, Integer> mp = new HashMap<>();

int left = 0, max = 0;

for (int i = 0; i < s.length(); i++) {
	char c = s.charAt(i);
	if (mp.containsKey(c))
		left = Math.max(left, mp.get(c) + 1); // set left if its larger then the old value
	max = Math.max(max, i - left + 1); // compare against the length of the current string

	mp.put(c, i); // add the most rescent index of this character to the map
}

return max;
```

Leetcode: [longest-consecutive-sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked)
```java
HashSet<Integer> hs = new HashSet<>(); // dont care about duplicates

for (int n : nums)
	hs.add(n);

int longest = 0;
for (int n : hs) {
	if (hs.contains(n - 1)) continue; // dont bother searching, since the smaller value would have been searched already

	int cur = 1;
	while (hs.contains(++n))
		cur++;

	longest = Math.max(longest, cur);
}

return longest;
```

Leetcode: [group-anagrams](https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked)
- map the anagrams(values) according to the sorted version(hash)

```java
Map<String, List<String>> mp = new HashMap<>(); // map from the sorted anagram to the other anagrams

for (String w : strs) {
	char[] chars = w.toCharArray();
	Arrays.sort(chars);
	String k = new String(chars); // sorted anagram as the key

	List<String> ls;
	if (mp.containsKey(k)) {
		ls = mp.get(k); // retrieve the existing list
	} else {
		ls = new ArrayList<>(); // create new list if it doesnt yet exist
	}
	ls.add(w);
	mp.put(k, ls);
}

return new ArrayList<>(mp.values()); // HashSet -> Collection -> List
```

Leetcode: [unique-number-of-occurrences](https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75)
- use a set to remove duplicates

```java
Map<Integer, Integer> map = new HashMap<>(); // map each number to its occurance

for (int n : arr) {
	if (map.containsKey(n))
		map.put(n, map.get(n) + 1);
	else
		map.put(n, 1);
}

Set<Integer> count = new HashSet<>(map.values());
return map.size() == count.size(); // if they are the same size there are no duplicates
```