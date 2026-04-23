---
tags:
  - cs2105/lect11
  - cs/networking
  - cs/security
complete: true
prev: /labyrinth/notes/cs/cs2105/secure_communication

---
Succeeds: [firewall & IDS](/labyrinth/notes/cs/cs2107/firewall_&_IDS)
### Concept
#### Firewall
- gateway to the internet
- isolates an organization's internal net from the larger internet
- allows some packets to pass, but blocks others
- why?
	- prevent [denial of service](/labyrinth/notes/cs/cs2107/denial_of_service) attacks
	- prevent illegal access/modification of internal data
	- allow only authorized access
- types:
	- stateless packet filter
	- stateful packet filter
	- application gateway
- limitations:
	- IP spoofing - src IP might not be true
	- single point of access - bottleneck, tradeoff between degree of communication and level of security

Stateless packet filter
- filter packet by packet
- at the router - 
- filter based on:
	- src/dest IP
	- TCP/UDP src/dest port
	- ICMP message type
	- TCP SYN/ACK

Access control list
- sequential set of ruls
- applied to all incoming packets in order
- determines if a packet should be allowed or denied