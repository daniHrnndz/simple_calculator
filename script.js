var calcDisplay = document.querySelector(".calc_display");
const numberBtn = document.querySelectorAll("[data_number]");
const operandBtn = document.querySelectorAll("[data_operand]");
const clearBtn = document.querySelector("[data_clear]");
const equalBtn = document.querySelector("[data_equal]");


console.log(calcDisplay);
console.log(numberBtn);
console.log(operandBtn);
console.log(clearBtn);
console.log(equalBtn);


numberBtn.forEach(function(button){
    button.addEventListener("click" , function(){
        addNumber(button.innerText);
    })
});

operandBtn.forEach(function(button){
    button.addEventListener("click" , function(){
        addOperation(button.innterText);
        alert(button.innerText);
    })
});

equalBtn.addEventListener("click" , function(){
    calculate();
    updateDisplay();
});

clearBtn.addEventListener("click" , function(){
    clearDisplay();
    updateDisplay();
});