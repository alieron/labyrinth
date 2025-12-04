---
tags: []
complete: false
---
### Summary
Premise
- CA infrastructure has inadequate security (weak PKI hygiene, poor isolation, unpatched systems).
- Attacker obtains access to CA signing keys or CA internal system.
- The CA is trusted by browsers/OS.

Attack
- Extracts the CA’s private signing key or forces CA server to sign certificates.
    
- Issues valid certificates for arbitrary domains (e.g., google.com).
    
3. Uses them in MITM attacks (e.g., via DNS poisoning, BGP hijacking, or Wi-Fi MITM).
    

Attacker’s Goals

- Impersonate any HTTPS site trusted by that CA.
    
- Intercept and decrypt secure communications.
    
- Launch large-scale MITM attacks invisibly.
    

Defense

- Hardware Security Modules (HSM) for private key storage.
    
- Strong internal access control and monitoring.
    
- Certificate Transparency (CT) logs — public audit of all certificates.
    
- Browser/OS vendors “distrust” CAs that misbehave (Chrome Root Program).
    
- Key ceremony & strict physical/process security.

### Concept
