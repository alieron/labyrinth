---
tags:
  - cs2107/chapter5
  - cs/security
  - cs/networking
complete: true
next: /labyrinth/notes/cs/cs2107/firewall_and_IDS
prev: /labyrinth/notes/cs/cs2107/ARP_poisoning

---
### Summary
Denial of Service(DoS)
- **Reflection:**
	- use spoofed victim's IP address so that 3rd patries reply to the victim
- **Flooding:**
	- overwhelm bandwidth of the network
- **Amplification:**
	- amplify small query -> large response
	- exploits [UDP](/labyrinth/notes/cs/cs2107/network_security#^74306d) services
> Distributed Denial of Service(DDoS) is when DoS is carried out by a large number of attackers, eg. botnet
### Concept
Attacker's goal
- make a service **unavailable** to users

ICMP/smurf flood
- reflection and flooding
- attacker sends a request spoofed with the victim's IP
- router broadcasts the request
- other nodes respond to the request, replying to the victim's IP
- victim is flooded
> routers no longer broadcast by default

DNS amplification
- reflection and amplification
- exploits [DNS](/labyrinth/notes/cs/cs2107/DNS_spoofing#^cc1630)
- small UDP query to a DNS server results in a larger response for the resolved IP
- attacker can send a query spoofed with the victim's IP