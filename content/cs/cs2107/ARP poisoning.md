---
tags:
  - cs2107/chapter5
  - cs/security
  - cs/networking
complete: true
prev: /labyrinth/notes/cs/cs2107/DNS_spoofing
next: /labyrinth/notes/cs/cs2107/denial_of_service

---
### Summary
Premise
- can make ARP broadcasts to the network
- switch forwards ARP updates to all users
- reply without request

Attack
- broadcast that the gateway IP address is at attacker's MAC
- all packets from the victim to the gateway are routed to the attacker

Attacker's Goals
- achieve MITM for other attacks, eg. [DNS spoofing](/labyrinth/notes/cs/cs2107/DNS_spoofing) -> confidentiality/integrity
- inspect victim's traffic -> confidentiality
- modify victim's traffic -> integrity
- drop victim's traffic, [DoS](/labyrinth/notes/cs/cs2107/denial_of_service) -> availability

Defense
- static ARP entries
- port security - fixed MAC addresses for each switch port
- prevent untrusted devices from joining the network, eg. WPA2
### Concept
Address Resolution Protocol(ARP)
- resolves an IP address to a MAC address
- occurs in the [data link layer](/labyrinth/notes/cs/cs2107/network_security#^456a7e)
- a device might know the IP of the next hop, but needs the MAC to tell the switch where to send it

Switch
- has no concept of an IP address
- stores a table mapping the physical port on the switch, to the MAC address of the device connected to that port

ARP table
- maintained by each device(node) on the subnet
- stores mapping from IP address to MAC address
- the nodes update each other's tables via ARP
- if the mapping for an IP is unknown
	- node broadcasts an ARP request, openly asking for the node with that IP to send its MAC
- new device takes over IP
	- new node broadcasts its MAC to the subnet, reply without request

ARP poisioning
- attacker can broadcast their own MAC
- traffic from the victim is routed through the attacker