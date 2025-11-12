---
tags:
  - cs2100/chapter3
  - cs/low_level
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2100/arithmetic_instructions
next: /labyrinth/notes/cs/cs2100/memory_instructions

---
### Summary
Shift left logical
- R-type
- multiply by 2ⁿ
- n is a **5-bit** unsigned number

```mips
sll dest, src, n # dest <- src << n
```
> 5 bits since the max that ever needs to be shifted is $2^5 - 1 = 31$ 

Shift right logical
- R-type
- multiply by 2⁻ⁿ
- n is a **5-bit** unsigned number

```mips
srl dest, src, n # dest <- src >> n
```

AND
- R-type
- bitwise AND

```mips
and dest, src1, src2 # dest <- src1 & src2 
```

AND immediate
- I-type

```mips
andi dest, src, n # dest <- src & n
```

OR
- R-type
- bitwise OR

```mips
or dest, src1, src2 # dest <- src1 | src2
```

OR immediate
- I-type

```mips
ori dest, src, n # dest <- src | n
```

NOR
- R-type

```mips
nor dest, src1, src2 # dest <- ~(src1 | src2)
```
> no `nori` instruction since there is not much need for it

[XOR](/labyrinth/notes/cs/xor)
- R-type

```mips
xor dest, src1, src2 # dest <- src1 ^ src2
```

XOR immediate
- I-type

```mips
xori dest, src, n # dest <- src ^ n
```

NOT
- pseudo-instruction
- can be made from NOR

```mips
not dest, src # dest <- ~src

# is translated to
nor dest, src, $zero # dest <- ~(src | 0)
```
### Concept
Loading 32-bit numbers
- only using immediate instructions
- load the upper 16-bits, then set the lower 16-bits

```mips
lui dest, n # dest <- n << 16
ori dest, src, x # dest <- src | x
```
### Application
Masking
- preserve select bits, discard the rest

```mips
andi $t0, $t0, 0xFFF
```
$$
\begin{gather*}
\text{\$t0} = \text{0xAAAA} \\
\text{0xAAAA} \land \text{0xFFF} \\
\\
\begin{array} {rr}
 & 1010\ 1010\ 1010\ 1010 \\
\text{AND} & 0000\ 1111\ 1111\ 1111 \\
\hline
 & 0000\ 1010\ 1010\ 1010
\end{array}
\end{gather*}
$$

Loading a 32-bit number
```mips
lui $t0, 0xAAAA # 1010 1010 1010 1010
ori $t0, $t0, 0xF0F0 # 1111 0000 1111 0000
# 1010 1010 1010 1010 1111 0000 1111 0000
```
$$
\begin{gather*}
(\text{0xAAAA} \ll 16) + \text{0xF0F0} = \text{0xAAAAF0F0} \\
\\
\begin{array} {rr|r}
 & 1010\ 1010\ 1010\ 1010 & 0000\ 0000\ 0000\ 0000 \\
\text{OR} & 0000\ 0000\ 0000\ 0000 & 1111\ 0000\ 1111\ 0000 \\
\hline
 & 1010\ 1010\ 1010\ 1010 & 1111\ 0000\ 1111\ 0000
\end{array}
\end{gather*}
$$

XOR for selective inversion
$$
\begin{gather*}
x\oplus i = \begin{cases}
x & if \ i = 0 \\
\sim x & if \ i =1
\end{cases} \\
\\
\text{0xDEAD} \oplus \text{0xAAAA} \\
\\
\begin{array} {rr}
 & {\color{orangered}1 }1{\color{orangered}0 }1\ {\color{orangered}1 }1{\color{orangered}1 }0\ {\color{orangered}1 }0{\color{orangered}1 }0\ {\color{orangered}1 }1{\color{orangered}0 }1 \\
\text{XOR} & 1010\ 1010\ 1010\ 1010 \\
\hline
 & {\color{orangered}0 }1{\color{orangered}1 }1\ {\color{orangered}0 }1{\color{orangered}0 }0\ {\color{orangered}0 }0{\color{orangered}0 }0\ {\color{orangered}0 }1{\color{orangered}1 }1
\end{array}
\end{gather*}
$$
> while AND can be used to select bits, XOR can invert a selection of bits