---
tags:
  - cs2100/chapter2
  - cs/low_level
  - lang/c
complete: true
prev: /labyrinth/notes/cs/cs2100/pointers
next: /labyrinth/notes/cs/cs2100/arrays_in_C

---
### Summary
Library functions
- `stdio.h`
- `math.h`
> compile with `-lm` for linking with math functions

Scoping
- formal parameters -> local to the function they are declared in
- local parametes and vars only exist in memory during the function's execution

```c
int f(int);

int main(void) {
	int a; 
	...
}

int f(int x) {
	return a + x; // error: a is local to main, it doesn't exist in the scope of f
}
```
### Concept
Function prototypes
- functions have to be declared before they are called
- if not declared -> `warning: implicit declaration of function`: C assumes the return type is an `int`
- if defined after, with different return type -> `error: conflicting types`

```c
#define PI = 3.14159

// function prototypes
double circle_area(double);
double circle_area(double diameter); // var name is optional, types are compulsory

// function definition
double circle_area(double diameter) {
	return PI * pow(diameter/2, 2);
}
```
> including the header files is telling the compiler to paste in the function prototypes, thats why they must be done at the start of the file

Pass-by-value ^f29a98
- actual arguments passed into the formal parameters of a function when its called
- values are copied
- *cannot make changes to variables outside of the function*

```c
void swap(int, int);

int main(void) {
	int a = 2, b = 3;
	
	printf("%d, %d\n", a, b); // 2, 3
	swap(a, b);
	printf("%d, %d\n", a, b); // 2, 3
	return 0; 
}

void swap(int a, int b) { // a and b are local to the execution of swap
	int temp = a;
	a = b;
	b = temp;
}
```

Pointer parameters
- simulate pass-by-reference behaviour, similar to Java's [reference types](/labyrinth/notes/cs/cs2030s/types#^e9a435)
- allows functions to modify the values of variables outside their scope

```c
void swap(int *, int *);

int main(void) {
	int a = 2, b = 3;
	
	printf("%d, %d\n", a, b); // 2, 3
	swap(&a, &b);
	printf("%d, %d\n", a, b); // 3, 2
	return 0; 
}

void swap(int *a_ptr, int *b_ptr) { // a_ptr and b_ptr are local pointers to external variables
	int temp = *a_ptr;
	*a_ptr = *b_ptr;
	*b_ptr = temp;
}
```
### Application
Type mismatch and casting
```c
void printChar(char);
void printInt(int);
void printFloat(float);

int main(){
    int a = 0xF0F; // 3855
    printChar(a); // 15
    printFloat(a); // 3855.000000
    // is effectively print((int) a) and print((float) a)
    
    char b = 'a';
    printInt(b); // 97
    printFloat(b); // 97.000000
    
    float c = 3.04;
    printInt(c); // 3
    printChar(c); // 3
}

void printChar(char a) {
  printf("%d\n", a);
}

void printInt(int a) {
	printf("%d\n", a);
}

void printFloat(float a) {
	printf("%f\n", a);
}
```
> type mismatch -> implicit type cast, type casting works more indiscriminantly in C compared to Java