---
tags:
- cs1231s/chapter1
- math/logic
complete: true
prev: /labyrinth/notes/math/cs1231s/quantifications
next: /labyrinth/notes/math/cs1231s/proof_by_induction
---
   
### Summary
Proving [implications](/labyrinth/notes/math/cs1231s/conditionals#^8a163c)
- direct proof using [modus ponens](/labyrinth/notes/math/cs1231s/rules_of_inference#^c19fcd)

$$
\begin{align*}
& \text{Claim: } p\to q \\
\\
& \text{Assume }p\text{ is true} \\
& \text{Show that }q\text{ is also true} \\
\\
& \therefore \text{Claim is true}
\end{align*}
$$

- proof by contradiction, very little information

$$
\begin{align*}
& \text{Claim: } p \\
\\
& \text{Suppose that }p\text{ is false} \\
\\
& \text{Assume }\sim p \text{ is true} \\
& \text{Show that it results in a contradiction} \\
\\
& \therefore \text{Claim is true}\\
\\
or \\
\\
& \text{Claim: } p\to q \\
\\
& \text{Suppose that }p\to q\text{ is false} \\
\\
& \text{Assume }\sim(p\to q) \equiv p\land {\sim q}\text{ is true} \\
& \text{Show that it results in a contradiction} \\
\\
& \therefore \text{Claim is true}
\end{align*}
$$

- proof by contrapositive using [modus tollens](/labyrinth/notes/math/cs1231s/rules_of_inference#^84d8f9)

$$
\begin{align*}
& \text{Claim: } p\to q \\
\\
& \text{Assume }\sim q\text{ is true} \\
& \text{Show that }\sim p\text{ is also true} \\
\\
& \therefore \text{Claim is true}
\end{align*}
$$

Counter-example (disprove)
$$
\begin{align*}
& \text{Claim: } p\to q \\
\\
& \text{Find a case where }p\text{ is true} \\
& \text{Show that }p\text{ is false} \\
\\
& \therefore \text{Claim is false}
\end{align*}
$$

Proving [biconditonals](/labyrinth/notes/math/cs1231s/conditionals#^a1e708)
- prove the implication in both directions

$$
\begin{align*}
& \text{Claim: } p\leftrightarrow  q \\
\\
& (\to) \text{ Assume }p\text{ is true} \\
& \text{Show that }q\text{ is also true} \\
\\
& (\leftarrow) \text{ Assume }q\text{ is true} \\
& \text{Show that }p\text{ is also true} \\
\\
& \therefore \text{Claim is true}
\end{align*}
$$

- proving logical equivalences

$$
(p\equiv q)\leftrightarrow ((p\leftrightarrow q)\equiv {\color{aqua} \mathbf{t}} )
$$

Proof by cases
$$
\begin{align*}
& \text{Claim: } \forall x \in D \ Q(x) \\
\\
& \text{Break }D\text{ up into smaller sub-domains, }D_{1}, D_{2},\dots \\
\\
& \text{Case 1: } x \in D_{1} \\
& \text{Show that }Q(x)\text{ is true} \\
\\
& \text{Case 2: } x \in D_{2} \\
& \text{Show that }Q(x)\text{ is true} \\
\\
& \text{...} \\
\\
& \therefore \text{Claim is true}
\end{align*}
$$
### Concept
Builds upon the [rules of inference](/labyrinth/notes/math/cs1231s/rules_of_inference) 

Universal instantiation
- if true for all, then true for one instance

$$
\begin{align*}
& \forall x \in D \ Q(x) \\
& c \in D \\
\hline
\bullet \ &Q(c)
\end{align*}
$$

Existential generalization
- if true for one, then there exists one or more

$$
\begin{align*}
& Q(c)\\
&  c\in D\\
\hline
\bullet \ &\exists x \in D \ Q(x) 
\end{align*}
$$

Quantified statements in conditional form
$$
\begin{align*}
\forall x \in D \ Q(x) & \equiv \forall x (x\in D \to Q(x)) \\
\\
\exists x\in D \ Q(x) & \equiv \exists x(x\in D \land Q(x))
\end{align*}
$$
### Application
Pigeonhole principle, if there are more cards then boxes, then there is a(at least one) box with more than one card ^f49094
- general
- no ordering

$$
\begin{align*}
& \text{Claim: } \forall B \in \mathbb{Z}^+ \ \forall C\in \mathbb{Z}^+ \ (B<C)\to \exists i\in \{ 1,\dots,B \} \ n_{i}>1 \\ 
&\quad\begin{split}
&n_{i} \ is \ the \ number \ of \ cards \ in \ box \ i \\
&C = n_{1} + \dots + n_{B}
\end{split} \\
\\
& \text{Suppose that the claim is false} \\
&\quad\begin{split}
\sim (\forall B \in \mathbb{Z}^+ \ \forall C\in \mathbb{Z}^+ \ (B<C)\to \exists i\in \{ 1,\dots,B \} \ n_{i}>1) & \equiv \exists B \in \mathbb{Z}^+ \ \exists C\in \mathbb{Z}^+ \ \sim((B<C)\to \exists i\in \{ 1,\dots,B \} \ n_{i}>1) \\
& \equiv \exists B \in \mathbb{Z}^+ \ \exists C\in \mathbb{Z}^+ \ (B<C)\land \sim(\exists i\in \{ 1,\dots,B \} \ n_{i}>1) \\
& \equiv \exists B \in \mathbb{Z}^+ \ \exists C\in \mathbb{Z}^+ \ (B<C)\land \forall i\in \{ 1,\dots,B \} \ n_{i}\leq1 \\
\end{split} \\
\\
& \text{Assume negation, }(B<C)\land \forall i\in \{ 1,\dots,B \} \ n_{i}\leq1\text{ is true } \\
&\quad \begin{split}
n_{1} + \dots + n_{B} &\leq 1+\dots+1 \\
C &\leq B
\end{split} \\
\\
&\quad \text{Contradicts }B<C \\
\\
& \therefore \text{Negation is false, claim is true}\\
\end{align*}
$$
