let displayValue = [];
let firstNumber = null;
let secondNumber = null;
let result = null;
let operand = null;
let isEmpty = true;

const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');
const b5 = document.querySelector('#b5');
const b6 = document.querySelector('#b6');
const b7 = document.querySelector('#b7');
const b8 = document.querySelector('#b8');
const b9 = document.querySelector('#b9');
const b0 = document.querySelector('#b0');

const clear = document.querySelector('#clear');
const q1 = document.querySelector('#q1');
const q2 = document.querySelector('#q2');
const q3 = document.querySelector('#q3');

const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const subtractBtn = document.querySelector('#subtract');
const addBtn = document.querySelector('#add');

const dPointBtn = document.querySelector('#decimal');
const equalsBtn = document.querySelector('#equals');

const lcdDisplay = document.querySelector('.lcd-display');
const display = document.createElement('p');
display.textContent = displayValue.toString();
lcdDisplay.appendChild(display);

const firstNumDisplay = document.querySelector('.firstNumber');
const secondNumDisplay = document.querySelector('.secondNumber');
const operandDisplay = document.querySelector('.operand');

const firstNumText = document.createElement('p');
firstNumDisplay.appendChild(firstNumText);

const secondNumText = document.createElement('p');
secondNumDisplay.appendChild(secondNumText);

const operandText = document.createElement('p');
operandDisplay.appendChild(operandText);

const add = (num1, num2) => num1+num2;
const subtract = (num1, num2) => num1-num2;
const multiply = (num1, num2) => num1*num2;
const divide = (num1, num2) => num1/num2;

const operator = (operationString, num1, num2) => {
    switch (operationString) {
        case "multiply":
            return multiply(num1,num2);
            break;
        case "divide":
            return divide(num1,num2);
            break;
        case "subtract":
            return subtract(num1,num2);
            break;
        case "add":
            return add(num1,num2)
            break;
    }
}


const showDisplay = () => {
    firstNumText.textContent = firstNumber;
    secondNumText.textContent = secondNumber;
    operandText.textContent = operand;
}

const popDisplayNum = (e) => {
    if(result != null) {
        clearDisplay();
        secondNumber = null;
        result = null;
    }
    const value = e.target.id[1];
    displayValue.push(value);
    display.textContent = displayValue.join('');
    isEmpty = false;
}

const clearDisplayBtn = (e) => {
    displayValue = [];
    display.textContent = displayValue.join('');
    firstNumber = null;
    secondNumber = null;
    result = null;
    operand = null;
    isEmpty = true;
    showDisplay();
}

const clearDisplay = (e) => {
    displayValue = [];
    isEmpty = true;
}

const operation = (e) => {
    if (isEmpty == true) {
        return;
    }
    operand = e.target.id;
    if (firstNumber == null && result == null) {
        firstNumber = +displayValue.join('');
        clearDisplay();
    } else if (firstNumber != null) {
        secondNumber = +displayValue.join('');
        operate();
    }
    showDisplay();

}

const operate = (e) => {
    if (isEmpty == true) { return; }
    if (secondNumber == null) {
        secondNumber = +displayValue.join('');
    }   
    if (firstNumber != null && secondNumber != null) {
        result = operator(operand, firstNumber, secondNumber);
        display.textContent = result;
        update();
    }
    showDisplay();
}

const update = () => {
    firstNumber = result;
    secondNumber = null;
    result = null;
}

b1.addEventListener('click',popDisplayNum);
b2.addEventListener('click',popDisplayNum);
b3.addEventListener('click',popDisplayNum);
b4.addEventListener('click',popDisplayNum);
b5.addEventListener('click',popDisplayNum);
b6.addEventListener('click',popDisplayNum);
b7.addEventListener('click',popDisplayNum);
b8.addEventListener('click',popDisplayNum);
b9.addEventListener('click',popDisplayNum);
b0.addEventListener('click',popDisplayNum);

clear.addEventListener('click',clearDisplayBtn);
equalsBtn.addEventListener('click', operate);

multiplyBtn.addEventListener('click', operation);
divideBtn.addEventListener('click', operation);
subtractBtn.addEventListener('click', operation);
addBtn.addEventListener('click', operation);



/*
 * Pseudo code...
 * 
 * Number get's pressed
 *  screen populates
 *  displayValue get's populated
 * 
 * Operation get's pressed
 *  number get's stored (firstNumber)
 *  operand get's stored (operand)
 *  displayValue get's emptied
 * 
 * Number get's pressed after operand
 *  screen and display value populates
 * 
 * Equals get's pressed
 *  number get's stored (secondNumber)
 *  operation is done accordingly
 *  firstNumber = result
 *  displayValue is emptied
 * 
 * OR
 * 
 * Operation get's pressed
 *  number get's stored (secondNumber)
 *  operation is done accordingly
 *  firstNumber = result
 *  displayValue is emptied
 *  operand get's stored
 * 
 * Number get's pressed after calculation
 *  screen and display value popoulates
 *  
 * Equals get's pressed
 *  number get's stored (secondNumber)
 *  operation is done accordingly
 *  firstNumber = result
 *  displayValue is emptied
 * 
 * OR
 * 
 * Operation get's pressed
 *  number get's stored (secondNumber)
 *  operation is done accordingly
 *  firstNumber = result
 *  displayValue is emptied
 *  operand get's stored
 * 
 * 



*/