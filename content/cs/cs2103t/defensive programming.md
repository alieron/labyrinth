---
tags:
  - cs2103t/implementation
  - cs/software_eng
  - lang/java
complete: true
prev: /labyrinth/notes/cs/cs2103t/design_patterns
next: /labyrinth/notes/cs/cs2103t/test_case_design

---
### Concept
#### Defensive programming
- "if you leave room for things to go wrong, they will go wrong"
- try to eliminate any room for things to go wrong
- tradeoff - defensive code can be more complicated and slower

```java
class MainApp {
	Config config;
	
	// Returns the config object
	Config getConfig() {
		return config; // the object might get modified
	}
}

// problematic use
m.getConfig().modify();

class MainApp {
	Config config;
	
	// Returns a copy of the config object
	Config getConfig() {
		return config.copy(); // return a defensive copy, original cannot be modified
	}
}
```

Enforcing compulsory associations
- compulsory association - non-zero multiplicity
- ensure that associations are maintained

```java
class Account {
	Guarantor guarantor;

	// unprotected setter
	void setGuarantor(Guarantor g) { // user can call setGuarantor(null)
			guarantor = g;
	}
	
	// protected set
	void setGuarantor(Guarantor g) {
		if (g == null) {
			stopSystemWithMessage(
				"multiplicity violated. Null Guarantor");
		}
		guarantor = g;
	}
}

// problematic use
a.setGuarantor(null);
```

Enforcing 1-to-1 associations
- 1-to-1 association - multiplicity of 1 on both sides, both classes cannot exist without each other
- need simultaneous object creation

```java
// associated object is only created upon instantiated
class MinedCell {
    private Mine mine;

    public MinedCell() {
        mine = new Mine(); // both classes are created, in a controlled manner, at the same tine
    }
    // ...
}
```

Enforcing referential integrity
- bidirectional association - 2 way association between classes
- usually implemented using two variables
- there can be a mismatch

```java
class Man {
    Woman girlfriend;

    void setGirlfriend(Woman w) {
        girlfriend = w;
    }
}

class Woman {
    Man boyfriend;

    void setBoyfriend(Man m) {
        boyfriend = m;
    }
}

// problematic use
Woman jean;
Man james, yong;
james.setGirlfriend(jean); // james' gf is jean
jean.setBoyfriend(yong);   // jean's bf is yong not james

// association is set both ways in the function
public class Woman {
    private Man boyfriend;

    public void setBoyfriend(Man m) {
        if (boyfriend == m) {
            return;
        }
        if (boyfriend != null) {
            boyfriend.breakUp();
        }
        boyfriend = m;
        if (m != null) {
            m.setGirlfriend(this);
        }
    }

    public void breakUp() {
        boyfriend = null;
    }
}

public class Man {
    private Woman girlfriend;

    public void setGirlfriend(Woman w) {
        if (girlfriend == w) {
            return;
        }
        if (girlfriend != null) {
            girlfriend.breakUp();
        }
        girlfriend = w;
        if (w != null) {
            w.setBoyfriend(this);
        }
    }
    public void breakUp() {
        girlfriend = null;
    }
}
```

#### Design by Contract(DbC)
- define formal, preciese and verifiable interface specifications
- explicitly specify preconditions, postconditions and exceptions
- make the caller responsible for ensuring preconditions are met, instead of throwing exceptions