---
tags:
  - cs2107/chapter4
  - cs/security
complete: true
---
### Summary
Diffie-Hellman key exchange
- enables [forward secrecy](/labyrinth/notes/cs/cs2107/channel_security#^1e9c6e), since it doesn't involve any long-term key

```tikz
\usetikzlibrary{positioning,arrows.meta}
\begin{document}
\begin{tikzpicture}[
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=2.5cm, minimum height=4cm},
    arrow/.style={thick, ->}
]

% Entities
\node[box] (client) {Client};
\node[box, right=5cm of client] (server) {Server};
\node[above=0.5cm of client] {$g, p$ are public primes};

% (Client -> Server)
\draw[arrow] (client.east) ++(0,.75) -- ++(5,0) node[midway,above]{$x=g^{a} \bmod p$};

% (Server -> Client)
\draw[arrow] (server.west) ++(0,-.75) -- ++(-5,0) node[midway,above]{$y=g^{b} \bmod p$};

\node[right=0.5cm of server] {choose: $b$};
\node[left=0.5cm of client] {choose: $a$};

\end{tikzpicture}
\end{document}
```
$$
\begin{array}{rc}
\text{Client:} & k =y^a= (g^b)^a \mod p \\
 \\
\text{Server:} & k = x^b = (g^a)^b \mod p
\end{array}
$$

Computational Diffie-Hellman assumption
$$
k = g^{ab} \mod p \qquad \text{is computationally infeasible to find}
$$