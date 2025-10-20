---
tags:
  - cs2107/chapter3
  - cs/security
complete: true
prev: /labyrinth/notes/cs/cs2107/padding_oracle_attack
next: /labyrinth/notes/cs/cs2107/passwords

---
### Summary
Data-origin authentication ^5a1c1f
- ensure that a **message truly originates** from the claimed sender
- critical for communication security and detecting forgery

Entity authentication
### Concept
Authentication
- assuring that the communicating entity, or origin of the information, is the one that it claims to be
- authenticity implies integrity
> the latter is true for `cs2107`, but there are varying definitions for authenticity and integerity

Data-origin
- **authentic message**: one whose origin is verifiable
- **threats:**
    - message forgery (attacker injects data)
    - replay attacks (attacker resends valid but old messages)
- **techniques:**
    - cryptographic signatures (asymmetric)
    - message authentication codes (MAC, symmetric)
    - sequence numbers/timestamps to prevent replay