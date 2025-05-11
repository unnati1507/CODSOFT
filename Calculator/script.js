let display = document.getElementById('display');
let currentInput = '0';
let previousInputs = []; // Stack to store history

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === 'Infinity' || currentInput === '-Infinity' || isNaN(parseFloat(currentInput))) {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function appendOperator(operator) {
    if (currentInput !== '0' && currentInput !== '-' && !isNaN(parseFloat(currentInput)) && !['+', '-', '*', '/'].includes(currentInput.slice(-1))){
        previousInputs.push(currentInput);
        previousInputs.push(operator);
        currentInput = operator;
        updateDisplay();
    }
    else if (['+', '-', '*', '/'].includes(currentInput.slice(-1)) && operator !== currentInput.slice(-1) ){
        // Replace the last operator with the new one
        currentInput = currentInput.slice(0, -1) + operator;
        previousInputs.pop();
        previousInputs.push(operator);
        updateDisplay()
    }
    else if (currentInput === '0' && operator === '-') {
        currentInput = '-'; // Allow starting with a negative sign
        previousInputs.push(currentInput);
        updateDisplay();
    }
}



function calculate() {
  if (currentInput !== '0' && !isNaN(parseFloat(currentInput)) && previousInputs.length > 0) {
    previousInputs.push(currentInput); //push the last number
    let result;

    //check for multiple operations
    while (previousInputs.length > 1){
        const num1 = parseFloat(previousInputs.shift());
        const operator = previousInputs.shift();
        const num2 = parseFloat(previousInputs.shift());

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Infinity';
                    break;
                }
                result = num1 / num2;
                break;
            default:
                result = 'Error';
        }
        previousInputs.unshift(result); //put the result back to the array
    }
    currentInput = String(previousInputs[0]);
    previousInputs = [];
    updateDisplay();
  }
  else if (previousInputs.length === 0 && currentInput !=='0'){
    return;
  }
  else {
    currentInput = '0';
    previousInputs = [];
    updateDisplay();
  }
}

function clearDisplay() {
    currentInput = '0';
    previousInputs = [];
    updateDisplay();
}
