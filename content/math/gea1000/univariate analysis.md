---
tags:
- gea1000/chapter3
- math/statistics
complete: true
prev: /labyrinth/notes/math/gea1000/confounders
next: /labyrinth/notes/math/gea1000/bivariate_analysis
---

   

### Summary
Skew, in the direction of the tail
![[skew.png]]
$$
\begin{align*}
0 \ skew: & \qquad mean\approx median\approx mode \quad (0 \ skew \ \neq \ symmetrical)\\
left \ skew: & \qquad mean< median< mode \\
right \ skew: & \qquad mean> median> mode 
\end{align*}
$$

Spread, larger spread means more points are further away from the mean

### Concept
Boxplots and how to determine outliers
```tikz
\usepackage{tikz}
\usetikzlibrary{decorations.pathreplacing}
\begin{document}
  \begin{tikzpicture}
    % draw horizontal line   
    \draw (3,0) -- (5,0);
    \draw (7,0) -- (8,0);
    \draw (5,5pt) rectangle (7,-5pt);

    % draw vertical lines
    \foreach \x in {3,8}
      \draw (\x cm,3pt) -- (\x cm,-3pt);
      
	\draw (5.8,5pt) -- (5.8,-5pt);

    % draw nodes
	\draw (5,0) node[below=5pt, scale=0.75] {$ Q_1 $};
	\draw (5.8,0) node[below=5pt, scale=0.75] {$ Median $};
	\draw (7,0) node[below=5pt, scale=0.75] {$ Q_3 $};

	% braces for IQR and range
	\draw [decorate,decoration={brace,amplitude=5pt,raise=5pt}]
	  (5,0) -- (7,0) node[midway,above=12pt,scale=0.75]{$ IQR $};
	\draw [decorate,decoration={brace,amplitude=5pt,raise=5pt}]
	  (2,0) -- (5,0) node[midway,above=12pt,scale=0.75]{$ Q_1 - 1.5\times IQR $};
	\draw [decorate,decoration={brace,amplitude=5pt,raise=5pt}]
	  (7,0) -- (10,0) node[midway,above=12pt,scale=0.75]{$ Q_3 + 1.5\times IQR $};
	\draw [decorate,decoration={brace,amplitude=5pt,mirror,raise=16pt}]
	  (1,0) -- (11,0) node[midway,below=18pt,scale=0.75]{$ Range $};

	\draw plot[only marks,mark=x,mark size=2pt] coordinates
	  {(1.5, 0) (1.2, 0) (1, 0) (11, 0) (10.8, 0)};
  \end{tikzpicture}
\end{document}
```