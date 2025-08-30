---
tags:
  - cs2100/chapter6
  - cs/low_level
  - lang/c
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/logical_instructions
next: /labyrinth/notes/cs/cs2100/control-flow_instructions

---
### Summary
Load word/byte
- I-type

```mips
lw dest, n(addr) # dest <- *(addr + n)
lb dest, n(addr) # dest <- *(addr + n)
```
> `lw` will error if `(addr + n) % 4 != 0`, due to word alignement

Store word/byte
- I-type

```mips
sw src, n(addr) # *(addr + n) <- src
sb src, n(addr) # *(addr + n) <- src
```

Unaligned load/store word
- pseudo-instruction

```mips
ulw dest, n(addr) # dest <- *(addr + n)
usw src, n(addr)  # *(addr + n) <- src
```
### Concept
Memory
- viewed as a large single-dimension array
- byte addressing -> each address indexes one byte in memory

Word alignment
- word -> usually 2ⁿ bytes, in MIPS a word is 4 bytes(32 bits)
- aligned words would be at addresses that are multiples of 2ⁿ
> each instruction occupies 32 bits

Offset
- use the `n(addr)` to apply an offset to an address, the resulting address is `n + addr`
### Application
Swapping two elements in an array
```c
void swap(int v[], int k) {
	int tmp;
	tmp = v[k];
	v[k] = v[k+1];
	v[k+1] = tmp;
}
```
```mips
# address v at $a0, int k at $a1
sll $v0, $a1, 2 # k * 4 since an int takes up 4 bytes
add $v0, $a0, $v0 # add to base address of v
lw $t0, 0($v0) # load the int at the base address
lw $s0, 4($v0) # load the int at the base address + 4
sw $s0, 0($v0) # store the int at the base address
sw $t0, 4($v0) # store the int at the base address + 4
```