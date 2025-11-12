---
tags:
  - cs2100/chapter9
  - cs/low_level
complete: true
prev: /labyrinth/notes/cs/cs2100/combinational_circuits
next: /labyrinth/notes/cs/cs2100/sequential_circuits

---
### Summary
Active high/low ^4e63c3
- active high - normal outputs: true is high
- active low - negated outputs: true is low

Constructing decoders
- use two smaller decoders with the additional input and its negation to the enables

![[larger_decoder.png]]
> watch for whether the decoders are 1-enable or 0-enable

Constructing multiplexers
- use the MSB to discriminate between the outputs of two smaller multiplexers on the other bits

![[larger_mux.png]]
### Concept
Decoders ^c776bf
- `n`-bit BCD to `2ⁿ` ouputs
- each output is a [minterm](/labyrinth/notes/cs/cs2100/standard_forms#^a0f561)

$$
O_{i} = m_{i}
$$
- 2:4 decoder:

| $I_{1}$ | $I_{0}$ | $O_{3}$ | $O_{2}$ | $O_{1}$ | $O_{0}$ |
| :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|    0    |    0    |    0    |    0    |    0    |  ==1==  |
|    0    |    1    |    0    |    0    |  ==1==  |    0    |
|    1    |    0    |    0    |  ==1==  |    0    |    0    |
|    1    |    1    |  ==1==  |    0    |    0    |    0    |
$$
\begin{align*}
O_{0} & = I_{1}'\cdot I_{0}' = m_{0} \\
\\
O_{1} & = I_{1}'\cdot I_{0} = m_{1} \\
\\
O_{2} & = I_{1}\cdot I_{0}' = m_{2} \\
\\
O_{3} & = I_{1}\cdot I_{0} = m_{3}
\end{align*}
$$
- 2:4 decoder with 1-enable:

| $E$ | $I_{1}$ | $I_{0}$ | $O_{3}$ | $O_{2}$ | $O_{1}$ | $O_{0}$ |
| :-: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|  0  |    X    |    X    |    0    |    0    |    0    |    0    |
|  1  |    0    |    0    |    0    |    0    |    0    |  ==1==  |
|  1  |    0    |    1    |    0    |    0    |  ==1==  |    0    |
|  1  |    1    |    0    |    0    |  ==1==  |    0    |    0    |
|  1  |    1    |    1    |  ==1==  |    0    |    0    |    0    |
$$
\begin{align*}
O_{0} & = E\cdot I_{1}'\cdot I_{0}' \\
\\
O_{1} & = E\cdot I_{1}'\cdot I_{0} \\
\\
O_{2} & = E\cdot I_{1}\cdot I_{0}' \\
\\
O_{3} & = E\cdot I_{1}\cdot I_{0}
\end{align*}
$$

Encoder
- `2ⁿ` inputs to `n`-bit BCD
- **only one input can be 1**
- 4:2 encoder:

| $I_{3}$ | $I_{2}$ | $I_{1}$ | $I_{0}$ | $O_{1}$ | $O_{0}$ |
| :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|    0    |    0    |    0    |    0    |    X    |    X    |
|    0    |    0    |    0    |    1    |    0    |    0    |
|    0    |    0    |    1    |    0    |    0    |  ==1==  |
|    0    |    1    |    0    |    0    |  ==1==  |    0    |
|    1    |    0    |    0    |    0    |  ==1==  |  ==1==  |
$$
\begin{align*}
O_{1} & = I_{3} + I_{2} \\
\\
O_{0} & = I_{3} + I_{1}
\end{align*}
$$
- 4:2 encoder with 1-enable:

| $E$ | $I_{3}$ | $I_{2}$ | $I_{1}$ | $I_{0}$ | $O_{1}$ | $O_{0}$ |
| :-: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|  0  |    X    |    X    |    X    |    X    |    X    |    X    |
|  1  |    0    |    0    |    0    |    0    |    X    |    X    |
|  1  |    0    |    0    |    0    |    1    |    0    |    0    |
|  1  |    0    |    0    |    1    |    0    |    0    |  ==1==  |
|  1  |    0    |    1    |    0    |    0    |  ==1==  |    0    |
|  1  |    1    |    0    |    0    |    0    |  ==1==  |  ==1==  |

Priority encoders
- encoders that allows for multiple 1s in the input
- encode the MSB to the output

| $I_{3}$ | $I_{2}$ | $I_{1}$ | $I_{0}$ | $O_{1}$ | $O_{0}$ |  $V$  |
| :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :---: |
|    0    |    0    |    0    |    0    |    X    |    X    |   0   |
|    0    |    0    |    0    |    1    |    0    |    0    | ==1== |
|    0    |    0    |    1    |    X    |    0    |  ==1==  | ==1== |
|    0    |    1    |    X    |    X    |  ==1==  |    0    | ==1== |
|    1    |    X    |    X    |    X    |  ==1==  |  ==1==  | ==1== |

Demultiplexer
- 1-bit in, `n`-bit selector to `2ⁿ` ouputs
- equivalent to a decoder with enable, using the enable as the input

Multiplexer
- `2ⁿ` inputs to `n`-bit BCD, `n`-bit selector

$$
O = I_{0}\cdot m_{0} + I_{1}\cdot m_{1} +\dots +I_{2^n}\cdot m_{2^n}
$$
- 4:1 multiplexer:

![[4-1_mux.png]]

| $S_{1}$ | $S_{0}$ |   $O$   |
| :-----: | :-----: | :-----: |
|    0    |    0    | $I_{0}$ |
|    0    |    1    | $I_{1}$ |
|    1    |    0    | $I_{2}$ |
|    1    |    1    | $I_{3}$ |
- 4:1 multiplexer with 0-enable:

| $E$ | $S_{1}$ | $S_{0}$ |   $O$   |
| :-: | :-----: | :-----: | :-----: |
|  1  |    X    |    X    |    0    |
|  0  |    0    |    0    | $I_{0}$ |
|  0  |    0    |    1    | $I_{1}$ |
|  0  |    1    |    0    | $I_{2}$ |
|  0  |    1    |    1    | $I_{3}$ |

### Application
Implementing functions with decoders
- join the select outputs by some logic gate

$$
\begin{gather*}
&F(A,B,C) = \Sigma m(0,1,4,6,7) = \Pi M(2,3,5) \\
\\
&\text{Active-high:} \\
\text{OR:} & m_{0}+m_{1}+m_{4}+m_{6}+m_{7} \\
\\
\text{NOR:} & (m_{2}+m_{3}+m_{5})' = M_{2}\cdot M_{3}\cdot M_{5} \\
\\
&\text{Active-low:} \\
\text{NAND:} & (m_{0}\cdot m_{1}\cdot m_{4}\cdot m_{6}\cdot m_{7})' = m_{0}+m_{1}+m_{4}+m_{6}+m_{7} \\
\\
\text{AND:} & (m_{2})'\cdot(m_{3})'\cdot(m_{5})' = M_{2}\cdot M_{3}\cdot M_{5}
\end{gather*}
$$
> using the convention that high is 1

Implementing functions with multiplexers
- supply 1 if the input corresponds to a minterm in the function

$$
\begin{gather*}
F(A,B,C) = \Sigma m(1,3,5,6) \\
\\
\text{Select inputs:} \\
I_{0} = 0 \\
I_{1} = 1 \\
I_{2} = 0 \\
I_{3} = 1 \\
I_{4} = 0 \\
I_{5} = 1 \\
I_{6} = 1 \\
I_{7} = 0 \\
\\
O = \underset{ 1 }{ \cancel{ I_{1} } }\cdot m_{1} +\underset{ 1 }{ \cancel{ I_{3} } }\cdot m_{3}+\underset{ 1 }{ \cancel{ I_{5} } }\cdot m_{5}+\underset{ 1 }{ \cancel{ I_{6} } }\cdot m_{6}
\end{gather*}
$$

74151A 8:1 multiplexer
- 0-enable

![[74151A_8-1_mux.png]]

| $C$ | $B$ | $A$ | $\bar{G}$ |   $Y$   |   $W$    |
| :-: | :-: | :-: | :-------: | :-----: | :------: |
|  X  |  X  |  X  |     H     |    L    |    H     |
|  L  |  L  |  L  |     L     | $D_{0}$ | $D_{0}'$ |
|  L  |  L  |  H  |     L     | $D_{1}$ | $D_{1}'$ |
|  L  |  H  |  L  |     L     | $D_{2}$ | $D_{2}'$ |
|  L  |  H  |  H  |     L     | $D_{3}$ | $D_{3}'$ |
|  H  |  L  |  L  |     L     | $D_{4}$ | $D_{4}'$ |
|  H  |  L  |  H  |     L     | $D_{5}$ | $D_{5}'$ |
|  H  |  H  |  L  |     L     | $D_{6}$ | $D_{6}'$ |
|  H  |  H  |  H  |     L     | $D_{7}$ | $D_{7}'$ |

Implementing functions using smaller multiplexers
- 8:1 multiplexer using a 4:1

$$
\begin{gather*}
F(A,B,C) = \Sigma m(0,1,3,6) \\
\\
\text{let }A,B\text{ be the selection lines:} \\
\begin{array}{|c|c|c|c|}
\hline A & B & C & F \\
\hline 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 1 \\
0 & 1 & 0 & 0 \\
0 & 1 & 1 & 1 \\
1 & 0 & 0 & 0 \\
1 & 0 & 1 & 0 \\
1 & 1 & 0 & 1 \\
1 & 1 & 1 & 0 \\
\hline
\end{array} \\
\\
\text{Grouping by }AB: \\
\begin{aligned}
AB = 00 &\implies F = 1 \\
AB = 01 &\implies F = C \\
AB = 10 &\implies F = 0 \\
AB = 11 &\implies F = C'
\end{aligned}
\end{gather*}
$$
![[smaller_mux.png]]