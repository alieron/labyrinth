---
tags:
  - cs2100/chapter7
  - cs/low_level
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/control-flow_instructions
next: /labyrinth/notes/cs/cs2100/ISA

---
### Summary
R-type ^393b46
- register addressing
```mips
arith rd, rs, rt

shift rd, rt, shamt
```
$$
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{rs} & \text{rt} & \text{rd} & \text{shamt} & \text{funct} \\
\hline \text{6 bits} & \text{5 bits} & \text{5 bits} & \text{5 bits} & \text{5 bits} & \text{6 bits} \\
\hline
\end{array}
$$
> note `rs`, `rt` and `rd` are all only 5 bits since there are only 32 registers

I-type ^70d48c
- immediate addressing
- base addressing(load/store)
- PC-relative addressing(branching)

```mips
op rt, rs, imm

load/store rt, imm(rs)

branch rs, rt, label
```
$$
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{rs} & \text{rt} & \text{imm} \\
\hline \text{6 bits} & \text{5 bits} & \text{5 bits} & \text{16 bits} \\
\hline
\end{array}
$$

Branching
- branch not taken
	- `PC = PC + 4`, increment to next word/instruction
- branch taken
	- `PC = (PC + 4) + (imm * 4)`, skip over `imm` instructions
- 16 bits can specify 18 bits, allows branching to $\pm2^{15}$ words or $\pm2^{17}$ bytes

J-type
- pseudo-direct addressing

$$
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{target-address} \\
\hline \text{6 bits} & \text{26 bits} \\
\hline
\end{array}
$$

Jumping
- 26 bits can specify 28 bits, allows branching to $\pm2^{25}$ words or $\pm2^{27}$ bytes
	- ≈256MB
- 4 most significant bits are taken from `PC + 4`
- doesn't cover all of the 32-bit memory addresses
### Concept
R-type

| Field  | Purpose                                                               |
| ------ | --------------------------------------------------------------------- |
| opcode | specifies the instruction, 0 for all R-type instructions              |
| rs     | source register, 1st operand                                          |
| rt     | target register, 2nd operand                                          |
| rd     | destination register                                                  |
| shamt  | amount that a shift instruction will shift by                         |
| funct  | specifies the exact instruction alongside opcode, usually the variant |

I-type

| Field  | Purpose                                                                            |
| ------ | ---------------------------------------------------------------------------------- |
| opcode | specifies the instruction, 0 for all R-type instructions                           |
| rs     | source register, 1st operand                                                       |
| rt     | target register, 2nd operand                                                       |
| imm    | immediate value, treated as a 16-bit signed int or unsigned for bitwise operations |

Program counter
- special register that stores the address of the next instruction to be executed
- labels specify a **target address**, we can take the relative distance between the target and the PC to signify a "jump"
- next we can assume instructions are word aligned, so we can ignore the last two binary places

Encoding registers
- use the [register numbers](/labyrinth/notes/cs/cs2100/MIPS#^44e5a0)
### Application
Add instruction(R-type)
```mips
add $t0, $s0, $s1
```
$$
\begin{gather*}
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{rs} & \text{rt} & \text{rd} & \text{shamt} & \text{funct} \\
\hline 0_{16} & 10_{16} & 17_{10}=11_{16} & 8_{16} & 0_{16} & 20_{16} \\
\hline 000000 & 10000 & 10001 & 01000 & 00000 & 100000 \\
\hline
\end{array} \\
\\
\begin{array}{rc}
\text{binary:} & 0000 & 0010 & 0001 & 0001 & 0100 & 0000 & 0010 & 0000 \\
\text{hex:} & 0 & 2 & 1 & 1 & 4 & 0 & 2 & 0 
\end{array}
\end{gather*}
$$

Shift instruction(R-type)
```mips
sll $s4, $s4, 4
```
$$
\begin{gather*}
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{rs} & \text{rt} & \text{rd} & \text{shamt} & \text{funct} \\
\hline 0_{16} & 0_{16} & 20_{10}=14_{16} & 14_{16} & 4_{16} & 0_{16} \\
\hline 000000 & 00000 & 10100 & 10100 & 00100 & 000000 \\
\hline
\end{array} \\
\\
\begin{array}{rc}
\text{binary:} & 0000 & 0000 & 0001 & 0100 & 1010 & 0001 & 0000 & 0000 \\
\text{hex:} & 0 & 0 & 1 & 4 & a & 1 & 0 & 0 
\end{array}
\end{gather*}
$$

Add-immediate instruction(I-type)
```mips
addi $t8, $s7, -50
```
$$
\begin{gather*}
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{rs} & \text{rt} & \text{imm}  \\
\hline 8_{16} & 23_{10}=17_{16} & 18_{16} & 8_{16} \\
\hline 001000 & 10111 & 11000 & 1111 1111 1100 1110 \\
\hline
\end{array} \\
\\
\begin{array}{rc}
\text{binary:} & 0010 & 0010 & 1111 & 1000 & 1111 & 1111 & 1100 & 1110 \\
\text{hex:} & 2 & 2 & f & 8 & f & f & c & e 
\end{array}
\end{gather*}
$$
> `imm` is [sign extended](/labyrinth/notes/cs/cs2100/signed_numbers#^0e56f7), since its interpreted as a signed int

Load word instruction(I-type)
```mips
lw $t2 12($s3)
```
$$
\begin{gather*}
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{rs} & \text{rt} & \text{imm}  \\
\hline 23_{16} & 19_{10}=13_{16} & a_{16} & c_{16} \\
\hline 100011 & 10011 & 01010 & 0000 0000 0000 1100 \\
\hline
\end{array} \\
\\
\begin{array}{rc}
\text{binary:} & 1000 & 1110 & 0110 & 1010 & 0000 & 0000 & 0000 & 1100 \\
\text{hex:} & 8 & e & 6 & a & 0 & 0 & 0 & c 
\end{array}
\end{gather*}
$$

Branch instruction(I-type)
```mips
beq $s0, $s1, Equal
...    # <- current value of PC
...
...
Equal: # <- target address = PC + 3
```
$$
\begin{gather*}
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{rs} & \text{rt} & \text{imm}  \\
\hline 4_{16} & 10_{16} & 17_{10}=11_{16}  & 3_{16} \\
\hline 000100 & 10000 & 10001 & 0000 0000 0000 0011 \\
\hline
\end{array} \\
\\
\begin{array}{rc}
\text{binary:} & 0001 & 0010 & 0010 & 0001 & 0000 & 0000 & 0000 & 0011 \\
\text{hex:} & 1 & 2 & 2 & 1 & 0 & 0 & 0 & 3 
\end{array}
\end{gather*}
$$

Jump instruction
```mips
Loop:	... # addr: 8
...
...
j    Loop # addr: 20
```
$$
\begin{gather*}
\begin{array}{rc}
\text{PC}\to & 20_{10} &  {\color{red}0000}\dots101{\color{red}00} \\
\text{target}\to & 8_{10} & {\color{red}0000}\dots010{\color{red}00}
\end{array} \\
\\
\begin{array}{|c|c|c|c|c|c|}
\hline \text{opcode} & \text{target} \\
\hline 2_{16} & 010_{2} \\
\hline 000010 & 00 0000 0000 0000 0000 0000 0010 \\
\hline
\end{array} \\
\\
\begin{array}{rc}
\text{binary:} & 0000 & 1000 & 0000 & 0000 & 0000 & 0000 & 0000 & 0010 \\
\text{hex:} & 0 & 8 & 0 & 0 & 0 & 0 & 0 & 2 
\end{array}
\end{gather*}
$$