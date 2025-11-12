---
tags:
  - cs2100/chapter2
  - cs/low_level
  - lang/c
complete: true
prev: /labyrinth/notes/cs/cs2100/fixed_&_floating_point
next: /labyrinth/notes/cs/cs2100/functions_in_C

---
### Summary
Pointers
```c
int a = 123;
int *a_ptr; // a_ptr is a pointer to an int

a_ptr = &a; // set a_ptr to the address of a

// printing a
printf("%d\n", a); // 123

// printin the pointer to a/the address of a
printf("%p\n", a_ptr); // (random hex number)
printf("%p\n", &a);
// use the %p format specifier to print pointers

// dereferencing the pointer to a
printf("%d\n", *a_ptr); // 123
```
> `*a_ptr` is synonymous with `a`

Size of a pointer ^4af4c3
- depends on system architecture

```c
printf("%d\n", sizeof(char *)); // 8
printf("%d\n", sizeof(int *));  // 8
```
> 8 bytes for 64-bit systems, 4 bytes for 32-bit systems
### Concept
Pointer as a variable
- contains the address of another variable

Address operator
- get the address of a variable
- `&a` refers to the address of `a`

Dereference operator
- refer to the value that the pointer points to
- `*p` refers to the value at address stored in pointer `p`

Pointer arithmetic ^d5692f
- the address is incremented/decremented according the type of variable it points to
- refer to the [size of primitive types](/labyrinth/notes/cs/cs2100/data_representation#^9f8289)

```c
type *p = &a; // some arbitraty pointer to a type

p += 5; // synonymous with p += 5 * sizeof(type)
```
### Application
Pointers and dereferencing
```c
int *p, *q, x = 743, y = 30;
p = &x; // 1) addr of x to p
q = &y; // 2) addr of y to p
*p = *q + 1; // 3) set the value at p to the value at q + 1

// var | address(dec) | value | (1)  | (2)  | (3)
// p   | 1164         | ?     | 1172 |      |
// q   | 1168         | ?     |      | 1176 |
// x   | 1172         | 743   |      |      | 31
// y   | 1176         | 30    |      |      |
```

Pointer to pointers
```c
int *p; // pointer to an int  
int **q; // pointer to a pointer to an int.  
int x = 908, y = 4003;  

p = &x; // 1) addr of x to p
q = &p; // 2) addr of p to q
p++; // 3) increment int pointer p, +4 
(*p)--; // 4) decrement the value at p
(**q)++; // 5) increment the value at the value at q

// var | address(dec) | value | (1)  | (2)  | (3)  | (4)  | (5)
// p   | 2980         | ?     | 2988 |      | 2992 |      |
// q   | 2984         | ?     |      | 2980 |      |      |
// x   | 2988         | 908   |      |      |      |      |
// y   | 2992         | 4003  |      |      |      | 4002 | 4003
```
> take note the parentheses in `(*p)--` and `(**q)++` because the increment/decrement operator has higher precedence than the dereference operator

Incrementing pointers to various types
```c
int a; float b; char c; double d;
int *ap; float *bp; 
char *cp; double *dp;

ap = &a; bp = &b; cp = &c; dp = &d;
printf("%p %p %p %p\n", ap, bp, cp, dp); // eg: ffbff0a4 ffbff0a0 ffbff09f ffbff090

ap++; bp++; cp++; dp++;
printf("%p %p %p %p\n", ap, bp, cp, dp); // eg: ffbff0a8 ffbff0a4 ffbff0a0 ffbff098
                                         //     +4       +4       +1       +8
ap += 3;
printf("%p\n", ap);                      // eg: ffbff0b4
                                         //     +3x4
```

Casting to pointers to another type
```c
int a[3] = { 1, 2, 3 };

printf("%p\n", a);                        // base
printf("%p\n", ((void *) a) + 1);         // base + 1
printf("%p\n", (int *) ((void *) a) + 1); // base + 4, word allignment for ints during casting
```
> reveals that the pointers are incremented based on the type it points to

Endian-ness
```c
int a = 0xF070;
int *a_ptr = &a;

printf("%b\n", *a_ptr);                  // 1111 0000 0111 0000, 0xF070
printf("%b\n", *(((char *) a_ptr)));     // 111 0000, 0x70
printf("%b\n", *(((char *) a_ptr) + 1)); // 1111 1111 1111 1111 1111 1111 1111 0000, 0xF0 sign extended to 32-bit
printf("%b\n", *(((char *) a_ptr) + 2)); // 0
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=1em and 3.5em}}
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
    \node[draw,cell,xshift=\boxsize] (#2tail) at (#2) {#4};
  }
% 
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (start) {a\_ptr};
  \node[draw,cell,right=of start] (0) {70};
  \node[draw,cell,xshift=\boxsize] (1) at (0) {F0};
  \node[draw,cell,xshift=\boxsize] (2) at (1) {00};
  \node[draw,cell,xshift=\boxsize] (3) at (2) {00};
  \node[yshift=-2*\boxsize] (a) at (1) {a\_ptr + 1};
  \draw[arrows={-Latex}] (start.east)--(0);
  \draw[arrows={-Latex}] (a.north)--(1);  
\end{tikzpicture}
\end{document}
```
> C uses **little-endian** where the least significant byte is stored at the lower address, the 8-bit char is [sign extended](/labyrinth/notes/cs/cs2100/signed_numbers#^0e56f7) to 32 bits