---
tags:
  - cs2107/chapter2
  - cs/cryptography
complete: true
prev: /labyrinth/notes/cs/cs2107/block_ciphers
next: /labyrinth/notes/cs/cs2107/meet-in-the-middle_attack

---
### Summary
Stream cipher
- benefit from [one-time pad](/labyrinth/notes/cs/cs2107/one-time_pad)'s perfect secrecy, without an excessively long key
- short key will be easier for users to remember

Weakest link
- the encryption will only be as strong as the short key
- attacker can just brute-force all the keys, instead of the entire key stream

Reused/predictable IV
- same idea as [resued key](/labyrinth/notes/cs/cs2107/one-time_pad#^8e3d35) in one-time pad
- leaks information of the plaintext
### Concept
Stream cipher
- deterministic pseudo-random sequence(key stream) generated from the IV
- use [xor](/labyrinth/notes/cs/xor) to encrypt the plaintext against the key stream

```tikz
\usepackage{tikz}

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

\tikzstyle{encrypt}=[draw,rectangle,minimum size=20pt,inner sep=0pt]
\begin{tikzpicture}
    \newcommand{\n}{3}
		\node (k)[encrypt]   at (2,6) {key stream};
		\node (M)            at (1,2) {$M$};
		\node (x)[XOR]       at (2,2) {};
		\node (C)            at (2,0) {$C$};

		\node (P)[encrypt] at (0,6) {PRG};

		\draw[->,very thick] (k) -- (x);
		\draw[->,very thick] (M) -- (x);
		\draw[->,very thick] (x) -- (C);
    
    \node (IV) at (0,4) {$IV$};
    \node (CIV) at (0,0) {$IV$};
    \draw[->, very thick] (IV) -- (P);
    \draw[->, very thick] (P) -- (k);
    \draw[->, very thick] (IV) -- (CIV);
    
    \node[anchor=east] (pt) at (-1,2) {plaintext:};
    \node[anchor=east] (iv) at (-1,4) {initialization vector:};
    \node[anchor=east] (ct) at (-1,0) {ciphertext:};
\end{tikzpicture}
\end{document}
```
> [CTR](/labyrinth/notes/cs/cs2107/block_ciphers#^ea354f) mode is a stream cipher
### Application
Reused IV(known plaintext attack)
$$
\begin{gather*}
C_{1} = 0111 \ 11011011 \\
C_{2} = 0111 \ 00101011 \\
\\
C = K \oplus M \\
\\
\begin{aligned}
C_{1}\oplus C_{2} &= (K\oplus M_{1}) \oplus (K \oplus M_{2}) \\
&= M_{1}\oplus M_{2} \\
&= 11110000
\end{aligned} \\
\\
\text{possible plaintexts: } 00000000,\ 11111111,\ 00001111,\ 11000011\\
\\
\text{deduce that }M_{1}, M_{2} = 11111111, 00001111
\end{gather*}
$$