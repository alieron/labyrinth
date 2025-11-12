---
tags:
  - cs2107/chaoter9
  - cs/security
complete: true
prev: /labyrinth/notes/cs/cs2107/intermediate_control

---
### Summary
Premise
- system provides controlled-privilege bridges to let unprivileged users perform limited privileged actions
- bridge code contains bugs

Attack
- exploit a vulnerability in the SUID program to execute arbitrary code with elevated effective UID (root)

Attacker’s goals
- gain root/system privileges -> integrity
- access protected data -> confidentiality
- create persistent backdoors -> integrity

Defense
- minimize number and complexity of SUID/privileged bridges
- implement bridges in memory-safe languages or use tiny, well-audited C with strict bounds checks
- use capability-based mechanisms instead of full-setuid where possible (fine-grained privileges)
- code review, fuzzing and least-privilege deployment
### Concept
Controlled invocation
- users may need access to sensitive resources, which are only accessible to the superuser
- can give some applications/bridges **elevated privileges** then user can invoke these applications
- application is now responsible for access control
- eg. using `sudo` to make changes to os files

Privilege escalation
- exploits implementation bug in bridge process
- execute code as a user with higher privileges

SUID
- set user ID
- if an executable has SUID enabled, then the processes' effective UID is inherited from the file owner

```bash
-rwsr-xr-x 1 root root     257136 Jul  1 00:25 sudo
   ^
```

### Application
Real and effective UID when using `sudo`
- `sudo` process itself has RUID of the user, but EUID of root
- any child processes will have bot RUID and EUID of root

```bash
$ ps -eo user,ruid,uid,pid,ppid,command
...
root      1000     0    4123    4114 sudo more test.js
root         0     0    4124    4123 more test.js
...
```