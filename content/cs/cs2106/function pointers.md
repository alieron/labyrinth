---
tags:
  - cs2106/chapter2
  - cs/low_level
  - cs/functional_programming
  - lang/c
complete: true
---
### Concept
#### Function pointer
- [pointer](/labyrinth/notes/cs/cs2100/pointers) to a function
- refer to functions as variables
- makes [higher order functions](/labyrinth/notes/cs/cs1101s/higher_order_functions) possible

```c
int f(int); // function declaration, returns int

int (*fptr)(int); // function pointer declaration

// wrong syntax
int *fptr(int); // function that returns an int

fptr = f; // assignment
```
> the parentheses are necessary due to 

Functions returning pointers
```c
int *g(void); // funtion that returns an int pointer

int *(*gptr)(void); // function pointer declaration

// wrong syntax
int **gptr(void); // function that returns a pointer to int pointer

gptr = g;
```

Returning function pointers
```c
int (*h(void))(int);
// h, is a function 
// (void), that takes no arguments
// *, returning a pointer to
// (int), a function taking in an int
// int, and returns an int

// equivalent using typedef, easier to read
typedef int (*F)(int);

F h(void); // more familiar syntax
```
> a way of understanding the syntax is the clockwise/spiral method, the return type is not just at the front of the declaration, but wraps it
### Application
Binary operators
```c
#include <stdio.h>

int add(int a, int b) {
	return a + b;
}

int sub(int a, int b) {
	return a - b;
}

int mul(int a, int b) {
	return a * b;
}

int divide(int a, int b) {
	return b != 0 ? a / b : 0;
}

int (*get_op(int))(int, int);
// or
typedef (*Op)(int,int);
Op get_op(int);

int (*get_op(int index))(int, int) {
// or
Op get_op(int) {
    switch (index) {
        case 0: return add;
        case 1: return sub;
        case 2: return mul;
        case 3: return divide;
        default: return 0;  // NULL function pointer
    }
}

int main(void) {
    int (*op)(int, int);

    op = get_op(2); // mul

    if (op) {
        printf("%d\n", op(6, 7));  // 42
    }

    return 0;
}
```