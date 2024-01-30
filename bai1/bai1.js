function add() {
    calculate("add");
}

function subtract() {
    calculate("subtract");
}

function multiply() {
    calculate("multiply");
}

function divide() {
    calculate("divide");
}

function calculate(operation) {
    var numberA = parseFloat(document.getElementById("numberA").value);
    var numberB = parseFloat(document.getElementById("numberB").value);
    var resultElement = document.getElementById("result");

    if (isNaN(numberA) || isNaN(numberB)) {
        alert('Vui lòng nhập số hợp lệ');
        return;
    }

    switch (operation) {
        case "add":
            resultElement.textContent = "Result: " + (numberA + numberB);
            break;
        case "subtract":
            resultElement.textContent = "Result: " + (numberA - numberB);
            break;
        case "multiply":
            resultElement.textContent = "Result: " + (numberA * numberB);
            break;
        case "divide":
            if (numberB !== 0) {
                resultElement.textContent = "Result: " + (numberA / numberB);
            } else {
                alert('Không thể chia cho 0');
                return;
            }
            break;
        default:
            alert('Phép toán không hợp lệ');
            return;
    }
}
