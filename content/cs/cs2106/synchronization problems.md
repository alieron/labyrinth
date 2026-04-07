---
tags:
  - cs2106/chapter6
  - cs/parallel
  - lang/c
complete: false
prev: /labyrinth/notes/cs/cs2106/semaphores
next: /labyrinth/notes/cs/cs2106/memory_abstraction

---
### Concept
#### Producer Consumer
- shared buffer
- producer - produces items to insert into the buffer
- consumer - removes items from buffer
<br>
- busy wait (bad)
```c
// shared
buffer[K];
count = in = out = 0;
mutex = S(1); // semaphore with initial value 1
canProduce = TRUE;
canConsume = FALSE;

// producer
while (TRUE) {
	Produce Item;
	while(!canProduce); // busy wait if cannot produce
	
	wait(mutex); // enter critical section
	if (count < K) {
		buffer[in] = item;
		in = (in+1) % K;
		count++;
		canConsume = TRUE;
	} else {
		canProduce = FALSE;
	}
	signal(mutex); // exit critical section
}

//consumer
while (TRUE) {
	while (!canConsume);
	
	wait(mutex);
	if (count > 0) {
		item = buffer[out];
		out = (out+1) % K;
		count--;
		canProduce = TRUE;
	} else {
		canConsume = FALSE;
	}
	signal(mutex);
	Consume Item; // doesn't need to be in the critical section
} 
```

- semaphore blocking
```c
// shared
buffer[K];
count = in = out = 0;
mutex = S(1);
notFull = S(K);
notEmpty = S(0);

// producer
while (TRUE) {
	Produce Item;
	
	wait(notFull); // maximum K producers, else block
	wait(mutex); // create critical section
	
	buffer[in] = item;
	in = (in+1) % K;
	count++;
	
	signal(mutex);
	signal(notEmpty); // this producer wakes 1 consumer
}

// consumer
while (TRUE) {
	wait(notEmpty); // maximum K consumers, else block
	wait(mutex); // create critical section
	
	item = buffer[out];
	out = (out+1) % K;
	count--;
	
	signal(mutex);
	signal(notFull); // this consumer wakes 1 producer
	
	Consume Item;
} 
```
> counting [semaphores](/labyrinth/notes/cs/cs2106/semaphores) initialised high -> countdown, 0 -> count up
#### Reader Writer
- shared data structure
- writer - exclusively write
- reader - can read in parallel with other readers
<br>
- standard solution
```c
// shared
mutex = S(1);
roomEmpty = S(1);
nReader = 0;

// writer
while (TRUE) {
	wait(roomEmpty);
	// modify data 
	signal(roomEmpty);
}

// reader
while (TRUE) {
	wait(mutex);
	nReader++;
	if (nReader == 1) 
		wait(roomEmpty); // first reader blocks writers 
		// if writer is currently writing, the first reader blocks other readers due to mutex
	signal(mutex);
	
	// reads data
	
	wait(mutex);
	nReader--;
	if (nReader == 0)
		signal(roomEmpty); // last reader unblocks writers
	signal(mutex);
} 
```
> watch for blocking within critical sections
#### Dining Philosophers
- resourced shared between multiple processes
- philosopers - need to acquire 2 chopsticks to eat
- chopsticks - shared between 2 philosophers but can only be used by one at a time
<br>
- block everything (sub-optimal)
	- there are cases where more than 1 can eat at the same time
```c
N; // number of philosophers
#define LEFT i
#define RIGHT ((i+1) % N) 

void philosopher(int i) {
	while (TRUE){
		Think();
		
		wait(mutex); // block everyone else
		takeChpStk(LEFT);
		takeChpStk(RIGHT);
		Eat();
		putChpStk(LEFT);
		putChpStk(RIGHT);
		signal(mutex);
	}
} 
```

- Tanenbaum's solution
```c
N;
#define LEFT ((i+N-1) % N)
#define RIGHT ((i+1) % N)

#define THINKING 0
#define HUNGRY 1
#define EATING 2

state[N];
mutex = S(1);
s[N] = S(0)[N]; // each philosopher has its own semaphore

void philosopher(int i) {
	while (TRUE) {
		Think();
		takeChpStcks(i);
		Eat();
		putChpStcks(i);
	}
}

void safeToEat(int i) {
	if((state[i] == HUNGRY) && (state[LEFT] != EATING) &&  (state[RIGHT] != EATING)) { 
		state[i] = EATING; 
		signal(s[i]); // if safe to eat, unblock
	}
} 

void takeChpStcks(int i) {
	wait(mutex);
	state[i] = HUNGRY;
	safeToEat(i);
	signal(mutex);
	// don't block inside the critical section
	wait(s[i]); // if not safe to eat, philosopher blocks here
	// neighbours resume here if triggered by putChpStcks
}

void putChpStcks(int i) { 
	wait(mutex);
	state[i] = THINKING;
	// let neighbours eat
	safeToEat(LEFT); // this way the neighbours can eat without explict action in their process
	safeToEat(RIGHT);
	signal(mutex);
} 
```

- limited eater
	- just have 1 more chopstick/1 less philosopher
```c
seats = S(N);
chpStk = S(1)[N+1]; // each chopstick has a semaphore

void philosopher(int i){
	while (TRUE) {
		Think();
		wait(seats); // at most N can run
		wait(chpStk[LEFT]);
		wait(chpStk[RIGHT]);
		Eat();
		signal(chpStk[LEFT]);
		signal(chpStk[RIGHT]);
		signal(seats);
	}
} 
```