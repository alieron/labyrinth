---
tags: []
complete: false
next: /labyrinth/notes/cs/lambda_calculus/β-reduction

---
### Summary
Rules
$$
\begin{align*}
\text{Left-Assiciative Application:} &&& (M \ N) \ L \equiv M \ N \ L \\
\\
\text{Right-Associative Abstraction:} &&& \lambda x. \ (\lambda y. M) \equiv \lambda x. \ \lambda y. \ M \\
\\
\text{Application Precedes Abstraction:} &&& \lambda x. \ (M \ N) \equiv \lambda x. \ M \ N
\end{align*}
$$
> mostly for omitting extra parentheses
### Concept
#### Untyped lambda calculus
- everything is a λ-term

$$
\begin{align*}
\text{Variable:}&&& x \in V \implies x \in \Lambda \\
\\
\text{Application:}&&&M, N \in \Lambda \implies (M \ N) \in \Lambda \\
\\
\text{Abstraction:}&&& x \in V \land M \in \Lambda \implies (\lambda x. \ M) \in \Lambda
\end{align*}
$$
#### Free and Bound variables
- application creates a **bound variable**
- rest within the term are free

$$
\begin{align*}
\text{Variable:}&&& FV(x) = \{ x \} \\
\\
\text{Application:}&&& FV(M \ N) = FV(M) \cup FV(N) \\
\\
\text{Abstraction:}&&& FV(\lambda x. \ M) = FV(M) \setminus \{ x \}
\end{align*}
$$

Substitution
- substituting free occurrences of variables(at the variable level)

$$
\begin{align*}
\text{Variable:}&&& x[x:=N] \equiv N \\
&&& y[x:=N] \equiv y\text{ if }x\not\equiv y  \\
\\
\text{Application:}&&& (P \ Q)[x:=N] \equiv (P[x:=N])(Q[x:=N]) \\
\\
\text{Abstraction:}&&& (\lambda y. \ P)[x:=N]\equiv \lambda y. \ (P[x:=N]) \text{ if }y \not\in FV(N)
\end{align*}
$$

α-conversion
- avoid situations where the save variable is both free and bound in an expression

$$
M, N \in \Lambda, \ M\equiv_{\alpha} N \iff \text{}
$$
> rename bound variables in λ-term such that they differ from free variables

Identity
- returns the input

$$
\lambda x. \ x
$$

Little ω

### Application
Free variables of a lambda term
$$
\begin{align*}
FV(\lambda x. \ x \ y) & = FV(x \ y)\setminus \{ x \} \\
&= (FV(x)\cup FV(y))\setminus \{ x \} \\
&= (\{ x \}\cup \{ y \})\setminus \{ x \} \\
&=\{ y \}
\end{align*}
$$