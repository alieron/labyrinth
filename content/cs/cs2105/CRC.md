---
tags:
  - cs2105/lect8
  - cs/error_detection
complete: true
---
### Concept
#### Cyclic redundancy check(CRC)
- uses modulo 2 arithmetic, [xor](/labyrinth/notes/cs/xor)
- find a suffix that makes the whole thing "divisible" by the generator
- detects all **odd number** of bit errors
- detects all burst errors up to $r$ bits
- detects burst errors $>r$ bits with probability $1-0.5^r$

$$
D =  d\text{ bits} \qquad R = r\text{ bit CRC} \qquad G = (r+1)\text{ bit generator }
$$
### Application
Calculating the CRC bits
$$
\begin{gather*}
D = {\color{cyan} 1 0 1 1 1 0 } \\
G = {\color{violet} 1 0 0 1 } \\
\\
\begin{array}{rl}
& \ \ \ \ \ \ \ \ \ 1 0 1 0 1 1\\
{\color{violet} 1 0 0 1 } & \overline{\smash{\big)}\; {\color{cyan} 1 0 1 1 1 0 }0 0 0}\\
& \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ 1 0 1 0\\
& \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ 1 1 0 0\\
& \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ 1 0 1 0\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ {\color{yellow} 0 1 1 }\\
\notag
\end{array} \\
\\
R = {\color{yellow} 0 1 1 } \\
\\
{\color{cyan} 1 0 1 1 1 0 }{\color{yellow} 0 1 1 }
\end{gather*}
$$

$$
\begin{gather*}
D = {\color{cyan} 1 0 1 1 0 0 } \\
G = {\color{violet} 1 0 0 1 } \\
\\
\begin{array}{rl}
& \ \ \ \ \ \ \ \ \ 1 0 1 0 0 1\\
{\color{violet} 1 0 0 1 } & \overline{\smash{\big)}\; {\color{cyan} 1 0 1 1 0 0 }0 0 0}\\
& \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ 1 0 0 0\\
& \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ 1 0 0 0\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ {\color{yellow} 0 0 1 }\\
\notag
\end{array} \\
\\
R = {\color{yellow} 0 0 1 } \\
\\
{\color{cyan} 1 0 1 1 0 0 }{\color{yellow} 0 0 1 }
\end{gather*}
$$
> ensure the same number of digits

$$
\begin{gather*}
D = {\color{cyan} 1 1 0 0 0 1 1 1 0 1 0 } \\
G = {\color{violet} 1 0 0 1 } \\
\\
\begin{array}{rl}
& \ \ \ \ \ \ \ \ \ 1 1 0 1 1 1 0 0 1 1 0\\
{\color{violet} 1 0 0 1 } & \overline{\smash{\big)}\; {\color{cyan} 1 1 0 0 0 1 1 1 0 1 0 }0 0 0}\\
& \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ 1 0 1 0\\
& \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ 1 1 1 1\\
& \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ 1 1 0 1\\
& \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ 1 0 0 0\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 1 1 0 0\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 1 1 0 0\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 1 0 1 0\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ {\color{yellow} 1 1 0 }\\
\notag
\end{array} \\
\\
R = {\color{yellow} 1 1 0 } \\
\\
{\color{cyan} 1 1 0 0 0 1 1 1 0 1 0 }{\color{yellow} 1 1 0 }
\end{gather*}
$$

Verifying
$$
\begin{gather*}
D||R = {\color{cyan} 1 0 1 1 1 0 }{\color{yellow} 0 1 1 } \\
\\
\begin{array}{rl}
& \ \ \ \ \ \ \ \ \ 101011\\
{\color{violet} 1 0 0 1 } & \overline{\smash{\big)}\; {\color{cyan} 1 0 1 1 1 0 }{\color{yellow} 0 1 1 }}\\
& \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ 1 0 1 0\\
& \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ 1 1 {\color{yellow} 0 1 }\\
& \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ 1 0 0 {\color{yellow} 1 }\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \underline{1 0 0 1}\\
& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ {\color{green} 0 0 0 }\\
\notag
\end{array}
\end{gather*}
$$