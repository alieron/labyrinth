---
tags:
  - cs2105/lect5
  - cs/networking
complete: false
prev: /labyrinth/notes/cs/cs2105/UDP
next: /labyrinth/notes/cs/cs2105/IP

---
### Summary
TCP vs [pipelined protocols](/labyrinth/notes/cs/cs2105/pipelined_protocols)

| Protocol         | Timeout                    | Retransmit                 | Handle out-of-order             |
| ---------------- | -------------------------- | -------------------------- | ------------------------------- |
| Go-Back-N        | oldest unACKed packet      | all unACKed, `>=n`         | discard                         |
| Selective repeat | individual unACKed packets | one, `n`                   | buffer, discard only if too far |
| TCP              | oldest unACKed packet      | one, oldest unACKed packet | *unspecified*                   |

Timeout
- ideally, `timeout > RTT`

$$
\begin{align*}
\text{Sampled:}&&&\text{RTT}_{S} \\
\text{EWMA:}&&& \text{RTT}_{\varepsilon} = (1-\alpha)\cdot \text{RTT}_{\varepsilon}+\alpha \cdot\text{RTT}_{S} \\
&&& \alpha=\frac{1}{8} \\
\\
\text{Deviation:}&&&\text{RTT}_{dev}= (1-\beta)\cdot \text{RTT}_{dev}+\beta \cdot|\text{RTT}_{S}-\text{RTT}_{\varepsilon}| \\
&&& \beta=\frac{1}{4} \\
\\
\text{Retransmission Time Out:} &&& \text{RTO}=\text{RTT}_{\varepsilon} + 4\cdot\text{RTT}_{dev}
\end{align*}
$$
> the exponential weighted moving average(EWMA) encodes all the sampled RTTs into a single value
### Concept
#### Transmission Control Protocol(TCP)
- connection-oriented, have to use source information to determine which socket to direct to
- reliable
- byte-stream, TCP divides the data into segments
- flow control
- congestion control
- full duplex - bi-directional data flow

```
0                   1                   2                   3   
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Sequence Number                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Acknowledgment Number                      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Data |           |U|A|P|R|S|F|                               |
| Offset| Reserved  |R|C|S|S|Y|I|            Window             |
|       |           |G|K|H|T|N|N|                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|           Checksum            |         Urgent Pointer        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options (if offset > 5)                    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                             data                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

![[Pasted image 20260306112758.png|600]]

Sequence and acknowledgement numbers
- sequence: first byte in this segment's data
- acknowledgement: next byte of data expected, receiver sends this as the cumulative ACK

![[Pasted image 20260304170512.png|600]]

- fast retransmission - if **3 duplicates ACKs** are received, resend that segment immediately, without waiting for timeout

3-way handshake
- establishing a connection

![[Pasted image 20260304172524.png|600]]
- SYN flooding - send SYN, but not ACK
- SYN/ACK - send SYN-ACK packets that don't belong to any session, server has to lookup everytime

Closing connection
- send signal to close
- wait for leftover data

![[Pasted image 20260304172627.png|600]]