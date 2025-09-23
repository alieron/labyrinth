---
tags:
  - cs2107/chapter3
  - cs/security
complete: false
next: /labyrinth/notes/cs/cs2107/MFA
prev: /labyrinth/notes/cs/cs2107/authentication

---
### Summary
Password system
- **Bootstrapping**: establishing first password (account setup)
- **Authentication**: verifying user with stored password file
- **Reset**: recovery when password forgotten

Dictionary attacks
- online -> attacker must interact with an authentication system/server
	- slow
	- can have limited attempts
- offline -> without the need to interact with the system
	- limited only by the attacker's computing power

Password entropy
- quantify the strength of a password
- minimum number of bits that uniquely identify each password

$$
E = L \log_{2}N
$$
> [RFC 4086](https://datatracker.ietf.org/doc/html/rfc4086): 50 bits of entropy to prevent online dictionary attacks, 128 bits for offline dictorary attacks
### Concept
Credential
- information bound to the owner
- the owner needs to convince the verifier that they have access to that information

Attacks
- **bootstrapping attacks**
	- default passwords -> wifi routers
	- interception -> Zoom hacks
- **password reset attacks**
	- recovery email compromise
	- weak security questions
	- social engineering, deducing the password
- **searching for passwords**
	- guessing
	- dictionary -> list of commonly used passwords
	- exhaustive search
- **stealing passwords**
	- sniffing (network capture)
	- keylogging
	- phishing/spear phishing
	- stolen password file -> server side

Strengthening passwords
- strong policies (length, complexity, no reuse)
- salting + key derivation functions (e.g. PBKDF2, bcrypt)
- two-factor authentication (augment passwords)
### Application
