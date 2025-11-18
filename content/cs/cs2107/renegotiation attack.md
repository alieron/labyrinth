---
tags:
  - cs2107/chapter5
  - cs/security
  - cs/web
complete: true
prev: /labyrinth/notes/cs/cs2107/network_security
next: /labyrinth/notes/cs/cs2107/DNS_spoofing

---
### Summary
Premise
- TLS _renegotiation_ is enabled, pre-[RFC 5746](https://www.ietf.org/rfc/rfc5746.txt)
- client thinks it is talking securely to the server; server accepts renegotiation mid-session
- MITM attacker is positioned between client and server
- server does not bind pre-renegotiation data to the authenticated session

Attack
1. client initiates a TLS handshake
2. attacker intercepts and defers it
3. attacker uses client's token to establish a TLS connection with the server
4. attacker sends arbitrary data to the server _as if it came from the client_
5. attacker then **renegotiates the TLS session** and forwards the client’s legitimate handshake
6. after renegotiation, the server sees the connection as authenticated and binds attacker-injected data with the victim’s data
7. server processes attacker’s **prefix** as part of the client’s request (eg. HTTP request prefix)

```tikz
\usetikzlibrary{positioning,arrows.meta,calc}
\begin{document}
\begin{tikzpicture}[
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=2.5cm, minimum height=6cm},
    arrow/.style={thick, ->}
]

% Entities
\node[box] (client) {Client};
\node[box, right=5cm of client,text depth=5cm] (mitm) {MITM};
\node[box, right=5cm of mitm] (server) {Server};

% ClientHello message (Client -> MITM)
\draw[arrow] (client.east) ++(0,2.75) -- ++(5,0) node[midway,above]{ClientHello(Genuine), $t$};

% malicious ClientHello message (MITM -> Server)
\draw[arrow,red] (mitm.east) ++(0,2.75) -- ++(5,0) node[midway,above]{ClientHello(Malicious), $t$};

% ServerHello and cert (Server -> MITM)
\draw[arrow,red] (server.west) ++(0,2) -- ++(-5,0) node[midway,above]{ServerHello+Certificate, $k_e$};

% Client key exchange (MITM -> Server)
\draw[arrow,red] (mitm.east) ++(0,1.25) -- ++(5,0) node[midway,above]{Key Exchange, $k_1$};

% Traffic (Server <-> MITM)
\draw[arrow,red,<->] (server.west) ++(0,0.5) -- ++(-5,0) node[midway,above]{Session Traffic(E2EE)};

% Deferred ClientHello (MITM -> Server)
\draw[arrow] (mitm.east) ++(0,-0.5) -- ++(5,0) node[midway,above]{ClientHello(Genuine), $t$};
\draw[arrow,red] (mitm.west) ++(0,2.75) -- ++(2.5,-3.25);

% ServerHello and cert (Server -> Client)
\draw[arrow] (server.west) ++(0,-1.25) -- ++(-5,0) node[midway,above]{ServerHello+Certificate, $k_e$};
\draw[arrow] (mitm.west) ++(0,-1.25) -- ++(-5,0) node[midway,above]{ServerHello+Certificate, $k_e$};

% Client key exchange (Client -> Server)
\draw[arrow] (client.east) ++(0,-2) -- ++(5,0) node[midway,above]{Key exchange, $k_2$};
\draw[arrow] (mitm.east) ++(0,-2) -- ++(5,0) node[midway,above]{Key exchange, $k_2$};

% Traffic (Server <-> Client)
\draw[arrow,<->] (server.west) ++(0,-2.75) -- ++(-5,0) node[midway,above]{Session Traffic(E2EE)};
\draw[arrow,<->] (mitm.west) ++(0,-2.75) -- ++(-5,0) node[midway,above]{Session Traffic(E2EE)};

\draw[thick,green] (mitm.east)++(-0.25,0.25) rectangle ++(5.5,-3.5);
\node[green] at ($(mitm.east)+(2.5,-4)$) {Encrypted using $k_1$};

\end{tikzpicture}
\end{document}
```

Attacker’s Goals
- inject commands into an authenticated TLS connection -> integrity
- override commands sent by the victim -> availability
- perform actions **as the victim** -> integrity

Defense
- **disable renegotiation** -> affects availability
  - TLS 1.3 removes renegotiation completely
- at the application layer, enforce strict message framing and authentication on every operation
### Concept
TLS handshake
- [unilateral authentication](/labyrinth/notes/cs/cs2107/channel_security#^6f21fa), client verifies the server
- assumes that the user is already authenticated, using [cookies](/labyrinth/notes/cs/cs2107/cookies)

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

% ClientHello message (Client -> Server)
\draw[arrow] (client.east) ++(0,1.5) -- ++(5,0) node[midway,above]{ClientHello, $t$};

% ServerHello and cert (Server -> Client)
\draw[arrow] (server.west) -- node[midway,above]{ServerHello+Certificate, $k_e$} (client.east);

% Client key exchange (Client -> Server)
\draw[arrow] (client.east) ++(0,-1.5) -- ++(5,0) node[midway,above]{Key exchange: $s = E(k_e,k)$};

\node[left=0.5cm of client,align=right] {choose session key: $k$};
\node[right=0.5cm of server] {decrypt: $k=D(k_d,s)$};

\end{tikzpicture}
\end{document}
```

TLS renegotiation
- allows client/server to initiate a new session from an existing session
- 2nd handshake to establish new session key

TLS renegotiation attack
- MITM
- impersonate the client