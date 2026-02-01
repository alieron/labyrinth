---
tags:
  - cs/networking
  - cs2105/chapter1
complete: true
next: /labyrinth/notes/cs/cs2105/network_delays

---
### Summary
#### Units
- b for bits, B for bytes

| Prefix | Size |
| ------ | ---- |
| Kilo   | 10³  |
| Mega   | 10⁶  |
| Giga   | 10⁹  |
| Tera   | 10¹² |
| Peta   | 10¹⁵ |
| Exa    | 10¹⁸ |
| Zetta  | 10²¹ |
| Yotta  | 10²⁴ |
### Concept
#### Internet
- network of connected computing devices
- network of networks, global ISPs connected via a few Internet exchange points
> connecting all the regional ISPs directly results in a [complete graph](/labyrinth/notes/cs/cs2040s/graph_DS#^097f38), $O(n^2)$ connections

Authority
- Network Information Centre(NIC) - administer IP address and Internet naming
- Internet Society(ISOC) - Internet standards, education and policy
- Internet Architecture Board(IAB) - issue and update technical standards on Internet protocols
- Internet Engineering Task Force(IETF) - branch of IAB, develop and standadize protocols

Network edge
- eg. end user, servers
- access networks, allow users to access the Internet

Network core
- eg. ISPs, routers
- mesh of interconnected routers
#### Circuit switching
- end-end resources reserved between source and destination
- guaranteed connection, needs setup/teardown
- resources cannot be shared
#### Packet switching
- messaged broken into packets, routers provide best effort service
	- store and forward: entire packet arrives at router before being forwarded
	- routing: routing algorithm to determin path
	- addressing: src and dest information to allow replying
- no setup/teardown, packets might be dropped
- resources are shared

![[packet_switching.png]]
#### Protocols
- **format and order** of messages exchanged
- **actions** taken upon receiving/sending

Layers ^4119c5
- built upon layers of abstraction, upper layers do not need to deal with the physical connection directly
- all communication still goes through the physical layer
```tikz
\usetikzlibrary{positioning,arrows.meta,calc}
\begin{document}
\begin{tikzpicture}[
    >=Latex,
    box/.style={draw, thick, rounded corners, align=center, minimum width=4cm},
    arrow/.style={thick, <->}
]

% Layers (top to bottom)
\node[box] (app) {Application Layer};
\node[box, below=0 of app] (trans) {Transport Layer};
\node[box, below=0 of trans] (net) {Network Layer};
\node[box, below=0 of net] (data) {Data Link Layer};
\node[box, below=0 of data] (link) {Physical Layer};

\node[box, right=5 of app] (app2) {Application Layer};
\node[box, below=0 of app2] (trans2) {Transport Layer};
\node[box, below=0 of trans2] (net2) {Network Layer};
\node[box, below=0 of net2] (data2) {Data Link Layer};
\node[box, below=0 of data2] (link2) {Physical Layer};

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
