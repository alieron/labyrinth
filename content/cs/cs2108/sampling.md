---
tags:
  - cs2108/chapter7
  - math/analysis
complete: false
prev: /labyrinth/notes/cs/cs2108/impulse_train
next: /labyrinth/notes/cs/cs2108/discrete_cosine_transform

---
### Concept


| x(t) | time domain signal                     | -CTFT-> | X(om) | freq domain, non periodic  |
| ---- | -------------------------------------- | ------- | ----- | -------------------------- |
|      | point-wise mult                        |         |       | *                          |
| x[n] | impulse train                          | -CTFT-> | X[k]  | impulse train(freq domain) |
|      | V                                      |         |       | V                          |
| x[n] | discrete samples of time domain signal | -DTFT-> | X[k]  | freq domain, periodic      |


Low pass filtering
- interpolating the time domain
- remove high frequencies
- smoothing it out, as long as no [aliasing](/labyrinth/notes/cs/cs2108/aliasing)