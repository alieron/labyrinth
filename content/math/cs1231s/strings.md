---
tags:
- cs1231s/chapter0
- math/set_theory
complete: true
index: null
---
### Summary
Alphabet
- finite set of symbols

String
- finite sequence of symbols from an alphabet

Language ^f0c868
- a set of strings over an alphabet
### Application
Example
$$
\begin{gather*}
\Gamma=\{ \verb|A|,\verb|B|,\dots,\verb|Z|,\verb|0|, \verb|1|,\dots, \verb|9| \} \text{ and } \Psi=\{ \verb|A|,\verb|B|,\dots,\verb|Z|,\verb|a|,\verb|b|,\dots,\verb|z| \} \text{ are alphabets}\\
\\
\verb|A|,\verb|B|,\verb|0|, \verb|1|, \verb|a|,\verb|b|\text{ are strings}\\
\\
\Gamma^*\text{ is a language over }\Gamma\\
\\
\verb|CS1231S|\text{ is a string over }\Gamma, \ \verb|CS1231S|\in \Gamma^*\\
\verb|CS1231S|\text{ is not a string over }\Psi, \ \verb|CS1231S|\not\in \Psi^*\\
\end{gather*}
$$
> a language is like a power set with repetition