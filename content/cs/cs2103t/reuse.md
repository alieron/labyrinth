---
tags:
  - cs2103t/implementation
  - cs/software_eng
complete: true
prev: /labyrinth/notes/cs/cs2103t/architecture_styles

---
### Concept
- reusing tried-and-tested components
- enchance the robustness of new software
- reduce manpower and time
- costs:
	- might be overkill
	- unstable/not fully mature
	- risk of dying off/EOL
	- licensing issues
	- hidden bugs/security vulnerabilities
	- risk of malicious code

#### Application Programming Interface(API)
- reuse of components/entities
- interface through which other programs can interact with a software component
- design requirements:
	- clear
	- precise
	- well-documented
> API of a class is the collection of public methods that can be invoked externally


#### Libraries
- reuse of code
- collection of modular code
- generic and can be used by other programs
- usually involves a dependency management tool


#### Frameworks
- reuse of code structure
- provide **pre-built structure + customizable functionality**
- enable large-scale reuse and faster development
- some provice a default implementation
- examples:
    - web: Django, Spring
    - testing: JUnit
    - GUI: JavaFX

Framework vs Library

| Type          | Key Idea                                      | Difference                                       |
| ------------- | --------------------------------------------- | ------------------------------------------------ |
| **Library**   | reusable code modules, code is used as is     | your code calls the library                      |
| **Framework** | reusable structure with customizable behavior | framework calls your code (inversion of control) |

#### Platforms
- provides **runtime environment** for applications
- common services, security and scaling

#### Cloud Computing
- delivery of computing as a service over the network
- no need for local infrastructure
- easy to scale up/down

| Model                                  | Description                                    | Example           |
| -------------------------------------- | ---------------------------------------------- | ----------------- |
| **IaaS** - Infrastructure as a service | provides infrastructure (servers, storage)     | Amazon EC2        |
| **PaaS** - Platform as a service       | provides platform for developers to build apps | Google App Engine |
| **SaaS** - Software as a service       | provides ready-to-use software                 | Google Docs       |