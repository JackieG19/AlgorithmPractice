/*      BEST HAND
- take the hands at 7 cards count up the values and award a winner
- function (player 1 , player 2)
- each player contains a hand this can either be an array of 7 cards or a object(class) with other attributes
- each card is an object {suit : 0-3 or class value: 2-14}

1.0 create a function to tabulate the hands and pick a winner based on the highest total
1.1 randomize the two hands
1.2 ensure the randomizer does not pick a card already picked note is the current way to pick a new card the best system?
0.1 create a deck (array, object)
0.2 create a deck shuffle function
0.3 crate a way to "draw" a card
1.3 use the deck to create two hands
*/


// var player1 = [7, 4, 9, 12, 9, 11, 8]; // 60
// var player2 = [10, 7, 5, 9, 6, 8, 12]; // 57
// hits the third console.log = player1 wins!!

// var player1 = [7, 4, 9, 12, 9, 11, 8]; // 60
// var player2 = [7, 4, 9, 12, 9, 11, 8]; // 60
// hits the second console.log = DRAW! both players lose.

var player1 = [10, 7, 5, 9, 6, 8, 12];
var player2 = [7, 4, 9, 12, 9, 11, 8];
// hits the first console.log = player2 wins!!

for (var i = 0, sum1 = 0; i < player1.length; sum1 += player1[i++]);
for (var i = 0, sum2 = 0; i < player2.length; sum2 += player2[i++]);

if(sum1 < sum2 || sum2 > sum1){
    sum1 = "player2 wins!!";
    console.log(sum1);
}

if(sum1 == sum2 || sum2 == sum1){
    sum1 = "DRAW! both players lose.";
    console.log(sum1);
}

if(sum1 > sum2 || sum2 < sum1){
    sum1 = "player1 wins!";
    console.log(sum1);
}
