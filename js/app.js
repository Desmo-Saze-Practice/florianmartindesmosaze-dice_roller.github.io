const game = {
    min: 1,
    max: 6,
    playerZoneId: 'player',
    dealreZoneId: 'dealer',
    // welcomeMessage: 'How many dice would you like to throw ?',
    howManyDice: 1,

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
        console.log(diceResultPlayer);
        const dicePositionPlayer = (diceResultPlayer-=1) * (-100);
    
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
        // let howManyDice = parseInt(prompt(game.welcomeMessage));
        // const diceButtonValue = document.getElementById('diceNumber').value;

        
        for (diceIndex = 0; diceIndex < game.howManyDice; diceIndex++) {
            game.throwDice(game.playerZoneId);
            game.throwDice(game.dealreZoneId);
        }
    },
}

//  start game
const formElement = document.getElementById('config');

formElement.addEventListener('submit', function(event) {
    event.preventDefault();

    // gets number input value to create equal number of dice
    diceNUmberElement = document.getElementById('diceInput');
    game.howManyDice = parseInt(diceNUmberElement.value);

    // let playButtonElement = document.getElementById('playButton');
    // playButtonElement.addEventListener('click', game.play);

    game.play();
})
