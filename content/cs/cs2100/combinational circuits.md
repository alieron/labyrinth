---
tags:
  - cs2100/chapter14
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2100/karnaugh_map
next: /labyrinth/notes/cs/cs2100/MSI_components

---
### Summary
Gate-level design
- circuit constructed with pure logic gates
- focus on the logical expression

Block-level design
- components abstracted as "black boxes"
- focus on the higher level idea of each component

Binary coded decimal(BCD)

Circuit delay
- a gate/block needs to wait for the slowest input

$$
t_{o} = max(t_{1},t_{2},\dots,t_{n}) + t_{g}
$$
### Concept
Full adder
- arithmetic addition of 3 single bits, 3rd is for the carry bit
- 2-bit output
- can be implemented using 2 [half adders](/labyrinth/notes/cs/cs2100/logic_circuits#^aaa93d)

| $X$ | $Y$ | $Z$ | $C$ | $S$ |
| :-: | :-: | :-: | :-: | :-: |
|  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  1  |  0  |  1  |
|  0  |  1  |  0  |  0  |  1  |
|  0  |  1  |  1  |  1  |  0  |
|  1  |  0  |  0  |  0  |  1  |
|  1  |  0  |  1  |  1  |  0  |
|  1  |  1  |  0  |  1  |  0  |
|  1  |  1  |  1  |  1  |  1  |
$$
\begin{align*}
&\text{Goal:} \qquad CS = X+Y+Z\\
\\
C & = X\cdot Y+X\cdot Z+Y\cdot Z\\
& = X\cdot Y + (X+Y)\cdot Z \\
& = X\cdot Y + ((X\oplus Y) + X\cdot Y)\cdot Z \\
& = X\cdot Y + (X\oplus Y)\cdot Z + X\cdot Y \cdot Z && \text{(Distributivity)} \\
& = X\cdot Y + (X\oplus Y)\cdot Z && \text{(Absorption)} \\
\\
S & = X'\cdot Y'\cdot Z+X'\cdot Y\cdot Z'+X\cdot Y'\cdot Z'+X\cdot Y\cdot Z \\
& = X'\cdot (Y'\cdot Z+ Y\cdot Z')+X\cdot (Y'\cdot Z'+ Y\cdot Z) && \text{(Distributivity)} \\
& = X'\cdot(Y\oplus Z) + X \cdot(Y \oplus Z)' \\
& = X \oplus Y\oplus Z
\end{align*}
$$
![[full_adder.png]]


4-bit parallel adder
- arithmetic addition of two 4-bit binary numbers and a carry in
- 5-bit output

$$
\begin{align*}
\text{Bitwise sum and carry:} &&& C_{i+1}S_{i} = X_{i}+Y_{i}+C_{i} &&& \text{(Full Adder)} 
\end{align*}
$$
![[4-bit_parallel_adder.png]]

4-bit magnitude comparator
- compare two 4-bit binary numbers
- 3 outputs for `<`, `>` and `=`

$$
\begin{gather*}
x = A \odot B\\
\\
A = B \implies x=1 \\
A\neq B \implies x=0
\end{gather*}
$$
![[4-bit_comparator.png]]
### Application
BCD to excess-3
$$
\begin{gather*}
\text{BCD:} & ABCD \\
\text{Excess-3:} & WXYZ \\
\\
& WXYZ = ABCD + 0011_{2} & \text{(4-bit Adder)}
\end{gather*}
$$

### Extra
Expansion of XOR
$$
\begin{align*}
a \oplus b & = a'\cdot b+a\cdot b' \\
\\
(a \oplus b) + a\cdot b & = a'\cdot b+a\cdot b' + a\cdot b \\
& = {\color{aqua} a'\cdot b } + {\color{orange} a\cdot b' } + {\color{aqua} a\cdot b } + {\color{orange} a\cdot b } && \text{(Idempotency)} \\
& = {\color{aqua} (a'+a)\cdot b } + {\color{orange} a\cdot(b'+b) } && \text{(Distributivity)} \\
& = 1\cdot b + a\cdot1 && \text{(Negation)} \\
& = a + b
\end{align*}
$$

Negation of XOR
$$
\begin{align*}
a \oplus b & = a'\cdot b+a\cdot b' \\
\\
(a \oplus b )' & = (a'\cdot b+a\cdot b')' \\
& = (a'\cdot b)'\cdot(a\cdot b')' && \text{(De Morgan's)} \\
& = ((a')'+b')\cdot(a'+(b')') && \text{(De Morgan's)} \\
& = (a+b')\cdot(a'+b) && \text{(Involution)} \\
& = a\cdot a'+b'\cdot a' + a\cdot b+b'\cdot b && \text{(Distributivity)} \\
& = 0+b'\cdot a' + a\cdot b+0 && \text{(Negation)} \\
& = b'\cdot a' + a\cdot b \\
& = a \odot b
\end{align*}
$$