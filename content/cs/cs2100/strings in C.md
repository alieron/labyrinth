---
tags:
  - cs2100/chapter4
  - cs/low_level
  - lang/c
complete: true
prev: /labyrinth/notes/cs/cs2100/arrays_in_C
next: /labyrinth/notes/cs/cs2100/structs

---
### Summary
Strings
- array of chars that ends with a '\0'(null) char

```c
// valid strings
char *a = "hello"; // " is used to wrap strings, ' for chars
char b[] = { 'h', 'e', 'l', 'l', 'o', '\0' };
char c[6] = { 'h', 'e', 'l', 'l', 'o' }; // last char is initialized as 0 -> '\0'

// invalid strings
char d[5] = { 'h', 'e', 'l', 'l', 'o' };
```

Assignment
- same as arrays
- cannot assign after declaration

String functions
- `string.h`

```c
strlen(s); // counts upto but not including '\0'

strcmp(s1, s2); // 0 if equal, -ve if s1 < s2, +ve if s1 > s2
strncmp(s1, s2, n); // compare only the first n characters

strcpy(s1, s2); // copy the string at s2 into s1
strncpy(s1, s2, n); // copy only the first n characters
```
### Concept
I/O functions
- reading from `stdin`

```c
char *str;

scanf("%s", str); // reads until whitespace
fgets(str, size, stdin); // reads size-1 chars or until newline
```

- printing to `stdout`

```c
printf("%s\n", str);
puts(str); // terminates implicitly with a newline 
```
> will trace through the string until the `'\0'`
### Application
String terminator
```c
char d[5] = { 'h', 'e', 'l', 'l', 'o' };
puts(d); // hello??????... we don't know whats stored in memory after the array
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=1em and 3.5em}}
\newcommand\ptr[2]%
  {
    \draw[arrows={-Latex}] (#1.center)--(#2);
  }
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }
\newcommand\pair[4][]%
  {
    \node[draw,cell,#1] (#2) {#3};
    \node[draw,cell,xshift=\boxsize] (#2tail) at (#2) {#4};
  }
% 
\begin{document}
\begin{tikzpicture}
% draw diagram here
  \node (start) {d};
  \node[draw,cell,right=of start] (0) {'h'};
  \node[draw,cell,xshift=\boxsize] (1) at (0) {'e'};
  \node[draw,cell,xshift=\boxsize] (2) at (1) {'l'};
  \node[draw,cell,xshift=\boxsize] (3) at (2) {'l'};
  \node[draw,cell,xshift=\boxsize] (4) at (3) {'o'};
  \node[draw,cell,xshift=\boxsize] (5) at (4) {?};
  \node[draw,cell,xshift=\boxsize] (6) at (5) {?};
  \node[draw,cell,xshift=\boxsize] (7) at (6) {?};
  \node[yshift=-2*\boxsize] (a) at (5) {may not be terminator};
  \draw[arrows={-Latex}] (start.east)--(0);
  \draw[arrows={-Latex}] (a.north)--(5);  
\end{tikzpicture}
\end{document}
```
> this can leak information about what's stored in memory

Overflow
```c
// strcpy and most fns that don't take into account string length are unsafe
char name[10];
strcpy(name, "Bob Ross"); // 1

strcpy(name, "Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas"); // 2
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
% definitions for box and pointer diagrams
\def\boxsize{6mm}
\tikzset{cell/.style={inner sep=0pt,minimum size=\boxsize, node distance=1em and 3.5em}}
\newcommand\ptr[2]%
  {
    \draw[arrows={-Latex}] (#1.center)--(#2);
  }
\newcommand\pnull[1]%
  {
      \draw (#1.south west)--(#1.north east);
  }
\newcommand\pair[4][]%
  {
    \node[draw,cell,#1] (#2) {#3};
    \node[draw,cell,xshift=\boxsize] (#2tail) at (#2) {#4};
  }
% 
\begin{document}
\begin{tikzpicture}
% first string: "Bob Ross"
  \node (start) {name};
  \node[draw,cell,right=of start] (0) {'B'};
  \node[draw,cell,xshift=\boxsize] (1) at (0) {'o'};
  \node[draw,cell,xshift=\boxsize] (2) at (1) {'b'};
  \node[draw,cell,xshift=\boxsize] (3) at (2) {' '};
  \node[draw,cell,xshift=\boxsize] (4) at (3) {'R'};
  \node[draw,cell,xshift=\boxsize] (5) at (4) {'o'};
  \node[draw,cell,xshift=\boxsize] (6) at (5) {'s'};
  \node[draw,cell,xshift=\boxsize] (7) at (6) {'s'};
  \node[draw,cell,xshift=\boxsize] (8) at (7) {'\textbackslash0'};
  \node[draw,cell,xshift=\boxsize] (9) at (8) {?};
  \draw[arrows={-Latex}] (start.east)--(0);

% second string: "Ovuvuevuevue Enyetuenwuevue Ugbemugbem Osas"
  \node[yshift=-2*\boxsize] (start2) {name};
  \node[draw,cell,right=of start2] (s0) {'O'};
  \node[draw,cell,xshift=\boxsize] (s1) at (s0) {'v'};
  \node[draw,cell,xshift=\boxsize] (s2) at (s1) {'u'};
  \node[draw,cell,xshift=\boxsize] (s3) at (s2) {'v'};
  \node[draw,cell,xshift=\boxsize] (s4) at (s3) {'u'};
  \node[draw,cell,xshift=\boxsize] (s5) at (s4) {'e'};
  \node[draw,cell,xshift=\boxsize] (s6) at (s5) {'v'};
  \node[draw,cell,xshift=\boxsize] (s7) at (s6) {'u'};
  \node[draw,cell,xshift=\boxsize] (s8) at (s7) {'e'};
  \node[draw,cell,xshift=\boxsize] (s9) at (s8) {'v'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s10) at (s9) {'u'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s11) at (s10) {'e'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s12) at (s11) {' '};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s13) at (s12) {'E'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s14) at (s13) {'n'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s15) at (s14) {'y'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s16) at (s15) {'e'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s17) at (s16) {'t'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s18) at (s17) {'u'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s19) at (s18) {'e'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s20) at (s19) {'n'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s21) at (s20) {'w'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s22) at (s21) {'u'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s23) at (s22) {'e'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s24) at (s23) {'v'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s25) at (s24) {'u'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s26) at (s25) {'e'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s27) at (s26) {' '};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s28) at (s27) {'U'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s29) at (s28) {'g'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s30) at (s29) {'b'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s31) at (s30) {'e'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s32) at (s31) {'m'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s33) at (s32) {'u'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s34) at (s33) {'g'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s35) at (s34) {'b'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s36) at (s35) {'e'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s37) at (s36) {'m'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s38) at (s37) {' '};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s39) at (s38) {'O'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s40) at (s39) {'s'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s41) at (s40) {'a'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s42) at (s41) {'s'};
  \node[draw,cell,xshift=\boxsize,fill=red!60] (s43) at (s42) {'\textbackslash0'};
  \draw[arrows={-Latex}] (start2.east)--(s0);

\end{tikzpicture}
\end{document}
```
> a stack canary will protect overflowing in most cases, compile with `-fno-stack-protector` to compile without a stack canary

Removing the newline char
```c
fgets(str, size, stdin);
	len = strlen(str);
	if (str[len – 1] == '\n')
		str[len – 1] = '\0';
```

Jank
```c
long x = 470020878965; // 0x00 00 00 6D 6F 6D 72 75
puts((void *)&x); // urmom
```
