---
tags:
  - cs2105/lect8
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2105/ICMP
next: /labyrinth/notes/cs/cs2105/random_access_protocols

---
### Summary
Protocol properties

| Protocol          | Collision free | Efficient                    | Fairness | Fully decentralized |
| ----------------- | -------------- | ---------------------------- | -------- | ------------------- |
| **Pure ALOHA**    | ❌              | ✅                            | ✅        | ✅                   |
| **Slotted ALOHA** | ❌              | ✅                            | ✅        | ✅                   |
| **CSMA**          | ❌              | ✅                            | ✅        | ✅                   |
| **CSMA/CD**       | ❌              | ✅                            | ✅        | ✅                   |
| **Polling**       | ✅              | high, but polling overhead   | ✅        | ❌ master node       |
| **Token Passing** | ✅              | high, but wait for token     | ✅        | ✅                   |
| **TDMA**          | ✅              | low, unused slots are wasted | ✅        | ✅                   |
| **FDMA**          | ✅              | low, unused time is wasted   | ✅        | ✅                   |

### Concept
- point-to-point links
	- no need access control
	- PPP, SLIP
- broadcast links
	- need access control

#### Shared link
- broadcast link, 1 link handle `N` nodes
- collision - when 2 or more nodes transmit simultaneously
- link access control - coordination between nodes to avoid collision
- error detection - detect errors caused by noise/attenuation

Types of access control protocols
- [random access protocols](/labyrinth/notes/cs/cs2105/random_access_protocols) - allow collisions to happen, recover from collisions
- [taking turns protocols](/labyrinth/notes/cs/cs2105/taking_turns_protocols) - each node takes turns transmitting
- [channel partitioning protocols](/labyrinth/notes/cs/cs2105/channel_partitioning_protocols) - divide channel into a smaller part, allocate to a node for exclusive use

Properties
- for a broadcast channel rate of $R$ bps
1. collision free
2. efficient - if only one node wants to transmit, it can transmit at $R$
3. fairness - when $M$ nodes want to transmit, they can transmit at $R/M$
4. fully decentralized - no dedicated coordination node
5. no out-of-band signalling(mandatory)

#### Error detection
- detection
	- [single-bit parity](/labyrinth/notes/cs/cs2105/parity#Single-bit_parity) - single/odd number of bit errors
	- [CRC](/labyrinth/notes/cs/cs2105/CRC) - odd number of bit errors, small bursts
- correction
	- [2d parity](/labyrinth/notes/cs/cs2105/parity#2d_parity)