---
tags:
  - co250/chapter1
  - math/optimization
complete: false
prev: /labyrinth/notes/math/co250/linear_programs
next: /labyrinth/notes/math/co250/graph_optimization_models

---
### Concept
An integer program (IP) is an LP with integrality restrictions. It is **pure** if every variable is integral and **mixed** otherwise. Binary variables satisfy $x\in\{0,1\}$. Integrality can turn an easy LP into a computationally hard problem; polynomial-time algorithms are known for LP, but not expected for general IP.

Typical pure-IP models include integer knapsack,
$$\max\sum_jv_jx_j\quad\text{s.t.}\quad\sum_jw_jx_j\le W,\quad x\in\mathbb Z_+^n,$$
and cyclic staff scheduling, where integer variables count workers beginning each shift pattern and coverage constraints meet each day's demand.


#### Binary modelling
Binary variables encode choices and implications. If $0\le x\le U$ and activity $x$ is allowed only when $y=1$, use $x\le Uy$. To enforce either $a^Tx\ge r$ or $b^Tx\ge s$, use
$$a^Tx\ge ry,\qquad b^Tx\ge s(1-y),\qquad y\in\{0,1\}.$$
For a discrete set $S$, introduce $y_s\in\{0,1\}$:
$$\sum_{s\in S}y_s=1,\qquad z=\sum_{s\in S}sy_s.$$
The bound $U$ must be valid; an unnecessarily large big-$M$ weakens the relaxation.


### Application
Use integer variables only when divisibility matters. Logical conditions are handled by [binary modeling](#); later, [integer hulls and meyers theorem](/labyrinth/notes/math/co250/integer_hulls_and_meyers_theorem) explains the relation to LP.
