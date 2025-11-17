---
tags:
  - cs2107/chapter5
  - cs/security
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2107/firewall_and_IDS
next: /labyrinth/notes/cs/cs2107/web_security

---
### Summary

### Concept
Virtual Private Network(VPN)
- tunnel at the **network layer**
- using IPSec or using TLS/SSL
- encrypt the whole payload and adds a new IP header containing the VPN server's address
- to the enpoint, the user is communicating from the VPN server's address, their actual address is obscured
