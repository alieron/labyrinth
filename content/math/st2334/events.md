---
tags:
  - st2334/chapter1
  - math/set_theory
complete: true
next: /labyrinth/notes/math/st2334/counting_II

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

Fair die
$$
\begin{gather*}
S = \{ 1,2,3,4,5,6 \} \\
\\
E_{odd} = \{ 1,3,5 \} \quad E_{even} = \{ 2,4,6 \}
\end{gather*}
$$

Two dice
$$
\begin{gather*}
S = & \begin{gathered}
\{ & (1,1), & (1,2), & (1,3), & (1,4), & (1,5), & (1,6), \\
& (2,1), & (2,2), & (2,3), & (2,4), & (2,5), & (2,6), \\
& (3,1), & (3,2), & (3,3), & (3,4), & (3,5), & (3,6), \\
& (4,1), & (4,2), & (4,3), & (4,4), & (4,5), & (4,6), \\
& (5,1), & (5,2), & (5,3), & (5,4), & (5,5), & (5,6), \\
& (6,1), & (6,2), & (6,3), & (6,4), & (6,5), & (6,6)\ & \}
\end{gathered} & \text{order is significant} \\
\\
S = & \begin{gathered}
\{ & \{ 1,1 \}, & \{ 1,2 \}, & \{ 1,3 \}, & \{ 1,3 \}, & \{ 1,5 \}, & \{ 1,6 \}, \\
& & \{ 2,2 \}, & \{ 2,3 \}, & \{ 2,4 \}, & \{ 2,5 \}, & \{ 2,6 \}, \\
& & & \{ 3,3 \}, & \{ 3,4 \}, & \{ 3,5 \}, & \{ 3,6 \}, \\
& & & & \{ 4,4 \}, & \{ 4,5 \}, & \{ 4,6 \}, \\
& & & & & \{ 5,5 \}, & \{ 5,6 \}, \\
& & & & & & \{ 6,6 \}\ & \}
\end{gathered} & \text{order is insignificant}
\end{gather*}
$$
> note the difference in notation between sets and [tuples](/labyrinth/notes/math/cs1231s/n-ary_relations#^81cdfc)