---
tags:
  - cs2107/chapter6
  - cs/security
  - cs/web
complete: false
next: /labyrinth/notes/cs/cs2107/cookies
prev: /labyrinth/notes/cs/cs2107/VPN

---
### Summary
Threat models
- Malicious end system
	- malicious web server that the victim is lured to
	- compromised client with access to target server
- [MITM](/labyrinth/notes/cs/cs2107/network_security#^ef8440)
	- impersontation
	- phishing

Misleading the user
- typosquatting
- delimeter abuse
- address bar spoofing, trick brower to display fake URL
### Concept
Hypertext Transfer Protocol(HTTP)
- occurs at the [application layer](/labyrinth/notes/cs/cs2107/network_security#^456a7e)
- relies on [PKI](/labyrinth/notes/cs/cs2107/PKI) to create a secure channel

```tikz
\usetikzlibrary{positioning,arrows.meta}
\begin{document}
\begin{tikzpicture}[
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=2.5cm, minimum height=4cm},
    arrow/.style={thick, ->}
]

% Entities
\node[box] (client) {Client\\(Browser)};
\node[box, right=5cm of client] (server) {Server};

% HTTP request (Client -> Server)
\draw[arrow] (client.east) ++(0,1.5) -- ++(5,0) node[midway,above]{HTTP request};

% HTML response (Server -> Client)
\draw[arrow] (server.west) ++(0,.5) -- ++(-5,0) node[midway,above]{HTML response};

% queries (Client -> Server)
\draw[arrow] (client.east) ++(0,-.5) -- ++(5,0) node[midway,above]{query};

% reply (Server -> Client)
\draw[arrow] (server.west) ++(0,-1.5) -- ++(-5,0) node[midway,above]{reply};

\end{tikzpicture}
\end{document}
```
> HTTPS is HTTP on top of TLS

Browser
- runs with user privileges
- can access local files
- handles user secrets in [cookies](/labyrinth/notes/cs/cs2107/cookies)
- support 3rd party addons - expands attack surface

URL
- Uniform Resource Locator

$$
\underbrace{ \verb|https://| }_{ \text{scheme} }\underbrace{ \verb|alieron.github.io| }_{ \text{hostname} }\underbrace{ \verb|/labyrinth/notes/cs| }_{ \text{path} }
$$

Other attacks ^f62abd
- tracking
	- bew bugs/beacons
	- cookies
- drive-by-download - automatic download/execution
- pixel stealing - steel visual data from display
- clickjacking - manipulate UI, invisible buttons