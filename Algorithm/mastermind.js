/*  Master Mind
create a function that takes the following
guess(str)      code(str)
compare the guess against the code and return [int, int]
array [0] represents the number of correct chars that are in the code
array [1] represents the # of items in the correct position

1.0 4 char code guessable items or 1,2,3,4
1.2 accept an 8 char code accept any numerical values
2.0 create an encompassing function that tracks # of guesses and gives game over when fail
2.1 return win if guess correct
*/

// sort method / indexOf / forEach
/*
func(str){
    str = "hi";
}

astr = "hi";
console(astr)

func(astr)
console(atr)
*/


// const first = ["2", "3", "1", "4"];
// const second = ["5", "1", "2", "6"];

// function compare(a, b) {
//     var matches = [];

//     for ( var i = 0; i < a.length; i++ ) {
//         for ( var e = 0; e < b.length; e++ ) {
//             if(a[i] === b[e])matches.push(a[i]);
//         }
//     }
//     return matches;
// }
// compare(first, second);



const first = ["1", "3", "2", "4"];
const second = ["5", "1", "2", "6"];

function compare(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if (a[i] === b[e]){
             first.indexOf(a[i]) == second.indexOf(b[e]);
            }
            else{
                return matches.push(a[i]); // 1
            }
        }
    }
}
compare(first, second); // [1, 2]
