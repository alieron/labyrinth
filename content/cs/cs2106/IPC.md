---
tags:
  - cs2106/lect4
  - cs/parallel
  - lang/bash
complete: false
prev: /labyrinth/notes/cs/cs2106/interactive_environment
next: /labyrinth/notes/cs/cs2106/shared_memory

---
### Concept
#### Process IO
- 1 input: `fd = 0` -> `stdin`
- 2 outputs:
	- `fd = 1` -> `stdout`
	- `fd = 2` -> `stderr`

- [bash](/labyrinth/notes/cs/cs2106/bash_scripting) redirection
```bash
./program < input.txt > output.txt 2> error.txt
```



