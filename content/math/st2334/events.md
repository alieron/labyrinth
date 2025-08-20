---
tags:
  - st2334/chapter1
  - math/set_theory
complete: true
next: /labyrinth/notes/math/st2334/counting

---
### Summary
Rules
$$
\begin{align*}
\text{Complement:} &&& A \cap A'  = \varnothing \\
&&& A \cup A' = S \\
&&& (A')' = A \\
\\
\text{De Morgan's Law:} &&& (A \cup B)' = A' \cap B' && (A \cup B \cup C \cup \dots)' = A' \cap B' \cap C' \cap \dots \\
&&& (A \cap B)' = A' \cup B' && (A \cap B \cap C \cap \dots)' = A' \cup B' \cup C' \cup \dots
\end{align*}
$$

Relationships between events
$$
\begin{align*}
\text{Mutually Exclusive:} &&& A \cap B  = \varnothing \\
\\
\text{Contained:} &&& A \subset B \iff \forall x \in A \ x \in B \\
\\
\text{Equivalent:} &&& A = B \iff A\subset B \land B \subset A
\end{align*}
$$
> #st2334 uses $\subset$ instead of $\subseteq$ to represent an improper subset
### Concept
Sample space
- set of all possible outcomes called **sample points**
- the universal set in the context of the **statistical experiment**

Events
- any *subset* of the sample space
- **sure event** is the sample space
- **null event** is the empty set

Event operations
- [set operations](/labyrinth/notes/math/cs1231s/sets#^490492)
$$
\begin{align*}
\text{Union:} &&& A \cup B && \text{Outcomes in }A\text{ or }B\text{ or both} \\
\\
\text{Intersection:} &&& A \cap B && \text{Outcomes in }A\text{ and }B\\
\\
\text{Complement:} &&& A' && \text{Outcomes in }S\text{ not in }A
\end{align*}
$$
### Application
Coin toss
$$
\begin{gather*}
S = \{ H, T \} \\
\\
E_{H} = \{ H \} \quad E_{T}=\{ T \}
\end{gather*}
$$

Dice
$$
\begin{gather*}
S = \{ 1,2,3,4,5,6 \} \\
\\
E_{odd} = \{ 1,3,5 \} \quad E_{even} = \{ 2,4,6 \}
\end{gather*}
$$