---
tags:
  - cs2100/chapter5
  - cs/low_level
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/memory_addressing
next: /labyrinth/notes/cs/cs2100/MIPS_control_path

---
### Summary
MIPS processor datapath
![[complete_datapath.png]]
1. Fetch
	- retrieve instruction from memory
	- index according to program counter(PC) register
2. Decode
	- find the operation that's needed
3. Operand Fetch
	- fetch operands needed, either registers or immediate operand
4. Execute
	- perform the required operation in the ALU
5. Result Write
	- store the result of the operation back into a register, if necessary

Supported instructions
- `add`, `sub`, `and`, `or`
- `addi`
- `lw`, `sw`
- `beq`
- `slt`
> limited set of instructions supported by this simplified implementation, `andi` and `ori` do not work due to the sign extension on the immediate value
### Concept
PC register ^cfdb07
- incremented by 4 at every rising clock edge

```tikz
\begin{document}
\begin{tikzpicture}
	% Paths, nodes and wires:
	\draw[line width=1pt] (5, 4) -- (5, 3) -- (5.75, 2.5) -- (5, 2) -- (5, 1) -- (7, 1.75) -- (7, 3.25) -- cycle;
	\node[shape=rectangle, minimum width=0.59cm, minimum height=0.715cm] at (3.563, 1.5){} node[anchor=center, align=center, text width=0.202cm, inner sep=6pt] at (3.563, 1.5){4};
	\draw[line width=1pt, -latex] (3.875, 1.5) -- (5, 1.5);
	\node[shape=rectangle, draw, line width=1pt, minimum width=1.215cm, minimum height=0.965cm] at (1.5, 3.5){} node[anchor=center, align=center, text width=0.827cm, inner sep=6pt] at (1.5, 3.5){\textcolor{red}{PC}};
	\draw[line width=1pt, -latex] (2.125, 3.5) -- (5, 3.5);
	\draw[line width=1pt, -latex] (7, 2.5) -- (9, 2.5) -- (9, 4.75) -- (1.5, 4.75) -- (1.5, 4);
	\node[shape=rectangle, minimum width=0.965cm, minimum height=0.715cm] at (6.25, 2.5){} node[anchor=center, align=center, text width=0.577cm, inner sep=6pt] at (6.25, 2.5){\textcolor{red}{Add}};
\end{tikzpicture}
\end{document}
```
> clock helps to synchronise things, so that we only read PC after its been incremented

Multiplexers
- output one of multiple inputs
- control signal: selects which input to use

```tikz
\begin{document}
\begin{tikzpicture}
	% Paths, nodes and wires:
	\node[shape=rectangle, rounded corners, draw, line width=1pt, minimum width=1.465cm, minimum height=2.965cm] at (2.75, 3.5){};
	\node[shape=rectangle, minimum width=0.715cm, minimum height=0.715cm] at (0.625, 2.5){} node[anchor=center, align=center, text width=0.327cm, inner sep=6pt] at (0.625, 2.5){$i_{n-1}$};
	\node[shape=rectangle, minimum width=0.715cm, minimum height=0.715cm] at (0.625, 3.5){} node[anchor=center, align=center, text width=0.327cm, inner sep=6pt] at (0.625, 3.5){...};
	\node[shape=rectangle, minimum width=0.715cm, minimum height=0.715cm] at (0.625, 4.5){} node[anchor=center, align=center, text width=0.327cm, inner sep=6pt] at (0.625, 4.5){$i_0$};
	\node[shape=rectangle, minimum width=0.715cm, minimum height=0.715cm] at (2.5, 3.5){} node[anchor=center, align=center, text width=0.327cm, inner sep=6pt] at (2.5, 3.5){\textcolor{red}{MUX}};
	\node[shape=rectangle, minimum width=0.715cm, minimum height=0.715cm] at (4.875, 3.5){} node[anchor=center, align=center, text width=0.327cm, inner sep=6pt] at (4.875, 3.5){out};
	\node[shape=rectangle, minimum width=0.715cm, minimum height=0.715cm] at (3.375, 5.625){} node[anchor=center, align=center, text width=0.327cm, inner sep=6pt] at (3.375, 5.625){control};
	\draw[-latex] (1, 4.5) -- (2, 4.5);
	\draw[-latex] (1, 2.5) -- (2, 2.5);
	\draw[-latex] (1, 3.5) -- (2, 3.5);
	\draw[-latex] (3.5, 3.5) -- (4.5, 3.5);
	\draw[-latex] (2.75, 6) -- (2.75, 5);
\end{tikzpicture}
\end{document}
```


Register file
- collection of the registers
- control signal: 1 bit, determines whether to write to an output register
- inputs
	1. RR1, read register 1 -> first register to read from
	2. RR2, read register 2 -> second register to read from
	3. WR, write register -> which register to write to
	4. WD, write data -> data to be written
- outputs
	1. RD1, read data 1 -> value at the first register
	2. RD2, read data 2 -> value at the second register
![[reg_file.png]]

ALU
- arithmetic logic unit, for logical and arithmetic ops
- inputs
	- 2 32-bit numbers
- outputs
	- result of operation
	- 1 bit `is0` indicator
- control signal: 4 bits to select the operation to perform

Data memory
- data storage, RAM
- load/write data
- inputs
	1. address -> memory address to read from/write to
	2. WD, write data -> data to be written
- outputs
	- RD, read data -> data that was read
![[data_memory.png]]

Branching
- immediate operand is used to increment the PC register
- if branch not taken: `PC = PC + 4` as normal
- if branch is taken: `PC = PC + 4 + (imm << 2)`

![[datapath_branch.png]]
### Application
Datapath of some instructions

| Instruction        | RR1   | RR2   | WR    | WD(Register File)                   | Op1     | Op2    | Address        | WD(Data Memory) |
| ------------------ | ----- | ----- | ----- | ----------------------------------- | ------- | ------ | -------------- | --------------- |
| `lw $24, 0($15)`   | `$15` | `$24` | `$24` | `Mem([$15] + 0)`                    | `[$15]` | `0`    | `[$15] + 0`    | `[$24]`         |
| `beq $1, $3, 12`   | `$1`  | `$3`  | `$3`  | `[$1] - [$3]` or `Mem([$1] - [$3])` | `[$1]`  | `[$3]` | `[$1] - [$3]`  | `[$3]`          |
| `sub $25, $20, $5` | `$20` | `$5`  | `$25` | `[$20] - [$5]`                      | `[$20]` | `[$5]` | `[$20] - [$5]` | `[$5]`          |
> `beq` checks that the differnece between the operands are 0, in order to branch
### Extra
Circuitikz diagrams
> use [circuitikz designer](https://circuit2tikz.tf.fau.de/designer/) for a gui circuit builder
