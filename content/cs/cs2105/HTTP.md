---
tags:
  - cs2105/lect2
  - cs/web
complete: true
prev: /labyrinth/notes/cs/cs2105/network_layers
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

HTTP versions

| Version    | Features                                         |
| ---------- | ------------------------------------------------ |
| `HTTP/1.0` | - TCP<br>- 1 connection per object               |
| `HTTP/1.1` | - TCP<br>- persistent connection<br>- pipelining |
| `HTTP/2`   | - TCP<br>- multiplexing                          |
| `HTTP/3`   | - QUIC/UDP                                       |
### Concept
#### HyperText Transfer Protocol(HTTP)
- [application layer](/labyrinth/notes/cs/cs2105/network_layers#Application_layer) protocol
- apps request and recieve web resources, 1 request per resource
- uses [TCP](/labyrinth/notes/cs/cs2105/TCP) in the transport layer
> for `cs2105` HTTP refers to HTTP/1 and HTTP/2 which use TCP, HTTP/3 uses [UDP](/labyrinth/notes/cs/cs2105/UDP)/QUIC

Uniform Resource Locator(URL) ^337252
- addresses web objects, ie. html files, images

$$
\underbrace{ \verb|https://| }_{ \text{scheme} }\underbrace{ \verb|alieron.github.io| }_{ \text{hostname} }\underbrace{ \verb|/labyrinth/notes/cs| }_{ \text{path} }
$$

HTTP request
```
GET /~cs2105/demo.html HTTP/1.1\r\n
Host: www.comp.nus.edu.sg\r\n
User-Agent: Mozilla/5.0\r\n
Connection: close\r\n
\r\n
<body>
```

HTTP response
```
HTTP/1.1 200 OK
Date: Wed, 01 Jul 2015 08:47:52 GMT\r\n
Server: Apache/2.4.6 (Unix) OpenSSL/1.0.1m\r\n
Accept-Ranges: bytes\r\n
Connection: Keep-Alive\r\n
Content-Length: 73\r\n
Content-Type: text/html\r\n
Keep-Alive: timeout=5, max=100\r\n
\r\n
<!DOCTYPE html>
<html lang="en">
...
```
##### HTTP/1.0
- single TCP connection for each resource

$$
(2 \times  \text{RTT} + d_{\text{trans}})\times N_{\text{objects}}
$$
![[HTTP_1-0.png]]
##### HTTP/1.1
Persistence
- single TCP connection, with the server
- removes overhead from RTT for every TCP connection
- sequential: waits for response before sending next request
> persistence is possible only if the hostname remains the same

$$
\underbrace{ (1\times \text{RTT}) }_{ \text{TCP} }+(1 \times  \text{RTT} + d_{\text{trans}})\times N_{\text{objects}}
$$
![[HTTP_1-1_persistent.png]]

Pipelining
- requests are made before recieving responses from older requests
- requires a persistent connection

$$
\approx\underbrace{ (1\times \text{RTT}) }_{ \text{TCP} }+(1 \times  \text{RTT}) + (d_{\text{trans}}\times N_{\text{objects}})
$$
![[HTTP_1-1_pipelining.png]]
##### HTTP/2
- multiplexing
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