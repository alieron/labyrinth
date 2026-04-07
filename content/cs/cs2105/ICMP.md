---
tags:
  - cs2105/lect7
  - cs/networking
complete: true
prev: /labyrinth/notes/cs/cs2105/RIP
next: /labyrinth/notes/cs/cs2105/multiple_access_links

---
### Concept
#### Internet Control Message Protocol(ICMP)
- used by hosts and routers to communicate network level information
- carried in [IP datagrams](/labyrinth/notes/cs/cs2105/IP#IPv4_datagram)
- `ping` uses ICMP

| Type | Code | Description           |
| ---- | ---- | --------------------- |
| 8    | 0    | echo request          |
| 0    | 0    | echo reply            |
| 3    | 1    | dest host unreachable |
| 3    | 3    | dest port unreachable |
| 11   | 0    | TTL expired           |
| 12   | 0    | bad IP header         |

Route tracing
- send small ICMP packets with incrementing TTL
- each hop may respond with TTL expired