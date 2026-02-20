---
tags:
  - cs2103t/implementation
  - cs/software_eng
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2103t/architecture_diagrams

---
### Concept
#### Logging
- recording certain information during a program's execution
- see how the system behaved before and during an issue
- used for troubleshooting

#### Java logger class
```java
import java.util.logging.Logger;
import java.util.logging.Level;

private static final Logger logger =
        Logger.getLogger(MyClass.class.getName()); // name of the class its logging for

logger.log(Level.INFO, "Application started");
logger.log(Level.WARNING, "Something suspicious happened");
logger.log(Level.SEVERE, "Critical failure");
```

Log levels
- `SEVERE` (highest)
- `WARNING`
- `INFO`
- `CONFIG`
- `FINE`
- `FINER`
- `FINEST`

Filtering
- logger only publishes messages that are >= to the set log level
- `ALL` - show all levels
- `OFF` - show nothing

```java
logger.setLevel(Level.WARNING); // only WARNING and SEVERE are shown
```