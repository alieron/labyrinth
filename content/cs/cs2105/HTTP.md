---
tags:
  - cs2105/chapter2
  - cs/web
complete: false
prev: /labyrinth/notes/cs/cs2105/application_layer
next: /labyrinth/notes/cs/cs2105/DNS

---
### Summary
HTTP status codes
```
200 Ok
301 Moved Permanently
304 Not Modified
403 Forbidden
404 Not Found
500 Internet Server Error
```
### Concept
#### HyperText Transfer Protocol(HTTP)
- uses [TCP](/labyrinth/notes/cs/cs2105/TCP) in the transport layer
- HTTP/1.0
 
![[1769843765_.png]]
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\begin{document}
\begin{tikzpicture}



\end{tikzpicture}
\end{document}
```
> for `cs2105` HTTP refers to HTTP/1 and HTTP/2 which use TCP, HTTP/3 uses [UDP](/labyrinth/notes/cs/cs2105/UDP)/QUIC

Persistence + Sequential
- HTTP/1.1
- removes overhead from RTT of each TCP connection
- waits for response before sending next request

![[1769843557_ 1.png]]

Pipelining
- requires a persistent connection

![[http_pipelining.png]]

Multiplexing
- HTTP/2
- response can come back in any order, maybe even interleaved

![[1769843572_.png]]

#### Browser caching
Statefulness
- HTTP is stateless, ie each HTTP session is standalone
- use [cookies](/labyrinth/notes/cs/cs2107/cookies) to maintain state between sessions

Caching resources
- images
- scripts(JS)
- CSS
- use conditional get requests, check if cached versions are still up to date with the server's version
- avoid sending unecessary data