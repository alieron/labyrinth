---
tags:
  - cs341/chapter1
  - cs/algorithms
complete: false
---
### Concept
#### Karatsuba algorithm
- [divide & conquer](/labyrinth/notes/cs/cs341/divide_&_conquer) on integer multiplication

$$
\begin{gather*}
x=a2^m+b,\qquad y=c2^m+d \\
\\
xy={\color{orange} ac}\,2^{2m}+({\color{red} ad+bc})2^m+{\color{green} bd} \\
\\
\\
z_2={\color{orange} ac},\qquad z_0={\color{green} bd},\qquad z_1=(a+b)(c+d) = {\color{orange} ac} + ( {\color{red} bc + ad} ) + {\color{green} bd}\\
\\
{\color{red} ad+bc}=z_1-z_2-z_0
\end{gather*}
$$

```
Karatsuba(x, y):
    n = max(bitLength(x), bitLength(y))

    if n <= small threshold:
        return direct multiplication of x and y

    m = ceil(n / 2)

    a = floor(x / 2^m)
    b = x mod 2^m
    c = floor(y / 2^m)
    d = y mod 2^m

    z2 = Karatsuba(a, c)
    z0 = Karatsuba(b, d)
    z1 = Karatsuba(a + b, c + d)

    middle = z1 - z2 - z0

    return z2 * 2^(2m) + middle * 2^m + z0
```

Runtime
$$
T(n)=3T(n/2)+\Theta(n)
=\Theta(n^{\log_2 3})
\approx\Theta(n^{1.585})
$$