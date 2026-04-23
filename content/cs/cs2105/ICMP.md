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
- uses `echo request` and `echo reply`

```
0                   1                   2                   3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Type      |     Code      |          Checksum             |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|           Identifier          |        Sequence Number        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Data ...
+-+-+-+-+-
```
> with [NAT](/labyrinth/notes/cs/cs2105/NAT) the identifier is used to store the port number