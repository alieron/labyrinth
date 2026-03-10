---
prev: "[reliable protocols](/labyrinth/notes/cs/cs2105/reliable_protocols)"
tags:
  - cs2105/lect4
complete: false
next: /labyrinth/notes/cs/cs2105/UDP

---
### Summary
Pipelined protocols

| Protocol         | Timeout                    | Retransmit         | Handle out-of-order             |
| ---------------- | -------------------------- | ------------------ | ------------------------------- |
| Go-Back-N        | oldest unACKed packet      | all unACKed, `>=n` | discard                         |
| Selective repeat | individual unACKed packets | one, `n`           | buffer, discard only if too far |
> same assumptions as [RDT 3.0](/labyrinth/notes/cs/cs2105/reliable_protocols#RDT_3.0)
### Concept
#### Stop and Wait
- aka alternating bit
- low [utilization](/labyrinth/notes/cs/cs2105/network_delays#Utilization)

$$
U_{\text{sender}} = \frac{T_{\text{sending}}}{T_{\text{total}}} = \frac{d_{\text{trans}}}{d_{\text{trans}}+\text{RTT}}
$$
```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,decorations.pathreplacing}
\begin{document}
\def\dprop{0.8}
\def\dtrans{1}

% Host timeline (vertical line representing a host)
% #1 = x position
% #2 = name
% #3 = label text
\newcommand{\host}[3]{
  \draw[thick] (#1,0) -- (#1,-6) node[pos=0,above] {\textbf{#3}};
  \coordinate (#2) at (#1,0);
}

% Diagonal arrow going down-right
% #1 = source
% #2 = destination 
% #3 = label
% #4 = vertical offset from start

\newcommand{\trans}[4]{ 
	\coordinate (pstart) at ([yshift=#4]#1);
	\coordinate (pend) at ([yshift=#4-\dprop cm]#2);
	\coordinate (pstart-bottom) at ([yshift=#4-\dtrans cm]#1);
	\coordinate (pend-bottom) at ([yshift=#4-\dprop cm-\dtrans cm]#2); 
	% Draw filled parallelogram
	\fill[opacity=0.3] (pstart) -- (pend) -- (pend-bottom) -- (pstart-bottom) -- cycle;
	% Draw outline
	\draw[thick] (pstart) -- (pend) -- (pend-bottom) -- (pstart-bottom) -- cycle;
	% Draw arrow at leading edge
	%\draw[-{Stealth[length=3mm]}, very thick] (pstart) -- (pend); 
	% Label
	\node[font=\small] at ($(pstart)!0.5!(pend-bottom)$) {#3}; }

% Time marker (horizontal dashed line with label)
% #1 = y position
% #2 = label text
% #3 = x start position
% #4 = x end position
\newcommand{\timemarker}[4]{
  \draw[dotted] (#3,#1) -- (#4,#1);
  \node[left,font=\small] at (#3,#1) {#2};
}

\begin{tikzpicture}

% Define hosts
\host{0}{client}{Sender}
\host{5}{server}{Receiver}

% Transmissions
\trans{client}{server}{$p_1$}{-1cm}
\trans{server}{client}{$r_1$}{-3.2cm}

% Time markers
\timemarker{-1cm}{}{0}{5}

\draw [decorate,decoration={brace,mirror,amplitude=4pt}]
      (0,-1) -- (0,-2) node [midway,left,xshift=-.1cm,font=\small] {$d_{trans}$};
\draw [decorate,decoration={brace,mirror,amplitude=4pt}]
      (0,-2) -- (0,-4) node [midway,left,xshift=-.1cm,font=\small] {RTT};

\end{tikzpicture}
\end{document}
```
#### Go-Back-N
- cumulative ACK -> ACK`n` means all packets <=n have been received
- sender:
	- keeps track of `N` unACKed packets in a sliding window
	- advance to `n+1` only on reciept of ACK`n`
	- timer for smallest unACKed `n`
	- upon timeout(`n`), retransmit >=n in the window
- receiver:
	- only ACK packets in order, simple receiver -> only track `expectedSeqNum`
	- **discard out of order packets**, even if received successfully

![[Pasted image 20260304033049.png|600]]
> Go-Back-N can handle corrupted/lost ACK
#### Selective Repeat
- each packet must be ACKed
- sender:
	- track timeouts for `N` unACKed packets
	- upon timeout(`n`), retransmit `n` only
	- when ACK`n` is received, mark it as ACKed, advance window to next unACKed
- receiver:
	- maintains a buffer
	- pkt`n` in window -> send ACK`n`
		- in order -> deliver + advance buffer
		- else -> store in buffer
	- pkt`n` before window -> send ACK`n`
	- else(ahead of window) -> ignore

![[Pasted image 20260304042713.png|600]]