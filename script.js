let a = "";
let b = "";
let op = null;
let currentOperation = document.getElementById("currentOperation");
let lastOperation = document.getElementById("lastOperation");

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
    if (b === 0) {
        alert("You know you can't do that :)");
        return;
    }
    return a / b;
}

function selectOp(operator) {
    if (currentOperation.textContent === "") {
        alert("Enter a number first!");
        return;
    }
    if (operator === '=') {
        equals();
        op = null;
        return
    } else {
        op = operator;
    }
    lastOperation.textContent = currentOperation.textContent;
    currentOperation.textContent = "";
    a = lastOperation.textContent;
    lastOperation.textContent += " " + operator;
}

function equals() {
    b = currentOperation.textContent;
    lastOperation.textContent += " " + currentOperation.textContent + " ="
    currentOperation.textContent = operate();
}

function operate() {
    a = Number(a);
    b = Number(b);
    console.log("operate");
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b)
        case "*":
            console.log("multiplying");
            return multiply(a, b)
        case "/":
            return divide(a, b)

    }
}

function press(input) {
    display(input);
}

function display(input) {
    currentOperation.textContent += input;
}

function backspace() {
    //delete last character in "text" string
    currentOperation.textContent = currentOperation.textContent.substring(0, currentOperation.textContent.length - 1);

}

function clearText() {
    currentOperation.textContent = "";
    lastOperation.textContent = "";

    a = 0;
    b = 0;
    op = null;
}

function test2(input) {
    console.log("click");
    click(input);
}