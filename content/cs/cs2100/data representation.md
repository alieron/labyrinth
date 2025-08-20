---
tags:
  - cs2100/chapter1
  - cs/fundamentals
  - cs/low_level
  - lang/c
complete: true
next: /labyrinth/notes/cs/cs2100/number_systems

---
### Summary
Primitive types in [C](/labyrinth/notes/cs/cs2100/C) ^9f8289

| kind           | type                 | size(bits) | value range                                 |
| -------------- | -------------------- | ---------- | ------------------------------------------- |
| byte           | `char`               | 8          | $[-2^7, 2^7-1]$                             |
|                | `unsigned char`      | 8          | $[0, 2^8-1]$                                |
| integer        | `short int`          | 8          | $[-2^{7}, 2^{7}-1]$                         |
|                | `unsigned short int` | 8          | $[0, 2^8-1]$                                |
|                | `int`                | 32         | $[-2^{31}, 2^{31}-1]$                       |
|                | `unsigned int`       | 32         | $[0, 2^{32}-1]$                             |
|                | `long int`           |            |                                             |
|                | `unsigned long int`  |            |                                             |
| floating-point | `float`              | 32         | $3.4\times 10^{-38}$ to $3.4\times 10^{38}$ |
|                | `double`             | 64         |                                             |
|                | `long double`        | 80         |                                             |
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
Different types
```c
int num = 65;
printf("num (in %%d) = %d\n", num); // prints 70
printf("num (in %%c) = %c\n", num); // prints A

char ch = 'F';
printf("ch (in %%c) = %c\n", ch); // prints F
printf("ch (in %%d) = %d\n", ch); // prints 70
```
> `char` decodes/encodes the value using the [ASCII](/labyrinth/notes/cs/cs2100/ASCII) convention