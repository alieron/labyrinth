---
tags:
  - cs2107/chapter6
  - cs/security
  - cs/web
complete: false
prev: /labyrinth/notes/cs/cs2107/XSS
next: /labyrinth/notes/cs/cs2107/SSL_renegotiation

---
### Summary
Attack
- attacker tricks user to visit a website with some request
- if the user is authenticate with that website, the request will go through

$$
\verb|https://www.bank.com/transfer?to=Bob&amount=1000|
$$

Attacker's goals
- trigger unwanted authentication action

Defense
- include something unpredictable in the URL, ie. token

$$
\verb|https://www.bank.com/transfer?to=Bob&amount=1000&token=7fae12d
|
$$
### Concept
Cross Site Request Forgery(CSRF)
- exploits **server's trust of the client**