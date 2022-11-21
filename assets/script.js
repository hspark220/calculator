let displayValue = [];

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

const lcdDisplay = document.querySelector('.lcd-display');
const display = document.createElement('p');
display.textContent = displayValue.toString();
lcdDisplay.appendChild(display);

const add = (num1, num2) => num1+num2;
const subtract = (num1, num2) => num1-num2;
const multiply = (num1, num2) => num1*num2;
const divide = (num1, num2) => num1/num2;

const operator = (operation, num1, num2) => operation(num1,num2);

const popDisplayNum = (e) => {
    const value = e.target.id[1];
    displayValue.push(value);
    display.textContent = displayValue.join('');
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
