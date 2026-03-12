---
prev: "[simple scheduling](/labyrinth/notes/cs/cs2106/simple_scheduling)"
tags: []
complete: false
next: /labyrinth/notes/cs/cs2106/priority_scheduling

---
### Concept
#### Shortest Job First(SJF)
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
#### Shortest Remaining Time(SRT)
- variation of SJF to handle new jobs dynamically
- new jobs with shorter remaining time can preempt current job
- serve short job first even if it arrives late