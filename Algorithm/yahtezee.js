/*      Yahtezee : roll dice
*1.0 create a function to roll a six sided dice
*1.1 create a function to roll 5 dices
1.2 create a game loop to roll all dice 3 times

1.3 allow the user to pick a dice to re-roll (do not need re-roll yet: print out chosen dice value)
1.4 allow the user to give you multipule dice to re-roll (same as above)
1.5 allow to roll a set number of dice

1.6 allow the player to roll the dice 3 times
- after each roll ask the player for dice to re-roll
- and re-roll the dice

1.7 display only the newly rolled dice
1.8 ensure previous dice are displayed
1.9 BONUS: if player ever has a yahtezee, display it
*/

var dice = [1, 2, 3, 4, 5, 6];

function diceRoll() {
    for(var i = 0; i < dice.length; i++){
        var random = dice[Math.floor(Math.random()* 6)]; // get a random number

        var fiveDice = [];
        for (var i = 0; i < 5; i++){
            fiveDice.push(Math.floor(Math.random() * 6)); // get an array of random number
        }
        return fiveDice;
    }
    return random;
}
console.log(diceRoll());


