---
prev: "[distance vector routing](/labyrinth/notes/cs/cs2105/distance_vector_routing)"
next: /labyrinth/notes/cs/cs2105/ICMP
tags: []
complete: false
---
### Concept
#### Routing Information Protocol(RIP)
- simplified distance vector algorithm
- uses **hop count** as the cost metric
- exchanges routing table every 30 seconds
- uses [UDP](/labyrinth/notes/cs/cs2105/UDP) port 520
- self-repair: no update from neighbour after 3 mins -> assume neighbour has failed