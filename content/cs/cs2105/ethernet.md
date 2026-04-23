---
tags:
  - cs2105/lect9
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2105/channel_partitioning_protocols
next: /labyrinth/notes/cs/cs2105/secure_communication

---
### Concept
#### Local Area Network(LAN)
- interconnects computers within a geographical area
- ethernet - IEEE 802.3
- wi-fi - IEEE 802.11

#### Ethernet
- unreliable, no ACK or NAK, needs higher layer RDT to ensure reliability
- uses [CSMA/CD](/labyrinth/notes/cs/cs2105/multiple_access_links) with exponential backoff

```
+-----------+-----------------+------------+-----------+-----------------+-----------+
| Preamble  | Destination MAC | Source MAC | Type      | Datagram        | CRC       |
| (8 bytes) |    (6 bytes)    | (6 bytes)  | (2 bytes) | (46-1500 bytes) | (4 bytes) |
+-----------+-----------------+------------+-----------+-----------------+-----------+
```
> type indicates the network layer protocol being used

Preamble
- 7 `AA` bytes and 1 `AB` byte(start of frame)
- synchronize receiver to the sender's clock rate

#### Bus topology
- broadcast LAN
- adapters tap into the bus
- drawbacks
	- all nodes can collide with each other
	- slow, need to mitigate collisions
	- single point of failure + hard to troubleshoot

#### Star topology
Hub based
- **physical layer** device that just rebroadcasts to other interfaces
- advantages
	- cheap
	- modular design, easier to maintain
	- single point of failure but easily fixed
- drawbacks
	- still slow
	- doesn't reduce collisions

Switch based
- works on link layer frames
- selective forwarding based on MAC address
- transparent - hosts are unaware of the presence of the switch
- plug-an-play - doesn't need to be configured

#### MAC address
- media access control(MAC)
- 48 bits, burned onto every adapter/NIC
	- first 3 bytes -> manufacturer
	- rest -> unique ID
- broadcast MAC: FF-FF-FF-FF-FF-FF
- if NIC receives frame with matching/broadcast MAC, the frame is passed to the network layer

#### Selective forwarding
1. record source MAC of incoming link and incoming interface
2. check if destination MAC in switch table
3. if entry found
	1. if destination MAC on incoming interface -> drop
		- probably a broadcast from that segment
	2. else -> forward to that interface
4. else -> broadcast to all other interfaces

Switch table
```
| MAC address of host | Interface to reach host | TTL |
```

#### Address Resolution Protocol(ARP)
- maps IP address to MAC address
- link layer protocol, needs to access both MAC and IP addresses
- done by network layer devices

ARP table
```
| IP Address | MAC Address | TTL |
```