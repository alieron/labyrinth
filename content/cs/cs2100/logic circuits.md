---
tags:
  - cs2100/chapter12
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/standard_forms
next: /labyrinth/notes/cs/cs2100/karnaugh_map

---
Succeeds: [propositions](/labyrinth/notes/math/cs1231s/propositions)
### Summary
Logic gates

| Operation |          Gate           |            Output            |
| :-------: | :---------------------: | :--------------------------: |
|    NOT    | ![[not_gate.png\|120]]  |             $A'$             |
|    AND    | ![[and_gate.png\|120]]  |         $A \cdot B$          |
|    OR     |  ![[or_gate.png\|120]]  |            $A+B$             |
|   NAND    | ![[nand_gate.png\|120]] | $(A\cdot B)'\equiv A' + B'$  |
|    NOR    | ![[nor_gate.png\|120]]  | $(A + B)'\equiv A' \cdot B'$ |
|  [XOR](/labyrinth/notes/cs/XOR)  | ![[xor_gate.png\|120]]  |         $A \oplus B$         |
|   XNOR    | ![[xnor_gate.png\|120]] |       $(A \oplus B)'$        |
> hollow circle represents a negation, solid circle represents a wire intersection

Universal gates

| Operation |          NAND          |                                  |          NOR          |                           |
| :-------: | :--------------------: | :------------------------------: | :-------------------: | :-----------------------: |
|    NOT    | ![[not_nand.png\|120]] |     $(A\cdot A)' \equiv A'$      | ![[not_nor.png\|120]] |    $(A+A)' \equiv A'$     |
|    AND    | ![[and_nand.png\|200]] | $((A\cdot B)')' \equiv A\cdot B$ | ![[and_nor.png\|200]] | $(A'+B')'\equiv A\cdot B$ |
|    OR     | ![[or_nand.png\|200]]  |   $(A'\cdot B')'\equiv A + B$    | ![[or_nor.png\|200]]  |  $((A+B)')' \equiv A+B$   |

Half adder ^aaa93d
- arithmetic addition of 2 single bits
- 2-bit output

| $A$ | $B$ | $C$ | $S$ |
| --- | --- | --- | --- |
| 0   | 0   | 0   | 0   |
| 0   | 1   | 0   | 1   |
| 1   | 0   | 0   | 1   |
| 1   | 1   | 1   | 0   |
$$
\begin{align*}
S &= (A'\cdot B)+(A\cdot B') = A\oplus B \\
C &= A\cdot B
\end{align*}
$$
![[half_adder.png]]
### Concept
Logic circuits
- circuit made up of logic gates
- fan in -> number of inputs to a gate
- **every input** must be connected for the circuit to work

Universal gates
- any boolean function can be built using only NOT, AND and OR
- `{NOT, AND, OR}` is a complete set of logic

NAND circuits
- NAND can implement NOT, AND and OR
- `{NAND}` is a complete set of logic
- for [SOP](/labyrinth/notes/cs/cs2100/standard_forms) expressions

NOR circuits
- NOR can implement NOT, AND and OR
- `{NOR}` is a complete set of logic
- for [POS](/labyrinth/notes/cs/cs2100/standard_forms) expressions
### Application
SOP to NAND circuit
$$
F = A\cdot B + C'\cdot D + E
$$
![[sop_nand.png]]

POS to NOR circuit
$$
G = (A+B)\cdot (C'+D)\cdot E
$$
![[pos_nor.png]]