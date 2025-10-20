---
tags:
  - cs2107/chapter3
  - cs/security
complete: true
prev: /labyrinth/notes/cs/cs2107/textbook_RSA
next: /labyrinth/notes/cs/cs2107/PKI

---
### Summary
Types of hashes
- unkeyed hash
	- simple hash function
	- eg. MD5, SHA1
- keyed hash(mac) ^f407e7
	- hash function using a key
	- eg. CBC-MAC, HMAC
- signature(public key mac)
	- signed using private key
	- relies on RSA's [homomorphic property](/labyrinth/notes/cs/cs2107/textbook_RSA#^76fe23)
> signature's provide **non-repudiation** since only the sender has the private key ^dc3757

Collision resistance
$$
\begin{align*}
\text{Collision:} &&& \text{find }m_{1}, m_{2} \implies h(m_{1}) = h(m_{2}) \\
\\
\text{2nd Pre-image:} &&& \text{given }m_{1}\text{ find }m_{2} \implies h(m_{1})=h(m_{2}) \\
\\
\text{Pre-image:} &&& \text{given }y\text{ find }m \implies h(m) = y
\end{align*}
$$

One pool birthday attack
- multiple messages have the same hash
- $M$ messages and $T$ hashes

$$
\begin{gather*}
P(\text{collision}) = 1 - e^{-\frac{M^2}{2T}} \\
\\
M >\underbrace{ 1.17 }_{ \sqrt{ 2\ln2 } }\sqrt{ T } \implies P(\text{collision}) > 0.5
\end{gather*}
$$

Two pool birthday attack
- number of collisions between two groups of $n$ bit chunks

$$
P(\text{collision}) = 1 - e^{-km2^{-n}}
$$
### Concept
Hash
- sent alongside the message
- check for [data-origin authenticity](/labyrinth/notes/cs/cs2107/authentication#^5a1c1f)

$$
\begin{gather*}
\text{Send:} &&& x||h(x) \\
\\
\text{Recieved(via unsecure channel):} &&& x'||h(x)
\\
&&& h(x) = h(x') \implies \text{high probability that }x=x'
\end{gather*}
$$

Birthday attacks
- finding a collision
- how many message do we have to check to have a high chance, $P(\text{collision}) > 0.5$ of finding a collision
### Application
Non-collision resistant hash
- using [xor](/labyrinth/notes/cs/xor) properties

$$
\begin{gather*}
H(x) = \verb|SHA3|(x\oplus k)\oplus \verb|SHA3|(\verb|rot|(x,n)) \\
\\
\text{where }\verb|rot|(x,n)\text{ rotates the bits in }x\text{ to the right by }n\text{ positions} \\
\\
\text{find }x_{1}, x_{2}\text{ such that }H(x_{1}) = H(x_{2}) \\
\\
\text{essentially:} \\
\verb|SHA3|(x_{1}\oplus k)\oplus \verb|SHA3|(\verb|rot|(x_{1},n)) = \verb|SHA3|(x_{2}\oplus k)\oplus \verb|SHA3|(\verb|rot|(x_{2},n)) \\
\\
\text{try:} \\
\begin{gathered}
\verb|SHA3|(x_{1}\oplus k) = \verb|SHA3|(x_{2}\oplus k) & \verb|SHA3|(\verb|rot|(x_{1},n)) = \verb|SHA3|(\verb|rot|(x_{2},n)) \\
x_{1}\oplus k=x_{2}\oplus k & \verb|rot|(x_{1},n) = \verb|rot|(x_{2},n)\\
\end{gathered} \\
x_{1}=x_{2} & \text{ is the only solution} \\
\\
\text{but we need }x_{1}\neq x_{2} \\
\verb|SHA3|(x_{1}\oplus k) =\verb|SHA3|(\verb|rot|(x_{2},n)) \\
x_{1}\oplus k =\verb|rot|(x_{2},n) & \text{possible collisions} \\
\\
\text{test:} \\
x_{1}=1010, \ k = 0110 \\
\\
\begin{aligned}
1010 \oplus 0110 &= 1100 \\
&= rot(1001, 1) \\
\text{or }&= rot(0011, 2) \\ 
\text{or }&= rot(0110, 3) \\ 
\end{aligned} \\
\\
\therefore x_{2}=1001, \ n = 1
\end{gather*}
$$