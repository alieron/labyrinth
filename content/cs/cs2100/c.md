---
tags:
  - cs2100/chapter1
  - cs/fundamentals
  - lang/c
complete: true
next: /labyrinth/notes/cs/cs2100/data_representation

---
### Summary
Operator precedence ^b4ee7e
```c
1.  ++(suffix) --(suffix) () [] . ->
2.  ++(prefix) --(prefix) ! ~ (type)(cast) *(dereference) &(address-of) sizeof
3.  * / %
4.  + -
5.  << >>
6.  < <= > >=
7.  == !=
8.  &(logical)
9.  ^
10. |
11. &&
12. ||
13. ?: (ternary)
14. = += -= *= /= %= <<= >>= &= ^= |=
15. ,
```

Preprocessor directives
```c
// importing header files/libraries
#include <stdio.h>

// macros 
#define PI 3.142 // use all CAPs for macro
```
> note the absence of ';' in the preprocessor directives

Format specifiers ^0f41a6

| Placeholder | Variable Type   | Function Use                     |
| ----------- | --------------- | -------------------------------- |
| %c          | char            | printf / scanf                   |
| %d          | int             | printf / scanf                   |
| %f          | float or double | printf                           |
| %f          | float           | scanf                            |
| %lf         | double          | scanf                            |
| %e          | float or double | printf (for scientific notation) |
> %5d -> integer with width of 5, right justified
> %8.3f -> real number with width of 8 and 3 decimal places, right justified

Escape sequences

| Escape sequence | Meaning        | Result                                            |
| --------------- | -------------- | ------------------------------------------------- |
| \n              | New line       | Subsequent output will appear on the next line    |
| \t              | Horizontal tab | Move to the next tab position on the current line |
| \\"             | Double quote   | Display a double quote "                          |
| %%              | Percent        | Display a percent character %                     |
> see [Learn X in Y minutes: C](https://learnxinyminutes.com/c/) for complete guide to C
### Concept
#### Compilation
```bash
// compiling to executable file
gcc test.c -o test

// compiling with all warnings
gcc -Wall test.c
```

#### Variables
```c
int x; // initialization
x = 2; // declaration

int y = 2; // initialization and declaration
```

#### Command line arguments
- pass in command line arguments
- `argc` - number of command line args
- `argv` - array of the argument strings, separated by space
- `envp` - array of environment variables

```c
int main (int argc, char *argv[], char *envp[]) {
	int i;
	
	for (i = 0; i < argc; i++) {
		printf("Arg %d: %s\n",i, argv[i] );
	}
	
	i=0;
	while(vp[i] != NULL) {
		printf("Env %d: %s\n", i, vp[i]);
		i++;
	}  
	
	return 0; 
}
```
### Application
Macros
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