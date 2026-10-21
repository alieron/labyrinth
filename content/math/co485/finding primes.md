---
tags:
  - co485/chapter2
  - math/number_theory
  - to_review
complete: false
next: /labyrinth/notes/math/co485/fermat_test
prev: /labyrinth/notes/math/co485/tonelli-shanks_algorithm

---
### Concept
#### Distribution of primes

The prime number theorem gives $\pi(n)\sim n/\log n$, so random sampling finds an $\ell$-bit prime after polynomially many trials with overwhelming probability. A safe prime is $p=2p'+1$ with $p'$ prime; $p'$ is a Sophie Germain prime.

#### Fermat test

A Fermat test samples $a\in\mathbb Z_n^*$ and checks $a^{n-1}\equiv1\pmod n$. A witness proves compositeness, but a Carmichael number satisfies the congruence for every unit and defeats the test.

#### Miller-Rabin test

Write $n-1=2^ek$ with $k$ odd. For prime $n$, every $a\ne0$ satisfies either $a^k\equiv1$ or $a^{2^rk}\equiv-1$ for some $0\le r<e$. The previously open prime-specific property is now explicit: in the field $\mathbb Z_n$, the only square roots of $1$ are $\pm1$.

```pseudo
\begin{algorithm}
\caption{Miller--Rabin round}
\begin{algorithmic}
    \STATE \textbf{Input}: odd $n>2$
    \STATE Write $n-1=2^ek$ with $k$ odd
    \STATE Sample $a\in\mathbb Z_n^*$ and set $x\leftarrow a^k\bmod n$
    \IF{$x=1$ or $x=-1$}
        \STATE \textbf{return} probably prime
    \ENDIF
    \FOR{$r=1$ to $e-1$}
        \STATE $x\leftarrow x^2\bmod n$
        \IF{$x=-1$} \STATE \textbf{return} probably prime \ENDIF
        \IF{$x=1$} \STATE \textbf{return} composite \ENDIF
    \ENDFOR
    \STATE \textbf{return} composite
\end{algorithmic}
\end{algorithm}
```

For composite $n$, at most $1/4$ of bases are strong liars (the course proves the weaker $1/2$ bound). Thus 64 independent rounds have false-positive probability at most $2^{-128}$ under the weaker bound.

AKS proves `PRIMES` is in P; Miller-Rabin gives an efficient practical compositeness test. `PRIMES` is also in NP and co-NP: primality has recursive generator/factor certificates, while compositeness has a nontrivial factor certificate.

### Application
Generate a cryptographic prime by sampling odd $\ell$-bit candidates and applying trial division followed by Miller-Rabin. For Diffie-Hellman, also arrange for $p-1$ to contain a large prime factor $q$, then work in the subgroup of order $q$ rather than all of $\mathbb Z_p^*$.
