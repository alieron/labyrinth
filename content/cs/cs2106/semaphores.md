---
tags:
  - cs2106/lect6
  - cs/parallel
  - lang/c
complete: false
prev: /labyrinth/notes/cs/cs2106/synchronization
next: /labyrinth/notes/cs/cs2106/synchronization_problems

---
### Summary
POSIX sempahore
```c
sem_t mutex;
sem_init(&mutex,
         0, // 0 -> shared between threads, >0 -> shared between processes
         1); // initial value

sem_wait(&mutex);

sem_post(&mutex);
```
> compie with `-lrt`
### Concept
#### Semaphore
- protected integer + [queue](/labyrinth/notes/cs/cs2040s/queue) of waiting processes
- has a way to block processes
- has a way to unblock one or more blocked processes
- general/counting semaphore - `S >= 0`
- binary semaphore - `S = 0 or 1`
> queue guarantees **bounded wait**

| `wait(S)`                                                        | `signal(S)`                                                 |
| ---------------------------------------------------------------- | ----------------------------------------------------------- |
| - **blocks** if `S<=0`<br>- `S--`<br>- blocked process is stored | - non-blocking<br>- `S++`<br>- wakes up one blocked process |
| requesting                                                       | yielding                                                    |

Invariant
$$
\verb|S|_{initial} \geq 0 \implies \verb|S|_{current}=\verb|S|_{initial}+\#\verb|signal(S)|-\#\verb|wait(S)|
$$

Mutex
- using a binary semaphore to create a critical section
- `S = 1` initially
- **mut**ual **ex**clusion

$$
\begin{align*}
&\text{Processes in CS:}&&\verb|N|_{CS} = \#\verb|wait(S)| - \#\verb|signal(S)| \\
&&&\verb|S|_{initial} = 1 \\
\\
&&&\begin{aligned}
\verb|S|_{current}&=\verb|S|_{initial}+\#\verb|signal(S)|-\#\verb|wait(S)| && \text{(Invariant)} \\
&=1+\#\verb|signal(S)|-\#\verb|wait(S)|
\end{aligned} \\
\\
&&&\verb|S|_{current}+\verb|N|_{CS} = 1\\
&&&\verb|S|_{current}\geq 0 \\
\\
&&&\therefore\verb|N|_{CS}\leq 1
\end{align*}
$$
- no deadlock

$$
\begin{align*}
&\text{Deadlock:}&&\verb|S|_{current}=0\text{ and }\verb|N|_{CS} = 0 \\
&&&\text{but }\verb|S|_{current}+\verb|N|_{CS} = 1 \\
\\
&&&\therefore\text{ contradiction}
\end{align*}
$$
### Application
Deadlock with semaphores
```c
P = 1
Q = 1

// 1                               // 2
wait(P)                            wait(Q)
// 3, blocked by 2                 // 4, blocked by 1
wait(Q)                            wait(P)

// critical section                // critical section
// signal
```
> improper use can still lead to blocking