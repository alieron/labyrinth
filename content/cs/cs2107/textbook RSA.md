---
tags:
  - cs2107/chapter3
  - cs/cryptography
complete: true
prev: /labyrinth/notes/cs/cs2107/public_key_cryptography
next: /labyrinth/notes/cs/cs2107/cryptographic_hashing

---
### Summary
Math
$$
\begin{align*}
\text{Product of primes:} &&& n = pq \\
\\
\text{Public and private keys:} &&& de = 1 \mod \phi(n), \ \phi(n) = (p-1)(q-1) \\
\\
\text{Encryption:} &&& c = m^e \mod n \\
\\
\text{Decryption:} &&& m = c^d \mod n
\end{align*}
$$
> $\phi(n)$ represents the [euler's totient](/labyrinth/notes/math/euler's_totient) function
### Concept
RSA
$$
m = (m^e)^d \mod n
$$
> RSA is slow to encrypt and decrypt, 

Homomorphic property ^76fe23
- if $e$ is used to encrypt $d$ must be used to decrypt
	- public can encrypt, but only one person can decrypt
- if $d$ is used to encrypt $e$ must be used to decrypt
	- owner can encrypt, and the public can decrypt

$$
m = m^{ed} = m^{de} \mod n
$$
### Application
Trivial RSA calculations
$$
\begin{align*}
&p = 5, \ q = 7 \\
\\
&n = 5\times 7 = 35 \\
\\
&\phi(n) = 4\times 6=24 \\
\\
&\text{let }e = 5 \\
\\
&5d =1 \mod 24 \\
\\
&5\times 5=25=1 \mod 24, \quad \therefore d=5
\end{align*}
$$