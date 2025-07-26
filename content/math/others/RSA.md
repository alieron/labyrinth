---
tags:
- math/modular_arithmetic
complete: false

---

[[#|Previous]]   [[#|Next]]

### Summary
Standard rsa
$$
\begin{align*}
\text{RSA modulus:} &\quad&& n=pq, \ where \ p \ and \ q \ are \ primes \\
\\
\text{Encryption:} &&& c = m^e \mod n \\
\\
\text{Decoding exponent:} &&& d=e^{-1} \mod {\phi(n)} =e^{-1} \mod {(p-1)(q-1)} \\
\\
\text{Decryption:} &&& m=c^d\mod n
\end{align*}
$$

Multiprime rsa
$$
\begin{align*}
\text{Multiprime modulus:} &\quad&& n=pqr \\
\\
\text{Multiprime decoding exponent:} &&& d=e^{-1}\mod{(p-1)(q-1)(r-1)}
\end{align*}
$$

### Concept
Relevant expressions
$$
\begin{gather*}
\forall a: a<n \qquad a^k \mod n = (a^k \mod n) \mod n
\end{gather*}
$$

### Application
Mathematical proof of rsa
$$
\begin{gather*}
\text{Requires:} \quad m=(m^e \mod n)^d \mod n
\end{gather*}
$$

[modulo](/labyrinth/notes/math/others/modulo)[prime numbers](/labyrinth/notes/math/others/prime_numbers)[euler's totient](/labyrinth/notes/math/others/euler's_totient)[modular binomial](/labyrinth/notes/math/others/modular_binomial)
