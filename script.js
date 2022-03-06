var calcDisplay = document.querySelector(".calc_display");
const numberBtn = document.querySelectorAll("[data_number]");
const operandBtn = document.querySelectorAll("[data_operand]");
const clearBtn = document.querySelector("[data_clear]");
const equalBtn = document.querySelector("[data_equal]");

var actualOp = " ";
var previousOp = " ";
var operation = undefined;

numberBtn.forEach(button => {
    button.addEventListener("click", () => {
        addNumber(button.innerText)
    })
});

operandBtn.forEach(button => {
    button.addEventListener("click", () => {
        opSelection(button.innerText)
        addOperand(button.innerText)
    })
});

clearBtn.addEventListener("click", () => {
    clear()
    updateDisplay()
});

equalBtn.addEventListener("click", () => {
    calculate()
    updateDisplay()
});


addNumber = (number) => {
    actualOp = actualOp.toString() + number;
    updateDisplay();
}

updateDisplay = () => {
    calcDisplay.innerText = actualOp;
}

clear = () => {
    actualOp = " ";
    previousOp = " ";
    operation = undefined
}

opSelection = (op) => {
    if(actualOp === " ") return;
    if(previousOp !== " ") {
        calculate()
    }
    operation = op.toString();
    previousOp = actualOp;
    actualOp = " ";
}

calculate = () => {
    var calculation;
    const previous = parseFloat(previousOp);
    const actual = parseFloat(actualOp);
    if(isNaN(previous) || isNaN(actual)) return;
    switch(operation){
        case "+":
            calculation = previous + actual;
            break;
        case "-":
            calculation = previous - actual;
            break;
            
        case "*":
            calculation = previous * actual;
            break;
            
        case "/":
            calculation = previous / actual;
            break;
        default:
            return;
    }
    actualOp = calculation;
    operation = undefined;
    previousOp = " ";
}

clear(); 