---
tags:
  - cs2105/lect8
  - cs/error_detection
complete: false
---
### Concept
#### Single-bit parity
- whether there should be an even/odd number of 1s
- detect single bit errors/odd number of bit errors
- cannot detect even number of bit errors

$$
\begin{array}{c|c}
d\text{ bits} & 1\text{ parity bit}
\end{array}
$$

- weakness: errors occur in bursts, 50/50 if can detect or not

#### 2d parity
- $i$ rows and $j$ columns
- detect and correct single bit errors
- detect two bit errors
- compute parity bit for all rows and columns

$$
\begin{array}{ccc|c}
d_{1,1} & \dots & d_{1,j} & r_{1} \\
d_{2,1} & \dots & d_{2,j} & r_{2} \\
\vdots & \ddots & \vdots & \vdots \\
d_{i,1} & \dots & d_{i,j} & r_{i} \\
\hline
c_{1} & \dots & c_{j} & p \\
\end{array}
$$
> $p$ can be computed from the row **or** column parities
