---
tags: 
  - cs2107/chapter2
  - cs/cryptography
complete: false
prev: /labyrinth/notes/cs/cs2107/permutation_ciphers
next: /labyrinth/notes/cs/cs2107/block_ciphers

---
### Summary
Encryption and decryption
$$
\begin{gather*}
\text{Plaintext(bits):} & X = x_{1}x_{2}\dots x_{n} \\
\text{n-bit key:} & \mathbf{k} = k_{1}k_{2}\dots k_{n} \\
\\
\text{Encryption:} & C = (x_{1} \oplus k_{1})(x_{2} \oplus k_{2})\dots(x_{n} \oplus k_{n}) \\
\\
\text{Decryption:} & X = (c_{1} \oplus k_{1})(c_{2} \oplus k_{2})\dots(c_{n} \oplus k_{n})
\end{gather*}
$$
### Concept
Premise, based on the [properties of XOR](/labyrinth/notes/cs/xor#^bff698)
$$
\begin{align*}
c & = x \oplus k && \text{(Encryption)} \\
c\oplus k & = (x\oplus k) \oplus k && \text{(Associativity)} \\
& = x \oplus (k \oplus k) && \text{(Self-Inverse)} \\
& = x \oplus 0 && \text{(Identity)} \\
& = x
\end{align*}
$$

Perfect secrecy
- key is one time use
- key is as large as the plaintext
### Application
Reused key(Ciphertext only attack) ^8e3d35
$$
\begin{gather*}
\text{say key }k\text{ is reused on multiple plaintext} \\
\\
\text{given two ciphertexts} \\
c_{1} = x_{1}\oplus k \\
c_{2} = x_{2}\oplus k \\
\\
\begin{aligned}
c_{1}\oplus c_{2} & = (x_{1}\oplus k) \oplus (x_{2}\oplus k) && \text{(Associativity)} \\
& = (x_{1}\oplus x_{2})\oplus(k\oplus k) &&\text{(Self-Inverse)} \\
& = (x_{1}\oplus x_{2}) \oplus 0 && \text{(Identity)} \\
& = x_{1}\oplus x_{2}
\end{aligned} \\
\\
\text{which might leak information about }x_{1}\text{ and }x_{2}
\end{gather*}
$$