---
tags:
  - cs2107/chapter5
  - cs/security
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2107/network_security
next: /labyrinth/notes/cs/cs2107/ARP_poisoning

---
### Summary
Domain Name System(DNS) ^cc1630
- maps human readable URLs to IP addresses
- uses [UDP](/labyrinth/notes/cs/cs2107/network_security#^74306d)
- a 16-bit query ID(QID) is sent alongside the query, if the QID of the response doesn't match, then the client rejects it

```tikz
\usetikzlibrary{positioning,arrows.meta}
\begin{document}
\begin{tikzpicture}[
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=2.5cm, minimum height=3cm},
    arrow/.style={thick, ->}
]

% Entities
\node[box] (client) {Client};
\node[box, right=5cm of client] (server) {DNS Server};

% query (Client -> Server)
\draw[arrow] (client.east) ++(0,.5) -- ++(5,0) node[midway,above]{$\verb|google.com|$, QID};

% response (Server -> Client)
\draw[arrow] (server.west) ++(0,-.5) -- ++(-5,0) node[midway,above]{$\verb|172.253.118.101|$, QID};
\end{tikzpicture}
\end{document}
``` 
> the DNS is also a single point of failure for the network a [DoS](/labyrinth/notes/cs/cs2107/denial_of_service) can target the DNS server to indirectly deny availability to anotehr service

DNS spoofing
- as long as QID is known
- send a response with a spoofed IP address
- routes the user to a malicious server