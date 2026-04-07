---
tags:
  - cs2106/chapter6
  - cs/parallel
  - lang/c
complete: false
prev: /labyrinth/notes/cs/cs2106/threads
next: /labyrinth/notes/cs/cs2106/semaphores

---
### Concept
#### Race conditions
- when 2 or more processes execute concurrently and **share a modifiable resource**
- interleaving execution can lead to **non-deterministic** outcomes
#### Critical section
- segment of code identified to have a race condition
- ensure that at most 1 process can execute in the critical section

```c
// parallel safe code

EnterCS()

// potential race condition

ExitCS()

// parallel safe code
```

Mutual exclusion
- if P is executing in a critical section, all other processes are prevented from entering the critical section

Progress
- if no process is in a critical section, one of the waiting processes should be granted access

Bounded wait
- when P requests to enter a critical section, there is a maximum number of other processes that can enter before it does
- no risk of starvation

Independence
- processes not executing in critical sections should never block other processes
> sometimes grouped under progress

Symptoms
- deadlock -> all processes block
- livelock -> via deadlock avoidance mechanisms, toggling between states instead of progressing
- starvation -> some processes may be blocked forever
#### Atomic test-and-set
- load current content in mem and store 1 to the same location
- combine load and store into a single machine operation
- variants:
	- compare and exchange
	- atomic swap
	- load link/store conditional

```c
#define LOCKED 1

// return old lock value, and lock
int test_and_set(int *lock_ptr) {
    int old_value;

    // -- Start of atomic segment --
    // pseudocode only
    // compilation of this code will not guarantee atomicity
    old_value = *lock_ptr;
    *lock_ptr = LOCKED;
    // -- End of atomic segment --

    return old_value;
}

void EnterCS(int *lock_ptr) {
	while (test_and_set(lock_ptr) == LOCKED); // busy wait if previously locked
}

void ExitCS(int *lock_ptr) {
	*lock_ptr = 0; // unlock it so that any waiting processes can enter the critical section
}
```
> main drawback is the busy waiting
#### Bad critical section implementations
Locking
- **violates mutual exclusion** - multiple processes can enter the critical section simultaneously

```c
int Lock = 0; // shared

// all processes
while (Lock != 0); // race condition in != check, violates mutual exclusion
Lock = 1;

// critical section

Lock = 0; 
```

Disabling interrupts
- prevent the OS from making context switch
- won't work on multi-core systems

```c
int Lock = 0; // shared

// all processes

// disable Interrupts
while (Lock != 0);
Lock = 1;

// critical section

Lock = 0;
// enable Interrupts 
```
> no way to kill the process if it were to enter an infinite loop during the critical section

Turn
- **violates independence** - depends on what `Turn` is intialized to

```c
int Turn = 0; // shared

// process 0                       // process 1
while (Turn != 0);                 while (Turn != 1); // p1 can starve if p0 doesn't enter the critical section

// critical section                // critical section

Turn = 1;                          Turn = 0;
```

Want
- **deadlock** - if both set to 1 simultaneously

```c
int Want[2] = {0};

// process 0                       // process 1
Want[0] = 1;                       Want[1] = 1; // if both processes set to 1, then both are blocked

while (Want[1]);                   while (Want[0]);

// critical section                // critical section

Want[0] = 0;                       Want[1] = 0; 
```
#### Peterson's algorithm
- combines Turn and Want
- assumes writing to `Turn` is atomic

```c
int Turn = 0;
int Want[2] = {0};

// process 0                       // process 1
Want[0] = 1;                       Want[1] = 1; // requesting
Turn = 1;                          Turn = 0;    // yielding (conceptually)

while (Want[1] && Turn == 1);      while (Want[0] && Turn == 0); // if either condition is false break out

// critical section                // critical section

Want[0] = 0;                       Want[1] = 0;
```
> waiting is based on, "if u want it, and its ur turn, then u can have it"