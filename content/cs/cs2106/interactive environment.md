---
tags:
  - cs2106/lect3
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/batch_processing
next: /labyrinth/notes/cs/cs2106/IPC

---
### Concept
#### Metrics
| Metric         | Description                                   |
| -------------- | --------------------------------------------- |
| Response time  | - time between request and response by system |
| Predictability | - variation in response time                  |
#### Periodic scheduler
Timer interrupt
- [interrupt](/labyrinth/notes/cs/cs2106/exceptions_&_interrupts#Interrupts) that goes off periodically based on hardware clock
- OS ensures timer interrupt cannot be intercepted by other programs
- invokes scheduler
Interval
- time between interrupts
- 1-10ms

Time quantum
- execution duration given to a process
- can be constant or variable
- multiple of the interval
- 5-100ms

#### Round robin(RR)
- simple FIFO [queue](/labyrinth/notes/cs/cs2040s/queue)
- preemptive version of [FCFS](/labyrinth/notes/cs/cs2106/batch_processing#First-come_first-served(FCFS))
- once time quantum is over, task is placed at the end of the queue

Response time
- response time guarantee

$$
\begin{gather*}
\text{Number of tasks: }n\quad \text{Time quantum: }q\\
\\
\text{Waiting time of last task: }(n-1)q
\end{gather*}
$$
> even if shortest task is last, wait is not so bad

Chosing time quantum
- big quantum -> better CPU utilization, longer wait times
- small quantum -> more overhead(lower CPU utilization), shorter wait times

#### Priority scheduling
- all tasks have an associated priority
- highest priority first, like [priority queue](/labyrinth/notes/cs/cs2040s/priority_queue)
- non-preemptive
	- take over after next round of scheduling
- preemptive
	- displace the current running task if priority is higher

Shortcomings
- low priority tasks can starve, higher priority keeps hooging CPU
	- decrease priority of current process after every time quantum

Priority inversion
- lower priority tasks preempt higher priority
- higher priority tasks cannot run

#### Multi-level feedback queue(MLFQ)
- adaptive - learn process behaviour automatically
- minimizes response time for IO bound processes
- minimizes turnaround time for CPU bound processes

Rules

| Condition                            | Result            |
| ------------------------------------ | ----------------- |
| priority(A) > priority(B)            | A runs            |
| priority(A) == priority(B)<br>       | A and B run in RR |
| new job                              | highest priority  |
| job fully utilizes time slice        | priority reduced  |
| job give up/blocks before time slice | priority retained |
> IO bounded -> get highest priority, CPU bounded -> become lowest priority

#### Lottery scheduling
- give out lottery tickets to processes, more important processes can get more tickets
- a ticket is chosen randomly, winner is granted the resource
- responsive - even new processes can participate