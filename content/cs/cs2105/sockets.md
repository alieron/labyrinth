---
tags:
  - cs2105/chapter3
  - cs/networking
  - lang/python
complete: false
next: /labyrinth/notes/cs/cs2105/transport_layer
prev: /labyrinth/notes/cs/cs2105/DNS

---
### Concept
#### Sockets
- software abstraction provided by the [OS](/labyrinth/notes/cs/cs2106/OS)
- interface between processes and [transport layer](/labyrinth/notes/cs/cs2105/transport_layer)
- process: specified recipient, dest IP + port
- OS: attach return info, source IP + port(chosen by OS)
> asking the OS for a socket is a [syscall](/labyrinth/notes/cs/cs2106/syscalls)
#### Datagram socket
- [UDP](/labyrinth/notes/cs/cs2105/UDP), less reliable
- one socket instance many clients can connect

- server:
```python
import socket

address = ('localhost', 8888) 
# create socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM) 

# bind socket to local port
sock.bind(address)

while True:
	# read packet from client
	data, addr = sock.recvfrom(4096)
	print(f'{data} from {addr}')
	# sends data to client
	sock.sendto(data, addr) 
```
- client:
```python
import socket

address = ('localhost', 8888)
# create socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# no binding, client socket uses whatever is available

text = input('Enter message:')
# sends data to client
sock.sendto(text.encode(), address)
# read packet from server
data, addr = sock.recvfrom(4096)
print(f'{data.decode()} from {addr}')
sock.close()  
```
#### Stream socket
- [TCP](/labyrinth/notes/cs/cs2105/TCP), reliable and connection oriented
- server creates listener scoket
- new socket instance is created when a client connects

- server:
```python
import socket

address = ("localhost", 8888)
# create a socket to listen
welome_socket = socket.socket() # default (AF_INET, SOCK_STREAM)
welcome_socket.bind(address)
welcome_socket.listen(1) # set max backlog to 1

while True:
	# accept incoming client
	conn, addr = welcome_socket.accept()
	
	print(f"Client connected from {addr}")
	
	# create wrapper on input stream
	in_file = conn.makefile('r')
	text = []
	# read a line until blank line
	while (data := in_file.readline()) != '\n':
		text.append(data)
		print(repr(data))
	
	# write text to socket
	conn.sendall(''.join(text).encode())
	
	# close the socket
	conn.shutdown(socket.SHUT_RDWR)
	conn.close()
	print('Bye.')
```
- client:
```python
import socket 

address = ("localhost", 8888)
# create a socket to connect 
client_sock = socket()   # default (AF_INET, SOCK_STREAM) 
client_sock.connect(address)

print(f"Connected to {client_socket.getpeername()}") 

# get input for user 

while text := input():          
	# write text to socket     
	client_socket.send(text.encode())     
	client_socket.send(b'\r\n') 
	
# flush the socket with sendall 
client_socket.sendall(b'\r\n') 

print('Done. Ready to read?') 
input() 

while data := client_socket.recv(10):     
	print(repr(data))      
	
# close the socket 
client_socket.close() 
```
