---
tags:
  - cs2107/chapter1
  - cs/security
complete: false
prev: /labyrinth/notes/cs/cs2107/fundementals_of_encryption
next: /labyrinth/notes/cs/cs2107/permutation_ciphers

---
### Summary
Encryption and decryption


### Concept
Substitution table, over an [alphabet](/labyrinth/notes/math/cs1231s/strings#^23aab2)
$$
\begin{gather*}
\text{let }U = \{\verb|a|, \verb|b|, \dots , \verb|z|, \verb|_|\} \\
\\
S: U \to U \\
S \text{ is bijective} \\
\therefore S^{-1} \text{ exists}
\end{gather*}
$$
> Substitution must be [bijective](/labyrinth/notes/math/cs1231s/function_relations#^56e903)

Key space
- the substitution table is the key
- key space represents all the possible keys
$$
\begin{gather*}
|U| = n\\
|\text{key space}| = n!
\end{gather*}
$$
> Similar to a [power set](/labyrinth/notes/math/cs1231s/sets#^a77fb5) but with order preserved

Key size
### Application
Ceasar cipher


