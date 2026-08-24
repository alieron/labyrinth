---
tags:
  - cs2103t/design
  - cs/software_eng
complete: true
prev: /labyrinth/notes/cs/cs2103t/test_case_design
next: /labyrinth/notes/cs/cs2103t/reuse

---
### Concept
- overall organization of the system, high-level design
- a mix of styles is often used

Architecture diagrams
- free form, no fixed standard
- organization of the system at a high level
- multi-level design
	- for larger systems
	- break up into multiple levels

#### N-tier architecture
- divided into layers
- layers make use of servides provided by lower layers
- eg. [network layers](/labyrinth/notes/cs/cs2105/network_layers)

#### Client-server architecture
- server component and client component
- used in distributed applications

#### Transaction processing architecture
- workload is divided into transactions
- dispatcher controls the execution of each transaction

#### Service-oriented architecture(SOA)
- functionalities packaged as programmatically accessible services
- interoperability between distributed services
- common communication language/system between softwares

#### Event-driven architecture
- detect events from event emitters
- dispatched to interested event consumers