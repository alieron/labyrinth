---
tags:
  - cs2107/chapter5
  - cs/security
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2107/denial_of_service
next: /labyrinth/notes/cs/cs2107/VPN

---
### Summary
Firewalls
- control inbound/outbound traffic based on rules
- **Packet Filter:** 
	- checks IP headers (stateless)
	- deep packet inspection(DPI) -> check the payload as well
	- block traffic from certain IP or port
- **Stateful Firewall:** 
	- tracks connection states
	- count number of requests from a particular IP address
	- block abnormal connection patterns/login attempts
- **Application Proxy:**
	- inspects and possibly modify higher-layer data transmitted between client and server
	- block URLs or scan for malware
> statefulness is related to some sort of memory

Demilitarized Zone(DMZ)
- network segment exposed to the internet but isolated from internal systems
- hosts public-facing services, ie. web/mail
- internal LAN stays protected behind an additional firewall

![[firewall_dmz.png]]

Intrusion Detection Systems (IDS)
- **Signature-based:**
	- detects known attack patterns
- **Anomaly-based:**
	- flags deviations from normal behavior
- **Behavior-based:**
	- monitors user/system activity patterns
### Concept
Principle of least privilege
- a given user should have the exact access rights to execute their roles
- no unecessary privileges

Compartmentalization
- keep segments separated
- limits the impact of any single failure/attack