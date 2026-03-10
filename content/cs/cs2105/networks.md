---
tags:
  - cs2105/lect1
  - cs/networking
complete: true
next: /labyrinth/notes/cs/cs2105/network_delays

---
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