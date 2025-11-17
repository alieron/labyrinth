---
tags:
  - cs2107/chapter6
  - cs/security
  - cs/web
complete: false
prev: /labyrinth/notes/cs/cs2107/XSRF
next: /labyrinth/notes/cs/cs2107/control-flow_integrity

---
### Summary
Premise
- TLS _renegotiation_ is enabled (supported in older TLS versions, pre-[RFC 5746](https://www.ietf.org/rfc/rfc5746.txt))
- client thinks it is talking securely to the server; server accepts renegotiation mid-session
- MITM attacker is positioned between client and server
- server does not bind pre-renegotiation data to the authenticated session

Attack
1. attacker starts a TLS connection with the server
2. attacker sends arbitrary data to the server _as if it came from the client_
3. attacker then **renegotiates the TLS session** and forwards the client’s legitimate handshake
4. after renegotiation, the server sees the connection as authenticated and binds attacker-injected data with the victim’s identity
5. server processes attacker’s prefix as part of the client’s request (e.g., HTTP request prefix)
    
Attacker’s Goals
- Inject commands into an authenticated TLS connection.
- Perform actions **as the victim**, even though victim never sent those commands.
- Hijack HTTP requests, WebDAV commands, or SMTP/IMAP commands.
- Bypass authentication or authorization checks.

Defense
- **Disable insecure renegotiation** (default in modern servers).
- Apply **RFC 5746 (Secure Renegotiation)**:
    - Binds pre-renegotiation data into the handshake transcript.
- Disable renegotiation entirely unless absolutely required.
- Use modern TLS (1.2+ or 1.3):
    - TLS 1.3 removes renegotiation completely.  
- At the application layer, enforce strict message framing and authentication on every operation.
### Concept
TLS renegotiation
- allows client/server to initiate a new session from an existing session

TLS renegotiation attack
- impersonate the client as MITM