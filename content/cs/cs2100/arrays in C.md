---
tags:
  - cs2100/chapter4
  - cs/low_level
  - cs/data_structures
  - lang/c
complete: true
prev: /labyrinth/notes/cs/cs2100/functions_in_C
next: /labyrinth/notes/cs/cs2100/strings_in_C

---
Succeeds: [arrays](/labyrinth/notes/cs/cs1101s/arrays)
### Summary
Array
- fixed size
- occupy **contiguous** memory locations, each index is adjacent

```c
// correct
int numbers[5];                        // [?, ?, ?, ?, ?], mem space is reserved
int scores[5] = {90, 85, 78, 92, 88};  // [90, 85, 78, 92, 88]

char letters[] = {'a', 'b', 'c', 'd'}; // compiler infers size = 4

int zeros[5] = {0};                    // [0, 0, 0, 0, 0], rest get initialized as 0

// initializing more values than declared
int wrong[2] = {1, 2, 3}; // warning: excess elements in array initializer

// initializing after declaration
int late[5];
late[5] = {8, 23, 12, -3, 6}; // error: expected expression before ‘{’ token
```

Assignment
```c
#define N 10 // good practice to define constants as macros

int source[N] = { 10, 20, 30, 40, 50 };
int dest[N];

// array names are fixed pointers
dest = source; // error: assignment to expression with array type

int i;
for (i = 0; i < N; i++) {
	dest[i] = source[i]; // proper way, copies each index
}
```
> when an array is declared, the OS finds a sufficient chunk of memory, thats why the pointer to that address cannot be altered
### Concept
Array parameters in functions
```c
// function prototypes
int sumArray(int [], int);
int sumArray(int arr[], int size);

// function definition
int sumArray(int arr[], int size) { 
	int i, sum = 0;
	
	for (i = 0; i < size; i++) {
		sum += arr[i];
	}
	
	return sum;
}
int sumArray(int arr[8], int size) { // 8 will be ignored, pass in the size of the array as another parameter
	... 
}

// or
// function prototypes
int sumArray(int *, int);

// function definition
int sumArray(int *arr, int size) { 
	int i, sum = 0;
	
	for (i = 0; i < size; i++) {
		sum += *(arr + i); // have to handle pointers differently
	}
	
	return sum;
}
```

Arrays with [pointer arithmetic](/labyrinth/notes/cs/cs2100/pointers#^d5692f)
```c
int a[3] = {1, 2, 3};

// pointers
printf("%p\n", a);        // base
printf("%p\n", &a[0]);    // base
printf("%p\n", a + 1);    // base + 1 * sizeof(int)
printf("%p\n", &a[1]);    // base + 1 * sizeof(int)

// dereferencing / indexing
printf("%d\n", *a);       // 1
printf("%d\n", a[0]);     // 1
printf("%d\n", *(a + 1)); // 2
printf("%d\n", a[1]);     // 2
```

### Application
Multi-dimensional array
```c
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
printf("%d\n", matrix[1][2]);  // prints 6
```

Reversing an array
```c
// iterative solution
void reverseArray(int arr[], int size) {
	int i = 0, j = size - 1;
	while (i < j) { // 2 pointer approach
		int tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
		
		++i;
		--j;
	}
}

// recursive solution
void reverseArray(int arr[], int size) {
	if (size > 1) {
		int tmp = arr[0];
		arr[1] = arr[size - 1];
		arr[size - 1] =  tmp;
		
		reverseArray(arr + 1, size - 2); // &arr[1] would also work
	}
}
```

Long from two ints
```c
int llong[2] = { 0x61626364, 0x65666768 };

printf("%lx\n", (long) *llong);     // 0x61 62 63 64
printf("%lx\n", *((long *) llong)); // 0x65 66 67 68 61 62 63 64
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta,decorations.pathreplacing}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=1em and 3.5em}}

\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (start) {llong};
  \node[draw,cell,right=of start] (0) {64};
  \node[draw,cell,xshift=\boxsize] (1) at (0) {63};
  \node[draw,cell,xshift=\boxsize] (2) at (1) {62};
  \node[draw,cell,xshift=\boxsize] (3) at (2) {61};
  \node[draw,cell,xshift=\boxsize] (4) at (3) {68};
  \node[draw,cell,xshift=\boxsize] (5) at (4) {67};
  \node[draw,cell,xshift=\boxsize] (6) at (5) {66};
  \node[draw,cell,xshift=\boxsize] (7) at (6) {65};
  \draw[arrows={-Latex}] (start.east)--(0);
  
  \draw [decorate,decoration={brace,amplitude=5pt,raise=12pt}]
	  (0.west) -- (3.east) node[midway,above=18pt]{llong[0]};  
	\draw [decorate,decoration={brace,amplitude=5pt,raise=12pt}]
	  (4.west) -- (7.east) node[midway,above=18pt]{llong[1]};
	\draw [decorate,decoration={brace,amplitude=5pt,mirror,raise=12pt}]
	  (0.west) -- (7.east) node[midway,below=18pt]{resulting long};
\end{tikzpicture}
\end{document}
```