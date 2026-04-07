---
tags:
  - cs2103t/design
  - cs/software_eng
  - lang/uml
complete: false
prev: /labyrinth/notes/cs/cs2103t/class_diagrams
next: /labyrinth/notes/cs/cs2103t/javafx

---
### Concept
#### Object diagrams
- captures object structures at a given point in time
- instantiation of [class diagrams](/labyrinth/notes/cs/cs2103t/class_diagrams)
- class diagrams set the constraints for the object diagrams
- see [plantuml/object-diagram](https://plantuml.com/object-diagram)

```plantuml
@startuml
object s1:Student {
    name = "Alice"
}

object s2:Student {
    name = "Bob"
}

object c1:Course {
    code = "CS2103T"
}

"c1:Course" --> "s1:Student"
"c1:Course" --> "s2:Student"
@enduml
```

no dependendies in object diagram