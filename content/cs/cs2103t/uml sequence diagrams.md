---
tags:
  - cs2103t/design
  - cs/software_eng
  - lang/uml
complete: false
prev: /labyrinth/notes/cs/cs2103t/java_assertions
next: /labyrinth/notes/cs/cs2103t/architecture_diagrams

---
### Concept
#### Sequence diagrams
- model interactions between entities in a system
- see [plantuml/sequence-diagram](https://plantuml.com/sequence-diagram)

Entities
- actors and components involved in the interaction
- lifeline: represents the life of the *instance*
> follow the naming convention for [object diagrams](/labyrinth/notes/cs/cs2103t/uml_object_diagrams) without underlining

Function calls
- function call: solid arrow
- return: optional dashed arrow
- activation bar: represents the method currently being executed

![[sequence_diagrams.png|400]]

- static methods: calls a method in the **class**
- self-call: calls another method in the **object**
- call back: back call to the previous object

```plantuml
@startuml

participant "os:OrderService" as os
participant OrderService<<class>>
participant "inv:Inventory" as inv

[-> os : placeOrder()
activate os

os -> OrderService : lessThanMaxOrders()
activate OrderService
OrderService --> os : still can order
deactivate OrderService

os -> inv : available()
activate inv
inv -> os : getOrderItems()
activate os
os --> inv : items
deactivate os
inv --> os : availability
deactivate inv

os -> os : validateOrder()
activate os
os --> os : valid
deactivate os

os -->[ : id
deactivate os

@enduml
```

Object creation & deletion
- constructor
- destructor: lifeline should terminate, not possible in plantuml

```plantuml
@startuml
participant "os:OrderService" as os
participant "o:Order" as o

[-> os : createOrder()
activate os

os -> o **
activate o
o --> os : o
deactivate o

os -->[
deactivate os

[-> os : cancelOrder()
activate os

os -> o : cancel()
activate o
o --> os : cancelled
destroy o

os -->[
deactivate os

@enduml
```
> in java, deletion means that the object is no longer refered to and ready for gabage collection
#### Frames
Loops
- repitition

```plantuml
@startuml
participant "os:OrderService" as os
participant "inv:Inventory" as inv

os -> inv : reserveItems()
activate inv

loop for each item
    inv -> inv : checkStock(item)
    activate inv
    inv --> inv : available
    deactivate inv
end

inv --> os
deactivate inv

@enduml
```

Alternate paths
- no more than one alternative partition can be executed

```plantuml
@startuml
participant "ps:PaymentService" as ps
participant "b:Bank" as b

[-> ps : pay()
activate ps

ps -> b : transact()
activate b
b --> ps : status

alt success
    ps -->[ : receipt
else failure
    ps -->[ : error
end

deactivate b
deactivate ps

@enduml
```

Optional paths
```plantuml
@startuml
participant "os:OrderService" as os
participant "ds:DiscountService" as ds

[-> os : calculateTotal()
activate os

opt customer eligible
    os -> ds : applyDiscount()
    activate ds
    ds --> os : discountedTotal
    deactivate ds
end

os -->[ : finalTotal
deactivate os

@enduml
```

Parallel paths
- execution done in [parallel](/labyrinth/notes/cs/cs2030s/parallelism)

```plantuml
@startuml
participant "os:OrderService" as os
participant "ns:NotificationService" as ns
participant "inv:Inventory" as inv

[-> os : placeOrder()
activate os

par send notification
    os -> ns : notifyUser()
    activate ns
    ns --> os : sent
    deactivate ns
else update inventory
    os -> inv : updateStock()
    activate inv
    inv --> os : updated
    deactivate inv
end

os -->[ : id
deactivate os

@enduml
```

Reference frames
- abstract away the behaviour to another diagram

```plantuml
@startuml
participant "os:OrderService" as os

[-> os : checkout()
activate os

ref over os
    Payment Processing
end ref

os -->[ : confirmation
deactivate os

@enduml
```