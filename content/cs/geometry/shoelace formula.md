---
tags:
  - cs/competitive
  - cs/geometry
  - math/geometry
complete: false
prev: /labyrinth/notes/cs/geometry/polygons
next: /labyrinth/notes/cs/geometry/winding_number_algorithm

---
### Summary
Area of polygon
$$
\begin{aligned}
A&=\frac{1}{2}{\begin{vmatrix}x_{1}&x_{2}&x_{3}&\cdots &x_{n}&x_{1}\\y_{1}&y_{2}&y_{3}&\cdots &y_{n}&y_{1}\end{vmatrix}}\\
\\
&=\frac{1}{2}\left({\begin{vmatrix}x_{1}&x_{2}\\y_{1}&y_{2}\end{vmatrix}}+{\begin{vmatrix}x_{2}&x_{3}\\y_{2}&y_{3}\end{vmatrix}}+\cdots +{\begin{vmatrix}x_{n}&x_{1}\\y_{n}&y_{1}\end{vmatrix}}\right)\\
\\
&=x_{1}y_{2}-x_{2}y_{1}+x_{2}y_{3}-x_{3}y_{2}+\dots+x_{n}y_{1}-x_{1}y_{n}
\end{aligned}
$$

Sum of triangle areas
$$
\begin{align*}
A &= \sum_{i=1}^{n} \triangle_{i,\,i+1}\\ &= \frac{1}{2}\sum_{i=1}^{n}\det\begin{pmatrix} x_i & x_{i+1} \\ y_i & y_{i+1} \end{pmatrix}\\ &= \frac{1}{2}\sum_{i=1}^{n}\left(x_i y_{i+1} - x_{i+1} y_i\right)
\end{align*}
$$

C++ implementation
- $O(n)$

```cpp
#include <vector>
#include <cmath>
#include <utility>

double shoelaceArea(const std::vector<std::pair<double, double>>& pts) {
    size_t n = pts.size();
    if (n < 3) return 0.0;

    double signedArea = 0.0;
    for (size_t i = 0; i < n; ++i) {
        const auto& [x_i, y_i]     = pts[i];
        const auto& [x_ip1, y_ip1] = pts[(i + 1) % n];  // wraps last -> first
        signedArea += x_i * y_ip1 - x_ip1 * y_i;         // this is 2 * triangle_{i,i+1}
    }
    signedArea *= 0.5;

    return std::fabs(signedArea);  // drop fabs() to keep the signed area (winding direction)
}

// usage
#include <iostream>

int main() {
	std::vector<std::pair<double, double>> square = {
		{0, 0}, {4, 0}, {4, 4}, {0, 4}
	};
	std::cout << shoelaceArea(square) << "\n"; // 16
}
```
### Concept
#### Triangle at origin and 2 points
- using the area analogy of [determinants](/labyrinth/notes/math/ma1522/determinants)

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=.8]
\coordinate (o) at (0,0);
\coordinate (y) at (0,5);
\coordinate (x) at (5,0);

\draw[thick,->] (o)--(x);
\draw[thick,->] (o)--(y);
\node[left] at (o) {$0$};

\coordinate (a) at (3,1); \coordinate (b) at (2,4);

\coordinate (v) at (5,5);

\fill[red!40] (a)--(v)--(b)--(o)--cycle;
\fill[red!60] (a)--(b)--(o)--cycle;
\draw[thick] (a)--(b)--(o)--cycle;

\node[right] at (a) {$a$};
\node[left] at (b) {$b$};

% \foreach \p in {a,b}{\draw[dashed] (o)--(\p);}
\end{tikzpicture}
\end{document}
```
$$
\triangle_{ab} = \frac{1}{2}\det\begin{pmatrix} x_a & x_b \\ y_a & y_b \end{pmatrix} = \frac{1}{2}\left(x_a y_b - x_b y_a\right)
$$

Negative triangle
- negative determinant implies a flip in the new axes defined by the matrix
- clockwise points vs anticlockwise

$$
\begin{align*}
\triangle_{ba} &= \frac{1}{2}(x_b y_a - x_a y_b) \\
&= -\frac{1}{2}\left(x_a y_b - x_b y_a\right) \\
&= - \triangle_{ab}\\
\end{align*}
$$
> anti-clockwise is +ve, clockwise is negative

#### Area of arbitrary triangle

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=.8]
\coordinate (o) at (0,0);
\coordinate (y) at (0,6);
\coordinate (x) at (6,0);

\draw[thick,->] (o)--(x);
\draw[thick,->] (o)--(y);
\node[left] at (o) {$0$};

\coordinate (a) at (3,1); \coordinate (c) at (2,4); \coordinate (b) at (5,6);

\fill[red!80, fill opacity=0.5] (b)--(c)--(o)--cycle;
\fill[green!80, fill opacity=0.5] (a)--(b)--(o)--cycle;
\fill[blue!80, fill opacity=0.5] (a)--(c)--(o)--cycle;
\draw[thick] (a)--(b)--(c)--cycle;

\node[right] at (a) {$a$};
\node[right] at (b) {$b$};
\node[left] at (c) {$c$};

% \foreach \p in {a,b}{\draw[dashed] (o)--(\p);}
\end{tikzpicture}
\end{document}
```
$$
\begin{align*}
A_{abc} &= {\color{green} \triangle_{ab} } + {\color{red} \triangle_{bc} } - {\color{royalblue} \triangle_{ac} }\\
&= \triangle_{ab} + \triangle_{bc} + \triangle_{ca}
\end{align*}
$$

#### Area of [polygons](/labyrinth/notes/cs/geometry/polygons)


### Sources
- [Shoelace formula](https://en.wikipedia.org/wiki/Shoelace_formula)
- [CP-Algorithms polygon area](https://cp-algorithms.com/geometry/area-of-simple-polygon.html)
