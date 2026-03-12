---
tags:
  - cs2106/lect3
  - cs/parallel
complete: false
next: /labyrinth/notes/cs/cs2106/IPC
prev: /labyrinth/notes/cs/cs2106/shortest_first_scheduling

---
### Concept
#### Timer interrupt
- [interrupt](/labyrinth/notes/cs/cs2106/exceptions_&_interrupts#Interrupts) that goes off periodically based on hardware clock
- OS ensures timer interrupt cannot be intercepted by other programs
- invokes scheduler

Interval
- time between interrupts
- 1-10ms
#### Priority Scheduling
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

#### Multi-Level Feedback Queue(MLFQ)
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
### Application
MLFQ, quanta respecting vs fully disruptive
```
A
C3 IO1 C3

B
C1 IO1 C1 IO1 C1

MLFQ time quanta respecting
quanta=2 lvls=3 timer interrupt=1
CPU -> A A B A B A A B A
         1 2 3 4   5 6

1 - A hits time quanta, decrease priority => 2
2 - B blocks, maintain priority => 1
3 - A blocks, maintain priority => 2
4 - B blocks, maintain priority => 1
5 - A hits time quanta, decrease priority => 3
6 - B blocks, maintain priority => 1

MLFQ fully disrupting
quanta=2 lvls=3 timer interrupt=1
CPU -> A A B A B A B A A
         1 2 3 4   5

1 - A hits time quanta, decrease priority => 2
2 - B blocks, maintain priority => 1
3 - A blocks, maintain priority => 2
4 - B blocks, maintain priority => 1
5 - A is interrupted in favour of B - B blocks, maintain priority => 1
```
> quanta is the max, interrupt is the min