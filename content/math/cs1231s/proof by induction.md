---
tags:
- cs1231s/chapter1
- math/logic
complete: false
index: null
---
[Previous](/labyrinth/notes/math/cs1231s/fundemental_methods_of_proof)   [Next](/labyrinth/notes/math/cs1231s/sets)
### Summary
First principle of mathematical induction(1PI)
- for [well-ordered sets](/labyrinth/notes/math/cs1231s/ordering#^deafe6), such as $\mathbb{Z}$

$$
\begin{gather*}
with \ predicate \ P(n), \ and \ n \in \mathbb{Z} , \ b\in \mathbb{Z} \\
\\
(P(b) \land \forall k\in \mathbb{Z} \ P(k) \to P(k+1))) \to (\forall n \in \mathbb{Z} \ n\geq b \to P(n))
\end{gather*}
$$
$$
\begin{align*}
& P(b) \\
& P(b) \to P(b+1) \\
\hline
\bullet \ &P(b+1) \\
& P(b+1) \to P(b+2) \\
\hline
\bullet \ &P(b+2) \\
& \vdots \\
\hline
\bullet \ &P(n) \ for \ any \ n\geq b \\
\end{align*}
$$
$$
\begin{align*}
& \text{Claim: } P(n), \ for \ any \ n\geq b\\
\\
& \text{Basis: Prove the claim is true for }n=b \\
\\
& \text{Induction Hyp.: Assume the claim is true for }n=k\text{, for some }k\geq b \\
\\
& \text{Induction Step: Consider }n = k+1 \\
& \text{Use I.H. to prove that the claim is true recursively} \\
\\
& \therefore \text{Claim is true }\forall n, \ n\geq b
\end{align*}
$$

Second principle of mathematical induction(2PI)
- strong induction
- when the statement relies on several previous cases

$$
\begin{align*}
& P(b) \land P(b+1) \land \dots\land P(c) \\
& P(b) \land P(b+1) \land \dots\land P(c) \to P(c+1) \\
\hline
\bullet \ &P(c+1) \\
\\
& P(b) \land P(b+1) \land \dots\land P(c)\land P(c+1) \\
& P(b) \land P(b+1) \land \dots\land P(c)\land P(c+1) \to P(c+2) \\
\hline
\bullet \ &P(c+2) \\
& \vdots \\
\hline
\bullet \ &P(n) \ for \ any \ n\geq b  \\
\end{align*}
$$
$$
\begin{align*}
& \text{Claim: } P(n), \ for \ any \ n\geq b\\
\\
& \text{Basis: Prove the claim is true for }n=b,\ b+1,\ \dots ,\ c\\
\\
& \text{Induction Hyp.: Assume the claim is true for }b\leq n\leq k\text{, for some }k\geq c \\
\\
& \text{Induction Step: Consider }n = k+1 \\
& \text{Use I.H. to prove that the claim is true recursively} \\
\\
& \therefore \text{Claim is true }\forall n, \ n\geq b
\end{align*}
$$
### Application
1PI, generalisation of De Morgan's law
$$
\begin{align*}
& \text{Claim: }\sim(p_{1}\land p_{2}\land\dots\land p_{n})\equiv (\sim p_{1})\lor(\sim p_{2})\lor\dots\lor(\sim p_{n}), \ for \ any \ n\geq 2 \\
\\
& \text{Basis: } \\
&\quad\begin{split}
&n = 2 \\
&\sim(p_{1}\land p_{2})\equiv (\sim p_{1})\lor(\sim p_{2}) &\qquad&& \text{(De Morgan's Law)} \\
\end{split} \\
\\
& \text{Induction Hyp.: Assume the claim is true for }n=k\text{, for some }k\geq 2 \\
\\
& \text{Induction Step: Consider }n = k+1 \\
&\quad\begin{split}
\sim(p_{1}\land p_{2}\land\dots\land p_{k} \land p_{k+1}) & \equiv \sim((p_{1}\land p_{2}\land\dots\land p_{k}) \land p_{k+1}) &\qquad&\text{(Associativity)} \\
& \equiv \sim(p_{1}\land p_{2}\land\dots\land p_{k}) \lor (\sim p_{k+1}) && \text{(De Morgan's Law/Basis)} \\
& \equiv (\sim p_{1})\lor(\sim p_{2})\lor\dots\lor(\sim p_{k}) \lor (\sim p_{k+1}) && \text{(Induction Hypothesis)}
\end{split} \\
\\
&\quad \text{Since the claim is true for }n=k\text{ the claim is also true for }n=k+1 \\
\\
& \therefore \text{Claim is true, } n\geq 2
\end{align*}
$$

2PI, fundemental theorem of arithmetic
- every integer can be expresses as a product of prime numbers

$$
\begin{align*}
& \text{Claim: } \forall n\in \mathbb{Z} \ n\geq2\to \exists k \in \mathbb{Z} \ n= \prod_{i=1}^k p_{i}^{r_{i}}, \ where \ p_{i}^{r_{i}} \ is \ the \ power \ of \ a \ prime \ number \\
\\
& \text{Basis: } \\
&\quad \begin{split}
&n=2 \\
&\text{Claim is true, 2 is prime}
\end{split} \\
\\
& \text{Induction Hyp.: Assume the claim is true for }2\leq n\leq k \\
&\quad n\text{ can be expressed as a product of prime numbers} \\
\\
& \text{Induction Step: Consider }n = k+1 \\
&\quad \begin{split}
&\text{Case 1:} \\
&\quad\begin{split}
&k+1\text{ is prime} \\
&\text{Claim is true}
\end{split} \\
\\
&\text{Case 2:} \\
&\quad\begin{split}
&k+1\text{ is not prime, then it is a composite} \\
&k+1 = ab, \ 1<a\leq b< k+1 \\
& 2\leq a\leq b\leq k \\
&a,\ b\text{ can be expressed as a product of prime numbers} &\quad&& \text{(Induction Hypothesis)} \\
&\text{Claim is true}
\end{split} \\
\end{split} \\
\\
& \therefore \text{Claim is true }\forall n, \ n\geq b
\end{align*}
$$

2PI, CNF

###### Extra

