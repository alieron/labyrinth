---
tags:
  - cs2106/chapter2
  - cs/low_level
  - lang/c
  - lang/mips
complete: true
prev: /labyrinth/notes/cs/cs2106/processes
next: /labyrinth/notes/cs/cs2106/syscalls

---
### Concept
#### Call [stack](/labyrinth/notes/cs/cs2040s/stack)
- occupies stack memory
- deallocated implicitly when the function returns

Frame pointer
- stack pointer might change as local variable are declared
- frame pointer points to a fixed lication in a stack frame

Saved registers
- general purpose registers(GPRs) are limited
- **register spilling**:
	- for the registers used in that function, 
	- use memory to store the GPR value temporarily
	- GPR is freed up for other purposes and restored later

Function call
- creates a new stack frame
- position of `fp` depends on the system

```tikz
\usepackage{tikz}
\usetikzlibrary{calc,positioning,arrows.meta,decorations.pathreplacing}
\def\frameh{8mm}
\begin{document}

\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

% Stack frames (grows downward)
\foreach \i in {0,...,7} {
    \node[frame] (f\i) at (0,\frameh*\i) {};
}

\node at(f0) {...};
\node at(f1) {...};
\node at(f2) {return PC};
\node at(f3) {saved fp};
\draw[->] (f3.west) to[bend right=75] (f0.west);
\node at(f4) {saved sp};
\node[right=of f4] (fp) {fp};
\draw[->] (fp) -- (f4);
\draw[->] (f4.west) to[bend right=75] (f1.west);
\node at(f5) {saved registers};
\node at(f6) {parameters};
\node at(f7) {local variables};
\node[right=of f7] (sp) {sp};
\draw[->] (sp) -- (f7);

\draw[decorate, decoration={brace, mirror, amplitude=6pt}]  
($(f7.north west)+(-1cm,0)$) -- ($(f2.south west)+(-1cm,0)$)  
node[midway, left=8pt] {current frame};  

\draw[decorate, decoration={brace, mirror, amplitude=6pt}]  
($(f1.north west)+(-1cm,0)$) -- ($(f0.south west)+(-1cm,0)$)  
node[midway, left=8pt] {previous frame};

\end{tikzpicture}
\end{document}
```
> deep [recursion](/labyrinth/notes/cs/cs1101s/recursion) can lead to the stack frames to exceed the size allocated to the stack
### Application
Function call
```c
int f(int x) {
	return 2 * x; // breakpoint before returning
}

int main() {
	int y = f(55);
}
```
```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\def\frameh{8mm}
\begin{document}

\begin{tikzpicture}[
		thick,
    frame/.style={draw, minimum width=3cm, minimum height=\frameh, align=center, node distance=0}
]

% Stack frames (grows downward)
\foreach \i in {0,...,6} {
    \node[frame] (f\i) at (0,\frameh*\i) {};
}

\node at(f0) {...};
\node at(f1) {y = ?};
\node at(f2) {return PC};
\node at(f3) {saved fp};
\draw[->] (f3.west) to[bend right=75] (f0.west);
\node at(f4) {saved sp};
\node[right=of f4] (fp) {fp};
\draw[->] (fp) -- (f4);
\draw[->] (f4.west) to[bend right=75] (f1.west);
\node at(f5) {saved registers};
\node at(f6) {x = 5};
\node[right=of f6] (sp) {sp};
\draw[->] (sp) -- (f6);

\end{tikzpicture}
\end{document}
```

[c](/labyrinth/notes/cs/cs2100/c) to [mips](/labyrinth/notes/cs/cs2100/mips)
- `$t` registers → **caller-saved**
- `$s` registers → **callee-saved**
- `$a` registers → caller-saved
- `$v` registers → return registers (not preserved)
```c
int f(int x, int y){
	return 2 * (x + y);
}

int a = 3, b = 4, y;

int main(){
	y = f(a, b);
}
```
```mips
.data # data region
a: .word 4 # int a = 4  
b: .word 3 # int b = 3  
y: .space 4 # int y; (4 bytes reserved, uninitialized)  

.text # text region
.globl main
main:
	# Prologue (create stack frame)  
	addi $sp, $sp, -8 # space for $ra and $fp  
	sw $ra, 4($sp)  
	sw $fp, 0($sp)  
	move $fp, $sp  
	  
	# Load arguments into $a0, $a1  
	la $t0, a  
	lw $a0, 0($t0)  
	  
	la $t0, b  
	lw $a1, 0($t0)  
	  
	jal f              # sets $ra to PC+8(next inst), then jumps to f
	  
	# Store return value into y  
	la $t0, y  
	sw $v0, 0($t0)  
	  
	# Epilogue  
	move $sp, $fp  
	lw $fp, 0($sp)  
	lw $ra, 4($sp)  
	addi $sp, $sp, 8
	
	li   $v0, 10       # exit program
	syscall

f:
	# uses $t0, $t1 and $v0
	 
	# Prologue  
	addi $sp, $sp, -12  # space for $ra, $fp, and $s0  
	sw $ra, 8($sp)  
	sw $fp, 4($sp)  
	sw $s0, 0($sp)  
	move $fp, $sp  
	  
	# Use saved register example  
	move $s0, $a0 # s0 = x  
	add $v0, $s0, $a1 # x + y  
	sll $v0, $v0, 1 # 2 * (x + y)  
	  
	# Epilogue  
	move $sp, $fp  
	lw $s0, 0($sp)  
	lw $fp, 4($sp)  
	lw $ra, 8($sp)  
	addi $sp, $sp, 12  
	jr $ra
```
> mips allows for manual stack management