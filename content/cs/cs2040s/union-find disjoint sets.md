---
tags:
  - cs2040s/chapter3
  - cs/abstract_data_types
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2040s/hash_table
next: /labyrinth/notes/cs/cs2040s/BST

---
### Summary
Union-find disjoint sets(UFDS)
- store disjoint [sets](/labyrinth/notes/math/cs1231s/sets)
- union sets or check if two elements are in the same set

[Hash table](/labyrinth/notes/cs/cs2040s/hash_table) implementation
- table values are pointers to the parent entry
- harder to keep track of rank and size

| Operation       | Method                                                                    | Performance                  |
| --------------- | ------------------------------------------------------------------------- | ---------------------------- |
| `findSet(i)`    | follow the pointer until the the entry where the pointer points to itself | - $O(\alpha(n))\approx O(1)$ |
| `unionSet(i,j)` | change the pointer of one of the roots to the other                       | - $O(\alpha(n))\approx O(1)$ |
> assuming **path compression** is used, might deteriorate to $O(n)$ otherwise
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node[label=left:{0},draw,cell] (0) {};
  \node[label=left:{1},draw,cell,below=of 0] (1) {};
  \node[label=left:{2},draw,cell,below=of 1] (2) {};
  \node[label=left:{3},draw,cell,below=of 2] (3) {};
  \node[label=left:{4},draw,cell,below=of 3] (4) {};
  \node[label=left:{5},draw,cell,below=of 4] (5) {};
  \node[label=left:{6},draw,cell,below=of 5] (6) {};
  \node[label=left:{7},draw,cell,below=of 6] (7) {};
  \node[label=left:{8},draw,cell,below=of 7] (8) {};
	
  \node[draw,cell,right=2cm of 0] (p0) {};
  \node[draw,cell,below=of p0] (p1) {};
  \node[draw,cell,below=of p1] (p2) {};
  \node[draw,cell,below=of p2] (p3) {};
  \node[draw,cell,below=of p3] (p4) {};
  \node[draw,cell,below=of p4] (p5) {};
  \node[draw,cell,below=of p5] (p6) {};
  \node[draw,cell,below=of p6] (p7) {};
  \node[draw,cell,below=of p7] (p8) {};
  
  \draw[-] (p0.north east) -- (0.north west);
  \draw[-] (p8.south east) -- (8.south west);
  
  \draw[->,thick] (p0.center) -> (0);
  \draw[->,thick] (p1.center) -> (0);
  \draw[->,thick] (p2.center) -> (1);
  \draw[->,thick] (p3.center) -> (0);
  \draw[->,thick] (p4.center) -> (4);
  \draw[->,thick] (p5.center) -> (5);
  \draw[->,thick] (p6.center) -> (5);
  \draw[->,thick] (p7.center) -> (5);
  \draw[->,thick] (p8.center) -> (5);
\end{tikzpicture}
\end{document}
```
### Concept
UFDS operations
- `findSet(i)`
	- get an identifier for the set that `i` belongs to
- `unionSet(i,j)`
	- join the sets that `i` and `j` belong to into one set

Abstraction
- as a forest, where each tree represents a disjoint set/[partition](/labyrinth/notes/math/cs1231s/equivalence_relations#^09f6e3)
- the root acts as the identifier for that set
- [3 disjoint sets](https://visualgo.net/en/ufds?mode=unionset&p=0,0,1,0,4,5,5,5,5&rank=2,1,0,0,0,1,0,0,0)

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=12mm},edge from parent/.style={<-,draw}]
\node [vertex] (s1) {0}
  child {
    node [vertex] {1}
    child {
      node [vertex] {2}
    }
  }
  child {
    node [vertex] {3}
  };
\node [vertex,right=3cm of s1] (s2) {4};
\node [vertex,right=3cm of s2] (s3) {5}
	child {
		node [vertex] {6}
	}
	child {
		node [vertex] {7}
	}
	child {
		node [vertex] {8}
	};
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
A = \{ 0,1,2,3,4,5,6,7,8 \} \\
\\
A_{1}=\{ 0,1,2,3 \}, \ A_{2} = \{ 4 \}, \ A_{3}=\{ 5,6,7,8 \}
\end{gather*}
$$

Path compression
- keep the trees as flat as possible

```java
public int findSet(int i) { 
	if (p.get(i) == i) // end case when we reach the root node
		return i;
	else {
		int ret = findSet(p.get(i)); // traverse further to find the root
		p.set(i, ret); // set the root as the parent of the current node, flattening
		return ret; 
	} 
}
```
- flattening a [very tall tree](https://visualgo.net/en/ufds?mode=find&p=0,0,1,2,3&rank=4,3,2,1,0&i=3): `findSet(3)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=12mm},edge from parent/.style={<-,draw}]
\node [vertex] (s1) {0}
  child {
    node [vertex] (s11) {1}
    child {
      node [vertex] (s12) {2}
      child {
        node [vertex] (s13) {3}
        child {
          node [vertex] {4}
        }
      }
    }
  };
\node [vertex,right=6cm of s1] (s2) {0}
  child {
    node [vertex] {1}
  }
  child {
    node [vertex] {2}
  }
  child {
		node [vertex] {3}
		child {
			node [vertex] {4}
		}
	};
\draw[->,red] (s12) to[bend left=45] (s11);
\draw[->,red] (s11) to[bend left=45] (s1);
\draw[->,red] (s13) to[bend left=45] (s12);
\draw[->,green] (s12) to[bend right=45] (s1);
\draw[->,green] (s13) to[bend right=45] (s1);
\end{tikzpicture}
\end{document}
```
> even though `findSet(i)` might be $O(n)$ on tall trees, using path compression amortizes it to $O(1)$

Union by rank hueristic
- **rank != height**, since height might decrease after path compression, but rank won't
- join the shorter tree into the taller tree
- if they are the same rank, then the rank of the union only increases by 1

```java
public void unionSet(int i, int j) { 
	if (!isSameSet(i, j)) { // ensure that they are not already part of the same set
		numSets--;
		int x = findSet(i), y = findSet(j);
		// rank is used to keep the tree short
		if (rank.get(x) > rank.get(y)) { 
			p.set(y, x); // put j's set under i's, if it has a smaller rank
			setSize.set(x, setSize.get(x) + setSize.get(y)); 
		} else {
			p.set(x, y); // put i's set under j's by default
			setSize.set(y, setSize.get(y) + setSize.get(x));
			if (rank.get(x) == rank.get(y)) 
				rank.set(y, rank.get(y) + 1); 
		} 
	} 
}
```
- union of [two trees](https://visualgo.net/en/ufds?mode=unionSet&p=0,1,1,1&rank=0,1,0,0&i=1&j=0): `unionSet(1,0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=10mm},edge from parent/.style={<-,draw}]
\begin{scope}
\node [vertex] (s1) {0};
\node [vertex,right=2cm of s1] (s2) {3}  
	child {
    node [vertex] {1}
	}
	child {
		node [vertex] {2}
	};
\draw[->,green] (s1) to[bend right=30] (s2);
\end{scope}
\begin{scope}[shift={($(s2)+(5cm,0)$)}]
\node [vertex] (s3) {3}  
	child {
    node [vertex] {0}
	}	
	child {
    node [vertex] {1}
	}
	child {
		node [vertex] {2}
	};
\end{scope}
\end{tikzpicture}
\end{document}
```

- union by root element on [two trees of equal rank](https://visualgo.net/en/ufds?mode=unionSet&p=0,0,1,0,4,4,5,5,5&rank=2,1,0,0,2,1,0,0,0&i=4&j=0): `unionSet(4,0)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=10mm},edge from parent/.style={<-,draw}]
\begin{scope}
\node [vertex] (s1) {0}
  child {
    node [vertex] (s11) {1}
    child {
      node [vertex] (s12) {2}
    }
  }
  child {
	  node [vertex] (s13) {3}
  };
\node [vertex,right=2cm of s1] (s2) {4}
  child {
    node [vertex] {5}
	  child {
	    node [vertex] {6}
	  }
	  child {
			node [vertex] {7}
		}
		child {
			node [vertex] {8}
		}
	};
\draw[->,green] (s2) to[bend left=30] (s1);
\end{scope}
\begin{scope}[shift={($(s2)+(5cm,0)$)}]
\node [vertex] (s3) {0}
  child {
    node [vertex] {1}
    child {
      node [vertex] {2}
    }
  }
  child {
	  node [vertex] {3}
  }
  child {
	  node [vertex] {4}
	  child {
	    node [vertex] {5}
		  child {
		    node [vertex] {6}
		  }
		  child {
				node [vertex] {7}
			}
			child {
				node [vertex] {8}
			}
		}
  };
\end{scope}
\end{tikzpicture}
\end{document}
```
> rank/height will increase by at most 1

- union with path compression on [two trees of equal rank](https://visualgo.net/en/ufds?mode=unionSet&p=0,0,1,0,4,4,5,5,5&rank=2,1,0,0,2,1,0,0,0&i=6&j=2): `unionSet(6,2)`

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=12mm},edge from parent/.style={<-,draw}]
\begin{scope}[local bounding box=scope1]
\node [vertex] (s1) {0}
  child {
    node [vertex] (s11) {1}
    child {
      node [vertex] (s12) {2}
    }
  }
  child {
	  node [vertex] (s13) {3}
  };
\node [vertex,right=2cm of s1] (s2) {4}
  child {
    node [vertex] (s21) {5}
	  child {
	    node [vertex] (s22) {6}
	  }
	  child {
			node [vertex] {7}
		}
		child {
			node [vertex] {8}
		}
	};
\draw[->,red] (s12) to[bend left=45] (s11);
\draw[->,red] (s11) to[bend left=45] (s1);
\draw[->,green] (s12) to[bend right=20] (s1);
\draw[->,red] (s22) to[bend left=45] (s21);
\draw[->,red] (s21) to[bend left=45] (s2);
\draw[->,green] (s22) to[bend left=45] (s2);
\end{scope}
\begin{scope}[shift={($(s2)+(5cm,0)$)},local bounding box=scope2]
\node [vertex] (s3) {0}
  child {
    node [vertex] {1}
  }
	child {
		node [vertex] {2}
	}
  child {
	  node [vertex] {3}
  };
\node [vertex,right=3cm of s3] (s4) {4}
  child {
    node [vertex] {5}
	  child {
			node [vertex] {7}
		}
		child {
			node [vertex] {8}
		}
	}
	child {
		node [vertex] {6}
	};
\draw[->,green] (s4) to[bend left=30] (s3);
\end{scope}

\coordinate (midpoint) at ($ (scope1.south) !.5! (scope2.south) $);
\begin{scope}[shift={(midpoint)}, yshift=-2cm]
\node [vertex] (s5) {0}
  child {
    node [vertex] {1}
  }
	child {
		node [vertex] {2}
	}
  child {
	  node [vertex] {3}
  }
  child {
	  node [vertex] {4}
		  child {
	    node [vertex] {5}
		  child {
				node [vertex] {7}
			}
			child {
				node [vertex] {8}
			}
		}
		child {
			node [vertex] {6}
		}
  };
\end{scope}
\end{tikzpicture}
\end{document}
```
> rank doesn't decrease like height might, and for trees of equal initial rank, `i` is unioned into `j`

Tall trees
- minimum size of the tree in order of a certain height
- since height increases by 1 at most

$$
\text{Disjoint set with height }h: \qquad s \geq 2^h
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,calc}
\tikzstyle{vertex}=[draw,circle,minimum size=18pt,inner sep=0pt]

\begin{document}
\begin{tikzpicture}[thick,level/.style={sibling distance=15mm},edge from parent/.style={<-,draw}]
\begin{scope}[local bounding box=scope1]
\node [vertex] (s1) {0}
  child {
    node [vertex] {1}
  }
	child {
		node [vertex] {2}
	  child {
		  node [vertex] {3}
	  }
  };
\node[above=of s1] {$h=2,\ s=4$};
\end{scope}
\begin{scope}[shift={($(s1)+(5cm,0)$)}]
\node [vertex] (s2) {0}
  child {
    node [vertex] {1}
  }
	child {
		node [vertex] {2}
	  child {
		  node [vertex] {3}
	  }
	}
	child {
		node [vertex] {4}
	  child {
	    node [vertex] {5}
	  }
		child {
			node [vertex] {6}
		  child {
			  node [vertex] {7}
		  }
		}
  };
\node[above=of s2] {$h=3,\ s=8$};
\end{scope}
\end{tikzpicture}
\end{document}
```

Inverse Ackermann function
- a function that grows very slowly

$$
\begin{align*}
\text{UFDS operations:} &&& O(\alpha(n)) \\
\\
\text{for small }n: &&& n \leq 10^6 \implies \alpha(n) \approx 1, \ \therefore O(1)
\end{align*}
$$
### Application
Kattis: [Tildes](https://open.kattis.com/problems/tildes)
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
PrintWriter pw = new PrintWriter(System.out);

String[] one = br.readLine().split(" ");
int n = Integer.parseInt(one[0]), q = Integer.parseInt(one[1]);

UnionFind uf = new UnionFind(n + 1);

for (int i = 0; i < q; i++) {
	String[] query = br.readLine().split(" ");
	if (query[0].equals("t"))
		uf.unionSet(Integer.parseInt(query[1]), Integer.parseInt(query[2]));
	else
		pw.println(uf.sizeOfSet(Integer.parseInt(query[1])));
}

pw.close();

// use the UFDS implementation
class UnionFind { ...
```

Leetcode: [Making A Large Island](https://leetcode.com/problems/making-a-large-island/description/)
- inefficient $O(n^2\times \alpha(n^2))\approx O(n^2)$ solution

```java
int n = grid.length;

UnionFind uf = new UnionFind(n * n); // n^2 size
int max = 1;
for (int i = 0; i < n; i++) {
	for (int j = 0; j < n; j++) {
		if (grid[i][j] == 1) { // check all the islands
			int idx = i * n + j;
			// union with islands below and to the right, make a big island
			if (i + 1 < n && grid[i + 1][j] == 1) {
				uf.unionSet(idx, idx + n);
				max = Math.max(max, uf.sizeOfSet(idx)); // update max
			}
			if (j + 1 < n && grid[i][j + 1] == 1) {
				uf.unionSet(idx, idx + 1);
				max = Math.max(max, uf.sizeOfSet(idx));
			}
		}
	}
}

int[] directions = { 0, 1, 0, -1, 0 }; // 4 cardinal directions
Set<Integer> hs = new HashSet<>();

for (int i = 0; i < n; i++) {
	for (int j = 0; j < n; j++) {
		if (grid[i][j] == 0) { // check all non islands
			for (int a = 0; a < 4; a++) {
				int r = i + directions[a], s = j + directions[a + 1];
				if (0 <= r && r < n && 0 <= s && s < n && grid[r][s] != 0)
					hs.add(uf.findSet(r * n + s)); // identify the islands that this tile is adjacent to, ignore duplicates
			}
				int size = 1;
				for (int t : hs)
					size += uf.sizeOfSet(t); // compute the potential size of joining every adjacent island
				max = Math.max(max, size);
				hs.clear();
		}
	}
}

return max;

// use the UFDS implementation
class UnionFind { ...
```
### Extra
[CPBook implementation](https://github.com/stevenhalim/cpbook-code/blob/master/ch2/ourown/unionfind_ds.java)
```java
import java.util.*;

// Union-Find Disjoint Sets Library written in OOP manner, using both path compression and union by rank heuristics
class UnionFind {                                              // OOP style
  private ArrayList<Integer> p, rank, setSize;
  private int numSets;

  public UnionFind(int N) {
    p = new ArrayList<>(N);
    rank = new ArrayList<>(N);
    setSize = new ArrayList<>(N);
    numSets = N;
    for (int i = 0; i < N; i++) {
      p.add(i);
      rank.add(0);
      setSize.add(1);
    }
  }

  public int findSet(int i) { 
    if (p.get(i) == i) return i;
    else {
      int ret = findSet(p.get(i)); p.set(i, ret);
      return ret; } }

  public Boolean isSameSet(int i, int j) { return findSet(i) == findSet(j); }

  public void unionSet(int i, int j) { 
    if (!isSameSet(i, j)) { numSets--; 
    int x = findSet(i), y = findSet(j);
    // rank is used to keep the tree short
    if (rank.get(x) > rank.get(y)) { p.set(y, x); setSize.set(x, setSize.get(x) + setSize.get(y)); }
    else                           { p.set(x, y); setSize.set(y, setSize.get(y) + setSize.get(x));
                                     if (rank.get(x) == rank.get(y)) rank.set(y, rank.get(y) + 1); } } }
  public int numDisjointSets() { return numSets; }
  public int sizeOfSet(int i) { return setSize.get(findSet(i)); }
}

class unionfind_ds {
  public static void main(String[] args) {
    System.out.printf("Assume that there are 5 disjoint sets initially\n");
    UnionFind UF = new UnionFind(5); // create 5 disjoint sets
    System.out.printf("%d\n", UF.numDisjointSets()); // 5
    UF.unionSet(0, 1);
    System.out.printf("%d\n", UF.numDisjointSets()); // 4
    UF.unionSet(2, 3);
    System.out.printf("%d\n", UF.numDisjointSets()); // 3
    UF.unionSet(4, 3);
    System.out.printf("%d\n", UF.numDisjointSets()); // 2
    System.out.printf("isSameSet(0, 3) = %b\n", UF.isSameSet(0, 3)); // will return false
    System.out.printf("isSameSet(4, 3) = %b\n", UF.isSameSet(4, 3)); // will return true
    for (int i = 0; i < 5; i++) // findSet will return 1 for {0, 1} and 3 for {2, 3, 4}
      System.out.printf("findSet(%d) = %d, sizeOfSet(%d) = %d\n", i, UF.findSet(i), i, UF.sizeOfSet(i));
    UF.unionSet(0, 3);
    System.out.printf("%d\n", UF.numDisjointSets()); // 1
    for (int i = 0; i < 5; i++) // findSet will return 3 for {0, 1, 2, 3, 4}
      System.out.printf("findSet(%d) = %d, sizeOfSet(%d) = %d\n", i, UF.findSet(i), i, UF.sizeOfSet(i));
  }
}
``` 