---
tags:
  - cs2100/chapter5
  - cs/low_level
  - lang/c
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/MIPS
next: /labyrinth/notes/cs/cs2100/logical_instructions

---
### Summary
Add
- R-type

```mips
add dest, src1, src2 # dest <- src1 + src2
```

Add immediate
- I-type

```mips
addi dest, src, n # dest <- src + n
```
> `n` will be a 16-bit [2s complement](/labyrinth/notes/cs/cs2100/signed_numbers#^bc6f6a) number, sign extended to 32-bit

Subtract
- R-type

```mips
sub dest, src1, src2  # dest <- src1 - src2
```
> there is no `subi` instruction, use `addi` with the 2s complement for `-n`

Move
- pseudo-instruction

```mips
move dest, src # dest <- src

# is translated to
add dest, src, $zero # dest <- src + 0
```
### Concept
Register instructions(R-type)
- three registers

Immediate instructions(I-type)
- two registers and one immediate value
- immediate value is a 16-bit number
> the three types of MIPS instructions are R-type, I-type and [J-type](/labyrinth/notes/cs/cs2100/control-flow_instructions#^ecd6eb)

Pseudo-instructions
- syntatic sugar, provides convenience
- translated to real instructions before being assembled
### Application
Complex arithmetic operations
```c
e = (a + b) - (c + d);
```
```mips
# variable mapping
# a -> $s0
# b -> $s1
# c -> $s2
# d -> $s3
# e -> $s4
add $t0, $s0, $s1 # $t0 <- a + b
add $t1, $s2, $s3 # $t1 <- c + d
sub $s4, $t0, $t1 # 
```