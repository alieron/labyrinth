---
tags:
  - cs2103t/implementation
  - cs/software_eng
complete: true
prev: /labyrinth/notes/cs/cs2103t/software_design
next: /labyrinth/notes/cs/cs2103t/project_management

---
### Concept
- combining parts of a software product to form a whole
- troublesome - incompatibilities between parts

Integration approaches

| Category                 | Approach             | Description                           | Pros                                     | Cons                                 |
| ------------------------ | -------------------- | ------------------------------------- | ---------------------------------------- | ------------------------------------ |
| **Timing & Frequency**   | **Late & One-Time**  | integrate everything at the end       | simple planning                          | high risk, many bugs at once, delays |
|                          | **Early & Frequent** | integrate continuously in small steps | early bug detection, smoother progress   | requires discipline & coordination   |
| **Amount Merged**        | **Big-Bang**         | merge all components at once          | quick to execute (initially)             | hard to debug, many issues at once   |
|                          | **Incremental**      | merge parts gradually                 | easier debugging, controlled integration | slightly more planning needed        |
| **Order of Integration** | **Top-Down**         | start from high-level components      | early validation of system logic         | needs stubs for missing parts        |
|                          | **Bottom-Up**        | start from low-level components       | easier testing of core functions         | needs drivers, UI comes late         |
|                          | **Sandwich**         | combine top-down & bottom-up          | balanced approach                        | more complex to manage               |

#### Build automation
- automates build steps (compile, test, package, deploy)
- saves time and reduces manual errors
- also handles **dependency management**

Continuous integration
- integration, building and testing happens automatically after each code change

Continuous deployment
- also deployed to end users continuously