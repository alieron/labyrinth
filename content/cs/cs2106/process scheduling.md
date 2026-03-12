---
tags:
  - cs2106/lect2
  - cs/parallel
complete: false
prev: /labyrinth/notes/cs/cs2106/exceptions_&_interrupts
next: /labyrinth/notes/cs/cs2106/simple_scheduling

---
### Summary
Scheduling algorithms

| Algorithm                                                        | Preemptive/non-preemptive     | Starvation      | Optimizes for                           | Remarks         |
| ---------------------------------------------------------------- | ----------------------------- | --------------- | --------------------------------------- | --------------- |
| [FCFS](/labyrinth/notes/cs/cs2106/simple_scheduling#First-Come_First-Served(FCFS))        | non-preemptive                | no, FIFO        | -                                       |                 |
| [RR](/labyrinth/notes/cs/cs2106/simple_scheduling#Round_Robin(RR))                        | preemptive, quanta respecting | no, FIFO        | reduce wait time                        | preemptive FCFS |
| [SJF](/labyrinth/notes/cs/cs2106/shortest_first_scheduling#Shortest_Job_First(SJF))       | non-preemptive                | yes             | minimize average turnaround time        |                 |
| [SRT](/labyrinth/notes/cs/cs2106/shortest_first_scheduling#Shortest_Remaining_Time(SRT))  | preemptive, no quanta         | yes             | minimize average turnaround time        | preemptive SJF  |
| [Priority Scheduling](/labyrinth/notes/cs/cs2106/priority_scheduling#Priority_Scheduling) | both                          | yes             | highest priority first                  |                 |
| [MLFQ](/labyrinth/notes/cs/cs2106/priority_scheduling#Multi-Level_Feedback_Queue(MLFQ))   | preemptive                    | yes             | balance between response and throughput |                 |
| [Lottery Scheduling](/labyrinth/notes/cs/cs2106/process_scheduling#Lottery_Scheduling)    | preemptive                    | no, probability | fair                                    |                 |

Scheduling metrics

| Metric          | Description                                                                                                  | Environment      |
| --------------- | ------------------------------------------------------------------------------------------------------------ | ---------------- |
| Turnaround time | - total time taken for the job<br>- includes time spent waiting for CPU<br>- `time completed - time arrived` | batch processing |
| Waiting time    | - time spent waiting instead of working<br>- `turnaround time - working time`                                | batch processing |
| Throughput      | - number of tasks finished per unit time                                                                     | batch processing |
| CPU utilization | - percentage of CPU working on the task                                                                      | batch processing |
| Response time   | - time between request and response by system<br>- `time start - time arrived`                               | interactive      |
| Predictability  | - variation in response time                                                                                 | interactive      |
### Concept
#### Concurrency
- multitasked processes
- [parallelism](/labyrinth/notes/cs/cs2030s/parallelism)
	- virtual - single core
	- physical - multi core

Timeslicing
- OS carries out context switching
- scheduler needs to run on the CPU
#### Process behaviour
- CPU activity
	- computation, calculations
	- compute-bound processes, eg. rendering
- IO activity
	- requesting and receiving from IO devices, printing/reading
	- IO-bound processes, eg. watching videos

#### Processing environment
Batch processing
- no user
- no interaction
- no need to be responsive

Interactive
- with user interaction
- should be responsive with consistent response time

Real time processing
- have deadline to meet
- perioding process
> not really covered in `cs2106`

#### Scheduling
1. scheduler is triggered, OS takes over
2. if context switch is needed
	- current context is saved into the blocked/ready queue
3. pick a process `P` to run based on scheduling algorithm
4. set up context for `P`
5. let `P` run

- what metric to optimize for?
- each process have different behaviour/requirement of CPU time

Fairness
- fair share of CPU time
	- can be per process or per user
- no starvation

Balance
- use all parts of the computer
- maximise concurrent use of other hardware

Non-preemptive 
- cooperative
- process stays scheduled until
	- it blocks
	- it gives up the CPU voluntarily

Preemptive
- OS can forcibly interrupt the process before its finished
- time quanta respecting:
	- processes have a fixed time quota
	- can block or give up like non-preemptive
	- if not finished by time quota, another process gets picked up
- fully disruptive:
	- even during the time quantum the OS can interrupt
#### Lottery Scheduling
- give out "lottery tickets" to processes, more important processes can get more tickets
- a ticket is chosen randomly, winner is granted the resource
- responsive - even new processes can participate