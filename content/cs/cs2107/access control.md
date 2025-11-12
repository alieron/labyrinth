---
tags:
  - cs2107/chaoter9
  - cs/security
complete: true
next: /labyrinth/notes/cs/cs2107/intermediate_control
prev: /labyrinth/notes/cs/cs2107/TOCTOU

---
### Summary
Principle of least privilege ^3d1b08
- a given user should have the exact access rights to execute their roles
- no unecessary privileges

Compartmentalization ^d2e166
- keep segments separated
- limits the impact of any single failure/attack

Defense in depth/Swiss cheese model
- having multiple layes of security
- every layer of security is imperfect
- but with enough overlaps, each layer can compensate for the others

Segregation of duties
- role based access
- duties are spread across several users
- eliminate single point of failure
### Concept
Access control
- controlling **operations** on **objects** run by **subjects/principals**
- **reference monitor** will grant or deny access to the object

Ownership
- how access rights to an object is determined
- discretionary access control - object's owner decides
- mandatory access control - system-wide policy decides

Security perimeter
- security perimeter/boundary
- protects internal resources from external threats and external resources from internal threats
1. principle of least privilege
2. compartmentalization
3. defense in depth/swiss cheese model
4. segregation of duties

Access control matrix
- how to specify the access rights of any principal to an object, usually stored in a [hash table](/labyrinth/notes/cs/cs2040s/hash_table)
- ACL, access control list - indexed by object ^d93cc3
- capabilities - indexed by principal(user)
> ACL is more appropriate as we are more likely to delete files than users

$$
\begin{array}{|l|c|c|c|c|}
\hline  & \verb|homework.c| & \verb|note.txt| & \verb|ls| & \verb|sudo| \\
\hline \verb|root| & \verb|{r,w}| & \verb|{r,w}| & \verb|{r,w,x,o}| & \verb|{r,w,x,o}| \\
\hline \verb|Bob| & \verb|{r,w}| & \verb|{r,w,o}| & \verb|{r,x}| & \verb|{r,s}| \\
\hline \verb|Alice| & \verb|{r,w,o}| & \verb|{r}| & \verb|{r,x}| & \verb|{r,s}| \\
\hline
\end{array}
$$
> $\verb|s|$ denotes the ability to execute as owner
### Extra
Access permisions for `ls` and `sudo` binaries
```bash
-rwxr-xr-x 1 root root     158480 Sep 25 19:39 ls
...
-rwsr-xr-x 1 root root     257136 Jul  1 00:25 sudo
```
> the UNIX system uses [grouping](/labyrinth/notes/cs/cs2107/intermediate_control#^a83c0f)

Reading `ls -la` output
```
1. File type & permissions (10 chars)
	First char = file type:
		- regular file
		d directory
		l symbolic link		
		c character device (e.g. /dev/tty)
		b block device (e.g. disk)
		p named pipe (FIFO)
		s socket

	Next 9 chars = permission triplets: rwx rwx rwx for owner | group | others

2. Link count (2 / 10 / 1)
	Number of hard links pointing to that inode
	For directories it's at least 2 (itself . and parent ..) + subdirectories

3. Owner (user) (alice, root, bob)
	The user account owning the file

4. Group (staff, root)
	The primary group owning the file

5. Size in bytes (4096, 8192, 11)
	For directories this is metadata size; for human-readable use ls -lh

6. Timestamp (Mar 10 14:22, Nov 1 09:05)
	Usually the modification time (mtime). ls shows month/day/time for recent files; year if older than ~6 months

7. Filename (example.txt, mydir)
	For symlinks ls prints name -> target.

8. Trailing markers
	+ after permissions (e.g. -rw-r-----+) indicates ACLs are present.
	@ (macOS) indicates extended attributes.
```
