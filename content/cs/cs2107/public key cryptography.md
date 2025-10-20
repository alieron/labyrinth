---
tags:
  - cs2107/chapter3
  - cs/cryptography
complete: false
prev: /labyrinth/notes/cs/cs2107/MFA
next: /labyrinth/notes/cs/cs2107/textbook_RSA

---
### Summary
Public key cryptography
- public key is non-secret
- encryption only requires the public key
- decryption requires a private key
- only a **secure broadcast channel** is needed, instead of many individual channels for symmetric-key encryption

### Concept
Asymmetric-key encryption
```tikz
\usepackage{tikz, amsmath}  
\usetikzlibrary{positioning}
\begin{document}  
  
\begin{tikzpicture}[node distance=0.8cm]  
  
% Nodes  
\node[draw, rectangle, text centered] (x){Plaintext $m$};  
\node[right=of x, draw, rectangle, text centered, text width=2cm] (e) {Encryption \\ $E(k_e,m)=c$};  
\node[right=of e, draw, rectangle, text centered] (c) {Ciphertext $c$};  
\node[right=of c, draw, rectangle, text centered, text width=3cm] (d) {Decryption \\ $D(\langle k_e, k_d\rangle,c)=m$};  
\node[right=of d, draw, rectangle, text centered] (x2) {Plaintext $m$};  
  
% Arrows  
\draw[->] (x) -- (e);  
\draw[->] (e) -- (c);  
\draw[->] (c) -- (d);  
\draw[->] (d) -- (x2);  
  
% Key  
\node (ekey) [above=of e, draw, rectangle, text centered] {Public Key $k_e$};  
\node (dkey) [above=of d, draw, rectangle, text centered] {Private Key $k_d$};  
\draw[->] (ekey) -- (e);  
\draw[->] (ekey) -- ([yshift=-0.5cm]ekey.center) -| ([xshift=-1cm]d.north);  
\draw[->] (dkey) -- (d);  
  
\end{tikzpicture}
\end{document}
```
