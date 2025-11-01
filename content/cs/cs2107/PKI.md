---
tags:
  - cs2107/chapter4
  - cs/security
complete: false
prev: /labyrinth/notes/cs/cs2107/cryptographic_hashing
next: /labyrinth/notes/cs/cs2107/channel_security

---
### Summary
Attacks on PKI
- **implementation bugs:** null-byte parsing vulnerability in OpenSSL certificate names
- **CA compromise:** rogue CA issuing false certificates
- **social engineering:** typosquatting, homograph, and subdomain spoofing to mimic trusted sites
- **too many root CAs:** weakens global trust — any one compromised CA can issue fake certificates

Revocation
- certificates can be revoked before expiry (e.g. key compromised, entity closed, CA hacked)
- mechanisms:
    - **CRL (Certificate Revocation List):** signed list of revoked certs
    - **OCSP (Online Certificate Status Protocol):** real-time query to verify if a certificate is still valid
### Concept
Public Key Infrastructure(PKI)
- since [PKC](/labyrinth/notes/cs/cs2107/public_key_cryptography) requires a secure broadcast channel to distribute public keys
- ensure that public keys are authentic

Certificate Authority(CA)
- **trusted third party** that issues and signs certificates
- maintains a verified directory of identity -> public key mappings

Certificates
- digital document that binds a _name_ to a _public key_
- digitally signed by a CA
- fields:
    - name (e.g. `www.nus.edu.sg`)
    - public key
    - validity period
    - signature by CA (authenticity)
    - usage info (encryption, signing, CA authority, etc.)  
- **standard:** ITU-T X.509

Self-signed certificates
- signed by its owner
- needs user to manually accept

CA chain
- **root CAs** are pre-installed in browsers/OS, used to sign other CAs
	- `root CA(self signed)` -> `intermmediate CA` -> `end-entity CA`