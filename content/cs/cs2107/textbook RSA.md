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

Strength
- depends on the size of $N$

$$
\begin{align*}
\text{1024-bit} &&& \sim 80\text{ bits} \\
\\
\text{2048-bit} &&& \sim 112\text{ bits} \\
\\
\text{3072-bit} &&& \sim 128\text{ bits} \\
\end{align*}
$$
> due to the sub exponential runtime of the [GNFS](/labyrinth/notes/cs/GNFS) algorithm for factorizing large integers, which provides a faster than brute-force attack
### Concept
RSA
$$
m = (m^e)^d \mod n
$$
> RSA is slow to encrypt and decrypt, try to minimize the plaintext being encrypted

Homomorphic property ^76fe23
- encrypting with $e$ -> decrypt with $d$
	- public can encrypt, but only one person can decrypt (only receiver can decrypt)
- encrypting with $d$ -> decrypt with $e$
	- owner can encrypt, and the public can decrypt (authenticate owner)

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