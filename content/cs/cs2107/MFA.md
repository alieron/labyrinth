---
tags:
  - cs2107/chapter3
  - cs/security
complete: true
prev: /labyrinth/notes/cs/cs2107/passwords
next: /labyrinth/notes/cs/cs2107/PKC

---
### Summary
MFA - Multi-Factor Authentication
- use of >=2 factors for authentication
- examples:
	- password (knowledge) + SMS OTP (possession)
	- smart card (possession) + fingerprint (biometric)
	- ATM: card + PIN

MSA - Multi-Step Authentication
- use of multiple steps, but not necessarily multipe factors
- examples:
	- email password + email OTP (both knowledge)
	- Google 2-step verification (password + push notification)
### Concept
Authentication factors
1. **something you know**: password, PIN, OTP
2. **something you have**: card, token, phone
3. **something you are**: biometrics (fingerprint, face)

Biometrics
- errors:
	- **FMR** (False Match Rate) - accepted false matches
	- **FNMR** (False Non-Match Rate) - rejected genuine matchs
	- **EER** (Equal Error Rate)
![[biometric_match.png]]

Biometric attacks
- spoofing - using a photo or fake fingerprint
	- mitigate with liveness detection
- sensor bypass