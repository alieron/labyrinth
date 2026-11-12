---
tags:
  - co485/chapter2
  - cs/algorithms
complete: true
---
### Summary
Scale
$$
(\ln n)^b
\;\ll\;
L_n[\alpha,c]
\;\ll\;
n^\varepsilon
\qquad(b,\varepsilon>0)
$$
> larger than polylog but smaller than exponential

### Concept
#### L-notation
- asymptotic notation, similar to [big-O notation](/labyrinth/notes/cs/cs2040s/asymptotics#Big-$O$)
- denotes subexponential time complexity

$$
L_{n}[\alpha ,c]=e^{(c+o(1))(\ln n)^{\alpha }(\ln \ln n)^{1-\alpha }}
$$

$$
L_{n}[\alpha ,c]=\exp((c+o(1))(\ln n)^{\alpha }(\ln \ln n)^{1-\alpha })
$$


Ranges
- polylogarithmic
$$
a = 0 \implies L_{n}[\alpha ,c]=L_{n}[0,c]=e^{(c+o(1))\ln \ln n}=(\ln n)^{c+o(1)}
$$

- fully exponential
$$
\alpha = 1 \implies L_{n}[\alpha ,c]=L_{n}[1,c]=e^{(c+o(1))\ln n}=n^{c+o(1)}
$$

- subexponential
$$
0<\alpha < 1 \implies L_{n}[\alpha ,c] \text{ is subexponential}
$$

### Application
