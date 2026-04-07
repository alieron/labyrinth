---
tags:
  - cs2105/lect6
  - cs/networking
complete: false
next: /labyrinth/notes/cs/cs2105/NAT
prev: /labyrinth/notes/cs/cs2105/TCP

---
### Concept
#### IPv4 datagram
```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version|  IHL  |Type of Service|          Total Length         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Identification        |Flags|      Fragment Offset    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Time to Live |    Protocol   |         Header Checksum       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Source Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Destination Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Data ...            
+---------------- ...
```
> unlike [UDP](/labyrinth/notes/cs/cs2105/UDP) or [TCP](/labyrinth/notes/cs/cs2105/TCP) the header's size of 20 bytes is included in the length field

Time to live
- number of hops the packet can take
- router decrements the value before passing on
- if 0 the packet is dropped

Fragmentation
- different links might have different maximum transfer unit(MTU)
- packets that are too large will be fragmented by the routers
- reassembled only at the destination
- frag flag
	- 1 if there is a next fragment
	- 0 is this is the last fragment
- frag offset, `offset bytes / 8`