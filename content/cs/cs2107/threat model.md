---
tags:
  - cs2107
  - cs/security
complete: false
next: /labyrinth/notes/cs/cs2107/encryption

---
### Summary
##### Security trade-off
Ease-of-use <-> Performance <-> Cost
##### Common Vulnerabilities and Exposures(CVE)
- public repo of vulnerabilities
- zero-day: not yet published
- eg. Log4j: [CVE-2021-44832](https://www.cve.org/CVERecord?id=CVE-2021-44832)
##### Adversarial thinking
- always assume there are malicious actors trying to compromise the system
### Concept
##### CIA
Confidentiality
- prevent unauthorized disclosure of information
- anonymity/privacy
- covert channel
- eg. leaking exam results

Integrity
- prevent unauthorized modification of information or processes
- non-repudiation -> author cannot dispute the validity of a transaction
- authenticity
- deepfake detection
- eg. modifying exam results

Availability
- prevent unauthorized withholding of information or resources
- eg. DDoS attacks

Authenticity
- 

Non-repudiation
### Extra
- accountability -> system log
- traitor-tracing -> watermarks
- plausible deniability

Threat - circumstances that can potentially cause harm
Vulnerability - weaknesses in the system
Control - security mechanism meant to counter threats
> **threat** blocked by **controlling** a **vulnerability**
