---
tags:
  - cs2106/chapter2
  - cs/low_level
complete: false
prev: /labyrinth/notes/cs/cs2106/exceptions_&_interrupts
next: /labyrinth/notes/cs/cs2106/batch_processing

---
### Summary
Scheduling algorithms

| Algorithm                                                            | Preemptive/non-preemptive | Starvation | Optimizes for                           | Remarks         |
| -------------------------------------------------------------------- | ------------------------- | ---------- | --------------------------------------- | --------------- |
| [FCFS](/labyrinth/notes/cs/cs2106/batch_processing#First-come_first-served(FCFS))             | non-preemptive            | no         | -                                       |                 |
| [RR](/labyrinth/notes/cs/cs2106/interactive_environment#Round_robin(RR))                      | preemptive                | no         | reduce wait time                        | preemptive FCFS |
| [SJF](/labyrinth/notes/cs/cs2106/batch_processing#Shortest_job_first(SJF))                    | non-preemptive            | yes        | minimize average turnaround time        |                 |
| [SRT](/labyrinth/notes/cs/cs2106/batch_processing#Shortest_remaining_time(SRT))               | preemptive                | yes        | minimize average turnaround time        | preemptive SJF  |
| [Priority scheduling](/labyrinth/notes/cs/cs2106/interactive_environment#Priority_scheduling) | both                      | yes        | highest priority first                  |                 |
| [MLFQ](/labyrinth/notes/cs/cs2106/interactive_environment#Multi-level_feedback_queue(MLFQ))   | preemptive                | yes        | balance between response and throughput |                 |
| [Lottery scheduling](/labyrinth/notes/cs/cs2106/interactive_environment#Lottery_scheduling)   | preemptive                | no         | fair                                    |                 |
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
[Batch processing](/labyrinth/notes/cs/cs2106/batch_processing)
- no user
- no interaction
- no need to be responsive

[Interactive](/labyrinth/notes/cs/cs2106/interactive_environment)
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
- processes have a fixed time quota
- can block or give up like non-preemptive
- if not finished by time quota, another process gets picked up

#### Scheduling algorithms
