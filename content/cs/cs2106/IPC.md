---
tags:
  - cs2106/lect4
  - cs/parallel
  - lang/bash
complete: false
prev: /labyrinth/notes/cs/cs2106/interactive_environment
next: /labyrinth/notes/cs/cs2106/shared_memory

---
### Summary
File descriptor syscalls

| Syscall                  | Include      | Function                                                                                       |
| ------------------------ | ------------ | ---------------------------------------------------------------------------------------------- |
| `read(fd, buff, count)`  | `<unistd.h>` | reads bytes from a file descriptor                                                             |
| `write(fd, buff, count)` | `<unistd.h>` | writes bytes in the buffer to a file descriptor                                                |
| `newfd = dup(fd)`        | `<unistd.h>` | duplicates a file descriptor<br>return a file descriptor that is the aliad of the one supplied |
| `dup2(fd, newfd)`        | `<unistd.h>` | redirects one file descriptor to another                                                       |
| `close(fd)`              | `<unistd.h>` | closes a pipe endpoint                                                                         |
| `pipe(p[2])`             | `<unistd.h>` | creates a pipe<br>returns two file descriptors                                                 |
### Concept
#### File descriptors
- integer that the OS uses to identify a file or IO resource
	- files
	- [pipes](/labyrinth/notes/cs/cs2106/pipes)
  - [sockets](/labyrinth/notes/cs/cs2105/sockets)
  - terminals
  - devices/hardware
- each process maintains a fd table
> yep, everything is a file

Standard channels ^b45615
- predefined channels for process IO
- can be overwritten
- `fd = 0` -> `stdin`
- `fd = 1` -> `stdout`
- `fd = 2` -> `stderr`







[bash](/labyrinth/notes/cs/cs2106/bash_scripting)




