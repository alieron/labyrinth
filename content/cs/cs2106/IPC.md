---
tags:
  - cs2106/lect4
  - cs/low_level
  - lang/bash
complete: false
prev: /labyrinth/notes/cs/cs2106/interactive_environment
next: /labyrinth/notes/cs/cs2106/unix_pipes

---
### Concept
#### Process IO
- 1 input stream -> `stdin`
- 2 output streams -> `stdout`, `stderr`

- [bash](/labyrinth/notes/cs/cs2106/bash_primitives) redirection
```bash
./program < input.txt > output.txt 2> error.txt
```