---
tags:
  - cs2107/chapter2
  - cs/cryptography
  - lang/python
complete: true
next: /labyrinth/notes/cs/cs2107/stream_ciphers
prev: /labyrinth/notes/cs/cs2107/one-time_pad

---
### Summary
Block cipher
- has fixed sized inputs and outputs
- large plaintext are divided into blocks before the block cipher is applied

Modes of operation
- ECB - Electronic Code Book
- CBC - Cipher Block Chaining
- CTR - Counter Mode
- GCM - Galois Counter Mode
> the idea is to encrypt large plaintexts with a small key

Examples
- DES - Data Encryption Standard
	- 64-bit blocks
	- 56-bit key
	- easily brute-forceable now
- AES - Advanced Encryption Standard
	- 128-bit(16 bytes) blocks
	- 128, 192 or 256 bit keys
	- currently no known attacks
> DES and AES apply rounds of [substitutions](/labyrinth/notes/cs/cs2107/substitution_ciphers) and [permutations](/labyrinth/notes/cs/cs2107/permutation_ciphers) to make the resulting ciphertext appear random
### Concept
ECB
- leaks information due to deterministic encryption + reused key
- any two identical blocks will encrypt to the same cipher text
- easily parallelizable
- encryption:

```tikz
\usepackage{tikz}
\usetikzlibrary{calc}

\begin{document}
\tikzstyle{encrypt}=[draw,rectangle,minimum size=20pt,inner sep=0pt]
\begin{tikzpicture}
    \newcommand{\n}{3}
    \foreach \nr in {1, ..., \n}{
        \node (M\nr) at ({(\nr)*2},4) {$m_\nr$};
        \node (C\nr) at ({(\nr)*2},0) {$c_\nr$};
        \node (E\nr)[encrypt] at ({(\nr)*2},2) {$E_k$};

        \draw[->,very thick] (M\nr) -- (E\nr);
        \draw[->,very thick] (E\nr) -- (C\nr);
    }
    
    \node[anchor=east] (pt) at (1,4) {plaintext:};
    \node[anchor=east] (ct) at (1,0) {ciphertext:};
\end{tikzpicture}
\end{document}
```
- decryption:

```tikz
\usepackage{tikz}
\usetikzlibrary{calc}

\begin{document}
\tikzstyle{encrypt}=[draw,rectangle,minimum size=20pt,inner sep=0pt]
\begin{tikzpicture}
    \newcommand{\n}{3}
    \foreach \nr in {1, ..., \n}{
        \node (C\nr) at ({(\nr)*2},4) {$c_\nr$};
        \node (M\nr) at ({(\nr)*2},0) {$m_\nr$};
        \node (D\nr)[encrypt] at ({(\nr)*2},2) {$D_k$};

        \draw[->,very thick] (C\nr) -- (D\nr);
        \draw[->,very thick] (D\nr) -- (M\nr);
    }
    
    \node[anchor=east] (pt) at (1,0) {plaintext:};
    \node[anchor=east] (ct) at (1,4) {ciphertext:};
\end{tikzpicture}
\end{document}
```

CBC ^4d54a7
- initialization vector(IV) - needs to be "unpredictable", usually randomly chosen each encryption
- injects randomness, identical blocks are no longer encrypted into identical ciphertexts
- sequential, each block requires the previous block to be computed first

$$
\begin{gather*}
c_{0} = IV \\
c_{i}=E_{k}(m_{i}\oplus c_{i-1}) \\
\\
m_{i} = D_{k}(c_{i})\oplus c_{i-1}
\end{gather*}
$$
- encryption:

```tikz
\usepackage{tikz}
\usetikzlibrary{calc}

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
    \foreach \nr in {1, ..., \n}{
        \node (M\nr)            at ({(\nr)*2},6) {$m_\nr$};
        \node (x\nr)[XOR]       at ({(\nr)*2},4) {};
        \node (E\nr)[encrypt]   at ({(\nr)*2},2) {$E_k$};
        \node (C\nr)            at ({(\nr)*2},0) {$c_\nr$};

        \draw[->,very thick] (M\nr) -- (x\nr);
        \draw[->,very thick] (x\nr) -- (E\nr);
        \draw[->,very thick] (E\nr) -- (C\nr);
    }

    \foreach \nr in {2, ..., \n}{
		    \pgfmathtruncatemacro{\tmp}{\nr-1}
        \draw[->,very thick] (E\tmp) -- ({(\tmp)*2+1},2) -- ({(\tmp)*2+1},4) -- (x\nr);
    }

    \node (IV) at (0,4) {$IV$};
    \draw[->, very thick] (IV) -- (x1);
    \node (CIV) at (0,0) {$IV$};
    \draw[->, very thick] (IV) -- (CIV);
    
    \node[anchor=east] (pt) at (-1,6) {plaintext:};
    \node[anchor=east] (iv) at (-1,4) {initialization vector:};
    \node[anchor=east] (ct) at (-1,0) {ciphertext:};
\end{tikzpicture}
\end{document}
```
- decryption:

```tikz
\usepackage{tikz}
\usetikzlibrary{calc}

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
    \foreach \nr in {1, ..., \n}{
        \node (C\nr)            at ({(\nr)*2},6) {$c_\nr$};
        \node (D\nr)[encrypt]   at ({(\nr)*2},4) {$D_k$};
        \node (x\nr)[XOR]       at ({(\nr)*2},2) {};
        \node (M\nr)            at ({(\nr)*2},0) {$m_\nr$};

        \draw[->,very thick] (C\nr) -- (D\nr);
        \draw[->,very thick] (D\nr) -- (x\nr);
        \draw[->,very thick] (x\nr) -- (M\nr);
    }

    \foreach \nr in {2, ..., \n}{
        \pgfmathtruncatemacro{\tmp}{\nr-1}
        \draw[->,very thick] ({(\tmp)*2},5) -- ({(\tmp)*2+1},5) -- ({(\tmp)*2+1},2) -- (x\nr);
    }

    \node (IV) at (0,6) {$IV$};
    \draw[->, very thick] (IV) -- (0,2) -- (x1);
    
    \node[anchor=east] (pt) at (-1,0) {plaintext:};
    \node[anchor=east] (ct) at (-1,6) {ciphertext:};
\end{tikzpicture}
\end{document}
```

CTR ^ea354f
- IV is incremented predictably, but the encryption should look very random
- can be parallelized

$$
\begin{gather*}
c_{0}=IV\\
c_{i}=m_{i}\oplus E_{k}(IV+i) \\
\\
m_{i}=c_{i}\oplus E_{k}(IV + i)
\end{gather*}
$$
- encryption:

```tikz
\usepackage{tikz}
\usetikzlibrary{calc}

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
    \foreach \nr in {1, ..., \n}{
        \node (IV\nr)            at ({(\nr)*2},6) {$IV + \nr$};
        \node (E\nr)[encrypt]   at ({(\nr)*2},4) {$E_k$};
        \node (M\nr)            at ({(\nr)*2-1},2) {$m_\nr$};
        \node (x\nr)[XOR]       at ({(\nr)*2},2) {};
        \node (C\nr)            at ({(\nr)*2},0) {$c_\nr$};

        \draw[->,very thick] (IV\nr) -- (E\nr);
        \draw[->,very thick] (E\nr) -- (x\nr);
        \draw[->,very thick] (M\nr) -- (x\nr);
        \draw[->,very thick] (x\nr) -- (C\nr);
    }

    \node (IV) at (0,6) {$IV$};
    \node (CIV) at (0,0) {$IV$};
    \draw[->, very thick] (IV) -- (CIV);
    
    \node[anchor=east] (pt) at (-1,2) {plaintext:};
    \node[anchor=east] (iv) at (-1,6) {initialization vector:};
    \node[anchor=east] (ct) at (-1,0) {ciphertext:};
\end{tikzpicture}
\end{document}
```
- decryption:

```tikz
\usepackage{tikz}
\usetikzlibrary{calc}

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
    \foreach \nr in {1, ..., \n}{
        \node (IV\nr)            at ({(\nr)*2},6) {$IV + \nr$};
        \node (E\nr)[encrypt]   at ({(\nr)*2},4) {$E_k$};
        \node (C\nr)            at ({(\nr)*2-1},2) {$c_\nr$};
        \node (x\nr)[XOR]       at ({(\nr)*2},2) {};
        \node (M\nr)            at ({(\nr)*2},0) {$m_\nr$};

        \draw[->,very thick] (IV\nr) -- (E\nr);
        \draw[->,very thick] (E\nr) -- (x\nr);
        \draw[->,very thick] (C\nr) -- (x\nr);
        \draw[->,very thick] (x\nr) -- (M\nr);
    }

    \node (IV) at (0,6) {$IV$};
    \node (CIV) at (0,2) {$IV$};
    \draw[->, very thick] (CIV) -- (IV);
    
    \node[anchor=east] (pt) at (-1,0) {plaintext:};
    \node[anchor=east] (iv) at (-1,6) {initialization vector:};
    \node[anchor=east] (ct) at (-1,2) {ciphertext:};
\end{tikzpicture}
\end{document}
```
> CTR mode relies on the [XOR](/labyrinth/notes/cs/XOR) to encrypt/decrypt, the plaintext does not go through the encryption function

GCM
- authenticated encryption
- CTR mode with extra check to ensure that the data has not been tampered with
### Application
AES in python
```python
from Crypto.Cipher import AES

key = b'Sixteen-byte key'
iv  = b'Sixteen-byte  IV'
cipher = AES.new(key, AES.MODE_ECB, iv) # ECB mode
# or
cipher = AES.new(key, AES.MODE_CBC, iv) # CBC mode
# or
cipher = AES.new(key, AES.MODE_CTR, iv) # CTR mode
# or
cipher = AES.new(key, AES.MODE_GCM, iv) # GCM mode
c = iv+cipher.encrypt(b'Plaintext of length with multiple of 16    bytes') 

# to print out in bytes
from base64 import *

b16encode(c) # b'5369787465656E206279746520204956B186083256CACCBD1638AF4877FBF2AAFBECB66FE13C403D7CE8EA04D028E66CA6AE1294 FF51C2F363CCC8953137A6A3' 
```