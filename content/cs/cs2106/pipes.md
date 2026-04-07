---
tags:
  - cs2106/chapter4
  - cs/parallel
  - lang/c
complete: false
next: /labyrinth/notes/cs/cs2106/signals
prev: /labyrinth/notes/cs/cs2106/message_passing

---
### Concept
- basic synchronous [message passing](/labyrinth/notes/cs/cs2106/message_passing) mechanism
- acts as an anonymous file
- producer-consumer relationship
- circular buffer with implicit syncrhonization
> pipes provide **two** [file descriptors](/labyrinth/notes/cs/cs2106/IPC#File_descriptors), that **refer to the same buffer**, but have different read/write permissions
<br>
- half duplex
```c
int p[2]; // 2 file descriptors
char str[] = "Hello this is the parent.";

if(pipe(p) < 0) 
		perror("Error: ");

// send a message from parent to child
if(fork() != 0) {
		close(p[0]); // close the read end
		write(p[1], str, strlen(str));
		close(p[1]);
		wait(NULL); // wait for child
} else {
		char buffer[128];

		close(p[1]); // close the write end
		read(p[0], buffer, 127);
		printf("Child got the message \"%s\"\n", buffer);
		close(p[0]);
}
```