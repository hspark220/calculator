let displayValue = [];
let firstNumber = null;
let secondNumber = null;
let operand = null;

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
const nt = document.querySelector('#nt');
const nerd = document.querySelector('#nerd');
const bs = document.querySelector('#bs');

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
const divide = (num1, num2) => {
    if (num2 == 0) {
        return 'nice try nerd';
    }
    return num1/num2;
} 

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


const popDisplayNum = (e) => {
    if (displayValue.length > 13) {
        display.textContent = 'too long nerd';
        return;
    }

    const value = e.target.id[1];
    displayValue.push(value);
    display.textContent = displayValue.join('');
}

const addPoint = () => {
    if (displayValue.length > 13) {
        display.textContent = 'too long nerd';
        return;
    }
    if (displayValue.includes('.')) {
        display.textContent = 'two decimal points, nerd';
        return;
    }
    console.log(displayValue)
    displayValue.push('.');
    display.textContent = displayValue.join('');
}

const clearDisplayBtn = (e) => {
    displayValue = [];
    display.textContent = displayValue.join('');
    firstNumber = null;
    secondNumber = null;
    operand = null;
}

const backspace = () => {
    displayValue.pop();
    display.textContent = displayValue.join('');
}


const operation = (e) => {
    if (displayValue.length > 13) {
        display.textContent = 'too long nerd';
        return;
    }

    if(firstNumber == null) {
        operand = e.target.id;
        operate(); 
    } else {
        operate();
        operand = e.target.id;
    }
    
    
}

const operate = (e) => {
    if(displayValue.length < 1 || displayValue == undefined) {return;}
    if (displayValue.length > 13) {
        display.textContent = 'too long nerd';
        return;
    }


    if (firstNumber == null) {
        firstNumber = +displayValue.join('');
        displayValue = [];
    } else {
        secondNumber = +displayValue.join('');
        const result = operator(operand, firstNumber, secondNumber);
        console.log(result);
        if (result > 10000000000000) {
            display.textContent = 'too long nerd';
            return;
        }

        display.textContent = result;
        firstNumber = result == 'nice try nerd' ? null : result;
        displayValue = [];
    }
    console.log(`first: ${firstNumber}`);
    console.log(`second: ${secondNumber}`);
}

const niceTry = () => {
    display.textContent = 'nice try';
}

const nerdBtn = () => {
    display.textContent = 'nerd';
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
dPointBtn.addEventListener('click', addPoint);
bs.addEventListener('click', backspace);

multiplyBtn.addEventListener('click', operation);
divideBtn.addEventListener('click', operation);
subtractBtn.addEventListener('click', operation);
addBtn.addEventListener('click', operation);

nt.addEventListener('click', niceTry);
nerd.addEventListener('click', nerdBtn);


