---
tags:
  - cs2105/lect5
  - cs/networking
complete: false
next: /labyrinth/notes/cs/cs2105/TCP
prev: /labyrinth/notes/cs/cs2105/pipelined_protocols

---
### Concept
#### User Datagram Protocol(UDP)
- connectionless, single [datagram socket](/labyrinth/notes/cs/cs2105/sockets#Datagram_socket) handles all traffic
- no reliability
- no congestion control
- small header (8 bytes)
- fast

```
 0      7 8     15 16    23 24    31  
+--------+--------+--------+--------+ 
|     Source      |   Destination   | 
|      Port       |      Port       | 
+--------+--------+--------+--------+ 
|                 |                 | 
|     Length      |    Checksum     | 
+--------+--------+--------+--------+ 
|                                     
|          data octets ...            
+---------------- ...
```

UDP Checksum
- wrap around carry -> 1s complement(flip all bits) == checksum
- detect single bit flips
- compute checksum over the packet(in 16-bit chunks), check if checksum values match
- sender: computes with checksum = 0 initially -> insert computed checksum into packet
- receiver: computes checksum -> should find that checksum == 0