---
tags:
  - cs2105/lect2
  - cs/web
complete: false
prev: /labyrinth/notes/cs/cs2105/HTTP
next: /labyrinth/notes/cs/cs2105/sockets

---
### Concept
#### Domain Name System(DNS)
- locate the end host the app wants to communicate with
- translates hostname <-> [IP address](/labyrinth/notes/cs/cs2105/IP)
- uses [UDP](/labyrinth/notes/cs/cs2105/UDP)

Resource records(RR)
```
name    value    type    TTL
```

| Type  | Stands for                            | Name entry                         | Value entry                                    |
| ----- | ------------------------------------- | ---------------------------------- | ---------------------------------------------- |
| A     | address                               | hostname                           | IP address                                     |
| NS    | name server, for a domain             | domain<br>ie. `nus.edu.sg`         | hostname of DNS server<br>ie. `ns2.nus.edu.sg` |
| CNAME | canonical name, alias for a real name | alias<br>ie. `www.comp.nus.edu.sg` | real name<br>ie. `www0.comp.nus.edu.sg`        |
| MX    | mail exchange                         | email domain<br>ie. @`nus.edu.sg`  | hostname of mail server                        |

#### DNS servers
- distributed and hierarhical

![[DNS_hierarchy.png|500]]

Root servers
- 13 worldwide

Top level domain(TLD) servers
- highest domain, ie. `.com`, `.org`, `.net`
- country domains, ie. `.sg`, `.fr`

Authorirative servers
- organization's own DNS server
- hostnames for internal hosts, that can be accessed from outside

Local DNS server
- ISP, organization levels
- caching:
	- may be out of date (best effort), won't propagate changes until expiry
	- expire after some time (TTL)
- queries:
	- recursive: root makes the request for you
	- iterative: root returns next DNS server, you request
