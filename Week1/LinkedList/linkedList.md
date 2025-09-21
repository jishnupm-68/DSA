


# singly linked list
 - [data | next]


Head
 |
 v
+-----+------+     +-----+------+     +-----+------+     +-----+------+
| 10  |  o---->  | 20  |  o---->  | 30  |  o---->  | 40  |  NULL |
+-----+------+     +-----+------+     +-----+------+     +-----+------+



# doubly linked list

- [prev | data | next]


NULL <- [10 | prev | next] <-> [20 | prev | next] <-> [30 | prev | next] <-> [40 | prev | next] -> NULL


# or  


        prev          prev          prev          prev
NULL  <----- [10] <----- [20] <----- [30] <----- [40]
         |             |             |             |
         | next        | next        | next        | next
         v             v             v             v
       [10] -----> [20] -----> [30] -----> [40] -----> NULL



 