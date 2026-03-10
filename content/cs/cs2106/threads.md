---
tags:
  - cs2106/lect5
  - cs/parallel
  - lang/c
complete: false
prev: /labyrinth/notes/cs/cs2106/signals
next: /labyrinth/notes/cs/cs2106/synchronization

---
### Summary
POSIX threads
```c
#include <pthread.h>

// declaration
pthread_t thread_id;

// creating a thread
int *thread_function(void* arg) {
	// do work
	int *retval = ...;
	
	return retval; // return value
	// or
	pthread_exit(retval);
}
pthread_create(&thread_id, NULL, thread_function, arg);

// wait for thread to finish
int *retval;
pthread_join(thread_id, &retval);
```
> compile with `-lpthread`
### Concept
Motivation
- [forking](/labyrinth/notes/cs/cs2106/syscalls#^52e85c) is expensive, need to duplicate memory space and process context
- requires context switching
- most forks share some memory with parent
#### Threads
- **lightweight process**
- multiple threads of control in a single process
- can share:
	- text, data, heap - [memory context](/labyrinth/notes/cs/cs2106/processes#^73664d)
	- pid, shared resources - [OS context](/labyrinth/notes/cs/cs2106/processes#^73664d)
- cannot share:
	- [stack](/labyrinth/notes/cs/cs2106/stack_memory) - each thread may run its own functions
	- registers - each thread may make different computations
	- thread id

![[multithreading.png|600]]

| Benefit          | Desc                                                                             |
| ---------------- | -------------------------------------------------------------------------------- |
| Economy          | multiple threads require less resources to manage compared to multiple processes |
| Resource sharing | share most memory + resources, no need [IPC](/labyrinth/notes/cs/cs2106/IPC) to pass information around        |
| Responsiveness   | more threads to be more responsive                                               |
| Scalability      | can benefit from multiple CPUs                                                   |
[Syscall](/labyrinth/notes/cs/cs2106/syscalls) concurrency
- some syscalls are not thread safe
#### User thread
- only in user mode
- abstraction provided by program/library
- advantages:
	- cross-platform
	- library calls
	- more configurable
- disadvantages:
	- OS is unaware of threads, one thread blocked = process blocked
#### Kernel thread
- thread table in kernal mode
- advantages:
	- kernal can schedule at the thread level
- disadvantages:
	- thread ops are now syscalls, OS needs to manage
	- less flexible, many features -> expensive + overkill
#### Hybrid thread model
- user threads can bind to kernel threads
### Application
Thread creation and termination
```c
#include <stdio.h>
#include <pthread.h>

void* sayHello(void* arg) {
	printf("Just to say hello!\n");
	pthread_exit(NULL);
}

int main() {
	pthread_t tid;
	pthread_create(&tid, NULL, sayHello, NULL);
	printf("Thread created with tid %i\n", tid);
	return 0;
} 
```