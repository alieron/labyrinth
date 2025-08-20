---
tags:
  - cs2100
  - cs/fundamentals
  - lang/c
complete: false
---
### Summary
##### Preprocessor directives
```c
// importing header files/libraries
#include <stdio.h>

// macros 
#define PI 3.142 // use all CAPs for macro
```
> note the absence of ';' in the preprocessor directives

##### Variables
```c
int x; // initialization
x = 2; // declaration

int y = 2; // initialization and declaration
```

##### Main function
```c
int main(void) {
	// declaration statements
	// tells compiler what type of memory is needed for variables etc
	
	// executable statements
	// describe the processing on the memory
	
	return 0; // return 0 for successful execution, 1 for exceptions
}
```

##### IO
```c
int age;
printf("What is your age? ");
scanf("%d", &age); // write value to the address of age
```

##### Format specifiers

| Placeholder | Variable Type   | Function Use                     |
| ----------- | --------------- | -------------------------------- |
| %c          | char            | printf / scanf                   |
| %d          | int             | printf / scanf                   |
| %f          | float or double | printf                           |
| %f          | float           | scanf                            |
| %lf         | double          | scanf                            |
| %e          | float or double | printf (for scientific notation) |
- %5d -> integer with width of 5, right justified
- %8.3f -> real number with width of 8 and 3 decimal places, right justified

##### Escape sequences

| Escape sequence | Meaning        | Result                                            |
| --------------- | -------------- | ------------------------------------------------- |
| \n              | New line       | Subsequent output will appear on the next line    |
| \t              | Horizontal tab | Move to the next tab position on the current line |
| \\"             | Double quote   | Display a double quote "                          |
| %%              | Percent        | Display a percent character %                     |
> see [Learn X in Y minutes: C](https://learnxinyminutes.com/c/) for complete guide to C
### Concept
##### Compilation
```sh
// compiling to executable file
gcc test.c -o test

// compiling with all warnings
gcc -Wall test.c
```

##### von Neumann Architecture



### Application
##### Macros
```c
#define PI 3.142

int main(void) {
	...
	areaCircle = PI * radius * radius;
	volCone = PI * radius * radius * height / 3.0;
}

// becomes this before compliation

int main(void) {
	...
	areaCircle = 3.142 * radius * radius;
	volCone = 3.142 * radius * radius * height / 3.0;
}
```
### Extra

