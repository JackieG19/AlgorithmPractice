/*      Deck Race
*1.0 Create a deck of 28 cards (A -7)
*1.1 Create a 6 sided dice
*1.2 Shuffle the deck

1.3 Confirm the first 2 cards and the last 2 cards are not an 'A', '2', '6', '7'
1.4 Create two players at position -1
1.5 Roll the dice the player to the first card equal to or higher then the value rolled
1.6 Cycle the game between the two players until one reaches the last card
*/

const decks = [[1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7]];

var fulldeck = decks.flat();
var deckLength = fulldeck.length;

const dice = [1, 2, 3, 4, 5, 6];

function rollDice() {
    for(var i = 0; i < dice.length; i++){
        var random = dice[Math.floor(Math.random()* 6)]; // get a random number
    }
    return random;
}
console.log(rollDice());


const newDeck = [];

function shuffleDeck(){
    for(var i = 0; i < deckLength; i++){
        var randomNum = fulldeck[Math.floor(Math.random() * deckLength)];
        var randomizeDeck = fulldeck[randomNum];
        newDeck.push(randomizeDeck);
    }
    return newDeck;
}
console.log(shuffleDeck());


function firstandlast(shuffleDeck){
    // when the deck is shuffled make sure there is not 'A', '2', '6', '7'
    // use the split method to remove the first/last card and place them randomly back into the deck
    if(newDeck[0] == 1){     // 2 || 6 || 7){
        newDeck[0].split();
    }
}
console.log(firstandlast(shuffleDeck()));
