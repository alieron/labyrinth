---
tags:
  - cs2103t/qa
  - cs/software_eng
complete: false
prev: /labyrinth/notes/cs/cs2103t/design_patterns

---
### Concept
- exhaustive testing might require massive/infinite number ot test cases
- each test case adds to the cost of testing
- need to design test cases to make the best use of resources
	- effective - find high percentage of bugs
	- efficient - high rate of success, bugs found per test case
- reduce overlapping of test cases

Positive vs Negative
- positive - designed to produce expected/valid behaviour
- negative - designed to produce invalid/unexpected behaviour, ie. error message

Black Box vs Glass Box
- black box
	- aka: specification based or responsibility based
	- test cases designed based on SUT's specified external behaviour
- glass box
	- aka: white box or structured or implementation based
	- test cases designed based on what is known about the SUT's implementation
- gray box
	- test cases designed with some importatn information about the implementation

#### Equivalence Partitions
- most SUTs process all possible inputs in a small number of distinct ways
- range of inputs will be treated the same way
- partitioning all the inputs into [equivalence partitions](/labyrinth/notes/math/cs1231s/equivalence_relations#^09f6e3) can improve efficiency
	- avoid testing too many inputs from any one partition
	- ensure all partitions are tested

#### Boundary Value Analysis
- idea is bugs often result from incorrect handling of boundaries of equivalence partitions
- boundary values are more likely to find bugs
- but still test non-boundary values

#### Combining Test Inputs
- SUT can take multiple inputs, but inefficient to test all possible combinations
- strategies
	- all combinations - every combination of test input
	- at least once - each test input is tested at least once
	- all pairs - all combinations between pairs of inputs, bug is usually from 2 interacting factors
	- random - generate using other strategy, randomly choose a subset
- **each valid input should appear at least once in a positive test case**
- **test invalid inputs individually before combining them**