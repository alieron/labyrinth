---
tags:
  - cs2107/chapter6
  - cs/security
  - cs/web
complete: false
prev: /labyrinth/notes/cs/cs2107/cookies
next: /labyrinth/notes/cs/cs2107/CSRF

---
### Summary
Premise
- user can set some string, which gets reflected in the reply HTML
- instead replace the string with a script
- script gets run on the clientside

Attack
- attacker tricks user to click on malicious link, with the script embedded
- browser sends request to legitimate site + payload
- server responds with HTML with the script
- browser executes the attacker's script under the [same origin](/labyrinth/notes/cs/cs2107/cookies#^9e7788)

Attacker's goal
- steal [cookies](/labyrinth/notes/cs/cs2107/cookies)
- deface the original website for [other attacks](/labyrinth/notes/cs/cs2107/web_security#^f62abd)
- use HttpOnly cookies, prevent Javascript from accessing session data

Defense
- input-validation by the server before responding
- escape script characters, ie. `<`, `>
### Concept
Cross Site Scripting(XSS)
- exploits **client's trust of the server**
- types:
	- **reflection** - non-persistent
	- **stored** - script saved on server(persistent)