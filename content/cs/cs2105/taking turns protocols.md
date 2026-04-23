---
tags:
  - cs2105/lect8
  - cs/networking
complete: true
prev: /labyrinth/notes/cs/cs2105/random_access_protocols
next: /labyrinth/notes/cs/cs2105/channel_partitioning_protocols

---
### Concept
#### Polling
- one node is master node
- master node polls the other nodes in a round robin
- master node gives other nodes permission to transmit up to a maximum number of frames
- issues:
	- master node is a single point of failure

#### Token passing
- special frame/token is passed from node to node
- node holding the token can transmit up to a maximum number of frames before passing the token
- issues:
	- token may be lost
	- node failure may break the chain