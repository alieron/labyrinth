---
tags:
  - cs2106/chapter1
  - cs/low_level
complete: true
next: /labyrinth/notes/cs/cs2106/processes

---
### Concept
#### Operating system
- aka. kernels
- the lowest level software, runs in the **kernel mode**
- **program** that acts as an intermediary between the user and the computer hardware
- other programs are run in the **user mode**

![[os_layers.png]]

Abstraction
- programs interact with OS
- OS handles specifics of the low level, ie. drivers
- simplifies programming
- makes programs more portable

Resource allocation
- multiple programs can be run simultaneously
- OS manages CPU, memory and IO
- ensure efficient and fair resource allocation

Control
- programs might misuse the computer
	- accidentally: bugs
	- maliciously: virus/malware
- multiple users might share the computer
- OS prevents errors handles [access control](/labyrinth/notes/cs/cs2107/access_control)

#### OS structures
**Monolithic**
- OS is one big program
- services are packaged in the OS
- traditional approach, good performance but complex internal structure

**Microkernel**
- OS only provides minimal services
	- inter-process communication(IPC), address space management, interrupt handler and thread management
- higher level programs need to use IPC to communicate
- more robust and better protection for the kernel but lower performance

Layered
- similar to monolithic
- OS is a hierachy of layers, lowest is hardware, highest is UI

Client-server
- variant of microkernel
- client process request service from server process
- server process runs on microkernel
- client and server can be on different machines
#### Virtual machines
- software emulation of hardware
- hypervisor runs VMs and monitors them

Type 1 hypervisor
- runs directly on computer hardware

Type 2 hypervisor
- runs as a program on the host OS