// Maddox Cullimore / 4-19-2024 / JS Evidence Simple Calculator

//Input
const username = prompt('What is your name?');
const date = prompt('What is the date?');
const pjName = 'JS Simple Calculator';
const firstNum = parseInt(prompt('Enter the first number'));
const secondNum = parseInt(prompt('Enter the second number'));


//Process

//Addition
const add= firstNum+secondNum;
//Subtraction
const sub=firstNum-secondNum;
//Multiplication
const mult= firstNum*secondNum;
//Division
const div= firstNum/secondNum;

const addString= `${firstNum} + ${secondNum} = ${add}`;
const subString= `${firstNum} - ${secondNum} = ${sub}`;
const multString= `${firstNum} * ${secondNum} = ${mult}`;
const divString= `${firstNum} / ${secondNum} = ${div}`;

//Output
console.log(username);
console.log(date);
console.log(pjName);
console.log(addString);
console.log(subString);
console.log(multString);
console.log(divString);
