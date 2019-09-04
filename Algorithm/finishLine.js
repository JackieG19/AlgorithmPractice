/*      Finish Line
2.0 Increase deck to 54 (2 Jokers)
    - restricted cards: J, Q, K, A, 2, Jk - cannot be first/last 3 cards
    - deck[0][1][2] == J, Q, K, A, 2, Jk;
    - deck[53][52][51] == J, Q, K, A, 2, Jk;
        remove those cards and randomly back in the middle of the deck

2.1 create a two dice
    - 1 red: corresponds to the red suits (hearts and diamonds)
    - 1 black: corresponds to the black suits (spades and clubs)

2.2 Each player has 3 marker

2.3 Moving is updated
    - both dice are rolled the combine value is the stop value
        any marker that moves during the turn may not move beyond a card with that stop value

    - the player picks a marker to move:
        chooses one of the markers to move the number of spaces specified by one of the dice.
        Then chooses a marker (the same one, or a different one) to move the number of spaces specified by the second die

    - allow the player to pick any marker to move the second die spaces folllowing the same rules
    - if the first marker was stopped by the stop value they cannot be selected for the second dice

2.4 Detect when all 3 marker of a player pass the finish line
2.5 Ensure that a marker must land on the last card specifically
2.6 Allow up to 4 players
*/


const decks = [["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13", "JK"],
["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "JK"],
["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13", "JK"],
["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "JK"]]

var fulldeck = decks.flat();
var deckLength = fulldeck.length;


function deckShuffle(){
    for(var i = 0; i < deckLength; i++){
        var randomIndex = Math.floor(Math.random() * deckLength);
        var randomElement = fulldeck[randomIndex];
        console.log(randomElement);
    }

}
console.log(deckShuffle());


const players = ["PL1", "PL2", "PL3", "PL4"];
const marker = ["1st", "2nd", "3rd"];

var blackDice = [1, 2, 3, 4, 5, 6];
var redDice = [1, 2, 3, 4, 5, 6];

function rollDice(){
    blackDice = Math.floor(Math.random()* 6);
    redDice = Math.floor(Math.random()* 6);
    console.log("red dice:", redDice, "black dice:", blackDice);

    var dicesValue = blackDice + redDice;
    console.log("Total dice value:", dicesValue);
}
console.log(rollDice());


function move(){
    var suitsValue = parseFloat(fulldeck);
    console.log(suitsValue);
}
console.log(move());
