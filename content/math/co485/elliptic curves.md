---
tags:
  - co485/chapter3
  - math/elliptic_curves
  - cryptography
  - to_review
complete: false
prev: /labyrinth/notes/math/co485/finite_fields
next: /labyrinth/notes/math/co485/elliptic_curve_pairing

---
### Summary
The points on a nonsingular elliptic curve, together with the point at infinity, form an abelian group. Scalar multiplication is efficient while elliptic-curve DLOG is believed hard.

### Concept
#### Elliptic curves
- set of points that satisfy an equation + point at infinity
- this simplified weierstrass form requires characteristic != 2

$$
\begin{gather*}
E(\mathbb{F}) = \{\begin{array}{c|c} (x,y)\in \mathbb{F}^{2} & y^{2} = x^{3}+a_{2}x^{2}+a_{4}x+a_{6} \end{array}\} \cup \{ \mathcal{O} \} \\
\\
a_2^2 a_4^2 - 4 a_4^3 - 4 a_2^3 a_6 + 18 a_2 a_4 a_6 -
27 a_6^2 \neq 0
\end{gather*}
$$
> the full weierstrass form is $y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$ but not covered in `co485`

Geometric interpretation
- over the real numbers

```tikz
\usepackage{tikz}
\usepackage{amsfonts}

\begin{document}
  \begin{tikzpicture}[thick,>=latex]
		\pgfmathsetmacro{\rleft}{(-1-sqrt(5))/2}
	  \pgfmathsetmacro{\rright}{(-1+sqrt(5))/2}
	  \pgfmathsetmacro{\gap}{sqrt(5)}
    % Curve over R

    \begin{scope}
      \draw[->,gray] (-3,0) -- (3,0) node[right] {$x \in \mathbb{R}$};
      \draw[->,gray] (0,-3) -- (0,3) node[above] {$y \in \mathbb{R}$};
      \begin{scope}
	      \clip (-3,-3) rectangle (3,3);
	
	      % Closed component: both branches in one continuous path.
	      % TikZ trigonometric functions use degrees.
	      \draw plot[
	        variable=\t,
	        domain=0:180,
	        samples=201
	      ]
	      (
	        {\rleft + \gap*sin(\t)^2},
	        {\gap*sin(\t)*cos(\t)*
	          sqrt(max(0,1-\rleft-\gap*sin(\t)^2))}
	      ) -- cycle;
	
	      % Unbounded component: x = 1+t^2.
	      % The sign of t selects the lower or upper branch.
	      \draw plot[
	        variable=\t,
	        domain=-1.42:1.42,
	        samples=201
	      ]
	      (
	        {1+\t*\t},
	        {\t*sqrt((1+\t*\t-\rleft)*(1+\t*\t-\rright))}
	      );
	    \end{scope}
    \end{scope}

    \node at (0,-4) {$y^2 = x^3 - 2 x + 1$ over $\mathbb{R}$};
	\end{tikzpicture}
\end{document}
```

- over a finite field

```tikz
\usepackage{tikz}
\usepackage{amsfonts}

\begin{document}
\begin{tikzpicture}
		% Curve over Z_p

    % Generate list of points with Sage:
    % E = EllipticCurve(GF(89), [-2,1])
    % E.order()
    % print [(P[0],P[1]) for P in E]
    \begin{scope}[scale=.06]
      \draw[|<->|,gray] (0,-44) -- (0,44) node[above] {$y \in \mathbb{Z}_{89}$};
      \draw[->|,gray] (0,0) -- (89,0) node[right] {$x \in \mathbb{Z}_{89}$};
      \foreach \point in {
        (0, 1), (0, 1), (0, -1), (1, 0), (2, 19), (2, -19), (3, 17), (3, -17), (4, 18), (4, -18), (9, 0),
        (10, 25), (10, -25), (11, 8), (11, -8), (13, 6), (13, -6), (14, 15), (14, -15), (15, 26), (15, -26),
        (20, 29), (20, -29), (21, 26), (21, -26), (23, 14), (23, -14), (24, 31), (24, -31), (25, 1), (25, -1), (26, 9), (26, -9), (27, 36), (27, -36),
        (31, 2), (31, -2), (32, 24), (32, -24), (33, 19), (33, -19), (39, 18), (39, -18),
        (43, 37), (43, -37), (45, 16), (45, -16), (46, 18), (46, -18), (47, 32), (47, -32), (49, 28), (49, -28),
        (50, 37), (50, -37), (53, 26), (53, -26), (54, 19), (54, -19), (57, 7), (57, -7), (58, 40), (58, -40),
        (61, 34), (61, -34), (63, 30), (63, -30), (64, 1), (64, -1), (65, 38), (65, -38), (66, 42), (66, -42),
        (71, 41), (71, -41), (72, 27), (72, -27), (75, 20), (75, -20), (76, 12), (76, -12), (79, 0),
        (80, 25), (80, -25), (81, 22), (81, -22), (83, 8), (83, -8), (84, 8), (84, -8), (85, 37), (85, -37), (86, 43), (86, -43), (88, 25), (88, -25)
      } {\node at \point {$\bullet$};}
    \end{scope}

    \node at (2.7,-4) {$y^2 = x^3 - 2 x + 1$ over $\mathbb{Z}_{89}$}; % order: 96

\end{tikzpicture}
\end{document}
```

#### Group operation
- on points on the eliptic curve
- line connecting two points -> 3rd intersection -> flip y

Geometric interpretation
- point addition/chord rule

$$
P + Q = R
$$
```tikz
\usepackage{tikz}
\usepackage{amsfonts}

% Curve y^2 = x^3 - 2x + 2.
\newcommand{\plotcurve}{
  \draw[gray] (-3,-3) rectangle (3,3);
  \draw[->,>=latex,gray] (-3,0) -- (3,0);
  \draw[->,>=latex,gray] (0,-3) -- (0,3);

  \begin{scope}
    \clip (-3,-3) rectangle (3,3);
    % r is the real root of x^3 - 2x + 2.
    % Parametrization: x=r+t^2.
    \draw[blue,thick] plot[
      variable=\t,
      domain=-2.184:2.184,
      samples=201
    ]
    (
      {\root+\t*\t},
      {\t*sqrt(max(0,
        3*\root*\root-2
        +3*\root*\t*\t+\t*\t*\t*\t
      ))}
    );
  \end{scope}
}

\begin{document}
\begin{tikzpicture}[>=latex]
  \pgfmathsetmacro{\root}{-1.769292354}
  
  % Addition: original chord y = 0.3x + 1.25.
  \begin{scope}
    \plotcurve

    % The three x-coordinates where the chord meets the curve.
    \pgfmathsetmacro{\px}{-1.69018650}
    \pgfmathsetmacro{\qx}{0.15973798}
    \pgfmathsetmacro{\rx}{1.62044851}

    \pgfmathsetmacro{\py}{.3*\px+1.25}
    \pgfmathsetmacro{\qy}{.3*\qx+1.25}
    \pgfmathsetmacro{\ry}{.3*\rx+1.25}

    \draw[thick] (-2.5,.5) -- (2.5,2);
    \draw[dashed,semithick]
      (\rx,2.7) -- (\rx,-2.7);

    \fill (\px,\py) circle (2pt)
      node[above left] {$P$};
    \fill (\qx,\qy) circle (2pt)
      node[above right] {$Q$};
    \fill (\rx,\ry) circle (2pt)
    %  node[below right] {$-R$}
    ;
    \fill (\rx,-\ry) circle (2pt)
      node[below left] {$R$};

    %\node[below,align=center] at (0,-4)
    %  {Addition $P+Q$ \\ ``Chord rule''};
  \end{scope}
\end{tikzpicture}
\end{document}
```

- identity/neutral element

$$
\text{point at infinity }\mathcal{O}
$$
```tikz
\usepackage{tikz}
\usepackage{amsfonts}

% Curve y^2 = x^3 - 2x + 2.
\newcommand{\plotcurve}{
  \draw[gray] (-3,-3) rectangle (3,3);
  \draw[->,>=latex,gray] (-3,0) -- (3,0);
  \draw[->,>=latex,gray] (0,-3) -- (0,3);

  \begin{scope}
    \clip (-3,-3) rectangle (3,3);
    % r is the real root of x^3 - 2x + 2.
    % Parametrization: x=r+t^2.
    \draw[blue,thick] plot[
      variable=\t,
      domain=-2.184:2.184,
      samples=201
    ]
    (
      {\root+\t*\t},
      {\t*sqrt(max(0,
        3*\root*\root-2
        +3*\root*\t*\t+\t*\t*\t*\t
      ))}
    );
  \end{scope}
}

\begin{document}
\begin{tikzpicture}[>=latex]
  \pgfmathsetmacro{\root}{-1.769292354}

  % Identity.
  \begin{scope}[xshift=0cm]
    \plotcurve
    \draw[->,thick] (-2.5,-1) -- (-2.5,2.5)
      node[right] {$\mathcal O$};
    %\node[below] at (0,-4)
    %  {Neutral element $\mathcal O$};
  \end{scope}

\end{tikzpicture}
\end{document}
```


- inverse, flip y

$$
P + (-P) = \mathcal{O}
$$
```tikz
\usepackage{tikz}
\usepackage{amsfonts}

% Curve y^2 = x^3 - 2x + 2.
\newcommand{\plotcurve}{
  \draw[gray] (-3,-3) rectangle (3,3);
  \draw[->,>=latex,gray] (-3,0) -- (3,0);
  \draw[->,>=latex,gray] (0,-3) -- (0,3);

  \begin{scope}
    \clip (-3,-3) rectangle (3,3);
    % r is the real root of x^3 - 2x + 2.
    % Parametrization: x=r+t^2.
    \draw[blue,thick] plot[
      variable=\t,
      domain=-2.184:2.184,
      samples=201
    ]
    (
      {\root+\t*\t},
      {\t*sqrt(max(0,
        3*\root*\root-2
        +3*\root*\t*\t+\t*\t*\t*\t
      ))}
    );
  \end{scope}
}

\begin{document}
\begin{tikzpicture}[>=latex]
  \pgfmathsetmacro{\root}{-1.769292354}

  % Inverse.
  \begin{scope}
    \plotcurve

    \pgfmathsetmacro{\px}{-1.25}
    \pgfmathsetmacro{\py}{sqrt(\px*\px*\px-2*\px+2)}

    \draw[dashed,semithick] (\px,2.5) -- (\px,-2.5);

    \fill (\px,\py) circle (2pt)
      node[above left] {$P$};
    \fill (\px,-\py) circle (2pt)
      node[below left] {$-P$};

    %\node[below] at (0,-4)
    %  {Inverse element $-P$};
  \end{scope}
\end{tikzpicture}
\end{document}
```

- tangent rule, "exponentiation" for elliptic curve groups

$$
P + P = 2P
$$
```tikz
\usepackage{tikz}
\usepackage{amsfonts}

% Curve y^2 = x^3 - 2x + 2.
\newcommand{\plotcurve}{
  \draw[gray] (-3,-3) rectangle (3,3);
  \draw[->,>=latex,gray] (-3,0) -- (3,0);
  \draw[->,>=latex,gray] (0,-3) -- (0,3);

  \begin{scope}
    \clip (-3,-3) rectangle (3,3);
    % r is the real root of x^3 - 2x + 2.
    % Parametrization: x=r+t^2.
    \draw[blue,thick] plot[
      variable=\t,
      domain=-2.184:2.184,
      samples=201
    ]
    (
      {\root+\t*\t},
      {\t*sqrt(max(0,
        3*\root*\root-2
        +3*\root*\t*\t+\t*\t*\t*\t
      ))}
    );
  \end{scope}
}

\begin{document}
\begin{tikzpicture}[>=latex]
  \pgfmathsetmacro{\root}{-1.769292354}

  % Doubling: P = (-1,sqrt(3)).
  \begin{scope}
    \plotcurve

    \pgfmathsetmacro{\px}{-1}
    \pgfmathsetmacro{\py}{sqrt(3)}
    \pgfmathsetmacro{\slope}{
      (3*\px*\px-2)/(2*\py)
    }

    % Third intersection of tangent with the curve.
    \pgfmathsetmacro{\rx}{\slope*\slope-2*\px}
    \pgfmathsetmacro{\ry}{
      \py+\slope*(\rx-\px)
    }

    \begin{scope}
      \clip (-3,-3) rectangle (3,3);
      \draw[thick]
        (-3,{\py+\slope*(-3-\px)})
        -- (3,{\py+\slope*(3-\px)});
    \end{scope}

    \draw[dashed,semithick]
      (\rx,2.9) -- (\rx,-2.9);

    \fill (\px,\py) circle (2pt)
      node[above left] {$P$};
    \fill (\rx,\ry) circle (2pt)
    %  node[below right] {$R$}
    ;
    \fill (\rx,-\ry) circle (2pt)
      node[above left] {$2P$};

    %\node[below,align=center] at (0,-4)
    %  {Doubling $P+P$ \\ ``Tangent rule''};
  \end{scope}
\end{tikzpicture}
\end{document}
```

Algebraic interpretation
- using the [equation of the tangent](/labyrinth/notes/math/ma1301/tangent_&_normal)

$$
\begin{gather*}
P + Q = R \\
\\
P = (x_{p},y_{p}),\quad Q = (x_{q},y_{q}),\quad R = (x_{r},y_{r}) \\
\\
\begin{aligned}[t]
\text{if } &x_{p} = x_{q}\land y_{p} = -y_{q}, \ Q = -P \\
&P+Q = P + (-P) = \mathcal{O} \\
\\
\text{else }
\\
&m=\begin{cases}
\dfrac{y_q-y_p}{x_q-x_p},&P\ne Q,\\
\dfrac{3x_p^2+2a_{1}x_{p}+a_{4}}{2y_p},&P=Q.
\end{cases} \\
\\
&x_{r} = m^{2} - a_{2}-x_{p}-x_{q}\\
&y_{y} = -(m(x_{3}-x_{1}) + y_{p})
\end{aligned}
\end{gather*}
$$

#### Short weierstrass form

$$
y^{2} = x^{3} + ax + b, \qquad 4a^{3} + 27b^{2} \neq 0
$$

- all elliptic curves have a weierstrass form if the characteristic != 2 or 3

$$
\begin{gather*}
\text{sub }x = X + c \\
\\
\begin{aligned}
(X+c)^3+a_2(X+c)^2+a_4(X+c)+a_6
={}&X^3+(3c+a_2)X^2\\
&+(3c^2+2a_2c+a_4)X\\
&+(c^3+a_2c^2+a_4c+a_6)
\end{aligned} \\
\\
\text{we want: }
3c+a_{2} = 0 \implies c = - \frac{a_{2}}{3} \\
\\
\operatorname{char}(\mathbb{F}) = 3 \implies 3 = 0 \implies 3c + a_{2} = a_{2} \neq 0 \text{ unless }a_{2} = 0 \\
\\
y^2=X^3+
\underbrace{ \left(a_4-\frac{a_2^2}{3}\right) }_{ a }X+
\underbrace{ \left(a_6-\frac{a_2a_4}{3}+\frac{2a_2^3}{27}\right) }_{ b }
\end{gather*}
$$
> all elliptic curves in fields where $\operatorname{char}(\mathbb{F})\neq 2,3$ can be expressed in weierstrass form

Common shapes
```tikz
\usepackage{tikz}
\usepackage{amsfonts}
\usetikzlibrary{intersections}

\newcommand{\plotcurve}[3][blue,thick]{
  % plot curve y^2 = x^3 + a x + b in range [-3,3]^2
  % parameter 1 (optional): style options for curve (color, etc)
  % parameter 2: curve parameter a
  % parameter 3: curve parameter b
	\draw[gray] (-3,-3) rectangle (3,3);
  \draw[->,>=latex,gray] (-3,0) -- (3,0);
  \draw[->,>=latex,gray] (0,-3) -- (0,3);

  % Cubic discriminant expression.
  \pgfmathsetmacro{\disc}{(#3)^2/4+(#2)^3/27}

  \begin{scope}
    \clip (-3,-3) rectangle (3,3);

    \ifdim\disc pt<0pt
      % Three distinct real roots: rleft < rmid < rmax.
      \pgfmathsetmacro{\radius}{2*sqrt(-(#2)/3)}
      \pgfmathsetmacro{\angle}{
        acos(max(-1,min(1,
          -(#3)/(2*sqrt(-((#2)/3)^3))
        )))/3
      }

      \pgfmathsetmacro{\rleft}{\radius*cos(\angle+120)}
      \pgfmathsetmacro{\rmid}{\radius*cos(\angle+240)}
      \pgfmathsetmacro{\rmax}{\radius*cos(\angle)}
      \pgfmathsetmacro{\gap}{\rmid-\rleft}

      % Closed component.
      \draw[#1] plot[
        variable=\t,
        domain=0:180,
        samples=121
      ]
      (
        {\rleft+\gap*sin(\t)^2},
        {\gap*sin(\t)*cos(\t)*
          sqrt(max(0,\rmax-\rleft-\gap*sin(\t)^2))}
      ) -- cycle;
    \else
      % One real root, or the triple root A=B=0.
      % Signed cube roots avoid powers of negative numbers.
      \pgfmathsetmacro{\u}{-(#3)/2+sqrt(max(0,\disc))}
      \pgfmathsetmacro{\v}{-(#3)/2-sqrt(max(0,\disc))}
      \pgfmathsetmacro{\rmax}{
        sign(\u)*abs(\u)^(1/3)
        + sign(\v)*abs(\v)^(1/3)
      }
    \fi

    % Unbounded component, parametrized by x = rmax+t^2.
    \pgfmathsetmacro{\tmax}{sqrt(max(0,3-\rmax))}
    \draw[#1] plot[
      variable=\t,
      domain=-\tmax:\tmax,
      samples=121
    ]
    (
      {\rmax+\t*\t},
      {\t*sqrt(max(0,
        3*\rmax*\rmax+(#2)
        +3*\rmax*\t*\t+\t*\t*\t*\t
      ))}
    );
  \end{scope}
}

\begin{document}
  \begin{tikzpicture}
    \foreach \a in {-2,...,1} {
      \foreach \b in {-1,...,2} {
        \begin{scope}[xshift=1.75*\b cm,yshift=-1.75*\a cm,scale=.25]
          \plotcurve{\a}{\b}
        \end{scope}
      }
      \draw (-1.75*2+1,-1.75*\a) node[above,rotate=90] {$a=\a$};
    }
    \foreach \b in {-1,...,2} {
      \draw (1.75*\b,1.75*3-1) node[above] {$b=\b$};
    }
    \node[above] at (1.75/2,-2*1.75) {$y^2 = x^3 + ax + b$};
  \end{tikzpicture}
\end{document}
```

Group operation for short weierstrass
$$
\begin{align*}
&m=\begin{cases}
\dfrac{y_2-y_1}{x_2-x_1}&P\ne Q\\
\dfrac{3x_1^2+a}{2y_1}&P=Q
\end{cases} \\
\\
&x_{r} = m^{2} - x_{p}-x_{q} \\
&y_{r} = -(m(x_{r} - x_{p})+y_{p})
\end{align*}
$$

Computing $x_{r}$ efficiently
$$
\begin{gather*}
y = y_{p} + m(x - x_{p}) \\
\\
\\
Q,P,R\text{ must satisfy} \\
\\
y^{2} = (y_{p} + m(x - x_{p}))^2 = x^{3}+ax+b \\
\\
m^2x^2+2m(y_p-mx_p)x+(y_p-mx_p)^2 = x^{3}+ax+b \\
\\
x^3-m^2x^2+\bigl(a-2m(y_p-mx_p)\bigr)x +b-(y_p-mx_p)^2=0 \\
\\
\\
\text{roots of the polynomial} \\
\\
(x - x_{p})(x-x_{q})(x-x_{r}) = 0 \\
\\
x^3-(x_p+x_q+x_r)x^2 +(x_px_q+x_px_r+x_qx_r)x-x_px_qx_r=0 \\
\\
\\
\text{looking at the coefficient of }x^{2} \\
\\
-m^{2} = -(x_p+x_q+x_r) \\
x_{r} = m^{2} - x_{p}-x_{q}
\end{gather*}
$$


To derive $x_3$, substitute the line $y=y_1+\lambda(x-x_1)$ into the curve. The resulting monic cubic has roots $x_1,x_2,x_3$. Comparing its $x^2$ coefficient with

$$
(x-x_1)(x-x_2)(x-x_3)
$$

gives $x_1+x_2+x_3=\lambda^2$ and hence the formula above.

### Application
Compute $nP$ with [square-and-multiply](/labyrinth/notes/math/co485/square-and-multiply), replacing multiplication by point addition. This yields $O(\log n)$ additions and doublings. See the broader prerequisite note [elliptic curves(to delete)](/labyrinth/notes/math/abstract_algebra/elliptic_curves(to_delete)) and [elliptic curve cryptography](/labyrinth/notes/math/abstract_algebra/elliptic_curve_cryptography).

### Sources
- [Silverman and Tate Rational Points](https://link.springer.com/book/10.1007/978-1-4757-4252-7)
- [Washington Elliptic Curves](https://www.routledge.com/Elliptic-Curves-Number-Theory-and-Cryptography/Washington/p/book/9781420071467)
- [SafeCurves](https://safecurves.cr.yp.to/)
