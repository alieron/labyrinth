---
tags:
  - cs2100/chapter6
  - cs/low_level
  - lang/c
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/memory_instructions
next: /labyrinth/notes/cs/cs2100/instruction_encoding

---
### Summary
Branch if equal
- I-type

```mips
beq src1, src2, label # if (src1 == src2) goto label
```

Branch if not equal
- I-type

```mips
bne src1, src2, label # if (src1 != src2) goto label
```

Jump(unconditional)
- J-type

```mips
j label # goto label
```

Set on less than
- R-type

```mips
slt dest, src1, src2 # if (src1 < src2) dest <- 1
```

Branch if less than
- pseudo-instruction

```mips
blt src1, src2, label # if (src1 < src2) goto label

# is translated to
slt tmp, src1, src2
bne tmp, $0, label 
```
### Concept
Jump instructions(J-type) ^ecd6eb
- jump to a label

Labels
- anchor to a position in assembly code
- a branch target

Decision making
- Selection branch/jump downwards
	- if-else
- Repetition branch/jump upwards
	- for loops
	- while loops
### Application
If-else statement
```c
if (a == b) {
	c += 5;
} else {
	c += 10;
}
```
```mips
# variable mapping
# a -> $s0
# b -> $s1
# c -> $s2
beq $s0, $s1, Equal
addi $s2, $s2, 10 # runs if not branched
j Exit # we don't want it to execute the other branch
Equal: addi $s2, $s2, 5
Exit:

# or
bne $s0, $s1, NotEqual
addi $s2, $s2, 5
j Exit
NotEqual: addi $s2, $s2, 10
Exit:
```

While loop
```c
while (a == b) { // infinite loop
	c += 5;
}
```
```mips
# variable mapping
# a -> $s0
# b -> $s1
# c -> $s2
Loop: bne $s0, $s1, Exit # check condition on every iteration
addi $s2, $s2, 5
j Loop # go back and repeat
Exit:
```

For loop
```c
for (int i = 0; i < 10; i++) {
	a += 5;
}
// can be thought of as
int i = 0;
while (i < 10) {
	a += 5;
	i++;
}
```
```mips
# variable mapping
# a -> $s0
# i -> $t0
add $t0, $0, $0 # initialize i to 0
addi $t1, $0, 10 # store 10 in an arbitrary register
Loop: beq $t0, $t1, Exit
addi $s0, $s0, 5
addi $t0, $t0, 1
j Loop
Exit:
```

Do-while loop
```c
do {
	a += 5;
} while (a <= b);
```
```mips
# variable mapping
# a -> $s0
# b -> $s1
Loop: addi $s20, $s0, 5
slt $t0, $s1, $s0 # if b < a thats our condition to exit, sets 1 if exit, 0 if repeat
beq $t0, $0, Loop # if 0 repeat
```