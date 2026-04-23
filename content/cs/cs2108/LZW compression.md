---
tags:
  - cs2108/chapter8
  - cs/compression
complete: false
prev: /labyrinth/notes/cs/cs2108/huffman_coding

---
### Concept
#### Lempel-Ziv-Welch(LZW)
- lossless compression
- fixed length code, usually 12 bits (257-4095)
- doesn't require a dictonary to be sent alongside
- dictionary is rebuilt built during decoding
- used in:
	- GIF

Algorithm
1. initialize the dictionary, implicitly starting with all [ASCII](/labyrinth/notes/cs/cs2100/ASCII) characters
2. start a substring buffer `w = ""`
3. take a new character `k`
4. check if `w + k` is in the dictionary
	- if already inside: 
		- `w = w + k`, positive lookahead
	- else: 
		- add a new entry in the dictionary for `w + k`
		- set `w = k`
5. repeat from step 3 until the end of the string

```
next_code = 257
w = ""

for each character k in input:
	if w + k is in dictionary:
		w = w + k
	else:
		output code(w)
		add (w + k) to dictionary with next_code
		next_code++
		w = k

output code(w)
```

```
abaabc
```

|                  | dict |       | output |      |
| ---------------- | ---- | ----- | ------ | ---- |
| abaabc<br>^*     | 257  | 'ab'  | 97     | 'a'  |
| abaabc<br> ^*    | 258  | 'ba'  | 98     | 'b'  |
| abaabc<br>  ^*   | 259  | 'aa'  | 97     | 'a'  |
| abaabc<br>   ^^* | 260  | 'abc' | 257    | 'ab' |
| abaabc<br>     ^ |      |       | 99     | 'c'  |

```
  abaabc -> 97 98 97 257 99
6×8 bits    5×12 bits
```
### Application
Encoding
```
ABBAABBAABBAABBAABBA
```

|                                              | dict |        | output |       |
| -------------------------------------------- | ---- | ------ | ------ | ----- |
| ABBAABBAABBAABBAABBA<br>^*                   | 257  | 'AB'   | 65     | 'A'   |
| ABBAABBAABBAABBAABBA<br> ^*                  | 258  | 'BB'   | 66     | 'B'   |
| ABBAABBAABBAABBAABBA<br>  ^*                 | 259  | 'BA'   | 66     | 'B'   |
| ABBAABBAABBAABBAABBA<br>   ^*                | 260  | 'AA'   | 65     | 'A'   |
| ABBAABBAABBAABBAABBA<br>    ^^*              | 261  | 'ABB'  | 257    | 'AB'  |
| ABBAABBAABBAABBAABBA<br>      ^^*            | 262  | 'BAA'  | 259    | 'BA'  |
| ABBAABBAABBAABBAABBA<br>        ^^^*         | 263  | 'ABBA' | 261    | 'ABB' |
| ABBAABBAABBAABBAABBA<br>           ^^*       | 264  | 'AAB'  | 260    | 'AA'  |
| ABBAABBAABBAABBAABBA<br>             ^^*     | 265  | 'BBA'  | 258    | 'BB'  |
| ABBAABBAABBAABBAABBA<br>               ^^^*  | 266  | 'AABB' | 264    | 'AAB' |
| ABBAABBAABBAABBAABBA<br>                  ^^ |      |        | 259    | 'BA'  |