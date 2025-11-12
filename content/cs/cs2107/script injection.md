---
tags:
  - cs2107/chapter8
  - cs/security
  - lang/sql
complete: true
prev: /labyrinth/notes/cs/cs2107/integer_overflow
next: /labyrinth/notes/cs/cs2107/TOCTOU

---
### Summary
Premise
- commands/queries are composedby concatenating or  untrusted input into executable context (SQL statements, shell commands, prompts)
- Server executes resulting code/query with elevated privileges

Attack
- **SQL injection:** attacker injects SQL fragments to change the query
- **Command injection:** inject malicious commands into shell-invoked strings
- **Prompt injection (AI):** craft input that alters/overrides model instructions 

Attacker’s goals
- access backend data/read files -> confidentiality
- modify backend data -> integrity
- execute arbitrary/manipulate AI outputs -> execution integrity

Defense
- use parameterized queries, avoid string concatenation
- avoid invoking shell
- validate and sanitize inputs, whitelisting
- for AI systems: sanitize prompts, use model guards, restrict what models can access, and apply output-filtering
- [principle of least privilege](/labyrinth/notes/cs/cs2107/access_control#^3d1b08) for DB/accounts and RBAC for commands
### Concept
Script injection
- no separation between data and script
- easy for data to get interpreted as script

SQL injection
- database query

```sql
SELECT * FROM users WHERE name = 'Bob'
-- standard query that searches for the user Bob

SELECT * FROM users WHERE name = '$userinput' 
-- query constructed by login page, checks if the user inputted name exists

-- "with any' OR 1=1 --"
SELECT * FROM users WHERE name = 'any' OR 1=1 --' 
-- leaks the whole users table, OR 1=1 gets evaluated as a script instead of a string
```

Input validation
- filtering
- whitelist - list of items that are known to be benign and accepted
- blacklist - list of items known to be bad and rejected
- requirements:
	- complete - doesn't miss out any malicious string
	- accepts all legitimate inputs

Parameterized queries
- clear separation between data and script
- parameters are sent separately from the rest of the query