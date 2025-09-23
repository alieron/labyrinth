---
tags:
  - cs2107/chapter2
  - cs/cryptography
complete: true
prev: /labyrinth/notes/cs/cs2107/encryption
next: /labyrinth/notes/cs/cs2107/permutation_ciphers

---
### Summary
Encryption and decryption
$$
\begin{gather*}
\text{Plaintext:} & M = m_{1}m_{2}\dots m_{n} \\
\\
\text{Encryption:} & E_{S}(M)= S(m_{1})S(m_{2})\dots S(m_{n}) = C\\
\\
\text{Decryption:} & D_{S}(C) = S^{-1}(c_{1})S^{-1}(c_{2})\dots S^{-1}(c_{n})
\end{gather*}
$$

Key space and size
- the substitution table is the key

$$
\begin{gather*}
|U| = n\\
|\text{key space}| = n! \\
\\
\text{key size}=\lceil \log_{2} n! \rceil 
\end{gather*}
$$
> number of ways to [arrange](/labyrinth/notes/math/st2334/counting_II#^efad71) $n$ objects without replacement
### Concept
Substitution table, over an [alphabet](/labyrinth/notes/math/cs1231s/strings#^23aab2)
$$
\begin{gather*}
\text{let }U = \{\verb|a|, \verb|b|, \dots , \verb|z|, \verb|_|\} \\
\\
S: U \to U \\
S \text{ is bijective} \\
\therefore S^{-1} \text{ exists}
\\

\end{gather*}
$$
> substitution must be [bijective](/labyrinth/notes/math/cs1231s/function_relations#^56e903)

Known plaintext attack
- not secure
- given a sufficiently long ciphertext, the full substitution table can be found

$$
\begin{gather*}
\text{Known:} & \begin{aligned}
X & = \verb|hello_world| \\
C & = \verb|hnllqpoqilb|
\end{aligned} \\
\\
\text{Deciphered substitution table:} & \begin{array}{|*{26}{c|c}|}
\hline
\verb|a| & \verb|b| & \verb|c| & \verb|d| & \verb|e| & \verb|f| & \verb|g| & \verb|h| & \verb|i| & \verb|j| & \verb|k| & \verb|l| & \verb|m| & \verb|n| & \verb|o| & \verb|p| & \verb|q| & \verb|r| & \verb|s| & \verb|t| & \verb|u| & \verb|v| & \verb|w| & \verb|x| & \verb|y| & \verb|z| & \verb|_| \\
\hline
 &  &  & \verb|b| & \verb|n| &  &  & \verb|h| &  &  &  & \verb|l| &  &  & \verb|q| &  &  & \verb|i| &  &  &  &  & \verb|o| &  &  &  & \verb|p| \\
\hline
\end{array} \\
\end{gather*}
$$

Ciphertext only attack
- frequency analysis
- examining how frequently characters appear in the ciphertext and mapping them to their frequency in English
- [quipquip](https://quipqiup.com/) and [dcode.fr frequency analysis](https://www.dcode.fr/frequency-analysis)
![[frequency_analysis.png]]


### Application
Ceasar/shift cipher
$$
\begin{gather*}
\text{Ceasar +3 cipher} \\
\\
\begin{array}{|*{26}{c|c}|}
\hline
\verb|a| & \verb|b| & \verb|c| & \verb|d| & \verb|e| & \verb|f| & \verb|g| & \verb|h| & \verb|i| & \verb|j| & \verb|k| & \verb|l| & \verb|m| & \verb|n| & \verb|o| & \verb|p| & \verb|q| & \verb|r| & \verb|s| & \verb|t| & \verb|u| & \verb|v| & \verb|w| & \verb|x| & \verb|y| & \verb|z| \\
\hline
\verb|d| & \verb|e| & \verb|f| & \verb|g| & \verb|h| & \verb|i| & \verb|j| & \verb|k| & \verb|l| & \verb|m| & \verb|n| & \verb|o| & \verb|p| & \verb|q| & \verb|r| & \verb|s| & \verb|t| & \verb|u| & \verb|v| & \verb|w| & \verb|x| & \verb|y| & \verb|z| & \verb|a| & \verb|b| & \verb|c| \\
\hline
\end{array} \\
\\
X = \verb|hello world| \\
C = \verb|khoor zruog|
\end{gather*}
$$
> [ROT3 on Cyberchef](https://gchq.github.io/CyberChef/#recipe=ROT13(true,true,false,3)), shift cipher's only have $n$ possible keys