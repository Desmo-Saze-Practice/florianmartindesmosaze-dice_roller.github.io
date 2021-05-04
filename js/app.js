// get random number function
let getRandomNumber = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let diceThrow = function () {
    /**
     * PLAYER
     */
    let diceResultPlayer = getRandomNumber(0, 6);
    console.log(diceResultPlayer + 1);
    const dicePositionPlayer = diceResultPlayer * (-100);

    // creat div element
    const dicePlayerElement = document.createElement('div');

    // add class 'dice' to this previously created div
    dicePlayerElement.className = 'dice';

    // add that div to DOM
    const playerElement = document.getElementById('player');
    playerElement.appendChild(dicePlayerElement);

    // change dice number according to dice roll using background position
    dicePlayerElement.style.backgroundPositionX = dicePositionPlayer + 'px';

    /**
     * DEALER
     */
     let diceResultDealer = getRandomNumber(0, 6);
     console.log(diceResultDealer + 1);
     const dicePositionDealer = diceResultDealer * (-100);

    // creat div element
    const diceDealerElement = document.createElement('div');

    // add class 'dice' to this previously created div
    diceDealerElement.className = 'dice';

    // add that div to DOM
    const dealerElement = document.getElementById('dealer');
    dealerElement.appendChild(diceDealerElement);

    // change dice number according to dice roll using background position
    diceDealerElement.style.backgroundPositionX = dicePositionDealer + 'px';


}


// set fiel for second player
const dealerDivElement = document.createElement('div');
dealerDivElement.className = 'board';

const boardElement = document.getElementById('app');
boardElement.appendChild(dealerDivElement);
dealerDivElement.setAttribute("id", "dealer");

// user defines dice number
let howManyDice = parseInt(prompt('How many dice would you like to throw ?'));

for (diceIndex = 0; diceIndex < howManyDice; diceIndex++) {
    diceThrow();
}

const log = function (varriable) {
    console.log(varriable);
}

