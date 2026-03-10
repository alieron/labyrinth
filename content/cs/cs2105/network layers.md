---
tags:
  - cs2105/lect2
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2105/network_delays
next: /labyrinth/notes/cs/cs2105/HTTP

---
### Summary
Building the packet

| Layer             | Packet format                          | Needs                         |
| ----------------- | -------------------------------------- | ----------------------------- |
| application layer | message                                | the data itself               |
| transport layer   | segment -> src & dest ports \| message | which port/process to send to |
| network layer     | datagram -> src & dest ip \| segment   | which host to send to         |
> each successive layer builds upon the packet
### Concept
#### Protocols
- **format and order** of messages exchanged
- **actions** taken upon receiving/sending

Protocol layers
- built upon layers of abstraction, upper layers do not need to deal with the physical connection directly
- all communication still goes through the physical layer
![[network_layers.png|500]]
#### Application layer
- application to application
- protocols used by internet applications running on hosts
- [HTTP](/labyrinth/notes/cs/cs2105/HTTP), [DNS](/labyrinth/notes/cs/cs2105/DNS), FTP, SMTP

| Architecture      | Desc                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| client-server     | - server: listens and waits, provides a service<br>- client: initiates contact                       |
| peer to peer(P2P) | - end hosts communicate directly<br>- scalable: new users add more capacity<br>- difficult to manage |
| hybrid            | - central server helps to link end hosts                                                             |
Requirements
- data integrity: file transfer requires lossless; streaming can tolerate data loss
- timing: games need low latency
- throughput: multimedia requires minimum amount of bandwidth to be effective
- security: [encryption](/labyrinth/notes/cs/cs2107/encryption), [authentication](/labyrinth/notes/cs/cs2107/authentication)
#### Transport layer
- process to process
- runs on the host itself
- [TCP](/labyrinth/notes/cs/cs2105/TCP). [UDP](/labyrinth/notes/cs/cs2105/UDP)

| Stakeholder | Role                             |
| ----------- | -------------------------------- |
| sender      | break message into segments      |
| receiver    | reassemble segment into messages |
| routers     | inspect dest ip and route        |
> ususally, routers are in the network layer
#### Network layer
- host to host
- best-effort and unreliable
- [DHCP](/labyrinth/notes/cs/cs2105/DHCP)






```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\begin{document}
\def\dprop{0.5cm}

% Host timeline (vertical line representing a host)
% #1 = x position
% #2 = name
% #3 = label text
\newcommand{\host}[3]{
  \draw[thick] (#1,0) -- (#1,-10) node[pos=0,above] {\textbf{#3}};
  \coordinate (#2) at (#1,0);
}

% Diagonal arrow going down-right
% #1 = source
% #2 = destination 
% #3 = label
% #4 = vertical offset from start
\newcommand{\trans}[4]{
  \draw[->, thick] 
    ([yshift=#4]#1) -- ([yshift=#4-\dprop]#2)
    node[midway,above,sloped,font=\small] {#3};
}

% Time marker (horizontal dashed line with label)
% #1 = y position
% #2 = label text
% #3 = x start position
% #4 = x end position
\newcommand{\timemarker}[4]{
  \draw[densely dotted] (#3,#1) -- (#4,#1);
  \node[left,font=\small] at (#3,#1) {#2};
}

\begin{tikzpicture}

% Define hosts
\host{0}{client}{Client}
\host{6}{server}{Server}

% Data packets (client to server)
\trans{client}{server}{Seq=1000, Len=500}{-1cm}
\trans{client}{server}{Seq=1500, Len=500}{-2.5cm}
\trans{client}{server}{Seq=2000, Len=500}{-4cm}

% ACK packets (server to client)
\trans{server}{client}{ACK=1500}{-2cm}
\trans{server}{client}{ACK=2000}{-3.5cm}
\trans{server}{client}{ACK=2500}{-5cm}

% Time markers
\timemarker{-1}{t0}{-1}{7}
\timemarker{-3}{t1}{-1}{7}
\timemarker{-5}{t2}{-1}{7}

% Additional annotation (optional)
\node[font=\small,text=gray] at (3,-6.5) {Round-trip time};
\draw[<->,gray] (0,-6) -- (6,-6);

\end{tikzpicture}
\end{document}
```
### Extra
Tikz template for protocol diagrams
