---
tags:
  - cs/lambda_calc
  - math/logic
complete: true
prev: /labyrinth/notes/cs/lambda_calculus/λ-calculus
next: /labyrinth/notes/cs/lambda_calculus/church_numerals

---
### Concept
#### Booleans
- as [curried functions](/labyrinth/notes/cs/cs1101s/higher_order_functions#^3ffd84) that select one of the inputs

$$
\begin{align*}
true &= \lambda t. \ \lambda f. \ t \\
false &= \lambda t. \ \lambda f. \ f \\
\end{align*}
$$
#### [Propositions](/labyrinth/notes/math/cs1231s/propositions)
- `not`: if `p` is true, return false, otherwise true

$$
not = \lambda p. \ p \ false \ true
$$

- `and`: if `p` is true, return `q`, otherwise false

$$
and = (\lambda p. \ (\lambda q. \ p \ q \ false))
$$

- `or`: if `p` is true, return true, otherwise `q`

$$
or = (\lambda p. \ (\lambda q. \ p \ true \ q))
$$
### Application
Reduction of the `not` function
$$
\begin{align*}
not \ true & = (\lambda a. \ a \ false \ true) \ true \\
&= true \ false \ true \\
&= (\lambda t. \ \lambda f. \ t ) \ false \ true \\
&= (\lambda f. \ false) \ true \\
&= false 
\end{align*}
$$