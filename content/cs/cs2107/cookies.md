---
tags:
  - cs2107/chapter6
  - cs/security
  - cs/web
complete: false
prev: /labyrinth/notes/cs/cs2107/web_security
next: /labyrinth/notes/cs/cs2107/XSS

---
### Summary
Token based authentication
- single-signed-on
- token is the cookie
- needs to be unpredictable

$$
t=userID\ : \ expiry \ : \ \verb|MAC|(secret, data)
$$

### Concept
Cookies
- data sent by the server in the HTTP response
- stored in the browser
- whenever the client revisits the website(same origin), the cookie is sent alongside the request/query
- types:
	- **Session cookies:** expire after browser closes
	- **Secure cookies:** sent only over HTTPS
	- **HttpOnly cookies:** inaccessible to JavaScript

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
\draw[arrow] (server.west) ++(0,.5) -- ++(-5,0) node[midway,above]{HTML response, $c$};

% queries (Client -> Server)
\draw[arrow] (client.east) ++(0,-.5) -- ++(5,0) node[midway,above]{query, $c$};

% reply (Server -> Client)
\draw[arrow] (server.west) ++(0,-1.5) -- ++(-5,0) node[midway,above]{reply};

\end{tikzpicture}
\end{document}
```

Same-Origin Policy ^9e7788
- scripts running in the browser can access cookies if they have the same origin
- origin - combination of protocol, hostname and port
- scripts can include code in HTML files
- weakness: ambiguous definition

Cookie stealing?