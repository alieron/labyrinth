---
tags:
- cs1231s
- math/number_theory
- math/set_theory
complete: true
---
### Summary
$$
\begin{align*}
\mathbb{N}&: \{ 0,1,2,3,\dots \} &&\text{Natural Numbers}\\
\\
\mathbb{Z}&: \{ \dots , -2, -1, 0,1,2,\dots \} &&\text{Integers} \\
\\
\mathbb{Q}&: \left\{  \frac{a}{b} \ \middle|\ a,b \in \mathbb{Z} \ b \neq 0 \right\} \quad ie. \ 0, -\frac{7}{4}, \frac{5}{1}=5 &&\text{Rational Numbers}\\
\\
\mathbb{R}&: \quad ie. \ \sqrt{ 2 }, \pi, e &&\text{Real Numbers}\\
\\
\mathbb{C}&: \{ a+bi \ |\ a,b\in \mathbb{R} \} \quad ie. \ 0, 1+2i &&\text{Complex Numbers}
\end{align*}
$$
### Concept
In the context of `cs1231s` $\mathbb{N}$ includes 0

Note for `cs1231s`:
$$
\begin{align*}
\text{Subset}&: A \subseteq B && A\text{ is a subset of }B\text{ in place of}\subset\\
\text{Set Difference}&: A-B && \text{Set difference between }A\text{ and }B\text{ in place of}\setminus
\end{align*}
$$

Superscripts and subscripts
$$
\begin{align*}
\mathbb{Z}^+ &: \ \text{Positive Integers} \quad \{ 1, 2, 3, \dots \} \\
\mathbb{R} ^- &: \ \text{Negative Real Numbers} \\
\mathbb{Z}_{\geq_{12}} &: \ \text{Integers greater than or equal to 12}
\end{align*}
$$
### Application
Combinations, using [set notation](/labyrinth/notes/math/cs1231s/sets#^490492)
$$
\begin{align*}
\mathbb{N} &= \mathbb{Z}^+ \cup \{ 0 \} && \text{Natural Numbers are made up of Positive Integers and 0} \\
\mathbb{Q'} &= \mathbb{R} - \mathbb{Q} && \text{Irrational Numbers is the set difference between Real and Rational Numbers}
\end{align*}
$$

Subsets among special sets
$$
\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}
$$

Definition of rational and irrational numbers ^9f1e5d
$$
\begin{gather*}
r\text{ is rational} \iff \exists a,b\in \mathbb{Z} \ \mathrm{s.t.}\ r=\frac{a}{b}\text{ and }b\neq 0\\
r\text{ is irrational} \iff r\in \mathbb{R}\text{ but }r\ni\mathbb{Q}
\end{gather*}
$$