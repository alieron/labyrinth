---
tags:
- cs1101s/chapter1
- cs/algorithms
- cs/fundamentals
complete: true
---
### Summary
Linear
$$
\begin{align*}  
T(n)&=T(n-1)+O(1)\quad&&\implies O(n) \\  
T(n)&=T(n-1)+O(n)\quad&&\implies O(n^2) \\  
T(n)&=T(n-1)+O(\log n)\quad&&\implies O(n\log n) \\  
T(n)&=T(n-1)+T(n-1)+O(1)\quad&&\implies O(2^n) \\  
T(n)&=T(n-1)+T(n-2)\quad&&\implies O(\varphi^n) \\
\end{align*}
$$

Binary
$$
\begin{align*}  
T(n)&=T\left(\frac{n}{2}\right)+O(1)\quad&&\implies O(\log n) \\  
T(n)&=T\left(\frac{n}{2}\right)+O(n)\quad&&\implies O(n) \\  
T(n)&=2T\left(\frac{n}{2}\right)+O(1)\quad&&\implies O(n) \\  
T(n)&=2T\left(\frac{n}{2}\right)+O(n)\quad&&\implies O(n\log n)  
\end{align*}
$$
### Concept
Fibonacci as a recurrance relation
$$
\begin{align*}
F(n)&=F(n-1)+F(n-2) \\
F(5)&=F(4)+F(3)=\dots
\end{align*}
$$

Factorial
$$
\begin{align*}
F(n)&=n\cdot F(n-1) \\
F(5)&=5\cdot F(4)=\dots
\end{align*}
$$

[Binary search](/labyrinth/notes/cs/cs1101s/searching#^e5eb03)
$$
T(n) = T\left( \frac{n}{2} \right) + O(1)
$$

[Merge sort](/labyrinth/notes/cs/cs1101s/sorting#^98f7dd)
$$
T(n) = 2\cdot T\left( \frac{n}{2} \right) + O(n)
$$
### Application
Deriving recurrance relations, using [arithmetic](/labyrinth/notes/math/ma1301/arithmetic_series) and [geometric](/labyrinth/notes/math/ma1301/geometric_series) progression
- Linear
$$
\begin{align*}
T(n) & = T(n-1) + O(1) \\
& = \underbrace{ O(1) + O(1) + \dots + O(1) }_{ \times n } \\
\\
\therefore \ & O(1) \times n = O(n) \\
\\
T(n) & = T(n-1) + O(n) \\
& = \underbrace{ O(n) + O(n-1) + \dots + O(1) }_{ \times n } \\
\\
\therefore \ & \frac{n}{2}(O(1)+O(n)) = O\left( \frac{n+n^2}{2} \right) \implies O(n^2) \\
\\
T(n) & = T(n-1) + O(\log n) \\
& = \underbrace{ O(\log n) + O(\log(n-1)) + \dots + O(\log 1) }_{ \times n } \\
\\
\therefore \ & \frac{n}{2}(O(\log 1) + O(\log n)) = O\left( \frac{n\log n}{2} \right) \implies O(n\log n) \\
\\
T(n) & = 2T(n-1) + O(1) \\
& = \underbrace{ O(1) + 2O(1) + \dots + 2^nO(1) }_{ \times n } \\
\\
\therefore \ & \frac{O(1)(2^n-1)}{2-1} = O(2^n-1) \implies O(2^n) \\
\end{align*}
$$
- Binary
$$
\begin{align*}
T(n) & = T\left( \frac{n}{2} \right) + O(1) \\
& = \underbrace{ O(1) + O(1) + \dots + O(1) }_{ \times \log_{2} n } \\
\\
\therefore \ & O(1) \times \log_{2} n = O(\log_{2} n) \implies O(\log n) \\
\\
T(n) & = T\left( \frac{n}{2} \right) + O(n) \\
& = \underbrace{ O(n) + O\left( \frac{n}{2} \right) + \dots + O(2) + O(1) }_{ \times \log_{2} n } \\
\\
\therefore \ & \frac{O(1)(2^{\log_{2} n}-1)}{2-1} = O(2^{\log_{2} n}-1) = O(n-1) \implies O(n) \\
\\
T(n) & = 2T\left( \frac{n}{2} \right) + O(1) \\
& = \underbrace{ O(1) + 2O(1) + \dots + 2^{\log_{2}n}O(1) }_{ \times \log_{2} n } \\
\\
\therefore \ & \frac{O(1)(2^{\log_{2} n}-1)}{2-1} = O(2^{\log_{2} n}-1) = O(n-1) \implies O(n) \\
\\
T(n) & = 2T\left( \frac{n}{2} \right) + O(n) \\
& = O(n) + 2O\left( \frac{n}{2} \right) + 4O\left( \frac{n}{4} \right) + \dots + 2^{\log_{2}n}O\left( \frac{n}{2^{\log_{2} n}} \right) \\
& = \underbrace{ O(n) + O(n) + O(n) + \dots + O(n) }_{ \times \log_{2} n } \\
\\
\therefore \ & O(n) \times \log_{2} n = O(n\log_{2} n) \implies O(n\log n) \\
\end{align*}
$$

Math Note
$$
2^{\log_{2}n} = n, \ \frac{n}{2^{\log_{2}n}} = 1
$$