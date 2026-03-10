---
tags:
  - cs2105/lect4
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2105/sockets
next: /labyrinth/notes/cs/cs2105/pipelined_protocols

---
### Summary
RDT protocols

| Protocol | Channel              | Features                |
| -------- | -------------------- | ----------------------- |
| RDT 1.0  | perfect channel      |                         |
| RDT 2.0  | bit errors           | ACK NAK + checksum      |
| RDT 2.1  | + ACK/NAK corruption | + packet sequence nums  |
| RDT 2.2  | =                    | + numbered ACK<br>- NAK |
| RDT 3.0  | + packet loss        | + timeout, retransmit   |

### Concept
#### Reliable data transfer
- in the [transport layer](/labyrinth/notes/cs/cs2105/network_layers#Transport_layer) 
- [network layer](/labyrinth/notes/cs/cs2105/network_layers#Network_layer) is best-effort, not completely reliable
- packets can be:
	- dropped
	- corrupted
	- delayed arbitrarily
	- reordered

Requirements
- guarantee packet delivery and correctness
- deliver packets(to app) in the same order they are sent(from server)

Reliable Delivery Transfer(RDT)
![[RDT_model.png|600]]
#### RDT 1.0
- assume channel is reliable, no loss, no errors

TODO find a better renderer for FSMs
![[RDT_1-0.png|600]]
#### RDT 2.0
- channel might flip bits
- use a checksum to detect bit errors
- ACK -> packet was received well
- NAK -> packet has errors

![[Pasted image 20260304004217.png|600]]
![[Pasted image 20260304004236.png|600]]

ACK and NAK corruption
- sender won't know what happened at the receiver
- if corrupted, just retransmit -> but packet might be duplicated, **receiver has no way of knowing**
##### RDT 2.1
- add sequence numbers to packets
- allow **duplicates to be discarded**

![[Pasted image 20260304005334.png|600]]
![[Pasted image 20260304005353.png|600]]

##### RDT 2.2
- remove NAK
- replace with ACK numbered with last correctly recieved packet
- duplicate ACK will trigger sender to retransmit
#### RDT 3.0
- packets may be lost
	- if no ACK by timeout, retransmit
- packets may be delayed for an arbitrary time
	- assume loss, retransmit -> receiver will detect duplicates
- order is preserved

![[Pasted image 20260304010817.png|600]]

