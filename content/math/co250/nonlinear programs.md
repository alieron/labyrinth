---
tags:
  - co250/chapter1
  - math/optimization
complete: false
prev: /labyrinth/notes/math/co250/graph_optimization_models
next: /labyrinth/notes/math/co250/LP_outcomes

---
### Concept
A nonlinear program (NLP) has form
$$\min f(x)\quad\text{s.t.}\quad g_i(x)\le0\ (i=1,\ldots,m).$$
It includes LP and can encode binary integrality by $x_j(1-x_j)=0$ or general integrality by $\sin(\pi x_j)=0$. Examples include Euclidean projection,
$$\min\{\|x-\bar x\|_2:x\in P\},$$
and sum-of-squares constructions whose value is zero exactly when a system holds. Generality does not imply tractability; these encodings transfer IP hardness to NLP.

### Application
NLP represents distance, nonlinear physics, and curved feasible regions. Convex structure, developed in [convex nonlinear programs](/labyrinth/notes/math/co250/convex_nonlinear_programs), is what restores useful guarantees.
