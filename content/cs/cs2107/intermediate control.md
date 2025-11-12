---
tags:
  - cs2107/chaoter9
  - cs/security
complete: true
prev: /labyrinth/notes/cs/cs2107/access_control
next: /labyrinth/notes/cs/cs2107/privilege_escalation

---
### Summary
Grouping ^a83c0f
- owner, group(s) and everyone else 
- users in each groupd have shared access rights
- role-based access control
	- user's role determines their grouping

Privilege
- levels of access
- higher level will have more rights than lower levels
- protection rings
	- lower number -> higher privilege

```tikz
\usepackage{tikz}  
\usetikzlibrary{arrows.meta,positioning}
\begin{document}  
  
\begin{tikzpicture}[thick, node distance=0.8cm]  
  
% Nodes  
\node[draw, rectangle, text centered, text width=3cm] (hs) {High privilege\\subject};  
\node[right=4 of hs, draw, rounded corners, text centered, text width=3cm] (ho) {High privilege\\object};  
\node[below=2 of hs, draw, rectangle, text centered, text width=3cm] (ls) {Low privilege\\subject};  
\node[right=4 of ls, draw, rounded corners, text centered, text width=3cm] (lo) {Low privilege\\object};  
  
% Arrows  
\draw[->] (hs) to node[auto] {r,w} (ho);
\draw[->] (ls) to node[auto] {r,w} (lo);
\draw[->] (hs) to node[auto] {r,w} (lo);
  
\end{tikzpicture}  
\end{document}
```
> UNIX has 2 rings, user and superuser

Checking access
- use the permissions for owner, group(s) and others, in order
### Concept
Intermediate control
- a form of mandatory access control
- preserve some of the fine grain from [ACL](/labyrinth/notes/cs/cs2107/access_control#^d93cc3) but easy to manage
- easier to manage groups of users than each user individually

Bell-LaPadula model
- for confidentiality, no sensitive info leaking down
- no read up -> low lvl subj cannot read high lvl obj
- no write down -> high lvl subj cannot write to low lvl obj

```tikz
\usepackage{tikz}  
\usetikzlibrary{arrows.meta,positioning}
\begin{document}  
  
\begin{tikzpicture}[thick, node distance=0.8cm]  
  
% Nodes  
\node[draw, rectangle, text centered, text width=3cm] (hs) {High privilege\\subject};  
\node[right=4 of hs, draw, rounded corners, text centered, text width=3cm] (ho) {High privilege\\object};  
\node[below=2 of hs, draw, rectangle, text centered, text width=3cm] (ls) {Low privilege\\subject};  
\node[right=4 of ls, draw, rounded corners, text centered, text width=3cm] (lo) {Low privilege\\object};  
  
% Arrows  
\draw[->] (hs) to node[auto] {r,w} (ho);
\draw[->] (ls) to node[auto] {r,w} (lo);
\draw[->] (ls) to node[auto,pos=0.8] {w} (ho);
\draw[->] (hs) to node[above,pos=0.8] {r} (lo);
  
\end{tikzpicture}  
\end{document}
```

Biba model
- for integrity, no malicious info going up
- no write up -> low lvl subj cannot write to high lvl obj
- no read down -> high lvl subj cannot read low lvl obj

```tikz
\usepackage{tikz}  
\usetikzlibrary{arrows.meta,positioning}
\begin{document}  
  
\begin{tikzpicture}[thick, node distance=0.8cm]  
  
% Nodes  
\node[draw, rectangle, text centered, text width=3cm] (hs) {High privilege\\subject};  
\node[right=4 of hs, draw, rounded corners, text centered, text width=3cm] (ho) {High privilege\\object};  
\node[below=2 of hs, draw, rectangle, text centered, text width=3cm] (ls) {Low privilege\\subject};  
\node[right=4 of ls, draw, rounded corners, text centered, text width=3cm] (lo) {Low privilege\\object};  
  
% Arrows  
\draw[->] (hs) to node[auto] {r,w} (ho);
\draw[->] (ls) to node[auto] {r,w} (lo);
\draw[->] (ls) to node[auto,pos=0.8] {r} (ho);
\draw[->] (hs) to node[above,pos=0.8] {w} (lo);
  
\end{tikzpicture}  
\end{document}
```