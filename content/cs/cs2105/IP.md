---
tags:
  - cs2105/lect6
  - cs/networking
complete: false
next: /labyrinth/notes/cs/cs2105/NAT
prev: /labyrinth/notes/cs/cs2105/TCP

---
### Summary
Subnet mask to decimal

| Binary      | Number of 1s | Decimal |
| ----------- | ------------ | ------- |
| `0000 0000` | 0            | 0       |
| `1000 0000` | 1            | 128     |
| `1100 0000` | 2            | 192     |
| `1110 0000` | 3            | 224     |
| `1111 0000` | 4            | 240     |
| `1111 1000` | 5            | 248     |
| `1111 1100` | 6            | 252     |
| `1111 1110` | 7            | 254     |
| `1111 1111` | 8            | 255     |

Special IP addresses

| Address / Range                             | Name                | Purpose / Meaning                                                                       |
| ------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------- |
| `0.0.0.0/8`                                 | Unspecified address | Means “no specific address”; used by a host before it gets an IP or to mean “this host” |
| `255.255.255.255/32`                        | Limited broadcast   | Broadcast to **all devices on the local network** (not forwarded by routers)            |
| `127.0.0.0/8` (e.g. `127.0.0.1`)            | Loopback            | Refers to the **local machine** (localhost)                                             |
| `10.0.0.0/8`                                | Private range       | Internal networks (not routable on internet)                                            |
| `172.16.0.0/12`                             | Private range       | Internal networks                                                                       |
| `192.168.0.0/16`                            | Private range       | Internal networks (home networks)                                                       |
| Network address (e.g. `192.168.1.0/24`)     | Network ID          | Identifies the **subnet itself**; used in routing                                       |
| Broadcast address (e.g. `192.168.1.255/24`) | Directed broadcast  | Sends to **all hosts in a specific subnet**                                             |

### Concept
#### IP address
- unique identifier for a host/router
- 32-bit number

Router
- forward packets between 2 hosts/**networks**

Interface
- connection between host/router and a physical link
- hosts/routers may have multiple interfaces

#### Address aggregation
- reduces the size of the forwarding table

Subnet ^3308b7
- group of "directly" interconnected host interfaces
- hosts in the same subnet can reach each other without the router
- the router provides a connection to the outside

$$
a.b.c.d/n
$$
```tikz
\usetikzlibrary{decorations.pathreplacing,positioning}

\begin{document}

\begin{tikzpicture}[every node/.style={minimum width=0.8cm, minimum height=0.8cm}]
  % Draw bits
  \node[fill=blue!50, draw, minimum width=4cm] (prefix) {subnet prefix};
  \node[fill=red!50, right=0cm of prefix, draw, minimum width=3cm] (host) {host id};
  
  % Braces for sign, exponent and matissa
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (prefix.south west) -- (prefix.south east) node[midway,below=6pt] {$n$ bits};
  
  \draw[decorate,decoration={brace,amplitude=5pt,mirror}] 
    (host.south west) -- (host.south east) node[midway,below=6pt] {$32-n$ bits};
    
\end{tikzpicture}

\end{document}
```
- network address - all 0s in host id, identifies the subnet from outside
- broadcast address - all 1s in host id, refers to every interface in the subnet

Subnet mask
- bit mask for the subnet prefix

Hierarchical addressing
- ISPs subdivide their subnet for other users
- match the longest prefix in forwarding table

#### IPv4 datagram
```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version|  IHL  |Type of Service|          Total Length         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Identification        |Flags|      Fragment Offset    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Time to Live |    Protocol   |         Header Checksum       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Source Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Destination Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Data ...            
+---------------- ...
```
> unlike [UDP](/labyrinth/notes/cs/cs2105/UDP) or [TCP](/labyrinth/notes/cs/cs2105/TCP) the header's size of 20 bytes is included in the length field

Time to live
- number of hops the packet can take
- router decrements the value before passing on
- if 0 the packet is dropped

Fragmentation
- different links might have different maximum transfer unit(MTU)
- packets that are too large will be fragmented by the routers
- reassembled only at the destination
- frag flag
	- 1 if there is a next fragment
	- 0 is this is the last fragment
- frag offset, `offset bytes / 8`

### Application
Subnet mask
$$
\begin{gather*}
200.23.16.42/23 \\
\\
\begin{aligned}
\text{binary:}&&&\overbrace{ {\color{cyan} 11001000 \ 00010111 \ 0001000} }^{ \text{subnet prefix} }\overbrace{ 0 \ 00101010 }^{ \text{host id} } \\
\text{mask:}&&&{\color{red} 11111111 \ 11111111 \ 1111111} 0 \ 00000000 \\
\end{aligned}
\end{gather*}
$$

Different subnet
$$
\begin{array}{rr}
172.26.185.128/26 & {\color{cyan} 10101100 \ 00011010 \ 10111001 \ 10}000000 \\
172.26.185.130/26 & {\color{cyan} 10101100 \ 00011010 \ 10111001 \ 10}000010 \\
172.26.185.160/26 & {\color{cyan} 10101100 \ 00011010 \ 10111001 \ 10}100000 \\
172.26.185.192/26 & {\color{cyan} 10101100 \ 00011010 \ 10111001 \ 1}{\color{red}1}000000 \\
\end{array}
$$

Subnet division
$$
\begin{gather*}
192.168.56.128/26 \\
\\
{\color{cyan} 1100000 \ 10101000 \ 00111000 \ 10}000000 \\
\\
\text{Divide into 4 equal sized subnets} \\
\\
{\color{cyan} 1100000 \ 10101000 \ 00111000 \ 10}{\color{violet} \begin{cases}
00 \\
01 \\
10 \\
11
\end{cases} }\ 0000\\
192.168.56.128/28 \\
192.168.56.144/28 \\
192.168.56.160/28 \\
192.168.56.176/28 \\
\end{gather*}
$$

Prefix matching(8-bit addresses)
$$
\begin{array}{c|c}
\text{Prefix} & \text{Interface} & \text{IP address range} & \text{No. of addresses} \\
\hline
11  & 0 & {\color{cyan} 11 }\begin{cases}
000000 \\
\vdots \\
111111
\end{cases} & 2^6 \\
\hline
101 & 1 & {\color{cyan} 101 }\begin{cases}
00000 \\
\vdots \\
11111
\end{cases} & 2^5 \\
\hline
100 & 2 & {\color{cyan} 100 }\begin{cases}
00000 \\
\vdots \\
11111
\end{cases} & 2^5 \\
\hline
\text{rest} & 3 & {\color{cyan} 0 }\begin{cases}
0000000 \\
\vdots \\
1111111
\end{cases} & 2^7
\end{array}
$$

Fragmentation
$$
\begin{gather*}
\text{1500 byte datagram}\\
\text{500 byte MTU}\\
\\
\text{Max data in each fragment: }500-20 = 480\\
\text{No. of fragments: } \frac{1500-20}{480}\approx 4\\
\\
\begin{array}{c|c}
\text{Fragment No.} & \text{Fragment Offset} & \text{Flag} & \text{Size(bytes)} \\
\hline
1 & 0 & 1 & 480+20 \\
\hline
2 & 60 & 1 & 480+20 \\
\hline
3 & 120 & 1 & 480+20 \\
\hline
4 & 180 & 0 & 40+20
\end{array}
\end{gather*}
$$