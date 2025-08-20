---
tags:
  - cs2107/chapter1
  - cs/security
complete: false
prev: /labyrinth/notes/cs/cs2107/threat_model
next: /labyrinth/notes/cs/cs2107/substitution_ciphers

---
### Summary
Correct 
$$
D_{k}(E_{k}(x)) = x
$$
> The decryption function is the [inverse](/labyrinth/notes/math/math_fundementals/inverse_functions) of the encryption function

Secure
- eavesdropper is unable to derive useful information about the plaintext or key, even if given the ciphertext
### Concept
Symmetric key encryption
```tikz
\usepackage{tikz, amsmath}  
\usetikzlibrary{positioning}
\begin{document}  
  
\begin{tikzpicture}[node distance=1cm]  
  
% Nodes  
\node[draw, rectangle, text centered, text width=3cm] (x){Plaintext $x$};  
\node[right=of x, draw, rectangle, text centered, text width=3cm] (e) {Encryption \\ $E_k(x)=c$};  
\node[right=of e, draw, rectangle, text centered, text width=3cm] (c) {Ciphertext $c$};  
\node[right=of c, draw, rectangle, text centered, text width=3cm] (d) {Decryption $D_k(c)=x$};  
\node[right=of d, draw, rectangle, text centered, text width=3cm] (x2) {Plaintext $x$};  
  
% Arrows  
\draw[->] (x) -- (e);  
\draw[->] (e) -- (c);  
\draw[->] (c) -- (d);  
\draw[->] (d) -- (x2);  
  
% Key  
\node (key) [above=of c, draw, rectangle, text centered, text width=2cm] {Key $k$};  
\draw[->] (key.west) -| (e.north);  
\draw[->] (key.east) -| (d.north);  
  
\end{tikzpicture}  
  
\end{document}
```

Attacker's goals
- **Total Break**: find the key -> allows the attacker to break every ciphertext encrypted this way
- **Partial Break**: decrypt a specific ciphertext, or extract some info from the plaintext
- **Distinguishability**: distinguish ciphertexts of a given plaintext from that of another plaintext

Attacker's capabilities
- **Ciphertext only attack**: attacker only has the ciphertext, and some knowledge of the plaintext
- **Known plaintext attack**: attacker has a collection of plaintexts and their corresponding ciphertexts
- **Chosen plaintext attack(CPA)**: attacker has access to an encryption oracle
- **Chosen ciphertext attack(CCA2)**: attacker has access to a decryption oracle
> For #cs2107 assume the attacker computing power is a supercomputer which can be run for 1000 years
### Application
