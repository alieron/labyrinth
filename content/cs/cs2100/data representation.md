---
tags:
  - cs2100/chapter2
  - cs/fundamentals
  - cs/low_level
  - lang/c
complete: true
prev: /labyrinth/notes/cs/cs2100/C
next: /labyrinth/notes/cs/cs2100/number_systems

---
### Summary
Primitive types in [C](/labyrinth/notes/cs/cs2100/C) ^9f8289

| kind           | type                 | size(bytes) | size(bits) | value range                                 |
| -------------- | -------------------- | ----------- | ---------- | ------------------------------------------- |
| byte           | `char`               | 1           | 8          | $[-2^7, 2^7-1]$                             |
|                | `unsigned char`      | 1           | 8          | $[0, 2^8-1]$                                |
| integer        | `short int`          | 2           | 16         | $[-2^{15}, 2^{15}-1]$                       |
|                | `unsigned short int` | 2           | 16         | $[0, 2^{16}-1]$                             |
|                | `int`                | 4           | 32         | $[-2^{31}, 2^{31}-1]$                       |
|                | `unsigned int`       | 4           | 32         | $[0, 2^{32}-1]$                             |
|                | `long int`           | 8           | 64         | $[-2^{63}, 2^{63}-1]$                       |
|                | `unsigned long int`  | 8           | 64         | $[0, 2^{64}-1]$                             |
| floating-point | `float`              | 4           | 32         | $3.4\times 10^{-38}$ to $3.4\times 10^{38}$ |
|                | `double`             | 8           | 64         |                                             |
|                | `long double`        | 16          | 128        |                                             |
> may change depending on architecture, x86_64 vs 32-bit
### Concept
Units
- byte = 8 bits
- nibble = 4 bits
- word = n bytes

Capacity
- $n$ bits can represent up to $2^n$ values
- to represent $m$ values, $\lceil \log_{2}m \rceil$ bits are required
> 0 is counted as a value
### Application
Sizes of different types
```c
#include <stdio.h>

int main(void) {
	printf("Size of 'char' (in bytes): %d\n", sizeof(char));               // 1

	printf("Size of 'short int' (in bytes): %d\n", sizeof(short int));     // 2
	printf("Size of 'int' (in bytes): %d\n", sizeof(int));                 // 4
	printf("Size of 'long int' (in bytes): %d\n", sizeof(long int));       // 8
	
	printf("Size of 'float' (in bytes): %d\n", sizeof(float));             // 4
	printf("Size of 'double' (in bytes): %d\n", sizeof(double));           // 8
	printf("Size of 'long double' (in bytes): %d\n", sizeof(long double)); // 16
	
  return 0;
}
```
> when run on a 64-bit Arch Linux

Interpretation of different types
```c
int num = 65;
printf("num (in %%d) = %d\n", num); // prints 70
printf("num (in %%c) = %c\n", num); // prints A

char ch = 'F';
printf("ch (in %%c) = %c\n", ch); // prints F
printf("ch (in %%d) = %d\n", ch); // prints 70
```
> `char` decodes/encodes the value using the [ASCII](/labyrinth/notes/cs/cs2100/ASCII) convention