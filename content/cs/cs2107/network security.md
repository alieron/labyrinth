---
tags:
  - cs2107/chapter5
  - cs/security
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2107/channel_security
next: /labyrinth/notes/cs/cs2107/DNS_spoofing

---
### Summary
Layered security
- application layer -> SSH, HTTPS
- transport layer -> TLS
- network layer -> IPSec
- link layer -> WPA2/WPA3

Man-in-the-middle attack ^ef8440
- attacker intercepts or alters traffic
- can read, modify, or inject packets
- can occur along a specific layer
- possible at Wi-Fi access points, routers, compromised switches

Layered MITM
- application layer -> malware on user's computer/browser
- transport layer -> internet service provider(ISP)
- link layer -> router/access points
- physical layer -> Wi-Fi signals/ethernet
### Concept
Data transmission ^456a7e
- headers for each layer attached to data(payload)
- actual connection on the physical layer
- might take multiple hops, ie. through routers/switches

```tikz
\usetikzlibrary{positioning,arrows.meta,calc}
\begin{document}
\begin{tikzpicture}[
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=4cm},
    arrow/.style={thick, <->}
]

% Layers (top to bottom)
\node[box] (app) {Application Layer \\ \footnotesize (HTTP, DNS, FTP, SMTP)};
\node[box, below=0 of app] (trans) {Transport Layer \\ \footnotesize (TCP, UDP)};
\node[box, below=0 of trans] (net) {Network Layer \\ \footnotesize (IP, ICMP)};
\node[box, below=0 of net] (data) {Data Link Layer \\ \footnotesize (Routers, Switches)};
\node[box, below=0 of data] (link) {Physical Layer \\ \footnotesize (Ethernet, Wi-Fi)};

\node[box, right=5 of app] (app2) {Application Layer \\ \footnotesize (HTTP, DNS, FTP, SMTP)};
\node[box, below=0 of app2] (trans2) {Transport Layer \\ \footnotesize (TCP, UDP)};
\node[box, below=0 of trans2] (net2) {Network Layer \\ \footnotesize (IP, ICMP)};
\node[box, below=0 of net2] (data2) {Data Link Layer \\ \footnotesize (Routers, Switches)};
\node[box, below=0 of data2] (link2) {Physical Layer \\ \footnotesize (Ethernet, Wi-Fi)};

\node[left=of app] {Domain name};
\node[left=of trans] {Port number};
\node[left=of net] {IP address};
\node[left=of data] {MAC address};

\node[right=of app2] {$\verb|google.com|$};
\node[right=of trans2] {$\verb|80|$};
\node[right=of net2] {$\verb|172.253.118.101|$};
\node[right=of data2] {$\verb|10:12:A3:44:55:61|$};

% Arrows
\draw[arrow] (app) -- (app2) node[midway,above] {virtual connection};
\draw[arrow] (trans) -- (trans2);
\draw[arrow] (net) -- (net2);
\draw[arrow] (data) -- (data2);
\draw[arrow,cyan] (link) -- (link2);

\coordinate (bottom) at ($(link)!0.5!(link2)$);

\draw[red,arrow,very thick]
  ($(app.east)+(0.5cm,0)$) |- (bottom)  
  -| ($(app2.west)+(-0.5cm,0)$);
\node[red] at ($(bottom)+(0,-6pt)$) {actual connection};
\end{tikzpicture}
\end{document}
```
> usually the transport and network layers are combined, so we have ip address with port

Transmission protocols
- **Transmission Control Protocol(TCP)**
	- connection-oriented - establish connection before transmitting
	- reliable data transfer
- **User Datagram Protocol(UDP)** ^74306d
	- connectionless - more for broadcast transmissions
	- non-reliable
	- faster, less overhead for opeening a connection

Layered security
- each layer provide encryption and authentication

| Layer             | Security Measure                                           | Purpose                                                                                        |
| ----------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Application layer | HTTPS                                                      | - encrypt the payload                                                                          |
| Transport layer   | Transport Layer Security(TLS)<br>Secure Sockets Layer(SSL) | - end-to-end protection for the payload                                                        |
| Network layer     | IPSec                                                      | - protects IP packets<br>- secure all IP traffic between endpoints                             |
| Link layer        | Wi-Fi Protected Access(WPA2/WPA3)                          | - encrypts traffic between devices and access points<br>- protects against local eavesdropping |

Which layers to protect?
- usually WPA + TLS/SSL
- protection at lowest layer is not possible
- intermmediate nodes might require IP address from higher layer