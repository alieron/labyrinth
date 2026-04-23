---
tags:
  - cs2105/lect8
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2105/multiple_access_links
next: /labyrinth/notes/cs/cs2105/taking_turns_protocols

---
### Concept
- no a priori coordination among nodes
- transmit at full channel rate
- how to detect and recover from collisions
#### Slotted ALOHA
- divided into time slots, 1 frame per timeslot
- if no collision
	- success
- if collision
	- retry in subsequent slot with fixed probability
- max efficiency 37%, with many nodes
- slots wasted by collisions and empty

#### Pure ALOHA
- no time sync
- higher probability of collision
- if no collision
	- success
- if collision
	- wait 1 frame transmission time
	- retry in subsequent slot with fixed probability
- max efficiency 18%, with many nodes

#### Carrier sense multiple access(CSMA)
- ALOHA - doesn't check if other nodes are already transmitting
- listen before transmit
- sensed idle - transmit frame
- sensed busy - defer transmission until idle

CSMA collisions
- still occur due to propagation delay

![[csma_collision.png|400]]

#### CSMA/CD
- ALOHA & CSMA - node doesn't stop when collision is detected midway
- if collision detected - abort transmission

![[csma-cd_collision.png|400]]

Fixed probability backoff
- probability of collision is fixed
	- increases if multiple nodes start to transmit

Binary exponential backoff
- more collisions -> heavier load -> longer backoff
- at the `nth` collision, choose from `{0, 1,..., 2ⁿ-1}`, probability is 1/2ⁿ

Minimum frame size
- collisions might occur for other nodes
- but transmitters may no detect

![[csma_min_frame_size.png|400]]

- fames need to be a certain size to garauntee detection
- based on the network's diameter
- 64 bytes for ethernet

$$
2\text{max}(d_{prop}) \leq d_{trans}
$$
> 2 so that the nodes furthest away will still intersect