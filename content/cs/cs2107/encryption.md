---
tags:
  - cs2107/chapter2
  - cs/cryptography
complete: true
prev: /labyrinth/notes/cs/cs2107/threat_model
next: /labyrinth/notes/cs/cs2107/substitution_ciphers

---
### Summary
Correct 
$$
D_{k}(E_{k}(m)) = m
$$
> the decryption function is the [inverse](/labyrinth/notes/math/math_fundementals/inverse_functions) of the encryption function

Secure
- eavesdropper is unable to derive useful information about the plaintext or key, even if given the ciphertext
- exhausive search must be computationally **infeasible**

Kerchoff's principle
- a system should be secure even if everything about the system, except the secret key, is public knowledge

Security through obscurity
- hide the design of the system to achieve security
### Concept
Symmetric-key encryption
```tikz
\usepackage{tikz, amsmath}  
\usetikzlibrary{positioning}
\begin{document}  
  
\begin{tikzpicture}[node distance=0.8cm]  
  
% Nodes  
\node[draw, rectangle, text centered] (x){Plaintext $m$};  
\node[right=of x, draw, rectangle, text centered, text width=2cm] (e) {Encryption \\ $E_k(m)=c$};  
\node[right=of e, draw, rectangle, text centered] (c) {Ciphertext $c$};  
\node[right=of c, draw, rectangle, text centered, text width=2cm] (d) {Decryption \\ $D_k(c)=m$};  
\node[right=of d, draw, rectangle, text centered] (x2) {Plaintext $m$};  
  
% Arrows  
\draw[->,thick] (x) -- (e);  
\draw[->,thick] (e) -- (c);  
\draw[->,thick] (c) -- (d);  
\draw[->,thick] (d) -- (x2);  
  
% Key  
\node (key) [above=of c, draw, rectangle, text centered] {Key $k$};  
\draw[->,thick] (key.west) -| (e.north);  
\draw[->,thick] (key.east) -| (d.north);  
  
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
> for `cs2107` assume the attacker computing power is a supercomputer which can be run for 1000 years

Key space
- represents all the possible keys in a particular system

Key size
- number of bits required to represent a key

$$
\begin{array}{rcl}
\text{size of keyspace:} & |U_{k}| = 2^{|k|} & \text{number of values that }|k|\text{ bits can represent} \\
\\
\text{bits required to store keyspace:} & \lceil \log_{2} (|U_{k}| \times |k|) \rceil & \text{each key is }|k|\text{ bits}
\end{array}
$$
> unserstand the [capacity](/labyrinth/notes/cs/cs2100/data_representation#^2a92f4) of an n-bit binary number

Exhaustive search
- brute-force
- search all the keys one by one
- might take a very long time
### Application
Exhausitve search(known plaitext attack)
- it takes 512 clock cycles to test whether a 64-bit cryptographic key is correct, when given a 64-bit plaintext and the corresponding ciphertext
- we have a 4GHz single core processor

$$
\begin{gather*}
\text{size of keyspace} = 2^{64} \\
\\
\text{keys checked per second} = (2^2\times 2^{30}) \div 2^9 = 2^{23} \\
\\
\text{time to check keyspace} = 2^{64} \div 2^{23} = 2^{41}\text{ seconds} \approx 2^{16}\text{ years}\\
(1\text{ year}\approx2^{25}\text{ seconds})
\end{gather*}
$$
> for `cs2107` use the convention where $1K = 2^{10}$, $1M = 2^{20}$, $1G = 2^{30}$ and $1T = 2^{40}$

- we have the whole bitcoin mining network, and one hash is equivalent to one test

$$
\begin{gather*}
\text{current hash rate}=976 \text{ EH/s}\approx 1024 \text{ EH/s} = 2^{70}\\
\\
\text{time to check keyspace}= 2^{64}\div 2^{70} = 2^{-6}
\end{gather*}
$$
> hence why 64-bit keys are no longer sufficient, 128, 192 or 192 bit keys might be better