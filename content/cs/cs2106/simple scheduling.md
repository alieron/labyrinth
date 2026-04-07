---
tags:
  - cs2106/chapter3
  - cs/parallel
complete: false
prev: /labyrinth/notes/cs/cs2106/process_scheduling
next: /labyrinth/notes/cs/cs2106/shortest_first_scheduling

---
### Concept
#### First-Come First-Served(FCFS)
- simple FIFO [queue](/labyrinth/notes/cs/cs2040s/queue)

Shortcomings
- average waiting time can be reduced by reordering
- convoy effect - process are stuck in an order
#### Time quantum
- execution pocket given to a process
- can be constant or variable
- multiple of the interval
- 5-100ms
#### Round Robin(RR)
- simple FIFO [queue](/labyrinth/notes/cs/cs2040s/queue)
- preemptive version of FCFS
- once time quantum is over, task is placed at the end of the queue

Response time
- response time guarantee
- bounded wait time != faster response time

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
### Application
Walk through
```
A, arrives t=0
C3, IO1, C3, IO1

B, arrives t=0
C1, IO2, C1, IO2, C2, IO1

C, arrives t=3
C2

Ready by
      0  1 2 3  4 5 6 7 8
C  -> AB - - BC A - B -
IO -> -  B - A  B - A - B

FCFS
C  -> A A A B C C A A A B     B B
IO ->       A B B       A B B     B

  | turn arnd | waiting time
A | 10        | 10-8=2
B | 15        | 15-9=6
C | 6-3=3     | 3-2=1

RR quanta=2
C  -> A A B A C C B A A B B A
IO ->       B B A   B B     B A

  | response time
A | 0
B | 2-0=2
C | 4-3=1
```

RR scheduler pseudocode
```
// assumes tasks are CPU intensive and infinite

RunningTask.TQLeft--;
if (RunningTask.TQLeft > 0) done! // don't interrupt since quanta is not up

// check for another task to run
if (ReadyQ.isEmpty())  // no tasks in ready queue
	// renew time quantum
	RunningTask.TQLeft = TimeQuantum;       
	done!
 
// need context switching
TempTask = ReadyQ.dequeue();
// current task goes back to the end of queue
ReadyQ.enqueue(RunningTask);  

// context switch to new task
TempTask.TQLeft = TimeQuantum;
SwitchContext(RunningTask, TempTask);
```