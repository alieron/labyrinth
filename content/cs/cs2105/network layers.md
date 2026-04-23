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

| Layer             | Packet format                                      | Needs                         |
| ----------------- | -------------------------------------------------- | ----------------------------- |
| application layer | message                                            | the data itself               |
| transport layer   | segment -> src & dest ports \| message             | which port/process to send to |
| network layer     | datagram -> src & dest ip \| segment               | which host to send to         |
| link layer        | frame -> src & dest MAC \| datagram \| error check | which device to send to       |

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc}
\begin{document}
\begin{tikzpicture}[every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
	\node[text width=3cm,align=right] (application) {Application Layer};
	\node[text width=3cm,align=right,below=of application] (transport) {Transport Layer};
	\node[text width=3cm,align=right,below=of transport] (network) {Network Layer};
	\node[text width=3cm,align=right,below=of network] (link) {Link Layer};
  
  \node[right=9.5 of application, draw, minimum width=2cm] (msg) {message};
  
  \node[right=6.5 of transport, draw, minimum width=3cm] (th) {segment header};
  \node[right=0cm of th, draw, minimum width=2cm] (m) {message};
  
  \node[right=3.5 of network, draw, minimum width=3cm] (nh) {datagram header};
  \node[right=0cm of nh, draw, minimum width=5cm] (t) {segment};
  
  \node[right=of link, draw, minimum width=2.5cm] (lh) {frame header};
  \node[right=0cm of lh, draw, minimum width=8cm] (d) {datagram};
  \node[right=0cm of d, draw, minimum width=2.5cm] (lt) {frame trailer};
  
	\draw (msg.south west) -- (m.north west);
	\draw (msg.south east) -- (m.north east); 
	 
	\draw (th.south west) -- (t.north west);
	\draw (m.south east) -- (t.north east); 
	 
	\draw (nh.south west) -- (d.north west);
	\draw (t.south east) -- (d.north east);
  
\end{tikzpicture}
\end{document}
```
> each successive layer builds upon the packet

Tables at each layer

| Device           | Layer           | Table Name                        | Stores                                          | Purpose                               |
| ---------------- | --------------- | --------------------------------- | ----------------------------------------------- | ------------------------------------- |
| Host (OS / apps) | **Application** | Application state / session table | App-specific data (sessions, requests, cookies) | Track application-level interactions  |
| Host (OS kernel) | **Transport**   | **Socket / connection table**     | (IP, port, protocol) <-> process                | Deliver data to correct application   |
| Router / Host    | **Network**     | **Routing table**                 | Network prefix -> next hop                      | Decide where to send packets          |
| NAT Router       | **Network**     | **NAT translation table**         | (private IP, port) <-> (public IP, port)        | Map internal <-> external connections |
| Host / Router    | **Link**        | **ARP table (ARP cache)**         | IP -> MAC address                               | Resolve next-hop MAC address          |
| Switch           | **Link**        | **MAC (forwarding) table**        | MAC address -> interface                        | Forward frames within LAN             |

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
- routers - forwards packets between networks
- best-effort and unreliable
	- no guarantees for:
		- successful datagram delivery
		- timing/order of delivery
		- bandwidth provided
	- pros:
		- simple mechanism - wide adoption
		- sufficient provisioning of bandwidth - good enough most of the time
		- distributed services - multiple providers
- control plane(application layer protocols): 
	- [DHCP](/labyrinth/notes/cs/cs2105/DHCP), [RIP](/labyrinth/notes/cs/cs2105/RIP), BGP
- data plane:
	- [IP](/labyrinth/notes/cs/cs2105/IP), [ICMP](/labyrinth/notes/cs/cs2105/ICMP)


#### Link layer
- communication between **adjacent nodes** only
- switch - smart forwarding
- implemented in network interface cards(NIC) in hardware, integrated closely with the physical layer
- [ARP](#)
