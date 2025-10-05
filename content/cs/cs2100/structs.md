---
tags:
  - cs2100/chapter4
  - cs/low_level
  - lang/c
complete: true
prev: /labyrinth/notes/cs/cs2100/strings_in_C
next: /labyrinth/notes/cs/cs2100/MIPS

---
### Summary
Struct type
- grouping heterogenous members
- not a variable, no memory allocated to types
- acts as a blueprint for the members associated with the type

```c
typedef struct {
	int x;
	int y;
	char *label; // label string
} point; // sizeof(point) = 16
```

Struct variable
- similar to creating an [instance](/labyrinth/notes/cs/cs2030s/classes#^29c4ea) of a class

```c
// declaration
point p1;

// initialization during declaration
point p2 = { 1, 2, "2" };
```

Assignment
```c
// cannot initialize after declaration, similar to arrays
point p3;
p3 = { 1, 3, "3" }; // error

// assignment from a pre-existing struct
point p4 = { 1, 4, "4" }, p5;
p5 = p4;
// or by assigning each member
p5.x = p4.x;
p5.y = p4.y;
p5.label = p4.label;
```
### Concept
Structs as function parameters
- [pass-by-value](/labyrinth/notes/cs/cs2100/functions_in_C#^f29a98)
- struct is copied into the local variable

```c
void inverse(point);

int main(void) {
	point a = { 1, 2, "hello" };
	
	printf("%d, %d, %s\n", a.x, a.y, a.label); // 1, 2, "hello"
	inverse(a);
	printf("%d, %d, %s\n", a.x, a.y, a.label); // 1, 2, "hello"
	return 0; 
}

void inverse(point a) { // a is local to the execution of inverse
	int temp = a.x;
	a.x = a.y;
	a.y = temp;
}
```

Struct pointers
- allow a function to make modifications to the original struct

```c
void inverse(point *);

int main(void) {
	point a = { 1, 2, "hello" };
	
	printf("%d, %d, %s\n", a.x, a.y, a.label); // 1, 2, "hello"
	inverse(&a);
	printf("%d, %d, %s\n", a.x, a.y, a.label); // 2, 1, "hello"
	return 0; 
}

void inverse(point *a) { // a is a local pointer to the external struct
	int temp = (*a).x; // dereference a and get the member x
	(*a).x = (*a).y;
	(*a).y = temp;
}
```
> the parentheses are required in `(*a).x` since the `.` operator has precedence over `*`

Arrow operator
- syntactic sugar

```c
// rewritten to use the arrow operator
void inverse(point *a) { // (*a).x becomes a->x
	int temp = a->x; // dereference a and get the member x
	a->x = a->y;
	a->y = temp;
}
```
### Application
Nested structs
```c
typedef struct {
	int day, month, year;
} date_t;

typedef struct {
	int cardNum;
	date_t expiryDate;
} card_t;

card_t card1 = {888888, {31, 12, 2020}};
```

Struct array
```c
point line[3] = {{ 1, 2, "A" }, { 2, 4, "B" }}; // only 2 points initialised

// pointers
printf("%p\n", line);        // addr
printf("%p\n", &line[0]);    // addr
printf("%p\n", line + 1);    // addr + 1 * sizeof(point)
printf("%p\n", &line[1]);    // addr + 1 * sizeof(point)

// what does the last one get initialized as?
printf("%d\n", line[2]);        // 0
printf("%d\n", line[2].x);      // 0
printf("%d\n", line[2].y);      // 0
printf("%d\n", line[2].label);  // 0
// effectively, all the bytes it would have occupied get initialized to 0
```
> keep in mind that the [size of a pointer](/labyrinth/notes/cs/cs2100/pointers#^4af4c3) depends on architecture