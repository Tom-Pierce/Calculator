let a;
let b;
let op;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operator(op, a, b) {
    switch (op) {
        case "+":
            add(a, b)
        case "-":
            subtract(a, b)
        case "*":
            multiply(a, b)
        case "/":
            divide(a, b)

    }
}