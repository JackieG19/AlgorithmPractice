/*   High and Low
process round function
accept (current card (int), guess (str or int))
input : current card interger value of a card  2-10  11-13
guess : accecpt either str "high" or "low" || int 0 or 1 to respresent high low

1.0 compare current card and guess against a static value return win, loss, draw depending on round
*/

// current card value = 2, 3, 4, 5, 6, 7, 8, 9, 10 - 11, 12, 13 (jack, queen, king)

var nextCard = 2;
var currentcard = 5;

if(nextCard > currentcard){ // if the current card in higher than the next card
    return ;
}
else{
    return false;
}


    // if(currentcard == nextCard){ // if the current card is equal to the next card
    //     console.log("Draw");
    // }
    // if(currentcard < nextCard){ // if the current car is lesser than the next card
    //     console.log("too low");
    // }
//}

// var nextCard = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// var low = nextCard[0];

// var high = nextCard[0];
// var l = nextCard.length;

// for (var i = 1; i < l; i++) {
//     if (nextCard[i] > high) {
//         high = nextCard[i];
//         //console.log( nextCard[i]); // 2
//     }

//     else if (nextCard[i] < low) {
//         low = nextCard[i];
//       // console.log( nextCard[i]); // undefined
//     }
// }
