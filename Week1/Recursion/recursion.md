
function Fibonacci(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return Fibonacci(n-1)+Fibonacci(n-2);
}


# Fibonacci function calling in recursive mode
fib(7)
├── fib(6)
│   ├── fib(5)
│   │   ├── fib(4)
│   │   │   ├── fib(3)
│   │   │   │   ├── fib(2)
│   │   │   │   │   ├── fib(1) => 1
│   │   │   │   │   └── fib(0) => 0
│   │   │   │   └── fib(1) => 1
│   │   │   └── fib(2)
│   │   │       ├── fib(1) => 1
│   │   │       └── fib(0) => 0
│   │   └── fib(3)
│   │       ├── fib(2)
│   │       │   ├── fib(1) => 1
│   │       │   └── fib(0) => 0
│   │       └── fib(1) => 1
│   └── fib(4)
│       ├── fib(3)
│       │   ├── fib(2)
│       │   │   ├── fib(1) => 1
│       │   │   └── fib(0) => 0
│       │   └── fib(1) => 1
│       └── fib(2)
│           ├── fib(1) => 1
│           └── fib(0) => 0
└── fib(5)
    ├── fib(4)
    │   ├── fib(3)
    │   │   ├── fib(2)
    │   │   │   ├── fib(1) => 1
    │   │   │   └── fib(0) => 0
    │   │   └── fib(1) => 1
    │   └── fib(2)
    │       ├── fib(1) => 1
    │       └── fib(0) => 0
    └── fib(3)
        ├── fib(2)
        │   ├── fib(1) => 1
        │   └── fib(0) => 0
        └── fib(1) => 1

# the end of fibonacci tree





function Factorial(n){
    if(n==1) return n
    return n*Factorial(n-1);
}


Factorial(7)
= 7 * Factorial(6)
       = 7 * (6 * Factorial(5))
                 = 7 * (6 * (5 * Factorial(4)))
                           = 7 * (6 * (5 * (4 * Factorial(3))))
                                     = 7 * (6 * (5 * (4 * (3 * Factorial(2)))))
                                               = 7 * (6 * (5 * (4 * (3 * (2 * Factorial(1))))))
                                                         = 7 * (6 * (5 * (4 * (3 * (2 * 1)))))
Factorial(7)
└── Factorial(6)
    └── Factorial(5)
        └── Factorial(4)
            └── Factorial(3)
                └── Factorial(2)
                    └── Factorial(1) => 1

# end of factorial tree

