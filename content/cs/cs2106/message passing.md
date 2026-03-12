---
tags:
  - cs2106/lect4
  - cs/parallel
complete: false
prev: /labyrinth/notes/cs/cs2106/shared_memory
next: /labyrinth/notes/cs/cs2106/pipes

---
### Concept
- process sends a message directly to another process
- fascilitated by syscalls, message *may be* stored in kernal memory
- naming - need to identify the other party
- pros:
	- portable - can be implemented on different processing environments, ie. distributed systems
	- [synchronization](/labyrinth/notes/cs/cs2106/synchronization) - depending on which primitive is used
- cons:
	- inefficient - require more OS intervention
	- harder to use - limited in size and format

Communication schemes

| Direct communication                                        | Indirect communication                                                                         |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| - explicitly name the other party<br>- 1-to-1 communication | - send and receive from a **mailbox**/**port**<br>- mailbox can be shared among many processes |

Primitives

| Blocking primitive                          | Non-blocking primitive                                |
| ------------------------------------------- | ----------------------------------------------------- |
| synchronous                                 | asynchronous                                          |
| sender is blocked until message is received | sender can resume immediately                         |
| receiver is blocked until a message arrives | receiver either receives the message or a "not ready" |
