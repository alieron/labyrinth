---
tags:
  - cs2100/chapter8
  - cs/low_level
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/storage_architecture
next: /labyrinth/notes/cs/cs2100/MIPS_datapath

---
### Summary
Endianness
- Big-endian -> most significant **byte** in lowest address
- Little-endian -> least significant **byte** in lowest address
$$
\begin{gather*}
& \text{0x}deadd00d \\
\text{Big-endian:} &
\begin{array}{|c|c|c|c|}
\hline
de & ad & d0 & 0d \\
\hline
\end{array} \\
\text{Little-endian:} &
\begin{array}{|c|c|c|c|}
\hline
0d & d0 & ad & de \\
\hline
\end{array}
\end{gather*}
$$
> affects the order of bytes within a multi-byte word, within the byte nothing changes

Register addressing
- [R-type](/labyrinth/notes/cs/cs2100/instruction_encoding#^393b46)
- operand is specified in registers

Immediate addressing
- [I-type](/labyrinth/notes/cs/cs2100/instruction_encoding#^70d48c)
- operand is specified in the instruction

Displacement addressing
- [I-type](/labyrinth/notes/cs/cs2100/instruction_encoding#^70d48c) - load/store
- operand is in memory
### Concept
Addressing modes ^d52034
- ways to specify an operand

| Addressing mode   | Example               | Meaning                                |
| ----------------- | --------------------- | -------------------------------------- |
| Register          | `add r1, r2`          | `r1 <- r1 + r2`                        |
| Immediate         | `add r1, 3`           | `r1 <- r1 + 3`                         |
| Displacement      | `add r1, 8(r2)`       | `r1 <- r1 + mem[r2+8]`                 |
| Register indirect | `add r1, (r2)`        | `r1 <- r1 + mem[r2]`                   |
| Indexed/Base      | `add r1, (r2+r3)`     | `r1 <- r1 + mem[r2+r3]`                |
| Direct/Absolute   | `add r1, (100)`       | `r1 <- r1 + mem[100]`                  |
| Memory indirect   | `add r1, @(r2)`       | `r1 <- r1 + mem[mem[r2]]`              |
| Auto-increment    | `add r1, (r2)+`       | `r1 <- r1 + mem[r2]`<br>`r2 <- r2 + x` |
| Auto-decrement    | `add r1, -(r2)`       | `r2 <- r2 - x`<br>`r1 <- r1 + mem[r2]` |
| Scaled            | `add r1, 100(r2)[r3]` | `r1 <- r1 + mem[100+r2+r3*x]`          |
