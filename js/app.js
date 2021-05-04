const game = {
    min: 0,
    max: 6,
    playerZoneId: 'player',
    dealreZoneId: 'dealer',
    welcomeMessage: 'How many dice would you like to throw ?',

    getRandomNumber: function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },

    resetBoard: function () {
        let playerBoard = document.getElementById(game.playerZoneId);
        playerBoard.innerHTML = '';
        
        let dealerBoard = document.getElementById(game.dealreZoneId);
        dealerBoard.innerHTML = '';
    },

    throwDice: function (zone) {
        /**
         * PLAYER
         */
        let diceResultPlayer = game.getRandomNumber(game.min, game.max);
        console.log(diceResultPlayer + 1);
        const dicePositionPlayer = diceResultPlayer * (-100);
    
        // creat div element
        const dicePlayerElement = document.createElement('div');
    
        // add class 'dice' to this previously created div
        dicePlayerElement.className = 'dice';
    
        // add that div to DOM
        const playerElement = document.getElementById(zone);
        playerElement.appendChild(dicePlayerElement);
    
        // change dice number according to dice roll using background position
        dicePlayerElement.style.backgroundPositionX = dicePositionPlayer + 'px';
    },

    play: function () {
        game.resetBoard();
    
        // user defines dice number
        let howManyDice = parseInt(prompt(game.welcomeMessage));
        
        for (diceIndex = 0; diceIndex < howManyDice; diceIndex++) {
            game.throwDice(game.playerZoneId);
            game.throwDice(game.dealreZoneId);
        }
    }
}


//  start game
document.addEventListener("DOMcontentLoaded", game.play());