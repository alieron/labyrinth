---
tags:
  - cs2107/chapter1
  - cs/security
complete: false
next: /labyrinth/notes/cs/cs2107/encryption

---
### Summary
##### Security trade-off
Ease-of-use <-> Performance <-> Cost

Common Vulnerabilities and Exposures(CVE)
- public repo of vulnerabilities
- zero-day: not yet published
- eg. Log4j: [CVE-2021-44832](https://www.cve.org/CVERecord?id=CVE-2021-44832)

Adversarial thinking
- always assume there are malicious actors trying to compromise the system
### Concept
##### CIA
Confidentiality
- assurance that an asset is viewed only by authorised parties
- prevent unauthorized disclosure of information
- anonymity/privacy
- eg. leaking exam results

Integrity
- assurance that an asset is modified only by authorised parties
- prevent unauthorized modification of **information** or **processes**
- deepfake detection
- eg. modifying exam results

Availability
- assurance that an asset is available to any authorised party at any time
- prevent unauthorized withholding of information or resources
- eg. DDoS attacks

Authenticity
- assurance that an asset is from the source it claims to be

Non-repudiation
- assurance that a user can't deny having sent the message

Characters
- **Alice** and **Bob**: generic users
- **Eve**: eavesdropper
- **Mallory**: malicious attacker
### Extra
- accountability -> system log
- traitor-tracing -> watermarks
- plausible deniability

Threat - circumstances that can potentially cause harm
Vulnerability - weaknesses in the system
Control - security mechanism meant to counter threats
> **threat** blocked by **controlling** a **vulnerability**
