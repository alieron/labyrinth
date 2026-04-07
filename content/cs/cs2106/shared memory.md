---
tags:
  - cs2106/chapter4
  - cs/parallel
  - lang/c
complete: false
prev: /labyrinth/notes/cs/cs2106/IPC
next: /labyrinth/notes/cs/cs2106/message_passing

---
### Summary
POSIX syscalls for shared memory

| Syscall                                     | Include       | Function                                                                                                            |
| ------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| `shmid = shmget(IPC_PRIVATE, size, shmflg)` | `<sys/shm.h>` | creates a shared memory region<br>returns the id of the shared memory or `-1` if error                              |
| `shm = shmat(shmid, NULL, shmflg)`          | `<sys/shm.h>` | attach the shared memory to the current process<br>returns a pointer to the shared memory location or `-1` if error |
| `shmdt(shm)`                                | `<sys/shm.h>` | detach the shared memory from the current process<br>returns `0` on success, `-1` on error                          |
| `shmctl(shmid, IPC_RMID, 0)`                | `<sys/shm.h>` | delete the shared memory region<br>returns `0` on success, `-1` on error                                            |

Sharing memory
- master
```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/ipc.h>
#include <sys/shm.h>

int main() {
	int shmid, i, *shm;
	
	shmid = shmget(IPC_PRIVATE, 40, IPC_CREAT | 0600);
	if (shmid == -1) {
		printf("Cannot create shared memory!\n");
		exit(1);
	} else
		printf("Shared Memory Id = %d\n", shmid);
	
	shm = (int*) shmat(shmid, NULL, 0);
	if (shm == (int*) -1){
		printf("Cannot attach shared memory!\n");
		exit(1);
	}
	
	shm[0] = 0;
	
	while(shm[0] == 0) {
		sleep(3);
	}
	
	for (i = 0; i < 3; i++) {
		printf("Read %d from shared memory.\n", shm[i+1]);
	}
	
	shmdt((char*) shm);
	shmctl(shmid, IPC_RMID, 0);
	return 0;
} 
```

- slave
```c
//similar header files
int main() {
	int shmid, i, input, *shm;
	printf("Shared memory id for attachment: ");
	scanf("%d", &shmid);
	shm = (int*)shmat(shmid, NULL, 0);
	if (shm == (int*)-1) {
		printf("Error: Cannot attach!\n");
	exit(1);
	}
	
	for (i = 0; i < 3; i++) {
		scanf("%d", &input);
		shm[i+1] = input;
	} 
	shm[0] = 1;
	
	shmdt((char*)shm);
	return 0;
} 
```
### Concept
- memory region created by a process storeed in the OS's memory space
- other processes can attach the memory space
- pros:
	- efficient - only create and attach invole the OS
	- easy to use - shared memory behaves like normal memory
- cons:
	- [synchronization](/labyrinth/notes/cs/cs2106/synchronization) - need to ensure that writing is syncrhonised
### Application
Setup shared memory before fork
```c
int i, shmid, n = 100, childPid, nChild = 1;
int *shm;

if (argc > 1)
		n = atoi(argv[1]);

if (argc > 2)
		nChild = atoi(argv[2]);

// create Shared Memory Region
// read, write, excute
// 1      1      0        = 6
// 1      0      0        = 4
shmid = shmget(IPC_PRIVATE, 1*sizeof(int), IPC_CREAT | 0600);
// 0 prefix denotes a octal number
if (shmid == -1) {
		printf("Cannot create shared memory!\n");
		exit(1);
}
else {
		printf("Shared Memory Id = %d\n", shmid);
}

// Attach the shared memory region to this process
shm = (int*)shmat(shmid, NULL, 0);
if (shm == (int*) -1) {
		printf("Cannot attach shared memory!\n");
		exit(1);
}
shm[0] = 0;
   // initialize shared memory to 0

for (i = 0;
i < nChild;
i++) {
		childPid = fork();
		if (childPid == 0)
				break;
}

// both parent and child increase the value in the shared memory n times
for (i = 0;
i < n;
i++)
		shm[0]++;

if (childPid != 0) {
		for (i = 0;
i < nChild;
i++) // wait for all child processes
				wait(NULL);
		printf("The value in the shared memory is: %d\n", shm[0]);
		// detach and destroy
		shmdt((char*)shm);
		shmctl(shmid, IPC_RMID, 0);
}
```