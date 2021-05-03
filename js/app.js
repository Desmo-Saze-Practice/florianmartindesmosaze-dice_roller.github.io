// get random number function
let getRandomNumber = function (min, max) {
    return Math.round(Math.random()*(max-min)+min);
}

let diceNumber = getRandomNumber(1,6);
diceNumber*=(-100);
console.log(diceNumber);

// creat div element
const diceDivElement = document.createElement('div');

// add class 'dice' to this previously created div
diceDivElement.className = 'dice';

// add that div to DOM
const playerElement = document.getElementById('player');
playerElement.appendChild(diceDivElement);

// change dice number according to dice roll using background position
diceDivElement.style.backgroundPositionX = diceNumber+'px';


// let test = getRandomNumber(1,6);
// console.log(test);