---
tags:
  - cs2106/chapter2
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/process_scheduling
next: /labyrinth/notes/cs/cs2106/interactive_environment

---
### Concept
#### Metrics
| Metric          | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| Turnaround time | - total time taken for the job<br>- includes time spent waiting for CPU |
| Throughput      | - number of tasks finished per unit time                                |
| CPU utilization | - percentage of CPU working on the task                                 |
#### First-come first-served(FCFS)
- simple FIFO [queue](/labyrinth/notes/cs/cs2040s/queue)

Shortcomings
- average waiting time can be reduced by reordering
- convoy effect - process are stuck in an order

#### Shortest job first(SJF)
- select task with smallest total CPU time
- need to know CPU time required in advance
- minimize average waiting time

Predicting CPU time
- guess the future CPU time by the previous CPU-bound phases
1. simple average
	- $n$ previous runs need to be

$$
\begin{gather*}
\text{Predicted time: }T_{n}\quad \text{Actual time: }A_{n} \\
\\
T_{n+1}= \frac{\sum_{i=1}^{n}A_{i}}{n}
\end{gather*}
$$

2. exponential average
	- full history is stored in one value $T_n$

$$
\begin{gather*}
\text{Smoothing factor: }\alpha \\
\\
T_{n+1}=\alpha A_{n} + (1-\alpha)T_{n}
\end{gather*}
$$

#### Shortest remaining time(SRT)
- variation of SJF to handle new jobs dynamically
- new jobs with shorter remaining time can preempt current job
- serve short job first even if it arrives late