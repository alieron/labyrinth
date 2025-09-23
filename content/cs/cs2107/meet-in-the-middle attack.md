---
tags:
  - cs2107/chapter2
  - cs/cryptography
complete: true
prev: /labyrinth/notes/cs/cs2107/stream_ciphers
next: /labyrinth/notes/cs/cs2107/padding_oracle_attack

---
### Summary
Space-time tradeoff
- using more space to save time
- ie. lookup tables

Triple encryption
- double the security
- only need 2 keys since the man-in-the-middle attack renders the 3rd useless

$$
C = E_{k_{1}}(D_{k_{2}}(E_{k_{1}}(M)))
$$

3DES
- $2^{112}$ encryptions/decryptions
### Concept
Double encryption
$$
C = E_{k_{2}}(E_{k_{1}}(M))
$$

Normal exhaustive search(known plaintext attack)
- do the two levels of encryption for every possible key

```tikz
\usepackage{tikz}

\tikzset{
  node/.style={align=center}
}

\begin{document}
\begin{tikzpicture}
	\node (M) at (0,0) {$M$};
	\node (C1) at (3,2) {$C_1$};
	\node (Cn) at (3,-2) {$C_{2^n}$};
	\node (Cd) at (3,0) {$\vdots$};
	\node (C11) at (6,3) {$C_{1,1}$};
	\node (C1d) at (6,2) {$\vdots$};
	\node (C1n) at (6,1) {$C_{1,2^n}$};
	\node (Cn1) at (6,-1) {$C_{2^n,1}$};
	\node (Cnd) at (6,-2) {$\vdots$};
	\node (Cnn) at (6,-3) {$C_{2^n,2^n}$};
	
	\draw[->] (M) -- (C1) node[midway,above,anchor=south east] {$E_{k_1}$};
	\draw[->] (M) -- (Cn);
	\draw[->] (C1) -- (C11) node[midway,above,anchor=south east] {$E_{k_2}$};
	\draw[->] (C1) -- (C1n);
	\draw[->] (Cn) -- (Cn1);
	\draw[->] (Cn) -- (Cnn);
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\text{for an n-bit key:} & \text{keyspace}=2^n \\
\\
\text{each encryption step results in:} & 2^n\text{ possible ciphertexts} \\
\\
\text{double encryption:} & 2^n + 2^n\times 2^n \approx 2^{2n}\text{ operations} \\
\\
\text{time:} & O(2^{2n})\\
\text{space:} & O(1)
\end{gather*}
$$

Meet-in-the-middle(known plaintext attack)
- do one encryption and one decryption
- find the matching intermediate

```tikz
\usepackage{tikz}

\tikzset{
  node/.style={align=center}
}

\begin{document}
\begin{tikzpicture}
	\node (M) at (0,0) {$M$};
	\node (C1) at (3,1.5) {$C_1$};
	\node (Cn) at (3,-1.5) {$C_{2^n}$};
	\node (Cd) at (3,0) {$\vdots$};
	
	\node (C) at (8,0) {$C$};
	\node (M1) at (5,1.5) {$M_1$};
	\node (Mn) at (5,-1.5) {$M_{2^n}$};
	\node (Md) at (5,0) {$\vdots$};
	
	\draw[->] (M) -- (C1) node[midway,above,anchor=south east] {$E_{k_1}$};
	\draw[->] (M) -- (Cn);
	\draw[->] (C) -- (M1) node[midway,above,anchor=south west] {$D_{k_2}$};
	\draw[->] (C) -- (Mn);
\end{tikzpicture}
\end{document}
```
$$
\begin{gather*}
\text{checking intermediates:} & 2^n\times 2 = 2^{n+1}\text{ operations} \\
\\
\text{time:} & O(2^n)\\
\text{space:} & O(2^n)
\end{gather*}
$$
> the forward encryptions can be stored in a [hash table](/labyrinth/notes/cs/cs2040s/hash_table) to be checked against the backward decryptions
### Application
4DES
$$
\begin{gather*}
\text{encryption/decryption half:} & 2^{56} + 2^{56} \times 2^{56}\approx 2^{112}\text{ operations} \\
\\
\text{total operations:} & 2^{112}\times 2 = 2^{113}\text{ operations}
\end{gather*}
$$
> not much better than 3DES, a good stream cipher is a better option
