---
tags:
  - cs2105/lect6
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2105/IP
next: /labyrinth/notes/cs/cs2105/DHCP

---
### Summary
| Direction       | Modified field   | Where in Datagram | Change                       | Checksum recomputed |
| --------------- | ---------------- | ----------------- | ---------------------------- | ------------------- |
| LAN -> Internet | Source IP        | IP header         | Private -> Public IP         | IP checksum         |
|                 | Source Port      | TCP/UDP header    | New unique port assigned     | TCP/UDP checksum    |
| Internet -> LAN | Destination IP   | IP header         | Public -> Private IP         | IP checksum         |
|                 | Destination Port | TCP/UDP header    | Mapped back to internal port | TCP/UDP checksum    |
### Concept
#### Network address translation(NAT)
- router that sits in between the internet and the [LAN](/labyrinth/notes/cs/cs2105/ethernet#Local_Area_Network(LAN))
- aggregates a [subnet](/labyrinth/notes/cs/cs2105/IP#^3308b7) to one public facing IP address

IP address shortage
- public IP addresses - need to be globally unique
- private IP addresses - not unique, only routable internally

NAT router
- maps WAN side port number to LAN side **private IP** and port number
- 16-bit port number
- change ISP buy just changing the public IP
- [network isolation](/labyrinth/notes/cs/cs2105/network_isolation) - LAN hosts cannot be explicitly addressed from the outside
- modifications to packets:
	- IP - recompute [IP datagram](/labyrinth/notes/cs/cs2105/IP#IPv4_datagram) header checksum
	- port - recompute transport layer checksum