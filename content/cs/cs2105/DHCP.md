---
tags:
  - cs2105/lect6
  - cs/networking
complete: true
prev: /labyrinth/notes/cs/cs2105/NAT
next: /labyrinth/notes/cs/cs2105/distance_vector_routing

---
### Concept
#### Dynamic Host Configuration Protocol(DHCP)
- application layer protocol
- allows a host to dynamically  obtain its IP address when joining a network
- IP address is renewable and reusable
- runs on [UDP](/labyrinth/notes/cs/cs2105/UDP), server port 67, client port 68

Discovery process
- special address - client has no IP address initially
- broadcast address - IP address is unknown initially
- request after offer - client selects one, in teh case where there are multiple DHCP offers

![[DHCP_discover.png|600]]