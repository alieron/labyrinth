---
tags:
  - cs2105/chapter1
  - cs/networking
  - lang/pgf-tikz
complete: true
prev: /labyrinth/notes/cs/cs2105/networks
next: /labyrinth/notes/cs/cs2105/application_layer

---
### Concept
#### Packet loss
- packet is dropped if the router's buffer is full
- previous node/source may retransmit if no reply is received
#### Packet delay
1. processing delay
	- check errors and determine output link

2. queueing delay
	- time spent waiting in the queue

3. transmission delay
	- for packets of $L$-bits
	- at transmission rate $R$
$$
d_{\text{trans}} = \frac{L\ \text{(bits)}\qquad}{R\ \text{(bits/sec)}}
$$

4. propagation delay
	- for physical link of length $l$
	- at the propagation speed of the medium $s$
$$
d_{\text{prop}} = \frac{l \ \text{(m)} \ \ }{s \ \text{(m/s)}}
$$
> propagation speed of light in a fiber optic cable is `~2×10⁸ m/sec`

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
  \draw[thick] (#1,0) -- (#1,-11) node[pos=0,above] {\textbf{#3}};
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
\host{0}{client}{Client}
\host{5}{switch}{Switch}
\host{10}{server}{Server}

% Transmissions
\trans{client}{switch}{$p_1$}{-1cm}
\trans{switch}{server}{$p_1$}{-3.2cm}
\trans{server}{switch}{$r_1$}{-6cm}
\trans{switch}{client}{$r_1$}{-8.2cm}

% Time markers
\timemarker{-1cm}{}{0}{5}

\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-1) -- (5,-1.8) node [midway,right,xshift=.1cm,font=\small] {$d_{prop}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-1.8) -- (5,-2.8) node [midway,right,xshift=.1cm,font=\small] {$d_{trans}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-2.8) -- (5,-3.2) node [midway,right,xshift=.1cm,font=\small] {$d_{proc}+d_{queue}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (10,-5) -- (10,-6) node [midway,right,xshift=.1cm,font=\small] {Server Action};

\node[font=\small,text=gray] at (2.5,-5.5) {End-to-End Delay};
\timemarker{-5cm}{}{0}{10}
\node[font=\small,text=gray] at (2.5,-10.5) {Round Trip Time};
\timemarker{-10cm}{}{0}{10}

\end{tikzpicture}
\end{document}
```
### Application
Data transmission
- single packet

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
  \draw[thick] (#1,0) -- (#1,-5.6) node[pos=0,above] {\textbf{#3}};
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
\host{0}{client}{Client}
\host{5}{switch}{Switch}
\host{10}{server}{Server}

% Transmissions
\trans{client}{switch}{$p_1$}{-1cm}
\trans{switch}{server}{$p_1$}{-2.8cm}

% Time markers
\timemarker{-1cm}{}{0}{5}

\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-1) -- (5,-1.8) node [midway,right,xshift=.1cm,font=\small] {$d_{prop}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-1.8) -- (5,-2.8) node [midway,right,xshift=.1cm,font=\small] {$d_{trans}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (10,-1) -- (10,-4.6) node [midway,right,xshift=.1cm,font=\small] {End-to-End Delay};

\timemarker{-4.6cm}{}{0}{10}

\end{tikzpicture}
\end{document}
```
- message segmentation
	- less delay with pipelining
	- more overhead, header for each packet

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,decorations.pathreplacing}
\begin{document}
\def\dprop{0.8}
\def\dtrans{0.2}

% Host timeline (vertical line representing a host)
% #1 = x position
% #2 = name
% #3 = label text
\newcommand{\host}[3]{
  \draw[thick] (#1,0) -- (#1,-4.8) node[pos=0,above] {\textbf{#3}};
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
\host{0}{client}{Client}
\host{5}{switch}{Switch}
\host{10}{server}{Server}

% Transmissions
\trans{client}{switch}{$p_1$}{-1cm}
\trans{switch}{server}{$p_1$}{-2cm}
\trans{client}{switch}{$p_2$}{-1.2cm}
\trans{switch}{server}{$p_2$}{-2.2cm}
\trans{client}{switch}{$p_3$}{-1.4cm}
\trans{switch}{server}{$p_3$}{-2.4cm}
\trans{client}{switch}{$p_4$}{-1.6cm}
\trans{switch}{server}{$p_4$}{-2.6cm}
\trans{client}{switch}{$p_5$}{-1.8cm}
\trans{switch}{server}{$p_5$}{-2.8cm}

% Time markers
\timemarker{-1cm}{}{0}{5}

\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-1) -- (5,-1.8) node [midway,right,xshift=.1cm,font=\small] {$d_{prop}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-1.8) -- (5,-2) node [midway,right,xshift=.1cm,font=\small] {$d_{trans}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (10,-1) -- (10,-3.8) node [midway,right,xshift=.1cm,font=\small] {End-to-End Delay};

\timemarker{-3.8cm}{}{0}{10}

\end{tikzpicture}
\end{document}
```
### Extra
Tikz template for network delay diagrams
```latex
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
  \draw[thick] (#1,0) -- (#1,-11) node[pos=0,above] {\textbf{#3}};
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
\host{0}{client}{Client}
\host{5}{switch}{Switch}
\host{10}{server}{Server}

% Transmissions
\trans{client}{switch}{$p_1$}{-1cm}
\trans{switch}{server}{$p_1$}{-3.2cm}
\trans{server}{switch}{$r_1$}{-6cm}
\trans{switch}{client}{$r_1$}{-8.2cm}

% Time markers
\timemarker{-1cm}{}{0}{5}

\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-1) -- (5,-1.8) node [midway,right,xshift=.1cm,font=\small] {$d_{prop}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-1.8) -- (5,-2.8) node [midway,right,xshift=.1cm,font=\small] {$d_{trans}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (5,-2.8) -- (5,-3.2) node [midway,right,xshift=.1cm,font=\small] {$d_{proc}+d_{queue}$};
\draw [decorate,decoration={brace,amplitude=4pt}]
      (10,-5) -- (10,-6) node [midway,right,xshift=.1cm,font=\small] {Server Action};

\node[font=\small,text=gray] at (2.5,-5.5) {End-To-End Delay};
\timemarker{-5cm}{}{0}{10}
\node[font=\small,text=gray] at (2.5,-10.5) {Round Trip Time};
\timemarker{-10cm}{}{0}{10}

\end{tikzpicture}
\end{document}
```