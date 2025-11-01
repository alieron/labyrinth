---
tags:
  - cs2107/chapter4
  - cs/security
complete: true
prev: /labyrinth/notes/cs/cs2107/PKI
next: /labyrinth/notes/cs/cs2107/network_security

---
### Summary
Station-to-station(STS)
- AKE
- uses [diffie-hellman key exchange](/labyrinth/notes/cs/cs2107/diffie-hellman_key_exchange) + signatures
- achieves forward secrecy

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
\node[box, right=5cm of client] (server) {Server\\$k_d,k_e$};
\node[above=0.5cm of client] {$g, p$ are public primes};

% Greet message (Client -> Server)
\draw[arrow] (client.east) ++(0,1.5) -- ++(5,0) node[midway,above]{Greet};

% Certificate (Server -> Client)
\draw[arrow] (server.west) ++(0,.5) -- ++(-5,0) node[midway,above]{$k_e$};

% x (Client -> Server)
\draw[arrow] (client.east) ++(0,-.5) -- ++(5,0) node[midway,above]{$x=g^{a} \bmod p$};

% y (Server -> Client)
\draw[arrow] (server.west) ++(0,-1.5) -- ++(-5,0) node[midway,above]{$y=g^{b} \bmod p,\ s = E(k_{d},y)$};

\node[right=0.5cm of server,text width=2.5cm] {choose: $b$ };
\node[left=0.5cm of client,text width=2.5cm,align=right] {choose: $a$};

\end{tikzpicture}
\end{document}
```
$$
\begin{array}{rcl}
\text{Server:} & y = g^b \mod p  & \text{(compute }y\text{)} \\
 & s = E(k_{d},y) & \text{(sign }y\text{ using private key)} \\
 & k = x^b \mod p & \text{(compute }k\text{)} \\
 \\
\text{Client:} & D(k_{e},s) = y' \implies \text{server has }k_{d}, \ y' = y & \text{(verify }s\text{)} \\
 & k = y^a \mod p & \text{(compute }k\text{)}
\end{array}
$$

PKC-based
- AKE
- uses [RSA](/labyrinth/notes/cs/cs2107/textbook_RSA)

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
\node[box, right=5cm of client] (server) {Server\\$k_d,k_e$};

% Greet message (Client -> Server)
\draw[arrow] (client.east) ++(0,1.5) -- ++(5,0) node[midway,above]{Greet};

% Certificate (Server -> Client)
\draw[arrow] (server.west) -- node[midway,above]{$k_e$} (client.east);

% Greet message (Client -> Server)
\draw[arrow] (client.east) ++(0,-1.5) -- ++(5,0) node[midway,above]{$c=E(k_e,k)$};

\node[left=0.5cm of client,text width=2.5cm,align=right] {choose: $k$};

\end{tikzpicture}
\end{document}
```
$$
\begin{array}{rc}
\text{Server:} & k = D(k_{d},c)
\end{array}
$$

Secure channel
- encrypt-and-mac using session key
- ensures confidentiality and integrity

$$
E_{k}(m)||\verb|MAC|_{k}(E_{k}(m))
$$

Transport Layer Security(TLS)
- successor to Secure Socket Layer(SSL)
- foundation for Hypertext Transfer Protocol(Secured) (HTTPS)
$$
\begin{gather*}
k = \left\langle k_{1},k_{2} \right\rangle \\
E_{k_{1}}(v||m)||\verb|MAC|_{k_{2}}(E_{k_{1}}(v||m)) \\
\\
\text{or}\\
\\
E_{k}(v||m)\text{ with AES-GCM}
\end{gather*}
$$

Forward secrecy ^1e9c6e
- past session keys remain safe even if long-term private key leaks later
- older ciphertexts are protected even in the future
### Concept
Challenge-response
- symmetric, shared secret
- uses [keyed hash](/labyrinth/notes/cs/cs2107/cryptographic_hashing#^f407e7)

```tikz
\usetikzlibrary{positioning,arrows.meta}
\begin{document}
\begin{tikzpicture}[
    node distance=4cm,
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=2.5cm, minimum height=4cm},
    arrow/.style={thick, ->}
]

% Entities
\node[box] (client) {Client\\$k'$};
\node[box, right=5cm of client] (server) {Server\\$k$};

% Greet message (Client -> Server)
\draw[arrow] (client.east) ++(0,1.5) -- ++(5,0) node[midway,above]{Greet: "I am ..."};

% Challenge (Server -> Client)
\draw[arrow] (server.west) -- node[midway,above]{Challenge: $r$} (client.east);

% Response (Client -> Server)
\draw[arrow] (client.east) ++(0,-1.5) -- ++(5,0) node[midway,above]{Response: $t = h_{k'}(r)$};

\end{tikzpicture}
\end{document}
```
$$
\text{Server checks:} \qquad t= h_{k}(r) \implies k'=k
$$

Unilateral authentication
- authenticates the client
- uses [signature](/labyrinth/notes/cs/cs2107/cryptographic_hashing#^dc3757)

```tikz
\usetikzlibrary{positioning,arrows.meta}
\begin{document}
\begin{tikzpicture}[
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=2.5cm, minimum height=4cm},
    arrow/.style={thick, ->}
]

% Entities
\node[box] (client) {Client\\$k_d,k_e$};
\node[box, right=5cm of client] (server) {Server};

% Greet message (Client -> Server)
\draw[arrow] (client.east) ++(0,1.5) -- ++(5,0) node[midway,above]{Greet: "I am ..."$||k_e$};

% Challenge (Server -> Client)
\draw[arrow] (server.west) -- node[midway,above]{Challenge: $r$} (client.east);

% Response (Client -> Server)
\draw[arrow] (client.east) ++(0,-1.5) -- ++(5,0) node[midway,above]{Response: $s = E(k_d,r)$};

\end{tikzpicture}
\end{document}
```
$$
\text{Server checks:} \qquad D(k_{e},s) = r \implies \text{client has }k_{d} 
$$
> requires a homomorphic asymmetric encryption scheme such as [RSA](/labyrinth/notes/cs/cs2107/textbook_RSA#^76fe23)

Key exchange
- establish a shared session key over an unsecured channel
- session key can then be used for symmetric encryption
- eg. PKC-based, [diffie-hellman key exchange](/labyrinth/notes/cs/cs2107/diffie-hellman_key_exchange)

```tikz
\usetikzlibrary{positioning,arrows.meta}
\begin{document}
\begin{tikzpicture}[
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=2.5cm, minimum height=4cm},
    arrow/.style={thick, ->}
]

% Entities
\node[box] (client) {Client\\$k_d,k_e$};
\node[box, right=5cm of client] (server) {Server};

% Greet message (Client -> Server)
\draw[arrow] (client.east) ++(0,.75) -- ++(5,0) node[midway,above]{Public key: $k_e$};

% Session key (Server -> Client)
\draw[arrow] (server.west) ++(0,-.75) -- ++(-5,0) node[midway,above]{Session key: $c = E(k_e,k)$};

\node[right=0.5cm of server] {choose session key: $k$};

\end{tikzpicture}
\end{document}
```
$$
\text{Client obtains session key:} \qquad D(k_{d},c) = k
$$

Man-in-the-middle
- client is not necessarily authenticated during key exchange
- Mallory can create a session key for each user, sniffing/spoofing the communication between them

Authenticated key exchange(AKE)
- authentication + key exchange
- prevents man-in-the-middle attack
- eg. PKC-based, STS