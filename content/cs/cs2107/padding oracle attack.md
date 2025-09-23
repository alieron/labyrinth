---
tags:
  - cs2107/chapter2
  - cs/cryptography
complete: false
prev: /labyrinth/notes/cs/cs2107/meet-in-the-middle_attack
next: /labyrinth/notes/cs/cs2107/authentication

---
### Summary
Encryption/decryption oracle
- interface that encrypts/decrypts a query
- the key is a secret known only to the oracle

Padding
- fill some extra bytes such that the resulting plaintext is a multiple of the block length
- needs to encode the amount that is padded, so that they can be removed during decryption

Padding oracle
- takes in a ciphertext
- returns whether its decrypted into the correct padding format
### Concept
PKCS#7
- padding standard
- pad bytes with the number of padded bytes

$$
\begin{array}{r}
01 \\
02\ 02 \\
03\ 03\ 03 \\
\vdots
\end{array}
$$

Padding oracle attack(chosen ciphertext attack)
- attacker has ciphertext(IV, C) and a padding oracle
- attacker knows how the block is padded
- use the padding oracle to expose information about non-padded bytes
- modify the previous ciphertext block/IV to make the padding valid for one more 

Deducing padding amount
- linear search - start from most significant byte in IV, modify until the padding is invalid
- binary search - modify bytes in a binary search pattern
### Application
Padding oracle attack on [CBC mode](/labyrinth/notes/cs/cs2107/block_ciphers#^4d54a7)
- padding oracle decryption

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,decorations.pathreplacing}

\begin{document}
% http://tex.stackexchange.com/a/75838/5645
\tikzset{XOR/.style={
    draw,thick,minimum size=13pt,circle,
    append after command={
        \pgfextra{
            \draw[thick] (\tikzlastnode.north) -- (\tikzlastnode.south);
            \draw[thick] (\tikzlastnode.east) -- (\tikzlastnode.west);
        }
    }
}}
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}
\begin{tikzpicture}
    \node[draw,cell] (v0) {$v_1$};
    \node[draw,cell,right=of v0] (v1) {$v_2$};
    \node[draw,cell,right=of v1] (v2) {$v_3$};
    \node[draw,cell,right=of v2] (v3) {$v_4$};
    
    \node[draw,cell,right=2cm of v3] (c0) {$c_1$};
    \node[draw,cell,right=of c0] (c1) {$c_2$};
    \node[draw,cell,right=of c1] (c2) {$c_3$};
    \node[draw,cell,right=of c2] (c3) {$c_4$};
    
    \node[draw,cell,below=1cm of c1.east] (D) {$D_k$};
    
    \node[draw,cell,below=2cm of c0] (i0) {$i_1$};
    \node[draw,cell,right=of i0] (i1) {$i_2$};
    \node[draw,cell,right=of i1] (i2) {$i_3$};
    \node[draw,cell,right=of i2] (i3) {$i_4$};

    \node[XOR,below=2cm of D] (x) {};
    
    \node[draw,cell,below=2cm of i0] (m0) {$m_1$};
    \node[draw,cell,right=of m0] (m1) {$m_2$};
    \node[draw,cell,right=of m1] (m2) {$02$};
    \node[draw,cell,right=of m2] (m3) {$02$};
    
    \draw[->, very thick] (v1.south east) |- (x);
    \draw[->, very thick] (c1.south east) -- (D);
    \draw[->, very thick] (D) -- (i1.north east);
    \draw[->, very thick] (i1.south east) -- (x);
    \draw[->, very thick] (x) -- (m1.north east);
    
    \node[anchor=east,left=.5cm of v0] (iv) {IV, $v$};
    \node[anchor=west,right=1cm of c2] (c) {$c$};
    \node[anchor=west,right=1cm of i2] (i) {intermmediate, $i$};
    \node[anchor=west,right=1cm of m2] (m) {padded message, $m$};
    
    \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (m0.south west) -- (m1.south east) node[midway,below=6pt] {\small unknown};
    \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (m2.south west) -- (m3.south east) node[midway,below=6pt] {\small known};
\end{tikzpicture}
\end{document}
```
- exposing one more byte

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning}

\begin{document}
% http://tex.stackexchange.com/a/75838/5645
\tikzset{XOR/.style={
    draw,thick,minimum size=13pt,circle,
    append after command={
        \pgfextra{
            \draw[thick] (\tikzlastnode.north) -- (\tikzlastnode.south);
            \draw[thick] (\tikzlastnode.east) -- (\tikzlastnode.west);
        }
    }
}}
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=0em}}
\begin{tikzpicture}
    \node[draw,cell] (v0) {$v'_1$};
    \node[draw,cell,right=of v0] (v1) {$v'_2$};
    \node[draw,cell,right=of v1] (v2) {$v'_3$};
    \node[draw,cell,right=of v2] (v3) {$v'_4$};
    
    \node[draw,cell,right=2cm of v3] (c0) {$c_1$};
    \node[draw,cell,right=of c0] (c1) {$c_2$};
    \node[draw,cell,right=of c1] (c2) {$c_3$};
    \node[draw,cell,right=of c2] (c3) {$c_4$};
    
    \node[draw,cell,below=1cm of c1.east] (D) {$D_k$};
    
    \node[draw,cell,below=2cm of c0] (i0) {$i_1$};
    \node[draw,cell,right=of i0] (i1) {$i_2$};
    \node[draw,cell,right=of i1] (i2) {$i_3$};
    \node[draw,cell,right=of i2] (i3) {$i_4$};

    \node[XOR,below=2cm of D] (x) {};
    
    \node[draw,cell,below=2cm of i0] (m0) {$m'_1$};
    \node[draw,cell,right=of m0] (m1) {$03$};
    \node[draw,cell,right=of m1] (m2) {$03$};
    \node[draw,cell,right=of m2] (m3) {$03$};
    
    \draw[->, very thick] (v1.south east) |- (x);
    \draw[->, very thick] (c1.south east) -- (D);
    \draw[->, very thick] (D) -- (i1.north east);
    \draw[->, very thick] (i1.south east) -- (x);
    \draw[->, very thick] (x) -- (m1.north east);
    
    \node[anchor=east,left=.5cm of v0] (iv) {modified IV, $v'$};
    \node[anchor=west,right=1cm of c2] (c) {$c$};
    \node[anchor=west,right=1cm of i2] (i) {intermmediate, $i$};
    \node[anchor=west,right=1cm of m2] (m) {target message, $m'$};
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
& m = D_{k}(c)\oplus v = i \oplus v \\
\\
\text{bytewise:} &
\begin{aligned}
m_{1} = i_{1} \oplus v_{1} \\
m_{2} = i_{2} \oplus v_{2} \\
02 = i_{3} \oplus v_{3} \\
02 = i_{4} \oplus v_{4} \\
\end{aligned} &
\begin{aligned}
m'_{1} = i_{1} \oplus v'_{1} \\
03 = i_{2} \oplus v'_{2} \\
03 = i_{3} \oplus v'_{3} \\
03 = i_{4} \oplus v'_{4} \\
\end{aligned} \\
\\
& \begin{aligned}
i_{1} &= m_{1} \oplus v_{1} = m'_{1} \oplus v'_{1} \\
i_{2} &= m_{2} \oplus v_{2} = 03 \oplus v'_{2} \\
i_{3} &= 02 \oplus v_{4} = 03 \oplus v'_{3} \\
i_{4} &= 02\oplus v_{4} = 03 \oplus v'_{4}
\end{aligned} & \text{ignore }i_{1}\text{ for now} \\
\\
& \text{let }\delta_{i} = v_{i}\oplus v'_{i} \\
&\begin{aligned}
\delta_{2} &=m_{2} \oplus 03\\
\delta_{3} &= 02 \oplus 03 = 01\\
\delta_{4} &= 02 \oplus 03 = 01\\
\end{aligned} \\
\\
\text{finding }\delta_{2}: & v' = v \oplus (00 || \delta_{2} || 01\ 01) & \text{try all }\delta_{2}\text{ until correct padding} \\
\\
& m_{2} = \delta_{2} \oplus03
\end{gather*}
$$
> this is extendable to multiple blocks since the byte order is preserved in CBC

Extending beyond one byte
$$
\begin{gather*}
\text{partially known plaintext:} & m = \langle b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8, b_9, 00, 00, \text{FF}, 04, 04, 04, 04\rangle \\
\\
\text{target plaitext}: & m'= \langle ??,??,??,??,??,??,??,??,08,08,08,08,08,08,08,08 \rangle \\
\\
& 
\begin{aligned}
v' &= v \oplus (m \oplus m') \\
&=v \oplus \langle 00_{8}, b_{9}\oplus08, 08,08, \text{F7}, \text{0C}, \text{0C}, \text{0C}, \text{0C} \rangle
\end{aligned}
\end{gather*}
$$